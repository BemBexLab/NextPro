import React from "react";
import Link from "next/link";

import { FaCircleCheck } from "react-icons/fa6";

const PriceCardTwo = ({ plan_name, price, services, old_price }) => {
  return (
    <div className="bg-white border-2 border-black rounded-[22px] flex flex-col justify-between p-8 min-h-[600px] w-[350px] transition mx-auto shadow-sm hover:shadow-md relative">
      {/* Plan Name */}
      <div>
        <div>
  <div className="text-lg font-bold text-[#BF0B30] uppercase mb-6 tracking-wider leading-tight">
    {plan_name}
  </div>
  <div className="relative inline-block mb-5">
    {/* "NEW" label above current price */}
    <span className="absolute -top-4 left-0 text-xs font-semibold text-green-600 tracking-wide">
      NOW
    </span>
    <span className="text-5xl font-extrabold text-black">${price}</span>
    {old_price && (
      <>
        {/* "OLD" label above old price */}
        {/* <span className="absolute -top-4 -right-12 text-xs font-semibold text-gray-400 tracking-wide">
          WAS
        </span> */}
        <span className="absolute top-1 -right-12 text-lg text-black/90 font-bold line-through">
          ${old_price}
        </span>
      </>
    )}
  </div>
</div>

        
        {/* Service List with custom scrollbar */}
        <ul
          className="
            text-base text-black space-y-3 mb-8 min-h-[210px] max-h-[210px] overflow-y-auto pr-1
            [&::-webkit-scrollbar]:w-1
            [&::-webkit-scrollbar-thumb]:bg-[#101129]
            [&::-webkit-scrollbar-thumb]:rounded-full
            [&::-webkit-scrollbar-track]:bg-[#e5e7eb]
            scrollbar-thin
            scrollbar-thumb-[#101129]
            scrollbar-track-[#e5e7eb]
          "
        >
          {services.map((service, idx) => (
            <li
              key={idx}
              className="flex items-start gap-3 leading-tight text-gray-900"
            >
              <FaCircleCheck className="mt-1 w-4 h-4 text-primary flex-shrink-0 inline-block" />

              <span>
                {typeof service === "string" ? service : service.service}
              </span>
            </li>
          ))}
        </ul>
        <hr className="border-t border-gray-300 mb-4" />
      </div>
      {/* Footer Area */}
      <div className="flex flex-col relative pb-12">
        <div className="flex items-end justify-between mb-3 w-full">
          <div>
            <div className="text-[14px] font-bold text-primary leading-none mb-1">
              Speak with us
            </div>
            <a
              href="tel:+14702052274"
              className="text-[16px] font-medium text-black leading-none hover:text-primary transition"
            >
              +1 (470) 205-2274
            </a>
          </div>

          <Link href="/contact-us">
            <span className="text-[18px] font-extrabold text-primary leading-none hover:underline cursor-pointer">
              Chat Now
            </span>
          </Link>
        </div>
        {/* Overlapping Button */}
        <Link
          href="/contact-us"
          className="
  w-[90%] left-1/2 -translate-x-1/2
  bg-[#BF0B30] text-white rounded-[7px] px-4 py-3 font-bold text-lg
  transition hover:bg-[#BF0B30]/90 absolute
  -bottom-14
  shadow-md flex justify-center items-center
"
          style={{ zIndex: 10 }}
        >
          Place Your Order
        </Link>
      </div>
    </div>
  );
};

export default PriceCardTwo;
