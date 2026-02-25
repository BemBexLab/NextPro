import React from "react";

const SEOComparison = () => {
  const seoTypes = [
    {
      title: "Traditional SEO",
      subtitle: "(Foundational Search Engine Optimization)",
      whatItIs: [
        "Helping people discover your website with clarity",
        "Pages built with simple layouts, honest words, and relevant answers",
        "Consistency and value build trust over time",
        "Keyword identification shapes each page",
        "Clear structure with headers, tags, and titles",
        "Fast site speed and mobile responsiveness",
        "Building credibility through genuine background and steady reliability"
      ],
      whatItMatters: [
        "Generates consistent, long-term organic traffic",
        "Builds credibility with users and search engines",
        "Improves keyword rankings in competitive industries",
        "Lowers customer acquisition cost over time",
        "Creates strong foundation for advanced SEO strategies",
      ],
    },
    {
      title: "Local SEO",
      subtitle: "(Location-Based Search & Map Visibility Optimization)",
      whatItIs: [
        "Optimizing web presence for local audiences",
        "Enhancing visibility on Google Maps",
        "Optimizing Google Business Profile",
        "Using location-specific keywords",
        "Managing citations with uniform NAP (Name, Address, Phone)",
        "Leveraging customer feedback and trust indicators",
        "Encouraging calls, directions, bookings, and walk-ins",
      ],
      whatItMatters: [
        "Increases visibility in “near me” and local-intent searches",
        'Connects businesses with nearby ready-to-buy customers',
        "Strengthens trust through reviews and local authority",
        "Converts map impressions into real-world revenue",
        "Establishes brand dominance in specific geographic areas",
      ],
    },
    {
      title: "AI SEO / AIO",
      subtitle: "(Answer Engine Optimization & Generative Search Visibility)",
      whatItIs: [
        "Optimizing content for AI-powered search and smart assistants",
        "Shaping information so algorithms understand it better",
        "Creating clear, structured, natural content for bots",
        "Focusing on meaning and context over keywords",
        "Answering questions quickly, sometimes without clicks",
        "Grouping related topics to show depth",
      ],
      whatItMatters: [
        "AI answers replace traditional search clicks",
        "Brands are discovered in conversations, not just search results",
        "Captures users earlier in decision-making journey",
        "Future-proofs SEO strategy against algorithm/platform changes",
        "Positions brand as authority trusted by AI systems",
      ],
    },
  ];

  return (
    <section className="w-full bg-[#0B5FCC] py-20">
      <div className="w-[92%] max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium text-white mb-3">
            Traditional SEO vs Local SEO vs AI SEO (AIO)
          </h2>
          <p className="text-white text-base md:text-lg">
            A complete, future-ready search optimization framework powered by <strong>enterprise seo services</strong>.  Gone are the days when searching meant just clicking blue lines at Google. Now people find companies by asking smart speakers, tapping maps, or getting instant replies from artificial brains online. One path does not cover it anymore.
          </p>
        </div>

        {/* SEO Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1.5">
          {seoTypes.map((type, index) => (
            <div
              key={index}
              className="bg-[#1a3a5c] rounded-2xl p-8 text-white flex flex-col"
            >
              {/* Title Section - Fixed Height */}
              <div className="mb-8">
                <h3 className="text-4xl text-center font-medium mb-3">
                  {type.title}
                </h3>
                <p className="text-base text-center font-semibold mb-4 min-h-[3rem] lg:min-h-[4rem]">{type.subtitle}</p>
                <div className="w-12 h-0.5 bg-white mx-auto"></div>
              </div>

              {/* What it is Section - Takes remaining space */}
              <div className="lg:mb-10 xl:mb-0 lg:h-[340px]">
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

              {/* What it matters Section - At Bottom */}
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
