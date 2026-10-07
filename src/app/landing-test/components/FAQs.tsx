import Link from 'next/link';
import FaqJsonLd from '@/components/seo/FaqJsonLd';

export default function FAQ() {
  // Embedded FAQs data
  const faqs = [
    {
      question: "What services does Web Founders USA offer?",
      answer: (
        <>
          Comprehensive web services are Website Design and Development, Digital Marketing Agency, SEO Optimization Services, Social Media Marketing, Email Marketing Services, and Custom Web Solutions that assist businesses in the online growth process.
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
          We do offer Custom Web Solutions, including CMS Website Development, Custom PHP Development, Laravel Development Services, and Dynamic Web Application Development according to your business needs.
        </>
      )
    }
  ];

  return (
    <section className="relative isolate w-full overflow-hidden bg-[#FAFBFE] py-16 md:py-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-full bg-no-repeat"
        style={{
          backgroundImage: "url('/Halloween%20Assets%20Task/image%2033.png')",
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
          <Link
            href="/contact-us"
            className="inline-block rounded-lg border-2 border-[#072d7f] px-6 py-3 font-semibold text-[#072d7f] transition-colors hover:bg-[#072d7f] hover:text-white"
          >
            Start Your Journey
          </Link>
        </div>
      </div>
    </section>
  );
}
