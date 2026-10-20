const comparison = [
  {
    feature: "Main goal",
    seo: "Improve organic search visibility",
    paid: "Gain visibility through paid ads",
  },
  {
    feature: "Traffic cost",
    seo: "No charge per organic click, but SEO requires investment",
    paid: "Advertising budget is generally required",
  },
  {
    feature: "Timeframe",
    seo: "Usually takes time to build momentum",
    paid: "Ads can begin receiving traffic after launch and approval",
  },
  {
    feature: "Visibility",
    seo: "Earned through organic search systems",
    paid: "Depends on ad auctions, targeting, budget, and campaign settings",
  },
  {
    feature: "Long term value",
    seo: "Can build lasting organic visibility",
    paid: "Traffic generally depends on continued advertising",
  },
];

export default function QuincySEMPaidSearch() {
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
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24">
        <header className="mb-10 md:mb-14">
          <h2 className="max-w-5xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Search Engine Marketing Quincy MA: SEO vs. {" "}
            <span className="text-[#0033CC]">Paid Advertising</span>
          </h2>
          <p className="mt-8 max-w-4xl text-xl leading-relaxed text-[#343b49] md:text-2xl">
            Search engine marketing can involve organic SEO and paid search advertising. Both can help businesses reach potential customers, but they work differently.
          </p>
          <p className="mt-5 max-w-4xl text-base leading-relaxed text-[#4b5563] md:text-lg">
            The right choice depends on your goals, competition, budget, and timeframe. Some businesses use SEO for long-term growth and paid advertising to support specific campaigns.
          </p>
        </header>
        <div className="overflow-x-auto border-y border-black/20">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="border-b border-black/20">
                <th scope="col" className="w-1/4 py-5 pr-5 font-mono text-xs font-bold uppercase tracking-widest text-[#bf0b30]">Feature</th>
                <th scope="col" className="w-[37.5%] py-5 px-5 text-lg font-semibold">SEO</th>
                <th scope="col" className="w-[37.5%] py-5 pl-5 text-lg font-semibold">Paid Search</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row) => (
                <tr key={row.feature} className="border-b border-black/10 last:border-0">
                  <th scope="row" className="py-5 pr-5 text-base font-semibold text-[#0033CC] md:text-lg">{row.feature}</th>
                  <td className="py-5 px-5 text-base leading-relaxed text-[#4b5563] md:text-lg">{row.seo}</td>
                  <td className="py-5 pl-5 text-base leading-relaxed text-[#4b5563] md:text-lg">{row.paid}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
