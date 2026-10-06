import Link from "next/link";
import { Inter, JetBrains_Mono } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  variable: '--font-mono',
});

const seoServices = [
  { label: "Healthcare SEO", href: "/service/seo-services/healthcare-seo/" },
  { label: "Medical SEO", href: "/service/seo-services/medical-seo/" },
  { label: "Dental SEO", href: "/service/seo-services/dental-seo/" },
  { label: "Employment Lawyer SEO", href: "/service/seo-services/employment-lawyers-seo/" },
  { label: "B2B SEO", href: "/service/seo-services/b2b-seo/" },
  { label: "E-commerce SEO", href: "/service/seo-services/ecommerce-seo/" },
  { label: "Shopify SEO", href: "/service/seo-services/shopify-seo/" },
  { label: "WooCommerce SEO", href: "/service/seo-services/woocommerce-seo/" },
  { label: "WordPress SEO", href: "/service/seo-services/wordpress-seo/" },
  { label: "Automotive SEO", href: "/service/seo-services/automotive-seo/" },
  { label: "Construction SEO", href: "/service/seo-services/construction-seo/" },
  { label: "Roofing SEO", href: "/service/seo-services/roofing-seo/" },
  { label: "Hotel & Hospitality SEO", href: "/service/seo-services/hotel-seo/" },
  { label: "Insurance SEO", href: "/service/seo-services/insurance-broker-seo/" },
  { label: "Locksmith SEO", href: "/service/seo-services/locksmith-seo-services/" },
  { label: "Local Business SEO", href: "/service/seo-services/local-seo-services/" },
  { label: "Professional Services SEO", href: "/service/" },
  { label: "Enterprise SEO", href: "/service/seo-services/enterprise-seo/" },
  { label: "Multilingual SEO", href: "/service/seo-services/multilingual-seo/" },
];

const Chips = () => {
  return (
    <section className={`relative bg-white text-black ${inter.variable} ${jetbrainsMono.variable} font-sans antialiased selection:bg-[#0033CC] selection:text-white`}>
      
      {/* Subtle Grid Background */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(black 1px, transparent 1px), linear-gradient(90deg, black 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          backgroundPosition: 'center top',
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-5 pb-10 md:px-12">
        
        {/* Header */}
        <header className="mb-12 border-b-2 border-black pb-8 md:mb-16">
          <h2 className="max-w-5xl text-4xl font-semibold leading-[0.95] tracking-tighter md:text-6xl lg:text-7xl">
            Web Founders USA Revealed Live Snap Shots Of Real Case Studies Our SEO Clients 2026
          </h2>
        </header>

        {/* Services Grid */}
        <div>
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 border-l border-black sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {seoServices.map(({ label, href }, index) => (
              <Link
                key={href}
                href={href}
                className="group relative flex items-start gap-4 border-b border-r border-black py-4 pl-6 pr-4 transition-colors hover:bg-black hover:text-white"
              >
                <span className="font-mono text-xs text-[#666666] transition-colors group-hover:text-[#0033CC]">
                  {(index + 1).toString().padStart(2, '0')}
                </span>
                <span className="flex-1 text-base font-medium underline leading-snug tracking-tight md:text-lg">
                  {label}
                </span>
                <span className="font-mono text-xs text-[#666666] transition-all group-hover:translate-x-1 group-hover:text-[#0033CC]">
                  →
                </span>
              </Link>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Chips;