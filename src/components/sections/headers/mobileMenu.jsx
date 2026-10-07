"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MdMenu } from "react-icons/md";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import MobileExtraInfo from "./mobileExtraInfo";

const MobileMenu = ({ data = [] }) => {
  const [open, setOpen] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState({});
  const pathname = usePathname();
  const navigationItems = Array.isArray(data) ? data : [];

  const isActive = (path) => {
    if (path === "/") return pathname === "/";
    return pathname?.startsWith(path);
  };

  return (
    <div className="block xl:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger
          aria-label="Open navigation menu"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200/80 bg-white/90 text-[#072D7F] shadow-sm transition hover:border-[#BF0B30]/30 hover:bg-[#BF0B30]/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BF0B30] focus-visible:ring-offset-2"
        >
          <MdMenu className="text-[28px]" aria-hidden="true" />
        </SheetTrigger>

        <SheetContent
          side="left"
          className="w-[min(88vw,400px)] max-w-[400px] overflow-hidden border-r border-white/10 bg-[#08162D] p-0 text-white shadow-[24px_0_70px_rgba(2,8,23,0.35)]"
        >
          <SheetTitle className="sr-only">Main navigation</SheetTitle>
          <SheetDescription className="sr-only">
            Browse the main website navigation and contact information.
          </SheetDescription>

          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(191,11,48,0.19),transparent_42%),linear-gradient(160deg,#0A1B37_0%,#061225_100%)]" />

          <div
            className="relative flex h-full flex-col overflow-y-auto overflow-x-hidden px-5 pb-6 pt-7 sm:px-6"
            onClick={(event) => {
              if (event.target.closest?.("a")) setOpen(false);
            }}
          >
            <div className="flex items-center justify-between border-b border-white/10 pb-5 pr-10">
              <Link href="/" aria-label="Web Founders USA home" className="block">
                <Image
                  src="/images/image123.webp"
                  width={179}
                  height={53}
                  alt="Web Founders USA"
                  priority
                  className="h-auto w-[148px] object-contain"
                />
              </Link>
              <span className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white/60">
                Menu
              </span>
            </div>

            <div className="flex items-center justify-between pb-3 pt-6">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/45">
                Explore
              </p>
              <span className="text-xs font-medium tabular-nums text-white/35">
                {String(navigationItems.length).padStart(2, "0")} links
              </span>
            </div>

            <nav aria-label="Mobile navigation" className="min-w-0">
              <ul className="space-y-1.5">
                {navigationItems.map(({ id, path, lable, children = [] }, index) => {
                  const active = isActive(path);
                  const activeChild = children.some((child) => isActive(child.path));
                  const hasChildren = children.length > 0;
                  const expanded = expandedMenus[id] ?? activeChild;

                  return (
                    <li key={id}>
                      <div
                        className={`flex items-center rounded-xl border transition-colors ${
                          active || activeChild
                            ? "border-[#BF0B30]/25 bg-[#BF0B30]/[0.12]"
                            : "border-transparent hover:border-white/[0.08] hover:bg-white/[0.05]"
                        }`}
                      >
                        <Link
                          href={path}
                          aria-current={active ? "page" : undefined}
                          className={`flex min-h-12 min-w-0 flex-1 items-center gap-3 rounded-l-xl py-2.5 pl-3.5 pr-2 text-sm font-semibold outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#F87171] ${
                            active || activeChild ? "text-white" : "text-white/75 hover:text-white"
                          }`}
                        >
                          <span className="w-6 shrink-0 text-[10px] font-bold tabular-nums tracking-wider text-white/30">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span className="min-w-0 flex-1 truncate">{lable}</span>
                          {active && (
                            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#F87171] shadow-[0_0_10px_rgba(248,113,113,0.8)]" />
                          )}
                        </Link>

                        {hasChildren && (
                          <button
                            type="button"
                            aria-label={`${expanded ? "Collapse" : "Expand"} ${lable} links`}
                            aria-expanded={expanded}
                            onClick={() =>
                              setExpandedMenus((current) => ({
                                ...current,
                                [id]: !(current[id] ?? activeChild),
                              }))
                            }
                            className="mr-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-white/50 transition hover:bg-white/[0.08] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F87171]"
                          >
                            <svg
                              aria-hidden="true"
                              viewBox="0 0 20 20"
                              fill="none"
                              className={`h-4 w-4 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
                            >
                              <path
                                d="m5 7.5 5 5 5-5"
                                stroke="currentColor"
                                strokeWidth="1.7"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </button>
                        )}
                      </div>

                      {hasChildren && expanded && (
                        <ul className="ml-[27px] mt-1.5 space-y-1 border-l border-white/10 pb-1 pl-3">
                          {children.map((child) => {
                            const childActive = isActive(child.path);

                            return (
                              <li key={child.id}>
                                <Link
                                  href={child.path}
                                  aria-current={childActive ? "page" : undefined}
                                  title={child.title}
                                  className={`flex min-h-10 items-center rounded-lg px-3 text-[13px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F87171] ${
                                    childActive
                                      ? "bg-white/[0.08] text-white"
                                      : "text-white/55 hover:bg-white/[0.05] hover:text-white/90"
                                  }`}
                                >
                                  {child.title}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className="mt-6">
              <Link
                href="/contact-us"
                className="flex min-h-12 items-center justify-center rounded-xl bg-[#BF0B30] px-4 text-sm font-bold text-white shadow-[0_8px_24px_rgba(191,11,48,0.25)] transition hover:bg-[#A60929] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FCA5A5] focus-visible:ring-offset-2 focus-visible:ring-offset-[#08162D]"
              >
                Let&apos;s talk about your project
                <svg
                  aria-hidden="true"
                  viewBox="0 0 20 20"
                  fill="none"
                  className="ml-2 h-4 w-4"
                >
                  <path
                    d="M5 15 15 5M6 5h9v9"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>

            <div className="mt-auto pt-7">
              <div className="rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-1">
                <MobileExtraInfo />
              </div>
              <p className="mt-5 text-center text-[10px] font-medium tracking-wide text-white/30">
                &copy; {new Date().getFullYear()} Web Founders USA
              </p>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;
