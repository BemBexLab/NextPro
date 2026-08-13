import Image from "next/image";
import Link from "next/link";

function SectionIntro({
  title,
  description,
  className = "",
  titleClassName = "",
  descriptionClassName = "",
}) {
  if (!title && !description) {
    return null;
  }

  return (
    <div className={`mx-auto w-full text-center ${className}`}>
      {title ? (
        <h2
          className={`mx-auto max-w-[1400px] text-balance text-3xl font-medium leading-[1.08] text-[#0b63b8] sm:text-4xl lg:text-[clamp(2.5rem,3vw,3rem)] ${titleClassName}`}
        >
          {title}
        </h2>
      ) : null}
      {description ? (
        <div
          className={`mx-auto mt-4 w-full max-w-[960px] text-pretty text-sm leading-relaxed text-gray-600 sm:text-base sm:leading-7 lg:text-lg [&_ul]:mx-auto [&_ul]:w-fit [&_ul]:max-w-full [&_ul]:text-left ${descriptionClassName}`}
        >
          {description}
        </div>
      ) : null}
    </div>
  );
}

function ExpertCard({ expert }) {
  const image =
    typeof expert.image === "string"
      ? { src: expert.image }
      : expert.image ||
        (expert.src
          ? {
              src: expert.src,
              alt: expert.alt,
              width: expert.width,
              height: expert.height,
              sizes: expert.sizes,
              className: expert.imageClassName,
            }
          : null);

  return (
    <article
      className={`flex h-full flex-col items-center rounded-2xl border border-gray-200 bg-white p-5 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-6 ${expert.className || ""}`}
    >
      {image?.src ? (
        <div className="relative mb-4 h-20 w-20 overflow-hidden rounded-full bg-gray-100 sm:h-24 sm:w-24">
          <Image
            src={image.src}
            alt={image.alt || expert.name || expert.title || ""}
            fill
            sizes={image.sizes || "96px"}
            className={image.className || "object-cover"}
          />
        </div>
      ) : null}

      {expert.name || expert.title ? (
        <h3 className="text-lg font-semibold leading-snug text-gray-900 sm:text-xl">
          {expert.name || expert.title}
        </h3>
      ) : null}

      {expert.role ? (
        <p className="mt-1 text-sm font-medium text-[#0b63b8] sm:text-base">
          {expert.role}
        </p>
      ) : null}

      {expert.description ? (
        <div className="mt-3 text-sm leading-relaxed text-gray-600 sm:text-base">
          {expert.description}
        </div>
      ) : null}
    </article>
  );
}

function RelatedServiceCard({ service, exploreLabel }) {
  const Icon = service.icon;
  const titleParts = String(service.title || "").split(" ");
  const hasHref = Boolean(service.href?.trim?.());
  const CardWrapper = hasHref ? Link : "article";
  const cardProps = hasHref ? { href: service.href } : {};

  return (
    <CardWrapper
      {...cardProps}
      className="group flex h-full flex-col rounded-2xl bg-[#072d7f] p-5 text-white transition-transform duration-300 hover:-translate-y-1 sm:rounded-[30px] sm:p-6 lg:p-8"
    >
      {Icon || service.image?.src ? (
        <div className="mb-4 flex h-14 w-14 shrink-0 items-center justify-center rounded-[18px] border border-transparent bg-white/10 transition-colors duration-300 group-hover:border-[#DE2F04] sm:mb-6 sm:h-16 sm:w-16 sm:rounded-[20px]">
          {Icon ? (
            <Icon className="h-6 w-6 text-[#f84318] sm:h-8 sm:w-8" />
          ) : (
            <Image
              src={service.image.src}
              alt={service.image.alt || service.title || ""}
              width={32}
              height={32}
              sizes="32px"
              className="h-6 w-6 object-contain sm:h-8 sm:w-8"
            />
          )}
        </div>
      ) : null}

      {service.title ? (
        <h3 className="mb-2 text-lg font-semibold text-white sm:mb-3 sm:text-xl">
          <span className="bg-gradient-to-r from-[#ffb199] to-white bg-clip-text text-transparent">
            {titleParts[0]}
          </span>
          {titleParts.length > 1 ? ` ${titleParts.slice(1).join(" ")}` : null}
        </h3>
      ) : null}

      {service.descriptionHtml ? (
        <p
          className="mb-5 text-sm leading-relaxed text-white/90"
          dangerouslySetInnerHTML={{ __html: service.descriptionHtml }}
        />
      ) : service.description ? (
        <div className="mb-5 text-sm leading-relaxed text-white/90">
          {service.description}
        </div>
      ) : null}

      {hasHref && exploreLabel ? (
        <span className="mt-auto inline-flex items-center font-semibold text-white">
          {exploreLabel} <span className="ml-2" aria-hidden="true">&rarr;</span>
        </span>
      ) : null}
    </CardWrapper>
  );
}

export default function ExpertsPage({
  intro = null,
  experts = [],
  certifications = [],
  relatedServices = null,
  results = null,
  className = "",
  containerClassName = "mx-auto w-[92%] max-w-[1400px]",
} = {}) {
  const visibleExperts = (Array.isArray(experts) ? experts : []).filter(
    (expert) =>
      expert &&
      (expert.image ||
        expert.src ||
        expert.name ||
        expert.title ||
        expert.role ||
        expert.description),
  );
  const visibleCertifications = (
    Array.isArray(certifications) ? certifications : []
  ).filter((certification) => certification?.src);
  const showIntro = Boolean(intro?.title || intro?.description);
  const showExperts = visibleExperts.length > 0;
  const showCertifications = visibleCertifications.length > 0;
  const showRelatedServices = Boolean(
    relatedServices?.title ||
      relatedServices?.description ||
      relatedServices?.items?.length,
  );
  const showResults = Boolean(
    results?.title || results?.description || results?.stats?.length,
  );

  if (
    !showIntro &&
    !showExperts &&
    !showCertifications &&
    !showRelatedServices &&
    !showResults
  ) {
    return null;
  }

  return (
    <section
      className={`experts-page w-full overflow-x-clip bg-white py-12 sm:py-16 lg:py-20 ${className}`}
    >
      <style>{`
        .experts-page .experts-benefits-shell {
          display: flex;
          width: 100%;
          min-width: 0;
          max-width: 100%;
          justify-content: center;
        }

        .experts-page .experts-benefits-carousel {
          display: flex;
          width: 100%;
          min-width: 0;
          max-width: 900px;
          box-sizing: border-box;
          gap: 1rem;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          scroll-padding-inline: 9%;
          scrollbar-width: none;
        }

        .experts-page .experts-benefits-carousel::-webkit-scrollbar {
          display: none;
        }

        .experts-page .experts-benefit-card {
          flex: 0 0 82%;
          scroll-snap-align: center;
        }

        .experts-page .experts-benefit-card:first-child {
          margin-left: 9%;
        }

        .experts-page .experts-benefit-card:last-child {
          margin-right: 9%;
        }

        @media (min-width: 1024px) {
          .experts-page .experts-benefits-carousel {
            display: grid;
            width: 100%;
            max-width: 900px;
            grid-template-columns: repeat(3, minmax(0, 1fr));
            overflow: visible;
            scroll-padding-inline: 0;
          }

          .experts-page .experts-benefit-card {
            width: auto;
            min-width: 0;
            max-width: 100%;
            flex-basis: auto;
          }

          .experts-page .experts-benefit-card:first-child,
          .experts-page .experts-benefit-card:last-child {
            margin-inline: 0;
          }
        }
      `}</style>
      {showIntro || showExperts || showCertifications ? (
        <div className={containerClassName}>
          {showIntro ? (
            <SectionIntro
              title={intro.title}
              description={intro.description}
              titleClassName={intro.titleClassName}
              descriptionClassName={intro.descriptionClassName}
              className={
                showExperts || showCertifications
                  ? "mb-8 sm:mb-10 lg:mb-12"
                  : ""
              }
            />
          ) : null}

          {showExperts ? (
            <div
              className={`grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 ${
                visibleExperts.length >= 4
                  ? "lg:grid-cols-4"
                  : visibleExperts.length === 3
                    ? "lg:grid-cols-3"
                    : visibleExperts.length === 2
                      ? "lg:grid-cols-2"
                      : "mx-auto max-w-sm"
              } ${showCertifications ? "mb-8 sm:mb-10 lg:mb-12" : ""}`}
            >
              {visibleExperts.map((expert, index) => (
                <ExpertCard
                  key={expert.id || expert.name || expert.title || index}
                  expert={expert}
                />
              ))}
            </div>
          ) : null}

          {showCertifications ? (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
              {visibleCertifications.map((certification, index) => (
                <div
                  key={certification.id || certification.src || index}
                  className="flex min-h-28 items-center justify-center rounded-2xl border border-gray-200 bg-white p-5 sm:min-h-[120px] sm:p-6 lg:p-8"
                >
                  <Image
                    src={certification.src}
                    alt={certification.alt || ""}
                    width={certification.width || 220}
                    height={certification.height || 80}
                    sizes={
                      certification.sizes ||
                      "(min-width: 1024px) 220px, (min-width: 640px) 45vw, 88vw"
                    }
                    className={
                      certification.className ||
                      "h-14 w-auto max-w-full object-contain sm:h-16 lg:h-20"
                    }
                  />
                </div>
              ))}
            </div>
          ) : null}
        </div>
      ) : null}

      {showRelatedServices ? (
        <div className="mx-auto mt-14 w-[92%] max-w-7xl sm:mt-16 lg:mt-20">
          <SectionIntro
            title={relatedServices.title}
            description={relatedServices.description}
            className={relatedServices.items?.length ? "mb-8 sm:mb-12 lg:mb-16" : ""}
          />

          {relatedServices.items?.length ? (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
              {relatedServices.items.map((service, index) => (
                <RelatedServiceCard
                  key={service.id || service.href || index}
                  service={service}
                  exploreLabel={relatedServices.exploreLabel}
                />
              ))}
            </div>
          ) : null}
        </div>
      ) : null}

      {showResults ? (
        <div className="mx-auto mt-14 w-[92%] max-w-[1200px] sm:mt-16 lg:mt-24">
          <div
            className={`grid grid-cols-1 items-start gap-8 sm:gap-10 lg:gap-12 ${
              results.stats?.length ? "lg:grid-cols-2" : ""
            }`}
          >
            {results.title || results.description ? (
              <div>
                {results.title ? (
                  <h2 className="mb-4 text-3xl font-normal leading-tight text-gray-900 sm:text-4xl lg:mb-6 lg:text-5xl">
                    {results.title}
                  </h2>
                ) : null}
                {results.description ? (
                  <div className="text-base leading-relaxed text-gray-600 sm:text-lg">
                    {results.description}
                  </div>
                ) : null}
              </div>
            ) : null}

            {results.stats?.length ? (
              <div className="grid grid-cols-1 gap-4 min-[480px]:grid-cols-2 sm:gap-6">
                {results.stats.map((stat, index) => (
                  <div
                    key={stat.id || `${stat.label}-${stat.value}-${index}`}
                    className="rounded-lg border border-gray-200 bg-gray-50 p-5 sm:p-6 lg:p-8"
                  >
                    {stat.label ? (
                      <div className="mb-4 text-center font-semibold text-gray-800">
                        {stat.label}
                      </div>
                    ) : null}
                    <div className="mx-auto mb-5 h-1 w-20 bg-gradient-to-r from-purple-600 to-red-600 sm:mb-6 sm:w-24" />
                    {stat.value ? (
                      <p className="break-words text-center text-4xl font-bold text-[#0b63b8] sm:text-5xl">
                        {stat.value}
                      </p>
                    ) : null}
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      ) : null}
    </section>
  );
}
