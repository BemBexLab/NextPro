import FaqJsonLd from '@/components/seo/FaqJsonLd';

export default function FAQ() {
  // Embedded FAQs data
  const faqs = [
    {
      question: "What is included in your website design and development service?",
      answer: "We plan, design, and build websites around your goals. Projects can include page layouts, responsive development, content structure, forms, and the custom features agreed in the project scope.",
    },
    {
      question: "Can you build a new website or redesign my current one?",
      answer: "Yes. We can design and develop a new website or update an existing site with clearer page structure, refreshed visual design, and responsive layouts.",
    },
    {
      question: "Will my website work on phones and tablets?",
      answer: "Responsive layouts are part of our website design and development process. We check pages across common screen sizes so visitors can use the site on phones, tablets, and desktop computers.",
    },
    {
      question: "Can you add custom features to my website?",
      answer: "Yes. We can scope and build features such as custom forms, booking flows, payment steps, and other functionality that fits your website requirements."
    },
    {
      question: "Can you build an online store?",
      answer: "Yes. E-commerce websites are part of our website design and development work. We can plan product pages, shopping flows, and the store features defined for your project."
    },
    {
      question: "How long does a website project take?",
      answer: "The timeline depends on the number of pages, the features involved, and how quickly content and feedback are available. We agree on milestones and timing during project planning.",
    },
    {
      question: "Will I be able to update my website content?",
      answer: "We can build an agreed content management system into your website and show you how to make routine content updates after handoff.",
    }
  ];

  return (
    <section className="relative isolate w-full overflow-hidden bg-[#FAFBFE] py-16 md:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-full bg-no-repeat"
        style={{
          backgroundImage: "url('/Halloween%20Assets%20Task/image-33-bg-optimized.webp')",
          backgroundSize: "100% auto",
          backgroundPosition: "center bottom",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <FaqJsonLd faqs={faqs} />
        <div className="mb-12 text-center">
          <h2 className="text-3xl text-[#001F3F] font-bold md:text-4xl">
            Frequently Asked <span className="text-red-500">Questions</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group overflow-hidden rounded-xl border border-gray-200 bg-white"
              open={index === 0}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 text-left transition-colors hover:bg-gray-50">
                <span className="text-lg font-semibold">{faq.question}</span>
                <svg
                  className="shrink-0 transform transition-transform duration-200 group-open:rotate-180"
                  width={20}
                  height={20}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <div className="border-t border-gray-200 bg-white p-5 pt-3">
                <div className="text-gray-700">{faq.answer}</div>
              </div>
            </details>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="#request-audit"
            className="inline-block rounded-lg border-2 border-[#072d7f] px-6 py-3 font-semibold text-[#072d7f] transition-colors hover:bg-[#072d7f] hover:text-white"
          >
            Start Your Journey
          </a>
        </div>
      </div>
    </section>
  );
}
