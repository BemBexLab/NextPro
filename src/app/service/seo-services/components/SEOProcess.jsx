function getStepDescription(step) {
  return step?.description ?? step?.desc ?? step?.content ?? step?.text ?? "";
}

function renderStepDescription(step) {
  if (step?.descriptionHtml) {
    return (
      <p
        className="text-sm leading-relaxed text-gray-700 md:text-base"
        dangerouslySetInnerHTML={{ __html: step.descriptionHtml }}
      />
    );
  }

  return (
    <p className="text-sm leading-relaxed text-gray-700 md:text-base">
      {getStepDescription(step)}
    </p>
  );
}

function getStepLabel(step) {
  return step?.label ?? step?.tabName ?? step?.tab_name ?? "";
}

const SEOProcess = ({
  title,
  steps = [],
  className = "",
  containerClassName = "mx-auto w-[92%] max-w-[1200px]",
}) => {
  if (!title && !steps.length) {
    return null;
  }

  return (
    <section className={`w-full bg-[#0B5FCC] py-20 ${className}`}>
      <div className={containerClassName}>
        {title ? (
          <h2 className="mb-16 text-[40px] font-semibold leading-snug text-white">
            {title}
          </h2>
        ) : null}

        <div className="relative">
          <div className="absolute bottom-0 left-[23px] top-0 w-[2px] bg-white/30"></div>

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div
                key={step.id || step.title || index}
                className="relative flex items-start gap-6"
              >
                <div className="relative z-10 flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-[#0B5FCC] bg-white">
                    <span className="text-lg font-bold text-[#0B5FCC]">
                      {step.number || index + 1}
                    </span>
                  </div>
                </div>

                <div className="flex-1 rounded-2xl bg-white p-8 shadow-lg">
                  {getStepLabel(step) ? (
                    <span className="mb-4 inline-flex rounded-full bg-[#F4F6FF] px-4 py-2 text-sm font-semibold text-[#072d7f]">
                      Step {step.number || index + 1}: {getStepLabel(step)}
                    </span>
                  ) : null}
                  <h3 className="mb-4 text-xl font-bold text-gray-900 md:text-2xl">
                    {step.title}
                  </h3>
                  <div className="mb-4 h-0.5 w-60 bg-gray-300"></div>
                  {renderStepDescription(step)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOProcess;
