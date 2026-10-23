import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  ChartNoAxesColumnIncreasing,
  Check,
} from "lucide-react";

const benefits = [
  "Custom, Modern & Professional Design",
  "Mobile-Friendly & SEO Optimized",
  "Fast Loading & High Performance",
  "Ongoing Support & Guidance",
];

const MoreThanJustWebsite = () => {
  return (
    <section
      aria-labelledby="more-than-website-heading"
      className="relative isolate overflow-hidden bg-[linear-gradient(110deg,#ffffff_5%,#f8f9fc_48%,#ffffff_100%)] px-4 py-10 text-[#101820] sm:px-7 sm:py-14 lg:px-12 lg:py-[4.5rem]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-1/2 -z-10 h-80 w-80 -translate-y-1/2 rounded-full bg-red-100/40 blur-3xl"
      />

      <div className="mx-auto grid max-w-[1240px] items-center gap-8 sm:grid-cols-[0.9fr_1.1fr] sm:gap-6 lg:gap-16">
        <div className="relative z-10 max-w-[490px]">
          <span className="inline-flex rounded-full bg-[#e90c14] px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.08em] text-white shadow-sm sm:text-xs">
            Why Choose Us
          </span>

          <h2
            id="more-than-website-heading"
            className="mt-3 text-[clamp(1.1rem,2.8vw,2.6rem)] font-black uppercase leading-[0.99] tracking-[-0.045em]"
          >
            More Than Just
            <br />
            A Website
            <span className="mt-1 block text-[#e31824]">
              A Partner in Your Success
            </span>
          </h2>

          <p className="mt-3 max-w-[460px] text-[13px] leading-[1.55] text-slate-600 sm:mt-4 sm:text-[15px]">
            We don&apos;t just build websites, we create digital experiences that
            help your business grow. Here&apos;s why businesses choose
            WebFoundersUSA:
          </p>

          <ul className="mt-4 grid gap-2 text-[12px] font-medium leading-snug text-slate-800 sm:mt-5 sm:gap-2.5 sm:text-sm">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-2.5">
                <span className="mt-px inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#e90c14] text-white">
                  <Check aria-hidden="true" className="h-2.5 w-2.5" strokeWidth={3.5} />
                </span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>

          <a
            href="#request-audit"
            className="mt-5 inline-flex min-h-10 items-center justify-center gap-2 rounded-lg bg-gradient-to-b from-[#E90C14] to-[#A60607] px-5 text-[11px] font-extrabold text-white shadow-[0_5px_14px_rgba(211,24,36,0.2)] transition hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e31824] focus-visible:ring-offset-2 sm:mt-6 sm:min-h-11 sm:px-6 sm:text-xs"
          >
            Get My Black Friday Deal
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </a>
        </div>

        <div className="relative mx-auto w-full max-w-[660px] pb-3 pr-2 sm:pb-5 sm:pr-4 md:ml-auto">
          <div aria-hidden="true" className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-slate-200/60 via-transparent to-red-100/70 blur-xl sm:-inset-5" />
          <div className="relative aspect-[1.55/1] min-h-[220px] overflow-hidden rounded-[1.35rem] bg-slate-200 shadow-[0_20px_55px_rgba(15,23,42,0.16)] sm:aspect-[1.62/1] sm:min-h-[200px] sm:rounded-[1.6rem]">
            <Image
              src="/images/resource/approach-image4-1.webp"
              alt="Business team collaborating around a laptop"
              fill
              sizes="(max-width: 767px) 100vw, (max-width: 1279px) 55vw, 660px"
              className="object-cover object-center"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/25 via-transparent to-white/5" />
          </div>

          <div className="absolute -right-1 top-3 z-10 flex w-[124px] items-center justify-between gap-1 rounded-2xl border border-slate-100 bg-white px-3 py-2.5 shadow-[0_12px_32px_rgba(15,23,42,0.16)] sm:-right-1 sm:top-5 sm:w-[158px] sm:px-4 sm:py-3.5 lg:right-0">
            <p className="text-[11px] font-black uppercase leading-[1.05] tracking-[-0.02em] text-[#101820] sm:text-sm">
              <span className="block text-[#e31824]">Let&apos;s</span>
              Grow
              <br />
              Together
            </p>
            <ArrowUpRight aria-hidden="true" className="h-6 w-6 shrink-0 text-[#e31824] sm:h-8 sm:w-8" strokeWidth={3} />
          </div>

          <div className="absolute -bottom-1 left-1 z-10 flex min-h-[52px] max-w-[220px] items-center gap-2.5 rounded-2xl border border-slate-100 bg-white px-3 py-2 shadow-[0_12px_32px_rgba(15,23,42,0.16)] sm:bottom-0 sm:left-5 sm:min-h-[68px] sm:max-w-[270px] sm:gap-3 sm:px-4">
            <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-red-50 text-[#e31824] sm:h-10 sm:w-10">
              <ChartNoAxesColumnIncreasing aria-hidden="true" className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={3} />
            </span>
            <p className="text-[10px] font-extrabold leading-snug text-slate-900 sm:text-xs">
              Websites That
              <br />
              Drive Real Results
            </p>
          </div>

          <div className="absolute -bottom-2 -right-1 z-20 flex h-[54px] w-[54px] rotate-[-12deg] items-center justify-center rounded-[12px_12px_16px_12px] bg-gradient-to-br from-[#ff2632] to-[#c90010] text-white shadow-[0_10px_24px_rgba(190,0,16,0.32)] sm:-bottom-4 sm:right-0 sm:h-[72px] sm:w-[72px] sm:rounded-[16px_16px_20px_16px]">
            <span aria-hidden="true" className="text-3xl font-black leading-none sm:text-4xl">%</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreThanJustWebsite;
