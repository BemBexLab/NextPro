import type { ReactNode } from "react";

type ImageAsset = {
  src: string;
  alt: string;
};

type CopyBlock = {
  title: ReactNode;
  paragraphs: ReactNode[];
};

type ListBlock = {
  title: ReactNode;
  intro: ReactNode;
  leadIn: ReactNode;
  items: ReactNode[];
  outro: ReactNode;
};

type ServiceBlock = {
  title: ReactNode;
  paragraphs: ReactNode[];
  leadIn: ReactNode;
  items: ReactNode[];
  closing: ReactNode;
  secondaryLeadIn?: ReactNode;
  secondaryItems?: ReactNode[];
  finalLine?: ReactNode;
};

type FaqItem = {
  question: ReactNode;
  answer: ReactNode;
};

export const automotiveSeoContent: {
  meta: {
    eyebrow: ReactNode;
    ctas: {
      label: ReactNode;
      href: string;
      variant: "primary" | "secondary";
    }[];
    heroImageBadge: ReactNode;
  };
  images: {
    hero: ImageAsset;
    definition: ImageAsset;
    searchJourney: ImageAsset;
    localSeo: ImageAsset;
    services: ImageAsset;
    growth: ImageAsset;
  };
  hero: {
    title: ReactNode;
    paragraphs: ReactNode[];
    benefitsHeading: ReactNode;
    benefits: ReactNode[];
    closing: ReactNode;
  };
  traffic: CopyBlock;
  definition: CopyBlock & { id: string };
  include: {
    id: string;
    title: ReactNode;
    intro: ReactNode;
    items: ReactNode[];
    paragraphs: ReactNode[];
  };
  specialized: CopyBlock & { id: string };
  essential: CopyBlock & { id: string };
  capture: ListBlock;
  dominate: ListBlock;
  trust: ListBlock;
  competitors: CopyBlock;
  growth: ListBlock;
  servicesIntro: CopyBlock & { id: string };
  serviceBlocks: ServiceBlock[];
  faqs: {
    id: string;
    title: ReactNode;
    items: FaqItem[];
  };
} = {
  meta: {
    eyebrow: <>Automotive SEO Services</>,
    ctas: [
      {
        label: <>Contact our team today</>,
        href: "/contact-us/",
        variant: "primary",
      },
      {
        label: <>free SEO consultation</>,
        href: "/contact-us/",
        variant: "secondary",
      },
    ],
    heroImageBadge: <>Search Visibility for Automotive Brands</>,
  },
  images: {
    hero: {
      src: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1400&q=80",
      alt: "Modern performance car in an automotive showroom",
    },
    definition: {
      src: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=80",
      alt: "Luxury vehicle photographed from the front on a road",
    },
    searchJourney: {
      src: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?auto=format&fit=crop&w=1400&q=80",
      alt: "Auto mechanic working on a vehicle engine bay",
    },
    localSeo: {
      src: "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1400&q=80",
      alt: "Black car parked outdoors representing local automotive search intent",
    },
    services: {
      src: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1400&q=80",
      alt: "Automotive service area with premium vehicle ready for detailing",
    },
    growth: {
      src: "https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1400&q=80",
      alt: "Car driving on an open road representing growth and momentum",
    },
  },
  hero: {
    title: <>Automotive SEO Services That Drive More Leads, Sales & Service Appointments</>,
    paragraphs: [
      <>Your customers are already searching online for dealerships, repair shops, auto parts, and automotive services but if your business isn't appearing on the first page of Google, they're finding your competitors instead.</>,
      <>Our <b>automotive SEO services</b> help automotive businesses improve search visibility, attract qualified local traffic, and turn online searches into phone calls, appointments, and sales.</>,
      <>If you operate a car dealership, auto repair shop, auto parts store, truck company, collision center, or another automotive business, our advanced SEO strategies are built to help you rank higher for the keywords that matter most. From local SEO and technical optimization to content marketing, link building, and reputation management, we create customized campaigns that deliver measurable business growth.</>,
      <>Instead of relying on expensive paid advertising for every lead, invest in a sustainable SEO strategy that consistently generates qualified organic traffic, builds trust with potential customers, and increases your return on investment.</>,
    ],
    benefitsHeading: <>With our automotive SEO services, you can:</>,
    benefits: [
      <>Increase your rankings on Google and other search engines.</>,
      <>Generate more qualified leads from local and organic searches.</>,
      <>Drive more phone calls, quote requests, and service appointments.</>,
      <>Improve visibility in Google Maps and local search results.</>,
      <>Strengthen your online reputation with positive reviews.</>,
      <>Outrank competing dealerships and automotive businesses.</>,
      <>Build sustainable organic traffic that continues to grow over time.</>,
    ],
    closing: <>Whether you're looking for an experienced automotive SEO agency, a trusted automotive SEO company, or an automotive SEO expert to improve your online presence, our team develops customized strategies tailored to your business goals, target audience, and competitive market.</>,
  },
  traffic: {
    title: <>Drive More Qualified Traffic. Generate More Sales</>,
    paragraphs: [
      <>Every automotive business is unique, which is why we never rely on one size fits all SEO campaigns. We take the time to understand your services, locations, competitors, and customers before building a comprehensive SEO strategy designed to increase visibility, generate high-intent traffic, and convert more visitors into loyal customers.</>,
      <>Ready to grow your automotive business with a proven SEO strategy? Contact our team today for a free SEO consultation and discover how a customized automotive SEO campaign can help your business dominate local search results and achieve long term growth.</>,
    ],
  },
  definition: {
    id: "what-are-automotive-seo-services",
    title: <>What Are Automotive SEO Services?</>,
    paragraphs: [
      <>Automotive SEO services are specialized search engine optimization strategies designed to help automotive businesses improve their visibility in organic search results, attract qualified local traffic, and generate more leads, appointments, and sales.</>,
      <>Unlike general SEO, automotive search engine optimization focuses on the unique needs of businesses operating in the automotive industry, including car dealerships, auto repair shops, auto parts retailers, collision centers, tire shops, fleet service providers, and trucking companies.</>,
      <>When potential customers search for terms like "car dealership near me," "brake repair," "OEM auto parts," or "truck repair services," your website should appear prominently in Google Search and Google Maps. If it doesn't, those potential customers are likely to choose a competitor that has invested in a stronger SEO strategy.</>,
      <>Professional SEO for the automotive industry goes far beyond adding keywords to a webpage. It involves creating a comprehensive strategy that improves every aspect of your online presence, including technical website performance, local search visibility, content quality, user experience, authority, and conversion optimization.</>,
      <>As an experienced automotive SEO company, we combine proven SEO techniques with deep industry knowledge to help automotive businesses increase their search rankings and turn high-intent searches into measurable business growth.</>,
    ],
  },
  include: {
    id: "what-does-automotive-seo-include",
    title: <>What Does Automotive SEO Include?</>,
    intro: <>A successful automotive SEO campaign combines multiple optimization strategies that work together to improve your online visibility and drive long-term results. These include:</>,
    items: [
      <>Comprehensive SEO audits to uncover technical and content issues.</>,
      <>Automotive-focused keyword research based on customer search intent.</>,
      <>On-page SEO optimization for service, location, and product pages.</>,
      <>Technical SEO to improve website speed, crawlability, indexing, and Core Web Vitals.</>,
      <>Local SEO to increase visibility in Google Maps and local search results.</>,
      <>Google Business Profile optimization for location-based searches.</>,
      <>High-quality content marketing that answers customer questions and builds topical authority.</>,
      <>Strategic link building to strengthen website authority.</>,
      <>Online reputation management to increase trust through customer reviews.</>,
      <>Ongoing performance tracking, reporting, and continuous optimization.</>,
    ],
    paragraphs: [
      <>Rather than applying generic SEO tactics, our automotive SEO agency develops customized strategies based on your business model, target audience, service areas, and competitive landscape.</>,
      <>Whether you operate a single location repair shop or manage multiple dealership locations, every campaign is tailored to help you reach customers who are actively searching for your products or services.</>,
    ],
  },
  specialized: {
    id: "why-automotive-businesses-need-specialized-seo",
    title: <>Why Automotive Businesses Need Specialized SEO</>,
    paragraphs: [
      <>The automotive industry is highly competitive, and customers rely heavily on search engines before making purchasing decisions. They compare dealerships, read reviews, research repair services, browse vehicle inventories, and search for replacement parts all before contacting a business.</>,
      <>A specialized automotive SEO service ensures your business is visible at every stage of that customer journey. By combining local SEO, technical optimization, content marketing, and automotive search engine marketing strategies, you can attract qualified visitors who are more likely to convert into paying customers.</>,
      <>If you're looking for an automotive SEO expert, a trusted SEO company for automotive businesses, or a long term digital marketing partner, investing in professional automotive SEO helps you build sustainable organic traffic, strengthen your online authority, and generate consistent growth without relying solely on paid advertising.</>,
    ],
  },
  essential: {
    id: "why-seo-is-essential-for-automotive-businesses",
    title: <>Why SEO Is Essential for Automotive Businesses</>,
    paragraphs: [
      <>Today's automotive customers begin their buying journey online. Whether they're searching for a new vehicle, comparing local dealerships, looking for a trusted auto repair shop, or shopping for replacement parts, search engines are often the first place they turn.</>,
      <>If your business isn't visible when these high-intent searches occur, you're missing valuable opportunities to attract customers who are ready to take action.</>,
      <>An effective automotive SEO strategy helps your business appear where it matters most on the first page of Google Search, in Google Maps, and in local search results. Unlike traditional advertising that stops generating leads once your budget runs out, SEO builds a sustainable online presence that continues to drive qualified traffic, phone calls, and conversions over time.</>,
    ],
  },
  capture: {
    title: <>Capture High-Intent Customers</>,
    intro: <>One of the biggest advantages of automotive search engine optimization is that it connects your business with people who are actively searching for your products or services. These users already have a need, making them far more likely to convert than audiences reached through interruption-based advertising.</>,
    leadIn: <>Whether someone searches for:</>,
    items: [
      <>Car dealerships near me</>,
      <>Auto repair services</>,
      <>Brake repair</>,
      <>Oil change</>,
      <>OEM auto parts</>,
      <>Truck repair</>,
      <>Fleet maintenance</>,
      <>Collision repair</>,
    ],
    outro: <>your website should be positioned to appear in those search results. A strategic automotive SEO service ensures your business is visible at every stage of the customer journey from initial research to final purchase.</>,
  },
  dominate: {
    title: <>Dominate Local Search Results</>,
    intro: <>For most automotive businesses, local visibility is critical. Customers typically choose nearby dealerships, repair shops, tire centers, and parts suppliers based on convenience, reputation, and search rankings.</>,
    leadIn: <>A comprehensive local SEO strategy helps you:</>,
    items: [
      <>Rank higher in Google Maps.</>,
      <>Improve your Google Business Profile visibility.</>,
      <>Build consistent local citations.</>,
      <>Earn more positive customer reviews.</>,
      <>Increase calls, direction requests, and appointment bookings.</>,
    ],
    outro: <>This is especially important for businesses offering car dealership SEO services, auto repair SEO, and other location-based automotive services where local searches directly influence purchasing decisions.</>,
  },
  trust: {
    title: <>Build Trust Before Customers Contact You</>,
    intro: <>Search rankings are only part of the equation. Customers also evaluate your credibility by reading reviews, browsing your website, and comparing your business with competitors.</>,
    leadIn: <>That's why successful SEO for the automotive industry includes:</>,
    items: [
      <>High-quality, informative content.</>,
      <>Fast-loading, mobile-friendly pages.</>,
      <>Secure and technically optimized websites.</>,
      <>Positive online reviews.</>,
      <>Strong local authority.</>,
      <>Consistent business information across directories.</>,
    ],
    outro: <>Together, these elements improve user experience while increasing trust, helping convert website visitors into paying customers.</>,
  },
  competitors: {
    title: <>Stay Ahead of Local Competitors</>,
    paragraphs: [
      <>The automotive industry is one of the most competitive local markets. Dealerships, repair shops, parts retailers, and service providers often compete for the same high-value keywords and customers.</>,
      <>A professional automotive SEO company performs in depth competitor analysis to identify ranking opportunities, uncover content gaps, and develop strategies that help your business outperform competitors in search results.</>,
      <>By continuously optimizing your website, creating valuable content, and earning authoritative backlinks, you can establish long-term visibility and maintain a competitive edge.</>,
    ],
  },
  growth: {
    title: <>Generate Sustainable Business Growth</>,
    intro: <>Unlike paid advertising, SEO continues to deliver value long after individual campaigns are launched. A well executed strategy creates a steady stream of qualified organic traffic that supports long-term business growth while reducing your dependence on paid media.</>,
    leadIn: <>Our automotive SEO agency focuses on measurable outcomes that matter most, including:</>,
    items: [
      <>Higher keyword rankings.</>,
      <>Increased organic traffic.</>,
      <>More qualified leads.</>,
      <>More phone calls and contact form submissions.</>,
      <>More service appointments.</>,
      <>Increased vehicle sales.</>,
      <>Higher parts and accessory sales.</>,
      <>Improved return on marketing investment (ROI).</>,
    ],
    outro: <>If you're looking for SEO for car dealerships, SEO services for auto repair, auto parts SEO services, or a trucking SEO company, investing in professional automotive SEO positions your business to attract more customers, strengthen its online presence, and achieve sustainable growth in an increasingly competitive digital marketplace.</>,
  },
  servicesIntro: {
    id: "our-automotive-seo-services",
    title: <>Our Automotive SEO Services</>,
    paragraphs: [
      <>Every automotive business has different goals, customers, and competition. A dealership trying to sell more vehicles requires a different strategy than an auto repair shop looking for more service appointments or an auto parts company trying to increase online sales.</>,
      <>Our automotive SEO services are designed around your specific business objectives, combining technical expertise, industry knowledge, and proven search optimization strategies to help you attract more qualified customers and generate consistent growth.</>,
      <>From improving your website performance to increasing your visibility in local search results, our comprehensive approach helps automotive businesses build a stronger online presence and compete effectively in a highly competitive market.</>,
    ],
  },
  serviceBlocks: [
    {
      title: <>Comprehensive SEO Audit for Automotive Websites</>,
      paragraphs: [
        <>Every successful SEO campaign begins with understanding where your website currently stands. Our automotive SEO audit identifies technical issues, ranking opportunities, content gaps, competitor strategies, and areas where your website can improve.</>,
      ],
      leadIn: <>Our audit process analyzes:</>,
      items: [
        <>Website structure and navigation.</>,
        <>Technical SEO issues.</>,
        <>Page speed and Core Web Vitals.</>,
        <>Mobile usability.</>,
        <>Keyword targeting.</>,
        <>Competitor rankings.</>,
        <>Content quality.</>,
        <>Internal linking.</>,
        <>Backlink profile.</>,
        <>Local search performance.</>,
      ],
      closing: <>This detailed analysis allows us to create a customized roadmap that improves search visibility and supports long term growth.</>,
    },
    {
      title: <>Automotive Keyword Research & Strategy</>,
      paragraphs: [
        <>Successful SEO starts with targeting the right keywords. Our team performs detailed keyword research to identify the search terms your potential customers use when looking for automotive products and services.</>,
      ],
      leadIn: <>We focus on high intent keywords related to:</>,
      items: [
        <>Vehicle sales.</>,
        <>Auto repair services.</>,
        <>Maintenance services.</>,
        <>Replacement parts.</>,
        <>Local automotive businesses.</>,
        <>Dealership inventory.</>,
        <>Commercial vehicles.</>,
      ],
      closing: <>By understanding search intent, we create a keyword strategy that attracts users who are more likely to call, schedule an appointment, request a quote, or make a purchase.</>,
    },
    {
      title: <>On-Page SEO Optimization</>,
      paragraphs: [
        <>Your website needs to clearly communicate your services to both search engines and customers. Our on-page SEO services optimize every important element of your website to improve rankings and user experience.</>,
      ],
      leadIn: <>We optimize:</>,
      items: [
        <>Page titles and meta descriptions.</>,
        <>Heading structures.</>,
        <>Service pages.</>,
        <>Location pages.</>,
        <>Product pages.</>,
        <>Image optimization.</>,
        <>Internal links.</>,
        <>Content structure.</>,
        <>Schema markup.</>,
      ],
      closing: <>Whether you need SEO for automotive businesses, car dealership SEO services, or optimization for specialized automotive services, our on-page strategies help search engines better understand your website and improve visibility for relevant searches.</>,
    },
    {
      title: <>Technical SEO for Automotive Websites</>,
      paragraphs: [
        <>A technically strong website creates the foundation for better rankings. Our technical SEO solutions improve website performance, accessibility, and search engine crawlability.</>,
      ],
      leadIn: <>We optimize:</>,
      items: [
        <>Website speed.</>,
        <>Mobile performance.</>,
        <>XML sitemaps.</>,
        <>Robots.txt files.</>,
        <>Indexing issues.</>,
        <>Website security.</>,
        <>Core Web Vitals.</>,
        <>Structured data.</>,
        <>Duplicate content issues.</>,
      ],
      closing: <>A technically optimized website helps search engines efficiently discover your pages while providing customers with a faster and smoother browsing experience.</>,
    },
    {
      title: <>Local SEO for Automotive Businesses</>,
      paragraphs: [
        <>Most automotive customers search locally before choosing a business. That's why local SEO is one of the most important parts of any automotive search engine optimization strategy.</>,
      ],
      leadIn: <>Our local SEO services help businesses improve visibility across:</>,
      items: [
        <>Google Search.</>,
        <>Google Maps.</>,
        <>Local listings.</>,
        <>Business directories.</>,
        <>Review platforms.</>,
      ],
      secondaryLeadIn: <>We optimize:</>,
      secondaryItems: [
        <>Google Business Profile.</>,
        <>Local citations.</>,
        <>NAP consistency.</>,
        <>Customer reviews.</>,
        <>Location pages.</>,
        <>Local content.</>,
      ],
      closing: <>For businesses offering car dealer SEO services, auto repair SEO, and dealership marketing, strong local SEO visibility can directly increase calls, visits, and appointments.</>,
    },
    {
      title: <>Automotive Content Marketing</>,
      paragraphs: [
        <>High-quality content helps your business answer customer questions, build authority, and rank for valuable search terms.</>,
      ],
      leadIn: <>Our content strategies include:</>,
      items: [
        <>Automotive service pages.</>,
        <>Location-based content.</>,
        <>Educational blog articles.</>,
        <>Vehicle guides.</>,
        <>Repair guides.</>,
        <>Buying resources.</>,
        <>FAQ content.</>,
      ],
      closing: <>By creating useful content around customer needs, we help automotive businesses attract more organic traffic and establish themselves as trusted experts in their market.</>,
    },
    {
      title: <>Automotive Link Building & Authority Growth</>,
      paragraphs: [
        <>Search engines use authority signals to determine which websites deserve higher rankings. Our link-building strategies help strengthen your website's credibility through relevant, high-quality backlinks.</>,
      ],
      leadIn: <>Our approach focuses on:</>,
      items: [
        <>Industry-relevant links.</>,
        <>Digital PR opportunities.</>,
        <>Local business mentions.</>,
        <>Automotive industry partnerships.</>,
        <>Authority-building campaigns.</>,
      ],
      closing: <>A stronger backlink profile improves your website's ability to compete for valuable automotive keywords.</>,
    },
    {
      title: <>Automotive Reputation Management</>,
      paragraphs: [
        <>Online reputation plays a major role in automotive purchasing decisions. Customers often check reviews before choosing a dealership, repair shop, or service provider.</>,
      ],
      leadIn: <>Our reputation management solutions help you:</>,
      items: [
        <>Monitor online reviews.</>,
        <>Encourage positive customer feedback.</>,
        <>Respond professionally to reviews.</>,
        <>Improve brand trust.</>,
        <>Protect your online reputation.</>,
      ],
      closing: <>This is especially valuable for businesses investing in automotive reputation management and auto repair reputation management.</>,
    },
    {
      title: <>SEO Reporting & Performance Tracking</>,
      paragraphs: [
        <>Transparency is essential for a successful SEO partnership. Our reporting provides clear insights into campaign performance and business growth.</>,
      ],
      leadIn: <>We track:</>,
      items: [
        <>Keyword rankings.</>,
        <>Organic traffic.</>,
        <>Leads generated.</>,
        <>Phone calls.</>,
        <>Website conversions.</>,
        <>Local visibility.</>,
        <>SEO growth opportunities.</>,
      ],
      closing: <>With detailed reporting and continuous optimization, we ensure your SEO strategy stays aligned with your business goals.</>,
      finalLine: <>Whether you need an experienced automotive SEO agency, a dedicated automotive SEO expert, or a complete SEO company for automotive businesses, our services are designed to increase visibility, generate qualified leads, and help your business grow online.</>,
    },
  ],
  faqs: {
    id: "frequently-asked-questions-about-automotive-seo-services",
    title: <>Frequently Asked Questions About Automotive SEO Services</>,
    items: [
      {
        question: <>What are automotive SEO services?</>,
        answer: <>Automotive SEO services are strategies designed to help automotive businesses improve Google rankings, attract qualified customers, and generate more leads, calls, and appointments through organic search.</>,
      },
      {
        question: <>Why do automotive businesses need SEO?</>,
        answer: <>SEO helps dealerships, repair shops, auto parts companies, and other automotive businesses appear when customers search for their products and services online, helping increase visibility and sales opportunities.</>,
      },
      {
        question: <>How can automotive SEO help my car dealership?</>,
        answer: <>Car dealership SEO improves online visibility for vehicle searches, increases local rankings, drives more website traffic, and helps generate more inquiries, showroom visits, and test-drive requests.</>,
      },
      {
        question: <>What is included in automotive SEO?</>,
        answer: <>Automotive SEO typically includes keyword research, technical SEO, on-page optimization, local SEO, Google Business Profile optimization, content marketing, link building, and reputation management.</>,
      },
      {
        question: <>How long does automotive SEO take to show results?</>,
        answer: <>SEO is a long-term strategy. Results depend on your website, competition, location, and goals, but consistent optimization can improve rankings, traffic, and leads over time.</>,
      },
      {
        question: <>Do auto repair shops need SEO?</>,
        answer: <>Yes. Auto repair SEO helps shops rank for local searches, attract nearby customers, increase calls, and generate more service appointments.</>,
      },
      {
        question: <>How does local SEO help automotive businesses?</>,
        answer: <>Local SEO improves visibility in Google Maps and local search results, helping customers find dealerships, repair shops, and automotive services near them.</>,
      },
      {
        question: <>How much do automotive SEO services cost?</>,
        answer: <>The cost depends on your business size, competition, target locations, and required services. A customized SEO strategy is created based on your goals.</>,
      },
      {
        question: <>Can SEO increase automotive leads and sales?</>,
        answer: <>Yes. A strong automotive SEO strategy helps attract high-intent customers searching for vehicles, repairs, parts, and automotive services.</>,
      },
      {
        question: <>Why choose an automotive SEO agency?</>,
        answer: <>An automotive SEO agency understands industry-specific keywords, customer behavior, and competition, allowing it to create strategies tailored for automotive businesses.</>,
      },
    ],
  },
};

export const automotiveSeoAnchors: { id: string; label: ReactNode }[] = [
  {
    id: automotiveSeoContent.definition.id,
    label: automotiveSeoContent.definition.title,
  },
  {
    id: automotiveSeoContent.include.id,
    label: automotiveSeoContent.include.title,
  },
  {
    id: automotiveSeoContent.specialized.id,
    label: automotiveSeoContent.specialized.title,
  },
  {
    id: automotiveSeoContent.essential.id,
    label: automotiveSeoContent.essential.title,
  },
  {
    id: automotiveSeoContent.servicesIntro.id,
    label: automotiveSeoContent.servicesIntro.title,
  },
  {
    id: automotiveSeoContent.faqs.id,
    label: automotiveSeoContent.faqs.title,
  },
];
