const strategies = [
  {
    title: "Google Business Profile Optimization",
    description:
      "We optimize your Google Business Profile with accurate business details, relevant categories, services, business hours, and photos to help customers find you.",
  },
  {
    title: "Local Keyword Research",
    description:
      "We find the search terms customers use to find services like yours and target relevant keywords across your website and business profile.",
  },
  {
    title: "On-Page SEO & Location Pages",
    description:
      "We optimize website titles, headings, content, internal links, and relevant location pages to help Google understand your services and target areas.",
  },
  {
    title: "Local Citations & Business Listings",
    description:
      "We improve the accuracy and consistency of your business name, address, and phone number across relevant directories and platforms.",
  },
  {
    title: "Customer Reviews & Reputation Management",
    description:
      "We help you build trust by encouraging genuine customer reviews and responding professionally to customer feedback.",
  },
  {
    title: "Local Link Building",
    description:
      "We work to earn relevant links and mentions from trusted local websites to strengthen your business's online presence.",
  },
  {
    title: "Technical SEO & Performance Tracking",
    description:
      "We check website speed, mobile usability, indexing, and technical issues while monitoring local rankings, website traffic, and customer inquiries.",
  },
];

const HiddenStrategy = () => {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-[92%] max-w-7xl">
        <div className="max-w-4xl">
          <div aria-hidden="true" className="mb-5 h-1 w-12 bg-[#c8102e]" />
          <h2 className="max-w-3xl text-3xl font-bold leading-[1.08] tracking-[-0.04em] text-slate-950 sm:text-4xl lg:text-5xl">
            Hidden Strategy Offered in Local SEO Services
          </h2>
        </div>

        <ul className="mt-10 divide-y divide-slate-200 border-y border-slate-200 sm:mt-12">
          {strategies.map((strategy) => (
            <li
              key={strategy.title}
              className="grid gap-3 py-6 sm:py-7 md:grid-cols-[minmax(15rem,0.8fr)_1.2fr] md:items-start md:gap-12 lg:py-8"
            >
              <h3 className="border-l-2 border-[#c8102e] pl-4 text-lg font-semibold leading-snug tracking-[-0.015em] text-[#072d7f] sm:text-xl">
                {strategy.title}
              </h3>
              <p className="max-w-3xl text-base leading-7 tracking-[0.005em] text-slate-600 sm:text-lg sm:leading-8">
                {strategy.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default HiddenStrategy;
