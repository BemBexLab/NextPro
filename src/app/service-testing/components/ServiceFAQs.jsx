"use client";

import React from "react";

const ServiceFAQs = () => {
  const [openIndex, setOpenIndex] = React.useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const faqs = [
    {
      question: "Which industries do you serve?",
      answer: (
        <>
          We offer professional{" "}
          <a
            href="/service/seo-services/b2b-seo/"
            className="hover:text-blue-800 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            b2b seo services
          </a>{" "}
          and{" "}
          <a
            href="/service/seo-services/dental-seo/"
            className="hover:text-blue-800 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            dental seo services
          </a>{" "}
          for businesses in the{" "}
          <a
            href="/service/seo-services/healthcare-seo/"
            className="hover:text-blue-800 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            health
          </a>
          ,{" "}
          <a
            href="/service/seo-services/dental-seo/"
            className="hover:text-blue-800 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            dental
          </a>
          , law,{" "}
          <a
            href="/service/seo-services/b2b-seo/"
            className="hover:text-blue-800 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            B2B
          </a>
          ,{" "}
          <a
            href="/service/seo-services/ecommerce-seo/"
            className="hover:text-blue-800 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            eCommerce
          </a>
          ,{" "}
          <a
            href="/service/seo-services/shopify-seo/"
            className="hover:text-blue-800 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            shopify
          </a>
          ,{" "}
          <a
            href="/service/seo-services/wordpress-seo/"
            className="hover:text-blue-800 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            WordPress
          </a>
          ,{" "}
          <a
            href="/service/seo-services/hotel-seo/"
            className="hover:text-blue-800 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            hotels
          </a>
          ,{" "}
          <a
            href="/service/seo-services/automotive-seo/"
            className="hover:text-blue-800 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            automotive
          </a>
          ,{" "}
          <a
            href="/service/seo-services/construction-seo/"
            className="hover:text-blue-800 hover:underline"
            target="_blank"
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
      answer:
        "That's right! Our small business seo services and affordable local seo service are all about providing you with effective solutions.",
    },
    {
      question: "Can you optimize Shopify, WordPress, or WooCommerce websites?",
      answer: (
        <>
          Surely! Each platform's SEO services are personalized for Shopify,{" "}
          <a
            href="/service/seo-services/wordpress-seo/"
            className="hover:text-blue-800 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            WordPress
          </a>
          ,{" "}
          <a
            href="/service/seo-services/woocommerce-seo/"
            className="hover:text-blue-800 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            WooCommerce
          </a>
          , and{" "}
          <a
            href="/service/seo-services/bigcommerce-seo/"
            className="hover:text-blue-800 hover:underline"
            target="_blank"
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
    <section>
      <style>
        {`
                    @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap");
                    * {
                        font-family: "Poppins", sans-serif;
                    }
                `}
      </style>

      <section className="w-full flex flex-col items-center justify-center py-16 px-4">
        <div className="w-full max-w-5xl">
          <div className="mb-10">
            <h2 className="text-4xl flex justify-center font-medium text-[#0749A7] text-center md:text-start mb-4">
              Your Local SEO Questions Answered
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                onClick={() => toggleFAQ(index)}
                className={`bg-slate-50 p-3.5 rounded-lg cursor-pointer transition-all duration-300 border border-slate-200 hover:bg-slate-100 ${openIndex === index ? "row-span-2" : ""}`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-neutral-800">
                    {faq.question}
                  </span>
                  <div
                    className={`text-slate-400 p-1 rounded transition-colors ${openIndex === index ? "bg-slate-200 text-slate-500" : "hover:bg-slate-300 hover:text-slate-500"}`}
                  >
                    {openIndex === index ? (
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
                        className="lucide lucide-minus"
                      >
                        <path d="M5 12h14" />
                      </svg>
                    ) : (
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
                        className="lucide lucide-plus"
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5v14" />
                      </svg>
                    )}
                  </div>
                </div>
                <div
                  className={`grid transition-all duration-300 ease-in-out ${openIndex === index ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <p className="text-sm text-neutral-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default ServiceFAQs;
