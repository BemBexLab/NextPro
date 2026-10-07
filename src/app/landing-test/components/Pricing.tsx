"use client";

import { useState } from "react";
import Image from "next/image";
import SlideUp from "@/components/animations/slideUp";
import { Button } from "@/components/ui/button";
import { pricingData } from "@/lib/fackData/pricingData2";
import PriceCardTwo from "@/components/sections/pricing/priceCardTwo";

const categories = [
  "Logo",
  "E-Commerce",
  "Website Design",
  "SMM",
  "Video Animation",
  "SEO",
  "Maintenance",
  "Branding",
];

const planImages = [
  "/Halloween Assets Task/image 28.webp",
  "/Halloween Assets Task/image 29.webp",
  "/Halloween Assets Task/image 20.webp",
];

const Pricing = () => {
  const [activeCategory, setActiveCategory] = useState("Logo");
  const filteredData = pricingData.filter(
    (plan) => plan.category === activeCategory,
  );

  return (
    <section className="relative isolate w-full overflow-hidden bg-[#FAFBFE] py-10 dark:bg-gray-900 sm:py-12 lg:py-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-full bg-no-repeat"
        style={{
          backgroundImage: "url('/Halloween%20Assets%20Task/part-01.webp')",
          backgroundSize: "100% auto",
          backgroundPosition: "center bottom",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] overflow-hidden"
      >
        <Image
          src="/Halloween Assets Task/image 24.png"
          width={160}
          height={160}
          alt=""
          className="absolute left-[5%] top-[14%] h-7 w-7 -rotate-12 object-contain opacity-35 sm:h-10 sm:w-10 lg:h-14 lg:w-14"
        />
        <Image
          src="/Halloween Assets Task/image 24.png"
          width={160}
          height={160}
          alt=""
          className="absolute right-[7%] top-[21%] h-9 w-9 scale-y-[-1] rotate-6 object-contain opacity-30 sm:h-12 sm:w-12 lg:h-16 lg:w-16"
        />
        <Image
          src="/Halloween Assets Task/image 24.png"
          width={160}
          height={160}
          alt=""
          className="absolute left-[19%] bottom-[22%] h-6 w-6 rotate-[18deg] object-contain opacity-25 sm:h-9 sm:w-9 lg:h-12 lg:w-12"
        />
        <Image
          src="/Halloween Assets Task/image 24.png"
          width={160}
          height={160}
          alt=""
          className="absolute right-[24%] bottom-[12%] h-8 w-8 -rotate-6 object-contain opacity-30 sm:h-11 sm:w-11 lg:h-14 lg:w-14"
        />
        <Image
          src="/Halloween Assets Task/image 24.png"
          width={160}
          height={160}
          alt=""
          className="absolute left-[53%] top-[42%] h-5 w-5 scale-y-[-1] rotate-[-20deg] object-contain opacity-20 sm:h-8 sm:w-8 lg:h-10 lg:w-10"
        />
      </div>
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <SlideUp>
          <div className="flex min-w-0 flex-col items-center">
            <Button variant="secondary" className="mb-3">
              Pricing
            </Button>
            <h1 className="max-w-full break-words text-center text-3xl font-extrabold leading-[120%] text-[#001F3F] dark:text-white sm:text-4xl lg:text-5xl">
              OUR <span className="text-red-500">PACKAGES</span>
            </h1>
            <p className="max-w-[757px] pt-3 text-center text-sm font-semibold leading-relaxed text-gray-600 dark:text-gray-300 sm:text-base">
              No matter what budget type you have – we welcome you
            </p>

            {/* Category Filter Buttons */}
            <div
              className="mt-6 flex w-full snap-x snap-mandatory gap-2 overflow-x-auto pb-2 [scrollbar-width:none] sm:mt-8 sm:flex-wrap sm:justify-center sm:overflow-visible sm:snap-none [&::-webkit-scrollbar]:hidden"
              aria-label="Pricing categories"
            >
              {categories.map((category) => {
                const isActive = activeCategory === category;

                return (
                  <button
                    key={category}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveCategory(category)}
                    className={`min-w-0 shrink-0 snap-center rounded-lg border px-3 py-2 text-xs font-bold uppercase tracking-wide transition-all duration-300 sm:px-4 sm:text-sm md:text-base ${
                      isActive
                        ? "border-primary bg-primary text-white shadow-md"
                        : "border-gray-200 bg-white text-[#001F3F] hover:bg-[#E2E7FF] hover:text-primary dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
                    }`}
                  >
                    <span className="whitespace-nowrap">{category}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </SlideUp>

        {/* Pricing Cards Container */}
        <div className="relative pt-8 sm:pt-10 lg:pt-12">
          {/* Left Edge Fade - mobile only */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-4 bg-gradient-to-r from-[#FAFBFE] to-transparent md:hidden dark:from-gray-900" />
          
          {/* Right Edge Fade - mobile only */}
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-4 bg-gradient-to-l from-[#FAFBFE] to-transparent md:hidden dark:from-gray-900" />

          {/* Mobile: Horizontal Scroll | Tablet+: Grid */}
          <div
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-4 [scrollbar-width:none] md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:snap-none md:pb-0 xl:grid-cols-3 xl:gap-8 [&::-webkit-scrollbar]:hidden"
            aria-live="polite"
          >
            {filteredData.length > 0 ? (
              filteredData.map(
                ({ id, plan_name, price, old_price, services }, index) => (
                  <div
                    key={id}
                    className="w-[85vw] min-w-[300px] max-w-[360px] shrink-0 snap-center md:w-full md:min-w-0 md:max-w-none"
                  >
                    <PriceCardTwo
                      plan_name={plan_name}
                      price={price}
                      old_price={old_price}
                      services={services}
                      imageSrc={planImages[index % planImages.length]}
                      auditHref="#request-audit"
                    />
                  </div>
                ),
              )
            ) : (
              <div className="col-span-full w-full py-8 text-center font-semibold text-gray-400">
                No packages available in this category.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
