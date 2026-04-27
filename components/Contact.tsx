"use client";

import { useState } from "react";
import { toast } from "react-hot-toast";
export default function Contact() {
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = new FormData(e.currentTarget);

    const payload = {
      name: String(form.get("name") || ""),
      company: String(form.get("company") || ""),
      email: String(form.get("email") || ""),
      phone: String(form.get("phone") || ""),
      message: String(form.get("message") || ""),
      // honeypot field
      website: String(form.get("website") || ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok || !data.ok) {
        const msg =
          typeof data?.error === "string"
            ? data.error
            : "Please check your input and try again.";

        toast.error(msg);
        return;
      }

      toast.success("Thanks! Your enquiry has been sent.");
      (e.target as HTMLFormElement).reset();
    } catch {
      toast.error("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-slate-900 py-16 text-slate-100 sm:py-20" id="contact">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.2fr,1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
              Contact Us
            </p>
            <h2 className="mt-1 text-2xl font-semibold sm:text-3xl">
              Ready for a Cleaning Partner You Can Rely On?
            </h2>
            <p className="mt-2 text-sm text-slate-300">
              Share your sites, required services, and preferred schedule. Our
              team will get back with a tailored cleaning proposal and timelines.
            </p>
            <div className="mt-6 space-y-2 text-sm text-slate-200">
              <p>
                <span className="font-semibold">Phone:</span>{" "}
                <a className="text-emerald-300 hover:underline pr-2" href="tel:0423401748">
                  0423 401 748,
                </a>
                <a className="text-emerald-300 hover:underline" href="tel:0432364406">
                  0432 364 406
                </a>
              </p>
              <p>
                <span className="font-semibold">Email:</span>{" "}
                 {/* <a
                  className="text-emerald-300 hover:underline"
                  href="mailto:info@mintahomes.com.au"
                >
                  info@mintahomes.com.au
                </a> */}
                <a
                  className="text-emerald-300 hover:underline"
                  href="mailto:mintacleaning7@gmail.com"
                >
                  mintacleaning7@gmail.com
                </a>
              </p>
              <p>
                <span className="font-semibold">Locations:</span> VIC, NSW, WA, TAS, QLD
              </p>
            </div>
          </div>

          <form onSubmit={onSubmit} className="space-y-4 rounded-2xl bg-slate-800 p-6 shadow-lg">
            {/* honeypot (hidden) */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
            />

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-medium text-slate-200">Name</label>
                <input
                  name="name"
                  required
                  type="text"
                  className="mt-1 w-full rounded-xl border border-slate-600 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none focus:border-emerald-400"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-200">Company</label>
                <input
                  name="company"
                  type="text"
                  className="mt-1 w-full rounded-xl border border-slate-600 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none focus:border-emerald-400"
                  placeholder="Optional"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-medium text-slate-200">Email</label>
                <input
                  name="email"
                  required
                  type="email"
                  className="mt-1 w-full rounded-xl border border-slate-600 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none focus:border-emerald-400"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-200">Phone</label>
                <input
                  name="phone"
                  type="tel"
                  className="mt-1 w-full rounded-xl border border-slate-600 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none focus:border-emerald-400"
                  placeholder="04xx xxx xxx"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-200">
                Services / Site Details
              </label>
              <textarea
                name="message"
                required
                rows={4}
                className="mt-1 w-full rounded-xl border border-slate-600 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none focus:border-emerald-400"
                placeholder="Tell us about your sites, service types (office, warehouse, home, etc.), and preferred schedule."
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-emerald-400 disabled:opacity-60"
            >
              {loading ? "Sending..." : "Submit Enquiry"}
            </button>
            <p className="text-[11px] text-slate-400">
              By submitting, you agree to be contacted about Minta Cleaning services.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
