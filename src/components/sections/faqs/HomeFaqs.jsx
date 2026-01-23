"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function FAQSection() {
  // Embedded FAQs data
  const faqs = [
    {
      question: "What services does Web Founders USA offer?",
      answer: (
        <>
          Comprehensive web services are <Link href="/service/custom-website-design" className="text-blue-900 hover:underline transition-all duration-300">Website Design and Development</Link>, Digital Marketing Agency, SEO Optimization Services, Social Media Marketing, Email Marketing Services, and Custom Web Solutions that assist businesses in the online growth process.
        </>
      )
    },
    {
      question: "Can you build an eCommerce website for my business?",
      answer: (
        <>
          We create eCommerce websites through WooCommerce development, Shopify website development, and <Link href="/service/ecommerce-web-design" className="text-blue-900 hover:underline transition-all duration-300">eCommerce website development</Link> for fast, secure, and mobile friendly online stores that have a high ratio of visitors converting into customers.
        </>
      )
    },
    {
      question: "Do you provide website maintenance and support?",
      answer: (
        <>
          Absolutely, our <Link href="/service/website-maintenance" className="text-blue-900 hover:underline transition-all duration-300">Website Maintenance</Link> and Support, as well as WordPress Support Services, keep your site not only secure but also updated and with great performance. Moreover, we provide Website Security and Website Speed Optimization services.
        </>
      )
    },
    {
      question: "Can you redesign my existing Website?",
      answer: "Certainly, by means of our Website Redesign Services, we not only change the look of your Website but also make it more functional. Our main areas of focus are Responsive Web Design, Mobile Friendly Website Design, and Interactive Web Design, which all together improve the user experience."
    },
    {
      question: "Are hosting services part of your offerings?",
      answer: "Our Web Hosting Services are reliable and consist of Secure Website Hosting, Cloud Hosting Services, and Dedicated Server Hosting, all of which are fast, safe, and permanently available to your Website."
    },
    {
      question: "Will you be my partner in developing my online marketing strategy?",
      answer: "Yes, our digital marketing agency takes care of Online Marketing Services, comprising PPC Marketing Services, Google Ads Management, Content Marketing Services, and SEO Optimization Services for the purpose of driving traffic and conversions."
    },
    {
      question: "Do you offer customized web solutions?",
      answer: (
        <>
          We do offer <Link href="/service/custom-website-design" className="text-blue-900 hover:underline transition-all duration-300">Custom Web Solutions</Link>, including CMS Website Development, Custom PHP Development, Laravel Development Services, and Dynamic <Link href="/service/web-development" className="text-blue-900 hover:underline transition-all duration-300">Web Application Development</Link> according to your business needs.
        </>
      )
    }
  ];

  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 px-4 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
            <button
              className="flex justify-between items-center w-full p-5 text-left bg-white hover:bg-gray-50 transition-colors"
              onClick={() => toggleFaq(index)}
              aria-expanded={openFaq === index}
            >
              <span className="font-semibold text-lg">{faq.question}</span>
              <svg
                className={`transform transition-transform duration-200 ${openFaq === index ? 'rotate-180' : ''
                  }`}
                width={20}
                height={20}
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {openFaq === index && (
              <div className="p-5 pt-3 border-t border-gray-200 bg-white">
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          href="/contact-us"
          className="inline-block px-6 py-3 border-2 border-[#072d7f] text-[#072d7f] font-semibold rounded-lg hover:bg-[#072d7f] hover:text-white transition-colors"
        >
          Start Your Journey
        </Link>
      </div>
    </section>
  );
}