import Link from "next/link";

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

const Chips = () => {
  return (
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
            <li
              key={label}
              className="border-b border-slate-200/80"
            >
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
  );
};

export default Chips;
