import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ServiceHero from "@/app/service/seo-services/components/ServiceHero";
import {
  countyPosts,
  getCountyPostBySlug,
  getCountyPostDescriptionText,
} from "@/data/county";
import { withEnUsHreflang } from "@/lib/metadata";
import CountiesCTA from "@/components/CountiesCTA";

type CountyPageProps = {
  params: Promise<{
    county: string;
  }>;
};

export function generateStaticParams() {
  return countyPosts.map(({ slug }) => ({ county: slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: CountyPageProps): Promise<Metadata> {
  const { county } = await params;
  const post = getCountyPostBySlug(county);
  const canonical = `/locations/${county}/`;

  if (!post) {
    return withEnUsHreflang({
      title: "Location Not Found | Web Founders USA",
      description: "The requested Web Founders USA location could not be found.",
      alternates: { canonical },
      robots: { index: false, follow: false },
    });
  }

  const metaTitle = post.metaTitle?.trim() || `${post.title} | Web Founders USA`;
  const metaDescription =
    post.metaDescription?.trim() ||
    getCountyPostDescriptionText(post.description);

  return withEnUsHreflang({
    title: metaTitle,
    description: metaDescription,
    alternates: { canonical },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      type: "article",
      ...(post.image?.trim() ? { images: [post.image.trim()] } : {}),
    },
  });
}

export default async function CountyPage({ params }: CountyPageProps) {
  const { county } = await params;
  const post = getCountyPostBySlug(county);
  const showSeoChips = county === "alpharetta-seo-services";

  if (!post) {
    notFound();
  }

  return (
    <section className="overflow-hidden bg-white">
      <ServiceHero
        image={{
          src: "/service-testing/Local-SEO-Agency-LocalMighty.webp",
          alt: "Local SEO services hero background",
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
              as: "textarea",
              name: "message",
              placeholder: "Message",
            },
          ],
          submitLabel: post.submitLabel,
        }}
      />

      {showSeoChips ? (
        <div className="mx-auto mt-8 w-[92%] max-w-[1200px] rounded-2xl border border-blue-100 bg-gradient-to-br from-slate-50 via-white to-blue-50 p-5 shadow-sm sm:p-7">
          <p className="mb-4 text-center text-sm font-bold uppercase tracking-wider text-blue-900">
            Explore our Seo services
          </p>

          <div
            className="flex flex-wrap justify-center gap-3"
            aria-label="Related Website Design services"
          >
            {[
              {
                label: "SEO Services",
                href: "/service/seo-services/",
              },
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
            ].map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 font-semibold text-blue-700 underline decoration-blue-300 underline-offset-4 transition-all duration-200 hover:bg-blue-700 hover:text-white"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}

      <article className="mx-auto max-w-[980px] px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        {post.image?.trim() && (
          <div className="relative aspect-[1.9] overflow-hidden rounded-[18px] bg-[#f4f4f4]">
            <Image
              src={post.image.trim()}
              alt={post.title}
              fill
              sizes="(max-width: 1023px) 100vw, 980px"
              className="object-cover"
            />
          </div>
        )}

        {/* {post.publishedAt?.trim() && (
          <p className="mt-5 italic text-sm text-[#8b8b8b] sm:text-base">
            By Web Founders USA | {post.publishedAt.trim()}
          </p>
        )} */}

        <div className="mt-7 space-y-10">
          {post.content.map((section, sectionIndex) => (
            <section
              key={`${section.heading ?? "introduction"}-${sectionIndex}`}
              className={
                section.heading === "Frequently Asked Questions"
                  ? "border-t border-slate-100 pt-8 sm:pt-10"
                  : [
                        "Local SEO Maryland",
                        "Maryland Search Engine Optimization",
                        "SEO Company in Westminster, MD",
                        "Elkton MD Search Engine Optimization",
                        "SEO Company Maryland Businesses Can Trust",
                        "Local SEO Company in Maryland",
                        "Search Engine Marketing in Maryland",
                        "Organic SEO in Maryland",
                        "Maryland SEO Expert for Local Businesses",
                        "Maryland SEO Services for Different Industries",
                        "Why Choose WebFounders USA for Maryland SEO?",
                        "Our Maryland SEO Process",
                        "SEO Services for Maryland and Nearby Areas",
                        "SEO Services in Maryland",
                      ].includes(section.heading ?? "")
                    ? "relative left-1/2 w-screen -translate-x-1/2 border-y border-slate-200 bg-slate-50 px-4 py-12 sm:px-8 sm:py-16 lg:px-12 lg:py-20"
                  : undefined
              }
            >
              {section.heading && (
                <h2
                  className={
                    section.heading === "Frequently Asked Questions"
                      ? "mb-8 text-center text-3xl font-bold leading-tight tracking-[-0.035em] text-slate-950 sm:text-4xl"
                      : [
                            "Local SEO Maryland",
                            "Maryland Search Engine Optimization",
                            "SEO Company in Westminster, MD",
                            "Elkton MD Search Engine Optimization",
                            "SEO Company Maryland Businesses Can Trust",
                            "Local SEO Company in Maryland",
                            "Search Engine Marketing in Maryland",
                            "Organic SEO in Maryland",
                            "Maryland SEO Expert for Local Businesses",
                            "Maryland SEO Services for Different Industries",
                            "Why Choose WebFounders USA for Maryland SEO?",
                            "Our Maryland SEO Process",
                            "SEO Services for Maryland and Nearby Areas",
                            "SEO Services in Maryland",
                          ].includes(section.heading ?? "")
                        ? "mx-auto mb-10 max-w-7xl text-3xl font-semibold leading-tight tracking-[-0.04em] text-slate-950 sm:mb-12 sm:text-5xl"
                      : "mb-5 text-2xl font-medium leading-[1.15] tracking-[-0.035em] text-[#282828] sm:text-3xl"
                  }
                >
                  {section.heading}
                </h2>
              )}

              <div
                className={
                  [
                    "Local SEO Maryland",
                    "Maryland Search Engine Optimization",
                    "SEO Company in Westminster, MD",
                    "Elkton MD Search Engine Optimization",
                    "SEO Company Maryland Businesses Can Trust",
                    "Local SEO Company in Maryland",
                    "Search Engine Marketing in Maryland",
                    "Organic SEO in Maryland",
                    "Maryland SEO Expert for Local Businesses",
                    "Maryland SEO Services for Different Industries",
                    "Why Choose WebFounders USA for Maryland SEO?",
                    "Our Maryland SEO Process",
                    "SEO Services for Maryland and Nearby Areas",
                    "SEO Services in Maryland",
                  ].includes(section.heading ?? "")
                    ? "mx-auto max-w-7xl space-y-5 text-base leading-[1.8] text-[#555555] sm:text-lg"
                    : "space-y-5 text-base leading-[1.8] text-[#555555] sm:text-lg"
                }
              >
                {section.paragraphs.map((paragraph, paragraphIndex) => (
                  <div key={`${sectionIndex}-${paragraphIndex}`}>{paragraph}</div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </article>
      <CountiesCTA />
    </section>
  );
}
