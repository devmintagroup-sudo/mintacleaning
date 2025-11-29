const reasons = [
  {
    title: "Licensed & Compliant",
    description:
      "We work in line with Australian workplace, safety, and cleaning standards, with appropriate insurances in place.",
  },
  {
    title: "Flexible & Scalable",
    description:
      "From single sites to multi-state operations, we scale your cleaning team without adding HR or payroll overheads.",
  },
  {
    title: "Experienced Team",
    description:
      "Directors and managers with decades of combined experience in cleaning, facilities management, and operations.",
  },
  {
    title: "Clear Communication",
    description:
      "Dedicated WhatsApp groups and agreed reporting so you’re never guessing what’s happening on site.",
  },
  {
    title: "Transparent Pricing",
    description:
      "Straightforward quotes and recurring schedules with no hidden surprises.",
  },
  {
    title: "Nationwide Coverage",
    description:
      "Support across VIC, NSW, WA, TAS, and QLD with local teams and central coordination.",
  },
];

export default function WhyUs() {
  return (
    <div className="bg-slate-900 py-16 text-slate-100 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="mb-10 max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-400">
            Why Choose Minta Cleaning
          </p>
          <h2 className="mt-1 text-2xl font-semibold sm:text-3xl">
            A Partner You Can Trust With Your Space
          </h2>
          <p className="mt-2 text-sm text-slate-300">
            We combine hands-on experience with structured processes so your
            cleaning service feels reliable, consistent, and easy to manage.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {reasons.map((item, index) => (
            <div
              key={item.title}
              className="flex gap-4 rounded-2xl bg-slate-800/70 p-5 border border-slate-700/60"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 text-sm font-semibold text-slate-950">
                {String(index + 1).padStart(2, "0")}
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white sm:text-base">
                  {item.title}
                </h3>
                <p className="mt-1 text-xs text-slate-300 sm:text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
