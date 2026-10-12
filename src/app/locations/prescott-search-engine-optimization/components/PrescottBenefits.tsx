const benefits = [
  "Improve visibility for relevant local searches.",
  "Attract more qualified organic website traffic.",
  "Strengthen your Google Business Profile presence.",
  "Build credibility through helpful content and consistent business information.",
  "Improve the journey from search results to phone calls and contact forms.",
  "Develop a measurable, long-term digital marketing channel.",
];

export default function PrescottBenefits() {
  return (
    <section className="relative bg-[#f7f8fb] text-black">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-[0.85fr_1.15fr] md:px-12 md:py-24">
        <header>
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#bf0b30] sm:text-sm">
            Local Search
          </p>
          <h2 className="text-4xl font-semibold leading-[0.98] tracking-tighter md:text-6xl">
            Why Invest in Local SEO in{" "}
            <span className="text-[#0033CC]">Prescott?</span>
          </h2>
        </header>
        <div>
          <p className="mb-8 text-xl leading-relaxed text-[#343b49] md:text-2xl">
            Customers often use search engines to compare providers, evaluate services, and decide which business to contact. If your website is difficult to find, you may miss opportunities to connect with people already looking for what you offer.
          </p>
          <p className="mb-5 text-lg font-semibold">A focused Prescott SEO strategy can help your business:</p>
          <div className="divide-y divide-black/15 border-y border-black/15">
            {benefits.map((benefit, index) => (
              <div key={benefit} className="flex gap-5 py-5">
                <span className="font-mono text-sm text-[#0033CC]">{String(index + 1).padStart(2, "0")}</span>
                <p className="text-lg leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-base leading-relaxed text-[#4b5563] md:text-lg">
            SEO is an ongoing process, not an overnight solution. Results depend on your starting position, competition, website condition, resources, and the quality of implementation.
          </p>
        </div>
      </div>
    </section>
  );
}
