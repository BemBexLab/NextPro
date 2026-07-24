import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function HeroFour() {
  return (
    <section className="container pb-15">
      <div className="overflow-x-hidden overflow-y-hidden rounded-[30px] border-2 border-[rgba(0,31,63,0.05)] bg-[rgba(226,231,255,0.4)] pl-4 pr-4 dark:bg-[#1c232a] lg:pl-[52px] lg:pr-0">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="pb-12 pt-12 lg:pb-[120px] lg:pt-[132px]">
            <h1 className="text-6xl font-bold text-[#001F3F]">
              Web Founders USA - No.1 Digital Marketing Agency in USA
            </h1>
            <p className="max-w-[689px] pt-7.5 font-semibold">
              Brands lose customers every day to slow websites, weak visibility, and
              outdated design. Web Founders USA, a trusted Website Design and
              Development Company and full-service top Digital Marketing Agencies in
              USA, rebuilds that momentum with powerful solutions.
            </p>
            <div className="flex flex-col gap-[32px] pb-[22px] pt-[55px] sm:flex-row sm:items-center">
              <Button asChild>
                <Link href="/contact-us"> Contact Us </Link>
              </Button>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="absolute -left-[21px] -top-[21px] hidden xl:inline-block">
              <Image src="/images/shapes/mobius-strip4-1.webp" width={330} height={194} alt="mobius-strip-1" />
            </div>
            <div className="relative lg:absolute lg:right-14 lg:top-[30%] lg:z-[2] xl:right-[136px] xl:top-[62px]">
              <Image
                src="/images/shapes/mobius-strip4-4.webp"
                width={600}
                height={600}
                alt="mobius-strip-4"
                style={{ width: "100%" }}
                className="max-h-[420px] object-cover lg:max-h-full"
              />
            </div>
            <div className="absolute right-0 top-0 z-[1] max-w-[190px] sm:max-w-full md:right-5">
              <Image
                src="/images/shapes/mobius-strip4-3.webp"
                width={288}
                height={267}
                alt="mobius-strip-3"
                style={{ width: "100%" }}
              />
            </div>
            <div className="absolute bottom-12 left-0 z-[3] max-w-[190px] sm:max-w-full md:-left-2 md:bottom-[138px]">
              <Image
                src="/images/shapes/mobius-strip4-2.webp"
                width={300}
                height={300}
                alt="mobius-strip-2"
                style={{ width: "100%" }}
              />
            </div>
            <div className="absolute bottom-0 left-0 hidden lg:block">
              <Image src="/images/shapes/mobius-strip4-5.webp" width={434} height={188} alt="mobius-strip-5" />
            </div>
            <div className="absolute -bottom-[6px] right-[70px] blur-[7px]">
              <Image src="/images/shapes/mobius-strip4-6.webp" width={382} height={164} alt="mobius-strip-6" />
            </div>
            <div className="absolute bottom-25 right-0 z-[7] hidden md:block lg:bottom-[210px] xl:right-[94px]">
              <Image src="/images/shapes/mobius-strip4-7.webp" width={160} height={160} alt="mobius-strip-7" />
            </div>
            <div className="absolute bottom-0 right-0 hidden xl:inline-block">
              <Image src="/images/shapes/mobius-strip4-8.webp" width={276} height={246} alt="mobius-strip-8" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
