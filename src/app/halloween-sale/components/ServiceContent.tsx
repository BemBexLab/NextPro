"use client";

import { useState } from "react";
import Image from "next/image";
import Reveal from "./Reveal";
import Popup from "./Popup";
import ServiceCards from "./ServiceCards";
import ServicePopupTrigger from "./ServicePopupTrigger";

const ServiceContent = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <div className="grid items-stretch gap-7 lg:grid-cols-[1.12fr_0.88fr] lg:gap-8">
        <Reveal>
          <ServiceCards onServiceClick={() => setIsPopupOpen(true)} />
        </Reveal>

        <Reveal>
          <aside className="relative flex min-h-[420px] flex-col items-center justify-between overflow-hidden rounded-[1.75rem] border border-white/70 bg-gradient-to-br from-[#091a36] via-[#102c57] to-[#173b72] px-6 pb-7 pt-8 text-center shadow-[0_24px_70px_rgba(9,26,54,0.2)] sm:min-h-[470px] sm:px-9 sm:pb-9">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[#f15a24]/25 blur-3xl"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-[#bf0b30]/30 blur-3xl"
            />

            <div className="relative z-10">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#ffb17e] sm:text-sm">
                Your Website Project, Made Clear
              </p>
              <h3 className="mt-2 text-2xl font-bold leading-tight tracking-wide text-white sm:text-3xl">
                Let&apos;s build your next website
              </h3>
            </div>

            <div className="relative my-3 h-[210px] w-full max-w-[390px] flex-1 sm:h-[260px]">
              <Image
                src="/Halloween Assets Task/image 16.webp"
                alt="Glowing Halloween pumpkins beside a haunted castle"
                fill
                sizes="(max-width: 1023px) 90vw, 38vw"
                className="object-contain drop-shadow-[0_18px_30px_rgba(0,0,0,0.22)]"
              />
            </div>

            <div className="relative z-10 w-full">
              <p className="mx-auto mb-5 max-w-md text-sm leading-relaxed text-white">
                Tell us what your website needs to do, and we&apos;ll help shape the design and development plan.
              </p>
              <ServicePopupTrigger onClick={() => setIsPopupOpen(true)} />
            </div>
          </aside>
        </Reveal>
      </div>

      {isPopupOpen && <Popup onClose={() => setIsPopupOpen(false)} />}
    </>
  );
};

export default ServiceContent;
