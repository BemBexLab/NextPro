import Link from "next/link";
import { ArrowRight, MessageSquareText } from "lucide-react";

const CustomerReviews = () => {
  return (
    <section className="border-y border-slate-200 bg-[#f8fbff] py-14 sm:py-16 lg:py-20">
      <div className="mx-auto w-[92%] max-w-7xl">
        <div className="grid items-center gap-9 border-l-2 border-[#c8102e] pl-5 sm:gap-10 sm:pl-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16">
          <div className="max-w-4xl">
            <h2 className="flex items-center gap-3 text-2xl font-bold leading-tight tracking-[-0.03em] text-slate-950 sm:text-3xl lg:text-4xl">
            <MessageSquareText
              aria-hidden="true"
              className="h-6 w-6 shrink-0 text-[#0b63b8] sm:h-7 sm:w-7"
              strokeWidth={1.8}
            />
            Customer Reviews &amp; Reputation Management
            </h2>

            <p className="mt-5 text-base leading-7 tracking-[0.005em] text-slate-600 sm:mt-6 sm:text-lg sm:leading-8">
              Customer feedback is very important and helps customers build trust
              towards your business. While good reviews promote your business, bad
              reviews are an excellent way to show you what you need to work on.
              We can help you build an excellent online reputation through honest
              feedback from customers and the right responses from you, which will
              help customers start trusting you more and give your local SEO a
              boost.
            </p>
          </div>

          <Link
            href="/contact-us"
            className="inline-flex min-h-[4.25rem] w-full items-center justify-center gap-4 bg-[#c8102e] px-6 py-5 text-center text-base font-bold text-white transition-colors duration-200 hover:bg-[#a90d27] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c8102e] focus-visible:ring-offset-2 sm:text-lg lg:w-auto lg:min-w-[17rem]"
          >
            Grow Your Business With Reviews
            <ArrowRight aria-hidden="true" className="h-5 w-5 shrink-0" strokeWidth={2} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
