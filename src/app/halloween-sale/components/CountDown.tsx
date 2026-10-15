"use client";

import { useEffect, useRef, useState } from "react";
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

type CounterStatProps = {
  endPoint: string;
  number: number;
  title: string;
};

const CounterStat = ({ endPoint, number, title }: CounterStatProps) => {
  const statRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const stat = statRef.current;
    if (!stat) return undefined;

    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(stat);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={statRef}
      className="flex h-full min-w-0 flex-col items-center justify-center gap-2 rounded-2xl border border-gray-200/60 bg-white/60 px-2 py-4 text-center shadow-sm backdrop-blur-sm transition-shadow duration-300 hover:shadow-md sm:gap-3 sm:px-4 sm:py-5 md:px-5 md:py-6 lg:border-0 lg:bg-transparent lg:px-2 lg:shadow-none lg:backdrop-blur-0 lg:hover:shadow-none dark:border-gray-700/40 dark:bg-white/5 dark:lg:border-0 dark:lg:bg-transparent"
    >
      <h2 className="flex items-baseline font-extrabold text-[#001F3F] text-4xl leading-none sm:text-5xl lg:text-6xl dark:text-white">
        <SlotCounter
          startValue={0}
          value={number}
          duration={2}
          autoAnimationStart={isVisible}
        />
        <span className="ml-1 text-red-500">{endPoint}</span>
      </h2>
      <p className="max-w-full break-words text-xs font-semibold leading-snug text-muted-foreground sm:text-sm md:text-base">
        {title}
      </p>
    </div>
  );
};

const CountDown = () => {
  return (
    <div className="relative isolate mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid w-full grid-cols-2 items-stretch gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-6">
        {counterData.map(({ endPoint, id, number, title }) => (
          <CounterStat
            key={id}
            endPoint={endPoint}
            number={number}
            title={title}
          />
        ))}
      </div>
    </div>
  );
};

export default CountDown;
