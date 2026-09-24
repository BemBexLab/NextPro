import Link from "next/link";

const Section7 = () => {
  return (
    <section className="relative overflow-hidden bg-[#f7faff] px-5 py-12 sm:px-8 sm:py-16 lg:px-16 lg:py-24">
      <div className="pointer-events-none absolute -left-24 top-16 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-cyan-100/60 blur-3xl" />

      <div className="relative mx-auto w-full max-w-none">
        <div className="relative isolate overflow-hidden border-b border-blue-900/20 bg-gradient-to-br from-[#061f59] via-[#073b91] to-[#0b63b8] px-5 py-9 shadow-lg shadow-blue-950/10 sm:px-8 sm:py-12 lg:px-16 lg:py-14">
          <div className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full border border-white/10 bg-white/5 blur-sm" />
          <h2 className="relative max-w-5xl text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
            Automotive SEO Content &amp; Technical Optimization
          </h2>
        </div>

        <div className="w-full space-y-8 bg-white px-5 py-10 sm:px-8 sm:py-14 lg:space-y-10 lg:px-16 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-20">
            <p className="border-l-2 border-blue-400 pl-5 text-base leading-8 text-slate-700 sm:text-lg">
              Successful automotive SEO requires more than adding keywords to pages. Your website needs a strong technical foundation and useful content that answers real customer questions.
            </p>
            <p className="border-l-2 border-slate-300 pl-5 text-base leading-8 text-slate-700 sm:text-lg">
              Our automotive SEO optimization company approach includes analysis of crawlability, indexation, page speed, mobile performance, metadata, internal linking, duplicate content, redirects, URL structure, and other technical factors.
            </p>
          </div>

          <p className="max-w-5xl border-l-4 border-blue-600 bg-blue-50/70 px-6 py-5 text-base font-semibold leading-8 text-slate-800 sm:text-lg">
            We then create content around genuine search intent.
          </p>

          <div className="w-full">
            <p className="mb-6 text-lg font-bold leading-7 tracking-tight text-[#072d7f] sm:text-xl">
              Our SEO Content Writing Services can support:
            </p>
            <ul className="grid gap-x-12 gap-y-1 border-y border-slate-200 py-3 sm:grid-cols-2 lg:grid-cols-3">
              {[
                "Vehicle buying guides",
                "Automotive service pages",
                "Location pages",
                "Repair guides",
                "Make and model content",
                "FAQs",
                "Parts content",
                "Dealership resources",
                "Trucking and logistics content",
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

          <div className="max-w-6xl space-y-5 border-t border-blue-200 pt-8">
            <p className="text-base leading-8 text-slate-700 sm:text-lg">
              For additional technical guidance, read{" "}
              <Link
                href="/blog/technical-seo-issues-that-kill-rankings/"
                className="font-semibold text-blue-700 underline decoration-blue-300 underline-offset-4 transition-colors hover:text-blue-900"
              >
                Technical SEO Issues That Kill Rankings (And How to Fix Them)
              </Link>
              .
            </p>
            <p className="text-base leading-8 text-slate-700 sm:text-lg">
              If your website isn&apos;t gaining the visibility you expect,{" "}
              <Link
                href="/blog/why-your-website-is-not-ranking-on-google/"
                className="font-semibold text-blue-700 underline decoration-blue-300 underline-offset-4 transition-colors hover:text-blue-900"
              >
                Why Your Website Is Not Ranking on Google in 2026
              </Link>{" "}
              covers common areas that may require attention.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section7;
