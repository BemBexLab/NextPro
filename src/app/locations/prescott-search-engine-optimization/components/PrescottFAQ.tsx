const faqs = [
  {
    question: "How long does SEO take to show results?",
    answer:
      "SEO timelines vary depending on competition, website condition, and the scope of work. Some improvements may appear within weeks, while meaningful organic growth often takes several months. We monitor performance and adjust the strategy based on actual data.",
  },
  {
    question: "How much do SEO services in Prescott cost?",
    answer:
      "Pricing depends on your goals, website size, competition, and required services. After reviewing your needs, we can recommend an appropriate scope of work and explain the expected deliverables.",
  },
  {
    question: "What is included in local SEO?",
    answer:
      "Local SEO can include Google Business Profile optimization, local keyword research, service page improvements, citation consistency, reputation guidance, and local performance tracking.",
  },
  {
    question: "Can SEO help my small business compete with larger companies?",
    answer:
      "Yes. A focused strategy can help smaller businesses target relevant services, specific customer needs, and local search opportunities. Outcomes depend on competition, resources, and execution.",
  },
  {
    question: "Do you guarantee first-page Google rankings?",
    answer:
      "No responsible SEO agency can guarantee a specific Google ranking. We focus on sound optimization practices, measurable improvements, and reporting that helps you understand your campaign's performance.",
  },
  {
    question: "Do you serve businesses outside Prescott?",
    answer:
      "Our service-area strategy can include Prescott Valley, Chino Valley, Dewey-Humboldt, and other locations where your business genuinely operates. Location pages should provide useful, unique information rather than duplicate content with city names changed.",
  },
];

export default function PrescottFAQ() {
  return (
    <section className="relative bg-white text-black">
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24">
        <header className="mb-12 md:mb-16">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#bf0b30] sm:text-sm">Questions & Answers</p>
          <h2 className="text-4xl font-semibold leading-[0.98] tracking-tighter md:text-7xl">
            Frequently <span className="text-[#0033CC]">Asked Questions</span>
          </h2>
        </header>
        <div className="border-t border-black/20">
          {faqs.map((faq, index) => (
            <article key={faq.question} className="grid gap-4 border-b border-black/20 py-7 md:grid-cols-[72px_0.8fr_1.2fr] md:gap-8 md:py-9">
              <span className="font-mono text-sm text-[#0033CC]">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="text-xl font-semibold leading-snug md:text-2xl">{faq.question}</h3>
              <p className="text-base leading-relaxed text-[#4b5563] md:text-lg">{faq.answer}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
