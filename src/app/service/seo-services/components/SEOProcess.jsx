function getStepDescription(step) {
  return step?.description ?? step?.desc ?? step?.content ?? step?.text ?? "";
}

function renderStepDescription(step) {
  if (step?.descriptionHtml) {
    return (
      <p
        className="break-words text-sm leading-relaxed text-gray-700 [overflow-wrap:anywhere] sm:text-base"
        dangerouslySetInnerHTML={{ __html: step.descriptionHtml }}
      />
    );
  }

  return (
    <p className="break-words text-sm leading-relaxed text-gray-700 [overflow-wrap:anywhere] sm:text-base">
      {getStepDescription(step)}
    </p>
  );
}

function renderSectionDescription(description, descriptionHtml) {
  if (descriptionHtml) {
    return (
      <p
        className="mb-8 max-w-4xl break-words text-sm leading-relaxed text-white/90 [overflow-wrap:anywhere] sm:mb-10 sm:text-base lg:mb-14 lg:text-lg"
        dangerouslySetInnerHTML={{ __html: descriptionHtml }}
      />
    );
  }

  if (!description) {
    return null;
  }

  return (
    <p className="mb-8 max-w-4xl break-words text-sm leading-relaxed text-white/90 [overflow-wrap:anywhere] sm:mb-10 sm:text-base lg:mb-14 lg:text-lg">
      {description}
    </p>
  );
}

function getStepLabel(step) {
  return step?.label ?? step?.tabName ?? step?.tab_name ?? "";
}

const SEOProcess = ({
  title,
  description = "",
  descriptionHtml = "",
  steps = [],
  className = "",
  containerClassName = "mx-auto w-[92%] max-w-[1200px]",
}) => {
  const visibleSteps = (Array.isArray(steps) ? steps : []).filter(Boolean);

  if (!title && !visibleSteps.length) {
    return null;
  }

  return (
    <section
      className={`w-full overflow-x-clip bg-[#0B5FCC] py-12 sm:py-16 lg:py-20 ${className}`}
    >
      <div className={containerClassName}>
        {title ? (
          <h2 className="mb-4 break-words text-3xl font-semibold leading-tight text-white [overflow-wrap:anywhere] sm:mb-5 sm:text-4xl lg:mb-6 lg:text-5xl">
            {title}
          </h2>
        ) : null}

        {renderSectionDescription(description, descriptionHtml)}

        {visibleSteps.length ? (
          <div className="relative min-w-0">
            <div
              className="absolute bottom-0 left-[19px] top-0 w-[2px] bg-white/30 sm:left-[23px]"
              aria-hidden="true"
            />

            <div className="space-y-5 sm:space-y-7 lg:space-y-8">
              {visibleSteps.map((step, index) => (
                <div
                  key={`${step.id || step.title || "step"}-${index}`}
                  className="relative flex min-w-0 items-start gap-3 sm:gap-5 lg:gap-6"
                >
                  <div className="relative z-10 shrink-0">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border-[3px] border-[#0B5FCC] bg-white sm:h-12 sm:w-12 sm:border-4">
                      <span className="text-sm font-bold text-[#0B5FCC] sm:text-lg">
                        {step.number || index + 1}
                      </span>
                    </div>
                  </div>

                  <div className="min-w-0 flex-1 rounded-xl bg-white p-4 shadow-lg sm:rounded-2xl sm:p-6 lg:p-8">
                    {getStepLabel(step) ? (
                      <span className="mb-3 inline-flex max-w-full whitespace-normal break-words rounded-full bg-[#F4F6FF] px-3 py-1.5 text-left text-xs font-semibold leading-relaxed text-[#072d7f] [overflow-wrap:anywhere] sm:mb-4 sm:px-4 sm:py-2 sm:text-sm">
                        Step {step.number || index + 1}: {getStepLabel(step)}
                      </span>
                    ) : null}
                    {step.title ? (
                      <h3 className="mb-3 break-words text-lg font-bold leading-snug text-gray-900 [overflow-wrap:anywhere] sm:mb-4 sm:text-xl md:text-2xl">
                        {step.title}
                      </h3>
                    ) : null}
                    <div className="mb-3 h-0.5 w-full max-w-60 bg-gray-300 sm:mb-4" />
                    {renderStepDescription(step)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default SEOProcess;
