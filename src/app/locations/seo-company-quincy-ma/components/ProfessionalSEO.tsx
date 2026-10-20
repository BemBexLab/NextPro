const benefits = [
  "Increase your organic visibility for the target keywords.",
  "Drive visitors interested in your offerings.",
  "Enhance your website's content and structure.",
  "Uncover any technical SEO issues that are affecting your site.",
  "Improve your visibility in local searches.",
  "Create a strong structure of internal links.",
  "Analyze your website's traffic, leads and sales.",
];

export default function ProfessionalSEO() {
  return (
    <section className="relative overflow-hidden bg-white text-black">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(black 1px, transparent 1px), linear-gradient(90deg, black 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          backgroundPosition: "center top",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-24">
        <header className="mb-12 md:mb-16">
          <h2 className="max-w-5xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Professional SEO Services in{" "}
            <span className="text-[#0033CC]">Quincy, MA</span>
          </h2>
          <div className="mt-8 max-w-4xl space-y-4 text-xl leading-relaxed text-[#343b49] md:text-2xl">
            <p>
              Search engine optimization is important for businesses to be seen in unpaid search results. A website that is optimized can help the users find information they are looking for when they search for products and services.
            </p>
            <p>
              Just creating a website is only the first step; it should contain quality content, good technical performance, and pages serving the needs of the users.
            </p>
            <p>
              Our SEO company, willing to help businesses with different digital marketing problems, is focused on searching for the best solutions and improving the most important for websites.
            </p>
          </div>
        </header>

        <article className="border-t border-black/15 py-8 md:py-10">
          <div className="max-w-3xl text-base leading-relaxed text-[#343b49] md:text-lg">
            <p className="font-semibold text-black">
              The SEO services that we offer will help you:
            </p>
            <ul className="mt-4 space-y-2">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-[0.65em] h-1.5 w-1.5 shrink-0 bg-[#0033CC]"
                  />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 font-medium text-black">
              We treat SEO as a process and aim for constant improvements rather than quick rankings.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
