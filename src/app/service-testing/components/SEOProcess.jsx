import React from "react";

const SEOProcess = () => {
  const processSteps = [
    {
      number: "1",
      title: "Site + Market Audit",
      description:
        "Start here - see it all laid out. Your spot right now, who else is playing, what's holding you back. Dive into real SEO work with technical SEO services: can search engines reach your pages? Are they saving them properly. What about those web performance markers people talk about in seo optimization services? Map every chance to move forward, both immediate fixes and moves that pay off later. No assumptions needed. A solid starting line shows up in full view.",
    },
    {
      number: "2",
      title: "SEO Roadmap & Playbooks",
      description:
        "After that comes the strategy shaped by our findings through seo consulting services. This plan lays out your content path while defining solid targets for on page seo services work. Whether you run a tiny shop or a large team, everything remains structured and trackable without confusion.",
    },
    {
      number: "3",
      title: "Execution Sprints",
      description:
        "Because speed keeps changing, steps stay small and quick in our organic seo services approach. Testing happens quickly, updates come out quickly, performance is closely watched, and changes are made based on what works. Better topic matches and smarter links within pages appear through focused on page seo services, and the purpose lines up more closely. This makes natural search support more solid, which increases visibility where it matters most. Each result immediately affects the next move.",
    },
    {
      number: "4",
      title: "Content That Ranks & Converts",
      description:
        "If visitors don't buy, rankings don't matter. We use seo copywriting services to make landing pages, service pages, and supporting articles that match what people are really looking for and get them to take action. We offer shopify seo services for collections and products if you're on eCommerce. If you're on CMS, we offer wordpress seo services that are built for clean structure and growth.",
    },
    {
      number: "5",
      title: "Authority Building & Trust Signals",
      description:
        "Start solid, then comes respect with organic seo services. With steady effort, real visibility grows - backed by genuine references and clear expertise. Pages rise when they're seen as reliable, guided by consistent signals instead of shortcuts. Strength builds slowly, but it lasts, just like with best seo services.",
    },
    {
      number: "6",
      title: "Reporting, Learnings & Growth Loops",
      description:
        "Month by month, signs point upward with seo optimization services - visitors grow, interest builds, outcomes take shape. What delivers gains focus. What falls short loses steam without needing a push. Reports tell the story behind our seo consulting services: effort matches outcome. Progress creeps forward, not in leaps but steady tweaks, reviewed again and again.",
    },
  ];

  return (
    <section className="w-full bg-[#0B5FCC] py-20">
      <div className="w-[92%] max-w-[1200px] mx-auto">
        {/* Header */}
        <h2 className="text-[40px] font-semibold text-white mb-16 leading-snug">
          Our SEO Framework: Built for Consistent, Trackable Results
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
