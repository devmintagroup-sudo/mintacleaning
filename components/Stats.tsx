const stats = [
  {
    label: "Sites serviced",
    value: "160+",
    detail: "Offices, homes, warehouses, medical, and more.",
  },
  {
    label: "Client satisfaction",
    value: "98%",
    detail: "Long-term relationships built on trust and results.",
  },
  {
    label: "Support",
    value: "24/7",
    detail: "On-call managers for urgent needs and after-hours work.",
  },
];

export default function Stats() {
  return (
    <div className="bg-slate-950 py-12 text-slate-100 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-semibold text-emerald-400">
                {stat.value}
              </div>
              <div className="mt-1 text-sm font-medium text-slate-100">
                {stat.label}
              </div>
              <p className="mt-1 text-sm text-slate-400">{stat.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
