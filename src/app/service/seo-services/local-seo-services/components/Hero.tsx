import Link from "next/link";

const results = [
  { value: "25M+", label: "MONTHLY ORGANIC VISITORS" },
  { value: "500+", label: "SEO CASE STUDIES" },
  { value: "34M+", label: "ECOMMERCE TRANSACTIONS" },
  { value: "7.2M+", label: "QUALIFIED LEADS" },
];

const Hero = () => {
  return (
    <section className="bg-white py-14 sm:py-20 lg:py-24">
      <div className="mx-auto w-[92%] max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(20rem,0.8fr)] lg:gap-14">
          <div className="max-w-[52rem]">
            <div aria-hidden="true" className="mb-7 h-1 w-14 bg-[#c8102e]" />
            <h1 className="text-[2.5rem] font-bold leading-[1.04] tracking-[-0.035em] text-slate-950 text-balance sm:text-5xl lg:text-[3.5rem]">
              Increase Leads from Local Customers with Local SEO Services - Web
              Founders USA
            </h1>

            <h2 className="mt-8 max-w-2xl text-xl font-semibold leading-snug tracking-[0.005em] text-[#0b63b8] sm:mt-9 sm:text-2xl">
              What If Your Next Customer Is Just Around the Corner?
            </h2>

            <p className="mt-5 text-base font-medium leading-7 tracking-[0.005em] text-slate-800 sm:text-lg">
              Turn Local Searches Into Real Business Opportunities
            </p>

            <p className="mt-4 max-w-2xl text-base leading-7 tracking-[0.005em] text-slate-600 sm:leading-8">
              Our local SEO services help your business appear in local Google
              search results when <strong className="font-semibold text-slate-950">nearby</strong> customers look for your
              services. We optimize your <strong className="font-semibold text-slate-950">Google Business Profile</strong>,{" "}
              <strong className="font-semibold text-slate-950">website</strong>,{" "}
              <strong className="font-semibold text-slate-950">local keywords</strong>,{" "}
              <strong className="font-semibold text-slate-950">business listings</strong>, and customer reviews to improve
              your local visibility. This helps more people find your business,
              contact you, and become your customers.
            </p>

            <Link
              href="/contact-us"
              className="mt-8 inline-flex min-h-14 items-center justify-center bg-[#c8102e] px-7 py-4 text-base font-bold text-white transition-colors hover:bg-[#a90d27] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c8102e] focus-visible:ring-offset-2 sm:mt-9 sm:text-lg"
            >
              Talk to a Local SEO Expert
            </Link>
          </div>

          <dl className="grid grid-cols-2 border-y border-l-2 border-slate-200 border-l-[#c8102e] lg:ml-2">
            {results.map((result, index) => (
              <div
                key={result.label}
                className={`flex min-h-36 flex-col justify-center px-5 py-6 sm:min-h-40 sm:px-7 sm:py-8 ${
                  index < 2 ? "border-b border-slate-200" : ""
                } ${index % 2 === 0 ? "border-r border-slate-200" : ""}`}
              >
                <dt className="text-4xl font-bold leading-none tracking-[-0.045em] text-[#0b63b8] sm:text-5xl lg:text-[3.5rem]">
                  {result.value}
                </dt>
                <dd className="mt-3 max-w-44 text-[0.7rem] font-semibold leading-5 tracking-[0.09em] text-slate-600 sm:text-xs sm:tracking-[0.1em]">
                  {result.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Hero;
