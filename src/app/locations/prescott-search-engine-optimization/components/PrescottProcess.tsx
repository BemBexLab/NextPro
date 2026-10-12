const steps = [
  {
    title: "SEO Audit and Business Analysis",
    description:
      "We review your website, current organic performance, technical health, competitors, and existing search visibility to identify the most valuable opportunities.",
  },
  {
    title: "Keyword Research and Strategy",
    description:
      "We map relevant keywords to appropriate pages based on search intent, business relevance, and realistic opportunities.",
  },
  {
    title: "On-Page and Technical Improvements",
    description:
      "We prioritize website improvements that help search engines understand your content and make it easier for customers to navigate your site.",
  },
  {
    title: "Local SEO and Content Development",
    description:
      "We strengthen local business information, optimize relevant service pages, and develop useful content that answers customer questions.",
  },
  {
    title: "Monitoring and Reporting",
    description:
      "We track appropriate metrics, including organic clicks, impressions, keyword visibility, conversions, and qualified leads where reliable tracking is available. We use these insights to refine the strategy over time.",
  },
];

export default function PrescottProcess() {
  return (
    <section className="relative bg-white text-black">
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(black 1px, transparent 1px), linear-gradient(90deg, black 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24">
        <header className="mb-12 md:mb-16">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#bf0b30] sm:text-sm">Our Methodology</p>
          <h2 className="max-w-5xl text-4xl font-semibold leading-[0.98] tracking-tighter md:text-7xl">
            Our Search Engine Optimization{" "}
            <span className="text-[#0033CC]">Process</span>
          </h2>
          <p className="mt-7 max-w-3xl text-xl leading-relaxed text-[#343b49] md:text-2xl">
            We follow a structured approach so that every SEO activity supports a clear objective.
          </p>
        </header>
        <div className="border-t border-black/20">
          {steps.map((step, index) => (
            <article key={step.title} className="grid gap-4 border-b border-black/20 py-7 md:grid-cols-[100px_0.85fr_1.15fr] md:gap-8 md:py-9">
              <span className="font-mono text-sm text-[#0033CC]">0{index + 1}</span>
              <h3 className="text-2xl font-semibold leading-tight tracking-tight md:text-3xl">{step.title}</h3>
              <p className="text-base leading-relaxed text-[#4b5563] md:text-lg">{step.description}</p>
            </article>
          ))}
        </div>
        <div className="mt-8 grid gap-6 border border-black/10 bg-[#f7f8fb] p-6 sm:grid-cols-3 md:p-8">
          <div><span className="block font-mono text-xs uppercase tracking-widest text-[#6b7280]">Total Steps</span><span className="mt-2 block text-3xl font-semibold">05</span></div>
          <div><span className="block font-mono text-xs uppercase tracking-widest text-[#6b7280]">Methodology</span><span className="mt-2 block text-lg font-semibold">Structured SEO workflow</span></div>
          <div><span className="block font-mono text-xs uppercase tracking-widest text-[#6b7280]">Location</span><span className="mt-2 block text-lg font-semibold">Prescott, AZ</span></div>
        </div>
      </div>
    </section>
  );
}
