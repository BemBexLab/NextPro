"use client";

import React, { useState } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoCall } from "react-icons/io5";

import Logo from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import StickyHeader from "@/components/ui/stickyHeader";

const MobileMenu = dynamic(() => import("./mobileMenu"), {
  ssr: false,
});

const navigationLinks = [
  { id: 1, path: "/", lable: "Home" },
  { id: 2, path: "/about-us", lable: "About Us" },
  { id: 4, path: "/service/seo-services/", lable: "SEO Services" },
  { id: 3, path: "/service", lable: "Service" },
  { id: 5, path: "/portfolio", lable: "Our Work" },
  { id: 6, path: "/pricing", lable: "Pricing Plans" },
  { id: 7, path: "/blog", lable: "Blog" },
];

const HeaderTwo = ({ haveShadow, serviceLinks = [], seoSubServices = [] }) => {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState(null);

  const isActive = (path) => {
    if (path === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(path);
  };

  return (
    <StickyHeader>
      <header
        id="header"
        className="sticky top-0 z-40 w-full overflow-x-clip bg-background transition-[top] duration-300"
      >
        <div
          id="header-container"
          className={`${
            haveShadow
              ? "shadow-3xl dark:shadow-[0px_14px_21px_0px_rgba(0,0,0,0.3)]"
              : ""
          }`}
        >
          <div
            className={`${
              pathname !== "/home-2"
                ? "[.header-pinned_&]:shadow-3xl dark:[.header-pinned_&]:shadow-[0px_14px_21px_0px_rgba(0,0,0,0.3)]"
                : ""
            }`}
          >
            <div className="relative mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-8">
              <span className="block border-t border-accent"></span>
              <div className="flex min-h-[72px] items-center justify-between gap-3 sm:min-h-[80px] xl:gap-4">
                <div className="w-[140px] shrink-0 py-2 sm:w-[170px] lg:w-[190px] xl:w-[150px] 2xl:w-[190px] [&>div]:h-[56px] [&>div]:w-full sm:[&>div]:h-[64px] 2xl:[&>div]:h-[76px]">
                  <Logo />
                </div>

                <nav className="hidden min-w-0 xl:block">
                  <ul className="flex items-center gap-3 whitespace-nowrap text-sm 2xl:gap-7 2xl:text-base">
                    {navigationLinks.map(({ id, lable, path }) => {
                      const active = isActive(path);

                      if (lable === "Service") {
                        return (
                          <li
                            className="relative py-8 2xl:py-9"
                            key={id}
                            onMouseEnter={() => setOpenDropdown("service")}
                            onMouseLeave={() => setOpenDropdown(null)}
                          >
                            <Link
                              href={path}
                              className={`relative flex items-center gap-0.5 font-semibold leading-[22px] transition-all duration-500 ${
                                active ? "text-primary underline" : "text-muted-foreground"
                              } hover:text-primary-foreground`}
                              onClick={() => setOpenDropdown(null)}
                            >
                              {lable}
                              <svg
                                className="h-4 w-4 shrink-0 2xl:ml-0.5 2xl:h-5 2xl:w-5"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                viewBox="0 0 24 24"
                              >
                                <path d="M19 9l-7 7-7-7" />
                              </svg>
                            </Link>

                            <div
                              className={`absolute left-0 top-full z-30 w-[840px] max-w-[calc(100vw-2rem)] rounded-xl bg-white shadow-2xl transition-all duration-200 ${
                                openDropdown === "service"
                                  ? "pointer-events-auto translate-y-0 opacity-100"
                                  : "pointer-events-none translate-y-2 opacity-0"
                              }`}
                            >
                              <ul className="custom-scrollbar grid max-h-[min(70vh,420px)] grid-cols-3 gap-1 overflow-y-auto overflow-x-hidden whitespace-normal p-3">
                                {serviceLinks.map((service) => (
                                  <li key={service.id}>
                                    <Link
                                      href={service.path}
                                      title={service.title}
                                      className="block w-full truncate rounded-lg px-4 py-2.5 text-left text-muted-foreground transition-colors hover:bg-gray-100 hover:text-primary-foreground"
                                      onClick={() => setOpenDropdown(null)}
                                    >
                                      {service.title}
                                    </Link>
                                  </li>
                                ))}
                                {!serviceLinks.length && (
                                  <li className="col-span-3 px-4 py-2 text-muted-foreground">
                                    View all services
                                  </li>
                                )}
                              </ul>
                            </div>
                          </li>
                        );
                      }

                      if (lable === "SEO Services") {
                        return (
                          <li
                            className="relative py-8 2xl:py-9"
                            key={id}
                            onMouseEnter={() => setOpenDropdown("seo-services")}
                            onMouseLeave={() => setOpenDropdown(null)}
                          >
                            <Link
                              href={path}
                              className={`relative flex items-center gap-0.5 font-semibold leading-[22px] transition-all duration-500 ${
                                active
                                  ? "text-primary underline underline-offset-4"
                                  : "text-muted-foreground"
                              } hover:text-primary-foreground`}
                              onClick={() => setOpenDropdown(null)}
                            >
                              {lable}
                              <svg
                                className="h-4 w-4 shrink-0 2xl:ml-0.5 2xl:h-5 2xl:w-5"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                viewBox="0 0 24 24"
                              >
                                <path d="M19 9l-7 7-7-7" />
                              </svg>
                            </Link>

                            <div
                              className={`absolute left-0 top-full z-30 w-[840px] max-w-[calc(100vw-2rem)] rounded-xl bg-white shadow-2xl transition-all duration-200 ${
                                openDropdown === "seo-services"
                                  ? "pointer-events-auto translate-y-0 opacity-100"
                                  : "pointer-events-none translate-y-2 opacity-0"
                              }`}
                            >
                              <ul className="custom-scrollbar grid max-h-[min(70vh,420px)] grid-cols-3 gap-1 overflow-y-auto overflow-x-hidden whitespace-normal p-3">
                                {seoSubServices.map((service) => (
                                  <li key={service.id}>
                                    <Link
                                      href={service.path}
                                      title={service.title}
                                      className="block w-full truncate rounded-lg px-4 py-2.5 text-left text-muted-foreground transition-colors hover:bg-gray-100 hover:text-primary-foreground"
                                      onClick={() => setOpenDropdown(null)}
                                    >
                                      {service.title}
                                    </Link>
                                  </li>
                                ))}
                                {!seoSubServices.length && (
                                  <li className="col-span-3 px-4 py-2 text-muted-foreground">
                                    View SEO services
                                  </li>
                                )}
                              </ul>
                            </div>
                          </li>
                        );
                      }

                      return (
                        <li className="py-8 2xl:py-9" key={id}>
                          <Link
                            href={path}
                            className={`relative flex items-center gap-1 font-semibold leading-[22px] transition-all duration-500 ${
                              active
                                ? "text-primary underline underline-offset-4"
                                : "text-muted-foreground"
                            } hover:text-primary-foreground`}
                          >
                            {lable}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </nav>

                <div className="hidden shrink-0 items-center gap-2 xl:flex 2xl:gap-4">
                  <a
                    href="tel:+14704707392"
                    className="group flex shrink-0 items-center gap-2 2xl:gap-3"
                    aria-label="Call +1 470-470-7392"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-full border-primary bg-primary transition group-hover:bg-primary/80 2xl:h-12 2xl:w-12">
                      <div className="flex items-center justify-center text-white">
                        <IoCall className="h-5 w-5 2xl:h-6 2xl:w-6" />
                      </div>
                    </div>
                    <span className="hidden text-sm font-semibold text-primary group-hover:underline 2xl:inline 2xl:text-base">
                      +1 470-470-7392
                    </span>
                  </a>

                  <Button
                    asChild
                    size="xl"
                    className="px-4 py-3 text-sm 2xl:px-7 2xl:text-base"
                  >
                    <Link className="text-foreground" href="/contact-us">
                      Contact Us
                    </Link>
                  </Button>
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
