"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import FooterContact from "./footerContact";
import SocialIcons from "@/components/ui/socialIcons";
import ImportanceLinks from "./importanceLinks";

const FooterFour = () => {
  const pathname = usePathname();
  const normalizedPathname = pathname?.replace(/\/+$/, "");
  const isHalloweenSale = normalizedPathname === "/halloween-sale";
  const isLandingTest = normalizedPathname === "/black-friday-sale";

  if (isLandingTest) return null;

  return (
    <footer
      className={`relative w-full bg-primary ${
        isHalloweenSale
          ? "pt-0"
          : "pt-12 sm:pt-16 md:pt-20 lg:pt-28 xl:pt-36 2xl:pt-40"
      }`}
    >
      {!isHalloweenSale && (
        <>
          <div
            className="footer-four-background pointer-events-none absolute inset-x-0 top-0 h-full bg-contain bg-top bg-no-repeat opacity-20"
            style={{
              backgroundImage: "url(/images/background/services-bg1-1.webp)",
              backgroundPosition: "center top",
            }}
            aria-hidden="true"
          />

          <div className="relative z-10 mx-auto w-full max-w-[1680px] px-3 min-[360px]:px-4 sm:px-6 lg:px-8">
            <div className="mx-auto w-full max-w-[1400px]">
              <FooterContact
                white_logo={false}
                bgColor="bg-white"
                color="text-white"
                logoLink
              />

              <div className="my-8 h-px w-full bg-white/80 sm:my-10 lg:my-12" />

              <div className="grid min-w-0 grid-cols-1 gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:gap-10 xl:gap-16">
                <div className="min-w-0">
                  <p className="max-w-2xl break-words pb-6 text-sm leading-relaxed text-white sm:text-base lg:pb-8">
                    Web Founders USA - The No.1 Award-Winning Digital Marketing
                    Agency in the USA. We Don&apos;t Just Market - We Build Digital
                    Empires.
                  </p>
                  <SocialIcons color="text-white" hoverColor="hover:text-white" />
                </div>

                <div className="min-w-0">
                  <ImportanceLinks
                    color="text-white"
                    linkHoverColor="hover:text-white hover:underline"
                  />
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      <div
        className={`relative z-10 bg-muted text-white dark:bg-accent ${
          isHalloweenSale ? "mt-0" : "mt-10 sm:mt-12 lg:mt-[54px]"
        }`}
      >
        <div
          className={`mx-auto flex w-full max-w-[1400px] flex-col items-center justify-between px-3 text-center md:flex-row md:text-left sm:px-6 lg:px-8 ${
            isHalloweenSale
              ? "gap-4 py-7 text-base sm:gap-6 sm:py-8 sm:text-lg lg:py-9"
              : "gap-3 py-5 text-xs sm:py-6 sm:text-sm lg:py-7.5"
          }`}
        >
          {!isHalloweenSale && (
            <p className="min-w-0 break-words">
              Designed and Developed By{" "}
              <Link
                href="/"
                className="relative font-medium text-primary-foreground hover-underline after:h-px"
              >
                WebFounders USA
              </Link>
            </p>
          )}

          <p
            className={`min-w-0 break-words ${
              isHalloweenSale ? "w-full text-center" : "md:text-right"
            }`}
          >
            Copyright: © 2026. {" "}
            <span className={isHalloweenSale ? "text-red-500" : undefined}>
              All Rights Reserved
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterFour;
