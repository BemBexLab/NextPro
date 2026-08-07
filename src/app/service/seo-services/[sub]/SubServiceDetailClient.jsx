import Link from "next/link";
import Image from "next/image";
import { IoCall } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import SEOProcess from "../components/SEOProcess";
import WhyChoose from "../components/WhyChoose";
import ServiceFAQs from "../components/ServiceFAQs";

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

function getServiceFaqs(service) {
  return (service.faqs || []).map((faq) => {
    if (typeof faq.answer !== "string") {
      return faq;
    }

    return {
      ...faq,
      answerHtml: formatHtml(faq.answer).__html,
    };
  });
}

const whyChooseColors = [
  "bg-[#0052cc]",
  "bg-[#ff0000]",
  "bg-[#fbbc05]",
  "bg-[#00875a]",
];

function getServiceWhyChoose(service) {
  return {
    title: `Why Choose Our ${service.title}`,
    features: (service.whyChoose || []).map((item, index) => ({
      ...item,
      color: item.color || whyChooseColors[index % whyChooseColors.length],
      descHtml:
        typeof item.desc === "string"
          ? formatHtml(item.desc).__html
          : undefined,
    })),
  };
}

function getServiceProcess(service) {
  return {
    title: service.tab?.title || "",
    steps: (service.tab?.steps || []).map(
      ({ id, tab_name, heading, description }, index) => ({
        id,
        number: String(index + 1),
        label: tab_name,
        title: heading,
        descriptionHtml:
          typeof description === "string"
            ? formatHtml(description).__html
            : undefined,
        description,
      }),
    ),
  };
}

export default function SubServiceDetailPage({
  parent,
  service,
  serviceId,
  sub,
}) {
  const serviceFaqs = getServiceFaqs(service);
  const serviceWhyChoose = getServiceWhyChoose(service);
  const serviceProcess = getServiceProcess(service);

  return (
    <div className="bg-white text-gray-900">
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
                  <Link
                    href="/"
                    className="text-white transition-colors hover:text-[#d7e6ff]"
                  >
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
                    href={`/service/${serviceId}`}
                    className="text-white transition-colors hover:text-[#d7e6ff]"
                  >
                    {toTitleCase(parent.title || serviceId)}
                  </Link>
                </li>
                <li aria-hidden="true">{">"}</li>
                <li className="font-medium text-white">
                  {toTitleCase(service.title || sub)}
                </li>
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
        <div className="flex flex-col h-[50vh] gap-8 md:flex-row">
          <div className="flex-1 h-full overflow-y-auto pr-4 space-y-4 text-base leading-relaxed text-gray-700 md:text-lg">
            {(service.introParagraphs || []).map((paragraph, index) =>
              renderRichBlock(paragraph, index),
            )}
            {serviceId === "custom-website-design" && (
              <Link
                href={`/service/${serviceId}`}
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

      {serviceProcess.steps.length ? (
        <SEOProcess title={serviceProcess.title} steps={serviceProcess.steps} />
      ) : null}

      {serviceWhyChoose.features.length ? (
        <WhyChoose
          title={serviceWhyChoose.title}
          features={serviceWhyChoose.features}
          containerClassName="mx-auto w-full max-w-none px-4 sm:px-6 lg:px-10"
          gridClassName="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
        />
      ) : null}

      <ServiceFAQs faqs={serviceFaqs} title="Frequently Asked Questions" />
    </div>
  );
}
