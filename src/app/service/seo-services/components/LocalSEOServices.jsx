import Image from "next/image";
import React from "react";

const serviceDescriptionClassName =
  "max-h-[15vh] min-w-0 overflow-y-auto overscroll-y-auto pr-1 text-center text-sm leading-relaxed text-gray-600 break-words [-ms-overflow-style:none] [scrollbar-width:none] sm:text-base [&::-webkit-scrollbar]:hidden [&_p+p]:mt-3 [&_ul]:mx-auto [&_ul]:mt-3 [&_ul]:w-fit [&_ul]:max-w-full [&_ul]:space-y-1 [&_ul]:pl-5 [&_ul]:text-left [&_ol]:mx-auto [&_ol]:mt-3 [&_ol]:w-fit [&_ol]:max-w-full [&_ol]:space-y-1 [&_ol]:pl-5 [&_ol]:text-left [&_li]:pl-1";
const serviceCarouselClassName =
  "flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-4 pt-1 [scrollbar-width:none] sm:gap-6 lg:grid lg:overflow-visible lg:py-0 [&::-webkit-scrollbar]:hidden";
const serviceSlideClassName =
  "min-w-0 flex-[0_0_85%] snap-start sm:basis-[47%] md:basis-[31%] lg:basis-auto lg:snap-none";

function ServiceIcon({ icon, title }) {
  if (!icon) {
    return null;
  }

  if (React.isValidElement(icon)) {
    return icon;
  }

  const image = typeof icon === "string" ? { src: icon } : icon;

  if (!image?.src) {
    return null;
  }

  return (
    <Image
      src={image.src}
      alt={image.alt || title || ""}
      width={image.width || 64}
      height={image.height || 64}
      sizes={image.sizes || "64px"}
      className={image.className || "mx-auto h-14 w-14 object-contain sm:h-16 sm:w-16"}
    />
  );
}

export default function LocalSEOServices({
  eyebrow = null,
  title = null,
  description = null,
  services = [],
  className = "",
  containerClassName = "mx-auto w-[92%] max-w-[1200px]",
  gridClassName = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
} = {}) {
  const hasHeader = Boolean(eyebrow || title || description);

  if (!hasHeader && !services.length) {
    return null;
  }

  return (
    <section className={`w-full bg-gray-50 py-12 sm:py-16 lg:py-20 ${className}`}>
      <div className={containerClassName}>
        {hasHeader ? (
          <div className={`mx-auto max-w-4xl text-center ${services.length ? "mb-8 sm:mb-10 lg:mb-12" : ""}`}>
            {eyebrow ? (
              <div className="mb-2 text-sm font-semibold text-gray-600 sm:mb-3 sm:text-base lg:text-lg">
                {eyebrow}
              </div>
            ) : null}

            {title ? (
              <h2 className="text-3xl font-medium leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                {title}
              </h2>
            ) : null}

            {description ? (
              <div className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-gray-600 sm:text-base lg:text-lg">
                {description}
              </div>
            ) : null}
          </div>
        ) : null}

        {services.length ? (
          <div className={`${serviceCarouselClassName} ${gridClassName}`}>
            {services.map((service, index) => (
              <div
                key={service.id || service.title || index}
                className={serviceSlideClassName}
              >
                <article
                  className={`flex h-full min-w-0 flex-col rounded-2xl border border-gray-200 bg-white p-5 transition-shadow duration-300 hover:shadow-lg sm:p-6 lg:p-8 ${service.className || ""}`}
                >
                  {service.icon ? (
                    <div className="mb-4 flex min-h-14 items-center justify-center text-center sm:mb-6 sm:min-h-16">
                      <ServiceIcon icon={service.icon} title={service.title} />
                    </div>
                  ) : null}

                  {service.title ? (
                    <h3 className="mb-2 flex text-center text-lg font-medium leading-snug text-gray-900 sm:min-h-14 sm:items-center sm:justify-center sm:text-xl">
                      {service.title}
                    </h3>
                  ) : null}

                  {service.descriptionHtml ? (
                    <div
                      className={serviceDescriptionClassName}
                      dangerouslySetInnerHTML={{ __html: service.descriptionHtml }}
                    />
                  ) : service.description ? (
                    <div className={serviceDescriptionClassName}>
                      {service.description}
                    </div>
                  ) : null}
                </article>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
