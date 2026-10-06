type AutomotiveSeoSection = {
  title: string;
  intro?: string;
  leadIn?: string;
  items?: string[];
  paragraphs?: string[];
  outro?: string;
};

const section = (value: AutomotiveSeoSection): AutomotiveSeoSection => value;

export const automotiveSeoContent = {
  meta: {
    eyebrow: "Automotive SEO Services",
    heroImageBadge: "Automotive search visibility",
    ctas: [
      { label: "Get your free automotive SEO audit", href: "/contact-us", variant: "primary" },
      { label: "Explore SEO services", href: "/service/seo-services", variant: "secondary" },
    ],
  },
  images: {
    hero: {
      src: "/images/TX Auto Group Houston Case Study 2.png",
      alt: "Automotive SEO case study search performance overview",
    },
    definition: {
      src: "/TX Auto Group Houston SEO Case Study.png",
      alt: "Search visibility results for an automotive business",
    },
    searchJourney: {
      src: "/images/River Oaks Auto Sales_ SEO Growth Case Study.png",
      alt: "Organic search growth for an automotive business",
    },
    localSeo: {
      src: "/images/Mountain View Auto Sales Case Study.png",
      alt: "Local automotive search performance report",
    },
    growth: {
      src: "/images/Elite Auto Service Case Study.png",
      alt: "Automotive service SEO growth report",
    },
  },
  hero: {
    title: "Automotive SEO Services That Drive More Traffic, Leads & Sales",
    paragraphs: [
      "Web Founders USA delivers specialized automotive SEO services for car dealerships, auto repair shops, mechanics, auto body shops, auto parts businesses, trucking companies, and other automotive brands.",
      "We help automotive businesses improve their visibility on Google, reach high-intent customers, and turn organic traffic into calls, appointments, inquiries, and sales.",
      "Today, customers search online before buying a vehicle, finding a dealership, booking a repair, comparing services, or purchasing automotive parts. Our automotive search engine optimization strategies help your business appear when those searches happen.",
    ],
    benefitsHeading: "What Automotive SEO Can Help You Achieve",
    benefits: [
      "Improve visibility for relevant automotive searches.",
      "Reach customers looking for a dealership, repair shop, or automotive service.",
      "Bring more qualified organic traffic to your website.",
      "Make it easier for customers to call, book, or request information.",
    ],
    closing:
      "A focused automotive SEO strategy connects your website with the people actively searching for the vehicles, parts, and services you offer.",
  },
  traffic: {
    title: "Turn Automotive Searches Into Business",
    paragraphs: [
      "Customers often begin their search online, whether they need a vehicle, a repair, replacement parts, or a trusted local automotive business.",
      "Search engine optimization helps your business appear for relevant searches and gives potential customers useful information when they are deciding where to go.",
    ],
  },
  definition: {
    id: "automotive-seo",
    title: "What Is Automotive SEO?",
    paragraphs: [
      "Automotive SEO is the process of improving an automotive business's website and online presence so it can appear in relevant search results.",
      "It brings together technical improvements, useful service and location content, keyword research, and local search optimization to help customers find your business.",
    ],
  },
  include: {
    id: "automotive-seo-services",
    title: "What Automotive SEO Services Include",
    intro:
      "We build a strategy around your business, services, service area, and the way your customers search.",
    items: [
      "Automotive keyword research",
      "Technical SEO and website audits",
      "Local SEO and Google Business Profile optimization",
      "Dealership, repair, and service page optimization",
      "Automotive SEO content",
      "Internal linking and site structure improvements",
      "Competitor and search visibility analysis",
      "Performance monitoring and ongoing improvements",
    ],
    paragraphs: [
      "The right mix depends on your website and business goals. We prioritize the work that can make your services easier to find and your website easier to use.",
    ],
  },
  specialized: {
    id: "specialized-automotive-seo",
    title: "SEO for Different Automotive Businesses",
    paragraphs: [
      "Dealerships, repair shops, mechanics, auto body shops, parts retailers, and other automotive businesses serve different needs. Their SEO strategies should reflect the services they provide and the customers they want to reach.",
      "We shape the site structure, page content, and local search approach around each business rather than relying on one generic plan.",
    ],
  },
  essential: {
    id: "automotive-local-seo",
    title: "Local SEO for Automotive Businesses",
    paragraphs: [
      "Local search helps nearby customers discover automotive businesses when they need a dealership, repair, maintenance, or another service.",
      "Accurate business information, useful location pages, and a well-organized website help customers understand what you offer and where you work.",
    ],
  },
  capture: section({
    title: "Capture High-Intent Automotive Searches",
    intro:
      "People search for specific vehicles, repairs, parts, and services. A clear website helps your business meet those searches with relevant pages.",
    items: [
      "Vehicle and inventory searches",
      "Repair and maintenance services",
      "Automotive parts and accessories",
      "Local dealership and service searches",
    ],
  }),
  dominate: section({
    title: "Build a Stronger Automotive Search Presence",
    paragraphs: [
      "A well-structured website helps search engines understand your business and helps customers find the information they need.",
      "We look for practical ways to improve your pages, internal links, local presence, and overall search visibility.",
    ],
  }),
  trust: section({
    title: "Earn Customer Trust Before the First Visit",
    leadIn:
      "Your website is often part of a customer's first impression. Useful details can help people feel informed before they call or visit.",
    items: [
      "Clear descriptions of your services",
      "Easy-to-find contact and location information",
      "Helpful answers to common customer questions",
      "A fast, mobile-friendly website experience",
    ],
  }),
  competitors: section({
    title: "Understand Your Automotive Search Competition",
    paragraphs: [
      "Competitor research can reveal which topics and services other businesses are emphasizing in search.",
      "We use those findings to identify opportunities for your website and shape a strategy around your business.",
    ],
    outro: "The goal is to make your business easier to discover and evaluate online.",
  }),
  growth: {
    title: "Support Long-Term Automotive SEO Growth",
    intro:
      "Search behavior, competition, and your business can change over time. SEO gives you a way to keep improving your website as those needs change.",
    leadIn: "Our ongoing work can include:",
    items: [
      "Monitoring organic search performance",
      "Finding new keyword and content opportunities",
      "Improving important service pages",
      "Addressing technical issues as they appear",
    ],
    outro:
      "We use performance insights to refine the strategy and keep your website aligned with your services and customers.",
  },
  servicesIntro: {
    id: "automotive-seo-service-types",
    title: "Automotive SEO Services for Your Business",
    paragraphs: [
      "We work with automotive businesses that want to improve their search visibility and connect with more potential customers.",
      "From dealerships and auto repair shops to parts businesses, we tailor the work to your website, offerings, and service area.",
    ],
  },
  serviceBlocks: [
    {
      title: "Car Dealership SEO",
      paragraphs: [
        "Dealership SEO helps buyers discover your inventory, location, and services while researching their next vehicle.",
      ],
      leadIn: "A dealership strategy may focus on:",
      items: [
        "Vehicle and inventory pages",
        "Dealership location pages",
        "New and used vehicle searches",
        "Service and financing information",
      ],
      closing:
        "Clear, useful pages help shoppers find the information they need to take the next step.",
    },
    {
      title: "Auto Repair SEO",
      paragraphs: [
        "Auto repair SEO can help local drivers find your shop when they need maintenance, diagnostics, or repairs.",
      ],
      leadIn: "We can focus on visibility for:",
      items: [
        "Repair and maintenance services",
        "Local auto repair searches",
        "Service area information",
        "Common vehicle issues and questions",
      ],
      closing:
        "Your website can give customers a clear view of your services and how to contact your shop.",
    },
    {
      title: "Automotive Parts SEO",
      paragraphs: [
        "Parts businesses can use SEO to help customers find products, categories, and the information needed to choose the right parts.",
      ],
      leadIn: "A parts SEO plan can include:",
      items: [
        "Product and category page optimization",
        "Search-friendly product information",
        "Site structure and internal links",
        "E-commerce technical SEO",
      ],
      closing:
        "An organized catalog helps both customers and search engines understand what you sell.",
    },
  ],
  faqs: {
    id: "automotive-seo-faqs",
    title: "Automotive SEO FAQs",
    items: [
      {
        question: "What is automotive SEO?",
        answer:
          "Automotive SEO improves an automotive business's website and online presence to help it appear in relevant search results.",
      },
      {
        question: "Who can benefit from automotive SEO?",
        answer:
          "Car dealerships, repair shops, mechanics, auto body shops, parts businesses, and other automotive brands can benefit from a strategy built around their services and customers.",
      },
      {
        question: "Can SEO help a local auto repair shop?",
        answer:
          "Local SEO can help nearby customers find your shop when they search for repairs, maintenance, or automotive services in your area.",
      },
      {
        question: "How long does automotive SEO take?",
        answer:
          "SEO timelines vary based on your website, competition, industry, target searches, and the work required. SEO is an ongoing process, and results take time.",
      },
    ],
  },
};
