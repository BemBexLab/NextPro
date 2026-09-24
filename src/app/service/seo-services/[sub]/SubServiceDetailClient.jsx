import Link from "next/link";
import SEOProcess from "../components/SEOProcess";
import WhyChoose from "../components/WhyChoose";
import ServiceFAQs from "../components/ServiceFAQs";
import ServiceHero from "../components/ServiceHero";
import ExpertsPage from "../components/ExpertsPage";
import OurPartners from "../components/OurPartners";
import LocalSEOServices from "../components/LocalSEOServices";
import AIDiscoveryChannels from "../components/AIDiscoveryChannels";
import SuccessStories from "../components/SuccessStories";
import SEOComparison from "../components/SEOComparison";
import Testimonials from "../components/Testimonials";
import RequestAFree from "../components/RequestAFree";

function toTitleCase(value) {
  if (!value) return "";

  return String(value)
    .split(" ")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

function getBreadcrumbLabel(service, sub) {
  if (service.breadcrumbLabel) {
    return service.breadcrumbLabel;
  }

  const preservedWords = {
    b2b: "B2B",
    ecommerce: "E-commerce",
    seo: "SEO",
    shopify: "Shopify",
    wordpress: "WordPress",
    woocommerce: "WooCommerce",
    bigcommerce: "BigCommerce",
    youtube: "YouTube",
  };

  return String(sub || service.id || "Service")
    .split(/[-_\s]+/)
    .filter(Boolean)
    .map((word) => preservedWords[word.toLowerCase()] || toTitleCase(word))
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
  const config = service.whyChooseData || {};
  const sourceFeatures = config.features || service.whyChoose || [];
  const features = sourceFeatures.map((item, index) => ({
    ...item,
    color: item.color || whyChooseColors[index % whyChooseColors.length],
    descHtml:
      item.descHtml ||
      (typeof item.desc === "string" ? formatHtml(item.desc).__html : undefined),
  }));

  return {
    title: config.title || `Why Choose Our ${service.title}`,
    description: config.description,
    descriptionHtml: config.descriptionHtml,
    paragraphs: config.paragraphs || [],
    footnote: config.footnote || null,
    features,
    className: config.className,
    containerClassName:
      config.containerClassName ||
      "mx-auto w-full max-w-none px-4 sm:px-6 lg:px-10",
    gridClassName:
      config.gridClassName ||
      "grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4",
    hasContent: Boolean(
      config.title ||
        config.description ||
        config.descriptionHtml ||
        config.paragraphs?.length ||
        config.footnote ||
        features.length,
    ),
  };
}

function getServiceProcess(service) {
  const description = service.tab?.description || "";

  return {
    title: service.tab?.title || "",
    description,
    descriptionHtml:
      typeof description === "string"
        ? formatHtml(description).__html
        : undefined,
    footnote: service.tab?.footnote || null,
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

function ServiceResults({ results }) {
  const stats = Array.isArray(results?.stats) ? results.stats.filter(Boolean) : [];

  if (!results?.title && !results?.description && !stats.length) {
    return null;
  }

  return (
    <section className="relative isolate w-full overflow-hidden bg-[#071f5c] py-14 sm:py-16 lg:py-20">
      <div
        className="pointer-events-none absolute -left-24 top-16 -z-10 h-72 w-72 rounded-full bg-[#2d8cff]/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-24 bottom-0 -z-10 h-80 w-80 rounded-full bg-[#ff8b6a]/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto w-[92%] max-w-[1400px]">
        {results.title ? (
          <div className="mx-auto mb-9 max-w-4xl text-center sm:mb-12">
            <span className="mb-3 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#b9d5ff] sm:text-sm">
              Results that move your business forward
            </span>
            <h2 className="text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl">
              {results.title}
            </h2>
          </div>
        ) : null}

        {results.description ? (
          <div className="mx-auto mb-8 max-w-6xl rounded-3xl bg-white p-4 shadow-2xl shadow-black/10 sm:mb-10 sm:p-6 lg:p-8">
            <div className="min-w-0 break-words text-gray-700 [overflow-wrap:anywhere] [&_li]:ml-5 [&_li]:pl-1 [&_p]:leading-relaxed [&_ul]:space-y-2">
              {results.description}
            </div>
          </div>
        ) : null}

        {stats.length ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <article
                key={`${stat.value || "stat"}-${index}`}
                className="rounded-2xl border border-white/15 bg-white/10 p-5 text-center backdrop-blur-sm transition-colors duration-300 hover:border-[#ffb199]/70 hover:bg-white/15 sm:p-6"
              >
                <p className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  {stat.value}
                </p>
                <div className="mt-2 text-sm leading-6 text-blue-100 sm:text-base">
                  {stat.label}
                </div>
              </article>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}

function getServiceHero(parent, service, serviceId, sub) {
  const introParagraphs = service.introParagraphs || [];
  const actions = service.hero?.actions ||
    service.actions || [
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
      { label: getBreadcrumbLabel(service, sub) },
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
  const serviceFaqTitle = service.faqTitle || "Frequently Asked Questions";
  const serviceWhyChoose = getServiceWhyChoose(service);
  const serviceProcess = getServiceProcess(service);
  const serviceHero = getServiceHero(parent, service, serviceId, sub);
  const requestAFreeData = service.requestAFreeData;

  return (
    <div className="bg-white text-gray-900">
      <ServiceHero
        image={{
          src: "/service-testing/Local-SEO-Agency-LocalMighty.webp",
          alt: "SEO services hero background",
        }}
        breadcrumbs={serviceHero.breadcrumbs}
        title={serviceHero.title}
        description={serviceHero.description}
        actions={serviceHero.actions}
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
          submitLabel: service.submitLabel || "Send",
        }}
      />

      <ExpertsPage {...(service.expertPage || {})} />

      <OurPartners />
      <LocalSEOServices {...(service.localSEOserviceData || {})} />
      <AIDiscoveryChannels {...(service.aiDiscoveryData || {})} />

      {serviceProcess.title ||
      serviceProcess.description ||
      serviceProcess.descriptionHtml ||
      serviceProcess.footnote ||
      serviceProcess.steps.length ? (
        <SEOProcess
          title={serviceProcess.title}
          description={serviceProcess.description}
          descriptionHtml={serviceProcess.descriptionHtml}
          steps={serviceProcess.steps}
          footnote={serviceProcess.footnote}
        />
      ) : null}

      <ServiceResults results={service.results} />

      <SuccessStories {...(service.successStoriesData || {})} />

      {serviceWhyChoose.hasContent ? (
        <WhyChoose {...serviceWhyChoose} />
      ) : null}

      <SEOComparison {...(service.seoComparisonData || {})} />

      {/* <Testimonials /> */}

      {requestAFreeData ? (
        <RequestAFree
          title={requestAFreeData.title}
          paragraphs={requestAFreeData.paragraphs}
          icon={requestAFreeData.icon}
          cta={requestAFreeData.cta}
        />
      ) : null}

      <ServiceFAQs faqs={serviceFaqs} title={serviceFaqTitle} />
    </div>
  );
}
