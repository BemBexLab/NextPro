import { CircleHelp } from "lucide-react";

const faqs = [
  {
    question: "1. What is Local SEO and Why Is It Important for My Business?",
    answer:
      "Local SEO makes it easier for people living nearby to find your services by showing your company in local search results.",
  },
  {
    question: "2. How Does Local SEO Differ from General SEO?",
    answer:
      "Local SEO is about local customers, while global SEO is for the audience at large.",
  },
  {
    question: "3. What Are Local Keywords and How Do I Choose Them?",
    answer:
      "Local keywords consist of service searches with location keywords, such as \u201cplumber in Laredo\u201d that are exactly related to what people are searching for.",
  },
  {
    question: "4. What Is Google Business Profile and How Does It Affect Local SEO?",
    answer:
      "Google Business Profile is a service that provides information about a business in Google\u2019s Search and Maps so that customers could learn about the business and contact it.",
  },
  {
    question: "5. How Do Online Reviews Impact My Local SEO?",
    answer:
      "Real reviews help build trust and drive purchase decisions and contribute to better visibility in local search.",
  },
  {
    question: "6. What Is Local Link Building?",
    answer:
      "Local link building is obtaining links from local websites that are relevant for improving presence on the web.",
  },
  {
    question: "7. How Long Does It Take to See Results from Local SEO?",
    answer:
      "Local SEO results vary, but meaningful improvements can take several weeks to several months depending on competition and your website\u2019s current condition.",
  },
  {
    question: "8. Can I Do Local SEO Myself?",
    answer:
      "Yes, you can manage basic Local SEO yourself by optimizing your Google Business Profile, targeting local keywords, and collecting genuine customer reviews.",
  },
  {
    question: "9. What Are Local SEO Citations?",
    answer:
      "Local SEO citations are online mentions of your business name, address, and phone number across directories and relevant websites.",
  },
  {
    question: "10. How Do I Measure the Success of My Local SEO Efforts?",
    answer:
      "Track local keyword rankings, Google Business Profile interactions, website traffic, customer calls, and qualified leads to measure progress.",
  },
];

const LocalSEOFAQs = () => {
  return (
    <section className="border-y border-slate-200 bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-[92%] max-w-7xl">
        <div className="mb-9 sm:mb-12">
          <div aria-hidden="true" className="mb-5 h-1 w-12 bg-[#c8102e]" />
          <h2 className="flex items-center gap-3 text-3xl font-bold leading-tight tracking-[-0.035em] text-slate-950 sm:text-4xl">
            <CircleHelp aria-hidden="true" className="h-6 w-6 text-[#0b63b8] sm:h-7 sm:w-7" strokeWidth={1.8} />
            Local SEO Service FAQs
          </h2>
        </div>

        <ol className="grid list-none grid-cols-1 gap-x-12 lg:grid-cols-2 lg:gap-x-16">
          {faqs.map(({ question, answer }) => {
            const [number, ...questionWords] = question.split(" ");

            return (
              <li key={question} className="border-t border-slate-200 py-5 sm:py-6">
                <div className="grid grid-cols-[2rem_1fr] gap-x-3 sm:grid-cols-[2.5rem_1fr] sm:gap-x-4">
                  <span className="pt-0.5 text-xl font-bold leading-none tracking-[-0.04em] text-[#c8102e] sm:text-2xl">
                    {number}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold leading-snug tracking-[-0.01em] text-slate-900 sm:text-lg">
                      {questionWords.join(" ")}
                    </h3>
                    <p className="mt-2 text-sm leading-6 tracking-[0.005em] text-slate-600 sm:text-base sm:leading-7">
                      {answer}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default LocalSEOFAQs;
