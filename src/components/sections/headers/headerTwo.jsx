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

function mapServiceLinks(services = []) {
  return services.map((service) => ({
    id: service.id,
    title: service.title,
    path: `/service/${service.id}`,
  }));
}

function mapSeoLinks(services = []) {
  const seoService = services.find((service) => service.id === "seo-services");
  const subCategories = seoService?.sub_categories || [];

  return subCategories.map((service) => ({
    id: service.id,
    title: service.title,
    path: `/service/seo-services/${service.id}/`,
  }));
}

const HeaderTwo = ({ haveShadow }) => {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState(null);
  const [serviceLinks, setServiceLinks] = useState([]);
  const [seoSubServices, setSeoSubServices] = useState([]);
  const [servicesReady, setServicesReady] = useState(false);
  const [seoReady, setSeoReady] = useState(false);
  const [isLoadingServices, setIsLoadingServices] = useState(false);
  const [isLoadingSeo, setIsLoadingSeo] = useState(false);

  const isActive = (path) => {
    if (path === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(path);
  };

  const loadServiceLinks = async () => {
    if (servicesReady || isLoadingServices) {
      return;
    }

    setIsLoadingServices(true);

    try {
      const module = await import("@/data/services");
      setServiceLinks(mapServiceLinks(module.services));
      setServicesReady(true);
    } finally {
      setIsLoadingServices(false);
    }
  };

  const loadSeoLinks = async () => {
    if (seoReady || isLoadingSeo) {
      return;
    }

    setIsLoadingSeo(true);

    try {
      const module = await import("@/app/service/seo-services/components/subservices");
      setSeoSubServices(mapSeoLinks(module.services));
      setSeoReady(true);
    } finally {
      setIsLoadingSeo(false);
    }
  };

  return (
    <StickyHeader>
      <header
        id="header"
        className="sticky top-0 z-40 w-full bg-background transition-[top] duration-300"
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
            <div className="container relative mx-auto">
              <span className="block border-t border-accent"></span>
              <div className="flex items-center justify-between">
                <div className="py-5">
                  <Logo />
                </div>

                <nav className="hidden xl:block">
                  <ul className="flex items-center gap-6 text-[17px] 2xl:gap-10">
                    {navigationLinks.map(({ id, lable, path }) => {
                      const active = isActive(path);

                      if (lable === "Service") {
                        return (
                          <li
                            className="relative pb-[42px] pt-[43px]"
                            key={id}
                            onMouseEnter={() => {
                              setOpenDropdown("service");
                              void loadServiceLinks();
                            }}
                            onMouseLeave={() => setOpenDropdown(null)}
                          >
                            <Link
                              href={path}
                              className={`relative flex items-center gap-1 font-semibold leading-[22px] transition-all duration-500 ${
                                active ? "text-primary underline" : "text-muted-foreground"
                              } hover:text-primary-foreground`}
                              onClick={() => setOpenDropdown(null)}
                            >
                              {lable}
                              <svg
                                className="ml-1 h-5 w-5"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                viewBox="0 0 24 24"
                              >
                                <path d="M19 9l-7 7-7-7" />
                              </svg>
                            </Link>

                            <div
                              className={`absolute left-0 top-full z-30 w-72 rounded-xl bg-white shadow-2xl transition-all duration-200 ${
                                openDropdown === "service"
                                  ? "pointer-events-auto translate-y-0 opacity-100"
                                  : "pointer-events-none translate-y-2 opacity-0"
                              }`}
                            >
                              <ul className="custom-scrollbar max-h-[400px] overflow-y-auto py-3">
                                {serviceLinks.map((service) => (
                                  <li key={service.id}>
                                    <Link
                                      href={service.path}
                                      className="block w-full px-6 py-2 text-left text-muted-foreground transition-colors hover:bg-gray-100 hover:text-primary-foreground"
                                      onClick={() => setOpenDropdown(null)}
                                    >
                                      {service.title}
                                    </Link>
                                  </li>
                                ))}
                                {!serviceLinks.length && (
                                  <li className="px-6 py-2 text-muted-foreground">
                                    {isLoadingServices ? "Loading services..." : "View all services"}
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
                            className="relative pb-[42px] pt-[43px]"
                            key={id}
                            onMouseEnter={() => {
                              setOpenDropdown("seo-services");
                              void loadSeoLinks();
                            }}
                            onMouseLeave={() => setOpenDropdown(null)}
                          >
                            <Link
                              href={path}
                              className={`relative flex items-center gap-1 font-semibold leading-[22px] transition-all duration-500 ${
                                active
                                  ? "text-primary underline underline-offset-4"
                                  : "text-muted-foreground"
                              } hover:text-primary-foreground`}
                              onClick={() => setOpenDropdown(null)}
                            >
                              {lable}
                              <svg
                                className="ml-1 h-5 w-5"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                                viewBox="0 0 24 24"
                              >
                                <path d="M19 9l-7 7-7-7" />
                              </svg>
                            </Link>

                            <div
                              className={`absolute left-0 top-full z-30 w-80 rounded-xl bg-white shadow-2xl transition-all duration-200 ${
                                openDropdown === "seo-services"
                                  ? "pointer-events-auto translate-y-0 opacity-100"
                                  : "pointer-events-none translate-y-2 opacity-0"
                              }`}
                            >
                              <ul className="custom-scrollbar max-h-[400px] overflow-y-auto py-3">
                                {seoSubServices.map((service) => (
                                  <li key={service.id}>
                                    <Link
                                      href={service.path}
                                      className="block w-full px-6 py-2 text-left text-muted-foreground transition-colors hover:bg-gray-100 hover:text-primary-foreground"
                                      onClick={() => setOpenDropdown(null)}
                                    >
                                      {service.title}
                                    </Link>
                                  </li>
                                ))}
                                {!seoSubServices.length && (
                                  <li className="px-6 py-2 text-muted-foreground">
                                    {isLoadingSeo ? "Loading SEO services..." : "View SEO services"}
                                  </li>
                                )}
                              </ul>
                            </div>
                          </li>
                        );
                      }

                      return (
                        <li className="pb-[42px] pt-[43px]" key={id}>
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

                <div className="hidden items-center gap-5 xl:flex">
                  <a href="tel:+14704707392" className="group flex items-center gap-3">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border-primary bg-primary transition group-hover:bg-primary/80">
                      <div className="flex items-center justify-center text-white">
                        <IoCall size={30} />
                      </div>
                    </div>
                    <span className="text-base font-semibold text-primary group-hover:underline">
                      +1 470-470-7392
                    </span>
                  </a>

                  <Button asChild size="xl">
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
