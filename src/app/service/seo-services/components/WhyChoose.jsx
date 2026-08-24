function renderParagraph(paragraph, index) {
  if (typeof paragraph === "string") {
    return <p key={index}>{paragraph}</p>;
  }

  return <p key={index}>{paragraph}</p>;
}

function getFeatureDescription(item) {
  return item.description ?? item.desc ?? "";
}

const featureDescriptionClassName =
  "mt-2 max-h-[15vh] min-w-0 overflow-y-auto pr-1 text-sm leading-relaxed text-gray-700 break-words [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden [&_ul]:mt-2 [&_ul]:pl-5 [&_ul]:text-left [&_li]:pl-1";

function renderFeatureDescription(item) {
  const description = getFeatureDescription(item);

  if (item.descHtml) {
    return (
      <div
        className={featureDescriptionClassName}
        dangerouslySetInnerHTML={{ __html: item.descHtml }}
      />
    );
  }

  if (!description) {
    return null;
  }

  return (
    <div className={featureDescriptionClassName}>
      {description}
    </div>
  );
}

function getLastRowStartClass(featureCount, index) {
  const remainder = featureCount % 4;
  const lastRowStart = featureCount - remainder;

  if (!remainder || index !== lastRowStart) {
    return "";
  }

  if (remainder === 1) {
    return "lg:col-start-4";
  }

  if (remainder === 2) {
    return "lg:col-start-3";
  }

  return "lg:col-start-2";
}

const featureCarouselClassName =
  "flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 pt-1 [scrollbar-width:none] sm:gap-5 lg:!grid lg:overflow-visible lg:py-0 [&::-webkit-scrollbar]:hidden";
const featureSlideClassName =
  "min-w-0 flex-[0_0_85%] snap-start sm:basis-[47%] md:basis-[31%] lg:basis-auto lg:snap-none";

const WhyChoose = ({
  title,
  paragraphs = [],
  footnote = null,
  features = [],
  className = "",
  containerClassName = "mx-auto w-[92%] max-w-[1400px]",
  gridClassName = "grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-6",
}) => {
  if (!title && !paragraphs.length && !features.length) {
    return null;
  }

  const responsiveGridClassName = gridClassName
    .split(/\s+/)
    .filter((utilityClass) => utilityClass !== "grid" && utilityClass !== "flex")
    .join(" ");

  return (
    <section className={`w-full bg-white py-10 ${className}`}>
      <div className={containerClassName}>
        {title ? (
          <div className="mb-5 text-center">
            <h2 className="text-4xl font-medium text-[#0749A7]">{title}</h2>
          </div>
        ) : null}

        {paragraphs.length ? (
          <div className="mx-auto mb-7 max-w-7xl">
            <div className="space-y-6 text-center text-[16px] leading-relaxed text-gray-700">
              {paragraphs.map((paragraph, index) => renderParagraph(paragraph, index))}
            </div>
          </div>
        ) : null}

        {features.length ? (
          <div
            className={`${featureCarouselClassName} ${responsiveGridClassName} lg:!grid-cols-8`}
          >
            {features.map((item, index) => (
              <div
                key={item.id || item.text || index}
                className={`${featureSlideClassName} lg:col-span-2 ${getLastRowStartClass(features.length, index)}`}
              >
                <article className="flex h-full min-w-0 items-start rounded-lg border border-gray-50 bg-[#F8F9FA] p-6 shadow-sm">
                  <div
                    className={`mr-4 h-full min-h-[60px] w-1 shrink-0 ${item.color || "bg-[#0052cc]"}`}
                  />

                  {item.title ? (
                    <div className="min-w-0 self-center">
                      <h3 className="break-words text-lg font-semibold text-[#072d7f]">
                        {item.title}
                      </h3>
                      {renderFeatureDescription(item)}
                    </div>
                  ) : (
                    <p className="min-w-0 self-center break-words text-sm font-normal leading-snug text-[#3c4043]">
                      {item.text}
                    </p>
                  )}
                </article>
              </div>
            ))}
          </div>
        ) : null}
        {footnote ? (
          <p className="mt-6 text-center text-sm leading-relaxed text-gray-700 sm:text-base">
            {footnote}
          </p>
        ) : null}
      </div>
    </section>
  );
};

export default WhyChoose;
