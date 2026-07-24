import Link from "next/link";
import Image from "next/image";
import { IoCall } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import FaqJsonLd from "@/components/seo/FaqJsonLd";
import { getServiceById, getSubCategory } from "@/data/services";

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

function renderRichBlock(content, key) {
  if (typeof content === "string" || content == null) {
    return <p key={key} dangerouslySetInnerHTML={formatHtml(content)} />;
  }

  return <div key={key}>{content}</div>;
}

export default function SubServiceDetailPage({ params }) {
  const { id, sub } = params;
  const parent = getServiceById(id);
  const service = getSubCategory(id, sub);

  if (!parent || !service) {
    return (
      <div className="py-24 text-center">
        <h2 className="text-2xl font-bold">Page not found</h2>
        <p className="mt-4">We couldn&apos;t find the page you&apos;re looking for.</p>
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

          <div className="mx-auto max-w-7xl px-4 pt-6">
            <nav aria-label="Breadcrumb">
              <ol className="flex items-center justify-center gap-2 text-sm text-gray-200">
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
                <li>
                  <Link
                    href={`/service/${id}`}
                    className="text-white transition-colors hover:text-[#d7e6ff]"
                  >
                    {toTitleCase(parent.title || id)}
                  </Link>
                </li>
                <li aria-hidden="true">{">"}</li>
                <li className="font-medium text-white">{toTitleCase(service.title || sub)}</li>
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

      <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="flex-1 space-y-4 text-base leading-relaxed text-gray-700 md:text-lg">
            {(service.introParagraphs || []).map((paragraph, index) =>
              renderRichBlock(paragraph, index),
            )}
            {id === "custom-website-design" && (
              <Link
                href={`/service/${id}`}
                className="mt-4 inline-block rounded-lg border border-blue-800 bg-blue-800 p-2 text-white transition-colors hover:bg-white hover:text-blue-800"
              >
                Custom Website Design Services
              </Link>
            )}
          </div>

          <div className="flex flex-1 justify-center">
            <div className="w-full" style={{ aspectRatio: "1 / 1" }}>
              {service.hero?.image ? (
                <Image
                  src={service.hero.image}
                  alt={service.title}
                  width={300}
                  height={300}
                  className="h-full w-full rounded-lg object-cover"
                />
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
              {service.tab.steps.map(({ id: stepId, tab_name, heading, description }, index) => (
                <article
                  key={stepId}
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

      {service.whyChoose?.length > 0 && (
        <section className="bg-white py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-4">
            <div className="mb-12 text-center md:mb-16">
              <p className="mb-3 text-sm font-semibold text-[#FF3C1B] md:text-base">Why Choose</p>
              <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
                <span className="bg-gradient-to-r from-[#072d7f] to-[#A7C7E7] bg-clip-text text-transparent">
                  Why Choose Our {service.title}
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {service.whyChoose.map((item, index) => (
                <div
                  key={index}
                  className="rounded-[20px] border border-transparent bg-[#F4F6FF] p-6 shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full text-[#072d7f]">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 6L9 17l-5-5"
                          stroke="#072d7f"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[#072d7f]">{item.title}</h3>
                      <p
                        className="mt-2 text-sm leading-relaxed text-gray-700"
                        dangerouslySetInnerHTML={formatHtml(item.desc)}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

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
                {typeof faq.answer === "string" ? (
                  <p
                    className="text-gray-700"
                    dangerouslySetInnerHTML={formatHtml(faq.answer)}
                  />
                ) : (
                  <div className="text-gray-700">{faq.answer}</div>
                )}
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
