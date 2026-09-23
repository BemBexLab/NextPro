import { isValidElement, type ReactNode } from "react";

const countyListClassName = [
  "my-6 grid list-none gap-2 rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-4 shadow-sm sm:grid-cols-2 sm:p-5",
  "[&>li]:relative [&>li]:rounded-xl [&>li]:border [&>li]:border-slate-100 [&>li]:bg-white [&>li]:py-3 [&>li]:pl-7 [&>li]:pr-3 [&>li]:text-sm [&>li]:font-medium [&>li]:leading-relaxed [&>li]:text-slate-700 [&>li]:shadow-sm",
  "[&>li]:before:absolute [&>li]:before:left-3 [&>li]:before:top-[1.1rem] [&>li]:before:h-1.5 [&>li]:before:w-1.5 [&>li]:before:rounded-full [&>li]:before:bg-blue-600 [&>li]:before:content-['']",
].join(" ");
const countySubheadingClassName =
  "rounded-r-xl border-l-4 border-blue-600 bg-gradient-to-r from-blue-50 to-transparent py-2.5 pl-4 pr-3 text-lg font-bold leading-tight tracking-tight text-slate-900 sm:text-xl";
const countyHeroLinkClassName =
  "font-semibold text-white underline decoration-white/50 underline-offset-4 transition-colors hover:text-blue-300";

type CountyFaqItemProps = {
  id: string;
  question: string;
  answer: string;
};

function CountyFaqItem({ id, question, answer }: CountyFaqItemProps) {
  return (
    <details className="group rounded-xl border border-slate-200 bg-white transition-colors duration-200 open:border-blue-200 open:bg-slate-50/50">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-5 py-5 text-base font-medium text-slate-900 marker:content-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-blue-600 [&::-webkit-details-marker]:hidden sm:px-6 sm:py-6 sm:text-lg">
        <span id={id} role="heading" aria-level={3} className="leading-snug">
          {question}
        </span>
        <svg
          aria-hidden="true"
          className="h-5 w-5 shrink-0 text-slate-700 transition-transform duration-200 group-open:rotate-180"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="m6 9 6 6 6-6"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </summary>
      <div className="border-t border-slate-100 px-5 pb-5 pt-4 text-sm leading-7 text-slate-600 sm:px-6 sm:pb-6 sm:text-base">
        {answer}
      </div>
    </details>
  );
}

export type CountyContentSection = {
  heading?: string;
  paragraphs: ReactNode[];
};

export type CountyPost = {
  id: number;
  slug: string;
  metaTitle?: string;
  metaDescription?: string;
  title: string;
  cardTitle?: string;
  description: ReactNode;
  actions: { label: string; href: string }[];
  submitLabel: string;
  image?: string;
  publishedAt?: string;
  content: CountyContentSection[];
};

export const countyPosts: CountyPost[] = [
  {
    id: 1,
    slug: "seo-company-union-county-ga",
    metaTitle: "SEO Company Union County GA | Web Founders USA",
    metaDescription: "Grow your Union County business with expert SEO services. Improve local rankings, attract qualified traffic, and generate more leads in Canton and beyond.",
    title: "SEO Company in Union County, GA",
    description: (
      <div className="space-y-3">
        <p>
          Your customers are searching online for the products and services they
          need. If your business does not appear when those searches happen,
          your competitors have an opportunity to win those customers.
        </p>
        <p>
          Web Founders USA provides professional{" "}
          <a
            href="/service/seo-services/"
            className={countyHeroLinkClassName}
          >
            SEO Services
          </a>{" "}
          for businesses in Union County, GA, helping improve search visibility,
          attract qualified local traffic, and turn website visitors into leads
          and customers. Our strategies combine technical SEO, content
          optimization, local search, keyword research, authority building, and
          conversion-focused improvements.
        </p>
        <p>
          If you operate a local service business, professional practice,
          construction company, healthcare organization, e-commerce store, or
          B2B company, we build an SEO strategy around your business, target
          audience, and market.
        </p>
      </div>
    ),
    actions: [
      {
        label: "Ready to improve your visibility in Union County?",
        href: "/contact-us",
      },
    ],
    submitLabel: "Request a Free SEO Audit.",
    image: "",
    publishedAt: "2026-09-21",
    content: [
      {
        heading: "Why Do Businesses in Union County Need SEO?",
        paragraphs: [
          "A strong online presence is essential for businesses competing for local customers. People increasingly use search engines to compare businesses, find nearby services, read reviews, research solutions, and decide who to contact.",
          "Simply having a website is not enough. Your website needs to be technically sound, relevant to your target searches, easy to navigate, and optimized for the locations and services you want to promote.",
          "Our SEO strategies help businesses in Union County:",
          <div>
            <ul className={countyListClassName}>
              <li>Improve organic search visibility</li>
              <li>Reach customers searching for their services</li>
              <li>Target relevant local keywords</li>
              <li>Build stronger website authority</li>
              <li>Improve website performance</li>
              <li>Generate qualified organic traffic</li>
              <li>Strengthen local search presence</li>
              <li>Create better opportunities for conversions</li>
            </ul>
          </div>,
          "The objective is not to attract random visitors. It is to attract people who are genuinely interested in what your business offers.",
        ],
      },
      {
        heading: "Our SEO Services in Union County",
        paragraphs: [
          "We provide a complete SEO strategy rather than relying on a single optimization technique. Each part of the campaign works together to build a stronger and more visible website.",
          <h3 className={countySubheadingClassName}>Technical SEO</h3>,
          "Technical SEO provides the foundation for your search visibility. We identify issues that may prevent search engines from crawling, understanding, or indexing important pages.",
          "Our technical SEO work may include:",
          <ul className={countyListClassName}>
            <li>Website crawling and indexing</li>
            <li>Site speed optimization</li>
            <li>Mobile usability</li>
            <li>Core Web Vitals</li>
            <li>XML sitemap review</li>
            <li>Robots.txt optimization</li>
            <li>Broken links</li>
            <li>Redirects</li>
            <li>URL structure</li>
            <li>Duplicate content</li>
            <li>Website architecture</li>
            <li>Internal linking</li>
            <li>Structured data</li>
          </ul>,
          "A technically healthy website makes it easier for search engines to discover and understand your most important content.",
          <h3 className={countySubheadingClassName}>On-Page SEO</h3>,
          "On-page SEO focuses on making individual pages more relevant to both search engines and users.",
          "We optimize:",
          <ul className={countyListClassName}>
            <li>Page titles</li>
            <li>Meta descriptions</li>
            <li>Headings</li>
            <li>Website content</li>
            <li>URLs</li>
            <li>Images and alt text</li>
            <li>Internal links</li>
            <li>Calls to action</li>
            <li>Content structure</li>
            <li>Relevant topics and entities</li>
          </ul>,
          "Each page should have a clear purpose and match the search intent behind the keywords it targets.",
          <h3 className={countySubheadingClassName}>Local SEO Services</h3>,
          "For businesses that serve customers in Union County, local search visibility can be extremely valuable.",
          <p>
            Our{" "}
            <a
              href="/service/seo-services/local-seo-services/"
              className="font-semibold text-blue-700 underline decoration-blue-300 underline-offset-4 transition-colors hover:text-blue-500"
            >
              Local SEO Services
            </a>{" "}
            help strengthen your presence for location-based searches and can
            include:
          </p>,
          <ul className={countyListClassName}>
            <li>Google Business Profile optimization</li>
            <li>Local keyword research</li>
            <li>Location page optimization</li>
            <li>Local citations</li>
            <li>Business information consistency</li>
            <li>Review signals</li>
            <li>Local content</li>
            <li>Service-area optimization</li>
            <li>Local internal linking</li>
          </ul>,
          "We focus on the areas where your business actually operates rather than creating generic location pages simply to target more keywords."
        ],
      },
      {
          heading: "SEO Company Serving Canton, GA",
          paragraphs: [
            "Businesses targeting Canton and surrounding Georgia communities need a local SEO strategy that reflects their services, market, and customers.",
            <p>Our <b>Canton SEO Services</b> help businesses build visibility around relevant searches made by customers looking for local products and services.</p>,
            "Depending on your industry, your strategy may target searches involving:",
            <ul className={countyListClassName}>
              <li>Services in Canton</li>
              <li>Businesses near Canton</li>
              <li>Local service providers</li>
              <li>Canton-area businesses</li>
              <li>Service-specific searches</li>
              <li>Location-based commercial searches</li>
            </ul>,
            "Instead of repeating “Canton” throughout a page, we build genuine local relevance through useful content, location signals, service pages, internal links, and local optimization.",
            <p className="">If you're looking for an <b>SEO Company Canton GA</b> businesses can rely on for a strategic, long-term approach, our team can develop a campaign based on your goals and competitive landscape.</p>
          ],
      },
      {
          heading: "SEO for Different Businesses in Union County",
          paragraphs: [
            "SEO should reflect the type of business you operate. A roofing company does not need the same strategy as an e-commerce store, medical practice, or B2B organization.",
            "We develop industry-specific strategies for businesses across Union County and surrounding markets.",
            <h3 className={countySubheadingClassName}>Construction and Local Contractors</h3>,
            "Construction companies and contractors often depend on local searches to generate new project opportunities. Targeted service pages, location pages, project-related content, and local SEO can help these businesses reach customers searching for their services.",
            <p className="">Our <a href="/service/seo-services/construction-seo/" className="hover:text-blue-500 font-semibold">Construction SEO Services</a> can be tailored around specific construction services, project types, locations, and customer needs.</p>,
            <p>Roofing businesses can also benefit from dedicated service and location strategies. Our <a href="/service/seo-services/roofing-seo/" className="hover:text-blue-500 font-semibold underline">Roofing SEO Services</a> focus on improving visibility for roofing-related searches, including repairs, replacements, inspections, and other high-intent services.</p>,

            <h3 className={countySubheadingClassName}>Healthcare and Medical Businesses</h3>,
            "Healthcare businesses compete for highly specific service and location searches. Patients often research providers, treatments, services, and locations before making contact.",
            <p className="">Our <a href="/service/seo-services/healthcare-seo/" className="hover:text-blue-500 font-semibold underline">Healthcare SEO Services</a> can help healthcare organizations build stronger search visibility through optimized service pages, local SEO, helpful content, and technical improvements.</p>,
            <p>For medical practices, <a href="/service/seo-services/medical-seo/" className="hover:text-blue-500 font-semibold underline">Medical SEO Services</a> can support visibility around relevant medical services, locations, and patient questions while maintaining a clear and trustworthy content structure.</p>,
            <p>Dental practices can also benefit from a focused strategy. <a href="/service/seo-services/dental-seo/" className="hover:text-blue-500 font-semibold underline">Dental SEO Services</a> can target dental services, local searches, patient questions, and practice-specific information.</p>,


            <h3 className={countySubheadingClassName}>B2B Businesses</h3>,
            "B2B companies often have longer customer journeys and more specialized search behavior. Potential clients may research solutions for weeks or months before contacting a provider.",
            <p className="">Our <a href="/service/seo-services/b2b-seo/" className="hover:text-blue-500 font-semibold underline">B2B SEO Services</a> help businesses target decision-makers through commercial keywords, industry-specific content, service pages, and educational resources.</p>,
            "The strategy can focus on both high-intent searches and informational topics that support customers throughout the buying journey.",

            <h3 className={countySubheadingClassName}>E-Commerce Businesses</h3>,
            "E-commerce websites require SEO strategies that account for products, categories, transactional searches, technical performance, and user experience.",
            <p className="">Our <a href="/service/seo-services/ecommerce-seo/" className="hover:text-blue-500 font-semibold underline">E-commerce SEO Services</a> can help optimize:</p>,
            <ul className={countyListClassName}>
              <li>Product pages</li>
              <li>Category pages</li>
              <li>Product descriptions</li>
              <li>Internal links</li>
              <li>Site architecture</li>
              <li>Metadata</li>
              <li>Technical SEO</li>
              <li>Transactional keywords</li>
            </ul>,
            <p>For businesses using Shopify, our <a href="/service/seo-services/shopify-seo/" className="hover:text-blue-500 font-semibold underline">Shopify SEO Services</a> can focus on technical configuration, product visibility, collection pages, site structure, and search optimization.</p>,

            <h3 className={countySubheadingClassName}>Hospitality Businesses</h3>,
            "Hotels and hospitality businesses compete for highly localized and travel-related searches. Customers may search for accommodations, destinations, amenities, nearby attractions, and booking options.",
            <p className="">Our <a href="/service/seo-services/hotel-seo/" className="hover:text-blue-500 font-semibold underline">Hotel SEO Services</a> help hospitality businesses build visibility around relevant searches and create a stronger organic presence in their target markets.</p>,

            <h3 className={countySubheadingClassName}>Specialized and Boutique Businesses</h3>,
            "Smaller or specialized businesses often need a highly focused SEO strategy rather than a broad campaign.",
            <p className="/service/seo-services/boutique-seo/">Our <a href="" className="hover:text-blue-500 font-semibold underline">Boutique SEO Services</a> can be customized around a specific niche, target audience, service area, and competitive environment.</p>,
          ],
      },
      {
        heading: "SEO Content Strategy for Union County Businesses",
        paragraphs: [
          "Content plays an important role in building topical relevance and answering the questions your customers search for.",
          "We create content based on actual search intent rather than writing articles simply to add more pages to your website.",
          "Potential content opportunities include:",
          <ul className={countyListClassName}>
            <li>Service guides</li>
            <li>Local business resources</li>
            <li>Frequently asked questions</li>
            <li>Industry guides</li>
            <li>Comparison content</li>
            <li>Cost-related searches</li>
            <li>How-to resources</li>
            <li>Location-specific content</li>
            <li>Product and service explanations</li>
          </ul>,
          <p>Our <a href="/service/seo-services/seo-content-writing/" className="hover:text-blue-500 font-semibold underline">SEO Content Writing Services</a> focus on creating useful, easy-to-read content that supports your target keywords and broader website strategy.</p>,
          <p>Good SEO content should answer the user's question first. Keywords should fit naturally into the content rather than interrupting the reading experience.</p>
        ],
      },
      {
        heading: "Multilingual SEO for Union County Businesses",
        paragraphs: [
          "Businesses serving diverse audiences may need content in more than one language.",
          "A multilingual website requires more than simply translating existing pages. Search behavior, keywords, language variations, page structures, and user expectations can differ between audiences.",
          <p>Our <a href="/service/seo-services/multilingual-seo/" className="hover:text-blue-500 font-semibold underline">Multilingual SEO Services</a> can help businesses develop a more effective search strategy across multiple languages and markets.</p>,
          "This can include:",
          <ul className={countyListClassName}>
            <li>Multilingual keyword research</li>
            <li>Translated and optimized content</li>
            <li>International and language targeting</li>
            <li>Technical implementation</li>
            <li>Multilingual metadata</li>
            <li>Internal linking</li>
            <li>Search intent analysis</li>
          </ul>,
        ],
      },
      {
        heading: "SEO Audit for Your Union County Website",
        paragraphs: [
          "Before starting an SEO campaign, it is important to understand what is already working and where opportunities exist.",
          <p>Our <a href="/service/seo-services/seo-audit/" className="hover:text-blue-500 font-semibold">SEO Audit Services</a> evaluate the major factors that influence your website's organic performance.</p>,
          <p>Our <a href="/service/seo-services/multilingual-seo/" className="hover:text-blue-500 font-semibold underline">Multilingual SEO Services</a> can help businesses develop a more effective search strategy across multiple languages and markets.</p>,
          "We may review:",
          <ul className={countyListClassName}>
            <li>Technical SEO</li>
            <li>Website structure</li>
            <li>Existing rankings</li>
            <li>Keyword targeting</li>
            <li>Content quality</li>
            <li>Local SEO</li>
            <li>Internal linking</li>
            <li>Page speed</li>
            <li>Mobile usability</li>
            <li>Competitor performance</li>
            <li>Backlink profile</li>
            <li>Conversion opportunities</li>
          </ul>,
          <p>The result is a clearer roadmap showing what should be fixed, improved, created, or prioritized.</p>
        ],
      },
      {
        heading: "Competitor SEO Analysis",
        paragraphs: [
          "Your competitors can provide useful insights into the search landscape.",
          <p>We analyze competing websites to understand:</p>,
          <ul className={countyListClassName}>
            <li>Which keywords they target</li>
            <li>What services they promote</li>
            <li>Which pages attract visibility</li>
            <li>How their websites are structured</li>
            <li>What content they publish</li>
            <li>How they approach local SEO</li>
            <li>Where content gaps exist</li>
            <li>What opportunities may be available</li>
          </ul>,
          <p>The goal is not to copy competitors. It is to understand the market and develop a stronger strategy that gives your business its own competitive advantage.</p>
        ],
      },
      {
        heading: "Enterprise SEO for Growing Businesses",
        paragraphs: [
          "Businesses operating across multiple locations or markets need an SEO structure that can scale.",
          "Creating hundreds of similar pages can create problems if those pages provide little unique value. Instead, we build scalable structures around services, locations, industries, and customer needs.",
          "Our Enterprise SEO Services can support larger organizations with:",
          <ul className={countyListClassName}>
            <li>Large website architecture</li>
            <li>Multi-location SEO</li>
            <li>Technical SEO</li>
            <li>Indexation management</li>
            <li>Internal linking</li>
            <li>Scalable content</li>
            <li>Location strategies</li>
            <li>Keyword segmentation</li>
            <li>Performance monitoring</li>
          </ul>,
          "This allows growing businesses to expand their organic presence without sacrificing website quality.",
        ],
      },
      {
        heading: "GEO, AEO, and AI Search Optimization",
        paragraphs: [
          "Search is evolving beyond traditional Google results. Customers increasingly use AI-powered platforms to ask questions, research businesses, and compare solutions.",
          "Our modern SEO strategy considers:",
          <h3 className={countySubheadingClassName}>
            Generative Engine Optimization
          </h3>,
          "We organize important business information so modern search systems can better understand your company, services, locations, and expertise.",
          <h3 className={countySubheadingClassName}>
            Answer Engine Optimization
          </h3>,
          "We create clear answers to questions your potential customers are asking.",
          <h3 className={countySubheadingClassName}>
            AI and LLM Searc
          </h3>,
          "We structure useful business and informational content in a way that provides clear context about your organization.",
          "The goal is not to write for machines instead of people. We create useful, trustworthy content for users while making the information easier for modern search systems to understand."
        ],
      },
      {
        heading: "Conversion Focused SEO",
        paragraphs: [
          "More traffic does not automatically mean more business.",
          "Your website should make it easy for visitors to understand your services and take the next step.",
          "We can optimize:",
          <ul className={countyListClassName}>
            <li>Contact forms</li>
            <li>Quote requests</li>
            <li>Calls to action</li>
            <li>Service pages</li>
            <li>Navigation</li>
            <li>Mobile experience</li>
            <li>Trust signals</li>
            <li>Contact information</li>
            <li>Internal links</li>
            <li>Landing page structure</li>
          </ul>,
          "Every important page should guide visitors toward a logical next action.",
        ],
      },
      {
        heading: "Our SEO Process",
        paragraphs: [
          <h3 className={countySubheadingClassName}>1. Website Audit</h3>,
          "We evaluate your website's technical health, content, rankings, local visibility, and conversion opportunities.",
          <h3 className={countySubheadingClassName}>2. Keyword Research</h3>,
          "We identify valuable keywords based on your services, target locations, competition, and customer intent.",
          <h3 className={countySubheadingClassName}>3. Competitor Analysis</h3>,
          "We study competing businesses to identify keyword opportunities, content gaps, and areas where your website can improve.",
          <h3 className={countySubheadingClassName}>4. SEO Strategy</h3>,
          "We create a customized roadmap based on your business goals, market, audience, and growth opportunities.",
          <h3 className={countySubheadingClassName}>5. Technical Optimization</h3>,
          "We address technical issues involving crawling, indexing, performance, mobile usability, and website architecture.",
          <h3 className={countySubheadingClassName}>6. On-Page Optimization</h3>,
          "We optimize important pages, headings, metadata, content, images, URLs, and internal links.",
          <h3 className={countySubheadingClassName}>7. Local SEO</h3>,
          "We improve your local search presence across Union County, Canton, and other relevant service areas.",
          <h3 className={countySubheadingClassName}>8. Content Development</h3>,
          "We create and optimize content that supports your services, target keywords, and customers' questions.",
          <h3 className={countySubheadingClassName}>9. Authority Building</h3>,
          "We develop relevant authority and trust signals to support long-term organic visibility.",
          <h3 className={countySubheadingClassName}>10. Reporting and Optimization</h3>,
          "We monitor rankings, organic traffic, conversions, and other meaningful SEO metrics and use the data to continuously improve the campaign.",
        ],
      },
      {
        heading: "Why Choose Web Founders USA?",
        paragraphs: [
          <h3 className={countySubheadingClassName}>Customized SEO Strategies</h3>,
          "We don't use a one-size-fits-all approach. Your strategy is based on your business, industry, audience, location, and competition.",
          <h3 className={countySubheadingClassName}>Local Search Expertise</h3>,
          "We understand the importance of location-based visibility for businesses targeting Union County, Canton, and surrounding markets.",
          <h3 className={countySubheadingClassName}>Technical and Content Expertise</h3>,
          "We combine technical SEO with useful content, ensuring your website has both a strong foundation and valuable information.",
          <h3 className={countySubheadingClassName}>Industry-Specific SEO</h3>,
          "From construction and roofing to healthcare, dental, B2B, e-commerce, and hospitality, we adapt our strategy to your business model.",
          <h3 className={countySubheadingClassName}>Modern Search Optimization</h3>,
          "Our approach considers traditional SEO alongside local search, GEO, AEO, and AI-powered search experiences.",
          <h3 className={countySubheadingClassName}>Long-Term Growth</h3>,
          "Our focus is on building a sustainable organic presence rather than chasing short-term ranking changes.",
        ],
      },
      {
        heading: "Grow Your Business With SEO in Union County",
        paragraphs: [
          "Your next customer may already be searching for the services you provide.",
          "The challenge is making sure your business is visible when those searches happen.",
          "Web Founders USA helps businesses improve their organic visibility with technical SEO, local optimization, keyword research, content strategy, competitor analysis, authority building, and conversion-focused SEO.",
          "Whether you're targeting customers in Union County, Canton, or multiple markets across Georgia, we can create a strategy designed around your business goals.",
        ],
      },
      {
        heading: "Frequently Asked Questions",
        paragraphs: [
          <div className="mx-auto w-full max-w-5xl space-y-4">
            <CountyFaqItem
              id="county-faq-1"
              question="What does an SEO company in Union County do?"
              answer="An SEO company helps businesses improve their visibility in search engines through technical optimization, keyword research, content development, local SEO, on-page optimization, competitor analysis, and ongoing performance improvements."
            />
            <CountyFaqItem
              id="county-faq-2"
              question="How can SEO help my Union County business?"
              answer="SEO can help your business appear when potential customers search for relevant products and services. A strong strategy can increase qualified organic traffic and create more opportunities for calls, inquiries, bookings, and sales."
            />
            <CountyFaqItem
              id="county-faq-3"
              question="Do you provide SEO services in Canton, GA?"
              answer="Yes. We can develop SEO strategies for businesses targeting Canton and surrounding areas, including local keyword research, location optimization, content development, technical SEO, and Google Business Profile optimization."
            />
            <CountyFaqItem
              id="county-faq-4"
              question="How does local SEO help businesses in Union County?"
              answer="Local SEO helps search engines understand where your business operates and which local searches are relevant to your services. It can improve visibility in location-based searches and local search results."
            />
            <CountyFaqItem
              id="county-faq-5"
              question="How long does SEO take to work?"
              answer="SEO is a long-term process, and results vary based on competition, website condition, authority, content, target keywords, and market. Some improvements may happen relatively quickly, while competitive searches generally require ongoing optimization."
            />
            <CountyFaqItem
              id="county-faq-6"
              question="Do you work with businesses outside Union County?"
              answer="Yes. SEO campaigns can target local, regional, national, or multi-location markets depending on your business model and objectives."
            />
            <CountyFaqItem
              id="county-faq-7"
              question="Can you optimize my Google Business Profile?"
              answer="Yes. Google Business Profile optimization can be included in a local SEO strategy along with location pages, local content, citations, and other relevant local search activities."
            />
            <CountyFaqItem
              id="county-faq-8"
              question="Can SEO help a multi-location business?"
              answer="Yes. Multi-location businesses can benefit from a scalable SEO structure combining location pages, technical optimization, local SEO, content, internal linking, and centralized performance tracking."
            />
            <CountyFaqItem
              id="county-faq-9"
              question="Can you perform an SEO audit for my website?"
              answer="Yes. An SEO audit can identify technical issues, keyword gaps, content opportunities, local SEO improvements, and other factors that may be limiting your website's organic performance."
            />
            <CountyFaqItem
              id="county-faq-10"
              question="Why should I hire a professional SEO company?"
              answer="A professional SEO strategy brings together technical SEO, keyword research, content, local search, competitor analysis, authority building, and performance measurement. This creates a structured approach to improving your online visibility."
            />
            <div className="flex justify-center pt-5">
              <a
                href="/contact-us"
                className="inline-flex items-center justify-center rounded-lg border-2 border-blue-700 bg-white px-6 py-3 font-semibold text-blue-800 transition-colors hover:bg-blue-700 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2"
              >
                Start Your Journey
              </a>
            </div>
          </div>,
        ],
      },
    ],
  },
  {
    id: 2,
    slug: "alpharetta-seo-services",
    metaTitle: "SEO Company Union County GA | Web Founders USA",
    metaDescription: "Grow your Union County business with expert SEO services. Improve local rankings, attract qualified traffic, and generate more leads in Canton and beyond.",
    title: "Alpharetta SEO Services",
    description: (
      <div className="space-y-3">
        <p>
          Web Founders USA provides professional Alpharetta SEO services to help businesses improve their online visibility, reach local customers, and generate more qualified traffic from search engines. Our SEO team creates customized strategies based on your business goals, industry, competition, target audience, and service area.
        </p>
        <p>
          From local SEO in Alpharetta GA and keyword research to technical SEO, on-page optimization, content optimization, and Google Business Profile optimization, we focus on the key factors that support stronger organic search visibility.
        </p>
        <p>
          Whether you run a local service business, e-commerce store, healthcare practice, B2B company, or growing enterprise, <a href="/" className="hover:text-blue-500 underline font-semibold">Web Founders USA</a> can develop an SEO strategy designed around your specific needs.
        </p>
      </div>
    ),
    actions: [
      {
        label: "Ready to improve your visibility in Alpharetta GA?",
        href: "/contact-us",
      },
    ],
    submitLabel: "Request a Free SEO Audit.",
    image: "",
    publishedAt: "2026-09-21",
    content: [
      {
        heading: "SEO Services in Alpharetta GA",
        paragraphs: [
          "Our SEO services in Alpharetta GA are designed to improve your website's visibility for relevant searches and help potential customers find your business online.",
          "We look at your complete website and search presence rather than focusing on only one ranking factor.",
          "Our SEO services include:",
          <ul className={countyListClassName}>
            <li>Local SEO</li>
            <li>On-page SEO</li>
            <li>Technical SEO</li>
            <li>Keyword research</li>
            <li>SEO content optimization</li>
            <li>Competitor analysis</li>
            <li>SEO audits</li>
            <li>Google Business Profile optimization</li>
            <li>Local citation building</li>
            <li>Internal linking</li>
            <li>Schema markup</li>
            <li>Mobile SEO</li>
            <li>Website speed optimization</li>
            <li>Conversion-focused SEO</li>
          </ul>,
          <p>
            If your business serves customers in Alpharetta and nearby areas, our{" "}
            <a
              href="/service/seo-services/local-seo-services/"
              className="font-semibold text-blue-700 underline decoration-blue-300 underline-offset-4 transition-colors hover:text-blue-500"
            >
              Local SEO Services
            </a>{" "}
            can help build a stronger location focused search strategy.
          </p>,
        ],
      },
    ],
  },
];

function getReactNodeText(node: ReactNode): string {
  if (
    typeof node === "string" ||
    typeof node === "number" ||
    typeof node === "bigint"
  ) {
    return String(node);
  }

  if (isValidElement<{ children?: ReactNode }>(node)) {
    return getReactNodeText(node.props.children);
  }

  if (
    node !== null &&
    typeof node === "object" &&
    Symbol.iterator in node &&
    typeof (node as Iterable<ReactNode>)[Symbol.iterator] === "function"
  ) {
    return Array.from(node as Iterable<ReactNode>)
      .map(getReactNodeText)
      .filter(Boolean)
      .join(" ");
  }

  return "";
}

export const getCountyPostDescriptionText = (description: ReactNode) =>
  getReactNodeText(description).replace(/\s+/g, " ").trim();

export const getCountyPostBySlug = (slug: string) =>
  countyPosts.find((post) => post.slug === slug);

export const getRecentCountyPosts = (limit = 3) =>
  [...countyPosts]
    .sort(
      (a, b) =>
        getPublishedAtTime(b.publishedAt) - getPublishedAtTime(a.publishedAt),
    )
    .slice(0, limit);

const getPublishedAtTime = (publishedAt?: string) => {
  const timestamp = publishedAt?.trim() ? new Date(publishedAt).getTime() : 0;
  return Number.isFinite(timestamp) ? timestamp : 0;
};
