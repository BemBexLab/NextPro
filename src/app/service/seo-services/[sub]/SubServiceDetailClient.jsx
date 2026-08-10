import Link from "next/link";
import SEOProcess from "../components/SEOProcess";
import WhyChoose from "../components/WhyChoose";
import ServiceFAQs from "../components/ServiceFAQs";
import SubServiceHero from "../components/SubServiceHero";

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
  const description = service.tab?.description || "";

  return {
    title: service.tab?.title || "",
    description,
    descriptionHtml:
      typeof description === "string" ? formatHtml(description).__html : undefined,
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

function getServiceHero(parent, service, serviceId, sub) {
  const introParagraphs = service.introParagraphs || [];
  const actions = service.hero?.actions || service.actions || [
    { label: "Contact Us", href: "/contact-us" },
    { label: "About Us", href: "/about-us", variant: "secondary" },
  ];
  const description = (
    <div className="max-h-[45vh] w-full max-w-full space-y-4 overflow-y-auto pr-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
      {introParagraphs.length
        ? introParagraphs.map((paragraph, index) =>
            renderRichBlock(paragraph, index),
          )
        : renderRichBlock(service.hero?.paragraph || service.desc, 0)}
      {serviceId === "custom-website-design" && (
        <Link
          href={`/service/${serviceId}`}
          className="mt-4 inline-block rounded-lg border border-white bg-white px-3 py-2 text-[#0b63b8] transition-colors hover:bg-transparent hover:text-white"
        >
          Custom Website Design Services
        </Link>
      )}
    </div>
  );

  return {
    title: service.title || toTitleCase(sub),
    description,
    imageSrc: service.hero?.image,
    imageAlt: `${service.title || toTitleCase(sub)} hero background`,
    breadcrumbs: [
      { label: "Home", href: "/" },
      { label: "Service", href: "/service" },
      {
        label: toTitleCase(parent.title || serviceId),
        href: `/service/${serviceId}`,
      },
      { label: toTitleCase(service.title || sub) },
    ],
    actions,
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
  const serviceHero = getServiceHero(parent, service, serviceId, sub);

  return (
    <div className="bg-white text-gray-900">
      <SubServiceHero
        title={serviceHero.title}
        description={serviceHero.description}
        imageSrc={serviceHero.imageSrc}
        imageAlt={serviceHero.imageAlt}
        breadcrumbs={serviceHero.breadcrumbs}
        actions={serviceHero.actions}
        containerClassName="relative mx-auto grid w-full grid-cols-12 items-start gap-8 px-4 sm:px-6 lg:px-10"
      />

      {serviceProcess.steps.length ? (
        <SEOProcess
          title={serviceProcess.title}
          description={serviceProcess.description}
          descriptionHtml={serviceProcess.descriptionHtml}
          steps={serviceProcess.steps}
        />
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
