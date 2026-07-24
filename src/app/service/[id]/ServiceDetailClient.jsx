import Link from "next/link";
import Image from "next/image";
import { IoCall } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import { getServiceById } from "@/data/services";

function toTitleCase(value) {
  if (!value) return "";

  return String(value)
    .split(" ")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

function formatHtml(value) {
  return {
    __html: (value || "").toString().replace(/\n/g, "<br/>"),
  };
}

export default function ServiceDetailPage({ params }) {
  const { id } = params;
  const service = getServiceById(id);

  if (!service) {
    return (
      <div className="py-24 text-center">
        <h2 className="text-2xl font-bold">Service not found</h2>
        <p className="mt-4">We couldn&apos;t find the service you&apos;re looking for.</p>
        <div className="mt-6">
          <Link href="/service" className="text-[#072d7f] underline">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white text-gray-900">
      <FaqJsonLd faqs={service.faqs || []} />

      <section className="bg-gradient-to-r from-[#072d7f] to-[#A7C7E7] py-16 text-white md:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="mx-auto max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
            <span className="bg-gradient-to-r from-[#ffb199] to-white bg-clip-text text-transparent">
              {service.title}
            </span>
          </h1>

          <div className="mx-auto mt-10 max-w-7xl px-4">
            <nav aria-label="Breadcrumb">
              <ol className="mb-3 flex items-center justify-center gap-2 text-sm text-gray-200">
                <li>
                  <Link href="/" className="text-white transition-colors hover:text-[#d7e6ff]">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">{">"}</li>
                <li>
                  <Link
                    href="/service"
                    className="text-white transition-colors hover:text-[#d7e6ff]"
                  >
                    Service
                  </Link>
                </li>
                <li aria-hidden="true">{">"}</li>
                <li className="font-medium text-white">{toTitleCase(service.title || id)}</li>
              </ol>
            </nav>
          </div>

          <div className="mt-8 flex items-center justify-center gap-5">
            <a
              href="tel:+14704707392"
              className="group flex items-center gap-3"
              aria-label="Call us"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full border-primary bg-primary transition group-hover:bg-primary/80">
                <div className="flex items-center justify-center text-white">
                  <IoCall size={30} />
                </div>
              </div>
              <span className="text-base font-semibold text-white group-hover:underline">
                +1 470-470-7392
              </span>
            </a>

            <Button asChild size="xl">
              <Link className="text-foreground" href="/contact-us">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {service.sub_categories?.length > 0 && (
        <section className="bg-white py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center md:mb-16">
              <p className="mb-3 text-sm font-semibold text-[#FF3C1B] md:text-base">Services</p>
              <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
                <span className="bg-gradient-to-r from-[#072d7f] to-[#A7C7E7] bg-clip-text text-transparent">
                  Explore Related Services
                </span>
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-gray-600">
                Dive deeper into specific offerings related to this service.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              {service.sub_categories.map((sub) => {
                const Icon = sub.icon || service.icon;

                return (
                  <Link
                    key={sub.id}
                    href={`/service/${service.id}/${sub.id}`}
                    className="group rounded-[30px] bg-[#072d7f] p-6 text-white transition-all duration-300 hover:border-[#072d7f] md:p-8"
                  >
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-[20px] border border-transparent bg-[rgba(255,255,255,0.10)] transition-all duration-300 group-hover:border-[#DE2F04] md:mb-6 md:h-16 md:w-16">
                      {Icon ? (
                        <Icon className="h-6 w-6 text-[#f84318] md:h-8 md:w-8" />
                      ) : (
                        <img
                          src={sub.hero?.image || service.hero?.image}
                          alt={sub.title}
                          className="h-6 w-6 object-contain md:h-8 md:w-8"
                        />
                      )}
                    </div>

                    <h3 className="mb-2 text-lg font-semibold md:mb-3 md:text-xl">
                      <span className="bg-gradient-to-r from-[#ffb199] to-white bg-clip-text text-transparent">
                        {sub.title.split(" ")[0]}
                      </span>{" "}
                      {sub.title.split(" ").slice(1).join(" ")}
                    </h3>

                    <p
                      className="mb-4 text-xs leading-relaxed text-white md:mb-6 md:text-sm"
                      dangerouslySetInnerHTML={formatHtml(
                        sub.desc || sub.introParagraphs?.[0] || "",
                      )}
                    />

                    <span className="inline-flex items-center font-semibold text-[#ffb199]">
                      Explore service
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="flex-1 space-y-5 text-left text-base leading-relaxed text-gray-700 md:text-lg">
            {(service.introParagraphs || []).map((paragraph, index) => (
              <p key={index} dangerouslySetInnerHTML={formatHtml(paragraph)} />
            ))}
          </div>

          <div className="flex flex-1">
            <div className="w-full" style={{ aspectRatio: "1 / 1" }}>
              {service.hero?.image ? (
                <Image
                  src={service.hero.image}
                  alt={service.title}
                  width={300}
                  height={300}
                  className="h-full w-full rounded-lg object-cover"
                />
              ) : service.icon ? (
                (() => {
                  const Icon = service.icon;

                  return (
                    <div className="flex h-full w-full items-center justify-center rounded-lg bg-gray-100">
                      <Icon className="text-4xl text-[#072d7f]" />
                    </div>
                  );
                })()
              ) : (
                <div className="flex h-full w-full items-center justify-center rounded-lg bg-gray-100" />
              )}
            </div>
          </div>
        </div>
      </section>

      {service.tab?.steps?.length > 0 && (
        <section className="bg-[#F4F6FF] py-12 md:py-20">
          <div className="mx-auto max-w-[1350px] px-[15px]">
            <div className="mb-12 flex flex-col items-center">
              <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#072d7f]">
                Our Strategy
              </span>
              <h2 className="max-w-[800px] pt-4 text-center text-3xl font-bold md:text-4xl">
                <span className="bg-gradient-to-r from-[#072d7f] to-[#A7C7E7] bg-clip-text text-transparent">
                  {service.tab.title}
                </span>
              </h2>
            </div>

            <div className="grid gap-5 md:gap-6">
              {service.tab.steps.map(({ id, tab_name, heading, description }, index) => (
                <article
                  key={id}
                  className="rounded-[24px] border border-[#dbe4ff] bg-white px-6 py-6 shadow-sm md:px-8 md:py-8"
                >
                  <span className="inline-flex rounded-full bg-[#F4F6FF] px-4 py-2 text-sm font-semibold text-[#072d7f]">
                    Step {index + 1}: {tab_name}
                  </span>
                  <h3 className="mt-4 text-2xl font-bold text-[#072d7f] md:text-3xl">
                    {heading}
                  </h3>
                  <p
                    className="pt-5 text-base leading-relaxed text-gray-700 md:text-lg"
                    dangerouslySetInnerHTML={formatHtml(description)}
                  />
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              Trusted By Industry Leaders
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-gray-600">
              We proudly partner with brands and platforms that demand excellence,
              transparency, and results.
            </p>
          </div>

          <div className="grid grid-cols-2 items-center justify-center gap-6 md:grid-cols-6 md:gap-8">
            {[
              {
                src: "/brands/images__2_-removebg-preview.webp",
                alt: "Trustpilot",
                width: 40,
                height: 40,
              },
              {
                src: "/brands/images__1_-removebg-preview.webp",
                alt: "BirdEye",
                width: 40,
                height: 40,
              },
              {
                src: "/brands/images__2__1-removebg-preview.webp",
                alt: "Feefo",
                width: 80,
                height: 80,
              },
              {
                src: "/brands/images-1-removebg-preview.webp",
                alt: "Yetpo",
                width: 40,
                height: 40,
              },
              {
                src: "/brands/images-removebg-preview.webp",
                alt: "Reviewsio",
                width: 40,
                height: 40,
              },
              {
                src: "/brands/unnamed-removebg-preview.webp",
                alt: "BazaarVoice",
                width: 40,
                height: 40,
              },
            ].map(({ src, alt, width, height }) => (
              <div key={alt} className="flex justify-center transition-all duration-300">
                <img
                  src={src}
                  alt={alt}
                  width={width}
                  height={height}
                  className="h-auto max-w-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Frequently Asked Questions</h2>
        </div>

        <div className="space-y-4">
          {(service.faqs || []).map((faq, index) => (
            <details
              key={index}
              className="group overflow-hidden rounded-xl border border-gray-200 bg-white"
              open={index === 0}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 bg-white p-5 text-left transition-colors hover:bg-gray-50">
                <span className="text-lg font-semibold">{faq.question}</span>
                <svg
                  className="shrink-0 transform transition-transform duration-200 group-open:rotate-180"
                  width={20}
                  height={20}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </summary>
              <div className="border-t border-gray-200 bg-white p-5 pt-3">
                <p
                  className="text-gray-700"
                  dangerouslySetInnerHTML={formatHtml(faq.answer)}
                />
              </div>
            </details>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/contact-us"
            className="inline-block rounded-lg border-2 border-[#072d7f] px-6 py-3 font-semibold text-[#072d7f] transition-colors hover:bg-[#072d7f] hover:text-white"
          >
            Start Your Journey
          </Link>
        </div>
      </section>
    </div>
  );
}
