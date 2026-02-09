"use client";

import React from "react";
import Image from "next/image";

const Testimonials = () => {
  const [isPaused, setIsPaused] = React.useState(false);
  const cardsData = [
    {
      image:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
      name: "Briar Martin",
      handle: "@neilstellar",
      date: "April 20, 2025",
    },
    {
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
      name: "Avery Johnson",
      handle: "@averywrites",
      date: "May 10, 2025",
    },
    {
      image:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&auto=format&fit=crop&q=60",
      name: "Jordan Lee",
      handle: "@jordantalks",
      date: "June 5, 2025",
    },
    {
      image:
        "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=200&auto=format&fit=crop&q=60",
      name: "Avery Johnson",
      handle: "@averywrites",
      date: "May 10, 2025",
    },
  ];

  const CreateCard = ({ card }) => (
    <div
      className="p-4 rounded-xl mx-2 shadow-lg hover:shadow-xl transition-all duration-200 w-[350px] h-[180px] shrink-0 bg-white text-white "
      data-testimonial-card
    >
      <div className="flex gap-2">
        <div className="flex flex-col">
          <div className="flex items-center flex-row gap-1">
            <Image
              src="/service-testing/Star_5.svg"
              width={25}
              height={25}
              alt="Star rating"
            />
            <Image
              src="/service-testing/Star_5.svg"
              width={25}
              height={25}
              alt="Star rating"
            />
            <Image
              src="/service-testing/Star_5.svg"
              width={25}
              height={25}
              alt="Star rating"
            />
            <Image
              src="/service-testing/Star_5.svg"
              width={25}
              height={25}
              alt="Star rating"
            />
            <Image
              src="/service-testing/Star_5.svg"
              width={25}
              height={25}
              alt="Star rating"
            />
          </div>
        </div>
      </div>
      <p className="text-sm py-4 text-gray-800">
        Radiant made undercutting all of our competitors an absolute breeze.
      </p>
      <div className="flex items-center justify-between text-gray-500 text-xs">
        <div className="flex items-center gap-1">
          <img
            className="size-11 rounded-full"
            src={card.image}
            alt={`${card.name}'s profile`}
          />
          <p className="px-2 font-medium text-gray-800">{card.name}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative py-8">
      <div className="flex flex-col my-8">
        <p className="text-sm text-[#4C8C74] font-semibold text-center">
          Testimonial
        </p>
        <p className="text-center text-4xl font-semibold text-white mt-1">
          What Client Say About us
        </p>
      </div>
      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        
        .marquee-inner {
          animation: marqueeScroll 25s linear infinite;
        }

        .marquee-inner.paused {
          animation-play-state: paused;
        }

        .marquee-reverse {
          animation-direction: reverse;
        }
      `}</style>

      <div 
        className="marquee-row w-full mx-auto overflow-hidden relative" 
        onMouseEnter={() => setIsPaused(true)} 
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="absolute left-0 top-0 h-full w-10 z-10 pointer-events-none bg-gradient-to-r from-transparent to-transparent"></div>
        <div className={`marquee-inner flex transform-gpu min-w-[200%] py-4 gap-0 ${isPaused ? 'paused' : ''}`}>
          {[...cardsData, ...cardsData].map((card, index) => (
            <CreateCard key={`forward-${index}`} card={card} />
          ))}
        </div>
        <div className="absolute right-0 top-0 h-full w-10 md:w-20 z-10 pointer-events-none bg-gradient-to-l from-transparent to-transparent"></div>
      </div>

      <div 
        className="marquee-row w-full mx-auto overflow-hidden relative -mt-2" 
        onMouseEnter={() => setIsPaused(true)} 
        onMouseLeave={() => setIsPaused(false)}
      >
        <div className="absolute left-0 top-0 h-full w-10 z-10 pointer-events-none bg-gradient-to-r from-transparent to-transparent"></div>
        <div className={`marquee-inner marquee-reverse flex transform-gpu min-w-[200%] py-4 gap-0 ${isPaused ? 'paused' : ''}`}>
          {[...cardsData, ...cardsData].map((card, index) => (
            <CreateCard key={`reverse-${index}`} card={card} />
          ))}
        </div>
        <div className="absolute right-0 top-0 h-full w-10 md:w-20 z-10 pointer-events-none bg-gradient-to-l from-transparent to-transparent"></div>
      </div>
    </div>
  );
};

export { Testimonials };