"use client";

import { useState } from "react";
import Popup from "./Popup";

const SubscribePopupTrigger = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsPopupOpen(true)}
        className="group flex min-h-12 min-w-[260px] max-w-full items-center justify-center gap-2.5 whitespace-nowrap rounded-full border-2 border-[#BF0B30] bg-[#BF0B30] px-6 py-3.5 font-bold text-white transition-all duration-300 hover:bg-transparent hover:text-[#BF0B30] sm:min-w-[280px] sm:px-8 sm:py-4"
      >
        Schedule a Meeting
      </button>
      {isPopupOpen && <Popup onClose={() => setIsPopupOpen(false)} />}
    </>
  );
};

export default SubscribePopupTrigger;
