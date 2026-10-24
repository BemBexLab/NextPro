"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoCall } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
import StickyHeader from "@/components/ui/stickyHeader";

const Header = () => {
  const pathname = usePathname();

  return (
    <StickyHeader>
      <header
        id="header"
        className="sticky top-0 z-50 w-full border-b border-white/30 bg-white/80 backdrop-blur-md transition-[top] duration-300 dark:bg-[#091116]/80"
      >
        {/* Top Gradient Border */}
        <span className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-[#072D7F] via-[#BF0B30] to-[#F59E0B]" />
        
        <div
          id="header-container"
          className={`transition-shadow duration-300 ${
            pathname !== "/home-2"
              ? "shadow-[0_4px_16px_rgba(15,23,42,0.04)] dark:shadow-[0_4px_16px_rgba(0,0,0,0.12)] [.header-pinned_&]:shadow-[0_8px_24px_rgba(15,23,42,0.08)]"
              : ""
          }`}
        >
          <div className="relative mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8">
            <div className="flex min-h-[72px] items-center justify-between gap-3 sm:min-h-[80px] md:min-h-[88px]">
              
              {/* Logo Section */}
              <Link
                href="/"
                className="flex h-12 w-auto shrink-0 items-center rounded-xl outline-none transition-transform duration-200 hover:scale-[1.02] focus-visible:ring-2 focus-visible:ring-[#BF0B30] focus-visible:ring-offset-2 sm:h-14 md:h-16 lg:h-[72px]"
                aria-label="Web Founders USA home"
              >
                <video
                  className="h-full w-auto object-contain"
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  aria-label="Web Founders USA animated logo"
                >
                  <source
                    src="/videos/4a94f1c960b6437fa042633d91c2a2d9.webm"
                    type="video/webm"
                  />
                </video>
              </Link>

              {/* Desktop Actions (xl and above) */}
              <div className="hidden shrink-0 items-center gap-4 xl:flex">
                <a
                  href="tel:+14704707392"
                  className="group flex items-center gap-2.5 rounded-full px-2 py-2 text-slate-700 outline-none transition-colors hover:text-[#072D7F] focus-visible:ring-2 focus-visible:ring-[#BF0B30] dark:text-slate-300 dark:hover:text-white"
                  aria-label="Call +1 470-470-7392"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#072D7F]/[0.07] text-[#A60929] transition-colors group-hover:bg-[#A60929] group-hover:text-white">
                    <IoCall className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-bold tabular-nums">
                    +1 470-470-7392
                  </span>
                </a>

                <a
                  href="#request-audit"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-b from-[#E90C14] to-[#A60607] px-6 text-sm font-bold text-white shadow-[0_7px_18px_rgba(191,11,48,0.2)] transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BF0B30] focus-visible:ring-offset-2"
                >
                  Get my Black Friday Deal
                  <FaArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>

              {/* Mobile & Tablet Actions (below xl) */}
              <div className="flex shrink-0 items-center gap-2 xl:hidden">
                {/* Phone Icon Only (for very small screens < 360px) */}
                <a
                  href="tel:+14704707392"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#072D7F]/10 bg-white text-[#072D7F] shadow-sm transition-all hover:border-[#072D7F] hover:bg-[#072D7F] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BF0B30] max-[359px]:flex min-[360px]:hidden dark:bg-[#091116] dark:text-white dark:hover:bg-[#072D7F]"
                  aria-label="Call +1 470-470-7392"
                >
                  <IoCall className="h-4 w-4" />
                </a>

                {/* Phone with Text (for screens >= 360px) */}
                <a
                  href="tel:+14704707392"
                  className="hidden min-[360px]:flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-[12px] font-bold tabular-nums text-slate-700 shadow-sm transition-colors hover:border-[#072D7F]/30 hover:text-[#072D7F] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BF0B30] sm:px-4 dark:border-white/10 dark:bg-[#091116] dark:text-slate-300 dark:hover:text-white"
                  aria-label="Call +1 470-470-7392"
                >
                  <IoCall className="h-4 w-4 text-[#072D7F] dark:text-[#E90C14]" />
                  <span className="hidden md:inline">+1 470-470-7392</span>
                  <span className="md:hidden">Call</span>
                </a>

                {/* Mobile CTA Button */}
                <a
                  href="#request-audit"
                  className="inline-flex h-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-[#E90C14] to-[#A60607] px-2 text-[11px] font-bold leading-tight text-white shadow-[0_6px_16px_rgba(191,11,48,0.18)] transition-all duration-200 hover:-translate-y-0.5 hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BF0B30] focus-visible:ring-offset-2 sm:h-11 sm:px-4 sm:text-xs"
                >
                  <span className="hidden min-[380px]:inline">Get my </span>
                  <span className="min-[380px]:hidden">Get </span>
                  Black Friday Deal
                  <FaArrowRight className="ml-1 h-3 w-3 sm:h-3.5 sm:w-3.5" />
                </a>
              </div>

            </div>
          </div>
        </div>
      </header>
    </StickyHeader>
  );
};

export default Header;