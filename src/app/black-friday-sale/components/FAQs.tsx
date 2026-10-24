import Image from "next/image";
import { ArrowRight, ChevronRight } from "lucide-react";

const questions = [
  {
    question: "What is included in your website design and development service?",
    answer:
      "Our service covers custom website design and development, responsive layouts, and the performance and SEO foundations your site needs. We tailor the scope to your business and goals.",
  },
  {
    question: "Do you also redesign existing websites?",
    answer:
      "Yes. We can refresh an existing website's design and improve its structure, mobile experience, and performance. We'll review your current site and recommend an approach that fits.",
  },
  {
    question: "How long does a website project take?",
    answer:
      "Timing depends on the size of the site, its features, and how quickly content and feedback are ready. We'll share a project schedule after learning more about your requirements.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "Payment terms and available methods are confirmed with your project proposal. Contact us and we'll go over the options for your project.",
  },
  {
    question: "When does the Black Friday offer end?",
    answer:
      "The Black Friday offer is available for a limited time. Contact us to confirm current availability and reserve the offer for your project.",
  },
];

const FAQs = () => {
  return (
    <section
      aria-labelledby="faq-heading"
      className="relative isolate overflow-hidden bg-[linear-gradient(110deg,#ffffff_4%,#f8f9fc_55%,#ffffff_100%)] px-4 py-8 text-[#101820] sm:px-6 sm:py-10 md:px-8 md:py-12 lg:px-12 lg:py-16 xl:px-16"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-1/2 -z-10 h-80 w-80 -translate-y-1/2 rounded-full bg-red-100/40 blur-3xl"
      />

      <div className="mx-auto grid max-w-[1350px] items-start gap-8 md:gap-10 lg:grid-cols-[1.25fr_0.9fr] lg:items-center lg:gap-12 xl:gap-16">
        <div>
          <span className="inline-flex rounded-full bg-[#e90c14] px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.08em] text-white shadow-sm sm:text-xs">
            FAQs
          </span>

          <h2
            id="faq-heading"
            className="mt-3 text-[clamp(1.65rem,3.6vw,3rem)] font-black uppercase leading-[1.05] tracking-[-0.035em] sm:mt-4 md:mt-5"
          >
            Frequently Asked Questions
          </h2>

          <div className="mt-5 grid gap-3 sm:mt-6 md:mt-8 md:gap-4">
            {questions.map(({ question, answer }) => (
              <details
                key={question}
                className="group rounded-lg border border-slate-100/90 bg-white/85 shadow-[0_3px_12px_rgba(15,23,42,0.035)] open:bg-white"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 rounded-lg px-4 py-3.5 text-sm font-semibold leading-snug text-slate-800 marker:content-none [&::-webkit-details-marker]:hidden sm:gap-4 sm:px-5 sm:py-4 sm:text-[15px] md:text-base">
                  <span className="flex-1">{question}</span>
                  <ChevronRight
                    aria-hidden="true"
                    className="h-5 w-5 shrink-0 text-slate-500 transition-transform duration-200 group-open:rotate-90 sm:h-6 sm:w-6"
                  />
                </summary>
                <p className="px-4 pb-4 text-sm leading-relaxed text-slate-800 sm:px-5 sm:pb-5 sm:text-[15px] md:text-base">
                  {answer}
                </p>
              </details>
            ))}
          </div>
        </div>

        <aside className="relative isolate overflow-hidden rounded-[1.5rem] bg-[linear-gradient(135deg,#0b171c_0%,#101c23_58%,#171820_100%)] px-5 py-6 text-white shadow-[0_24px_60px_rgba(15,23,42,0.22)] sm:px-7 sm:py-8 md:px-8 md:py-10">
          {/* Background glow effects */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_100%_100%,rgba(233,12,20,0.18),transparent_50%)]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-20 -z-10 h-64 w-64 rounded-full bg-red-500/10 blur-3xl"
          />

          {/* Large gift image - positioned behind all content */}
          <Image
            src="/Assets/High%20res/1c37117e-f2b5-46e8-9089-39c0330aab92.png"
            alt=""
            aria-hidden="true"
            width={1407}
            height={1118}
            className="pointer-events-none absolute -bottom-4 -right-4 z-0 h-40 w-48 object-contain drop-shadow-[0_18px_24px_rgba(0,0,0,0.3)] sm:-bottom-6 sm:-right-4 sm:h-52 sm:w-60 md:-bottom-8 md:-right-6 md:h-64 md:w-72 lg:-bottom-10 lg:-right-8 lg:h-72 lg:w-80"
          />

          {/* Glassmorphism text container */}
          <div className="relative z-10 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md sm:p-5 md:p-6">
            <div className="flex items-start gap-4 sm:gap-5">
              <Image
                src="/Assets/High%20res/0dfaa056-ea22-4de3-97eb-261590f9d661.png"
                alt=""
                aria-hidden="true"
                width={1374}
                height={1145}
                className="h-16 w-20 shrink-0 object-contain drop-shadow-[0_10px_16px_rgba(0,0,0,0.28)] sm:h-20 sm:w-24 md:h-[88px] md:w-[106px]"
              />
              <div className="min-w-0 flex-1 pt-1">
                <h3 className="text-lg font-black uppercase leading-tight tracking-[-0.025em] sm:text-xl md:text-[22px]">
                  Still Have Questions?
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white sm:mt-2.5 sm:text-[15px] md:text-base">
                  We're here to help! Get in touch and we'll be happy to discuss
                  your project.
                </p>
              </div>
            </div>
          </div>

          {/* Button - outside glass effect */}
          <div className="relative z-10 mt-6 sm:mt-8 md:mt-10">
            <a
              href="#request-audit"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-b from-[#ff1b27] to-[#d9000c] px-5 py-3 text-sm font-bold text-white shadow-[0_10px_24px_rgba(233,12,20,0.3)] transition duration-200 hover:-translate-y-0.5 hover:brightness-110 hover:shadow-[0_14px_30px_rgba(233,12,20,0.38)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d1a20] sm:min-h-14 sm:gap-3 sm:px-7 sm:text-base"
            >
              Contact Us
              <ArrowRight aria-hidden="true" className="h-5 w-5 sm:h-6 sm:w-6" />
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default FAQs;