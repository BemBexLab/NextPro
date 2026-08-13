import FaqJsonLd from "@/components/seo/FaqJsonLd";

function getFaqQuestion(faq) {
  return faq?.question ?? faq?.q ?? faq?.name ?? "";
}

function getFaqAnswer(faq) {
  return faq?.answer ?? faq?.ans ?? faq?.a ?? faq?.text ?? faq?.answerHtml ?? "";
}

function renderFaqAnswer(faq) {
  const answer = getFaqAnswer(faq);

  if (faq?.answerHtml) {
    return <span dangerouslySetInnerHTML={{ __html: faq.answerHtml }} />;
  }

  return answer;
}

export default function ServiceFAQs({
  faqs = [],
  title = "Your SEO Questions Answered",
  includeSchema = true,
  defaultOpenIndex = 0,
  className = "",
}) {
  if (!faqs.length) {
    return null;
  }

  const schemaFaqs = faqs.map((faq) => ({
    ...faq,
    question: getFaqQuestion(faq),
    answer: getFaqAnswer(faq),
  }));

  return (
    <section
      className={` flex w-full flex-col items-center justify-center px-4 pt-10 pb-16 ${className}`}
    >
      {includeSchema ? <FaqJsonLd faqs={schemaFaqs} /> : null}
      <div className="w-full max-w-5xl">
        {title ? (
          <div className="mb-10">
            <h2 className="mb-4 flex justify-center text-center text-4xl font-medium text-[#0749A7] md:text-start">
              {title}
            </h2>
          </div>
        ) : null}

        <div className="grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2">
          {faqs.map((faq, index) => (
            <details
              key={faq?.id || getFaqQuestion(faq) || index}
              className="group rounded-lg border border-slate-200 bg-slate-50 p-3.5"
              open={index === defaultOpenIndex}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <span className="text-sm font-medium text-neutral-800">
                  {getFaqQuestion(faq)}
                </span>
                <div className="rounded p-1 text-slate-400 transition-colors group-hover:bg-slate-200 group-hover:text-slate-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform duration-200 group-open:rotate-45"
                  >
                    <path d="M5 12h14" />
                    <path d="M12 5v14" />
                  </svg>
                </div>
              </summary>
              <div className="mt-4 text-sm leading-relaxed text-neutral-600">
                {renderFaqAnswer(faq)}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
