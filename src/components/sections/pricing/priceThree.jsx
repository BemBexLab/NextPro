"use client";

import { useState } from "react";
import {
  FaBullhorn,
  FaCartShopping,
  FaChartSimple,
  FaDesktop,
  FaGear,
  FaLayerGroup,
  FaPenNib,
  FaRegCirclePlay,
} from "react-icons/fa6";
import SlideUp from "@/components/animations/slideUp";
import { Button } from "@/components/ui/button";
import { pricingData } from "@/lib/fackData/pricingData";
import PriceCardTwo from "./priceCardTwo";

const categories = [
  { label: "Logo", icon: FaPenNib },
  { label: "E-Commerce", icon: FaCartShopping },
  { label: "Website Design", icon: FaDesktop },
  { label: "SMM", icon: FaBullhorn },
  { label: "Video Animation", icon: FaRegCirclePlay },
  { label: "SEO", icon: FaChartSimple },
  { label: "Maintenance", icon: FaGear },
  { label: "Branding", icon: FaLayerGroup },
];

const PriceThree = () => {
  const [activeCategory, setActiveCategory] = useState("Logo");
  const filteredData = pricingData.filter(
    (plan) => plan.category === activeCategory,
  );

  return (
    <section className="w-full py-10 sm:py-12 lg:py-15">
      <div className="mx-auto w-[92%] max-w-[1400px]">
        <SlideUp>
          <div className="flex min-w-0 flex-col items-center">
            <Button
              variant="secondary"
              className="h-9 max-h-none rounded-full border-0 bg-[#eaf0ff] px-5 py-2 text-[12px] font-bold text-[#2d60b8] shadow-[0_4px_12px_rgba(45,96,184,0.12)] hover:bg-[#e1eaff] hover:text-[#24539f] sm:text-[13px]"
            >
              Pricing
            </Button>
            <h1 className="max-w-full break-words pt-4 text-center text-4xl font-bold leading-[1.05] tracking-[-0.04em] sm:pt-5 sm:text-5xl lg:text-6xl">
              <span className="text-[#102f5b]">OUR </span>
              <span className="text-[#e5002d]">PACKAGES</span>
            </h1>
            <p className="mt-2 max-w-[800px] text-center text-lg font-semibold leading-relaxed text-[#4e5d73] sm:mt-3">
              No matter what budget type you have – we welcome you
            </p>

            <div
              className="mt-6 flex w-full max-w-[1307px] flex-wrap items-center justify-center gap-2.5 sm:mt-8 sm:gap-3"
              aria-label="Pricing categories"
            >
              {categories.map(({ label, icon: Icon }) => {
                const isActive = activeCategory === label;

                return (
                  <button
                    key={label}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveCategory(label)}
                    className={`inline-flex min-h-14 items-center justify-center gap-2.5 whitespace-nowrap rounded-[7px] border px-6 py-3 text-[13px] font-extrabold uppercase leading-none tracking-tight transition sm:min-h-10 sm:px-8 sm:text-[14px] ${
                      isActive
                        ? "border-[#12376f] bg-[#12376f] text-white shadow-[0_4px_10px_rgba(18,55,111,0.18)]"
                        : "border-[#e1e8f0] bg-white text-[#17345f] hover:border-[#b8c8dc] hover:bg-[#f5f8fc]"
                    }`}
                  >
                    <Icon className="h-5 w-5 shrink-0 sm:h-6 sm:w-6" />
                    <span>{label}</span>
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
                ({ id, plan_name, price, old_price, services }, index) => (
                  <PriceCardTwo
                    key={id}
                    plan_name={plan_name}
                    price={price}
                    old_price={old_price}
                    services={services}
                    cardIndex={index}
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
