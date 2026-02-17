import React from "react";

const SEOProcess = () => {
  const processSteps = [
    {
      number: "1",
      title: "Deep Discovery & Audit",
      description:
        "We start by uncovering every gap and growth opportunity through a detailed SEO audit and competitive analysis. From technical issues to competitor benchmarks and local search signals, we document everything. This clarity sets the stage for a strategy that's tailored, data-driven, and designed to move the needle from day one.",
    },
    {
      number: "2",
      title: "Strategy Blueprint & SOPs",
      description:
        "Instead of random tasks, we create a blueprint that outlines the entire journey step by step. Detailed SOPs, workflows, and defined roles ensure nothing slips through the cracks. This disciplined approach transforms complex SEO into a predictable, repeatable system that produces measurable results, campaign after campaign.",
    },
    {
      number: "3",
      title: "Agile Implementation With AI",
      description:
        "Markets shift and algorithms change frequently, so our execution is agile. We move in sprints, adapt in real-time, and integrate AI in our workflows for faster insights and smarter decisions. From keyword mapping to entity optimization across Google and AI search, our systems keep your business ahead of competitors, not chasing them.",
    },
    {
      number: "4",
      title: "Execution & Continuous Optimization",
      description:
        "Every deliverable flows through a structured workflow with strict accountability. Our team of specialists, from content to technical SEO, executes seamlessly, while AI and automation enhance speed and accuracy. Optimization never stops; we continually refine our strategies as data evolves, ensuring that rankings, traffic, and leads keep compounding over time.",
    },
    {
      number: "5",
      title: "Transparent Reporting & Lasting Growth",
      description:
        "We don't hide behind jargon or vanity metrics. Every campaign is fully documented, with problems identified, strategies applied, and results achieved. You'll see how our process converts visibility into calls, leads, and revenue. With us, SEO is not just rankings; it's a growth engine built for the long run.",
    },
  ];

  return (
    <section className="w-full bg-[#0B5FCC] py-20">
      <div className="w-[92%] max-w-[1200px] mx-auto">
        {/* Header */}
        <h2 className="text-[45px] font-semibold text-white mb-16">
          Our SEO Process: Built To Deliver Measurable Growth
        </h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-[23px] top-0 bottom-0 w-[2px] bg-white/30"></div>

          {/* Process Steps */}
          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative flex items-start gap-6">
                {/* Number Circle */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-white border-4 border-[#0B5FCC] flex items-center justify-center">
                    <span className="text-[#0B5FCC] font-bold text-lg">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content Card */}
                <div className="flex-1 bg-white rounded-2xl p-8 shadow-lg">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                    {step.title}
                  </h3>
                  <div className="w-60 h-0.5 bg-gray-300 mb-4"></div>
                  {/* {step.number === "4" && (
                    // <div className="w-16 h-1 bg-gray-300 mb-4"></div>
                  )} */}
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SEOProcess;
