function renderParagraph(paragraph, index) {
  if (typeof paragraph === "string") {
    return <p key={index}>{paragraph}</p>;
  }

  return <p key={index}>{paragraph}</p>;
}

function getFeatureDescription(item) {
  return item.description ?? item.desc ?? "";
}

function renderFeatureDescription(item) {
  const description = getFeatureDescription(item);

  if (item.descHtml) {
    return (
      <p
        className="mt-2 text-sm leading-relaxed text-gray-700"
        dangerouslySetInnerHTML={{ __html: item.descHtml }}
      />
    );
  }

  if (!description) {
    return null;
  }

  return (
    <p className="mt-2 text-sm leading-relaxed text-gray-700">
      {description}
    </p>
  );
}

const WhyChoose = ({
  title,
  paragraphs = [],
  features = [],
  className = "",
  containerClassName = "mx-auto w-[92%] max-w-[1400px]",
  gridClassName = "grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-6",
}) => {
  if (!title && !paragraphs.length && !features.length) {
    return null;
  }

  return (
    <section className={`w-full bg-white py-10 ${className}`}>
      <div className={containerClassName}>
        {title ? (
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-medium text-[#0749A7]">{title}</h2>
          </div>
        ) : null}

        {paragraphs.length ? (
          <div className="mx-auto mb-16 max-w-7xl">
            <div className="space-y-6 text-center text-[16px] leading-relaxed text-gray-700">
              {paragraphs.map((paragraph, index) => renderParagraph(paragraph, index))}
            </div>
          </div>
        ) : null}

        {features.length ? (
          <div className={gridClassName}>
            {features.map((item, index) => (
              <div
                key={item.id || item.text || index}
                className="flex h-full items-start rounded-lg border border-gray-50 bg-[#F8F9FA] p-6 shadow-sm"
              >
                <div
                  className={`mr-4 h-full min-h-[60px] w-1 shrink-0 ${item.color || "bg-[#0052cc]"}`}
                />

                {item.title ? (
                  <div className="self-center">
                    <h3 className="text-lg font-semibold text-[#072d7f]">
                      {item.title}
                    </h3>
                    {renderFeatureDescription(item)}
                  </div>
                ) : (
                  <p className="self-center text-sm font-normal leading-snug text-[#3c4043]">
                    {item.text}
                  </p>
                )}
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
};

export default WhyChoose;
