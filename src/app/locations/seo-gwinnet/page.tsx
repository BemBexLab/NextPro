import Image from "next/image";
import Link from "next/link";
import { FaArrowCircleRight } from "react-icons/fa";
import type { Metadata } from "next";
import { withEnUsHreflang } from "@/lib/metadata";
import CountiesCTA from "@/components/CountiesCTA";

// --- Hero Section Components ---
const actionStyles = {
  primary:
    "inline-flex w-full items-center justify-center rounded-lg bg-[#0b63b8] px-5 py-3 text-center font-semibold text-white shadow transition-colors hover:bg-[#075aa6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent sm:w-auto sm:px-6",
  secondary:
    "inline-flex w-full items-center justify-center rounded-lg border border-white/40 px-5 py-3 text-center font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent sm:w-auto sm:px-6",
};

function HeroField({ field }: { field: any }) {
  const {
    as = "input",
    className = "",
    colSpan = 2,
    id,
    label,
    name,
    placeholder,
    required = false,
    rows,
    type = "text",
    ...fieldProps
  } = field;
  const fieldId = id || name;
  const widthClassName = colSpan === 1 ? "col-span-1" : "col-span-1 sm:col-span-2";
  const controlClassName = `min-w-0 rounded-lg border border-gray-200 bg-white px-4 py-3 text-base text-gray-900 outline-none transition-colors placeholder:text-gray-400 focus:border-[#0b63b8] focus:ring-2 focus:ring-[#0b63b8]/20 ${className}`;

  return (
    <div className={widthClassName}>
      {label ? (
        <label htmlFor={fieldId} className="mb-2 block text-sm font-medium text-gray-700">
          {label}
        </label>
      ) : null}

      {as === "textarea" ? (
        <textarea
          {...fieldProps}
          id={fieldId}
          name={name}
          rows={rows}
          placeholder={placeholder}
          required={required}
          aria-label={label ? undefined : placeholder}
          className={`min-h-32 w-full resize-y sm:min-h-36 ${controlClassName}`}
        />
      ) : (
        <input
          {...fieldProps}
          id={fieldId}
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
          aria-label={label ? undefined : placeholder}
          className={`w-full ${controlClassName}`}
        />
      )}
    </div>
  );
}

function ServiceHero({
  image,
  overlayClassName = "bg-black/60",
  breadcrumbs = [],
  title,
  description,
  actions = [],
  form,
  className = "",
}: {
  image?: { src: string; alt: string; priority?: boolean; sizes?: string; className?: string };
  overlayClassName?: string;
  breadcrumbs?: { label: string; href?: string }[];
  title: string;
  description: React.ReactNode;
  actions?: { label: string; href: string; variant?: "primary" | "secondary"; showArrow?: boolean; className?: string }[];
  form?: {
    action: string;
    method?: string;
    ariaLabel?: string;
    fields: any[];
    submitLabel: string;
  };
  className?: string;
}) {
  const hasForm = Boolean(form);

  return (
    <section className={`relative w-full overflow-hidden py-16 sm:py-20 lg:py-28 ${className}`}>
      {image?.src ? (
        <Image
          src={image.src}
          alt={image.alt || "SEO Background"}
          fill
          priority={image.priority ?? true}
          fetchPriority={(image.priority ?? true) ? "high" : undefined}
          sizes={image.sizes || "100vw"}
          className={image.className || "object-cover object-center"}
        />
      ) : null}
      <div className={`absolute inset-0 ${overlayClassName}`} aria-hidden="true" />

      <div className="relative mx-auto grid w-[92%] max-w-[1200px] grid-cols-1 items-start gap-10 sm:w-[90%] lg:grid-cols-12 lg:gap-10 xl:gap-14">
        <div className={`min-w-0 text-white ${hasForm ? "lg:col-span-7" : "lg:col-span-12"}`}>
          {/* {breadcrumbs.length ? (
            <nav aria-label="Breadcrumb" className="mb-5 sm:mb-6">
              <ol className="flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1.5 text-xs text-white/90 sm:text-sm">
                {breadcrumbs.map((item, index) => (
                  <li key={`${item.href || "current"}-${index}`} className="flex min-w-0 items-center gap-2">
                    {index > 0 ? <span aria-hidden="true">{">"}</span> : null}
                    {item.href ? (
                      <Link href={item.href} className="break-words transition-colors hover:text-white">
                        {item.label}
                      </Link>
                    ) : (
                      <span aria-current="page" className="min-w-0 break-words font-medium text-white">
                        {item.label}
                      </span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          ) : null} */}

          {title ? (
            <h1 className="break-words text-4xl font-bold leading-tight text-balance drop-shadow-md sm:text-5xl lg:text-6xl">
              {title}
            </h1>
          ) : null}

          {description ? (
            <div className="mt-5 max-w-[720px] text-base leading-7 text-slate-100/90 sm:mt-6 sm:text-lg sm:leading-8 lg:text-xl">
              {description}
            </div>
          ) : null}

          {actions.length ? (
            <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
              {actions.map((action, index) => (
                <Link
                  key={`${action.href}-${index}`}
                  href={"/contact-us"}
                  className={action.className || actionStyles[action.variant || "primary"] || actionStyles.primary}
                >
                  {action.label}
                  {action.showArrow === false ? null : (
                    <span className="ml-3 inline-block" aria-hidden="true">
                      <FaArrowCircleRight />
                    </span>
                  )}
                </Link>
              ))}
            </div>
          ) : null}
        </div>

        {hasForm ? (
          <aside className="min-w-0 lg:col-span-5">
            <form
              action={form.action}
              method={form.method || "post"}
              aria-label={form.ariaLabel || "Contact form"}
              className="mx-auto w-full max-w-[520px] rounded-2xl bg-[#F2F3F5] p-4 shadow-xl sm:p-6 lg:ml-auto lg:max-w-[420px]"
            >
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                {(form.fields || []).map((field: any, index: number) => (
                  <HeroField key={field.id || field.name || index} field={field} />
                ))}
              </div>

              {form.submitLabel ? (
                <button
                  type={form.action ? "submit" : "button"}
                  className="mt-6 w-full rounded-lg bg-[#0b63b8] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#075aa6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0b63b8] focus-visible:ring-offset-2 sm:mt-8"
                >
                  {form.submitLabel}
                </button>
              ) : null}
            </form>
          </aside>
        ) : null}
      </div>
    </section>
  );
}

// --- Page Data ---
const containerClassName = "mx-auto w-[92%] max-w-[1400px]";

const focusItems = [
  "Keyword research",
  "Local SEO",
  "Website SEO",
  "Technical SEO",
  "Page optimization",
  "SEO content",
  "Google Business Profile",
  "Local business listings",
  "Link building",
  "Competitor research",
  "Website speed",
  "Lead and conversion improvement",
];

const customSections = [
  {
    title: "Local SEO for Gwinnett County Businesses",
    href: "https://www.webfoundersusa.com/service/seo-services/local-seo-services/",
    paragraphs: [
      "People often search for businesses near them. They may search for a service, a store, or a local company.",
      "Local SEO helps your business appear in these searches.",
      <>
        Our{" "}
        <Link href="https://www.webfoundersusa.com/service/seo-services/local-seo-services/" className="text-[#0b63b8] hover:underline">
          Local SEO Services
        </Link>{" "}
        can help your business improve its local presence. We can work on your Google Business Profile, local keywords, business information, reviews, and location pages.
      </>,
      "We also make sure your website clearly tells people where you work and what you do.",
      "This can help you reach more people in Gwinnett County and nearby areas.",
    ],
  },
  {
    title: "Work With a Gwinnett County SEO Expert",
    href: "https://www.webfoundersusa.com/service/seo-services/seo-audit/",
    paragraphs: [
      "SEO can feel hard when you do it alone. An SEO expert can help you understand what your website needs.",
      "We start by looking at your website. We check your pages, keywords, content, links, and other important parts.",
      <>
        We also use{" "}
        <Link href="https://www.webfoundersusa.com/service/seo-services/seo-audit/" className="text-[#0b63b8] hover:underline">
          SEO Audit Services
        </Link>{" "}
        to find problems that may stop your website from doing well in search.
      </>,
      "Then we make a simple plan to fix those problems.",
    ],
  },
  {
    title: "SEO Content for Your Business",
    href: "https://www.webfoundersusa.com/service/seo-services/seo-content-writing/",
    paragraphs: [
      "Good content helps people understand your business.",
      "It also helps search engines understand your website.",
      <>
        Our{" "}
        <Link href="https://www.webfoundersusa.com/service/seo-services/seo-content-writing/" className="text-[#0b63b8] hover:underline">
          SEO Content Writing Services
        </Link>{" "}
        create clear and useful content for your website. We write for real people first.
      </>,
      <>
        If your business serves customers who speak different languages,{" "}
        <Link href="https://www.webfoundersusa.com/service/seo-services/multilingual-seo/" className="text-[#0b63b8] hover:underline">
          Multilingual SEO Services
        </Link>{" "}
        can also help you reach those customers.
      </>,
      "We can create content for service pages, location pages, blogs, FAQs, and other important pages.",
    ],
  },
];

const businessTypes = [
  { text: "Construction companies with ", linkText: "Construction SEO Services", href: "https://www.webfoundersusa.com/service/seo-services/construction-seo/" },
  { text: "Roofing companies with ", linkText: "Roofing SEO Services", href: "https://www.webfoundersusa.com/service/seo-services/roofing-seo/" },
  { text: "Healthcare businesses with ", linkText: "Healthcare SEO Services", href: "https://www.webfoundersusa.com/service/seo-services/healthcare-seo/" },
  { text: "Medical practices with ", linkText: "Medical SEO Services", href: "https://www.webfoundersusa.com/service/seo-services/medical-seo/" },
  { text: "Dentists with ", linkText: "Dental SEO Services", href: "https://www.webfoundersusa.com/service/seo-services/dental-seo/" },
  { text: "Business service companies with ", linkText: "B2B SEO Services", href: "https://www.webfoundersusa.com/service/seo-services/b2b-seo/" },
  { text: "Online stores with ", linkText: "E-commerce SEO Services", href: "https://www.webfoundersusa.com/service/seo-services/ecommerce-seo/" },
  { text: "Shopify stores with ", linkText: "Shopify SEO Services", href: "https://www.webfoundersusa.com/service/seo-services/shopify-seo/" },
  { text: "Hotels with ", linkText: "Hotel SEO Services", href: "https://www.webfoundersusa.com/service/seo-services/hotel-seo/" },
  { text: "Small shops and special brands with ", linkText: "Boutique SEO Services", href: "https://www.webfoundersusa.com/service/seo-services/boutique-seo/" },
];

const whyChooseItems = [
  "Simple communication",
  "Clear SEO plans",
  "Helpful content",
  "Local search",
  "Better website pages",
  "Real business goals",
  "Long-term growth",
];

const processSteps = [
  { number: 1, label: "Website Review", description: "First, we look at your website. We find what is working and what needs help." },
  { number: 2, label: "SEO Audit", description: "We check important parts of your website with our SEO Audit Services." },
  { number: 3, label: "Keyword Research", description: "We find words and phrases that your customers use when they search online." },
  { number: 4, label: "Competitor Research", description: "We look at other businesses in your market. This helps us see what they are doing well." },
  { number: 5, label: "SEO Plan", description: "We create a plan based on your business and goals." },
  { number: 6, label: "Website Improvements", description: "We improve pages, content, links, and other SEO areas." },
  { number: 7, label: "Track and Improve", description: "SEO takes time. We watch the results and keep making improvements." },
];

const faqItems = [
  {
    question: "What is a Gwinnett County SEO Company?",
    answer: "A Gwinnett County SEO Company helps local businesses improve their websites and search rankings. The goal is to help more local customers find the business online.",
  },
  {
    question: "Why does my business need SEO?",
    answer: "SEO can help your website appear when people search for your products or services. This can bring more visitors and potential customers.",
  },
  {
    question: "Is local SEO important in Gwinnett County?",
    answer: "Yes. Local SEO can help your business reach people who are searching for services in Gwinnett County and nearby areas.",
  },
  {
    question: "Can SEO help a new website?",
    answer: "Yes. SEO can help a new website build a strong base. It can improve the website structure, content, keywords, and local presence.",
  },
  {
    question: "How long does SEO take?",
    answer: "SEO is not an overnight job. It can take time to see strong results. The time can be different for every business and market.",
  },
  {
    question: "Can you help with website design too?",
    answer: "Yes. A good website and good SEO work well together. Your website should be easy to use, fast, mobile-friendly, and clear.",
  },
  {
    question: "Do you work with businesses outside Gwinnett County?",
    answer: "Yes. SEO can be created for local, regional, and wider markets.",
  },
];

export const metadata: Metadata = withEnUsHreflang({
  title: "Gwinnett County SEO Company | Web Founders USA",
  description: "Gwinnett County SEO Company | Web Founders USA helps local businesses grow online with SEO. Call +1 470-470-7392 today for expert SEO!",
  alternates: {
    canonical: "/locations/seo-gwinnet/",
  },
});

// --- Main Page Component ---
export default function SEOGwinnettCountyPage() {
  return (
    <main className="w-full overflow-x-clip bg-white">
      {/* Hero Section */}
      <ServiceHero
        image={{
          src: "/service-testing/Local-SEO-Agency-LocalMighty.webp",
          alt: "Gwinnett County SEO Company",
          priority: true,
        }}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "SEO Company Gwinnett County" },
        ]}
        title="Gwinnett County SEO Company"
        description={
          <>
            <p className="mb-4">
              Want more people to find your business online? Good SEO can help. Our <b>Gwinnett County SEO Company</b> helps local businesses get more visitors, calls, and leads from search engines. We make SEO simple and easy to understand.
            </p>
            <p>
              We look at your website, find what needs to improve, and build a plan that fits your business. Our goal is simple: help your business show up when people search for the services you offer.
            </p>
          </>
        }
        actions={[
          {
            label: "Start Your SEO Project",
            href: "#contact-form",
            variant: "primary",
          },
        ]}
        form={{
          action: "/api/contact",
          method: "post",
          ariaLabel: "SEO Contact Form",
          fields: [
            { id: "hero-name", name: "name", label: "Full Name", placeholder: "John Doe", required: true, colSpan: 1 },
            { id: "hero-email", name: "email", type: "email", label: "Email Address", placeholder: "john@example.com", required: true, colSpan: 1 },
            { id: "hero-phone", name: "phone", type: "tel", label: "Phone Number", placeholder: "(555) 123-4567", required: false, colSpan: 1 },
            { id: "hero-company", name: "company", label: "Company Name", placeholder: "Your Company", required: false, colSpan: 1 },
            { id: "hero-message", name: "message", as: "textarea", label: "Project Details", placeholder: "Tell us about your SEO goals...", required: true, rows: 4, colSpan: 2 },
          ],
          submitLabel: "Get Free Consultation",
        }}
      />

      {/* Focus Section */}
      <section className="w-full bg-[#F8F9FA] py-5 lg:py-10">
        <div className={containerClassName}>
          <div className="mx-auto mb-10 max-w-4xl text-center sm:mb-12 lg:mb-14">
            <h2 className="text-balance text-3xl font-medium leading-tight text-[#0749A7] sm:text-4xl lg:text-5xl">
              SEO Services in Gwinnett County
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-pretty text-base leading-relaxed text-gray-600 sm:text-lg">
              Every business is different. That is why we create an SEO plan based on your goals. We focus on the things that can help your website get better search visibility. Our <Link href="/service/seo-services" className="font-semibold text-[#0b63b8] hover:underline">SEO Services</Link> can help with.
            </p>
          </div>

          <div className="mx-auto rounded-2xl border border-none p-2">
            <ul className="grid grid-cols-1 gap-x-12 gap-y-5 sm:grid-cols-2 lg:grid-cols-4">
              {focusItems.map((item, index) => (
                <li key={index} className="flex items-start gap-3 text-base leading-relaxed sm:text-lg">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0b63b8] text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  <span className="font-medium text-gray-800">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

            {/* Custom Sections (Local SEO, SEO Expert, SEO Content) */}
      <section className="w-full bg-[#F8F9FA] py-5 lg:py-10">
        <div className={containerClassName}>
          <div className="mx-auto space-y-6 p-2">
            {customSections.map((section, index) => (
              <div key={index} className="text-base leading-relaxed text-gray-700 sm:text-lg">
                <h3 className="inline font-bold text-[#072d7f] sm:text-xl">
                  <Link href={section.href} className="transition-colors hover:text-[#0b63b8]">
                    {section.title}
                  </Link>
                  <span className="mx-1 text-[#072d7f]">:</span>
                </h3>
                <span className="text-gray-600">
                  {section.paragraphs.map((paragraph, pIndex) => (
                    <span key={pIndex}>
                      {paragraph}
                      {pIndex < section.paragraphs.length - 1 ? " " : ""}
                    </span>
                  ))}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="w-full bg-[#F8F9FA] px-4 text-[#072d7f] sm:px-6 lg:px-8 py-5 lg:py-10">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-2 text-sm font-semibold text-[#FF3C1B] md:mb-3 md:text-base">
            Industries We Serve
          </p>
          <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
            <span className="bg-gradient-to-r from-[#072d7f] to-[#A7C7E7] bg-clip-text text-transparent">
              SEO for Different Businesses
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-pretty text-base leading-relaxed text-gray-600 sm:text-lg">
            SEO can help many types of businesses in Gwinnett County. For example, we can help:
          </p>

          <ul className="mx-auto mt-8 grid grid-cols-1 gap-y-4 text-left sm:grid-cols-2 sm:gap-x-8 sm:gap-y-5">
            {businessTypes.map((item, index) => (
              <li key={index} className="flex items-start gap-3 text-base leading-relaxed text-gray-700 sm:text-lg">
                <span className="mt-1.5 flex h-2 w-2 shrink-0 items-center justify-center rounded-full bg-[#0b63b8]" />
                <span>
                  {item.text}
                  <Link href={item.href} className="font-semibold text-[#0b63b8] transition-colors hover:text-[#075aa6] hover:underline">
                    {item.linkText}
                  </Link>
                </span>
              </li>
            ))}
          </ul>

          <p className="mx-auto mt-8 max-w-3xl text-pretty text-base leading-relaxed text-gray-600 sm:text-lg">
            Each business needs a different SEO plan. We focus on what can help your business most.
          </p>
        </div>
      </section>

            {/* SEO Company & Growing Businesses Section */}
      <section className="w-full bg-white py-5 lg:py-10">
        <div className={containerClassName}>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
            {/* SEO Company in Gwinnett County */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#072d7f] to-[#0b63b8] p-8 text-white sm:p-10 lg:p-12">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
              <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
              
              <div className="relative">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M12 16v-4"/>
                    <path d="M12 8h.01"/>
                  </svg>
                </div>
                
                <h2 className="mb-4 text-2xl font-bold leading-tight text-white sm:text-3xl">
                  SEO Company in Gwinnett County
                </h2>
                
                <div className="space-y-3 text-base leading-relaxed text-white/90 sm:text-lg">
                  <p>Choosing the right SEO company in Gwinnett County is important.</p>
                  <p>You need a team that understands your goals and your customers. You also need SEO work that is clear and easy to follow.</p>
                  <p>We do not believe in using hard words to make SEO sound confusing.</p>
                  <p>We explain what we are doing and why we are doing it.</p>
                  <p className="font-semibold text-white">Our work is focused on better rankings, more useful traffic, and more chances to turn visitors into customers.</p>
                </div>
              </div>
            </div>

            {/* SEO for Growing Businesses */}
            <div className="relative overflow-hidden rounded-2xl bg-[#F8F9FA] p-8 sm:p-10 lg:p-12">
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#0b63b8]/10 blur-2xl" />
              
              <div className="relative">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-[#0b63b8]">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                    <path d="M3 3v18h18"/>
                    <path d="m19 9-5 5-4-4-3 3"/>
                  </svg>
                </div>
                
                <h2 className="mb-4 text-2xl font-bold leading-tight text-[#072d7f] sm:text-3xl">
                  SEO for Growing Businesses
                </h2>
                
                <div className="space-y-3 text-base leading-relaxed text-gray-600 sm:text-lg">
                  <p>Some businesses are small today but want to grow tomorrow.</p>
                  <p>As your business grows, your website may need more pages, more locations, and a bigger SEO plan.</p>
                  <p>
                    Our{" "}
                    <Link href="https://www.webfoundersusa.com/service/seo-services/enterprise-seo/" className="font-semibold text-[#0b63b8] transition-colors hover:text-[#075aa6] hover:underline">
                      Enterprise SEO Services
                    </Link>{" "}
                    can help larger websites manage SEO at scale.
                  </p>
                  <p>We can also help businesses with many services or locations keep their website organized and easy to find.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full overflow-x-clip bg-[#0B5FCC] py-5 lg:py-10">
        <div className={containerClassName}>
          <h2 className="mb-4 break-words text-3xl font-semibold leading-tight text-white [overflow-wrap:anywhere] sm:mb-5 sm:text-4xl lg:mb-6 lg:text-5xl">
            Our Gwinnett County SEO Process
          </h2>
          <p className="mb-8 max-w-3xl break-words text-sm leading-relaxed text-white/90 [overflow-wrap:anywhere] sm:mb-10 sm:text-base lg:mb-14 lg:text-lg">
            We keep our process simple. A structured approach to ensure your website gets better search visibility and real business results.
          </p>

          <div className="relative min-w-0">
            <div className="absolute bottom-0 left-[19px] top-0 w-[2px] bg-white/30 sm:left-[23px]" aria-hidden="true" />

            <div className="space-y-5 sm:space-y-7 lg:space-y-8">
              {processSteps.map((step, index) => (
                <div key={index} className="relative flex min-w-0 items-start gap-3 sm:gap-5 lg:gap-6">
                  <div className="relative z-10 shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border-[3px] border-[#0B5FCC] bg-white sm:h-12 sm:w-12 sm:border-4">
                      <span className="text-sm font-bold text-[#0B5FCC] sm:text-lg">{step.number}</span>
                    </div>
                  </div>

                  <div className="min-w-0 flex-1 rounded-xl bg-white p-4 shadow-lg sm:rounded-2xl sm:p-6 lg:p-8">
                    <span className="mb-3 inline-flex max-w-full whitespace-normal break-words rounded-full bg-[#F4F6FF] px-3 py-1.5 text-left text-xs font-semibold leading-relaxed text-[#072d7f] [overflow-wrap:anywhere] sm:mb-4 sm:px-4 sm:py-2 sm:text-sm">
                      Step {step.number}: {step.label}
                    </span>
                    <p className="break-words text-sm leading-relaxed text-gray-700 [overflow-wrap:anywhere] sm:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="w-full bg-white py-5 lg:py-10">
        <div className={containerClassName}>
          <div className="mx-auto mb-10 max-w-4xl text-center">
            <h2 className="text-balance text-3xl font-medium leading-tight text-[#0749A7] sm:text-4xl lg:text-5xl">
              Why Choose Our Gwinnett County SEO Company?
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-pretty text-base leading-relaxed text-gray-600 sm:text-lg">
              You want SEO that feels simple and makes sense. We do not just focus on rankings. We want the right people to find your business. Our team focuses on:
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseItems.map((item, index) => (
              <div key={index} className="flex h-full min-w-0 items-center rounded-lg border border-gray-100 bg-[#F8F9FA] p-6 shadow-sm transition-shadow hover:shadow-md">
                <div className="mr-4 h-full min-h-[40px] w-1.5 shrink-0 rounded-full bg-[#0b63b8]" />
                <h3 className="break-words text-lg font-semibold text-[#072d7f]">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Grow Your Business With SEO / CTA Section */}
      <section className="w-full bg-white py-5 lg:py-10">
        <div className={containerClassName}>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-balance text-3xl font-medium leading-tight text-[#0749A7] sm:text-4xl lg:text-5xl">
              Grow Your Business With SEO
            </h2>
            <div className="mx-auto mb-8 max-w-3xl space-y-4 text-pretty text-base leading-relaxed text-gray-600 sm:text-lg">
              <p>Your customers are searching online every day.</p>
              <p>If your business is hard to find, you may miss good leads.</p>
              <p>A strong SEO plan can help more people find your website and learn about your services.</p>
              <p className="font-semibold text-[#072d7f]">
                If you are looking for a Gwinnett County SEO Company, we are ready to help you build a stronger online presence.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-[#0b63b8] px-8 py-4 text-base font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#075aa6] hover:shadow-lg sm:text-lg"
            >
              Get Started Today
              <span className="ml-3 inline-block" aria-hidden="true">
                <FaArrowCircleRight />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full bg-[#F8F9FA] px-4 py-5 sm:px-6  lg:px-8 lg:py-20">
        <div className="mx-auto w-full max-w-6xl">
          <div className="mx-auto mb-10 max-w-4xl text-center sm:mb-12 lg:mb-14">
            <h2 className="text-balance text-3xl font-medium leading-tight text-[#0749A7] sm:text-4xl lg:text-5xl">
              FAQs
            </h2>
          </div>

          <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-2 md:gap-6 lg:gap-8">
            {[
              faqItems.slice(0, Math.ceil(faqItems.length / 2)),
              faqItems.slice(Math.ceil(faqItems.length / 2)),
            ].map((column, columnIndex) => (
              <div key={columnIndex} className="flex min-w-0 flex-col gap-4">
                {column.map((faq, itemIndex) => {
                  const index = columnIndex === 0 ? itemIndex : Math.ceil(faqItems.length / 2) + itemIndex;
                  return (
                    <details
                      key={index}
                      className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 open:border-[#0b63b8]/30 open:shadow-md"
                      open={index === 0}
                    >
                      <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 marker:content-none sm:min-h-[72px] sm:px-6 [&::-webkit-details-marker]:hidden">
                        <span className="text-sm font-semibold leading-snug text-slate-900 transition-colors group-hover:text-[#0b63b8] sm:text-base">
                          {faq.question}
                        </span>
                        <span
                          aria-hidden="true"
                          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-500 transition-all duration-300 group-hover:border-[#0b63b8]/30 group-hover:bg-blue-50 group-hover:text-[#0b63b8] group-open:rotate-45 group-open:border-[#0b63b8]/30 group-open:bg-blue-50 group-open:text-[#0b63b8]"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12h14" />
                            <path d="M12 5v14" />
                          </svg>
                        </span>
                      </summary>
                      <div className="border-t border-slate-100 px-5 pb-5 pt-4 text-sm leading-7 text-slate-600 sm:px-6 sm:pb-6 sm:text-base [&_a]:font-medium [&_a]:text-[#0b63b8] [&_a]:underline-offset-2 hover:[&_a]:underline [&_p+p]:mt-3">
                        {faq.answer}
                      </div>
                    </details>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </section>
      <CountiesCTA />
    </main>
  );
}
