"use client";

import { useState } from "react";
import SlideUp from "@/components/animations/slideUp";
import { Button } from "@/components/ui/button";
import { pricingData } from "@/lib/fackData/pricingData";
import PriceCardTwo from "./priceCardTwo";

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

const PriceThree = () => {
  const [activeCategory, setActiveCategory] = useState("Logo");
  const filteredData = pricingData.filter(
    (plan) => plan.category === activeCategory,
  );

  return (
    <section className="w-full py-10 sm:py-12 lg:py-15">
      <div className="mx-auto w-[92%] max-w-[1350px]">
        <SlideUp>
          <div className="flex min-w-0 flex-col items-center">
            <Button variant="secondary">Pricing</Button>
            <h1 className="max-w-full break-words pt-4 text-center text-3xl font-extrabold leading-[120%] text-muted-foreground sm:pt-6 sm:text-4.5xl sm:leading-[130%] lg:text-5xl lg:leading-[140%]">
              OUR PACKAGES
            </h1>
            <p className="max-w-[757px] pt-4 text-center text-sm font-semibold leading-relaxed text-gray-600 sm:pt-[18px] sm:text-base">
              No matter what budget type you have – we welcome you
            </p>

            <div
              className="mt-6 grid w-full max-w-5xl grid-cols-2 gap-2 min-[480px]:grid-cols-3 sm:mt-8 sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-3"
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
                    className={`min-w-0 rounded-md border px-2 py-2 text-xs font-bold uppercase tracking-wide transition sm:min-w-[110px] sm:px-4 sm:text-sm ${
                      isActive
                        ? "border-primary bg-primary text-white shadow"
                        : "border-transparent bg-white text-primary hover:bg-[#E2E7FF] hover:text-primary"
                    }`}
                  >
                    <span className="break-words">{category}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </SlideUp>

        <div className="pt-8 sm:pt-10 lg:pt-12.5">
          <div
            className="grid min-w-0 grid-cols-1 gap-x-6 gap-y-8 md:grid-cols-2 md:gap-y-10 xl:grid-cols-3 xl:gap-x-8"
            aria-live="polite"
          >
            {filteredData.length > 0 ? (
              filteredData.map(
                ({ id, plan_name, price, old_price, services }) => (
                  <PriceCardTwo
                    key={id}
                    plan_name={plan_name}
                    price={price}
                    old_price={old_price}
                    services={services}
                  />
                ),
              )
            ) : (
              <div className="col-span-full py-8 text-center font-semibold text-gray-400">
                No packages available in this category.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceThree;
