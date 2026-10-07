import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="container h-auto py-10">
      <div className="overflow-x-clip overflow-y-visible rounded-[30px] border-2 border-[rgba(0,31,63,0.05)] bg-[rgba(226,231,255,0.4)] pl-4 pr-4 dark:bg-[#1c232a] lg:pl-[52px] lg:pr-0">
        <div className="relative grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col justify-center py-10">
            <h1 className="text-6xl font-bold text-[#001F3F]">
              Web Founders USA - No.1 Digital Marketing Agency in USA
            </h1>
            <p className="max-w-[689px] pt-7.5 font-semibold">
              Brands lose customers every day to slow websites, weak visibility,
              and outdated design. Web Founders USA, a trusted Website Design
              and Development Company and full-service top Digital Marketing
              Agencies in USA, rebuilds that momentum with powerful solutions.
            </p>
            <div className="flex flex-col gap-[32px] pb-[22px] pt-[55px] sm:flex-row sm:items-center">
              <Button asChild>
                <Link className="flex items-center gap-2" href="/contact-us">
                  Contact Us <FaArrowRight />
                </Link>
              </Button>
            </div>
          </div>

          <div className="absolute -bottom-4 right-0 z-10 hidden w-1/2 lg:block">
            <Image
              src="/Halloween Assets Task/Hero.webp"
              width={600}
              height={400}
              alt="Hero Image"
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
