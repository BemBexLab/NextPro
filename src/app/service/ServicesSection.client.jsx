import Link from "next/link";
import { FaSearch } from "react-icons/fa";
import { services } from "@/data/services";

export default function ServicesSection() {
  const seoService = services.find((service) => service.id === "seo-services") || {
    id: "seo-services",
    title: "SEO Services",
    desc: "Professional SEO services including technical audits, on-page optimization, local SEO, and growth-driven strategies.",
    icon: FaSearch,
  };

  return (
    <section className="bg-white px-4 py-16 text-white sm:px-6 lg:px-8 md:py-24">
      <div className="mx-auto max-w-7xl">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-sm text-gray-600">
            <li>
              <Link href="/" className="transition-colors hover:text-[#072d7f]">
                Home
              </Link>
            </li>
            <li aria-hidden="true">{">"}</li>
            <li className="font-medium text-[#072d7f]">Service</li>
          </ol>
        </nav>

        <div className="mb-12 text-center md:mb-20">
          <p className="mb-2 text-sm font-semibold text-[#FF3C1B] md:mb-3 md:text-base">
            Services
          </p>
          <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
            <span className="bg-gradient-to-r from-[#072d7f] to-[#A7C7E7] bg-clip-text text-transparent">
              Digital Services That <br />
              Deliver Results
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.id}
                href={`/service/${service.id}`}
                className="group rounded-[30px] border border-transparent bg-[#072d7f] p-6 transition-all duration-300 hover:border-[#DE2F04] md:p-8"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-[20px] border border-transparent bg-[rgba(255,255,255,0.10)] transition-all duration-300 group-hover:border-[#DE2F04] md:mb-6 md:h-16 md:w-16">
                  {Icon ? (
                    <Icon className="h-6 w-6 text-[#f84318] md:h-8 md:w-8" />
                  ) : (
                    <img
                      src={service.img}
                      alt={service.title}
                      className="h-6 w-6 object-contain md:h-8 md:w-8"
                    />
                  )}
                </div>

                <h3 className="mb-2 text-lg font-semibold md:mb-3 md:text-xl">
                  <span className="bg-gradient-to-r from-[#ffb199] to-white bg-clip-text text-transparent">
                    {service.title.split(" ")[0]}
                  </span>{" "}
                  {service.title.split(" ").slice(1).join(" ")}
                </h3>

                <p className="mb-4 text-xs leading-relaxed text-white md:mb-6 md:text-sm">
                  {service.desc}
                </p>

                <span className="inline-flex h-10 w-10 items-center justify-center rounded-[20px] bg-white text-lg font-bold text-[#072d7f] md:h-11 md:w-11">
                  →
                </span>
              </Link>
            );
          })}

          <Link
            href={`/service/${seoService.id}`}
            className="group rounded-[30px] border border-transparent bg-[#072d7f] p-6 transition-all duration-300 hover:border-[#DE2F04] md:p-8"
          >
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-[20px] border border-transparent bg-[rgba(255,255,255,0.10)] transition-all duration-300 group-hover:border-[#DE2F04] md:mb-6 md:h-16 md:w-16">
              {(() => {
                const Icon = seoService.icon || FaSearch;
                return <Icon className="h-6 w-6 text-[#f84318] md:h-8 md:w-8" />;
              })()}
            </div>

            <h3 className="mb-2 text-lg font-semibold md:mb-3 md:text-xl">
              <span className="bg-gradient-to-r from-[#ffb199] to-white bg-clip-text text-transparent">
                {seoService.title.split(" ")[0]}
              </span>{" "}
              {seoService.title.split(" ").slice(1).join(" ")}
            </h3>

            <p className="mb-4 text-xs leading-relaxed text-white md:mb-6 md:text-sm">
              {seoService.desc}
            </p>

            <span className="inline-flex h-10 w-10 items-center justify-center rounded-[20px] bg-white text-lg font-bold text-[#072d7f] md:h-11 md:w-11">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
