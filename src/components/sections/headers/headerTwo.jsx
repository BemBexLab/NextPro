"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { IoCall } from "react-icons/io5";

import Logo from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import MobileMenu from "./mobileMenu";
import HeaderShortInfo from "./headerShortInfo";
import {
  Offcanvas,
  OffcanvasContent,
  OffcanvasOverlay,
  OffcanvasTrigger,
  OffcanvasClose,
} from "@/components/ui/offcanvas";
import StickyHeader from "@/components/ui/stickyHeader";

// ✅ Import real service data
import { services } from "@/data/services";

// ⚠️ Keep "lable" (not "label") to match MobileMenu expectations
const navigationLinks = [
  { id: 1, path: "/", lable: "Home" },
  { id: 2, path: "/about-us", lable: "About Us" },
  { id: 3, path: "/service", lable: "Service" },
  { id: 4, path: "/portfolio", lable: "Our Work" },
  { id: 5, path: "/pricing", lable: "Pricing Plans" },
  // { id: 6, path: "/blog", lable: "Blog" },
];

const HeaderTwo = ({ haveOvcanvsIcon, haveShadow }) => {
  const pathname = usePathname();
  const router = useRouter();

  const [openDropdown, setOpenDropdown] = useState(false);

  const isActive = (path) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  return (
    <StickyHeader>
      <header
        id="header"
        className="sticky top-0 w-full transition-[top] duration-300 z-40 bg-background"
      >
        <div
          id="header-container"
          className={`${
            haveShadow
              ? "dark:shadow-[0px_14px_21px_0px_rgba(0,0,0,0.3)] shadow-3xl"
              : ""
          }`}
        >
          <div
            className={`${
              pathname !== "/home-2"
                ? "[.header-pinned_&]:shadow-3xl dark:[.header-pinned_&]:shadow-[0px_14px_21px_0px_rgba(0,0,0,0.3)]"
                : null
            }`}
          >
            <div className="container mx-auto relative">
              <span className="border-t border-accent block"></span>
              <div className="flex justify-between items-center">
                <div className="py-5">
                  <Logo />
                </div>
                <nav className="xl:block hidden">
                  <ul className="flex items-center text-[17px] 2xl:gap-10 gap-6">
                    {navigationLinks.map(({ id, lable, path }) => {
                      const active = isActive(path);

                      // ✅ Fix: check for "Service" (not "Serv")
                      if (lable === "Service") {
                        return (
                          <li
                            className="pt-[43px] pb-[42px] relative"
                            key={id}
                            onMouseEnter={() => setOpenDropdown(true)}
                            onMouseLeave={() => setOpenDropdown(false)}
                          >
                            <span
                              className={`
                                font-semibold leading-[22px] flex items-center gap-1 cursor-pointer
                                relative transition-all duration-500
                                ${
                                  active
                                    ? "text-primary underline"
                                    : "text-muted-foreground"
                                }
                                hover:text-primary-foreground
                              `}
                              tabIndex={0}
                              onClick={() => setOpenDropdown((v) => !v)}
                            >
                              {lable}
                              <svg
                                className="ml-1 w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                viewBox="0 0 24 24"
                              >
                                <path d="M19 9l-7 7-7-7" />
                              </svg>
                            </span>

                            {/* Dropdown with real service data */}
                            <div
                              className={`absolute left-0 top-full w-72 rounded-xl shadow-2xl bg-white z-30 transition-all duration-200 ${
                                openDropdown
                                  ? "opacity-100 pointer-events-auto translate-y-0"
                                  : "opacity-0 pointer-events-none translate-y-2"
                              }`}
                            >
                              <ul className="py-3 max-h-[400px] overflow-y-auto custom-scrollbar">
                                {services.map((service) => (
                                  <li key={service.id}>
                                    <Link
                                      href={`/service/${service.id}`}
                                      className="block w-full text-left px-6 py-2 text-muted-foreground hover:text-primary-foreground hover:bg-gray-100 transition-colors"
                                      onClick={() => setOpenDropdown(false)}
                                    >
                                      {service.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </li>
                        );
                      }

                      // All other nav items
                      return (
                        <li className="pt-[43px] pb-[42px]" key={id}>
                          <Link
                            href={path}
                            className={`
                              font-semibold leading-[22px] flex items-center gap-1
                              relative transition-all duration-500
                              ${
                                active
                                  ? "text-primary underline underline-offset-4"
                                  : "text-muted-foreground"
                              }
                              hover:text-primary-foreground
                            `}
                          >
                            {lable}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
                <div className="hidden xl:flex items-center gap-5">
                  <a
                    href="tel:+14704707520"
                    className="flex items-center gap-3 group"
                  >
                    <div className="rounded-full bg-primary border-primary w-14 h-14 flex items-center justify-center animate-shake-pause group-hover:bg-primary/80 transition">
                      <div className="text-white flex items-center justify-center">
                        <IoCall size={30} />
                      </div>
                    </div>
                    <span className="text-base font-semibold text-primary group-hover:underline">
                      +1 (470) 470-7520
                    </span>
                  </a>

                  <Button asChild size="xl">
                    <Link className="text-foreground" href={"/contact-us"}>
                      Contact Us
                    </Link>
                  </Button>
                  <Offcanvas>
                    <OffcanvasTrigger>
                      <div
                        className={`${
                          haveOvcanvsIcon
                            ? "flex flex-col gap-3 cursor-pointer"
                            : "hidden"
                        }`}
                      >
                        <span className="h-[4px] w-10 bg-muted rounded-lg block"></span>
                        <span className="h-[4px] w-5 bg-muted rounded-lg block"></span>
                      </div>
                    </OffcanvasTrigger>
                    <OffcanvasOverlay />
                    <OffcanvasContent className="top-0">
                      <OffcanvasClose />
                      <HeaderShortInfo />
                    </OffcanvasContent>
                  </Offcanvas>
                </div>
                {/* ✅ MobileMenu is preserved EXACTLY as before */}
                <MobileMenu data={navigationLinks} />
              </div>
            </div>
          </div>
        </div>
      </header>
    </StickyHeader>
  );
};

export default HeaderTwo;