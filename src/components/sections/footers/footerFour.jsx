import Link from "next/link";
import FooterContact from "./footerContact";
import SocialIcons from "@/components/ui/socialIcons";
import ImportanceLinks from "./importanceLinks";

const FooterFour = () => {
  return (
    <footer className="relative w-full overflow-hidden rounded-t-[20px] bg-primary pt-12 sm:rounded-t-[30px] sm:pt-16 md:pt-20 lg:pt-28 xl:pt-40 2xl:pt-[200px]">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-full bg-contain bg-top bg-no-repeat opacity-20"
        style={{
          backgroundImage: "url(/images/background/services-bg1-1.webp)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1680px] px-4 sm:px-6 lg:px-8">
        <div className="mx-auto w-full max-w-[1400px]">
          <FooterContact
            white_logo={false}
            bgColor="bg-white"
            color="text-white"
          />

          <div className="my-8 h-px w-full bg-white/80 sm:my-10 lg:my-12" />

          <div className="grid min-w-0 grid-cols-1 gap-10 lg:grid-cols-[minmax(240px,0.8fr)_minmax(0,2fr)] lg:gap-12 xl:grid-cols-[minmax(260px,0.7fr)_minmax(0,2.3fr)] xl:gap-16">
            <div className="min-w-0">
              <p className="max-w-xl break-words pb-6 text-sm leading-relaxed text-white sm:text-base lg:pb-8">
                Web Founders USA - The No.1 Award-Winning Digital Marketing
                Agency in the USA. We Don&apos;t Just Market - We Build Digital
                Empires.
              </p>
              <SocialIcons
                color="text-white"
                hoverColor="hover:text-white"
              />
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

      <div className="relative z-10 mt-10 bg-muted text-white dark:bg-accent sm:mt-12 lg:mt-[54px]">
        <div className="mx-auto flex w-full max-w-[1400px] flex-col items-center justify-between gap-3 px-4 py-5 text-center text-sm sm:px-6 sm:py-6 sm:text-base md:flex-row md:text-left lg:px-8 lg:py-7.5">
          <p className="min-w-0 break-words">
            Designed and Developed By{" "}
            <Link
              href="/"
              className="relative font-medium text-primary-foreground hover-underline after:h-px"
            >
              WebFounders USA
            </Link>
          </p>

          <p className="min-w-0 break-words md:text-right">
            Copyright: © 2026. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterFour;
