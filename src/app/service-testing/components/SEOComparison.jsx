import React from "react";

const SEOComparison = () => {
  const seoTypes = [
    {
      title: "Traditional SEO",
      subtitle: "Search Engine Optimization",
      whatItIs: [
        "Optimizing websites for Google visibility",
        "Targeting keywords people search daily",
        "Building quality backlinks for authority",
        "Improving site speed and technical health",
        "Creating content that answers user intent",
      ],
      whatItMatters: [
        "Drives consistent, long-term traffic",
        "Builds trust and credibility online",
        "Outranks competitors in organic search",
        "Increases ROI without ongoing ad spend",
        "Strengthens your brand's digital presence",
      ],
    },
    {
      title: "Local SEO",
      subtitle: "Dominate Maps & Neighborhood Searches",
      whatItIs: [
        "Optimizing Google Business Profiles",
        "Targeting location-based keywords",
        "Managing local citations and directories",
        "Generating reviews for social proof",
        "Driving calls, bookings, and walk-ins",
      ],
      whatItMatters: [
        "Puts you in front of nearby customers",
        'Boosts visibility in "near me" searches',
        "Increases trust through reviews",
        "Converts map clicks into real sales",
        "Makes you the go-to choice locally",
      ],
    },
    {
      title: "AI SEO",
      subtitle: "Answer Engine & Generative Optimization",
      whatItIs: [
        "Optimizing presence in AI search results",
        "Structuring content for direct AI answers",
        "Using semantic search strategies",
        "Leveraging automation + AI tools for insights",
        "Aligning SEO with how people now ask AI",
      ],
      whatItMatters: [
        "AI results are replacing traditional clicks",
        "Improves visibility in conversations",
        "Future-proofs your business online",
        "Captures customers earlier in their journey",
        "Positions you as an authority in AI results",
      ],
    },
  ];

  return (
    <section className="w-full bg-[#0B5FCC] py-20">
      <div className="w-[92%] max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-3">
            Traditional SEO vs Local SEO vs AI SEO
          </h2>
          <p className="text-white text-base md:text-lg">
            See how each SEO type fuels growth and why every category is
            mission-critical.
          </p>
        </div>

        {/* SEO Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1.5">
          {seoTypes.map((type, index) => (
            <div
              key={index}
              className="bg-[#1a3a5c] rounded-2xl p-8 text-white"
            >
              {/* Title Section */}
              <div className="mb-8">
                <h3 className="text-4xl text-center font-medium mb-3">
                  {type.title}
                </h3>
                <p className="text-base text-center mb-4">{type.subtitle}</p>
                <div className="w-12 h-0.5 bg-white mx-auto"></div>
              </div>

              {/* What it is Section */}
              <div className="mb-8">
                <h4 className="text-xl font-bold mb-4">What it is:</h4>
                <ul className="space-y-0">
                  {type.whatItIs.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-green-400 flex-shrink-0 mt-1">
                        ✓
                      </span>
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* What it matters Section */}
              <div>
                <h4 className="text-xl font-bold mb-4">What it matters:</h4>
                <ul className="space-y-0">
                  {type.whatItMatters.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-green-400 flex-shrink-0 mt-1">
                        ✓
                      </span>
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SEOComparison;
