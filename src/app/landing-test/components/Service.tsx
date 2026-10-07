import Link from "next/link";
import Image from "next/image";
import SlideUp from "@/components/animations/slideUp";
import { Button } from "@/components/ui/button";
import Title from "@/components/ui/title";
import { servicesDataTwo } from "@/lib/fackData/servicesDataTwo";

// Mobile: horizontal scroll carousel. Tablet+: responsive grid.
const servicesCarouselClassName =
  "flex flex-nowrap snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-6 pt-2 sm:grid sm:grid-cols-2 sm:overflow-visible sm:snap-none sm:pb-0 sm:pt-0 lg:grid-cols-3 xl:grid-cols-4 [&::-webkit-scrollbar]:hidden";

// Mobile: 85vw width to show a "peek" of the next card. Tablet+: full column width.
const serviceSlideClassName =
  "w-[85vw] max-w-[340px] snap-center sm:w-full sm:max-w-none sm:snap-none group flex h-full flex-col items-center rounded-2xl border border-white/70 bg-white/55 p-5 text-center shadow-[0_8px_32px_rgba(31,38,135,0.08)] ring-1 ring-white/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/90 hover:bg-white/75 hover:shadow-[0_16px_40px_rgba(31,38,135,0.14)] dark:bg-gray-800/50 dark:border-gray-700/50 dark:ring-gray-700/30 dark:hover:bg-gray-800/70 dark:hover:border-gray-600 sm:p-6 lg:p-8";

const Services = () => {
  return (
    <section 
      className="relative isolate overflow-x-hidden bg-[#FAFBFE] py-12 dark:bg-gray-900 sm:py-16 lg:py-20" 
      id="services"
    >
      {/* <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-full bg-no-repeat"
        style={{
          backgroundImage: "url('/Halloween%20Assets%20Task/part-02.webp')",
          backgroundSize: "100% auto",
          backgroundPosition: "center bottom",
        }}
      /> */}

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative z-10">
          {/* Header Section */}
          <SlideUp>
            <div className="flex flex-col items-center">
              <Button variant="secondary" className="mb-3">Our Services</Button>
              <Title 
                size={"5xl"} 
                className="max-w-[869px] text-center text-3xl leading-tight sm:text-4xl lg:text-5xl dark:text-white"
              >
                A Complete Ecosystem for Design, Development &{" "}
                <span className="text-red-500">Digital Marketing</span>
              </Title>
            </div>
          </SlideUp>

          {/* Services Grid / Carousel */}
          <div className="relative pt-6 lg:pt-10">
            {/* Decorative Top-Right Image */}
            <Image
              src="/Halloween Assets Task/image 14.png"
              width={240}
              height={240}
              alt=""
              aria-hidden="true"
              className="pointer-events-none absolute -right-4 -top-4 z-20 hidden h-32 w-32 object-contain sm:block sm:-right-10 sm:-top-10 sm:h-48 sm:w-48 lg:-right-32 lg:-top-32 lg:h-64 lg:w-64"
            />
            
            <SlideUp>
              <div
                className={`${servicesCarouselClassName}
                  [&>*:nth-child(2)_.icon]:bg-[#32A5521A] [&>*:nth-child(2)_.icon]:text-green-600 
                  [&>*:nth-child(3)_.icon]:bg-[#A22EFE1A] [&>*:nth-child(3)_.icon]:text-purple-600 
                  [&>*:nth-child(4)_.icon]:bg-[#5A55791A] [&>*:nth-child(4)_.icon]:text-[#5A5579] dark:[&>*:nth-child(4)_.icon]:text-purple-400
                  [&>*:nth-child(5)_.icon]:bg-[#FF00001A] [&>*:nth-child(5)_.icon]:text-red-600 
                  [&>*:nth-child(6)_.icon]:bg-[#00A3FF1A] [&>*:nth-child(6)_.icon]:text-[#00A3FF] 
                  [&>*:nth-child(7)_.icon]:bg-[#FF00991A] [&>*:nth-child(7)_.icon]:text-[#FF0099] 
                  [&>*:nth-child(8)_.icon]:bg-[#009F961A] [&>*:nth-child(8)_.icon]:text-[#009F96]
                `}
              >
                {servicesDataTwo.map(({ id, icon_1, service_name, link }) => (
                  <div
                    key={id}
                    className={serviceSlideClassName}
                  >
                    <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[rgba(46,77,254,0.10)] p-4 icon transition-colors dark:bg-blue-500/10 sm:h-20 sm:w-20 sm:p-5 md:h-[85px] md:w-[85px] md:p-6">
                      <span className="text-2xl transition-all duration-500 group-hover:scale-90 sm:text-3xl">
                        {icon_1}
                      </span>
                    </div>
                    <span className="text-lg font-extrabold leading-[140%] text-muted-foreground multiline-hover dark:text-gray-200 sm:text-xl">
                      {service_name}
                    </span>
                  </div>
                ))}
              </div>
            </SlideUp>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <Image
          src="/Halloween Assets Task/image 15.webp"
          width={960}
          height={1600}
          alt=""
          className="absolute bottom-0 left-0 h-auto w-24 object-contain sm:w-40 lg:w-64"
        />
        <Image
          src="/Halloween Assets Task/image 16.webp"
          width={1210}
          height={866}
          alt=""
          className="absolute bottom-0 right-0 h-auto w-32 object-contain sm:w-48 lg:w-80"
        />
        
        {/* Floating Elements - Scaled down for mobile to prevent text obstruction */}
        <Image
          src="/Halloween Assets Task/image 24.png"
          width={160}
          height={160}
          alt=""
          className="absolute left-[4%] top-[18%] h-8 w-8 rotate-[-12deg] object-contain opacity-50 sm:h-12 sm:w-12 md:h-14 md:w-14"
        />
        <Image
          src="/Halloween Assets Task/image 24.png"
          width={160}
          height={160}
          alt=""
          className="absolute left-[24%] top-[57%] h-10 w-10 scale-x-[-1] rotate-[15deg] object-contain opacity-40 sm:h-14 sm:w-14 md:h-16 md:w-16"
        />
        <Image
          src="/Halloween Assets Task/image 24.png"
          width={160}
          height={160}
          alt=""
          className="absolute right-[8%] top-[50%] h-8 w-8 -rotate-6 object-contain opacity-40 sm:h-12 sm:w-12 md:h-14 md:w-14"
        />
        <Image
          src="/Halloween Assets Task/image 24.png"
          width={160}
          height={160}
          alt=""
          className="absolute right-[26%] bottom-[8%] h-10 w-10 rotate-12 object-contain opacity-30 sm:h-14 sm:w-14 md:h-20 md:w-20"
        />
        <Image
          src="/Halloween Assets Task/image 24.png"
          width={160}
          height={160}
          alt=""
          className="absolute left-[7%] bottom-[10%] h-10 w-10 -rotate-12 scale-x-[-1] object-contain opacity-40 sm:h-12 sm:w-12 md:h-14 md:w-14"
        />
      </div>
    </section>
  );
};

export default Services;
