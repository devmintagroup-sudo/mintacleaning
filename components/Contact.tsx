export default function Contact() {
  return (
    <div className="bg-slate-900 py-16 text-slate-100 sm:py-20">
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
              team will get back with a tailored cleaning proposal and
              timelines.
            </p>
            <div className="mt-6 space-y-2 text-sm text-slate-200">
              <p>
                <span className="font-semibold">Phone:</span> 0423 401 748
              </p>
              <p>
                <span className="font-semibold">Email:</span>{" "}
                info@mintahomes.com.au
              </p>
              <p>
                <span className="font-semibold">Locations:</span> VIC, NSW, WA,
                TAS, QLD
              </p>
            </div>
          </div>

          <form className="space-y-4 rounded-2xl bg-slate-800 p-6 shadow-lg">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-medium text-slate-200">
                  Name
                </label>
                <input
                  type="text"
                  className="mt-1 w-full rounded-xl border border-slate-600 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none focus:border-emerald-400"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-200">
                  Company
                </label>
                <input
                  type="text"
                  className="mt-1 w-full rounded-xl border border-slate-600 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none focus:border-emerald-400"
                  placeholder="Optional"
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-xs font-medium text-slate-200">
                  Email
                </label>
                <input
                  type="email"
                  className="mt-1 w-full rounded-xl border border-slate-600 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none focus:border-emerald-400"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-200">
                  Phone
                </label>
                <input
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
                rows={4}
                className="mt-1 w-full rounded-xl border border-slate-600 bg-slate-900 px-3 py-2 text-sm text-slate-100 outline-none focus:border-emerald-400"
                placeholder="Tell us about your sites, service types (office, warehouse, home, etc.), and preferred schedule."
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-emerald-400"
            >
              Submit Enquiry
            </button>

            <p className="text-[11px] text-slate-400">
              By submitting, you agree to be contacted about Minta Cleaning
              services. We respect your time and privacy.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
