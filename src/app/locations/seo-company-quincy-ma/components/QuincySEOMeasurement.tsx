const metrics = [
  {
    title: "Organic clicks",
    description: "Visits from unpaid search results.",
  },
  {
    title: "Search impressions",
    description: "How often your pages appear in search results.",
  },
  {
    title: "Keyword visibility",
    description: "Changes in search rankings for relevant terms.",
  },
  {
    title: "Landing page performance",
    description: "Which pages attract organic visitors.",
  },
  {
    title: "Lead generation",
    description: "Enquiries submitted through forms or other tracked channels.",
  },
  {
    title: "Conversions",
    description: "Valuable actions such as calls, bookings, and purchases.",
  },
];

export default function QuincySEOMeasurement() {
  return (
    <section className="relative bg-[#f7f8fb] text-black">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-[0.85fr_1.15fr] md:px-12 md:py-24">
        <header>
          <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            How We Measure SEO{" "}
            <span className="text-[#0033CC]">Performance</span>
          </h2>
          <p className="mt-8 text-xl leading-relaxed text-[#343b49] md:text-2xl">
            A successful SEO strategy should have clear objectives and meaningful performance tracking.
          </p>
        </header>
        <div>
          <p className="mb-5 text-lg font-semibold">
            Depending on your website and analytics setup, we can review:
          </p>
          <div className="divide-y divide-black/15 border-y border-black/15">
            {metrics.map((metric) => (
              <article key={metric.title} className="py-4">
                <p className="text-base leading-relaxed md:text-lg">
                  <span className="font-semibold text-black">{metric.title}: </span>
                  <span className="text-[#4b5563]">{metric.description}</span>
                </p>
              </article>
            ))}
          </div>
          <p className="mt-8 text-base leading-relaxed text-[#4b5563] md:text-lg">
            We use available data to understand progress and identify areas for improvement. Rankings and traffic can fluctuate, so we do not guarantee specific positions, lead volumes, or revenue outcomes.
          </p>
        </div>
      </div>
    </section>
  );
}
