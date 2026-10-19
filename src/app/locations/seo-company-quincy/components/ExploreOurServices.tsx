import Link from "next/link";
import React from "react";

const ExploreOurServices = () => {
  return (
    <section>
      <div className="mx-auto mt-8 w-[92%] max-w-[1200px] rounded-2xl border border-blue-100 bg-gradient-to-br from-slate-50 via-white to-blue-50 p-5 shadow-sm sm:p-7">
        <p className="mb-4 text-center text-sm font-bold uppercase tracking-wider text-blue-900">
          Explore our Seo services
        </p>

        <div
          className="flex flex-wrap justify-center gap-3"
          aria-label="Related Website Design services"
        >
          {[
            {
              label: "Web Design Elk River",
              href: "/locations/web-design-elk-river/",
            },
            {
              label: "Web Design Gainesville, GA",
              href: "/locations/web-design-gainesville-ga/",
            },
            {
              label: "SEO Gwinnett",
              href: "/locations/seo-gwinnet/",
            },
            {
              label: "SEO Company in Union County, GA",
              href: "/locations/seo-company-union-county-ga/",
            },
            {
              label: "Alpharetta SEO Services",
              href: "/locations/alpharetta-seo-services/",
            },
            {
              label: "SEO Company Suwanee, GA",
              href: "/locations/seo-company-suwanee-ga/",
            },
            {
              label: "Maryland SEO Company",
              href: "/locations/maryland-seo-company/",
            },
            {
              label: "Alexandria Search Engine Optimization",
              href: "/locations/alexandria-search-engine-optimization/",
            },
            {
              label: "Prescott Search Engine Optimization",
              href: "/locations/prescott-search-engine-optimization/",
            },
          ].map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 font-semibold text-blue-700 underline decoration-blue-300 underline-offset-4 transition-all duration-200 hover:bg-blue-700 hover:text-white"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreOurServices;
