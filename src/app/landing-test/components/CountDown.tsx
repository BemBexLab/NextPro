"use client";

import React from "react";
import SlotCounter from "react-slot-counter";

const counterData = [
  {
    id: 1,
    number: 5,
    endPoint: "k+",
    title: "Projects Delivered",
  },
  {
    id: 2,
    number: 4.9,
    endPoint: "k+",
    title: "Happy Clients",
  },
  {
    id: 3,
    number: 95,
    endPoint: "%",
    title: "Success Rate",
  },
  {
    id: 4,
    number: 15,
    endPoint: "x",
    title: "Growth in Performance",
  },
];

const CountDown = () => {
  return (
    <div className="relative isolate w-full overflow-hidden px-4 pb-9 sm:px-6 lg:px-8">
      {/* Left Edge Fade - mobile only */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-6 bg-gradient-to-r from-white to-transparent md:hidden dark:from-gray-900" />
      
      {/* Right Edge Fade - mobile only */}
      <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-6 bg-gradient-to-l from-white to-transparent md:hidden dark:from-gray-900" />

      {/* Scrollable container: horizontal scroll on mobile, flex-wrap on md+ */}
      <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pb-4 [scrollbar-width:none] md:flex-wrap md:justify-center md:overflow-visible md:snap-none md:gap-6 lg:gap-10 [&::-webkit-scrollbar]:hidden">
        {counterData.map(({ endPoint, id, number, title }) => (
          <div
            key={id}
            className="flex w-[75vw] min-w-[260px] max-w-[320px] shrink-0 snap-center flex-col items-center justify-center gap-2 rounded-2xl border border-gray-200/60 bg-white/60 px-5 py-6 text-center shadow-sm backdrop-blur-sm transition-all duration-300 hover:shadow-md md:w-auto md:min-w-0 md:max-w-none md:flex-row md:items-center md:gap-4 md:border-0 md:bg-transparent md:px-0 md:py-0 md:shadow-none md:backdrop-blur-0 md:hover:shadow-none lg:gap-5 dark:border-gray-700/40 dark:bg-white/5 dark:md:border-0 dark:md:bg-transparent"
          >
            <h2 className="flex items-baseline font-extrabold text-[#001F3F] text-4xl leading-none sm:text-5xl lg:text-6xl dark:text-white">
              <SlotCounter
                startValue={0}
                value={number}
                debounceDelay={5000}
                duration={2}
                animateOnVisible={{
                  triggerOnce: true,
                  rootMargin: "0px 0px -100px 0px",
                }}
              />
              <span className="ml-1 text-red-500 text-2xl sm:text-3xl lg:text-4xl">{endPoint}</span>
            </h2>
            <p className="w-fit text-sm font-semibold text-muted-foreground sm:text-base md:max-w-[140px] md:text-left lg:max-w-none">
              {title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountDown;