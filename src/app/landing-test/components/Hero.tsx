import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="mx-auto w-full max-w-[1440px] px-3 py-4 sm:px-5 sm:py-6 lg:px-8 lg:py-10">
      <div className="overflow-hidden rounded-2xl border-2 border-[rgba(0,31,63,0.05)] bg-[rgba(226,231,255,0.4)] dark:bg-[#1c232a] sm:rounded-3xl lg:rounded-[30px]">
        <div className="grid grid-cols-1 items-center gap-2 px-4 py-6 sm:gap-4 sm:px-7 sm:py-8 md:px-9 md:py-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-stretch lg:gap-0 lg:p-0">
          {/* Text Content */}
          <div className="flex min-w-0 flex-col justify-center lg:px-10 lg:py-10 xl:px-12 xl:py-12">
            <h1 className="text-3xl font-bold leading-[1.1] text-[#001F3F] sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl dark:text-white">
              Web Founders USA -{" "}
              <span className="text-red-500">No.1 Digital Marketing Agency in USA</span>
            </h1>
            <p className="max-w-[689px] pt-4 text-sm font-semibold leading-relaxed sm:pt-5 sm:text-base md:pt-6 md:text-lg">
              Brands lose customers every day to slow websites, weak visibility,
              and outdated design. Web Founders USA, a trusted Website Design
              and Development Company and full-service top Digital Marketing
              Agencies in USA, rebuilds that momentum with powerful solutions.
            </p>
            <div className="flex flex-col gap-4 pt-6 sm:flex-row sm:items-center sm:pt-8 lg:pt-10">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <a className="flex items-center justify-center gap-2" href="#request-audit">
                  Contact Us <FaArrowRight />
                </a>
              </Button>
            </div>
          </div>

          {/* Stays in the layout so it cannot overlap the text at narrower widths. */}
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
