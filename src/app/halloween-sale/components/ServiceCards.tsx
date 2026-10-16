"use client";

import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { servicesDataThree } from "@/lib/fackData/serviceDataThree";

const cardStyles = [
  "bg-[#f0f5ff] text-[#3157d5]",
  "bg-[#effaf2] text-[#25834a]",
  "bg-[#f5efff] text-[#853fc3]",
  "bg-[#fff1ed] text-[#d34c31]",
];

const ServiceCards = ({ onServiceClick }: { onServiceClick: () => void }) => (
  <div className="grid h-full grid-cols-1 gap-4 min-[520px]:grid-cols-2 sm:gap-5">
    {servicesDataThree.map(({ id, icon_1, service_name }, index) => (
      <button
        key={id}
        type="button"
        onClick={onServiceClick}
        aria-label={`Request information about ${service_name}`}
        className="group flex min-h-[190px] flex-col items-start justify-between rounded-[1.4rem] border border-white/80 bg-white/75 p-5 text-left shadow-[0_12px_38px_rgba(15,35,75,0.08)] ring-1 ring-slate-200/60 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-[#BF0B30]/20 hover:bg-white hover:shadow-[0_18px_48px_rgba(15,35,75,0.13)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BF0B30] sm:min-h-[220px] sm:p-6"
      >
        <span
          className={`flex h-20 w-20 items-center justify-center rounded-2xl ${cardStyles[index % cardStyles.length]} transition-transform duration-300 group-hover:scale-105`}
        >
          {icon_1}
        </span>
        <span className="mt-7 flex w-full items-end justify-between gap-3 text-lg font-extrabold leading-snug text-[#0b2344] sm:text-xl">
          <span>{service_name}</span>
          <span
            aria-hidden="true"
            className="shrink-0 text-xl text-[#BF0B30] transition-transform duration-300 group-hover:translate-x-1"
          >
            <BsArrowUpRightCircleFill size={34} />
          </span>
        </span>
      </button>
    ))}
  </div>
);

export default ServiceCards;
