const Section10 = () => {
  return (
    <section className="relative overflow-hidden bg-[#f7faff] px-5 py-12 sm:px-8 sm:py-16 lg:px-16 lg:py-24">
      <div className="pointer-events-none absolute -left-24 top-24 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-cyan-100/60 blur-3xl" />

      <div className="relative mx-auto w-full max-w-none">
        <div className="relative isolate overflow-hidden border-b border-blue-900/20 bg-gradient-to-br from-[#061f59] via-[#073b91] to-[#0b63b8] px-5 py-9 shadow-lg shadow-blue-950/10 sm:px-8 sm:py-12 lg:px-16 lg:py-14">
          <div className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full border border-white/10 bg-white/5 blur-sm" />
          <h2 className="relative max-w-5xl text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
            Automotive SEO Case Study: Auto Repair Business
          </h2>
        </div>

        <div className="w-full space-y-12 bg-white px-5 py-10 sm:px-8 sm:py-14 lg:space-y-16 lg:px-16 lg:py-20">
          <article className="grid gap-5 border-b border-slate-200 pb-10 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-16 lg:pb-14">
            <h3 className="text-xl font-bold text-[#072d7f] sm:text-2xl">
              The Challenge
            </h3>
            <p className="max-w-4xl text-base leading-8 text-slate-700 sm:text-lg">
              An independent auto repair business wanted greater visibility for local service searches and more opportunities from customers actively looking for repairs.
            </p>
          </article>

          <article className="grid gap-5 border-b border-slate-200 pb-10 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-16 lg:pb-14">
            <h3 className="text-xl font-bold text-[#072d7f] sm:text-2xl">
              Our Approach
            </h3>
            <div className="max-w-4xl space-y-5 text-base leading-8 text-slate-700 sm:text-lg">
              <p>
                We developed a local SEO campaign around individual services, including diagnostics, brake repair, AC services, maintenance, and other relevant automotive searches.
              </p>
              <p>
                The campaign included technical optimization, service-page SEO, local keyword targeting, Google Business Profile optimization, citations, local content, internal linking, and competitor analysis.
              </p>
            </div>
          </article>

          <article className="grid gap-5 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-16">
            <h3 className="text-xl font-bold text-[#072d7f] sm:text-2xl">
              Results
            </h3>
            <div className="max-w-4xl">
              <p className="text-base leading-8 text-slate-700 sm:text-lg">
                The campaign established a stronger local search foundation and created dedicated pages capable of targeting individual service searches.
              </p>
              <p className="mt-6 text-base font-semibold leading-7 text-slate-900 sm:text-lg">
                Verified campaign metrics:
              </p>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {[
                  "Organic traffic: 5,678",
                  "Local impressions: 33,678",
                  "First-page keywords: 29",
                  "Organic calls: 67 to 70",
                  "Appointment requests: 62%",
                ].map((metric) => (
                  <li
                    key={metric}
                    className="flex items-center gap-3 border-b border-blue-100 py-3 text-base font-medium text-slate-700 sm:text-lg"
                  >
                    <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-blue-600" />
                    {metric}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default Section10;
