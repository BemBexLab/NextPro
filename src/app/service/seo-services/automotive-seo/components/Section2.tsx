import Link from "next/link";

const Section2 = () => {
  return (
    <section className="relative overflow-hidden bg-[#f7faff] px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
      <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-20 h-80 w-80 rounded-full bg-cyan-200/40 blur-3xl" />

      <div className="relative mx-auto w-full max-w-none">
        <div className="w-full">
          <div className="relative isolate overflow-hidden border-b border-blue-900/20 bg-gradient-to-br from-[#061f59] via-[#073b91] to-[#0b63b8] px-5 py-9 shadow-lg shadow-blue-950/10 sm:px-8 sm:py-12 lg:px-16 lg:py-14">
            <div className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full border border-white/10 bg-white/5 blur-sm" />
            <div className="pointer-events-none absolute bottom-0 right-24 h-24 w-24 rounded-full bg-cyan-300/20 blur-2xl" />
            <h2 className="relative max-w-4xl text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
              Specialized SEO for the Automotive Industry
            </h2>
          </div>

          <div className="w-full space-y-10 px-5 py-10 sm:px-8 sm:py-14 lg:space-y-14 lg:px-16 lg:py-16">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-20">
              <p className="border-l-2 border-blue-400 pl-5 text-base leading-8 text-slate-700 sm:text-lg">
                Automotive websites have unique SEO challenges. Dealerships may have thousands of inventory pages, multiple locations, changing vehicle listings, financing pages, and service departments.
              </p>
              <p className="border-l-2 border-slate-300 pl-5 text-base leading-8 text-slate-700 sm:text-lg">
                Repair shops need visibility for individual services, while trucking and parts businesses target completely different search terms.
              </p>
            </div>

            <p className="max-w-6xl border-l-4 border-blue-600 bg-white/80 px-6 py-5 text-base font-semibold leading-8 text-slate-800 shadow-sm ring-1 ring-blue-100 sm:text-lg">
              Our automotive SEO services are built around your business model, target locations, services, competitors, and customers.
            </p>

            <div className="w-full">
              <p className="mb-6 text-lg font-bold leading-7 tracking-tight text-[#072d7f] sm:text-xl">
                Our strategy can include:
              </p>
              <ul className="grid gap-x-12 gap-y-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {[
                  "Technical SEO",
                  "Automotive keyword research",
                  "Local SEO",
                  "Google Business Profile optimization",
                  "Vehicle and inventory optimization",
                  "Service and location page optimization",
                  "Automotive content",
                  "Internal linking",
                  "Authority building",
                  "Reputation management",
                  "Competitor analysis",
                  "Conversion optimization",
                ].map((item, index) => (
                  <li
                    key={item}
                    className="group flex items-center gap-3 border-b border-slate-200/80 py-3 text-slate-700 transition-colors duration-200 hover:border-blue-300 hover:text-blue-700"
                  >
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-100 text-[11px] font-bold text-blue-700 transition-colors duration-200 group-hover:bg-blue-700 group-hover:text-white">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm font-medium sm:text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="max-w-6xl border-t border-blue-200 pt-7 text-base leading-8 text-slate-700 sm:text-lg">
              If you need broader local visibility, our{" "}
              <Link
                href="/service/seo-services/local-seo-services/"
                className="inline-flex items-center rounded-full bg-blue-100 px-3 py-1 font-semibold text-blue-700 underline decoration-blue-300 underline-offset-4 transition-all duration-200 hover:bg-blue-700 hover:text-white"
              >
                Local SEO Services
              </Link>{" "}
              can also support your automotive campaign with location-focused optimization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
