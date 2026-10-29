import Link from "next/link";
import { Inter, JetBrains_Mono } from "next/font/google";
import type { ReactNode } from "react";
import ServiceHero from "@/app/service/seo-services/components/ServiceHero";
import CountiesCTA from "@/components/CountiesCTA";
import type { CountyPost } from "@/data/county";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const relatedLinks = [
  { label: "SEO Services", href: "/service/seo-services/" },
  {
    label: "Roofing SEO Services",
    href: "/service/seo-services/roofing-seo/",
  },
  {
    label: "Local SEO Services",
    href: "/service/seo-services/local-seo-services/",
  },
  {
    label: "Automotive SEO",
    href: "/service/seo-services/automotive-seo",
  },
  {
    label: "Web Design Gainesville GA",
    href: "/locations/web-design-elk-river/",
  },
  {
    label: "SEO Company Gwinnett County",
    href: "/locations/seo-gwinnet/",
  },
  {
    label: "Alpharetta SEO Services",
    href: "/locations/alpharetta-seo-services/",
  },
  {
    label: "Maryland SEO Company",
    href: "/locations/maryland-seo-company/",
  },
  {
    label: "SEO Company Suwanee, GA",
    href: "/locations/seo-company-suwanee-ga/",
  },
];

function SectionHeading({ heading }: { heading?: string }) {
  if (!heading) return null;

  return (
    <header className="mb-5 md:mb-8">
      <h2 className="max-w-6xl text-4xl font-semibold leading-[0.95] tracking-tighter md:text-7xl">
        <span
          className="relative inline text-[#0033CC]"
          style={{
            backgroundImage: "linear-gradient(transparent 90%, #000000 85%)",
            WebkitBoxDecorationBreak: "clone",
            boxDecorationBreak: "clone",
          }}
        >
          {heading}
        </span>
      </h2>
    </header>
  );
}

function ContentBlock({ content }: { content: ReactNode }) {
  if (typeof content === "string") {
    const isLabel = content.trim().endsWith(":");

    return (
      <p
        className={
          isLabel
            ? "font-mono text-xs font-semibold uppercase tracking-[0.16em] text-[#0033CC] md:text-sm"
            : undefined
        }
      >
        {content}
      </p>
    );
  }

  return <div>{content}</div>;
}

function AlpharettaContent({ post }: { post: CountyPost }) {
  return (
    <article
      className={`relative bg-white text-black ${inter.variable} ${jetbrainsMono.variable} font-sans antialiased selection:bg-[#0033CC] selection:text-white`}
    >
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(black 1px, transparent 1px), linear-gradient(90deg, black 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          backgroundPosition: "center top",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12">
        {post.content.map((section, sectionIndex) => (
          <section
            key={`${section.heading ?? "introduction"}-${sectionIndex}`}
            className="border-b border-black py-12 first:pt-10 last:border-b-0 md:py-20"
          >
            <SectionHeading heading={section.heading} />

            <div className="max-w-6xl space-y-8 text-base leading-7 tracking-tight text-[#333333] md:text-lg md:leading-8 [&_div.rounded-2xl]:!rounded-none [&_div.rounded-2xl]:border-0 [&_div.rounded-2xl]:bg-transparent [&_div.rounded-2xl]:p-0 [&_div.rounded-2xl]:shadow-none [&_details]:!rounded-none [&_details]:border-0 [&_details]:border-b [&_details]:border-black [&_details]:bg-transparent [&_details_div]:border-0 [&_details_div]:px-0 [&_details_div]:pb-8 [&_details_div]:pt-0 [&_details_div]:text-base [&_details_div]:text-[#333333] [&_details_summary]:px-0 [&_details_summary]:py-8 [&_details_summary]:text-xl [&_details_summary]:font-semibold [&_details_summary]:text-black [&_h3]:!rounded-none [&_h3]:border-0 [&_h3]:border-l-4 [&_h3]:border-[#0033CC] [&_h3]:bg-transparent [&_h3]:py-1 [&_h3]:pl-5 [&_h3]:pr-0 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-black [&_h3]:sm:text-2xl [&_p.rounded-xl]:!rounded-none [&_p.rounded-xl]:border-0 [&_p.rounded-xl]:bg-transparent [&_p.rounded-xl]:px-0 [&_p.rounded-xl]:py-0 [&_ul]:my-8 [&_ul]:grid [&_ul]:grid-cols-1 [&_ul]:gap-x-12 [&_ul]:gap-y-0 [&_ul]:!rounded-none [&_ul]:border-0 [&_ul]:border-l-0 [&_ul]:bg-transparent [&_ul]:p-0 [&_ul]:shadow-none [&_ul]:sm:grid-cols-2 [&_ul>li]:!rounded-none [&_ul>li]:relative [&_ul>li]:border-0 [&_ul>li]:border-b [&_ul>li]:border-slate-200 [&_ul>li]:bg-transparent [&_ul>li]:py-3.5 [&_ul>li]:pl-6 [&_ul>li]:pr-0 [&_ul>li]:text-sm [&_ul>li]:font-medium [&_ul>li]:leading-7 [&_ul>li]:text-slate-700 [&_ul>li]:shadow-none [&_ul>li]:transition-colors [&_ul>li]:duration-200 [&_ul>li]:hover:bg-slate-50 [&_ul>li]:before:left-1 [&_ul>li]:before:top-1/2 [&_ul>li]:before:-translate-y-1/2">
              {section.paragraphs.map((paragraph, paragraphIndex) => (
                <ContentBlock
                  key={`${sectionIndex}-${paragraphIndex}`}
                  content={paragraph}
                />
              ))}
            </div>
          </section>
        ))}
      </div>
    </article>
  );
}

function RelatedServices() {
  return (
    <section
      className={`relative bg-white text-black ${inter.variable} ${jetbrainsMono.variable} font-sans antialiased selection:bg-[#0033CC] selection:text-white`}
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-5 md:px-12 md:py-10">
        <header className="mb-5 md:mb-8">
          <h2 className="max-w-5xl text-4xl font-semibold leading-[0.95] tracking-tighter md:text-6xl lg:text-7xl">
            Explore our SEO services
          </h2>
        </header>

        <div className="grid grid-cols-1 border-l border-black sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {relatedLinks.map(({ label, href }, index) => (
            <Link
              key={href}
              href={href}
              className="group relative flex items-start gap-4 border-b border-r border-black py-4 pl-6 pr-4 transition-colors hover:bg-black hover:text-white"
            >
              <span className="font-mono text-xs text-[#666666] transition-colors group-hover:text-[#0033CC]">
                {(index + 1).toString().padStart(2, "0")}
              </span>
              <span className="flex-1 text-base font-medium leading-snug tracking-tight underline md:text-lg">
                {label}
              </span>
              <span className="font-mono text-xs text-[#666666] transition-all group-hover:translate-x-1 group-hover:text-[#0033CC]">
                →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function AlpharettaSEOPage({ post }: { post: CountyPost }) {
  return (
    <main className="overflow-hidden bg-white text-[#202b3b]">
      <ServiceHero
        image={{
          src: "/service-testing/Local-SEO-Agency-LocalMighty.webp",
          alt: `${post.title} - Web Founders USA`,
          priority: true,
        }}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Locations", href: "/locations" },
          { label: post.title },
        ]}
        title={post.title}
        description={post.description}
        actions={post.actions}
        form={{
          ariaLabel: "Contact Web Founders USA",
          fields: [
            {
              name: "firstName",
              placeholder: "First Name",
              autoComplete: "given-name",
              colSpan: 1,
            },
            {
              name: "lastName",
              placeholder: "Last Name",
              autoComplete: "family-name",
              colSpan: 1,
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
              autoComplete: "email",
            },
            {
              name: "website",
              type: "url",
              placeholder: "Website URL",
              autoComplete: "url",
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone",
              autoComplete: "tel",
            },
            {
              name: "message",
              as: "textarea",
              placeholder: "Message",
            },
          ],
          submitLabel: post.submitLabel,
        }}
      />
      <RelatedServices />
      <AlpharettaContent post={post} />
      <CountiesCTA />
    </main>
  );
}
