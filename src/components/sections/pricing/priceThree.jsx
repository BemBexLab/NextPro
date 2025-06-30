"use client";
import SlideUp from "@/components/animations/slideUp";
import { Button } from "@/components/ui/button";
import Title from "@/components/ui/title";
import { pricingData } from "@/lib/fackData/pricingData";
import React, { useState } from "react";
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
  const [isChecked, setChecked] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const togglePricing = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setChecked(!isChecked);
      setIsAnimating(false);
    }, 300);
  };

  // Filter pricing data by category
  const filteredData = pricingData.filter(
    (plan) => plan.category === activeCategory
  );

  return (
    <section className="lg:py-15 py-9">
      <div className="max-w-[1350px] mx-auto px-[15px]">
        <SlideUp>
          <div className="flex flex-col items-center">
            <Button variant="secondary">Pricing</Button>
            <Title size={"5xl"} className="pt-6 max-w-full text-center">
              OUR PACKAGES
            </Title>
            <p className="pt-[18px] text-gray-600 text-center max-w-[757px] font-semibold">
              No matter what budget type you have – we welcome you
            </p>
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-3 justify-center items-center mt-8">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-md text-sm font-bold uppercase tracking-wide border transition ${
                    activeCategory === cat
                      ? "bg-primary text-white border-primary shadow"
                      : "bg-white text-primary border-transparent hover:bg-[#E2E7FF] hover:text-primary"
                  }`}
                  style={{ minWidth: 110 }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </SlideUp>
        <div className="pt-12.5">
          <div>
            <div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-y-10  pt-2 lg:px-20">
              {filteredData.length > 0 ? (
                filteredData.map(
  ({
    additionalAdds,
    id,
    info,
    isTag,
    link,
    plan_name,
    price,
    old_price, // <-- Add this
    services,
  }) => (
    <PriceCardTwo
      key={id}
      id={id}
      additionalAdds={additionalAdds}
      info={info}
      isTag={isTag}
      link={link}
      plan_name={plan_name}
      price={price}
      old_price={old_price} // <-- Pass as prop
      services={services}
      cardThree={true}
      isAnimating={isAnimating}
      isChecked={isChecked}
    />
  )
)

              ) : (
                <div className="col-span-full text-center text-gray-400 font-semibold">
                  No packages available in this category.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceThree;
