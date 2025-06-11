"use client";
import SlideUp from "@/components/animations/slideUp";
import { Button } from "@/components/ui/button";
import Title from "@/components/ui/title";
import { pricingData } from "@/lib/fackData/pricingData";
import React, { useState } from "react";
import PriceCardTwo from "./priceCardTwo";
import SwipeButton from "./swipeButton";

const PriceThree = () => {
  const [isChecked, setChecked] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const togglePricing = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setChecked(!isChecked);
      setIsAnimating(false);
    }, 300);
  };

  return (
    <section className="lg:py-15 py-9">
      <div className="max-w-[1350px] mx-auto px-[15px]">
        <SlideUp>
          <div className="flex flex-col items-center">
            <Button variant="secondary">Pricing</Button>
            <Title size={"5xl"} className="pt-6 max-w-full text-center">
              The Right Plan for every Business
            </Title>
            <p className="pt-[26px] text-center max-w-[757px] font-semibold">
              Discover flexible and transparent pricing options designed to meet
              the diverse needs of businesses, whether you're a startup, small
              business, or enterprise.
            </p>
          </div>
        </SlideUp>
        <div className="pt-12.5">
          {/* <div>
            <SwipeButton
              isChecked={isChecked}
              setChecked={setChecked}
              togglePricing={togglePricing}
            />
          </div> */}
          <div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-7.5 pt-12.5">
              {pricingData.map(
                ({
                  additionalAdds,
                  id,
                  info,
                  isTag,
                  link,
                  plan_name,
                  price,
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
                    services={services}
                    cardThree={true}
                    isAnimating={isAnimating}
                    isChecked={isChecked}
                  />
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceThree;
