"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";

const AutoFaqJsonLd = dynamic(() => import("@/components/seo/AutoFaqJsonLd"));
const ContactPopup = dynamic(() => import("@/components/popupform/ContactPopup"));
const CustomCursor = dynamic(() => import("@/components/ui/customCursor"));
const ScrollCircle = dynamic(() => import("@/components/ui/scrollCircle"));
const Setting = dynamic(() => import("@/components/ui/setting"));

export default function ClientEnhancements() {
  const [isReady, setIsReady] = useState(false);
  const pathname = usePathname();

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

  const isTouchDevice =
    typeof window !== "undefined" &&
    window.matchMedia("(pointer: coarse)").matches;

  return (
    <>
      <AutoFaqJsonLd />
      {pathname !== "/landing-test" && <ContactPopup />}
      <Setting />
      {!isTouchDevice && <ScrollCircle />}
      {!isTouchDevice && <CustomCursor />}
    </>
  );
}
