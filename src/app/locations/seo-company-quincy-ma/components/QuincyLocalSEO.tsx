const localServices = [
  "Optimizing eligible Google Business Profiles.",
  "Researching relevant Quincy search terms.",
  "Improving service and location landing pages.",
  "Maintaining consistent business information.",
  "Developing useful local content.",
  "Encouraging genuine customer reviews.",
  "Tracking calls, form submissions, and other enquiries.",
];

export default function QuincyLocalSEO() {
  return (
    <section className="relative bg-[#f7f8fb] text-black">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-[0.85fr_1.15fr] md:px-12 md:py-24">
        <header>
          <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Local SEO for{" "}
            <span className="text-[#0033CC]">Quincy, MA</span>
          </h2>
        </header>
        <div>
          <p className="mb-5 text-xl leading-relaxed text-[#343b49] md:text-2xl">
            Businesses serving Quincy need to communicate their services clearly and make it easy for nearby customers to find relevant information.
          </p>
          <p className="mb-8 text-base leading-relaxed text-[#4b5563] md:text-lg">
            Local SEO is not simply about adding the phrase &quot;Quincy, MA&quot; throughout a website. It involves creating genuinely useful pages, maintaining accurate business information, and demonstrating how your services meet local customer needs.
          </p>
          <p className="mb-5 text-lg font-semibold">
            Our local SEO strategy may include:
          </p>
          <div className="divide-y divide-black/15 border-y border-black/15">
            {localServices.map((service) => (
              <div key={service} className="py-4">
                <p className="text-base leading-relaxed md:text-lg">{service}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-base leading-relaxed text-[#4b5563] md:text-lg">
            We also consider the surrounding areas your business actually serves. Any location-specific content should provide useful information rather than repeat the same copy with different city names.
          </p>
        </div>
      </div>
    </section>
  );
}
