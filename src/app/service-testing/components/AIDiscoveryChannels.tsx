import React from "react";

const AIDiscoveryChannels = () => {
  const aiPlatforms = [
    {
      logo: "/service-testing/chatgpt-logo-black-700x350.webp",
      name: "ChatGPT",
    },
    {
      logo: "/service-testing/perplexity-logo-black-700x350.webp",
      name: "Perplexity",
    },
    {
      logo: "/service-testing/claude-logo-black-300x149.webp",
      name: "Claude",
    },
    {
      logo: "/service-testing/Bing_logo_dark_gray_RGB.1379355071-768x295.webp",
      name: "Bing",
    },
    {
      logo: "/service-testing/gemini-logo-black-300x149.webp",
      name: "Gemini",
    },
    {
      logo: "/service-testing/images-300x82.webp",
      name: "Copilot",
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="w-[92%] max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-lg text-gray-600 mb-4 font-medium">
            AI Discovery Channels
          </p>
          <h2 className="text-5xl font-medium text-[#0749A7]">
            Get discovered. Get recognized.
            <br />
            Across every AI search.
          </h2>
        </div>

        {/* AI Platforms Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {aiPlatforms.map((platform, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300 flex items-center justify-center min-h-[140px]"
            >
              <img
                src={platform.logo}
                alt={platform.name}
                className="max-w-full max-h-16 w-auto h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIDiscoveryChannels;
