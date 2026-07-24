import FaqJsonLd from "@/components/seo/FaqJsonLd";

export default function ServiceFAQs() {
  const faqs = [
    {
      question: "Which industries do you serve?",
      answer: (
        <>
          We offer professional{" "}
          <a
            href="/service/seo-services/b2b-seo/"
            className="text-blue-800 font-bold hover:underline"
            rel="noopener noreferrer"
          >
            b2b seo services
          </a>{" "}
          and{" "}
          <a
            href="/service/seo-services/dental-seo/"
            className="text-blue-800 font-bold hover:underline"
            rel="noopener noreferrer"
          >
            dental seo services
          </a>{" "}
          for businesses in the{" "}
          <a
            href="/service/seo-services/healthcare-seo/"
            className="text-blue-800 hover:underline"
            rel="noopener noreferrer"
          >
            health
          </a>
          ,{" "}
          <a
            href="/service/seo-services/dental-seo/"
            className="text-blue-800 hover:underline"
            rel="noopener noreferrer"
          >
            dental
          </a>
          , law,{" "}
          <a
            href="/service/seo-services/b2b-seo/"
            className="text-blue-800 hover:underline"
            rel="noopener noreferrer"
          >
            B2B
          </a>
          ,{" "}
          <a
            href="/service/seo-services/ecommerce-seo/"
            className="text-blue-800 hover:underline"
            rel="noopener noreferrer"
          >
            eCommerce
          </a>
          ,{" "}
          <a
            href="/service/seo-services/shopify-seo/"
            className="text-blue-800 hover:underline"
            rel="noopener noreferrer"
          >
            shopify
          </a>
          ,{" "}
          <a
            href="/service/seo-services/wordpress-seo/"
            className="text-blue-800 hover:underline"
            rel="noopener noreferrer"
          >
            WordPress
          </a>
          ,{" "}
          <a
            href="/service/seo-services/hotel-seo/"
            className="text-blue-800 hover:underline"
            rel="noopener noreferrer"
          >
            hotels
          </a>
          ,{" "}
          <a
            href="/service/seo-services/automotive-seo/"
            className="text-blue-800 hover:underline"
            rel="noopener noreferrer"
          >
            automotive
          </a>
          ,{" "}
          <a
            href="/service/seo-services/construction-seo/"
            className="text-blue-800 hover:underline"
            rel="noopener noreferrer"
          >
            construction
          </a>
          , SaaS, and other areas.
        </>
      ),
    },
    {
      question: "How long before SEO shows results?",
      answer:
        "Most businesses get to see some kind of improvement in a few months, depending on how much competition there is and how healthy the website is.",
    },
    {
      question: "Do you offer services for small businesses?",
      answer: (
        <>
          That&apos;s right! Our <strong>small business seo services</strong> and{" "}
          <strong>affordable local seo service</strong> are all about providing you
          with effective solutions.
        </>
      ),
    },
    {
      question: "Can you optimize Shopify, WordPress, or WooCommerce websites?",
      answer: (
        <>
          Surely! Each platform&apos;s SEO services are personalized for Shopify,{" "}
          <a
            href="/service/seo-services/wordpress-seo/"
            className="text-blue-800 hover:underline"
            rel="noopener noreferrer"
          >
            WordPress
          </a>
          ,{" "}
          <a
            href="/service/seo-services/woocommerce-seo/"
            className="text-blue-800 hover:underline"
            rel="noopener noreferrer"
          >
            WooCommerce
          </a>
          , and{" "}
          <a
            href="/service/seo-services/bigcommerce-seo/"
            className="text-blue-800 hover:underline"
            rel="noopener noreferrer"
          >
            BigCommerce
          </a>
          .
        </>
      ),
    },
    {
      question: "Do you provide agency support?",
      answer:
        "Yes, the support that we offer to the agencies and partners comes in the form of white label SEO services, private label SEO services, and SEO consulting services for seamless collaboration with the agencies.",
    },
  ];

  return (
    <section className="mt-[130px] flex w-full flex-col items-center justify-center px-4 py-16">
      <FaqJsonLd faqs={faqs} />
      <div className="w-full max-w-5xl">
        <div className="mb-10">
          <h2 className="mb-4 flex justify-center text-center text-4xl font-medium text-[#0749A7] md:text-start">
            Your SEO Questions Answered
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group rounded-lg border border-slate-200 bg-slate-50 p-3.5"
              open={index === 0}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <span className="text-sm font-medium text-neutral-800">{faq.question}</span>
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
              <div className="mt-4 text-sm leading-relaxed text-neutral-600">{faq.answer}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
