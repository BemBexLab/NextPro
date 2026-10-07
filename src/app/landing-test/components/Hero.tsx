import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="container mx-auto px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10 lg:py-10">
      <div className="overflow-x-clip overflow-y-visible rounded-2xl border-2 border-[rgba(0,31,63,0.05)] bg-[rgba(226,231,255,0.4)] dark:bg-[#1c232a] sm:rounded-3xl lg:rounded-[30px] lg:pl-[52px]">
        <div className="relative grid grid-cols-1 lg:grid-cols-2">
          {/* Text Content */}
          <div className="flex flex-col justify-center py-8 sm:py-10 lg:py-12">
            <h1 className="text-3xl font-bold leading-tight text-[#001F3F] sm:text-4xl md:text-5xl lg:text-6xl dark:text-white">
              Web Founders USA - <span className="text-red-500">No.1 Digital Marketing Agency in USA</span>
            </h1>
            <p className="max-w-[689px] pt-4 text-sm font-semibold leading-relaxed sm:pt-6 sm:text-base md:pt-7.5 md:text-lg">
              Brands lose customers every day to slow websites, weak visibility,
              and outdated design. Web Founders USA, a trusted Website Design
              and Development Company and full-service top Digital Marketing
              Agencies in USA, rebuilds that momentum with powerful solutions.
            </p>
            <div className="flex flex-col gap-4 pt-6 pb-4 sm:flex-row sm:items-center sm:gap-8 sm:pt-8 sm:pb-5 md:pt-10 md:pb-6 lg:pt-[55px] lg:pb-[22px] lg:gap-[32px]">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <a className="flex items-center justify-center gap-2" href="#request-audit">
                  Contact Us <FaArrowRight />
                </a>
              </Button>
            </div>
          </div>

          {/* Mobile/Tablet Image - visible below text */}
          <div className="relative block w-full px-4 pb-6 sm:px-6 sm:pb-8 md:px-8 md:pb-10 lg:hidden">
            <Image
              src="/Halloween Assets Task/Hero.webp"
              width={600}
              height={400}
              alt="Hero Image"
              className="h-auto w-full rounded-xl object-contain"
              priority
            />
          </div>

          {/* Desktop Image - positioned absolutely */}
          <div className="absolute -bottom-4 right-0 z-10 hidden w-1/2 lg:block">
            <Image
              src="/Halloween Assets Task/Hero.webp"
              width={600}
              height={400}
              alt="Hero Image"
              className="h-auto w-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
