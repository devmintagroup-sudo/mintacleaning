import nodemailer from "nodemailer";
import { z } from "zod";
import sanitizeHtml from "sanitize-html";

const ContactSchema = z.object({
  name: z.string().min(2, "Name is required").max(80, "Name is too long"),
  company: z.string().max(120, "Company name is too long").optional().or(z.literal("")),
  email: z.string().email("Please enter a valid email address").max(160, "Email is too long"),
  phone: z.string().max(40, "Phone number is too long").optional().or(z.literal("")),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message is too long"),
  website: z.string().max(0).optional().or(z.literal("")),
});

function cleanText(input: string) {
  const stripped = sanitizeHtml(input, { allowedTags: [], allowedAttributes: {} });
  if (/[\r\n]/.test(stripped)) throw new Error("Invalid characters detected.");
  return stripped.trim();
}

function zodToFriendlyMessage(err: z.ZodError) {
  const first = err.issues?.[0];
  if (!first) return "Please check your input and try again.";

  const field = String(first.path?.[0] ?? "").toLowerCase();
  const label =
    field === "name"
      ? "Name"
      : field === "company"
      ? "Company"
      : field === "email"
      ? "Email"
      : field === "phone"
      ? "Phone"
      : field === "message"
      ? "Message"
      : "Field";

  return `${label}: ${first.message}`;
}

function looksMalicious(text: string) {
  const lower = text.toLowerCase();
  const bad = [
    "<script",
    "javascript:",
    "data:text/html",
    "onerror=",
    "onload=",
    "document.cookie",
    "window.location",
  ];
  if (bad.some((b) => lower.includes(b))) return true;

  const links = (text.match(/https?:\/\/|www\./gi) || []).length;
  if (links >= 4) return true;

  return false;
}

const RATE: Record<string, { ts: number; count: number }> = {};
function rateLimit(ip: string) {
  const now = Date.now();
  const windowMs = 60_000;
  const max = 6;

  const entry = RATE[ip];
  if (!entry || now - entry.ts > windowMs) {
    RATE[ip] = { ts: now, count: 1 };
    return;
  }
  entry.count++;
  if (entry.count > max) throw new Error("Too many requests. Please try again in a minute.");
}

function assertMailEnv() {
  const required = ["MAIL_HOST", "MAIL_PORT", "MAIL_USER", "MAIL_PASS", "MAIL_FROM", "MAIL_TO"] as const;
  for (const key of required) {
    if (!process.env[key]) {
      throw new Error("Email service is not configured. Please try again later.");
    }
  }
}

export async function POST(req: Request) {
  try {
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";

    rateLimit(ip);

    const raw = await req.json();

    const parsedResult = ContactSchema.safeParse(raw);
    if (!parsedResult.success) {
      return Response.json(
        { ok: false, error: zodToFriendlyMessage(parsedResult.error) },
        { status: 400 }
      );
    }

    const parsed = parsedResult.data;

    if (parsed.website && parsed.website.length > 0) {
      return Response.json({ ok: true });
    }

    const name = cleanText(parsed.name);
    const company = cleanText(parsed.company ?? "");
    const email = cleanText(parsed.email);
    const phone = cleanText(parsed.phone ?? "");
    const message = cleanText(parsed.message);

    if (looksMalicious(`${name} ${company} ${email} ${phone} ${message}`)) {
      return Response.json(
        { ok: false, error: "Your message looks unsafe. Please remove links/scripts and try again." },
        { status: 400 }
      );
    }

    assertMailEnv();

    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: Number(process.env.MAIL_PORT),
      secure: Number(process.env.MAIL_PORT) === 465,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    // ✅ NEW: Verify SMTP connection (gives clear error in terminal)
    try {
      await transporter.verify();
    } catch (e) {
      console.error("SMTP VERIFY FAILED:", e);
      throw new Error("Email login failed. Please check MAIL_USER/MAIL_PASS (App Password).");
    }

    await transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: process.env.MAIL_TO,
      replyTo: email,
      subject: `New Quote Request — ${name}${company ? ` (${company})` : ""}`,
      text: `New Contact Form Submission

Name: ${name}
Company: ${company || "-"}
Email: ${email}
Phone: ${phone || "-"}
Message:
${message}
`,
    });

    await transporter.sendMail({
      from: process.env.MAIL_FROM,
      to: email,
      subject: "We received your enquiry — Minta Cleaning",
      text: `Hi ${name},

Thanks for reaching out. We’ve received your enquiry and our team will get back to you with a tailored quote.

If you need to add anything, reply to this email.

— Minta Cleaning
`,
    });

    return Response.json({ ok: true });
  } catch (err: any) {
    // ✅ NEW: log the real error to the server terminal
    console.error("CONTACT API ERROR:", err);

    const msg = typeof err?.message === "string" ? err.message : "";

    if (
      msg.includes("Too many requests") ||
      msg.includes("Invalid characters") ||
      msg.includes("not configured") ||
      msg.includes("unsafe") ||
      msg.includes("Email login failed")
    ) {
      return Response.json({ ok: false, error: msg || "Request failed." }, { status: 400 });
    }

    return Response.json(
      { ok: false, error: "Could not send your enquiry right now. Please try again shortly." },
      { status: 500 }
    );
  }
}
