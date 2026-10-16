"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa6";
import Popup from "./Popup";

const HeroPopupTrigger = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <>
      <Button
        type="button"
        size="lg"
        className="w-full sm:w-auto"
        onClick={() => setIsPopupOpen(true)}
      >
        <span className="flex items-center justify-center gap-2">
          Contact Us <FaArrowRight aria-hidden="true" />
        </span>
      </Button>
      {isPopupOpen && <Popup onClose={() => setIsPopupOpen(false)} />}
    </>
  );
};

export default HeroPopupTrigger;
