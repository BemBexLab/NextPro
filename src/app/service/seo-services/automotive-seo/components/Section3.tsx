import Link from "next/link";

const Section3 = () => {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-12 sm:px-8 sm:py-16 lg:px-16 lg:py-24">
      <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-blue-50 blur-3xl" />

      <div className="relative mx-auto w-full max-w-none">
        <div className="mb-10 flex items-start gap-4 border-b border-blue-100 pb-8 sm:mb-12 sm:pb-10">
          <span className="mt-1 h-12 w-1 shrink-0 rounded-full bg-gradient-to-b from-blue-700 to-cyan-400 sm:h-16" />
          <h2 className="max-w-4xl text-2xl font-bold leading-tight tracking-tight text-[#072d7f] sm:text-3xl lg:text-4xl">
            Car Dealership SEO Services That Generate More Opportunities
          </h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] lg:gap-20">
          <div className="space-y-6">
            <p className="text-base leading-8 text-slate-700 sm:text-lg">
              Car buyers research extensively before contacting a dealership. They search for specific makes and models, new and used inventory, dealership locations, financing, trade-ins, reviews, and service departments.
            </p>
            <p className="text-base leading-8 text-slate-700 sm:text-lg">
              Our car dealership SEO services help dealerships target these searches with a structured strategy covering inventory, commercial pages, local searches, and informative content.
            </p>
          </div>

          <div>
            <p className="mb-5 text-base font-bold leading-7 text-slate-900 sm:text-lg">
              Our car dealer SEO services can target:
            </p>
            <ul className="grid gap-x-12 gap-y-1 border-y border-slate-200 py-3 sm:grid-cols-2">
              {[
                "New and used vehicles",
                "Makes and models",
                "Vehicle inventory",
                "Certified pre-owned vehicles",
                "Dealership locations",
                "Financing and trade-ins",
                "Service departments",
                "Parts departments",
                "Vehicle specials",
                "Local dealership searches",
              ].map((item, index) => (
                <li
                  key={item}
                  className="group flex items-center gap-3 border-b border-slate-100 py-2.5 text-sm text-slate-700 transition-colors duration-200 hover:border-blue-200 hover:text-blue-700 sm:text-base"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-50 text-[10px] font-bold text-blue-700 transition-colors duration-200 group-hover:bg-blue-700 group-hover:text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative mt-12 max-w-6xl overflow-hidden rounded-[2rem] border border-blue-100 bg-gradient-to-br from-white via-white to-blue-50/80 px-6 py-8 shadow-xl shadow-blue-900/5 sm:mt-16 sm:px-10 sm:py-10 lg:px-12">
          <div className="pointer-events-none absolute -right-16 -top-20 h-48 w-48 rounded-full bg-blue-100/70 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 left-0 h-1 w-32 rounded-r-full bg-gradient-to-r from-blue-700 to-cyan-400" />
          <div className="relative">
            <div className="mb-6 h-1.5 w-16 rounded-full bg-gradient-to-r from-blue-700 to-cyan-400" />
            <div className="space-y-5">
              <p className="max-w-5xl text-base leading-8 text-slate-700 sm:text-lg">
                As a dedicated car dealer SEO company,{" "}
                <Link
                  href="/"
                  className="font-semibold text-blue-700 underline decoration-blue-300 underline-offset-4 transition-colors hover:text-blue-900"
                >
                  Web Founders USA
                </Link>{" "}
                builds a scalable SEO structure for your dealership. Our car dealer SEO service also considers conversion opportunities, helping visitors easily call your dealership, request information, schedule a test drive, or contact your sales team.
              </p>
              <p className="max-w-5xl text-base leading-8 text-slate-700 sm:text-lg">
                We also provide auto dealer SEO services for dealerships competing in demanding local markets.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-4 border-t border-blue-100 pt-6 sm:flex-row sm:items-center sm:justify-start">
              <Link
                href="/contact-us"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-700 to-blue-600 px-6 py-3.5 text-center text-sm font-bold tracking-wide text-white shadow-lg shadow-blue-700/20 transition-all duration-300 hover:-translate-y-0.5 hover:from-blue-800 hover:to-blue-700 hover:shadow-xl hover:shadow-blue-700/30 focus:outline-none focus:ring-4 focus:ring-blue-200"
              >
                REQUEST A CUSTOM DEALERSHIP SEO STRATEGY
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
