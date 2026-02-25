import React from "react";

const WhyChoose = () => {
  const features = [
    { text: "SEO Experts Certified for Real Results", color: "bg-[#0052cc]" },
    { text: "Proven Success Backed by Data", color: "bg-[#ff0000]" },
    { text: "Clear Reports with Continuous Improvements", color: "bg-[#fbbc05]" },
    { text: "SEO Strategies Customized for Your Audience", color: "bg-[#0052cc]" },
    { text: "Personal SEO Manager for Dedicated Support", color: "bg-[#00875a]" },
    { text: "Reliable Partners Committed to Your Growth", color: "bg-[#ff0000]" },
  ];

  return (
    <section className="w-full bg-white py-20">
      <div className="w-[92%] max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-medium text-[#0749A7]">
            Why Choose Our SEO Services?
          </h2>
        </div>

        {/* Content Paragraphs */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="space-y-6 text-gray-700 text-[16px] leading-relaxed text-center">
            <p>
              Fixing errors lifts rankings fast with focused on page seo
              services. Spotting hidden problems on your site uncovers roadblocks
              holding things back. Start with small changes - they deliver
              speedier outcomes without delay. Pages that run smoother pull in
              more visitors naturally. Progress shows when layout makes sense
              plus words say exactly what matters. People stay longer if they
              find what they need. Over time, interest naturally turns into
              action through steady organic seo services. No tricks, just hard
              work behind the scenes.
            </p>
          </div>
        </div>

        {/* --- Image Feature Cards Section --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {features.map((item, index) => (
            <div 
              key={index} 
              className="bg-[#F8F9FA] p-6 rounded-lg flex items-start shadow-sm border border-gray-50 h-full"
            >
              {/* Vertical Color Bar */}
              <div className={`w-1 h-full min-h-[60px] ${item.color} mr-4 shrink-0`} />
              
              <p className="text-[#3c4043] text-sm font-normal leading-snug self-center">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;