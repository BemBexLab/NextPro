const principles = [
  {
    title: "Customized strategies",
    description: "Recommendations based on your website, audience, and competition.",
  },
  {
    title: "Ethical SEO practices",
    description: "Sustainable optimization without misleading ranking guarantees.",
  },
  {
    title: "Transparent reporting",
    description: "Clear explanations of work completed and performance trends.",
  },
  {
    title: "Business-focused metrics",
    description: "Attention to qualified leads and conversions, not just rankings.",
  },
  {
    title: "Ongoing improvement",
    description: "Regular reviews to identify new opportunities and address changing needs.",
  },
];

export default function PrescottWhyChoose() {
  return (
    <section className="relative bg-white text-black">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24">
        <header className="mb-10 md:mb-14">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#bf0b30] sm:text-sm">Our Approach</p>
          <h2 className="max-w-5xl text-4xl font-semibold leading-[0.98] tracking-tighter md:text-7xl">
            Why Choose Our{" "}
            <span className="text-[#0033CC]">Prescott SEO Agency?</span>
          </h2>
          <p className="mt-8 max-w-4xl text-xl leading-relaxed text-[#343b49] md:text-2xl">
            Choosing the right SEO partner means finding a team that understands your business objectives and communicates clearly about progress.
          </p>
          <p className="mt-5 text-lg font-semibold">Our approach emphasizes:</p>
        </header>
        <div className="grid gap-px overflow-hidden border border-black/10 bg-black/10 md:grid-cols-2">
          {principles.map((principle, index) => (
            <article key={principle.title} className={`bg-white p-6 md:p-8 ${index === 4 ? "md:col-span-2" : ""}`}>
              <span className="mb-5 block font-mono text-sm text-[#0033CC]">0{index + 1}</span>
              <h3 className="text-2xl font-semibold tracking-tight md:text-3xl">{principle.title}</h3>
              <p className="mt-3 max-w-2xl text-lg leading-relaxed text-[#4b5563]">{principle.description}</p>
            </article>
          ))}
        </div>
        <p className="mt-8 max-w-4xl border-l-4 border-[#0033CC] pl-6 text-xl font-medium leading-relaxed md:text-2xl">
          We focus on helping your business build a stronger online presence through practical, measurable search engine optimization.
        </p>
      </div>
    </section>
  );
}
