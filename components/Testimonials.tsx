const testimonials = [
  {
    name: "Commercial Office Client",
    quote:
      "Minta Cleaning keeps our offices consistently presentable. The team is reliable, and communication is always clear.",
  },
  {
    name: "Hospitality Partner",
    quote:
      "Turnarounds between guests are smooth and thorough. Their attention to detail has improved our guest feedback.",
  },
  {
    name: "Facility Manager",
    quote:
      "We work across multiple sites and states. Minta makes it simple with one point of contact and strong on-site teams.",
  },
];

export default function Testimonials() {
  return (
    <div className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
              Testimonials
            </p>
            <h2 className="mt-1 text-2xl font-semibold text-slate-900 sm:text-3xl">
              What Our Clients Say
            </h2>
          </div>
          <div className="text-sm text-slate-600">
            Average rating <span className="font-semibold">4.8/5</span> across
            platforms.
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex h-full flex-col rounded-2xl border border-slate-100 bg-slate-50 p-5"
            >
              <div className="text-lg">★★★★★</div>
              <blockquote className="mt-2 text-sm text-slate-700">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-3 text-sm font-semibold text-slate-900">
                {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}
