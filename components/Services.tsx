// components/Services.tsx
import Image from "next/image";

type Service = {
  id: string;
  slug: string;
  title: string;
  description: string;
  image: string;
};

const services: Service[] = [
    {
    id: "01",
    slug: "partner-with-us",
    title: "Partner With Us",
    description:
      "Are you an experienced cleaning contractor or cleaning business? Partner with Minta Group and work with us across commercial, residential, and specialised cleaning projects.",
    image: "/services/labour_hire.webp",
  },
  {
    id: "02",
    slug: "offices",
    title: "Offices & Corporate",
    description:
      "Recurring and one-off cleaning for offices and workspaces – desks, kitchens, amenities, and common areas.",
    image: "/services/offices.webp",
  },
  {
    id: "03",
    slug: "hospitality",
    title: "Hospitality & Accommodation",
    description:
      "Hotels, motels, serviced apartments, and short-stay properties with guest-ready presentation.",
    image: "/services/hospitality.webp",
  },
  {
    id: "04",
    slug: "warehouse",
    title: "Warehouses & Factories",
    description:
      "High-traffic industrial and logistics sites – floors, amenities, and staff areas.",
    image: "/services/warehouse.webp",
  },
  {
    id: "05",
    slug: "post_construction",
    title: "Builders’ & Post-Construction Clean",
    description:
      "Detail-focused cleans after construction or renovation, ready for handover and inspections.",
    image: "/services/post_construction.webp",
  },
  {
    id: "06",
    slug: "childcare_medical",
    title: "Childcare, Aged Care & Medical",
    description:
      "Centres and medical facilities with strict hygiene, safety, and compliance standards.",
    image: "/services/childcare_medical.webp",
  },
  {
    id: "07",
    slug: "homes",
    title: "Homes & End-of-Lease",
    description:
      "Regular house cleaning, deep cleaning, and vacate cleans to meet agent and landlord expectations.",
    image: "/services/homes.webp",
  },
  {
    id: "08",
    slug: "floor_polish",
    title: "Floors, Stripping & Sealing",
    description:
      "Hard floor maintenance, stripping, sealing, and polishing for a long-lasting finish.",
    image: "/services/floor_polish.webp",
  },
  {
    id: "09",
    slug: "solar_gutter",
    title: "Gutters & Solar Panels",
    description:
      "External gutter and solar panel cleaning to protect your property and maintain efficiency.",
    image: "/services/solar_gutter.webp",
  },
  {
    id: "10",
    slug: "gym",
    title: "Gyms & Specialty Sites",
    description:
      "Fitness centres and specialised environments requiring regular sanitisation and tidy presentation.",
    image: "/services/gym.webp",
  },
];

export default function Services() {
  return (
    <div className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
              Our Services
            </p>
            <h2 className="mt-1 text-2xl font-semibold text-slate-900 sm:text-3xl">
              Comprehensive Cleaning Solutions
            </h2>
            <p className="mt-2 max-w-xl text-sm text-slate-600">
              From small offices and homes to multi-site operations across the
              country, we tailor our cleaning plans to match your schedule,
              standards, and budget.
            </p>
          </div>
          <a
            href="#contact"
            className="mt-3 inline-flex w-max items-center justify-center rounded-full border border-slate-300 px-4 py-2 text-xs font-semibold text-slate-800 transition hover:border-emerald-500 hover:text-emerald-700"
          >
            Talk to our team
          </a>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.slug}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-slate-50/60 shadow-sm transition hover:-translate-y-1 hover:border-emerald-500/60 hover:bg-white"
            >
              <div className="relative h-40 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-black/5 to-transparent opacity-70 mix-blend-multiply" />
                <div className="absolute bottom-2 left-3 rounded-full bg-black/60 px-3 py-1 text-[11px] font-medium text-slate-50">
                  {service.id} · {service.title}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-4">
                <h3 className="text-sm font-semibold text-slate-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {service.description}
                </p>
                <div className="mt-3 text-xs font-medium text-emerald-600">
                  Custom checklists & reporting available
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
