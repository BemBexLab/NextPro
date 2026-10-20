const faqs = [
  {
    question: "1. How do I choose an SEO company in Quincy, MA?",
    answer:
      "Choose an SEO company that understands your business goals, explains its strategy clearly, provides transparent reporting, and follows search engine guidelines. Ask how it evaluates website performance and measures meaningful results. Be cautious of guarantees for specific Google rankings.",
  },
  {
    question: "2. What does an SEO agency in Quincy, MA do?",
    answer:
      "An SEO agency helps improve organic search visibility through keyword research, technical SEO, on-page optimization, content development, local SEO, and performance monitoring. Services vary depending on the website and business objectives.",
  },
  {
    question: "3. How much do SEO services in Quincy, MA cost?",
    answer:
      "SEO pricing depends on your website's condition, competition, project scope, target locations, and campaign goals. A small local business may need a different level of support from a large e-commerce website. Request a tailored quote based on your requirements.",
  },
  {
    question: "4. How long does SEO take to show results?",
    answer:
      "SEO timelines vary. Some technical improvements may be recognized relatively quickly, while meaningful growth in rankings and organic traffic can take several months or longer. Competition, website history, content quality, and implementation all affect the timeline.",
  },
  {
    question: "5. Can an SEO specialist in Quincy help a small business?",
    answer:
      "Yes. An SEO specialist can help a small business identify relevant keywords, improve its website, optimize eligible local listings, and create useful service pages. The strategy should reflect the business's service area, budget, and growth priorities.",
  },
  {
    question: "6. What is the difference between an SEO firm and an SEO agency?",
    answer:
      "The terms are commonly used interchangeably. Both may provide technical SEO, keyword research, content optimization, local SEO, and reporting. Evaluate the provider's experience, process, communication, and service scope rather than relying on the name alone.",
  },
  {
    question: "7. Is local SEO important for Quincy businesses?",
    answer:
      "Local SEO can help businesses reach people searching for relevant services in their area. It is particularly useful for companies that serve local customers and want to improve their visibility in relevant local search results.",
  },
  {
    question: "8. Does Web Founders USA guarantee first-page Google rankings?",
    answer:
      "No responsible SEO provider can guarantee a specific Google ranking. Search results depend on many factors, including competition and search engine systems. SEO should focus on website quality, relevance, technical health, and measurable progress.",
  },
  {
    question: "9. Can SEO and paid advertising work together?",
    answer:
      "Yes. SEO supports organic search visibility, while paid advertising can provide targeted exposure through ad placements. Using both may help businesses reach different audiences and evaluate which search terms generate valuable enquiries.",
  },
  {
    question: "10. How can I get started with Web Founders USA?",
    answer:
      "Contact Web Founders USA to discuss your website, target audience, business goals, and current SEO challenges. A review of your needs can help identify relevant opportunities and determine the next steps for your campaign.",
  },
];

export default function QuincyFAQ() {
  return (
    <section className="relative bg-white text-black">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24">
        <header className="mb-12 md:mb-16">
          <h2 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Frequently <span className="text-[#0033CC]">Asked Questions</span>
          </h2>
        </header>
        <div className="border-t border-black/20">
          {faqs.map((faq) => (
            <article
              key={faq.question}
              className="grid gap-4 border-b border-black/20 py-7 md:grid-cols-[0.8fr_1.2fr] md:gap-8 md:py-9"
            >
              <h3 className="text-lg font-semibold leading-snug md:text-xl">
                {faq.question}
              </h3>
              <p className="text-base leading-relaxed text-[#4b5563] md:text-lg">
                {faq.answer}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
