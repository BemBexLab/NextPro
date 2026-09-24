const processSteps = [
  {
    title: "1. Website & SEO Audit",
    description:
      "We review your website's technical health, content, local presence, keyword visibility, and competitors.",
  },
  {
    title: "2. Keyword Research",
    description:
      "We identify commercial, local, transactional, and informational keywords relevant to your services and customers.",
  },
  {
    title: "3. Competitor Analysis",
    description:
      "We analyze competing automotive businesses to uncover keyword, content, local, and authority opportunities.",
  },
  {
    title: "4. On-Page Optimization",
    description:
      "We optimize titles, headings, content, URLs, internal links, images, service pages, inventory pages, and location pages.",
  },
  {
    title: "5. Local SEO",
    description:
      "We strengthen your local presence and improve relevance for target cities and service areas.",
  },
  {
    title: "6. Content & Authority Building",
    description:
      "We create useful automotive content and develop relevant authority through quality content, citations, partnerships, and link opportunities.",
  },
  {
    title: "7. Conversion Optimization",
    description:
      "Our Conversion Optimization Services help turn relevant organic visitors into calls, forms, appointments, test drives, and inquiries.",
  },
  {
    title: "8. Reporting & Continuous Improvement",
    description:
      "We monitor organic traffic, rankings, leads, local visibility, and technical performance to identify new opportunities.",
  },
];

const Section8 = () => {
  return (
    <section className="relative overflow-hidden bg-[#f7faff] px-5 py-12 sm:px-8 sm:py-16 lg:px-16 lg:py-24">
      <div className="pointer-events-none absolute -left-24 top-24 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-cyan-100/60 blur-3xl" />

      <div className="relative mx-auto w-full max-w-none">
        <div className="relative isolate overflow-hidden border-b border-blue-900/20 bg-gradient-to-br from-[#061f59] via-[#073b91] to-[#0b63b8] px-5 py-9 shadow-lg shadow-blue-950/10 sm:px-8 sm:py-12 lg:px-16 lg:py-14">
          <div className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full border border-white/10 bg-white/5 blur-sm" />
          <h2 className="relative max-w-4xl text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
            Our Automotive SEO Process
          </h2>
        </div>

        <div className="w-full bg-white px-5 py-10 sm:px-8 sm:py-14 lg:px-16 lg:py-20">
          <ol className="relative mx-auto max-w-6xl space-y-8 before:absolute before:bottom-8 before:left-[1.15rem] before:top-8 before:w-px before:bg-gradient-to-b before:from-blue-300 before:via-blue-200 before:to-transparent sm:space-y-10 lg:space-y-12">
            {processSteps.map((step) => (
              <li key={step.title} className="relative flex gap-5 sm:gap-7">
                <span
                  aria-hidden="true"
                  className="relative z-10 mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-4 border-white bg-gradient-to-br from-blue-700 to-cyan-500 shadow-md shadow-blue-700/20"
                >
                  <span className="h-2 w-2 rounded-full bg-white" />
                </span>
                <div className="min-w-0 flex-1 border-b border-slate-200 pb-8 sm:pb-10">
                  <h3 className="text-lg font-bold leading-7 text-[#072d7f] sm:text-xl">
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-4xl text-base leading-8 text-slate-700 sm:text-lg">
                    {step.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Section8;
