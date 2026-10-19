const steps = [
  {
    title: "Step 1: SEO Audit",
    description:
      "Our team looks at your website's current condition which includes the internal links, content, indexing status, and structure. Doing this helps us determine what the weak points of your site are.",
  },
  {
    title: "Step 2: Keyword Research and Competitor Analysis",
    description:
      "We investigate the necessary keywords and check the competing websites. This helps us find out the intention of web users, the gaps in content, and possible opportunities for optimization.",
  },
  {
    title: "Step 3: SEO Strategy",
    description:
      "After analyzing your website, we create a precise plan of action that is aligned with your objectives. This plan can include technical changes, improvements in existing pages, new content development, and local SEO.",
  },
  {
    title: "Step 4: Website Optimization",
    description:
      "At this stage of the process, we rewrite the relevant titles, headlines, content, and elements of the technology.",
  },
  {
    title: "Step 5: Content Development and Authority Building",
    description:
      "We produce valuable, helpful content and look for legitimate opportunities for promotion.",
  },
];

export default function QuincySEOProcess() {
  return (
    <section className="relative overflow-hidden bg-white text-black">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(black 1px, transparent 1px), linear-gradient(90deg, black 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-16 md:px-12 md:pb-24">
        <header className="mb-12 md:mb-16">
          <h2 className="max-w-5xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Our SEO <span className="text-[#0033CC]">Process</span>
          </h2>
          <p className="mt-7 max-w-3xl text-xl leading-relaxed text-[#343b49] md:text-2xl">
            Web Founders USA uses a systematic methodology for analyzing your website, detecting areas of growth, and putting recommendations into action.
          </p>
        </header>
        <div className="border-t border-black/20">
          {steps.map((step) => (
            <article
              key={step.title}
              className="grid gap-4 border-b border-black/20 py-7 md:grid-cols-[0.85fr_1.15fr] md:gap-8 md:py-9"
            >
              <h3 className="text-xl font-semibold leading-tight tracking-tight md:text-2xl">
                {step.title}
              </h3>
              <p className="text-base leading-relaxed text-[#4b5563] md:text-lg">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
