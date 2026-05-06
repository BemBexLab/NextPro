"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const AutoFaqJsonLd = dynamic(() => import("@/components/seo/AutoFaqJsonLd"));
const ContactPopup = dynamic(() => import("@/components/popupform/ContactPopup"));
const CustomCursor = dynamic(() => import("@/components/ui/customCursor"));
const ScrollCircle = dynamic(() => import("@/components/ui/scrollCircle"));
const Setting = dynamic(() => import("@/components/ui/setting"));

export default function ClientEnhancements() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const start = () => setIsReady(true);

    if (typeof window === "undefined") {
      return undefined;
    }

    if ("requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(start, { timeout: 1500 });
      return () => window.cancelIdleCallback(idleId);
    }

    const timeoutId = window.setTimeout(start, 800);
    return () => window.clearTimeout(timeoutId);
  }, []);

  if (!isReady) {
    return null;
  }

  return (
    <>
      <AutoFaqJsonLd />
      <ContactPopup />
      <Setting />
      <ScrollCircle />
      <CustomCursor />
    </>
  );
}
