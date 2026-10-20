const businessTypes = [
  {
    title: "Local Service Businesses",
    description:
      "Contractors, repair companies, cleaning businesses, and other local service providers can benefit from service-specific pages and relevant local search optimization.",
  },
  {
    title: "Professional Service Firms",
    description:
      "Consultants, accountants, legal practices, and other professional firms can use informative content and well-structured service pages to explain their expertise and attract relevant enquiries.",
  },
  {
    title: "Retail and E-commerce Businesses",
    description:
      "Retailers can improve product discovery through better product descriptions, category pages, internal links, and technical optimization.",
  },
  {
    title: "B2B Companies",
    description:
      "B2B businesses can target decision-makers through industry-specific content, detailed service pages, and keywords connected to their solutions.",
  },
  {
    title: "Growing Businesses",
    description:
      "Companies expanding into new markets can use keyword research and competitor analysis to understand search demand and plan their website content.",
  },
];

export default function QuincyBusinessTypes() {
  return (
    <section className="relative bg-white text-black">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24">
        <header className="mb-12 md:mb-16">
          <h2 className="max-w-5xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            SEO for Different Types of{" "}
            <span className="text-[#0033CC]">Businesses</span>
          </h2>
          <p className="mt-8 max-w-4xl text-xl leading-relaxed text-[#343b49] md:text-2xl">
            SEO can support many industries, but the right strategy depends on how your customers search and how your business operates.
          </p>
        </header>
        <div className="grid gap-px overflow-hidden border border-black/10 bg-black/10 md:grid-cols-2">
          {businessTypes.map((business, index) => (
            <article
              key={business.title}
              className={`bg-white p-6 md:p-8 ${index === businessTypes.length - 1 ? "md:col-span-2" : ""}`}
            >
              <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
                {business.title}
              </h3>
              <p className="mt-3 max-w-2xl text-lg leading-relaxed text-[#4b5563]">
                {business.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
