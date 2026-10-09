import Link from "next/link";

const services = [
  {
    title: "Local SEO Services",
    intro:
      "Local SEO helps your business appear when nearby customers search for relevant services. We optimize your website and local business presence to improve your visibility in geographically relevant searches.",
    lead: "Our local SEO services include:",
    items: [
      "Google Business Profile optimization",
      "Local keyword research and targeting",
      "Business information and citation consistency",
      "Location-specific landing page optimization",
      "Review strategy and reputation management guidance",
      "Local search performance tracking",
    ],
    closing:
      "Whether customers search for a service in Prescott or compare nearby providers, a strong local SEO foundation can help them discover your business.",
  },
  {
    title: "On-Page SEO and Content Optimization",
    intro:
      "Your website content should clearly explain what you offer, who you serve, and why customers should choose your business. We optimize important website elements to improve relevance for search engines and usability for visitors.",
    paragraphs: [
      "Our on-page SEO work may include title tags, meta descriptions, heading structure, internal links, image optimization, and service page improvements.",
      "We also incorporate relevant search terms such as Prescott SEO services, SEO company Prescott AZ, and search engine optimization Prescott naturally into useful, customer-focused content.",
    ],
  },
  {
    title: "Technical SEO",
    intro:
      "Technical issues can make it harder for search engines to crawl, understand, and index your website. Our technical SEO process identifies and prioritizes problems that may affect organic search performance.",
    lead: "Depending on your website, this may include:",
    items: [
      "Website crawlability and indexation checks",
      "Mobile usability improvements",
      "Page speed and Core Web Vitals analysis",
      "XML sitemap and robots.txt reviews",
      "Canonical tag and duplicate content checks",
      "Structured data and schema markup implementation",
    ],
    closing:
      "Our goal is to create a technically sound website that supports sustainable organic growth.",
  },
  {
    title: "Keyword Research and SEO Content Strategy",
    intro:
      "Effective SEO starts with understanding what your prospective customers search for and what they expect to find.",
    paragraphs: [
      "We research primary keywords, long tail search queries, commercial-intent terms, and semantically related topics. This helps us build a content strategy around relevant services rather than simply repeating keywords.",
      "For Prescott businesses, opportunities may include service specific searches, location-based queries, and relevant searches from customers in surrounding communities.",
    ],
  },
  {
    title: "Link Building and Website Authority",
    intro:
      "Relevant, trustworthy backlinks can support your website's authority and search visibility. We focus on sustainable link acquisition opportunities that align with your business and industry.",
    paragraphs: [
      "Our approach prioritizes relevant websites, useful content, legitimate business relationships, and quality over artificial link volume.",
    ],
  },
];

export default function PrescottServices() {
  return (
    <section className="relative bg-white text-black">
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(black 1px, transparent 1px), linear-gradient(90deg, black 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          backgroundPosition: "center top",
        }}
      />
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24">
        <header className="mb-12 md:mb-16">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#bf0b30] sm:text-sm">
            SEO Services
          </p>
          <h2 className="max-w-5xl text-4xl font-semibold leading-[0.98] tracking-tighter md:text-7xl">
            Professional SEO Services in{" "}
            <span className="text-[#0033CC]">Prescott, AZ</span>
          </h2>
          <p className="mt-8 max-w-4xl text-xl leading-relaxed text-[#343b49] md:text-2xl">
            Every business is unique, with its own goals, competitors, and audience. That’s why we create customized <a href="https://www.webfoundersusa.com/blog/common-seo-mistakes-small-businesses/" className="text-[#0033CC] underline underline-offset-4 hover:text-[#072d7f]">SEO strategies</a> to your website’s performance, the keywords your customers are searching for, and the opportunities that can help your business grow online.
          </p>
        </header>

        <div className="space-y-6">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="grid gap-6 border-t border-black/15 py-8 md:grid-cols-[0.7fr_1.3fr] md:gap-12 md:py-10"
            >
              <div>
                <span className="mb-4 block font-mono text-sm text-[#0033CC]">
                  {String(index + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
                </span>
                <h3 className="text-2xl font-semibold leading-tight tracking-tight md:text-4xl">
                  {service.title}
                </h3>
              </div>
              <div className="max-w-3xl text-base leading-relaxed text-[#343b49] md:text-lg">
                <p>
                  {service.title === "Local SEO Services" ? (
                    <>Local SEO helps your business appear when nearby customers search for relevant services. We optimize your website and local business presence to improve your visibility in geographically relevant searches.</>
                  ) : service.title === "Keyword Research and SEO Content Strategy" ? (
                    <>Effective SEO starts with understanding what your prospective customers search for and what they expect to find. Our <a href="https://www.webfoundersusa.com/blog/common-seo-mistakes-small-businesses/" className="font-medium text-[#0033CC] underline underline-offset-4 hover:text-[#072d7f]">SEO strategies</a> focus on relevant services and search intent.</>
                  ) : (
                    service.title === "Technical SEO" ? (
                      <>Technical issues can make it harder for search engines to crawl, understand, and index your website. Our technical SEO process identifies and prioritizes problems that may affect organic search performance. See common <a href="https://www.webfoundersusa.com/blog/technical-seo-issues-that-kill-rankings/" className="font-medium text-[#0033CC] underline underline-offset-4 hover:text-[#072d7f]">technical SEO issues</a>.</>
                    ) : service.intro
                  )}
                </p>
                {service.lead && (
                  <p className="mt-5 font-semibold text-black">
                    {service.title === "Local SEO Services" ? (
                      <>Our <a href="https://www.webfoundersusa.com/service/seo-services/local-seo-services/" className="text-[#0033CC] underline underline-offset-4 hover:text-[#072d7f]">local SEO services</a> include:</>
                    ) : service.lead}
                  </p>
                )}
                {service.items && (
                  <ul className="mt-3 space-y-2">
                    {service.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-[0.65em] h-1.5 w-1.5 shrink-0 bg-[#0033CC]" />
                        <span>
                          {item === "Page speed and Core Web Vitals analysis" ? (
                            <>Page speed and <a href="https://web.dev/explore/learn-core-web-vitals" target="_blank" rel="noopener noreferrer" className="text-[#0033CC] underline underline-offset-4 hover:text-[#072d7f]">Core Web Vitals</a> analysis</>
                          ) : item}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
                {service.paragraphs?.map((paragraph) => (
                  <p key={paragraph} className="mt-4">{paragraph}</p>
                ))}
                {service.closing && <p className="mt-5 font-medium text-black">{service.closing}</p>}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
