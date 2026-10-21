import { MailCheck } from "lucide-react";

const ReviewGeneration = () => {
  return (
    <section className="relative overflow-hidden border-y border-blue-900 bg-[#072d7f] py-16 sm:py-20 lg:py-24">
      <div aria-hidden="true" className="absolute left-0 top-0 h-1 w-full bg-[#c8102e]" />
      <div className="mx-auto grid w-[92%] max-w-7xl gap-8 sm:gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16">
        <h2 className="flex items-start gap-4 text-3xl font-bold leading-[1.08] tracking-[-0.04em] text-white sm:text-4xl lg:text-[2.75rem]">
          <MailCheck
            aria-hidden="true"
            className="mt-1 h-7 w-7 shrink-0 text-[#ffb4c1] sm:h-8 sm:w-8"
            strokeWidth={1.7}
          />
          Review Generation Strategy
        </h2>

        <p className="border-l-2 border-[#c8102e] pl-5 text-base leading-7 tracking-[0.005em] text-blue-50 sm:pl-7 sm:text-lg sm:leading-8 lg:text-xl">
          {"If customers aren\u2019t leaving reviews, we can help you request feedback through email or text messages. Making it easy for customers to share their honest experiences can build trust, strengthen your online reputation, and help more people feel confident choosing your business."}
        </p>
      </div>
    </section>
  );
};

export default ReviewGeneration;
