import Link from "next/link";

const Section6 = () => {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-12 sm:px-8 sm:py-16 lg:px-16 lg:py-24">
      <div className="pointer-events-none absolute -right-24 top-16 h-80 w-80 rounded-full bg-blue-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-cyan-100/50 blur-3xl" />

      <div className="relative mx-auto w-full max-w-none">
        <div className="relative isolate overflow-hidden border-b border-blue-900/20 bg-gradient-to-br from-[#061f59] via-[#073b91] to-[#0b63b8] px-5 py-9 shadow-lg shadow-blue-950/10 sm:px-8 sm:py-12 lg:px-16 lg:py-14">
          <div className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full border border-white/10 bg-white/5 blur-sm" />
          <h2 className="relative max-w-4xl text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
            SEO for Trucking, Logistics &amp; Auto Parts
          </h2>
        </div>

        <div className="w-full space-y-7 bg-[#f7faff] px-5 py-10 sm:px-8 sm:py-14 lg:space-y-8 lg:px-16 lg:py-16">
          <p className="max-w-6xl border-l-2 border-blue-400 pl-5 text-base leading-8 text-slate-700 sm:text-lg">
            The automotive industry includes more than dealerships and repair shops. Trucking, logistics, commercial transportation, and auto parts businesses also need targeted organic visibility.
          </p>
          <p className="max-w-6xl text-base leading-8 text-slate-700 sm:text-lg">
            Our truck company SEO strategies can target relevant commercial searches, service areas, fleet solutions, transportation services, and location based opportunities.
          </p>
          <p className="max-w-6xl text-base leading-8 text-slate-700 sm:text-lg">
            We also provide seo marketing for truck companies, trucking SEO, and seo for logistics strategies based on your business model and target market.
          </p>
          <p className="max-w-6xl border-l-4 border-blue-600 bg-white/80 px-6 py-5 text-base leading-8 text-slate-700 shadow-sm ring-1 ring-blue-100 sm:text-lg">
            For automotive parts companies, our auto parts SEO service focuses on product categories, vehicle-specific searches, part-related keywords, informational content, and transactional search intent.
          </p>

          <div className="border-t border-blue-200 pt-8 sm:pt-10">
            <p className="max-w-5xl text-base leading-8 text-slate-700 sm:text-lg">
              If you sell automotive products online, our{" "}
              <Link
                href="/service/seo-services/ecommerce-seo/"
                className="font-semibold text-blue-700 underline decoration-blue-300 underline-offset-4 transition-colors hover:text-blue-900"
              >
                E-commerce SEO Services
              </Link>{" "}
              can complement your automotive strategy by improving category and product visibility.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section6;
