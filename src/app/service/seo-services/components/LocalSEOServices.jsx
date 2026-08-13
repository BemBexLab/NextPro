import Image from "next/image";
import React from "react";

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
          <div className={`grid gap-4 sm:gap-6 ${gridClassName}`}>
            {services.map((service, index) => (
              <article
                key={service.id || service.title || index}
                className={`flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-5 transition-shadow duration-300 hover:shadow-lg sm:p-6 lg:p-8 ${service.className || ""}`}
              >
                {service.icon ? (
                  <div className="mb-4 flex min-h-14 items-center justify-center text-center sm:mb-6 sm:min-h-16">
                    <ServiceIcon icon={service.icon} title={service.title} />
                  </div>
                ) : null}

                {service.title ? (
                  <h3 className="mb-2 text-center text-lg font-medium leading-snug text-gray-900 sm:text-xl">
                    {service.title}
                  </h3>
                ) : null}

                {service.descriptionHtml ? (
                  <div
                    className="text-center text-sm leading-relaxed text-gray-600 sm:text-base"
                    dangerouslySetInnerHTML={{ __html: service.descriptionHtml }}
                  />
                ) : service.description ? (
                  <div className="text-center text-sm leading-relaxed text-gray-600 sm:text-base">
                    {service.description}
                  </div>
                ) : null}
              </article>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}
