import React from "react";
import Link from "next/link";

const PriceCardTwo = ({ plan_name, price, services }) => {
  return (
    <div className="bg-white border-2 border-black rounded-[22px] flex flex-col justify-between p-8 min-h-[600px] w-[350px] transition mx-auto shadow-sm hover:shadow-md relative">
      {/* Plan Name */}
      <div>
        <div className="text-lg font-bold text-primary uppercase mb-6 tracking-wider leading-tight">
          {plan_name}
        </div>
        <div className="text-5xl font-extrabold text-black mb-5">${price}</div>
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
              <span className="mt-1 w-4 h-4 rounded-full bg-primary inline-block flex-shrink-0" />
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
  bg-primary text-white rounded-[7px] px-4 py-3 font-bold text-lg
  transition hover:bg-blue-900/90 absolute
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
