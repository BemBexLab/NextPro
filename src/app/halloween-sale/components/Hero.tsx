import Image from "next/image";
import HeroInquiryForm from "./HeroInquiryForm";
import HeroPopupTrigger from "./HeroPopupTrigger";

const Hero = () => {
  return (
    <section className="relative isolate mx-auto w-full max-w-[1600px] px-3 py-12 sm:px-5 sm:py-14 lg:px-8 lg:py-16">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden max-[949px]:hidden">
        <Image src="/Halloween Assets Task/image 18.png" alt="" width={128} height={128} className="hero-pumpkin-float hero-pumpkin-float-1 absolute left-[5%] top-1 w-10 sm:w-14 lg:w-16" />
        <Image src="/Halloween Assets Task/image 24.png" alt="" width={256} height={142} className="hero-pumpkin-float hero-pumpkin-float-2 absolute left-[29%] top-2 w-12 sm:w-16 lg:w-20" />
        <Image src="/Halloween Assets Task/image 18.png" alt="" width={128} height={128} className="hero-pumpkin-float hero-pumpkin-float-3 absolute right-[28%] top-0 w-9 sm:w-12 lg:w-14" />
        <Image src="/Halloween Assets Task/image 24.png" alt="" width={256} height={142} className="hero-pumpkin-float hero-pumpkin-float-4 absolute right-[5%] top-1 w-12 sm:w-16 lg:w-20" />
        <Image src="/Halloween Assets Task/image 24.png" alt="" width={256} height={142} className="hero-pumpkin-float hero-pumpkin-float-5 absolute bottom-1 left-[9%] w-12 sm:w-16 lg:w-20" />
        <Image src="/Halloween Assets Task/image 18.png" alt="" width={128} height={128} className="hero-pumpkin-float hero-pumpkin-float-6 absolute bottom-0 left-[39%] w-10 sm:w-14 lg:w-16" />
        <Image src="/Halloween Assets Task/image 24.png" alt="" width={256} height={142} className="hero-pumpkin-float hero-pumpkin-float-7 absolute bottom-1 right-[30%] w-12 sm:w-16 lg:w-20" />
        <Image src="/Halloween Assets Task/image 18.png" alt="" width={128} height={128} className="hero-pumpkin-float hero-pumpkin-float-8 absolute bottom-0 right-[5%] w-10 sm:w-14 lg:w-16" />
      </div>
      <div className="relative z-10 isolate overflow-hidden rounded-2xl border border-white/75 bg-white/35 shadow-[0_28px_90px_rgba(0,31,63,0.16),inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-2xl backdrop-saturate-150 before:pointer-events-none before:absolute before:inset-0 before:z-0 before:bg-[linear-gradient(135deg,rgba(255,255,255,0.52)_0%,rgba(221,232,255,0.22)_34%,rgba(255,255,255,0.08)_65%,rgba(191,11,48,0.08)_100%)] contrast-more:border-[#001F3F] contrast-more:bg-white [@media(prefers-reduced-transparency:reduce)]:bg-white [@media(prefers-reduced-transparency:reduce)]:backdrop-blur-none dark:border-white/20 dark:bg-[#101b2c]/45 dark:before:bg-[linear-gradient(135deg,rgba(255,255,255,0.14),rgba(20,43,76,0.3)_45%,rgba(191,11,48,0.1))] sm:rounded-3xl lg:rounded-[30px]">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
          <div className="absolute -right-24 -top-36 h-[34rem] w-[38rem] rounded-full bg-blue-300/55 blur-[100px] sm:bg-blue-300/65" />
          <div className="absolute -bottom-48 left-[28%] h-[30rem] w-[36rem] rounded-full bg-rose-300/40 blur-[110px]" />
          <div className="absolute -bottom-40 -left-28 h-[26rem] w-[32rem] rounded-full bg-indigo-200/55 blur-[100px]" />
        </div>
        <div className="relative z-10 grid grid-cols-1 items-center gap-6 px-4 py-6 sm:gap-8 sm:px-7 sm:py-8 md:px-9 md:py-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch lg:gap-0 lg:p-0">
          {/* Text Content */}
          <div className="flex min-w-0 flex-col justify-center lg:px-10 lg:py-10 xl:px-12 xl:py-12">
            <h1 className="text-balance text-[clamp(2.25rem,3.8vw,3.75rem)] font-bold leading-[1.04] tracking-wide text-[#001F3F] dark:text-white">
              <span className="block">Web Founders USA</span>
              <span className="mt-2 block text-[#BF0B30]">Website Design &amp; Development</span>
            </h1>
            <p className="max-w-[42rem] pt-4 text-[clamp(0.9375rem,1.25vw,1.125rem)] font-medium leading-relaxed sm:pt-5 lg:pt-6">
              Turn your ideas into a polished, dependable website. Web Founders
              USA designs and develops responsive websites around your goals,
              your customers, and the way your business works.
            </p>
            <div className="flex flex-col gap-4 pt-6 sm:flex-row sm:items-center sm:pt-8 lg:pt-10">
              <HeroPopupTrigger />
            </div>
          </div>

          {/* Hero image retained here as a comment for easy restoration. */}
          {/*
          <div className="relative mx-auto aspect-[3/2] w-full max-w-[600px] lg:mx-0 lg:aspect-auto lg:h-full lg:min-h-[420px] lg:max-w-none xl:min-h-[480px]">
            <Image
              src="/Halloween Assets Task/Hero.webp"
              fill
              alt="Hero Image"
              sizes="(max-width: 1023px) 100vw, 45vw"
              className="rounded-xl object-contain lg:rounded-none"
              priority
            />
          </div>
          */}

          <HeroInquiryForm />
        </div>
      </div>
    </section>
  );
};

export default Hero;
