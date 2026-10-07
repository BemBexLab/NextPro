"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoCall } from "react-icons/io5";

import { locationNavigation } from "@/data/navigation";
import { Button } from "@/components/ui/button";
import StickyHeader from "@/components/ui/stickyHeader";

const MobileMenu = dynamic(() => import("./mobileMenu"), {
  ssr: false,
});

const navigationLinks = [
  { id: 1, path: "/", lable: "Home" },
  { id: 2, path: "/about-us", lable: "About Us" },
  { id: 4, path: "/service/seo-services/", lable: "SEO Services" },
  { id: 3, path: "/service", lable: "Services" },
  { id: 5, path: "/portfolio", lable: "Our Work" },
  { id: 6, path: "/pricing", lable: "Pricing" },
  { id: 7, path: "/blog", lable: "Blog" },
  { id: 8, path: "/locations", lable: "Locations", children: locationNavigation },
];

const HalloweenHeader = ({ haveShadow, serviceLinks = [], seoSubServices = [] }) => {
  const pathname = usePathname();
  const mobileNavigationLinks = navigationLinks.map((link) => {
    if (link.lable === "SEO Services") {
      return { ...link, children: seoSubServices };
    }

    if (link.lable === "Services") {
      return { ...link, children: serviceLinks };
    }

    return link;
  });

  return (
    <StickyHeader>
      <header
        id="header"
        className="sticky top-0 z-40 w-full bg-[#F7F8FE] transition-[top] duration-300"
      >
        <div
          id="header-container"
          className={`${haveShadow ? "shadow-3xl dark:shadow-[0px_14px_21px_0px_rgba(0,0,0,0.3)]" : ""} ${
            pathname !== "/home-2"
              ? "[.header-pinned_&]:shadow-[0_12px_32px_rgba(15,23,42,0.12)]"
              : ""
          }`}
        >
          <div className="relative mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8">
            <span className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#072D7F] via-[#BF0B30] to-[#F59E0B]" />
            <div className="flex min-h-[76px] items-center justify-between gap-3 sm:min-h-[86px] xl:gap-6">
              <Link
                href="/"
                className="flex h-[58px] w-[136px] shrink-0 items-center rounded-xl outline-none transition-transform duration-200 hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-[#BF0B30] focus-visible:ring-offset-2 sm:h-[68px] sm:w-[166px] 2xl:h-[74px] 2xl:w-[184px]"
                aria-label="Web Founders USA home"
              >
                <video
                  className="block h-full w-full object-contain"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  aria-label="Web Founders USA"
                >
                  <source
                    src="/videos/4a94f1c960b6437fa042633d91c2a2d9.webm"
                    type="video/mp4"
                  />
                </video>
              </Link>

              <div className="hidden shrink-0 items-center gap-3 xl:flex 2xl:gap-4">
                <a
                  href="tel:+14704707392"
                  className="group flex items-center gap-2 rounded-full px-2 py-2 text-slate-700 outline-none transition-colors hover:text-[#072D7F] focus-visible:ring-2 focus-visible:ring-[#BF0B30] 2xl:gap-2.5"
                  aria-label="Call +1 470-470-7392"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#072D7F]/[0.07] text-[#072D7F] transition-colors group-hover:bg-[#072D7F] group-hover:text-white 2xl:h-10 2xl:w-10">
                    <IoCall className="h-4 w-4 2xl:h-[18px] 2xl:w-[18px]" />
                  </span>
                  <span className="text-[12px] font-bold tabular-nums xl:text-[13px]">
                    +1 470-470-7392
                  </span>
                </a>

                <Button
                  asChild
                  className="h-11 rounded-full bg-[#BF0B30] px-5 text-sm font-bold text-white shadow-[0_7px_18px_rgba(191,11,48,0.2)] transition-all hover:-translate-y-0.5 hover:bg-[#A60929] hover:shadow-[0_10px_24px_rgba(191,11,48,0.27)] focus-visible:ring-2 focus-visible:ring-[#BF0B30] focus-visible:ring-offset-2 2xl:px-6"
                >
                  <Link href="/contact-us">Let&apos;s Talk</Link>
                </Button>
              </div>

              <div className="flex items-center gap-2 sm:gap-3 xl:hidden">
                <a
                  href="tel:+14704707392"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#072D7F]/10 bg-white text-[#072D7F] shadow-sm transition-all hover:border-[#072D7F] hover:bg-[#072D7F] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BF0B30] sm:hidden"
                  aria-label="Call +1 470-470-7392"
                >
                  <IoCall className="h-4 w-4" />
                </a>
                <a
                  href="tel:+14704707392"
                  className="hidden items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-[12px] font-bold tabular-nums text-slate-700 shadow-sm transition-colors hover:border-[#072D7F]/30 hover:text-[#072D7F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BF0B30] sm:flex"
                  aria-label="Call +1 470-470-7392"
                >
                  <IoCall className="h-4 w-4 text-[#072D7F]" />
                  <span className="hidden md:inline">+1 470-470-7392</span>
                  <span className="md:hidden">Call</span>
                </a>
                <Button
                  asChild
                  className="hidden h-10 rounded-full bg-[#BF0B30] px-4 text-xs font-bold text-white shadow-[0_6px_16px_rgba(191,11,48,0.18)] transition-all hover:-translate-y-0.5 hover:bg-[#A60929] hover:shadow-[0_9px_22px_rgba(191,11,48,0.25)] focus-visible:ring-2 focus-visible:ring-[#BF0B30] focus-visible:ring-offset-2 sm:inline-flex"
                >
                  <Link href="/contact-us">Let&apos;s Talk</Link>
                </Button>
                <MobileMenu data={mobileNavigationLinks} />
              </div>
            </div>
          </div>
        </div>
      </header>
    </StickyHeader>
  );
};

export default HalloweenHeader;
