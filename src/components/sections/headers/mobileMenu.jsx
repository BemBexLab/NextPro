"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MdMenu } from "react-icons/md";
import MobileExtraInfo from "./mobileExtraInfo";

const MobileMenu = ({ data }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="xl:hidden block">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger aria-label="Open navigation menu">
          <MdMenu className="text-primary-foreground text-5xl -mb-2" />
        </SheetTrigger>
        <SheetContent side="left" className="bg-muted dark:bg-accent">
          <SheetTitle className="sr-only">Main navigation</SheetTitle>
          <SheetDescription className="sr-only">
            Browse the main website navigation and contact information.
          </SheetDescription>
          <div
            className="overflow-y-auto overflow-x-hidden no-scrollbar h-full px-0 py-7.5"
            onClick={(event) => {
              if (event.target.closest?.("a")) {
                setOpen(false);
              }
            }}
          >
            <div className="flex justify-start mt-7">
              <Link href={"/"}>
                <Image
                  src={"/images/image123.webp"}
                  width={179}
                  height={53}
                  alt="logo-white"
                  className="w-full h-full"
                />
              </Link>
            </div>
            <ul className="pt-9 pb-8">
              {data.map(({ id, path, lable }) => {
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
