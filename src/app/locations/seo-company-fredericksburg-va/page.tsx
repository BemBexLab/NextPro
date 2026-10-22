import type { Metadata } from "next";
import Link from "next/link";
import { withEnUsHreflang } from "@/lib/metadata";

const relatedServices = [
  { label: "E-commerce SEO Services", href: "/service/seo-services/ecommerce-seo/" },
  { label: "B2B SEO Services", href: "/service/seo-services/b2b-seo/" },
  { label: "Dental SEO Services", href: "/service/seo-services/dental-seo/" },
  { label: "Healthcare SEO Services", href: "/service/seo-services/healthcare-seo/" },
  { label: "Enterprise SEO Services", href: "/service/seo-services/enterprise-seo/" },
  { label: "Shopify SEO Services", href: "/service/seo-services/shopify-seo/" },
  { label: "White Label SEO Services", href: "/service/seo-services/white-label-seo/" },
  { label: "WordPress SEO Services", href: "/service/seo-services/wordpress-seo/" },
  { label: "Magento SEO Services", href: "/service/seo-services/magento-seo/" },
  { label: "Medical SEO Services", href: "/service/seo-services/medical-seo/" },
  { label: "SEO Audit Services", href: "/service/seo-services/seo-audit/" },
  { label: "Hotel SEO Services", href: "/service/seo-services/hotel-seo/" },
  { label: "Multilingual SEO Services", href: "/service/seo-services/multilingual-seo/" },
  { label: "SEO Content Writing Services", href: "/service/seo-services/seo-content-writing/" },
  { label: "WooCommerce SEO Services", href: "/service/seo-services/woocommerce-seo/" },
  { label: "BigCommerce SEO Services", href: "/service/seo-services/bigcommerce-seo/" },
  { label: "Boutique SEO Services", href: "/service/seo-services/boutique-seo/" },
  { label: "YouTube SEO Services", href: "/service/seo-services/youtube-seo/" },
  { label: "Roofing SEO Services", href: "/service/seo-services/roofing-seo/" },
  { label: "Outsource SEO Services", href: "/service/seo-services/outsource-seo/" },
  { label: "Construction SEO Services", href: "/service/seo-services/construction-seo/" },
  { label: "Local SEO Services", href: "/service/seo-services/local-seo-services/" },
  { label: "Employment Lawyers SEO Services", href: "/service/seo-services/employment-lawyers-seo/" },
  { label: "Locksmith SEO Services", href: "/service/seo-services/locksmith-seo-services/" },
  { label: "Insurance Broker SEO Service", href: "/service/seo-services/insurance-broker-seo/" },
  { label: "Automotive SEO", href: "/service/seo-services/automotive-seo/" },
];

const relatedServices2 = [
  { label: "Web Design Elk River", href: "/locations/web-design-elk-river/" },
  { label: "Web Design Gainesville, GA", href: "/locations/web-design-gainesville-ga/" },
  { label: "SEO Gwinnett", href: "/locations/seo-gwinnet/" },
  { label: "SEO Company in Union County, GA", href: "/locations/seo-company-union-county-ga/" },
  { label: "Alpharetta SEO Services", href: "/locations/alpharetta-seo-services/" },
  { label: "SEO Company Suwanee, GA", href: "/locations/seo-company-suwanee-ga/" },
  { label: "Maryland SEO Company", href: "/locations/maryland-seo-company/" },
  { label: "Alexandria Search Engine Optimization", href: "/locations/alexandria-search-engine-optimization/" },
  { label: "Prescott Search Engine Optimization", href: "/locations/prescott-search-engine-optimization/" },
  { label: "SEO Company Quincy, MA", href: "/locations/seo-company-quincy-ma/" },
];

const seoSteps = [
  {
    title: "Keyword Research",
    description:
      "We identify relevant keywords your potential customers search for on Google. This helps target the right audience and improve your website's organic visibility.",
  },
  {
    title: "On-Page SEO",
    description:
      "We optimize page titles, headings, meta descriptions, content, and internal links. These improvements help search engines understand your website and its services.",
  },
  {
    title: "Technical SEO",
    description:
      "We identify technical issues affecting your website's performance. Our process includes checking website speed, mobile usability, indexing, and broken links.",
  },
  {
    title: "Local SEO",
    description:
      "We help businesses improve local search visibility in Fredericksburg, Virginia. Our services include location page optimization, local keyword targeting, and Google Business Profile optimization where applicable.",
  },
  {
    title: "Content Optimization",
    description:
      "We create and improve useful website content that answers customer questions. This helps your business target relevant searches and provide a better user experience.",
  },
  {
    title: "SEO Performance Tracking",
    description:
      "We monitor organic traffic, keyword visibility, and website performance. This data helps us identify opportunities and improve your SEO strategy over time.",
  },
];

const reasons = [
  {
    title: "Customized SEO Strategies",
    description:
      "Every business has different SEO requirements. We develop strategies based on your website, industry, competition, and objectives.",
  },
  {
    title: "Focus on Relevant Traffic",
    description:
      "Website traffic is more valuable when it reaches the right audience. We target relevant keywords that align with your services and customer needs.",
  },
  {
    title: "Transparent Communication",
    description:
      "Clear communication helps you understand your SEO campaign. We explain priorities, recommendations, and available performance data.",
  },
  {
    title: "Ethical SEO Practices",
    description:
      "Sustainable SEO depends on useful content, technical quality, and relevant links. We focus on recommended practices rather than unrealistic ranking promises.",
  },
];

const businessTypes = [
  {
    title: "Local Service Businesses",
    description:
      "Local businesses can benefit from service pages, local keyword targeting, and business profile optimization. These improvements help potential customers discover relevant services.",
  },
  {
    title: "Professional Service Firms",
    description:
      "Professional firms can attract relevant visitors through informative content and optimized service pages. Clear information helps potential clients understand their expertise.",
  },
  {
    title: "Retail and E-commerce Businesses",
    description:
      "Retailers can improve product discovery through optimized product descriptions and category pages. Technical SEO also supports website usability.",
  },
  {
    title: "B2B Companies",
    description:
      "B2B companies can target industry specific searches with relevant content and detailed service pages. This helps connect businesses with potential clients.",
  },
];

const faqs = [
  {
    question: "What does an SEO company in Fredericksburg, VA do?",
    answer:
      "An SEO company helps businesses improve organic search visibility. Services may include keyword research, technical SEO, content optimization, and local SEO.",
  },
  {
    question:
      "How do I choose the best SEO company in Fredericksburg, Virginia?",
    answer:
      "Look for clear communication, transparent reporting, and a practical SEO strategy. Choose a provider that understands your goals and follows ethical optimization practices.",
  },
  {
    question: "How much do SEO services in Fredericksburg, VA cost?",
    answer:
      "SEO costs depend on your website, competition, and required services. A customized proposal can help determine the appropriate scope and budget.",
  },
  {
    question: "How long does SEO take to show results?",
    answer:
      "SEO results vary depending on competition, website condition, and implementation. Meaningful improvements may take several months or longer.",
  },
  {
    question: "Can SEO help small businesses?",
    answer:
      "Yes. SEO can help small businesses improve online visibility and attract relevant visitors. Local SEO is particularly useful for businesses serving specific areas.",
  },
  {
    question: "What is included in SEO services?",
    answer:
      "Services may include keyword research, on-page SEO, technical audits, content development, local SEO, and reporting. The exact scope depends on your business needs.",
  },
  {
    question: "Is local SEO important for Fredericksburg businesses?",
    answer:
      "Local SEO can help businesses appear in relevant local searches. It is valuable for companies that want to reach customers in their service area.",
  },
  {
    question: "Does Web Founders USA guarantee first-page rankings?",
    answer:
      "No SEO provider can guarantee specific Google rankings. Search results depend on competition, relevance, website quality, and search engine systems.",
  },
];

const results = [
  { value: "#1", label: "Local SEO Focus" },
  { value: "100+", label: "Local SEO Campaigns" },
  { value: "50+", label: "Local Markets Served" },
  { value: "3X", label: "Potential Lead Growth" },
];

export const metadata: Metadata = withEnUsHreflang({
  title: "SEO Company Fredericksburg, VA | Web Founders USA",
  description:
    "Looking for an SEO company in Fredericksburg, VA? Web Founders USA offers SEO services to improve search visibility, attract relevant traffic, and grow your business.",
  alternates: {
    canonical: "/locations/seo-company-fredericksburg-va/",
  },
});

const page = () => {
  return (
    <main className="overflow-hidden bg-white text-black">
      {/* Hero Section */}
      <section className="bg-white py-14 sm:py-20 lg:py-24">
        <div className="mx-auto w-[92%] max-w-7xl">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(20rem,0.8fr)] lg:gap-14">
            <div className="max-w-[52rem]">
              <div aria-hidden="true" className="mb-7 h-1 w-14 bg-[#c8102e]" />
              <h1 className="text-[2.5rem] font-bold leading-[1.04] tracking-[-0.035em] text-slate-950 text-balance sm:text-5xl lg:text-[3.5rem]">
                SEO Company Fredericksburg, VA
              </h1>

              {/* <h2 className="mt-8 max-w-2xl text-xl font-semibold leading-snug tracking-[0.005em] text-[#0b63b8] sm:mt-9 sm:text-2xl">
                What If Your Next Customer Is Just Around the Corner?
              </h2> */}

              <p className="mt-5 text-base font-medium leading-7 tracking-[0.005em] text-slate-800 sm:text-lg">
                Web Founders USA helps businesses improve their online
                visibility through professional SEO services in Fredericksburg,
                VA . We focus on helping your website reach wider & relevant
                audiences and attract potential customers with strong stability.
              </p>

              <p className="mt-4 max-w-2xl text-base leading-7 tracking-[0.005em] text-slate-600 sm:leading-8">
                Our SEO strategies include keyword research, technical SEO,
                content optimization, and local SEO Fredericksburg, VA.
              </p>

              <Link
                href="/contact-us"
                className="mt-8 inline-flex min-h-14 items-center justify-center bg-[#c8102e] px-7 py-4 text-base font-bold text-white transition-colors hover:bg-[#a90d27] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c8102e] focus-visible:ring-offset-2 sm:mt-9 sm:text-lg"
              >
                Talk to a Local SEO Expert
              </Link>
            </div>

            <dl className="grid grid-cols-2 border-y border-l-2 border-slate-200 border-l-[#c8102e] lg:ml-2">
              {results.map((result, index) => (
                <div
                  key={result.label}
                  className={`flex min-h-36 flex-col justify-center px-5 py-6 sm:min-h-40 sm:px-7 sm:py-8 ${
                    index < 2 ? "border-b border-slate-200" : ""
                  } ${index % 2 === 0 ? "border-r border-slate-200" : ""}`}
                >
                  <dt className="text-4xl font-bold leading-none tracking-[-0.045em] text-[#0b63b8] sm:text-5xl lg:text-[3.5rem]">
                    {result.value}
                  </dt>
                  <dd className="mt-3 max-w-44 text-[0.7rem] font-semibold leading-5 tracking-[0.09em] text-slate-600 sm:text-xs sm:tracking-[0.1em]">
                    {result.label}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
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
              Affordable &amp; Professional SEO Services in{" "}
              <span className="text-[#0033CC]">Fredericksburg, VA</span>
            </h2>
            <p className="mt-8 max-w-4xl text-xl leading-relaxed text-[#343b49] md:text-2xl">
              SEO, an acronym for Search Engine Optimization, is what makes a
              website visible and allowed to be found by potential customers on
              the Internet. With billions of searches happening every day and
              millions of websites available, the online world has never been
              more overcrowded. Web Founders USA can build a map for customers
              who are looking for your business when they need it. As a matter
              of fact, we optimized this page for those who are trying to find
              SEO in Fredericksburg, VA! Did it get the job done?
            </p>
          </header>
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

      <section className="relative overflow-hidden bg-[#f7f8fb] text-black">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24">
          <header className="mb-10 md:mb-14">
            <h2 className="max-w-5xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Hire Our Expert SEO Services{" "}
              <span className="text-[#0033CC]">Fredericksburg, VA</span>
            </h2>
          </header>
          <ol className="grid gap-px overflow-hidden border border-black/10 bg-black/10 sm:grid-cols-2 lg:grid-cols-3">
            {seoSteps.map((step, index) => (
              <li key={step.title} className="bg-white p-6 md:p-8">
                <p className="font-mono text-xs font-bold uppercase tracking-widest text-[#0033CC]">
                  Step {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 text-xl font-semibold leading-tight tracking-tight md:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-3 text-base leading-relaxed text-[#4b5563] md:text-lg">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
          <div className="mt-8 flex flex-col gap-5 border-t border-black/15 pt-8 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="font-mono text-xs font-bold uppercase tracking-widest text-[#0033CC]">
                Step 07
              </p>
              <h3 className="mt-2 text-2xl font-semibold tracking-tight">
                Call to Action
              </h3>
              <p className="mt-2 max-w-3xl text-base leading-relaxed text-[#4b5563] md:text-lg">
                Ready to grow your online presence? Contact our team today to
                discuss professional SEO services in Fredericksburg, VA, and
                find the right strategy for your business.
              </p>
            </div>
            <Link
              href="/contact-us/"
              className="inline-flex shrink-0 items-center justify-center rounded-xl bg-[#0033CC] px-6 py-3.5 font-semibold text-white transition-colors hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0033CC] focus-visible:ring-offset-2"
            >
              Contact our team today
            </Link>
          </div>
        </div>
      </section>

      <section className="relative bg-white text-black">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24">
          <header className="mb-10 md:mb-14">
            <h2 className="max-w-5xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Why Choose{" "}
              <span className="text-[#0033CC]">Web Founders USA?</span>
            </h2>
            <div className="mt-8 max-w-4xl space-y-4 text-xl leading-relaxed text-[#343b49] md:text-2xl">
              <p>
                The right{" "}
                <Link className="text-blue-600 hover:underline" href={"/"}>
                  SEO company
                </Link>{" "}
                requires a clear strategy and reliable communication. Your SEO
                partner should understand your business goals and target
                audience.
              </p>
              <p>
                Web Founders USA focuses on customized strategies, relevant
                traffic, and sustainable optimization. We aim to help businesses
                build a stronger online presence.
              </p>
            </div>
          </header>
          <div className="grid gap-px overflow-hidden border border-black/10 bg-black/10 sm:grid-cols-2">
            {reasons.map((reason) => (
              <article key={reason.title} className="bg-white p-6 md:p-8">
                <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
                  {reason.title}
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-[#4b5563] md:text-lg">
                  {reason.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-[#f7f8fb] text-black">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[0.85fr_1.15fr] md:gap-12 md:px-12 md:py-24">
          <header>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Local SEO for{" "}
              <span className="text-[#0033CC]">Fredericksburg, VA</span>
            </h2>
          </header>
          <div className="text-base leading-relaxed text-[#4b5563] md:text-lg">
            <p className="mb-5 text-xl leading-relaxed text-[#343b49] md:text-2xl">
              Local SEO provides businesses with an opportunity to connect with
              potential customers who are looking for services in their area.
              This technique works particularly well for businesses that rely on
              customers visiting them in person.
            </p>
            <p className="mb-5">
              At Web Founders USA, we work with location based pages, relevant
              business listings, and local keywords. Our aim is to help you
              appear in the search engine results for Fredericksburg, VA with
              utmost accuracy.
            </p>
            <p>
              We help to identify additional opportunities located in the
              communities around your business premises. Each location based
              page must contain comprehensive and interesting content.
            </p>
          </div>
        </div>
      </section>

      <section className="relative bg-white text-black">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24">
          <header className="mb-10 md:mb-14">
            <h2 className="max-w-5xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              SEO for Different Types of{" "}
              <span className="text-[#0033CC]">Businesses</span>
            </h2>
            <p className="mt-8 max-w-4xl text-xl leading-relaxed text-[#343b49] md:text-2xl">
              Different industries require different SEO strategies. We tailor
              our recommendations to the business model and target audience.
            </p>
          </header>
          <div className="grid gap-px overflow-hidden border border-black/10 bg-black/10 sm:grid-cols-2">
            {businessTypes.map((business) => (
              <article key={business.title} className="bg-white p-6 md:p-8">
                <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
                  {business.title}
                </h3>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-[#4b5563] md:text-lg">
                  {business.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#f7f8fb] text-black">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24">
          <header className="mb-10 md:mb-14">
            <h2 className="max-w-5xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              SEO vs. <span className="text-[#0033CC]">Paid Advertising</span>
            </h2>
            <p className="mt-8 max-w-4xl text-xl leading-relaxed text-[#343b49] md:text-2xl">
              SEO improves organic visibility, while paid advertising provides
              visibility through sponsored search placements. Both approaches
              can support different marketing objectives.
            </p>
          </header>
          <div className="grid gap-6 md:grid-cols-2">
            <article className="border-t-2 border-[#0033CC] bg-white p-6 md:p-8">
              <h3 className="text-2xl font-semibold tracking-tight">SEO</h3>
              <p className="mt-3 text-base leading-relaxed text-[#4b5563] md:text-lg">
                SEO generally requires time to build momentum.
              </p>
            </article>
            <article className="border-t-2 border-[#0033CC] bg-white p-6 md:p-8">
              <h3 className="text-2xl font-semibold tracking-tight">
                Paid Advertising
              </h3>
              <p className="mt-3 text-base leading-relaxed text-[#4b5563] md:text-lg">
                Paid advertising can generate traffic sooner, but it typically
                depends on an ongoing advertising budget.
              </p>
            </article>
          </div>
          <p className="mt-6 max-w-4xl text-base leading-relaxed text-[#4b5563] md:text-lg">
            The right approach depends on your goals, competition, and budget.
            Some businesses benefit from combining both strategies.
          </p>
        </div>
      </section>

      <section className="relative bg-white text-black">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-[0.85fr_1.15fr] md:gap-12 md:px-12 md:py-24">
          <header>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Measuring SEO <span className="text-[#0033CC]">Performance</span>
            </h2>
          </header>
          <div className="space-y-5 text-base leading-relaxed text-[#4b5563] md:text-lg">
            <p className="text-xl leading-relaxed text-[#343b49] md:text-2xl">
              SEO performance should be measured using meaningful business and
              website metrics. Rankings alone do not provide a complete picture.
            </p>
            <p>
              We can monitor organic clicks, search impressions, keyword
              visibility, and landing page performance. Where tracking is
              available, we also evaluate leads and conversions.
            </p>
            <p>
              These insights help identify opportunities and guide future
              improvements. Results vary depending on competition, website
              quality, and other factors.
            </p>
          </div>
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
};

export default page;
