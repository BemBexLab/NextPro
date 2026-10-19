type Service = {
  title: string;
  intro: string;
  lead?: string;
  items?: string[];
  paragraphs?: string[];
  closing?: string;
};

const services: Service[] = [
  {
    title: "1. Local SEO Services",
    intro:
      "Local SEO helps organizations improve their search rankings in specific areas. This is a particularly powerful tool for companies that serve customers in Quincy, MA and nearby areas.",
    lead: "Our local SEO services consist of various activities:",
    items: [
      "Optimization of Google Business Profile for qualifying companies.",
      "Research of appropriate local SEO keywords.",
      "Creation of service pages targeting local customers.",
      "Establishing consistency between company name, location, and number.",
      "Management of citations.",
      "Assistance in acquiring reviews from customers.",
      "Measurement of the performance of the local search activity.",
    ],
    closing:
      "Our aim is to help your company communicate its services, service areas, and values clearly. We do not just create useless local pages, but focus instead on the importance of local relevance.",
  },
  {
    title: "2. On-Page SEO Services",
    intro:
      "On-page SEO utilizes techniques that enhance the quality of the content and other aspects related to a web page. It makes it easier for search engines to comprehend what every page is about and for web users to get access to required information.",
    lead: "Services may include:",
    items: [
      "Optimization of title tags and meta tags.",
      "Appropriate usage of heading tags H1, H2, and H3.",
      "Mapping of search intent and keywords.",
      "Improvement of content quality and readability.",
      "Usage of internal links between relevant pages.",
      "Optimization of visual content and explanatory alternative text.",
      "Appeals to action.",
      "Changes in content based on the statistics provided regarding its performance.",
    ],
    closing:
      "We use keywords straightforwardly and make sure that every page has a purpose that is quite important.",
  },
  {
    title: "3. Technical SEO Services",
    intro:
      "Technical SEO helps search engines crawl, render, and index your website correctly. Technical problems can make important pages harder to discover or understand.",
    lead: "Web Founders USA can review your website for issues such as:",
    items: [
      "Broken internal links and unnecessary redirects.",
      "Crawl and indexing problems.",
      "Incorrect canonical tags.",
      "Duplicate or thin content.",
      "XML sitemap and robots.txt issues.",
      "Mobile usability problems.",
      "Page performance and Core Web Vitals.",
      "Website architecture and internal linking.",
    ],
    closing:
      "After identifying issues, we prioritize recommendations based on their likely impact and implementation requirements. Our goal is to build a technically sound website that supports your wider SEO strategy.",
  },
  {
    title: "4. SEO Content Writing Services",
    intro:
      "Helpful content gives potential customers the information they need to make decisions. It also helps search engines understand your services and the topics your website covers.",
    lead: "Our SEO content writing services include:",
    items: [
      "Service page content.",
      "Location landing pages.",
      "Informative blog posts.",
      "Product and category descriptions.",
      "Frequently asked questions.",
      "Website copy improvements.",
      "Content updates and optimization.",
    ],
    closing:
      "We research your audience and target keywords before creating content. Each page should answer relevant questions, explain your services clearly, and guide visitors toward an appropriate next step.",
  },
  {
    title: "5. Keyword Research and Competitor Analysis",
    intro:
      "Keyword research helps identify the terms people use when searching for your products and services. Our process considers search intent, relevance, competition, and potential business value. We also review competing websites to identify content gaps and opportunities to improve your own pages.",
    paragraphs: [
      "For businesses targeting Quincy, this may include location-specific searches, service-related keywords, and broader commercial queries.",
      "We organize keywords by topic and page purpose to reduce keyword cannibalization and avoid targeting the same search intent across multiple pages unnecessarily.",
    ],
  },
  {
    title: "6. Link Building and Website Authority",
    intro:
      "Relevant backlinks and genuine mentions can help people discover your website and provide useful context about your business.",
    paragraphs: [
      "Our link-building approach focuses on legitimate opportunities, including relevant industry publications, digital PR, useful resources, and relationships with appropriate websites.",
      "We avoid spammy links, automated link schemes, and manipulative tactics that may violate search engine spam policies.",
    ],
  },
  {
    title: "7. E-commerce SEO Services",
    intro:
      "Online stores need product pages that are easy to find, understand, and navigate. E-commerce SEO focuses on improving organic visibility across product, category, and supporting content pages.",
    lead: "Our e-commerce SEO services can include:",
    items: [
      "Product title and description optimization.",
      "Category page improvements.",
      "Product and category internal linking.",
      "Duplicate content reviews.",
      "Structured data checks.",
      "Technical SEO audits.",
      "Search-friendly site architecture.",
    ],
    closing:
      "These improvements can help potential customers discover relevant products and make the shopping experience easier.",
  },
  {
    title: "8. SEO Audits and Reporting",
    intro:
      "An SEO audit helps identify what is working, what needs attention, and where your website may have opportunities for improvement. We review relevant technical, on-page, content, and website structure factors before developing an action plan.",
    closing:
      "Ongoing reporting can include organic clicks, impressions, keyword visibility, landing page performance, and tracked leads or conversions. The exact metrics depend on your goals and available analytics data. Reports help us evaluate progress and make informed decisions about future SEO activities.",
  },
];

export default function ProfessionalSEOServices() {
  return (
    <section className="relative overflow-hidden bg-white text-black">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(black 1px, transparent 1px), linear-gradient(90deg, black 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          backgroundPosition: "center top",
        }}
      />
      <div className="relative z-10 mx-auto max-w-7xl px-6 pb-16 md:px-12 md:pb-24">
        <header className="mb-12 md:mb-16">
          <h2 className="max-w-5xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Search Engine Optimization Services Targeting the{" "}
            <span className="text-[#0033CC]">Quincy, MA Market</span>
          </h2>
          <p className="mt-8 max-w-4xl text-xl leading-relaxed text-[#343b49] md:text-2xl">
            No two business establishments face the same issues. While some may need to improve their website&apos;s technical aspects, others may be looking for ways to increase their online presence through better content and local visibility or a good keyword strategy.
          </p>
        </header>

        <div className="space-y-6">
          {services.map((service) => (
            <article
              key={service.title}
              className="grid gap-6 border-t border-black/15 py-8 md:grid-cols-[0.7fr_1.3fr] md:gap-12 md:py-10"
            >
              <div>
                <h3 className="text-xl font-semibold leading-tight tracking-tight md:text-2xl">
                  {service.title}
                </h3>
              </div>
              <div className="max-w-3xl text-base leading-relaxed text-[#343b49] md:text-lg">
                <p>{service.intro}</p>
                {service.lead && (
                  <p className="mt-5 font-semibold text-black">{service.lead}</p>
                )}
                {service.items && (
                  <ul className="mt-3 space-y-2">
                    {service.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span aria-hidden="true" className="mt-[0.65em] h-1.5 w-1.5 shrink-0 bg-[#0033CC]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {service.paragraphs?.map((paragraph) => (
                  <p key={paragraph} className="mt-4">{paragraph}</p>
                ))}
                {service.closing && (
                  <p className="mt-5 font-medium text-black">{service.closing}</p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
