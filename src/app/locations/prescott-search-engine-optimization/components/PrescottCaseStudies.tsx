const caseStudies = [
  {
    number: "01",
    title: "Case Study 1: Local SEO and Organic Visibility",
    fields: [
      ["Client", "[Coming Soon]"],
      ["Challenge", "[Coming Soon]"],
      ["Strategy", "[Coming Soon]"],
      ["Results", "[Coming Soon]"],
    ],
    metrics: [
      "Organic clicks: [Coming Soon]",
      "Search impressions: [Coming Soon]",
      "Qualified inquiries: [Coming Soon]",
      "Local ranking improvements: [Coming Soon]",
    ],
    takeaway:
      "Key takeaway: Explain which activities contributed to the observed changes and any other factors that may have influenced performance.",
  },
  {
    number: "02",
    title: "Case Study 2: Website Optimization and Lead Generation",
    fields: [
      ["Client", "[Coming Soon]"],
      ["Challenge", "[Coming Soon]"],
      ["Strategy", "[Coming Soon]"],
      ["Results", "[Coming Soon]"],
    ],
    metrics: [
      "Organic sessions: [Coming Soon]",
      "Organic conversion rate: [Coming Soon]",
      "Qualified leads: [Coming Soon]",
      "Technical improvements completed: [Coming Soon]",
    ],
    takeaway:
      "Key takeaway: Describe how the improvements supported the client's business objectives without attributing every change solely to SEO unless the evidence supports that conclusion.",
  },
];

export default function PrescottCaseStudies() {
  return (
    <section className="relative bg-white text-black">
      {/* Subtle grid used by the Alexandria case-study sections */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(black 1px, transparent 1px), linear-gradient(90deg, black 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          backgroundPosition: "center top",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24">
        <header className="mb-12 border-b-2 border-black pb-8 md:mb-16">
          <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-[0.2em] text-[#0033CC] sm:text-sm">
            Verified Performance
          </p>
          <h2 className="max-w-5xl text-4xl font-semibold leading-[0.95] tracking-tighter md:text-6xl lg:text-6xl">
            SEO Case Studies: Real Results, Measured Transparently
          </h2>
          <p className="mt-6 max-w-4xl text-lg leading-relaxed text-[#333333] md:text-xl">
            Our case studies demonstrate how a structured SEO strategy can address real business challenges. Each published case study should use verified client data, explain the work performed, and distinguish measurable results from estimates.
          </p>
        </header>

        <div className="space-y-20 md:space-y-28">
          {caseStudies.map((study) => (
            <article key={study.number} className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
              {/* Left column: case identifier and metadata */}
              <aside className="md:col-span-4 md:space-y-10">
                <div className="relative">
                  <span
                    aria-hidden="true"
                    className="absolute -left-4 -top-16 -z-10 select-none text-[10rem] font-semibold leading-none text-[#0033CC] opacity-10 md:text-[14rem]"
                  >
                    {study.number}
                  </span>
                  <p className="font-mono text-xs uppercase tracking-widest text-[#0033CC]">
                    Case {study.number}
                  </p>
                  <h3 className="relative z-10 pt-3 text-2xl font-medium leading-tight tracking-tight md:pt-5 md:text-3xl">
                    {study.title}
                  </h3>
                </div>

                <dl className="space-y-0 font-mono text-xs uppercase tracking-widest">
                  {study.fields.map(([label, value]) => (
                    <div key={label} className="border-b border-black/20 py-4">
                      <dt className="mb-2 text-[#666666]">{label}</dt>
                      <dd className="font-sans text-base font-medium normal-case tracking-normal text-black">
                        {value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </aside>

              {/* Right column: results details in the Alexandria case-study style */}
              <div className="md:col-span-8 md:space-y-12">
                <section>
                  <div className="mb-5 flex items-baseline gap-6">
                    <span className="whitespace-nowrap font-mono text-xs uppercase tracking-widest text-[#0033CC]">
                      Challenge
                    </span>
                    <div className="h-px flex-1 bg-black" />
                  </div>
                  <p className="max-w-3xl text-xl font-medium leading-snug tracking-tight text-black md:text-2xl">
                    [Coming Soon]
                  </p>
                </section>

                <section>
                  <div className="mb-5 flex items-baseline gap-6">
                    <span className="whitespace-nowrap font-mono text-xs uppercase tracking-widest text-[#0033CC]">
                      SEO Strategy
                    </span>
                    <div className="h-px flex-1 bg-black" />
                  </div>
                  <p className="max-w-3xl text-xl font-medium leading-snug tracking-tight text-black md:text-2xl">
                    [Coming Soon]
                  </p>
                </section>

                <section>
                  <div className="mb-5 flex items-baseline gap-6">
                    <span className="whitespace-nowrap font-mono text-xs uppercase tracking-widest text-[#0033CC]">
                      Results
                    </span>
                    <div className="h-px flex-1 bg-black" />
                  </div>
                  <ul className="grid gap-x-8 sm:grid-cols-2">
                    {study.metrics.map((metric) => (
                      <li key={metric} className="flex gap-3 border-b border-black/15 py-4 text-base leading-relaxed text-[#202020]">
                        <span className="mt-[0.65em] h-1.5 w-1.5 shrink-0 bg-[#0033CC]" />
                        {metric}
                      </li>
                    ))}
                  </ul>
                </section>

                <p className="border-l-2 border-[#0033CC] pl-4 text-base leading-relaxed text-[#555555]">
                  {study.takeaway}
                </p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-12 max-w-5xl border-t border-black/20 pt-6 text-sm leading-relaxed text-[#666666]">
          Case study note: Replace all bracketed fields with real client information and verified analytics. Obtain permission before publishing identifiable client details. Do not publish these examples as completed projects until the underlying results have been confirmed.
        </p>
      </div>
    </section>
  );
}
