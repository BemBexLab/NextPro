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
    return <div dangerouslySetInnerHTML={{ __html: faq.answerHtml }} />;
  }

  return answer;
}

function FaqItem({ faq, index, defaultOpenIndex }) {
  return (
    <details
      className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 open:border-[#0b63b8]/30 open:shadow-md"
      open={index === defaultOpenIndex}
    >
      <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 marker:content-none sm:min-h-[72px] sm:px-6 [&::-webkit-details-marker]:hidden">
        <span className="text-sm font-semibold leading-snug text-slate-900 transition-colors group-hover:text-[#0b63b8] sm:text-base">
          {getFaqQuestion(faq)}
        </span>
        <span
          aria-hidden="true"
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-500 transition-all duration-300 group-hover:border-[#0b63b8]/30 group-hover:bg-blue-50 group-hover:text-[#0b63b8] group-open:rotate-45 group-open:border-[#0b63b8]/30 group-open:bg-blue-50 group-open:text-[#0b63b8]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="M12 5v14" />
          </svg>
        </span>
      </summary>
      <div className="border-t border-slate-100 px-5 pb-5 pt-4 text-sm leading-7 text-slate-600 sm:px-6 sm:pb-6 sm:text-base [&_a]:font-medium [&_a]:text-[#0b63b8] [&_a]:underline-offset-2 hover:[&_a]:underline [&_ol]:mt-3 [&_ol]:list-decimal [&_ol]:space-y-1 [&_ol]:pl-5 [&_p+p]:mt-3 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-5">
        {renderFaqAnswer(faq)}
      </div>
    </details>
  );
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
  const columnBreak = Math.ceil(faqs.length / 2);
  const faqColumns = [faqs.slice(0, columnBreak), faqs.slice(columnBreak)];

  return (
    <section
      className={`w-full bg-white px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20 ${className}`}
    >
      {includeSchema ? <FaqJsonLd faqs={schemaFaqs} /> : null}
      <div className="mx-auto w-full max-w-6xl">
        {title ? (
          <div className="mx-auto mb-10 max-w-4xl text-center sm:mb-12 lg:mb-14">
            <h2 className="text-balance text-3xl font-medium leading-tight text-[#0749A7] sm:text-4xl lg:text-5xl">
              {title}
            </h2>
          </div>
        ) : null}

        <div className="grid grid-cols-1 items-start gap-4 md:grid-cols-2 md:gap-6 lg:gap-8">
          {faqColumns.map((column, columnIndex) => (
            <div
              key={columnIndex}
              className="flex min-w-0 flex-col gap-4"
            >
              {column.map((faq, itemIndex) => {
                const index = columnIndex === 0
                  ? itemIndex
                  : columnBreak + itemIndex;

                return (
                  <FaqItem
                    key={faq?.id || getFaqQuestion(faq) || index}
                    faq={faq}
                    index={index}
                    defaultOpenIndex={defaultOpenIndex}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
