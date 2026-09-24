const Section11 = () => {
  return (
    <section className="relative overflow-hidden bg-[#f7faff] px-5 py-12 sm:px-8 sm:py-16 lg:px-16 lg:py-24">
      <div className="pointer-events-none absolute -left-24 top-16 h-80 w-80 rounded-full bg-blue-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-cyan-100/60 blur-3xl" />

      <div className="relative mx-auto w-full max-w-none">
        <div className="relative isolate overflow-hidden border-b border-blue-900/20 bg-gradient-to-br from-[#061f59] via-[#073b91] to-[#0b63b8] px-5 py-9 shadow-lg shadow-blue-950/10 sm:px-8 sm:py-12 lg:px-16 lg:py-14">
          <div className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full border border-white/10 bg-white/5 blur-sm" />
          <h2 className="relative max-w-4xl text-2xl font-bold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
            Why Choose Web Founders USA?
          </h2>
        </div>

        <div className="w-full bg-white px-5 py-10 sm:px-8 sm:py-14 lg:px-16 lg:py-20">
          <div className="grid gap-x-16 gap-y-8 lg:grid-cols-2 lg:gap-y-10">
            {[
              "Choosing between different automotive SEO companies requires more than comparing generic SEO packages. Automotive businesses have specific technical, local, content, and customer-acquisition requirements.",
              "Our automotive SEO experts understand the differences between dealerships, repair shops, parts businesses, trucking companies, and other automotive organizations.",
              "As an automotive SEO agency, we combine technical SEO, local optimization, content, keyword research, authority building, and conversion strategy around your actual business objectives.",
              "Our team of automotive SEO specialists focuses on sustainable organic growth rather than short-term tactics.",
              "We can also combine automotive SEO and internet marketing with broader Digital Marketing Services and Pay Per Click Advertising when a multi-channel strategy makes sense for your business.",
            ].map((paragraph, index) => (
              <p
                key={paragraph}
                className={`border-l-2 pl-5 text-base leading-8 text-slate-700 sm:text-lg ${index % 2 === 0 ? "border-blue-400" : "border-slate-300"}`}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section11;
