import Image from "next/image";
import Link from "next/link";
import { FaArrowCircleRight } from "react-icons/fa";

// --- Hero Section Components ---
const actionStyles = {
  primary:
    "inline-flex w-full items-center justify-center rounded-lg bg-[#0b63b8] px-5 py-3 text-center font-semibold text-white shadow transition-colors hover:bg-[#075aa6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent sm:w-auto sm:px-6",
  secondary:
    "inline-flex w-full items-center justify-center rounded-lg border border-white/40 px-5 py-3 text-center font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent sm:w-auto sm:px-6",
};

function HeroField({ field }) {
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
                {(form.fields || []).map((field, index) => (
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
  "Clean website design",
  "Easy navigation",
  "Mobile-friendly pages",
  "Fast loading",
  "Clear service pages",
  "Simple contact forms",
  "Easy-to-read content",
  "SEO-friendly website structure",
  "Secure and reliable development",
];

const industryServices = [
  {
    title: "B2B Web Design Services",
    description: "Our B2B Web Design Services help business-to-business companies create a clear and professional website. Your website can explain your services, show your work, and make it easy for other businesses to contact you.",
    href: "https://www.webfoundersusa.com/service/custom-website-design/b2b-web-design/",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#f84318]"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>,
  },
  {
    title: "Law Firm Web Design Services",
    description: "Law firms need websites that look professional and build trust. Our Law Firm Web Design Services can help create simple pages for legal services, attorney information, FAQs, and contact details.",
    href: "https://www.webfoundersusa.com/service/custom-website-design/law-firm-web-design/",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#f84318]"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/></svg>,
  },
  {
    title: "Healthcare Web Design Services",
    description: "Healthcare websites should be clear and easy to use. Our Healthcare Web Design Services help healthcare businesses create websites that make important information easy to find.",
    href: "https://www.webfoundersusa.com/service/custom-website-design/healthcare-web-design/",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#f84318]"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/><path d="M12 5 9.04 11h5.92L12 5Z"/></svg>,
  },
  {
    title: "Restaurant Website Design Services",
    description: "People often look online before visiting a restaurant. Our Restaurant Website Design Services can help you show your menu, location, hours, photos, and contact information in a simple way.",
    href: "https://www.webfoundersusa.com/service/custom-website-design/restaurant-web-design/",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#f84318]"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/></svg>,
  },
  {
    title: "Real Estate Website Design Services",
    description: "A real estate website needs to show homes and properties in a clear way. Our Real Estate Website Design Services can help real estate businesses create an easy and professional website for their customers.",
    href: "https://www.webfoundersusa.com/service/custom-website-design/real-estate-web-design/",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#f84318]"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
  },
  {
    title: "Manufacturing Website Design Services",
    description: "Manufacturing companies need websites that clearly explain what they make and who they serve. Our Manufacturing Website Design Services can help show your products, services, projects, and company information.",
    href: "https://www.webfoundersusa.com/service/custom-website-design/manufacturing-web-design/",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#f84318]"><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-6-6H4a2 2 0 0 0-2 2Z"/><path d="M10 10h.01"/><path d="M14 10h.01"/><path d="M10 14h.01"/><path d="M14 14h.01"/><path d="M10 18h.01"/><path d="M14 18h.01"/></svg>,
  },
  {
    title: "Construction Company Website Design Services",
    description: "A construction website should show your work and help people understand your services. Our Construction Company Website Design Services can help you build a website that shows projects, services, reviews, and contact details.",
    href: "https://www.webfoundersusa.com/service/custom-website-design/construction-web-design/",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#f84318]"><path d="M2 22h20"/><path d="M12 2v6"/><path d="M12 14a6 6 0 0 0-6 6h12a6 6 0 0 0-6-6Z"/><path d="M9 14V8a3 3 0 0 1 6 0v6"/></svg>,
  },
  {
    title: "Plumber Web Design Services",
    description: "Plumbers need a website that makes it easy for customers to call or request help. Our Plumber Web Design Services can help plumbing businesses create simple service pages and clear contact options.",
    href: "https://www.webfoundersusa.com/service/custom-website-design/plumber-web-design/",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#f84318]"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>,
  },
  {
    title: "E-Commerce Website Design",
    description: "If you sell products online, your website needs to be easy to use. Our BigCommerce Web Design Services can help online stores create a clean and useful shopping experience. We can also build websites that make it easy for customers to view products, add items to their cart, and complete a purchase.",
    href: "https://www.webfoundersusa.com/service/custom-website-design/bigcommerce-web-design/",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#f84318]"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>,
  },
  {
    title: "SaaS Web Design Services",
    description: "Software companies need websites that explain their products in a simple way. Our SaaS Web Design Services can help create clean pages that show what your software does and why people should use it.",
    href: "https://www.webfoundersusa.com/service/custom-website-design/saas-web-design/",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#f84318]"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>,
  },
  {
    title: "Front End Development Services",
    description: "A website should not only look good. It should also work well. Our Front End Development Services help make pages fast, smooth, and easy to use. We focus on things like buttons, menus, page layouts, and other parts that visitors use.",
    href: "https://www.webfoundersusa.com/service/custom-website-design/front-end-development/",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#f84318]"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,
  },
  {
    title: "Website Redesign Services",
    description: "Sometimes your old website needs a fresh start. It may look old, work slowly, or be hard to use on a phone. Our Website Redesign Services can help give your website a new look and make it easier for visitors to use. We can review your current website and find areas that need improvement.",
    href: "https://www.webfoundersusa.com/service/custom-website-design/website-redesign/",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#f84318]"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"/><path d="M16 21h5v-5"/></svg>,
  },
  {
    title: "SEO-Friendly Web Design",
    description: "A beautiful website is not enough if people cannot find it. That is why we include SEO-Optimized Content and an SEO-friendly website structure when needed. Your pages should have clear headings, useful content, good page titles, and information that helps both visitors and search engines.",
    href: "https://www.webfoundersusa.com/service/content-writing/",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#f84318]"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>,
  },
  {
    title: "White Label Web Design Services",
    description: "Agencies can also use our White Label Web Design Services. This allows agencies to offer website design to their clients without handling all the design and development work themselves. It can be a simple way to grow your service offering.",
    href: "https://www.webfoundersusa.com/service/custom-website-design/white-label-web-design/",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#f84318]"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>,
  },
];

const whyChooseItems = [
  "Easy to use",
  "Easy to understand",
  "Mobile-friendly",
  "Fast",
  "Professional",
  "Made for your business",
  "Ready to grow with you",
];

const processSteps = [
  { number: 1, label: "Talk About Your Business", description: "First, we learn about your business, your customers, and your goals." },
  { number: 2, label: "Plan the Website", description: "We plan the pages, layout, content, and main features." },
  { number: 3, label: "Create the Design", description: "Our team creates a design that matches your business and brand." },
  { number: 4, label: "Build the Website", description: "We develop the website and make sure the pages work properly." },
  { number: 5, label: "Make It Mobile-Friendly", description: "We test the website on different screen sizes." },
  { number: 6, label: "Add SEO-Friendly Content", description: "We make sure your pages have useful content and a clear structure." },
  { number: 7, label: "Test and Launch", description: "Before launch, we check the website for problems. Then we make it ready for your customers." },
];

const faqItems = [
  {
    question: "What is Web Design Gainesville GA?",
    answer: "Web Design Gainesville GA means creating and improving websites for businesses in Gainesville, Georgia. The goal is to make a website that looks good, works well, and helps customers.",
  },
  {
    question: "Do you build custom websites?",
    answer: "Yes. Our Custom Website Design Services can create a website based on your business, brand, and goals.",
  },
  {
    question: "Will my website work on mobile phones?",
    answer: "Yes. We can create responsive websites that work on phones, tablets, and computers.",
  },
  {
    question: "Can you redesign my old website?",
    answer: "Yes. Our Website Redesign Services can help improve an old website and give it a fresh, easier-to-use design.",
  },
  {
    question: "Can you design websites for different industries?",
    answer: "Yes. We provide web design solutions for businesses such as law firms, healthcare companies, restaurants, real estate businesses, manufacturers, construction companies, plumbers, and more.",
  },
  {
    question: "Can web design help with SEO?",
    answer: "Yes. Good website design and SEO can work together. A clear website structure, useful content, fast pages, and mobile-friendly design can help create a better experience for visitors and search engines.",
  },
  {
    question: "Do you build e-commerce websites?",
    answer: "Yes. We provide e-commerce website design solutions for businesses that want to sell products online.",
  },
  {
    question: "Can you help my agency with web design?",
    answer: "Yes. Our White Label Web Design Services can help agencies provide website design to their clients without handling all the development work themselves.",
  },
];

export const metadata = {
  title: "Web Design Gainesville GA | Web Founders USA",
  description: "Web Design Gainesville GA by Web Founders USA. Get a modern, SEO-friendly website that grows your business. Call +1 470-470-7392 now!  ",
  alternates: {
    canonical: "/locations/web-design-gainesville-ga/",
  },
};

// --- Main Page Component ---
export default function WebDesignGainesvillePage() {
  return (
    <main className="w-full overflow-x-clip bg-white">
      {/* Hero Section */}
      <ServiceHero
        image={{
          src: "/service-testing/Local-SEO-Agency-LocalMighty.webp",
          alt: "Web Design Gainesville GA",
          priority: true,
        }}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Web Design Gainesville GA" },
        ]}
        title="Web Design Gainesville GA"
        description={
          <>
            <p className="mb-4">
              Your website is often the first thing people see about your business. A good website can help people trust your business. It can also help them learn about your services, call you, or buy from you.
            </p>
            <p>
              Our Web Design Gainesville GA services help businesses build websites that look good and are easy to use. We create websites that work well on phones, tablets, and computers. We keep the design simple, clear, and focused on your business goals.
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

            {/* Focus Section */}
      <section className="w-full bg-[#F8F9FA] py-5 lg:py-10">
        <div className={containerClassName}>
          <div className="mx-auto mb-10 max-w-4xl text-center sm:mb-12 lg:mb-14">
            <h2 className="text-balance text-3xl font-medium leading-tight text-[#0749A7] sm:text-4xl lg:text-5xl">
              Web Design Services in Gainesville GA
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-pretty text-base leading-relaxed text-gray-600 sm:text-lg">
              Every business is different. Your website should be different too. Our web design services can help you build a website that fits your brand and your customers. Our goal is simple. We want your website to look good and help your business grow.
            </p>
          </div>

          <div className="mx-auto rounded-2xl border p-2 border-none">
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

      {/* Custom & Responsive Section */}
      <section className="w-full bg-[#F8F9FA] py-5 lg:py-10">
        <div className={containerClassName}>
          <div className="grid grid-cols-1 gap-2 lg:grid-cols-2 lg:gap-4">
            {/* Custom Website Design */}
            <div className="group relative overflow-hidden rounded-2xl p-2">
             
              <h3 className="mb-4 text-2xl font-semibold leading-snug text-[#072d7f] sm:text-3xl">
                <Link href="https://www.webfoundersusa.com/service/custom-website-design/" className="transition-colors hover:text-[#0b63b8]">
                  Custom Website Design Services
                </Link>
              </h3>
              <div className="space-y-4 text-base leading-relaxed text-gray-600 sm:text-lg">
                <p>A ready-made website may not always fit your business.</p>
                <p>With Custom Website Design Services, we build your website around your brand, your services, and your goals. We can create the layout, pages, colors, images, and other parts of the website to match your business.</p>
                <p>A custom website can also make it easier for your customers to find what they need.</p>
              </div>
            </div>

            {/* Responsive Website Design */}
            <div className="group relative overflow-hidden rounded-2xl p-2">
              
              <h3 className="mb-4 text-2xl font-semibold leading-snug text-[#072d7f] sm:text-3xl">
                <Link href="https://www.webfoundersusa.com/service/custom-website-design/responsive-web-design/" className="transition-colors hover:text-[#0b63b8]">
                  Responsive Website Design for Gainesville Businesses
                </Link>
              </h3>
              <div className="space-y-4 text-base leading-relaxed text-gray-600 sm:text-lg">
                <p>Many people use their phones to search for businesses. That is why your website should look good on every screen.</p>
                <p>Our Responsive Website Design Company Services help make websites that work well on phones, tablets, and computers.</p>
                <p>The text should be easy to read. Buttons should be easy to tap. Pages should also be simple to move through.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="w-full bg-[#F8F9FA] px-4 text-[#072d7f] sm:px-6 lg:px-8 py-5 lg:py-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center md:mb-20">
            <p className="mb-2 text-sm font-semibold text-[#FF3C1B] md:mb-3 md:text-base">
              Industries We Serve
            </p>
            <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
              <span className="bg-gradient-to-r from-[#072d7f] to-[#A7C7E7] bg-clip-text text-transparent">
                Web Design for Different <br className="hidden sm:block" />
                Businesses
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-pretty text-base leading-relaxed text-gray-600 sm:text-lg">
              Different businesses need different websites. We create website solutions for many types of businesses in Gainesville and nearby areas.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-2 md:gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
            {industryServices.map((service, index) => {
              const Icon = service.icon;
              const titleParts = service.title.split(" ");

              return (
                <Link
                  key={index}
                  href={service.href}
                  className="group flex h-full flex-col rounded-[30px] border border-transparent bg-[#072d7f] p-6 md:p-8 transition-all duration-300 hover:border-[#DE2F04]"
                >
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-[20px] border border-transparent bg-white/10 transition-all duration-300 group-hover:border-[#DE2F04] md:mb-6 md:h-16 md:w-16">
                    {Icon}
                  </div>

                  <h3 className="text-lg mb-4 font-semibold md:text-xl">
                    <span className="bg-gradient-to-r from-[#ffb199] to-white bg-clip-text text-transparent">
                      {service.title}
                    </span>{" "}
                    
                  </h3>

                  <p className=" text-sm leading-relaxed text-white/80 md:text-base">
                    {service.description}
                  </p>

                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="w-full bg-white py-5 lg:py-10">
        <div className={containerClassName}>
          <div className="mx-auto mb-10 max-w-4xl text-center">
            <h2 className="text-balance text-3xl font-medium leading-tight text-[#0749A7] sm:text-4xl lg:text-5xl">
              Why Choose Our Web Design Services in Gainesville?
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-pretty text-base leading-relaxed text-gray-600 sm:text-lg">
              We keep website design simple. Our team focuses on building websites that are not just pretty, but useful too. We also look at your business goals before starting the design.
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

      {/* Process Section */}
      <section className="w-full overflow-x-clip bg-[#0B5FCC] py-5 lg:py-10">
        <div className={containerClassName}>
          <h2 className="mb-4 break-words text-3xl font-semibold leading-tight text-white [overflow-wrap:anywhere] sm:mb-5 sm:text-4xl lg:mb-6 lg:text-5xl">
            Our Web Design Process
          </h2>
          <p className="mb-8 max-w-3xl break-words text-sm leading-relaxed text-white/90 [overflow-wrap:anywhere] sm:mb-10 sm:text-base lg:mb-14 lg:text-lg">
            A structured approach to ensure your website is built correctly, looks great, and performs flawlessly.
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

      {/* Growing Business / CTA Section */}
      <section className="w-full bg-white py-5 lg:py-10">
        <div className={containerClassName}>
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-balance text-3xl font-medium leading-tight text-[#0749A7] sm:text-4xl lg:text-5xl">
              Web Design Gainesville GA for Growing Businesses
            </h2>
            <div className="mx-auto mb-8 max-w-3xl space-y-4 text-pretty text-base leading-relaxed text-gray-600 sm:text-lg">
              <p>
                Your website can grow as your business grows. You may start with a few pages. Later, you may need more services, products, locations, or features. We can build websites that give you room to grow. Whether you need a new website or want to improve an old one, we can help.
              </p>
              <p className="font-semibold text-[#072d7f]">Start Your Web Design Project</p>
              <p>
                A good website should make things easy. It should help people understand your business. It should show your services clearly. And it should make it simple for customers to contact you. If you are looking for Web Design Gainesville GA, our team can help you create a website that looks professional, works well, and supports your business goals.
              </p>
            </div>
            <Link
              href="/contact-us"
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
      <section className="w-full bg-[#F8F9FA] px-4 sm:px-6 lg:px-8 py-5 lg:py-10">
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
    </main>
  );
}
