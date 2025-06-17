"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { MdMenu } from "react-icons/md";
import MobileExtraInfo from "./mobileExtraInfo";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronUp } from "lucide-react";
import { serviceDetailsData } from "@/lib/fackData/serviceDetailsData"; // ⭐ import

const serviceCategories = Object.keys(serviceDetailsData); // ⭐ use this for submenu

const MobileMenu = ({ data }) => {
  const pathName = usePathname();
  const [open, setOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(false);

  useEffect(() => {
    setOpen(false);
    setOpenSubMenu(false);
  }, [pathName]);

  return (
    <div className="xl:hidden block">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger>
          <MdMenu className="text-primary-foreground text-5xl -mb-2" />
        </SheetTrigger>
        <SheetContent side="left" className="bg-muted dark:bg-accent">
          <div className="overflow-y-auto overflow-x-hidden no-scrollbar h-full px-0 py-7.5">
            <div className="flex justify-start mt-7">
              <Link href={"/"}>
                <Image
                  src={"/images/image123.png"}
                  width={179}
                  height={53}
                  alt="logo-white"
                  className="w-full h-full"
                />
              </Link>
            </div>
            <ul className="pt-9 pb-8">
              {data.map(({ id, path, lable }) => {
                if (lable === "Services We Offer") {
                  return (
                    <li key={id}>
                      <button
                        onClick={() => setOpenSubMenu(!openSubMenu)}
                        className="flex justify-between items-center w-full text-secondary-foreground dark:text-muted-foreground text-base leading-[100%] py-[11px] px-4 font-semibold"
                      >
                        {lable}
                        {openSubMenu ? (
                          <ChevronUp size={18} />
                        ) : (
                          <ChevronDown size={18} />
                        )}
                      </button>

                      {openSubMenu && (
                        <ul className="pl-6 space-y-1">
                          {serviceCategories.map((cat, i) => (
                            <li key={i}>
                              <Link
                                href={`/service-details?category=${encodeURIComponent(
                                  cat
                                )}`}
                                className="block py-2 px-2 text-sm text-white hover:text-primary-foreground"
                                onClick={() => setOpen(false)}
                              >
                                {cat}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                }

                return (
                  <li key={id}>
                    <Link
                      href={path}
                      className="flex justify-between items-center text-secondary-foreground dark:text-muted-foreground text-base leading-[100%] py-[11px] px-4 font-semibold z-1 relative after:z-[-1] after:absolute after:left-0 after:bottom-0 after:w-0 after:transition-all after:duration-300 hover:after:w-full after:h-full after:bg-secondary"
                      onClick={() => setOpen(false)}
                    >
                      {lable}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <MobileExtraInfo />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileMenu;
