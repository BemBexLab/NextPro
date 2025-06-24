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

import { serviceDetailsData } from "@/lib/fackData/serviceDetailsData";

const navigationLinks = [
  { id: 1, path: "/home", lable: "Home" },
  { id: 2, path: "/about-us", lable: "About Us" },
  { id: 3, path: "/service-details", lable: "Services" },
  { id: 4, path: "/portfolio", lable: "Our Work" },
  { id: 5, path: "/pricing", lable: "Pricing Plans" },
  { id: 6, path: "/classic-with-sidebar", lable: "Blog" },
];

const serviceCategories = Object.keys(serviceDetailsData);

const HeaderTwo = ({ haveOvcanvsIcon, haveShadow }) => {
  const pathName = usePathname();
  const router = useRouter();

  // Dropdown state
  const [openDropdown, setOpenDropdown] = useState(false);

  // Helper: is link active (also supports subroutes)
  const isActive = (path) => {
    if (path === "/") return pathName === "/";
    return pathName.startsWith(path);
  };

  // Direct category click handler
  const handleServiceCategoryClick = (cat) => {
    setOpenDropdown(false);
    router.push(`/service-details?category=${encodeURIComponent(cat)}`);
    setTimeout(() => {
      const target = document.getElementById("service-detail-main");
      if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
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
              pathName !== "/home-2"
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
                      if (lable === "Services") {
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
                                ${active ? "text-blue-900 underline" : "text-muted-foreground"}
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
                            {/* Simple dropdown: just categories */}
                            <div
  className={`absolute left-0 top-full w-72 rounded-xl shadow-2xl bg-white z-30 transition-all duration-200 ${
    openDropdown
      ? "opacity-100 pointer-events-auto translate-y-0"
      : "opacity-0 pointer-events-none translate-y-2"
  }`}
  style={{ maxHeight: "500px" }} // Increased to 500px
>
  <ul className="py-3 overflow-y-auto max-h-[500px] custom-scrollbar">
    {serviceCategories.map((cat, i) => (
      <li key={i}>
        <button
          type="button"
          onClick={() => handleServiceCategoryClick(cat)}
          className="block w-full text-left px-6 py-2 text-muted-foreground hover:text-primary-foreground hover:bg-gray-100 transition-colors"
        >
          {cat}
        </button>
      </li>
    ))}
  </ul>
</div>


                          </li>
                        );
                      }
                      // All other menu items
                      return (
                        <li className="pt-[43px] pb-[42px]" key={id}>
                          <Link
                            href={path}
                            className={`
                              font-semibold leading-[22px] flex items-center gap-1
                              relative transition-all duration-500
                              ${active ? "text-primary underline underline-offset-4" : "text-muted-foreground"}
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
                    href="tel:+14702052274"
                    className="flex items-center gap-3 group"
                  >
                    <div className="rounded-full bg-primary border-primary w-14 h-14 flex items-center justify-center animate-shake-pause group-hover:bg-primary/80 transition">
                      <div className="text-white flex items-center justify-center">
                        <IoCall size={30} />
                      </div>
                    </div>
                    <span className="text-base font-semibold text-primary group-hover:underline">
                      +1 (470) 205-2274
                    </span>
                  </a>

                  <Button asChild size="xl">
                    <Link className="text-foreground" href={"/contact-us"}>
                      {" "}
                      Contact Us{" "}
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
