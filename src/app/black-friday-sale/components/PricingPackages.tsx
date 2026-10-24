import Image from "next/image";
import { Check } from "lucide-react";
import { FaArrowRight } from "react-icons/fa6";
import { pricingData } from "@/lib/fackData/pricingData3";

const descriptions = [
  "Perfect for small businesses and startups.",
  "Ideal for growing businesses that need more features.",
  "Complete online store solution to sell and scale.",
];

const packages = pricingData.map((plan, index) => ({
  name: plan.plan_name,
  discount: `${Math.round((1 - Number(plan.price) / Number(plan.old_price)) * 100)}%`,
  price: `$${plan.price}`,
  oldPrice: `$${plan.old_price}`,
  description: descriptions[index],
  features: plan.services,
  popular: index === 1,
}));

const giftImage = "/Assets/High%20res/db407df9-4411-428d-91dd-3e3bd9d88bf6.png";
const accentGiftImage = "/Assets/High%20res/ad1b2b5b-63d6-4f3b-a22a-28c45457cb72.png";

const PricingPackages = () => {
  return (
    <section
      aria-labelledby="pricing-packages-heading"
      className="relative isolate overflow-hidden bg-[linear-gradient(to_bottom,#ffffff_0%,rgba(255,255,255,0.7)_24%,rgba(255,255,255,0)_58%),radial-gradient(ellipse_at_top,_#f5f7fa_0%,_#ffffff_70%)] px-4 py-5 text-[#101820] sm:px-6 sm:py-5 lg:px-10 lg:py-10"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src={giftImage}
          alt=""
          width={150}
          height={150}
          className="process-decoration-float process-decoration-float-1 absolute -left-5 top-0 hidden h-24 w-28 -rotate-12 object-contain sm:left-0 sm:top-0 sm:h-28 sm:w-32 lg:left-5 lg:block lg:h-40 lg:w-44"
        />
        <Image
          src={giftImage}
          alt=""
          width={120}
          height={120}
          className="process-decoration-float process-decoration-float-2 absolute -right-4 top-2 hidden h-14 w-16 rotate-[12deg] object-contain sm:right-0 sm:top-1 sm:h-16 sm:w-20 lg:right-6 lg:block lg:h-24 lg:w-28"
        />
        <Image
          src={accentGiftImage}
          alt=""
          aria-hidden="true"
          width={96}
          height={96}
          className="process-decoration-float process-decoration-float-3 absolute left-[calc(50%_-_728px)] top-[29%] hidden h-12 w-12 -rotate-[16deg] object-contain min-[1800px]:block"
        />
        <Image
          src={accentGiftImage}
          alt=""
          aria-hidden="true"
          width={128}
          height={128}
          className="process-decoration-float process-decoration-float-4 absolute right-[calc(50%_-_744px)] top-[48%] hidden h-16 w-16 rotate-[18deg] object-contain min-[1800px]:block"
        />
        <Image
          src={accentGiftImage}
          alt=""
          aria-hidden="true"
          width={80}
          height={80}
          className="process-decoration-float process-decoration-float-5 absolute left-[calc(50%_-_900px)] top-[68%] hidden h-10 w-10 rotate-[8deg] object-contain min-[1800px]:block"
        />
        <Image
          src={accentGiftImage}
          alt=""
          aria-hidden="true"
          width={112}
          height={112}
          className="process-decoration-float process-decoration-float-6 absolute right-[calc(50%_-_880px)] top-[82%] hidden h-14 w-14 -rotate-[13deg] object-contain min-[1800px]:block"
        />
        <Image
          src={accentGiftImage}
          alt=""
          aria-hidden="true"
          width={80}
          height={80}
          className="process-decoration-float process-decoration-float-9 absolute left-[calc(50%_-_870px)] top-[56%] hidden h-10 w-10 -rotate-[18deg] object-contain min-[1800px]:block"
        />
        <Image
          src={accentGiftImage}
          alt=""
          aria-hidden="true"
          width={96}
          height={96}
          className="process-decoration-float process-decoration-float-10 absolute right-[calc(50%_-_900px)] top-[68%] hidden h-12 w-12 rotate-[11deg] object-contain min-[1800px]:block"
        />
      </div>

      <div className="relative mx-auto w-full max-w-[640px] md:max-w-[960px] lg:max-w-[1320px]">
        <header className="mx-auto mb-3 max-w-4xl text-center sm:mb-3 lg:mb-6">
          <span className="inline-flex rounded-full bg-[#101820] px-4 py-1.5 text-[10px] font-extrabold uppercase tracking-wide text-white sm:text-xs">
            Black Friday Packages
          </span>
          <h2
            id="pricing-packages-heading"
            className="mt-1 text-[clamp(1.4rem,3.5vw,3.25rem)] font-black uppercase leading-[1.05] tracking-[-0.04em] lg:mt-3"
          >
            Exclusive <span className="text-[#e31824]">Black Friday Offers</span>
          </h2>
          <p className="mx-auto mt-1.5 max-w-[560px] text-[9px] leading-relaxed text-slate-800 sm:text-[10px] lg:mt-3 lg:max-w-4xl lg:text-base font-medium">
            Choose the right package for your business. All packages include modern design,
            responsive development and SEO basics.
          </p>
        </header>

        <div className="mt-10 grid grid-cols-1 items-stretch gap-4 min-[680px]:grid-cols-3 sm:gap-3 lg:gap-6">
          {packages.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex min-w-0 flex-col overflow-visible rounded-lg bg-white shadow-[0_10px_30px_rgba(15,23,42,0.09)] ${
                plan.popular
                  ? "border-2 border-[#e31824] before:absolute before:inset-x-0 before:top-0 before:h-3 before:rounded-t-lg before:bg-[#101820] min-[680px]:-mt-3 lg:pb-1"
                  : "border border-slate-100"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 z-10 -translate-x-1/2 rounded-full bg-white px-3 py-1 text-[9px] font-black uppercase tracking-wide text-[#e31824] shadow-sm sm:text-[10px]">
                  Most Popular
                </div>
              )}
              <div className={`relative flex min-h-14 items-center rounded-t-[7px] bg-[#e31824] px-3 py-4 pr-14 text-white sm:min-h-14 lg:min-h-16 lg:px-5 lg:py-5 ${plan.popular ? "min-[680px]:mt-3" : ""}`}>
                <h3 className="text-xs font-bold uppercase sm:text-[11px] lg:text-lg">{plan.name}</h3>
                <span className="absolute -right-1 -bottom-4 top-auto flex h-11 w-11 flex-col items-center justify-center rounded-full bg-[#101820] text-center text-[10px] font-black leading-[1.05] text-white shadow-md sm:right-2 sm:h-12 sm:w-12 lg:h-14 lg:w-14 lg:text-xs">
                  <span className="text-lg">{plan.discount}</span>
                  <span>OFF</span>
                </span>
              </div>

              <div className="flex flex-1 flex-col px-3 pb-3 pt-3 sm:px-3 sm:pb-3 lg:px-5 lg:pb-5 lg:pt-4">
                <div className="flex flex-wrap items-baseline gap-x-2">
                  <span className="text-[2rem] font-black leading-none tracking-tight text-black sm:text-[1.8rem] lg:text-4xl">{plan.price}</span>
                  <del className="text-xs font-bold text-slate-700 sm:text-[10px] lg:text-sm">{plan.oldPrice}</del>
                </div>
                <p className="mt-1.5 mb-2 max-w-full text-[11px] leading-snug text-slate-800 lg:mt-2 lg:text-sm lg:leading-relaxed">
                  {plan.description}
                </p>
                <ul className="mb-2 h-[clamp(180px,30vh,280px)] space-y-1.5 overflow-y-auto overscroll-contain pr-2 [scrollbar-color:#e31824_#f1f5f9] [scrollbar-width:thin] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-slate-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#e31824] lg:space-y-2.5">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-1.5 text-[10px] leading-tight font-medium lg:gap-2 lg:text-[13px] lg:leading-snug">
                      <span className="mt-px inline-flex h-3 w-3 shrink-0 items-center justify-center rounded-full bg-[#e31824] text-white lg:h-4 lg:w-4">
                        <Check aria-hidden="true" className="h-2 w-2 lg:h-2.5 lg:w-2.5" strokeWidth={3.5} />
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#request-audit"
                  className="relative bottom-0 mt-auto inline-flex min-h-10 items-center justify-center gap-1.5 rounded-lg bg-gradient-to-b from-[#E90C14] to-[#A60607] px-4 text-sm font-bold text-white shadow-[0_4px_10px_rgba(227,24,36,0.16)] transition hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e31824] focus-visible:ring-offset-2 lg:min-h-12 lg:text-lg"
                >
                  Get This Deal
                  <FaArrowRight aria-hidden="true" className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <aside className="mt-4 flex flex-col items-center gap-4 rounded-2xl bg-[#0D1922] px-5 py-6 text-white sm:flex-row sm:gap-4 sm:px-5 sm:py-4 lg:mt-6 lg:gap-5 lg:px-7 lg:py-5">
          <Image
            src={"/Assets/High res/ad1b2b5b-63d6-4f3b-a22a-28c45457cb72.png"}
            alt=""
            aria-hidden="true"
            width={88}
            height={88}
            className="h-16 w-16 shrink-0 object-contain sm:h-16 sm:w-16 lg:h-20 lg:w-20"
          />
          <div className="min-w-0 flex-1 text-center sm:text-left">
            <h3 className="text-base font-extrabold sm:text-base lg:text-lg">Black Friday pricing ends soon!</h3>
            <p className="mt-1.5 text-xs leading-relaxed text-white sm:text-xs lg:text-sm">
              Limited project slots available. Secure your spot now and take advantage of our exclusive offers.
            </p>
          </div>
          <a
            href="#request-audit"
            className="inline-flex min-h-12 w-full shrink-0 items-center justify-center gap-2 rounded-lg bg-gradient-to-b from-[#E90C14] to-[#A60607] px-5 text-sm font-bold text-white transition hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#101820] sm:min-h-11 sm:w-auto sm:px-4 sm:text-xs lg:min-h-12 lg:px-5 lg:text-sm"
          >
            Claim My Black Friday Deal
            <FaArrowRight aria-hidden="true" className="h-4 w-4 shrink-0" />
          </a>
        </aside>
      </div>
    </section>
  );
};

export default PricingPackages;
