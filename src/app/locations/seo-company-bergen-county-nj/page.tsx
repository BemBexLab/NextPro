import type { Metadata } from "next";
import Link from "next/link";
import { withEnUsHreflang } from "@/lib/metadata";

const relatedServices = [
  {
    label: "E-commerce SEO Services",
    href: "/service/seo-services/ecommerce-seo/",
  },
  { label: "B2B SEO Services", href: "/service/seo-services/b2b-seo/" },
  { label: "Dental SEO Services", href: "/service/seo-services/dental-seo/" },
  {
    label: "Healthcare SEO Services",
    href: "/service/seo-services/healthcare-seo/",
  },
  {
    label: "Enterprise SEO Services",
    href: "/service/seo-services/enterprise-seo/",
  },
  { label: "Shopify SEO Services", href: "/service/seo-services/shopify-seo/" },
  {
    label: "White Label SEO Services",
    href: "/service/seo-services/white-label-seo/",
  },
  {
    label: "WordPress SEO Services",
    href: "/service/seo-services/wordpress-seo/",
  },
  { label: "Magento SEO Services", href: "/service/seo-services/magento-seo/" },
  { label: "Medical SEO Services", href: "/service/seo-services/medical-seo/" },
  { label: "SEO Audit Services", href: "/service/seo-services/seo-audit/" },
  { label: "Hotel SEO Services", href: "/service/seo-services/hotel-seo/" },
  {
    label: "Multilingual SEO Services",
    href: "/service/seo-services/multilingual-seo/",
  },
  {
    label: "SEO Content Writing Services",
    href: "/service/seo-services/seo-content-writing/",
  },
  {
    label: "WooCommerce SEO Services",
    href: "/service/seo-services/woocommerce-seo/",
  },
  {
    label: "BigCommerce SEO Services",
    href: "/service/seo-services/bigcommerce-seo/",
  },
  {
    label: "Boutique SEO Services",
    href: "/service/seo-services/boutique-seo/",
  },
  { label: "YouTube SEO Services", href: "/service/seo-services/youtube-seo/" },
  { label: "Roofing SEO Services", href: "/service/seo-services/roofing-seo/" },
  {
    label: "Outsource SEO Services",
    href: "/service/seo-services/outsource-seo/",
  },
  {
    label: "Construction SEO Services",
    href: "/service/seo-services/construction-seo/",
  },
  {
    label: "Local SEO Services",
    href: "/service/seo-services/local-seo-services/",
  },
  {
    label: "Employment Lawyers SEO Services",
    href: "/service/seo-services/employment-lawyers-seo/",
  },
  {
    label: "Locksmith SEO Services",
    href: "/service/seo-services/locksmith-seo-services/",
  },
  {
    label: "Insurance Broker SEO Service",
    href: "/service/seo-services/insurance-broker-seo/",
  },
  { label: "Automotive SEO", href: "/service/seo-services/automotive-seo/" },
];

const relatedServices2 = [
  { label: "Web Design Elk River", href: "/locations/web-design-elk-river/" },
  {
    label: "Web Design Gainesville, GA",
    href: "/locations/web-design-gainesville-ga/",
  },
  { label: "Gwinnett County SEO Company", href: "/locations/seo-gwinnet/" },
  {
    label: "SEO Company in Union County, GA",
    href: "/locations/seo-company-union-county-ga/",
  },
  {
    label: "Alpharetta SEO Services",
    href: "/locations/alpharetta-seo-services/",
  },
  {
    label: "SEO Company Suwanee, GA",
    href: "/locations/seo-company-suwanee-ga/",
  },
  { label: "Maryland SEO Company", href: "/locations/maryland-seo-company/" },
  {
    label: "Alexandria Search Engine Optimization",
    href: "/locations/alexandria-search-engine-optimization/",
  },
  {
    label: "Prescott Search Engine Optimization",
    href: "/locations/prescott-search-engine-optimization/",
  },
  {
    label: "SEO Company Fredericksburg, VA",
    href: "/locations/seo-company-fredericksburg-va/",
  },
  {
    label: "SEO Company Quincy, MA",
    href: "/locations/seo-company-quincy-ma/",
  },
];

const services = [
  {
    title: "Local SEO Services",
    paragraphs: [
      "Local SEO helps businesses connect with customers searching for services in their area. It can improve visibility in relevant local search results.",
      "We optimize location pages, business information, and local keywords. Our goal is to help your business reach potential customers across Bergen County, NJ.",
    ],
  },
  {
    title: "On-Page SEO",
    paragraphs: [
      "On-page SEO improves the content and structure of your website pages. It includes optimizing page titles, headings, meta descriptions, images, and internal links.",
      "We focus on relevant keywords and helpful content. This helps search engines understand your pages and visitors find the information they need.",
    ],
  },
  {
    title: "Technical SEO",
    paragraphs: [
      "Technical SEO helps search engines crawl and index your website properly. It also supports website speed, usability, and performance.",
      "We check indexing issues, broken links, mobile usability, and site structure. Fixing these issues helps create a stronger foundation for SEO.",
    ],
  },
  {
    title: "SEO Content Writing",
    paragraphs: [
      "Useful content helps customers understand your services and find answers to their questions. It also supports your website's search visibility.",
      "We create SEO-friendly service pages, landing pages, and blog posts. Each page is designed around relevant keywords and user needs.",
    ],
  },
];

const processSteps = [
  {
    title: "Step 1: Website Audit",
    description:
      "We review your website to identify technical issues and optimization opportunities. This helps us understand what needs improvement.",
  },
  {
    title: "Step 2: Keyword Research",
    description:
      "We find relevant keywords based on your services and target audience. We also review competitors to identify potential opportunities.",
  },
  {
    title: "Step 3: SEO Strategy",
    description:
      "We create an SEO plan based on your website and business goals. This plan may include content improvements, technical fixes, and local SEO.",
  },
  {
    title: "Step 4: Website Optimization",
    description:
      "We improve page titles, headings, content, and internal links. We also address technical issues that may affect search performance.",
  },
  {
    title: "Step 5: Performance Tracking",
    description:
      "We monitor organic traffic, search visibility, and keyword performance. These insights help us identify areas for further improvement.",
  },
];

const faqs = [
  {
    question: "What does a Bergen County SEO company do?",
    answer:
      "An SEO company helps businesses improve search visibility through keyword research, website optimization, technical SEO, content development, and local SEO.",
  },
  {
    question: "Why should I hire an SEO company in Bergen County, NJ?",
    answer:
      "An SEO company can help identify website issues, target relevant keywords, and improve your online presence. A tailored strategy can help attract more relevant visitors.",
  },
  {
    question: "How much do SEO services cost in Bergen County?",
    answer:
      "SEO costs depend on your website, competition, and required services. A customized plan can help determine the right budget for your business.",
  },
  {
    question: "How long does SEO take to show results?",
    answer:
      "SEO usually takes time to build momentum. Results depend on your website, competition, content quality, and the improvements implemented.",
  },
  {
    question: "Can local SEO help my small business?",
    answer:
      "Yes. Local SEO can help your business reach people searching for relevant services in Bergen County and nearby areas you serve.",
  },
  {
    question: "What services are included in SEO?",
    answer:
      "SEO services may include keyword research, on-page optimization, technical SEO, content writing, local SEO, and performance reporting.",
  },
];

export const metadata: Metadata = withEnUsHreflang({
  title: "Bergen County SEO Company | Web Founders USA",
  description:
    "Looking for a Bergen County SEO company? Web Founders USA helps businesses improve search visibility with local SEO, keyword research, and website optimization.",
  alternates: {
    canonical: "/locations/seo-company-bergen-county-nj/",
  },
});

export default function BergenCountySeoPage() {
  return (
    <main className="overflow-hidden bg-white text-black">
      <section className="bg-white py-14 sm:py-20 lg:py-24">
        <div className="mx-auto w-[92%] max-w-7xl">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(20rem,0.8fr)] lg:gap-14">
            <div className="max-w-[52rem]">
              <div aria-hidden="true" className="mb-7 h-1 w-14 bg-[#c8102e]" />
              <h1 className="text-[2.5rem] font-bold leading-[1.04] tracking-[-0.035em] text-slate-950 text-balance sm:text-5xl lg:text-[3.5rem]">
                SEO Company Bergen County, NJ
              </h1>
              <p className="mt-5 text-base font-medium leading-7 tracking-[0.005em] text-slate-800 sm:text-lg">
                We help businesses improve their online visibility, reach
                potential customers, and grow their presence on Google in Bergen
                County, NJ.
              </p>
              <p className="mt-4 max-w-2xl text-base tracking-[0.005em] text-slate-600">
                Our SEO strategies focus on keyword research, website
                optimization, technical SEO, and local search visibility. We
                create solutions that match your business goals.
              </p>
              <Link
                href="/contact-us/"
                className="mt-8 inline-flex min-h-14 items-center justify-center bg-[#c8102e] px-7 py-4 text-base font-bold text-white transition-colors hover:bg-[#a90d27] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c8102e] focus-visible:ring-offset-2 sm:mt-9 sm:text-lg"
              >
                Contact Us
              </Link>
            </div>

            <div
              aria-hidden="true"
              className="relative mx-auto aspect-square w-full max-w-[27rem] overflow-hidden rounded-full bg-[#f4f7fb]"
            >
              <div className="absolute inset-[10%] rounded-full border border-[#0b63b8]/15" />
              <div className="absolute inset-[24%] rounded-full border border-[#0b63b8]/20" />
              <div className="absolute inset-[38%] rounded-full border border-[#0b63b8]/25" />
              <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c8102e] shadow-[0_0_0_12px_rgba(200,16,46,0.08)]" />
              <div className="absolute left-[24%] top-[31%] h-2 w-2 rounded-full bg-[#0b63b8]" />
              <div className="absolute right-[25%] top-[26%] h-2 w-2 rounded-full bg-[#0b63b8]" />
              <div className="absolute bottom-[25%] left-[30%] h-2 w-2 rounded-full bg-[#0b63b8]" />
              <div className="absolute bottom-[31%] right-[24%] h-2 w-2 rounded-full bg-[#0b63b8]" />
              <div className="absolute left-0 top-1/2 h-px w-full bg-[#0b63b8]/10" />
              <div className="absolute left-1/2 top-0 h-full w-px bg-[#0b63b8]/10" />
            </div>
          </div>
        </div>
      </section>

      {/* Chips part */}
      <section
        aria-label="Related SEO services"
        className="relative overflow-hidden border-y border-slate-200/80 bg-gradient-to-b from-[#f7faff] to-white py-12 sm:py-16"
      >
        <div
          aria-hidden="true"
          className="absolute left-0 top-0 h-[3px] w-full bg-gradient-to-r from-[#c8102e] via-[#0b63b8] to-transparent"
        />
        <nav className="mx-auto w-[92%] max-w-7xl">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-12">
            {relatedServices.map(({ label, href }) => (
              <li key={label} className="border-b border-slate-200/80">
                <Link
                  href={href}
                  className="group relative flex min-h-[3.25rem] w-fit items-center gap-3 text-[0.94rem] font-medium tracking-[0.005em] text-slate-700 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#8f0d26] after:transition-[width] after:duration-300 hover:text-[#075aa6] hover:after:w-full focus-visible:text-[#075aa6] focus-visible:outline-none focus-visible:after:w-full"
                >
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#c8102e] transition-transform duration-200 group-hover:scale-125 group-focus-visible:scale-125"
                  />
                  <span className="py-2">{label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </section>

      {/* Chips Part - Copy */}
      <section
        aria-label="Related locations"
        className="relative overflow-hidden border-y border-slate-200/80 bg-gradient-to-b from-[#f7faff] to-white py-12 sm:py-16"
      >
        <div
          aria-hidden="true"
          className="absolute left-0 top-0 h-[3px] w-full bg-gradient-to-r from-[#c8102e] via-[#0b63b8] to-transparent"
        />
        <nav className="mx-auto w-[92%] max-w-7xl">
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-12">
            {relatedServices2.map(({ label, href }) => (
              <li key={label} className="border-b border-slate-200/80">
                <Link
                  href={href}
                  className="group relative flex min-h-[3.25rem] w-fit items-center gap-3 text-[0.94rem] font-medium tracking-[0.005em] text-slate-700 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-[#8f0d26] after:transition-[width] after:duration-300 hover:text-[#075aa6] hover:after:w-full focus-visible:text-[#075aa6] focus-visible:outline-none focus-visible:after:w-full"
                >
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#c8102e] transition-transform duration-200 group-hover:scale-125 group-focus-visible:scale-125"
                  />
                  <span className="py-2">{label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </section>

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
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24">
          <header>
            <h2 className="max-w-5xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Full Focused 360* SEO Services in{" "}
              <span className="text-[#0033CC]">Bergen County, NJ</span>
            </h2>
            <p className="mt-8 max-w-4xl text-xl leading-relaxed text-[#343b49] md:text-2xl">
              Web Founders USA provides SEO services to help businesses improve
              their search engine rankings and attract relevant website traffic.
              We focus on making your website more useful for both visitors and
              search engines.
            </p>
            <p className="mt-5 max-w-4xl text-base leading-relaxed text-[#4b5563] md:text-lg">
              Our team works on website content, technical performance, and
              keyword targeting. These improvements help build a stronger online
              presence.
            </p>
          </header>
        </div>
      </section>

      <section className="relative bg-[#f7f8fb] text-black">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24">
          <header className="mb-10 max-w-5xl md:mb-14">
            <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Professional{" "}
              <span className="text-[#0033CC]">
                SEO Services in Bergen County
              </span>
            </h2>
            <p className="mt-8 text-xl leading-relaxed text-[#343b49] md:text-2xl">
              Our SEO services help businesses reach people searching for their
              products and services online. We use practical strategies to
              improve website performance and organic visibility.
            </p>
            <p className="mt-5 text-base leading-relaxed text-[#4b5563] md:text-lg">
              Whether you run a small business or a growing company, we can help
              identify opportunities to strengthen your SEO strategy.
            </p>
          </header>
          <div className="grid gap-px overflow-hidden border border-black/10 bg-black/10 sm:grid-cols-2">
            {services.map((service) => (
              <article key={service.title} className="bg-white p-6 md:p-8">
                <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
                  {service.title}
                </h3>
                {service.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph}
                    className="mt-3 text-base leading-relaxed text-[#4b5563] md:text-lg"
                  >
                    {paragraph}
                  </p>
                ))}
              </article>
            ))}
          </div>
          <article className="mt-8 border-l-2 border-[#c8102e] bg-white p-6 md:p-8">
            <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
              Keyword Research &amp; Competitor Analysis
            </h3>
            <p className="mt-3 max-w-4xl text-base leading-relaxed text-[#4b5563] md:text-lg">
              Keyword research helps identify the terms potential customers use
              when searching online. It allows us to target relevant searches
              for your business.
            </p>
            <p className="mt-3 max-w-4xl text-base leading-relaxed text-[#4b5563] md:text-lg">
              We research keywords such as Bergen County SEO, SEO company Bergen
              County NJ, and search engine optimization companies Bergen County
              NJ. We also review competitor websites to identify opportunities.
            </p>
          </article>
        </div>
      </section>

      <section className="relative bg-white text-black">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24">
          <header className="mb-10 md:mb-14">
            <h2 className="max-w-5xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Why Choose Our{" "}
              <span className="text-[#0033CC]">Bergen County SEO Company?</span>
            </h2>
            <p className="mt-8 max-w-4xl text-xl leading-relaxed text-[#343b49] md:text-2xl">
              The right SEO company can help your business build a stronger
              online presence. We focus on strategies that match your goals and
              target audience.
            </p>
            <p className="mt-5 max-w-4xl text-base leading-relaxed text-[#4b5563] md:text-lg">
              Our approach includes clear communication, relevant keyword
              targeting, useful content, and ongoing performance monitoring. We
              aim to support sustainable SEO growth.
            </p>
          </header>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f7f8fb] text-black">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24">
          <header className="mb-10 md:mb-14">
            <h2 className="max-w-5xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Our <span className="text-[#0033CC]">SEO Process</span>
            </h2>
          </header>
          <ol className="border-l border-[#c8102e]/30">
            {processSteps.map((step) => (
              <li
                key={step.title}
                className="relative grid gap-3 border-b border-slate-200 py-6 pl-7 md:grid-cols-[0.75fr_1.25fr] md:gap-8 md:py-8"
              >
                <span
                  aria-hidden="true"
                  className="absolute -left-[5px] top-8 h-2.5 w-2.5 rounded-full bg-[#c8102e]"
                />
                <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
                  {step.title}
                </h3>
                <p className="text-base leading-relaxed text-[#4b5563] md:text-lg">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="relative bg-white text-black">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[0.85fr_1.15fr] md:gap-12 md:px-12 md:py-24">
          <header>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              SEO for Businesses in{" "}
              <span className="text-[#0033CC]">Bergen County, NJ</span>
            </h2>
          </header>
          <p className="text-base leading-relaxed text-[#4b5563] md:text-lg">
            Businesses across Bergen County can benefit from a strong online
            presence. SEO helps potential customers discover relevant products
            and services through search engines.
            <br />
            <br />
            We develop strategies based on your industry, target audience, and
            service area. Our focus is on useful content and relevant search
            visibility.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f7f8fb] text-black">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24">
          <header className="mb-10 md:mb-14">
            <h2 className="max-w-5xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              SEO vs. <span className="text-[#0033CC]">Paid Advertising</span>
            </h2>
            <p className="mt-8 max-w-4xl text-xl leading-relaxed text-[#343b49] md:text-2xl">
              SEO helps improve visibility in organic search results over time.
              Paid advertising can provide faster visibility through sponsored
              placements.
            </p>
          </header>
          <p className="max-w-4xl text-base leading-relaxed text-[#4b5563] md:text-lg">
            Both approaches can support your marketing goals. The right choice
            depends on your budget, competition, and business objectives.
          </p>
        </div>
      </section>

      <section className="relative bg-white text-black">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24">
          <header className="mb-10 md:mb-14">
            <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Frequently <span className="text-[#0033CC]">Asked Questions</span>
            </h2>
          </header>
          <div className="border-t border-black/20">
            {faqs.map((faq, index) => (
              <article
                key={faq.question}
                className="grid gap-4 border-b border-black/20 py-6 md:grid-cols-[0.8fr_1.2fr] md:gap-8 md:py-8"
              >
                <h3 className="text-lg font-semibold leading-snug md:text-xl">
                  <span className="mr-2 font-mono text-sm text-[#0033CC]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  {faq.question}
                </h3>
                <p className="text-base leading-relaxed text-[#4b5563] md:text-lg">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
