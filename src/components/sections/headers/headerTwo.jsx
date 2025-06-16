"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Logo from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
// REMOVE this line: import { menuList } from '@/lib/fackData/menuList'
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

// Define your flat navigation here
const navigationLinks = [
  { id: 1, path: "/", lable: "Home" },
  { id: 2, path: "/about-us", lable: "About Us" },
  { id: 3, path: "/services", lable: "Services We Offer" }, // The dropdown!
  { id: 4, path: "/portfolio", lable: "Our Work" },
  { id: 5, path: "/pricing", lable: "Pricing Plans" },
  { id: 6, path: "/career", lable: "Career" },
];

const HeaderTwo = ({ haveOvcanvsIcon, haveShadow }) => {
  const pathName = usePathname();
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
                  <ul className="flex items-center 2xl:gap-12.5 gap-7">
                    {navigationLinks.map(({ id, lable, path }) => {
                      // Handle dropdown for Services We Offer
                      if (lable === "Services We Offer") {
                        return (
                          <li
                            className="pt-[43px] pb-[42px] relative group"
                            key={id}
                          >
                            <span className="font-semibold leading-[22px] flex items-center gap-1 text-muted-foreground relative transition-all duration-500 hover:text-primary-foreground cursor-pointer">
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
                            {/* Dropdown */}
                            <div className="absolute left-0 top-full w-56 rounded-xl shadow-2xl bg-white z-30 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 translate-y-2 pointer-events-none group-hover:pointer-events-auto">
                              <ul className="py-3">
                                <li>
                                  <Link
                                    href="/services"
                                    className="block px-6 py-2 text-muted-foreground hover:text-primary-foreground hover:bg-gray-100 transition-colors"
                                  >
                                    Services
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    href="/service-details"
                                    className="block px-6 py-2 text-muted-foreground hover:text-primary-foreground hover:bg-gray-100 transition-colors"
                                  >
                                    Service Details
                                  </Link>
                                </li>
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
                            className="font-semibold leading-[22px] flex items-center gap-1 text-muted-foreground relative transition-all duration-500 hover:text-primary-foreground"
                          >
                            {lable}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
                <div className="hidden xl:flex items-center gap-5">
                  <Button asChild size="xl">
                    <Link className="text-foreground" href={"/contact-us"}>
                      {" "}
                      Let’s Talk{" "}
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
                <MobileMenu data={navigationLinks} />{" "}
                {/* Pass new links to mobile too */}
              </div>
            </div>
          </div>
        </div>
      </header>
    </StickyHeader>
  );
};

export default HeaderTwo;
