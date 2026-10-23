import Image from "next/image";
import {
  ArrowRight,
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

      <Image
        src="/Assets/High%20res/7041b13d-7bbc-47dc-a9f0-7af75d65aa4d.png"
        alt=""
        aria-hidden="true"
        width={1280}
        height={1280}
        className="process-decoration-float process-decoration-float-1 pointer-events-none absolute left-[6%] top-[44%] z-0 hidden w-16 -rotate-12 object-contain select-none min-[1800px]:block 2xl:w-24"
      />
      <Image
        src="/Assets/High%20res/4a47c480-dff3-4a79-a211-2dd283f1d780.png"
        alt=""
        aria-hidden="true"
        width={1400}
        height={1100}
        className="process-decoration-float process-decoration-float-2 pointer-events-none absolute right-[4%] top-[18%] z-0 hidden w-20 rotate-[14deg] object-contain select-none min-[1800px]:block 2xl:right-[5%] 2xl:top-[62%] 2xl:w-32"
      />

      <div className="mx-auto grid max-w-[1360px] items-center gap-9 sm:grid-cols-[0.9fr_1.1fr] sm:gap-8 lg:gap-16">
        <div className="relative z-10 max-w-[540px]">
          <span className="inline-flex rounded-full bg-[#e90c14] px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-[0.08em] text-white shadow-sm sm:text-xs">
            Why Choose Us
          </span>

          <h2
            id="more-than-website-heading"
            className="mt-4 text-[clamp(1.35rem,3.2vw,3.2rem)] font-black uppercase leading-[0.99] tracking-[-0.045em]"
          >
            More Than Just
            <br />
            A Website
            <span className="mt-1.5 block text-[#e31824]">
              A Partner in Your Success
            </span>
          </h2>

          <p className="mt-4 max-w-[500px] text-sm leading-[1.6] text-slate-600 sm:mt-5 sm:text-base">
            We don&apos;t just build websites, we create digital experiences that
            help your business grow. Here&apos;s why businesses choose
            WebFoundersUSA:
          </p>

          <ul className="mt-5 grid gap-3 text-sm font-medium leading-snug text-slate-800 sm:mt-6 sm:gap-3.5 sm:text-base">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-x-3">
                <span className="mt-px inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#e90c14] text-white">
                  <Check aria-hidden="true" className="h-3 w-3" strokeWidth={3.5} />
                </span>
                <span>{benefit}</span>
              </li>
            ))}
          </ul>

          <a
            href="#request-audit"
            className="mt-6 inline-flex min-h-12 items-center justify-center gap-2.5 rounded-lg bg-gradient-to-b from-[#E90C14] to-[#A60607] px-6 text-sm font-bold text-white shadow-[0_5px_14px_rgba(211,24,36,0.2)] transition hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e31824] focus-visible:ring-offset-2 sm:mt-7 sm:min-h-14 sm:px-7 sm:text-base"
          >
            Get My Black Friday Deal
            <ArrowRight aria-hidden="true" className="h-5 w-5" />
          </a>
        </div>

        <div className="relative mx-auto w-full max-w-[760px] pb-4 pr-3 sm:pb-6 sm:pr-5 md:ml-auto">
          <div aria-hidden="true" className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-slate-200/60 via-transparent to-red-100/70 blur-xl sm:-inset-5" />
          <div className="relative aspect-[1.5/1] min-h-[260px] overflow-hidden rounded-[1.5rem] bg-slate-200 shadow-[0_20px_55px_rgba(15,23,42,0.16)] sm:aspect-[1.62/1] sm:min-h-[280px] sm:rounded-[1.75rem]">
            <Image
              src="/images/resource/approach-image4-1.webp"
              alt="Business team collaborating around a laptop"
              fill
              sizes="(max-width: 767px) 100vw, (max-width: 1279px) 55vw, 760px"
              className="object-cover object-center"
            />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/25 via-transparent to-white/5" />
          </div>

          <div className="absolute -right-1 top-3 z-10 flex w-[144px] items-center justify-between gap-1.5 rounded-2xl border border-slate-100 bg-white px-3.5 py-3 shadow-[0_12px_32px_rgba(15,23,42,0.16)] sm:-right-1 sm:top-5 sm:w-[184px] sm:px-5 sm:py-4 lg:right-0">
            <p className="text-xs font-black uppercase leading-[1.05] tracking-[-0.02em] text-[#101820] sm:text-base">
              <span className="block text-[#e31824]">Let&apos;s</span>
              Grow
              <br />
              Together
            </p>
            <Image
              src="/Assets/High%20res/curved-arrow.svg"
              alt=""
              aria-hidden="true"
              width={36}
              height={36}
              className="h-7 w-7 shrink-0 [filter:brightness(0)_saturate(100%)_invert(18%)_sepia(96%)_saturate(5793%)_hue-rotate(350deg)_brightness(93%)_contrast(97%)] sm:h-9 sm:w-9"
            />
          </div>

          <div className="absolute -bottom-1 left-1 z-10 flex min-h-[64px] max-w-[250px] items-center gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-[0_12px_32px_rgba(15,23,42,0.16)] sm:bottom-0 sm:left-5 sm:min-h-[82px] sm:max-w-[320px] sm:gap-4 sm:px-5">
            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red-50 text-[#e31824] sm:h-12 sm:w-12">
              <ChartNoAxesColumnIncreasing aria-hidden="true" className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={3} />
            </span>
            <p className="text-xs font-extrabold leading-snug text-slate-900 sm:text-sm">
              Websites That
              <br />
              Drive Real Results
            </p>
          </div>

          <div className="absolute -bottom-2 -right-1 z-20 flex h-[64px] w-[64px] rotate-[-12deg] items-center justify-center rounded-[14px_14px_18px_14px] bg-gradient-to-br from-[#ff2632] to-[#c90010] text-white shadow-[0_10px_24px_rgba(190,0,16,0.32)] sm:-bottom-4 sm:right-0 sm:h-[84px] sm:w-[84px] sm:rounded-[18px_18px_24px_18px]">
            <span aria-hidden="true" className="text-4xl font-bold leading-none sm:text-5xl">%</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoreThanJustWebsite;
