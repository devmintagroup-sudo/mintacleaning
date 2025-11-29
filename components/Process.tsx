const steps = [
  {
    title: "Consultation",
    description:
      "We discuss your sites, cleaning scope, schedule, and any compliance or security requirements.",
  },
  {
    title: "Proposal & Plan",
    description:
      "You receive a clear quote, scope of work, and start date. We align on checklists and communication.",
  },
  {
    title: "Deployment",
    description:
      "Trained cleaners are allocated to your site(s) with clear instructions and supervision.",
  },
  {
    title: "Ongoing Management",
    description:
      "We handle rosters, training, QA checks, and communication via WhatsApp groups and regular reviews.",
  },
];

export default function Process() {
  return (
    <div className="bg-slate-900 py-16 text-slate-100 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="mb-10 max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
            Our Process
          </p>
          <h2 className="mt-1 text-2xl font-semibold sm:text-3xl">
            A Simple, Transparent Way to Keep Spaces Clean
          </h2>
          <p className="mt-2 text-sm text-slate-300">
            We keep administration low and communication high, so you always
            know who is on site, what&apos;s been done, and what&apos;s next.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="flex gap-4 rounded-2xl bg-slate-800/70 p-5"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-sm font-semibold text-slate-950">
                {index + 1}
              </div>
              <div>
                <h3 className="text-sm font-semibold sm:text-base">
                  {step.title}
                </h3>
                <p className="mt-1 text-xs text-slate-300 sm:text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
