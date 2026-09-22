import Image from "next/image";
import Link from "next/link";
import { FaArrowCircleRight } from "react-icons/fa";
import { Metadata } from "next"; // <-- ADD THIS LINE
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
          alt={image.alt || "Web Design Background"}
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
  "Clean and professional design",
  "Responsive, mobile-friendly layouts",
  "Fast-loading pages",
  "Clear navigation",
  "Conversion-focused calls-to-action",
  "SEO-friendly structure",
  "Easy content management",
  "Scalable functionality",
];

const customSections = [
  {
    title: "Website Design in Elk River Built Around Your Business",
    href: "https://www.webfoundersusa.com/service/custom-website-design/",
    paragraphs: [
      "There is no one size fits all website.",
      "Your industry is different. Your customers are different. Your goals are different.",
      "That's why our website design in Elk River starts with understanding your business before we start designing pages. We look at your audience, services, competitors, brand, and conversion goals to create a website that has a clear purpose.",
      "Every element from the homepage layout and navigation to calls-to-action and service pages is designed to make the customer journey easier.",
      "The result? A website that doesn't simply represent your business online but helps move visitors toward becoming customers.",
    ],
  },
  {
    title: "WordPress Website Design That Gives You More Control",
    href: "https://www.webfoundersusa.com/service/wordpress-website-design/",
    paragraphs: [
      "Looking for a flexible website you can manage as your business grows?",
      "Our WordPress website design in Elk River gives businesses a powerful platform for creating, managing, and expanding their online presence.",
      "We can create custom WordPress websites with the features your business actually needs, including service pages, contact forms, blogs, project galleries, booking functionality, integrations, and more.",
      "But great WordPress development isn't about adding as many plugins and features as possible. It's about building a website that is fast, responsive, easy to navigate, secure, and simple to manage.",
      "Whether you're starting from scratch or need to redesign an existing WordPress website, we build with your long-term goals in mind.",
    ],
  },
];

const featureSections = [
  {
    title: "Custom Web Design That Turns Visitors Into Customers",
    href: "https://www.webfoundersusa.com/service/custom-website-design/",
    paragraphs: [
      "A visitor landing on your website should immediately understand who you are, what you offer, and why they should choose you.",
      "That's where strategic Elk River web design makes a difference.",
      "We combine visual design with user experience and conversion strategy to create pages that guide visitors naturally.",
      "Strong headlines grab attention. Clear messaging explains your value. Strategic calls-to-action encourage the next step. Simple navigation keeps visitors moving. Trust elements help remove hesitation. And responsive design makes sure the experience works across devices.",
      "We don't design websites simply to fill space on a screen. We design them to support your business.",
    ],
  },
  {
    title: "Ecommerce Website Design in Elk River That Sells",
    href: "https://www.webfoundersusa.com/service/ecommerce-website-design/",
    paragraphs: [
      "Your online store isn't just a place to display products. It's a sales system.",
      "Our ecommerce website design in Elk River focuses on creating shopping experiences that are easy to understand, easy to navigate, and built around conversions.",
      "From product pages and categories to shopping carts and checkout, every step matters.",
      "We can develop eCommerce websites with features such as: Custom product and category layouts, Mobile-first shopping experiences, Secure payment integration, Product filtering and search, WooCommerce and Shopify solutions, Conversion-focused product pages, SEO-friendly product structures, and Analytics and marketing integrations.",
      "Whether you're launching a new online store or your existing website isn't converting enough visitors, we can help create a better customer journey.",
    ],
  },
];

const processSteps = [
  { number: 1, label: "Discovery & Planning", description: "We learn about your business, audience, competitors, goals, and website requirements." },
  { number: 2, label: "Strategy & Structure", description: "We develop the website structure, content direction, user journey, and functionality needed to support your objectives." },
  { number: 3, label: "Creative Design", description: "Our designers create a modern visual experience that represents your brand and keeps the customer journey front and center." },
  { number: 4, label: "Development", description: "We transform the approved design into a responsive, functional website built for performance and usability." },
  { number: 5, label: "Testing & Launch", description: "Before launch, we review the website across devices, check functionality, improve usability, and make sure everything is ready for visitors." },
  { number: 6, label: "Growth & Support", description: "Your website can continue evolving as your business grows. Updates, new functionality, content, SEO, and ongoing improvements can keep your digital presence working toward your goals." },
];

const faqItems = [
  {
    question: "How much does website design in Elk River cost?",
    answer: "The cost depends on the website's size, functionality, design requirements, and integrations. A simple business website will have different requirements than a custom eCommerce platform.",
  },
  {
    question: "Can you redesign my existing website?",
    answer: "Yes. A redesign can improve your website's appearance, usability, mobile experience, performance, structure, and conversion opportunities.",
  },
  {
    question: "Do you build WordPress websites?",
    answer: "Yes. We provide custom WordPress website design and development for businesses that want a flexible and scalable website.",
  },
  {
    question: "Can you build an eCommerce website?",
    answer: "Yes. We create eCommerce solutions focused on user experience, performance, product presentation, secure checkout, and conversions.",
  },
  {
    question: "Can website design help with SEO?",
    answer: "A properly structured website provides a strong foundation for SEO. We consider mobile usability, page structure, content, internal linking, performance, and other SEO-friendly elements during development.",
  },
];

export const metadata: Metadata = {
  title: "Website Design in Elk River | Web Founders USA",
  description: "Website Design in Elk River by Web Founders USA. Get a modern, SEO-friendly website that grows your business. Call +1 470-470-7392 now!",
};

// --- Main Page Component ---
export default function WebsiteDesignElkRiverPage() {
  return (
    <main className="w-full overflow-x-clip bg-white">
      {/* Hero Section */}
      <ServiceHero
        image={{
          src: "/service-testing/Local-SEO-Agency-LocalMighty.webp", // Replace with relevant web design image
          alt: "Website Design in Elk River, MN",
          priority: true,
        }}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Website Design Elk River, MN" },
        ]}
        title="Website Design in Elk River That Builds Your Brand & Drives Growth"
        description={
          <>
            <p className="mb-4">
              Your website should do more than look good. It should <b>get attention, build trust, generate leads, and help your business grow.</b>
            </p>
            <p>
              At Web Founders USA, we create high-performance websites for businesses that want a stronger digital presence in <b>Elk River, MN</b>. From custom business websites and WordPress development to conversion focused eCommerce stores, we combine creative design, smart development, user experience, and SEO friendly structure to build websites around your business goals.
            </p>
            <p>
              Whether you're launching a new business or your current website feels outdated, slow, or difficult to use, we're ready to build something better.
            </p>
            <p>
              <b>Let's turn your website into a growth focused business asset.</b>
            </p>
          </>
        }
        actions={[
          {
            label: "Start Your Web Design Project",
            href: "#contact-form",
            variant: "primary",
          },
        ]}
        form={{
          action: "/api/contact",
          method: "post",
          ariaLabel: "Web Design Contact Form",
          fields: [
            { id: "hero-name", name: "name", label: "Full Name", placeholder: "John Doe", required: true, colSpan: 1 },
            { id: "hero-email", name: "email", type: "email", label: "Email Address", placeholder: "john@example.com", required: true, colSpan: 1 },
            { id: "hero-phone", name: "phone", type: "tel", label: "Phone Number", placeholder: "(555) 123-4567", required: false, colSpan: 1 },
            { id: "hero-company", name: "company", label: "Company Name", placeholder: "Your Company", required: false, colSpan: 1 },
            { id: "hero-message", name: "message", as: "textarea", label: "Project Details", placeholder: "Tell us about your web design project...", required: true, rows: 4, colSpan: 2 },
          ],
          submitLabel: "Get Free Consultation",
        }}
      />

      {/* Custom Sections */}
      <section className="w-full bg-[#F8F9FA] py-5 lg:py-10">
        <div className={containerClassName}>
          <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-4">
            {customSections.map((section, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl p-2">
                <h3 className="mb-4 text-2xl font-semibold leading-snug text-[#072d7f] sm:text-3xl">
                  <Link href={section.href} className="transition-colors hover:text-[#0b63b8]">
                    {section.title}
                  </Link>
                </h3>
                <div className="space-y-4 text-base leading-relaxed text-gray-600 sm:text-lg">
                  {section.paragraphs.map((paragraph, pIndex) => (
                    <p key={pIndex}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Website Builders Focus Section */}
      <section className="w-full bg-white py-5 lg:py-10">
        <div className={containerClassName}>
          <div className="mx-auto mb-10 max-w-4xl text-center sm:mb-12 lg:mb-14">
            <h2 className="text-balance text-3xl font-medium leading-tight text-[#0749A7] sm:text-4xl lg:text-5xl">
              Website Builders in Elk River Focused on Performance
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-pretty text-base leading-relaxed text-gray-600 sm:text-lg">
              A website builder can make launching a website easier but choosing the right solution matters. We help businesses select and build on the platform that makes sense for their goals, budget, functionality, and future growth. Our approach to website builders in Elk River goes beyond templates. Your website should make things easier for your customers, not make them work to find what they need.
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

      {/* Feature Sections */}
      <section className="w-full bg-[#F8F9FA] py-5 lg:py-10">
        <div className={containerClassName}>
          <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-4">
            {featureSections.map((section, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl p-2">
                <h3 className="mb-4 text-2xl font-semibold leading-snug text-[#072d7f] sm:text-3xl">
                  <Link href={section.href} className="transition-colors hover:text-[#0b63b8]">
                    {section.title}
                  </Link>
                </h3>
                <div className="space-y-4 text-base leading-relaxed text-gray-600 sm:text-lg">
                  {section.paragraphs.map((paragraph, pIndex) => (
                    <p key={pIndex}>{paragraph}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="w-full overflow-x-clip bg-[#0B5FCC] py-5 lg:py-10">
        <div className={containerClassName}>
          <h2 className="mb-4 break-words text-3xl font-semibold leading-tight text-white [overflow-wrap:anywhere] sm:mb-5 sm:text-4xl lg:mb-6 lg:text-5xl">
            Our Website Design Process
          </h2>
          <p className="mb-8 max-w-3xl break-words text-sm leading-relaxed text-white/90 [overflow-wrap:anywhere] sm:mb-10 sm:text-base lg:mb-14 lg:text-lg">
            Great websites don't happen by accident. They start with a clear strategy.
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

      {/* Built for Mobile & Why Choose Section */}
      <section className="w-full bg-white py-5 lg:py-10">
        <div className={containerClassName}>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Built for Mobile, Speed & Search */}
            <div>
              <h2 className="mb-6 text-3xl font-medium leading-tight text-[#0749A7] sm:text-4xl">
                Built for Mobile, Speed & Search
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-gray-600 sm:text-lg">
                <p>Your customers aren't visiting your website from just one device. They may find you through a phone, tablet, laptop, or desktop. Your website needs to deliver a consistent experience wherever the visitor arrives.</p>
                <p>That's why our approach to web development emphasizes responsive design, usability, performance, and SEO friendly architecture.</p>
                <p>We also structure content around what customers are actually looking for rather than forcing keywords into every sentence.</p>
                <p className="font-semibold text-[#072d7f]">The goal isn't to create a website that simply gets indexed. The goal is to create a website people want to use.</p>
              </div>
            </div>

            {/* Why Choose Web Founders USA? */}
            <div className="rounded-2xl">
              <h2 className="mb-6 text-3xl font-medium leading-tight text-[#0749A7] sm:text-4xl">
                Why Choose Web Founders USA?
              </h2>
              <div className="space-y-4 text-base leading-relaxed text-gray-600 sm:text-lg">
                <p>
                  At <Link href="https://www.webfoundersusa.com/" className="font-semibold text-[#0b63b8] hover:underline">Web Founders USA</Link>, website design is more than creating a great-looking website. We see your website as a key part of your overall digital growth strategy.
                </p>
                <p>
                  Our team brings <Link href="https://www.webfoundersusa.com/service/custom-website-design/" className="font-semibold text-[#0b63b8] hover:underline">web design</Link>, <Link href="https://www.webfoundersusa.com/service/web-development/" className="font-semibold text-[#0b63b8] hover:underline">web development</Link>, eCommerce, SEO, content, branding, and <Link href="https://www.webfoundersusa.com/service/digital-marketing/" className="font-semibold text-[#0b63b8] hover:underline">digital marketing</Link> together under one roof. This allows us to build your website with the bigger picture in mind from attracting the right audience to creating an online experience that turns visitors into customers.
                </p>
                <p>Whether you're launching a new website or improving an existing one, we focus on creating a digital presence that supports your brand, strengthens your online visibility, and helps your business grow.</p>
                <p className="font-semibold text-[#072d7f]">You don't need a website that merely exists. You need one that supports your marketing, communicates your value, and creates opportunities for growth.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-[#072d7f] py-12 sm:py-16 lg:py-20">
        <div className={containerClassName}>
          <div className="mx-auto max-w-4xl text-center text-white">
            <h2 className="mb-6 text-balance text-3xl font-medium leading-tight sm:text-4xl lg:text-5xl">
              Ready for a Website That Works Harder?
            </h2>
            <div className="mx-auto mb-8 max-w-3xl space-y-4 text-pretty text-base leading-relaxed text-white/90 sm:text-lg">
              <p>Your website is one of the most important parts of your digital presence.</p>
              <p>Don't settle for a site that simply looks good.</p>
              <p className="font-semibold text-white">Build one that looks professional, performs smoothly, communicates clearly, and gives your customers a reason to take action.</p>
            </div>
            <Link
              href="/contact-us"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-[#072d7f] shadow-md transition-all duration-300 hover:bg-gray-100 hover:shadow-lg sm:text-lg"
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
      <section className="w-full bg-[#F8F9FA] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto w-full max-w-6xl">
          <div className="mx-auto mb-10 max-w-4xl text-center sm:mb-12 lg:mb-14">
            <h2 className="text-balance text-3xl font-medium leading-tight text-[#0749A7] sm:text-4xl lg:text-5xl">
              Frequently Asked Questions
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