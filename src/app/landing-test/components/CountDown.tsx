"use client";
import React from "react";
import Image from "next/image";
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
    <div className="relative isolate w-full overflow-hidden bg-transparent px-[15px] pb-9">
      {/* <Image
        src="/Halloween Assets Task/image 28.webp"
        width={1024}
        height={1536}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-16 top-1/2 z-0 h-auto w-20 -translate-y-1/2 object-contain sm:w-28 lg:w-36"
      />
      <Image
        src="/Halloween Assets Task/image 25.webp"
        width={1014}
        height={567}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 top-1/2 z-0 h-auto w-32 -translate-y-1/2 object-contain sm:w-40 lg:w-56"
      /> */}
      <div className="relative z-10 flex w-full flex-wrap items-center justify-center gap-6 md:gap-10">
        {counterData.map(({ endPoint, id, number, title }) => {
          return (
            <div
              key={id}
              className="flex w-full flex-col items-center gap-[6px] md:w-auto md:flex-row md:items-center md:gap-[15px]"
            >
              <h2 className="font-extrabold text-muted-foreground text-5xl lg:text-6xl">
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
                {endPoint}
              </h2>
              <p className="w-fit font-semibold text-1xl text-muted-foreground md:max-w-none">
                {title}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CountDown;
