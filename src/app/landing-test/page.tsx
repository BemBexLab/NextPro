import Image from "next/image";
import localFont from "next/font/local";
import Hero from "./components/Hero";
import HalloweenHeader from "@/components/sections/headers/HalloweenHeader";
import InfiniteLogoSlider from "./components/InfiniteLogoSlider";
import Services from "./components/Service";
import Approach from "./components/Approach";
import CountDown from "./components/CountDown";
import CaseStudy from "./components/CaseStudy";
import Pricing from "./components/Pricing";
import Subscribe from "./components/Subscribe";
import RequestAFreeAudit from "./components/RequestAFreeAudit";
import FAQ from "./components/FAQs";

const halloweenPhantom = localFont({
  src: "../../../public/fonts/halloween-phantom-2026-04-07-06-18-34-utc/Halloween Phantom.ttf",
  variable: "--font-halloween-phantom",
  display: "swap",
});

export default function Page() {
  return (
    <div className={`landing-test-headings ${halloweenPhantom.variable}`}>
      <HalloweenHeader />
      <section className="relative isolate w-full bg-[#FAFBFE]">
        <div
          aria-hidden="true"
          className="landing-test-image-fade pointer-events-none absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/Halloween%20Assets%20Task/image%2032.jpg')",
          }}
        />
        <div className="relative z-10">
          <Hero />
        </div>
      </section>
      <InfiniteLogoSlider />
      <Services />
      <div className="relative isolate bg-[#FAFBFE]">
        <div
          aria-hidden="true"
          className="landing-test-image-fade pointer-events-none absolute inset-x-0 bottom-0 z-0 h-full bg-no-repeat"
          style={{
            backgroundImage: "url('/Halloween Assets Task/part-01.webp')",
            backgroundSize: "100% auto",
            backgroundPosition: "center bottom",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        >
          <Image
            src="/Halloween Assets Task/image 24.png"
            width={256}
            height={256}
            alt=""
            className="absolute left-[5%] top-[12%] h-8 w-8 rotate-[-12deg] object-contain opacity-50 sm:h-12 sm:w-12"
          />
          <Image
            src="/Halloween Assets Task/image 24.png"
            width={256}
            height={256}
            alt=""
            className="absolute left-[35%] top-[38%] h-10 w-10 scale-x-[-1] rotate-[15deg] object-contain opacity-40 sm:h-16 sm:w-16 lg:h-20 lg:w-20"
          />
          <Image
            src="/Halloween Assets Task/image 24.png"
            width={256}
            height={256}
            alt=""
            className="absolute right-[8%] top-[20%] h-8 w-8 rotate-6 object-contain opacity-45 sm:h-12 sm:w-12 lg:h-16 lg:w-16"
          />
          <Image
            src="/Halloween Assets Task/image 24.png"
            width={256}
            height={256}
            alt=""
            className="absolute right-[28%] bottom-[18%] h-10 w-10 -rotate-12 scale-x-[-1] object-contain opacity-40 sm:h-14 sm:w-14"
          />
          <Image
            src="/Halloween Assets Task/image 24.png"
            width={256}
            height={256}
            alt=""
            className="absolute right-[60%] top-[8%] h-7 w-7 rotate-[-15deg] object-contain opacity-40 sm:h-10 sm:w-10"
          />
        </div>
        <div className="relative z-10">
          <Approach />
          <CountDown />
        </div>
      </div>
      <CaseStudy />
      <div className="relative isolate w-full bg-gradient-to-b from-[#FAFBFE] via-[#F5F7FD] to-[#F0F5FF]">
        <div
          aria-hidden="true"
          className="landing-test-image-fade pointer-events-none absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/Halloween Assets Task/image 32.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Image
          src="/Halloween Assets Task/image 15.webp"
          alt=""
          aria-hidden="true"
          width={960}
          height={1600}
          className="pointer-events-none absolute bottom-0 left-0 z-10 hidden h-[450px] w-[270px] object-contain object-bottom lg:block"
        />
        <Image
          src="/Halloween Assets Task/image 27.webp"
          alt=""
          aria-hidden="true"
          width={960}
          height={1600}
          className="pointer-events-none absolute bottom-0 right-0 z-10 hidden h-[450px] w-[270px] object-contain object-bottom lg:block"
        />
        <div className="relative z-10">
          <Pricing />
          <Subscribe />
        </div>
      </div>
      <RequestAFreeAudit />
      <FAQ />
    </div>
  );
}
