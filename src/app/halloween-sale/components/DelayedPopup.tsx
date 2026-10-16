"use client";

import { useEffect, useState } from "react";
import Popup from "./Popup";

const DelayedPopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      if (document.body.style.overflow !== "hidden") {
        setIsOpen(true);
      }
    }, 2000);

    return () => window.clearTimeout(timeoutId);
  }, []);

  return isOpen ? <Popup onClose={() => setIsOpen(false)} /> : null;
};

export default DelayedPopup;
