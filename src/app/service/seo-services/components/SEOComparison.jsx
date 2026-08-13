function ComparisonList({ items = [], bullet }) {
  if (!items.length) {
    return null;
  }

  return (
    <ul className="space-y-2">
      {items.map((item, index) => {
        const itemData =
          item && typeof item === "object" && !Array.isArray(item) && "content" in item
            ? item
            : { content: item };

        return (
          <li
            key={itemData.id || index}
            className="flex items-start gap-2.5 sm:gap-3"
          >
            {itemData.bullet === false ? null : (
              <span
                className="mt-0.5 shrink-0 text-base font-bold text-green-400"
                aria-hidden="true"
              >
                {itemData.bullet || bullet}
              </span>
            )}
            <span className="text-sm leading-relaxed text-white/90 sm:text-base">
              {itemData.content}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

export default function SEOComparison({
  eyebrow = null,
  title = null,
  description = null,
  comparisons = [],
  bullet = "✓",
  className = "",
  containerClassName = "mx-auto w-[92%] max-w-[1400px]",
  gridClassName = "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
} = {}) {
  const visibleComparisons = comparisons.filter(
    (comparison) =>
      comparison &&
      (comparison.title || comparison.subtitle || comparison.sections?.length),
  );
  const hasHeader = Boolean(eyebrow || title || description);

  if (!hasHeader && !visibleComparisons.length) {
    return null;
  }

  return (
    <section className={`w-full bg-[#0B5FCC] py-12 sm:py-16 lg:py-20 ${className}`}>
      <div className={containerClassName}>
        {hasHeader ? (
          <div
            className={`mx-auto max-w-5xl text-center ${
              visibleComparisons.length ? "mb-8 sm:mb-10 lg:mb-12" : ""
            }`}
          >
            {eyebrow ? (
              <div className="mb-3 text-sm font-semibold text-white/80 sm:text-base lg:text-lg">
                {eyebrow}
              </div>
            ) : null}

            {title ? (
              <h2 className="text-3xl font-medium leading-tight text-white sm:text-4xl lg:text-5xl">
                {title}
              </h2>
            ) : null}

            {description ? (
              <div className="mx-auto mt-4 text-sm leading-relaxed text-white/90 sm:text-base lg:text-lg">
                {description}
              </div>
            ) : null}
          </div>
        ) : null}

        {visibleComparisons.length ? (
          <div className={`grid items-stretch gap-4 sm:gap-6 ${gridClassName}`}>
            {visibleComparisons.map((comparison, index) => {
              const visibleSections = (comparison.sections || []).filter(
                (section) => section && (section.title || section.items?.length),
              );

              return (
                <article
                  key={comparison.id || comparison.title || index}
                  className={`flex h-full flex-col rounded-2xl bg-[#1a3a5c] p-5 text-white sm:p-6 lg:p-8 ${comparison.className || ""}`}
                >
                  {comparison.title || comparison.subtitle ? (
                    <header className={visibleSections.length ? "mb-6 sm:mb-8" : ""}>
                      {comparison.title ? (
                        <h3 className="text-center text-2xl font-medium leading-tight sm:text-3xl lg:text-4xl">
                          {comparison.title}
                        </h3>
                      ) : null}

                      {comparison.subtitle ? (
                        <div className="mx-auto mt-3 max-w-md text-center text-sm font-semibold leading-relaxed text-white/90 sm:text-base">
                          {comparison.subtitle}
                        </div>
                      ) : null}

                      <div className="mx-auto mt-4 h-0.5 w-12 bg-white" />
                    </header>
                  ) : null}

                  {visibleSections.length ? (
                    <div className="flex flex-1 flex-col gap-7 sm:gap-8">
                      {visibleSections.map((section, sectionIndex) => (
                        <section
                          key={section.id || section.title || sectionIndex}
                          className={section.className || ""}
                        >
                          {section.title ? (
                            <h4 className="mb-3 text-lg font-bold sm:mb-4 sm:text-xl">
                              {section.title}
                            </h4>
                          ) : null}
                          <ComparisonList
                            items={section.items}
                            bullet={section.bullet || comparison.bullet || bullet}
                          />
                        </section>
                      ))}
                    </div>
                  ) : null}
                </article>
              );
            })}
          </div>
        ) : null}
      </div>
    </section>
  );
}
