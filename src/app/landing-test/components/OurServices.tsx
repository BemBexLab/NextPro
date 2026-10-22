import Image from "next/image";
import {
  ArrowRight,
  Code2,
  FilePenLine,
  RefreshCw,
  ShoppingCart,
} from "lucide-react";

const services = [
  {
    title: "Business Website Design",
    description:
      "Professional, modern websites that build trust and generate leads.",
    Icon: FilePenLine,
    iconStyle: "bg-red-100 text-red-600",
  },
  {
    title: "E-Commerce Websites",
    description:
      "Powerful online stores to sell your products and grow your revenue.",
    Icon: ShoppingCart,
    iconStyle: "bg-red-100 text-red-600",
  },
  {
    title: "Website Redesign",
    description:
      "Give your website a fresh, modern look with better performance.",
    Icon: RefreshCw,
    iconStyle: "bg-blue-100 text-blue-600",
  },
  {
    title: "Custom Web Development",
    description: "Tailored solutions for unique business needs.",
    Icon: Code2,
    iconStyle: "bg-red-100 text-red-600",
  },
];

const decorations = [
  {
    src: "/Assets/High%20res/ea9a99f0-0b07-401c-9d11-b4b212cb15b3.png",
    alt: "",
    className:
      "left-[4%] top-12 hidden h-20 w-24 -rotate-12 min-[1400px]:left-[5%] min-[1400px]:top-14 min-[1400px]:h-28 min-[1400px]:w-32 min-[1400px]:block",
  },
  {
    src: "/Assets/High%20res/41693517-62e8-4487-bbca-57c4ebbd83b3.png",
    alt: "",
    className:
      "right-[4%] top-20 hidden h-28 w-24 rotate-[16deg] min-[1400px]:right-[5%] min-[1400px]:top-20 min-[1400px]:h-40 min-[1400px]:w-36 min-[1400px]:block",
  },
  {
    src: "/Assets/High%20res/ea9a99f0-0b07-401c-9d11-b4b212cb15b3.png",
    alt: "",
    className:
      "right-[16%] top-5 hidden h-10 w-12 rotate-[18deg] min-[1400px]:right-[14%] min-[1400px]:top-5 min-[1400px]:h-14 min-[1400px]:w-16 min-[1400px]:block",
  },
  {
    src: "/Assets/High%20res/41693517-62e8-4487-bbca-57c4ebbd83b3.png",
    alt: "",
    className:
      "left-[13%] top-5 hidden h-12 w-10 -rotate-[20deg] min-[1400px]:block",
  },
];

const OurServices = () => {
  return (
    <section
      aria-labelledby="our-services-heading"
      className="relative isolate overflow-hidden bg-[linear-gradient(to_bottom,#f7f8fc_0%,rgba(247,248,252,0.6)_25%,rgba(255,255,255,0)_75%),radial-gradient(ellipse_at_top,_#f6f8fb_0%,_#ffffff_66%)] px-4 py-10 text-[#101820] sm:px-8 sm:py-14 lg:px-12 lg:py-16 xl:px-14"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        {decorations.map((decoration, index) => (
          <Image
            key={`${decoration.src}-${index}`}
            src={decoration.src}
            alt={decoration.alt}
            aria-hidden="true"
            width={240}
            height={240}
            className={`absolute object-contain drop-shadow-[0_8px_8px_rgba(15,23,42,0.14)] ${decoration.className}`}
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-[1360px]">
        <header className="mx-auto mb-8 max-w-[904px] text-center sm:mb-10 lg:mb-14">
          <span className="inline-flex rounded-full bg-[#101820] px-5 py-2 text-xs font-bold uppercase tracking-wide text-white">
            Our Services
          </span>
          <h2
            id="our-services-heading"
            className="mt-4 text-[clamp(1.9rem,5vw,3.5rem)] font-black uppercase leading-[1.04] tracking-[-0.04em] sm:mt-5"
          >
            Website Design &amp; Development
            <span className="block">
              Built to{" "}
              <span className="text-[#e31824]">Grow Your Business</span>
            </span>
          </h2>
          <p className="mx-auto mt-4 max-w-[740px] text-sm leading-relaxed text-slate-600 sm:mt-5 sm:text-base lg:text-lg">
            From new websites to redesigns and online stores, we create modern,
            high-performing websites that help you attract more customers and
            increase sales.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 xl:grid-cols-4 xl:gap-6">
          {services.map(({ title, description, Icon, iconStyle }, index) => (
            <article
              key={title}
              className="relative flex min-h-[240px] min-w-0 flex-col rounded-2xl border border-slate-100 bg-white p-5 shadow-[0_12px_34px_rgba(15,23,42,0.07)] sm:min-h-[280px] sm:p-6 lg:min-h-[300px] lg:p-8"
            >
              {index === services.length - 1 && (
                <Image
                  src="/Assets/High%20res/7041b13d-7bbc-47dc-a9f0-7af75d65aa4d.png"
                  alt=""
                  aria-hidden="true"
                  width={128}
                  height={128}
                  className="pointer-events-none absolute -right-3 -top-3 z-10 h-12 w-12 object-contain drop-shadow-[0_8px_12px_rgba(166,6,7,0.28)] sm:-right-4 sm:-top-4 sm:h-16 sm:w-16 lg:h-20 lg:w-20"
                />
              )}
              <span
                className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${iconStyle}`}
              >
                <Icon
                  aria-hidden="true"
                  className="h-7 w-7"
                  strokeWidth={2.5}
                />
              </span>
              <h3 className="mt-4 text-base font-extrabold leading-tight text-[#101820] sm:text-lg lg:text-xl">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                {description}
              </p>
              <a
                href="#request-audit"
                className="mt-auto inline-flex min-h-11 items-center gap-2 whitespace-nowrap pt-3 text-sm font-bold text-[#e31824] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e31824] focus-visible:ring-offset-2"
              >
                Learn More
                <ArrowRight
                  aria-hidden="true"
                  className="block h-4 w-4 shrink-0 self-center"
                />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
