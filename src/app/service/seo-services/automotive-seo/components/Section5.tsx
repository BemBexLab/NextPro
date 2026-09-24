const Section5 = () => {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-12 sm:px-8 sm:py-16 lg:px-16 lg:py-24">
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-cyan-100/50 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-blue-100/50 blur-3xl" />

      <div className="relative mx-auto w-full max-w-none">
        <div className="relative isolate overflow-hidden border-b border-blue-900/20 bg-gradient-to-br from-[#061f59] via-[#073b91] to-[#0b63b8] px-5 py-9 shadow-lg shadow-blue-950/10 sm:px-8 sm:py-12 lg:px-16 lg:py-14">
          <div className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full border border-white/10 bg-white/5 blur-sm" />
          <h2 className="relative max-w-4xl text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
            Automotive Local SEO for Nearby Customers
          </h2>
          <p className="relative mt-4 max-w-3xl text-base leading-7 text-blue-100 sm:text-lg">
            Local visibility is essential for automotive businesses that depend on customers in specific cities and service areas.
          </p>
        </div>

        <div className="w-full space-y-10 bg-[#f7faff] px-5 py-10 sm:px-8 sm:py-14 lg:space-y-14 lg:px-16 lg:py-16">
          <div className="max-w-5xl">
            <p className="border-l-2 border-blue-400 pl-5 text-base leading-8 text-slate-700 sm:text-lg">
              Our automotive local SEO agency strategies help dealerships, mechanics, repair shops, body shops, and other automotive businesses improve their visibility for location-based searches.
            </p>
          </div>

          <div className="w-full">
            <p className="mb-6 text-lg font-bold leading-7 tracking-tight text-[#072d7f] sm:text-xl">
              As an automotive local SEO company, we can optimize:
            </p>
            <ul className="grid gap-x-12 gap-y-1 border-y border-slate-200 py-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {[
                "Google Business Profile",
                "Local landing pages",
                "Business citations",
                "NAP consistency",
                "Reviews",
                "Service area pages",
                "Local content",
                "Internal links",
                "Local authority signals",
                "Competitor profiles",
              ].map((item, index) => (
                <li
                  key={item}
                  className="group flex items-center gap-3 border-b border-slate-100 py-3 text-sm text-slate-700 transition-colors duration-200 hover:border-blue-300 hover:text-blue-700 sm:text-base"
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-100 text-[11px] font-bold text-blue-700 transition-colors duration-200 group-hover:bg-blue-700 group-hover:text-white">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="max-w-5xl space-y-5 border-t border-blue-200 pt-8">
            <p className="text-base leading-8 text-slate-700 sm:text-lg">
              Our automotive local SEO service connects your business with relevant searches in the markets you serve.
            </p>
            <p className="text-base leading-8 text-slate-700 sm:text-lg">
              We also provide local SEO for automotive businesses strategies designed for single-location and multi-location companies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;
