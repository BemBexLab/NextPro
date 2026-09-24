import Link from "next/link";

const Section4 = () => {
  return (
    <section className="relative overflow-hidden bg-[#f7faff] px-5 py-12 sm:px-8 sm:py-16 lg:px-16 lg:py-24">
      <div className="pointer-events-none absolute -right-24 top-16 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-cyan-100/60 blur-3xl" />

      <div className="relative mx-auto w-full max-w-none">
        <div className="relative isolate overflow-hidden border-b border-blue-900/20 bg-gradient-to-br from-[#061f59] via-[#073b91] to-[#0b63b8] px-5 py-9 shadow-lg shadow-blue-950/10 sm:px-8 sm:py-12 lg:px-16 lg:py-14">
          <div className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full border border-white/10 bg-white/5 blur-sm" />
          <h2 className="relative max-w-4xl text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
            SEO for Automotive Businesses, Repair Shops &amp; Mechanics
          </h2>
        </div>

        <div className="w-full space-y-9 px-5 py-10 sm:px-8 sm:py-14 lg:space-y-12 lg:px-16 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-20">
            <p className="border-l-2 border-blue-400 pl-5 text-base leading-8 text-slate-700 sm:text-lg">
              Our seo for automotive businesses strategy goes beyond dealerships. We work with mechanics, repair shops, body shops, detailing businesses, parts companies, and specialized automotive service providers.
            </p>
            <p className="border-l-2 border-slate-300 pl-5 text-base leading-8 text-slate-700 sm:text-lg">
              Our seo for automotive campaigns focus on the services and searches that matter to your customers.
            </p>
          </div>

          <p className="max-w-6xl border-l-4 border-blue-600 bg-white/80 px-6 py-5 text-base leading-8 text-slate-700 shadow-sm ring-1 ring-blue-100 sm:text-lg">
            For repair businesses, our seo services for auto repair strategy can target maintenance, diagnostics, brake repair, transmission services, engine repair, inspections, and other high-intent searches.
          </p>

          <div className="w-full">
            <p className="mb-6 text-lg font-bold leading-7 tracking-tight text-[#072d7f] sm:text-xl">
              We provide specialized strategies for:
            </p>
            <ul className="grid gap-x-12 gap-y-1 border-y border-slate-200 py-3 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Mechanic SEO",
                "SEO for auto AC repair",
                "Brake repair shop SEO",
                "SEO for auto body shops",
                "SEO for car detailing",
                "Auto repair SEO",
                "Automotive reputation management",
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

          <div className="max-w-6xl border-t border-blue-200 pt-8">
            <p className="text-base leading-8 text-slate-700 sm:text-lg">
              When customers search for “brake repair near me,” “mechanic near me,” or “auto AC repair,” they are often looking for a business they can contact quickly. Your website needs dedicated, useful pages that match those search intents.
            </p>
            <p className="mt-6 text-base leading-8 text-slate-700 sm:text-lg">
              Learn more about customer search behavior in{" "}
              <Link
                href="/blog/how-do-people-find-auto-repair-shops-on-google"
                className="font-semibold text-blue-700 underline decoration-blue-300 underline-offset-4 transition-colors hover:text-blue-900"
              >
                How Do People Find Auto Repair Shops on Google?
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section4;
