import Link from "next/link";

const Section12 = () => {
  return (
    <section className="relative overflow-hidden bg-[#061f59] px-5 py-12 sm:px-8 sm:py-16 lg:px-16 lg:py-24">
      <div className="pointer-events-none absolute -left-24 top-0 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-cyan-400/15 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-gradient-to-br from-white/10 via-white/[0.07] to-blue-950/30 p-6 shadow-2xl shadow-black/20 backdrop-blur-sm sm:p-10 lg:p-14">
          <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full border border-white/10 bg-white/5" />
          <div className="pointer-events-none absolute bottom-0 left-0 h-1 w-40 rounded-r-full bg-gradient-to-r from-cyan-300 to-blue-400" />

          <div className="relative">
            <div className="mb-6 h-1.5 w-16 rounded-full bg-gradient-to-r from-cyan-300 to-blue-400" />
            <h2 className="max-w-4xl text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              Ready to Grow Your Automotive Business?
            </h2>

            <div className="mt-7 max-w-5xl space-y-5 text-base leading-8 text-blue-50 sm:text-lg">
              <p>
                Your customers are already searching for dealerships, vehicles, mechanics, repair shops, auto parts, trucking services, and automotive businesses on Google.
              </p>
              <p>
                The opportunity is to make sure they can find your business when they search.
              </p>
              <p>
                Web Founders USA provides specialized automotive SEO services designed to improve visibility, attract qualified traffic, generate leads, and build long-term organic growth.
              </p>
              <p>
                Whether you need car dealership SEO services, car dealer SEO services, local automotive SEO, auto repair SEO, trucking SEO, or auto parts optimization, we&apos;ll build a strategy around your market and goals.
              </p>
            </div>

            <div className="mt-10 border-t border-white/15 pt-8">
              <h3 className="text-2xl font-bold text-white sm:text-3xl">
                Get Your Free Automotive SEO Strategy
              </h3>
              <p className="mt-3 text-base leading-7 text-blue-100 sm:text-lg">
                Ready to turn automotive searches into real business opportunities?
              </p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                <Link
                  href="/contact-us"
                  className="inline-flex min-h-14 items-center justify-center rounded-xl bg-white px-5 py-3 text-center text-sm font-bold tracking-wide text-[#072d7f] shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50 focus:outline-none focus:ring-4 focus:ring-white/30"
                >
                  GET YOUR FREE SEO AUDIT
                </Link>
                <Link
                  href="/contact-us"
                  className="inline-flex min-h-14 items-center justify-center rounded-xl border border-white/30 bg-white/10 px-5 py-3 text-center text-sm font-bold tracking-wide text-white transition-all duration-300 hover:-translate-y-1 hover:border-white/60 hover:bg-white/20 focus:outline-none focus:ring-4 focus:ring-white/30"
                >
                  REQUEST A CUSTOM SEO STRATEGY
                </Link>
                <Link
                  href="/contact-us"
                  className="inline-flex min-h-14 items-center justify-center rounded-xl border border-cyan-300/50 bg-cyan-300/15 px-5 py-3 text-center text-sm font-bold tracking-wide text-cyan-50 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:bg-cyan-300/25 focus:outline-none focus:ring-4 focus:ring-cyan-200/40"
                >
                  TALK TO AN AUTOMOTIVE SEO EXPERT
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section12;
