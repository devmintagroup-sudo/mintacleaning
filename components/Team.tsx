// components/Team.tsx
import Image from "next/image";

type TeamMember = {
  name: string;
  role: string;
  phone?: string;
  email?: string;
  image: string;
  summary: string;
};

const team: TeamMember[] = [
  {
    name: "Kalum",
    role: "Director",
    phone: "0423 401 748",
    image: "/meet_team/Kalum.webp",
    summary:
      "Director of Minta Cleaning with 20+ years in the cleaning industry. Oversees training, quality standards and day-to-day operations to ensure every site receives consistent, high-standard results.",
  },
  {
    name: "Ishan",
    role: "Director",
    phone: "0432 364 406",
    image: "/meet_team/Ishan.webp",
    summary:
      "Director of Minta Cleaning with over a decade of hands-on experience, including working as a Facility Manager for a major Australian company. Focused on operational efficiency, client needs and service delivery.",
  },
  {
    name: "Tia",
    role: "Business Development Manager",
    phone: "0452 458 718",
    image: "/meet_team/Tia.webp",
    summary:
      "Business Development Manager with experience as a Marketing Area Manager, business analyst and Account Manager. Specialises in client acquisition, relationship management and tailored cleaning solutions.",
  },
  // {
  //   name: "Lisa",
  //   role: "Business Development Manager",
  //   phone: "0450 740 686",
  //   image: "/meet_team/Lisa.webp",
  //   summary:
  //     "Business Development Manager with a background as a Quantity Surveyor, Estimator and Project Manager. Strong in cost analysis, planning and client management to design efficient, scalable cleaning services.",
  // },
  // {
  //   name: "Sarah",
  //   role: "Business Development Manager",
  //   phone: "0450 703 553",
  //   image: "/meet_team/Sarah.webp",
  //   summary:
  //     "Business Development Manager with a strong understanding of Australian laws and regulations. Ensures clients receive compliant, high-quality cleaning services aligned with consumer, WHS and environmental standards.",
  // },
  {
    name: "Liah",
    role: "Cleaning Sales Manager",
    email: "liah.mintacleaning@gmail.com",
    image: "/meet_team/Liah.webp",
    summary:
      "Cleaning Sales Manager focused on tailored cleaning solutions, seamless communication and competitive pricing. Works closely with clients across residential, commercial and industrial sites to design the right service plan.",
  },
];

export default function Team() {
  return (
    <div className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 lg:px-6">
        <div className="mb-10 max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-600">
            Meet Our Team
          </p>
          <h2 className="mt-1 text-2xl font-semibold text-slate-900 sm:text-3xl">
            People Behind Minta Cleaning
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            A leadership and sales team with deep experience in cleaning,
            facilities, sales and client care – backed by on-site supervisors
            and front-line cleaners across Australia.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {team.map((member) => (
            <article
              key={member.name}
              className="flex flex-col gap-3 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"
            >
              <div className="flex items-center gap-4">
                <div className="relative h-14 w-14 overflow-hidden rounded-full bg-slate-100">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="56px"
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-slate-900">
                    {member.name}
                  </h3>
                  <p className="text-xs font-medium text-emerald-600">
                    {member.role}
                  </p>

                  <div className="mt-1 text-xs text-slate-600 space-y-0.5">
                    {member.phone && (
                      <p>
                        <span className="font-semibold">Phone:</span>{" "}
                        <a
                          href={`tel:${member.phone.replace(/ /g, "")}`}
                          className="text-emerald-600 hover:underline"
                        >
                          {member.phone}
                        </a>
                      </p>
                    )}

                    {member.email && (
                      <p>
                        <span className="font-semibold">Email:</span>{" "}
                        <a
                          href={`mailto:${member.email}`}
                          className="text-emerald-600 hover:underline"
                        >
                          {member.email}
                        </a>
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <p className="text-sm text-slate-600">{member.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
