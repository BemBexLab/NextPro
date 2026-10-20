const reasons = [
  {
    title: "Customized SEO plans",
    description:
      "We examine your website, services, target audience, competition, and business goals before we suggest improvements in your case. Your plan needs to focus on your issues rather than on a one-suits-all plan.",
  },
  {
    title: "Interest and Traffic",
    description:
      "Website traffic is beneficial only if it hits the target users interested in your services. We focus on relevant keywords and useful content matching the needs of your audience.",
  },
  {
    title: "Simple Communication",
    description:
      "In SEO, one can come across certain technical matters that are difficult to grasp. We will keep everything simple and make sure our suggestions and priorities are clear to you.",
  },
  {
    title: "Ethical Optimization",
    description:
      "Our approach implies providing useful content, having a good technical base, using good internal links, and engaging in building legitimate authority.",
  },
  {
    title: "Making Decisions Based on your Business Data",
    description:
      "We use all available website and search engine performance data for spotting possibilities, monitoring our progress, and changing the priorities accordingly.",
  },
];

export default function QuincyWhyChoose() {
  return (
    <section className="relative bg-white text-black">
      <div className="mx-auto max-w-7xl px-6 pb-16 md:px-12 md:pb-24">
        <header className="mb-10 md:mb-14">
          <h2 className="max-w-5xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Why Choose Web Founders USA as Your{" "}
            <span className="text-[#0033CC]">SEO Agency in Quincy, MA?</span>
          </h2>
          <p className="mt-8 max-w-4xl text-xl leading-relaxed text-[#343b49] md:text-2xl">
            As an SEO partner means handing control of an important aspect of your company to someone else. You need a plan that suits your needs, communicates clearly, and provides meaningful advice.
          </p>
        </header>
        <div className="grid gap-px overflow-hidden border border-black/10 bg-black/10 md:grid-cols-2">
          {reasons.map((reason, index) => (
            <article
              key={reason.title}
              className={`bg-white p-6 md:p-8 ${index === reasons.length - 1 ? "md:col-span-2" : ""}`}
            >
              <h3 className="text-xl font-semibold tracking-tight md:text-2xl">
                {reason.title}
              </h3>
              <p className="mt-3 max-w-2xl text-lg leading-relaxed text-[#4b5563]">
                {reason.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
