import React from "react";

const ExpertsPage = () => {
  const certifications = [
    { logo: "/service-testing/GA-certified.webp" },
    { logo: "/service-testing/images-300x82.webp" },
    { logo: "/service-testing/hubspot.webp" },
    { logo: "/service-testing/google-digital-garage-1.webp" },
  ];
  return (
    <section className="w-full bg-white py-20">
      <div className="w-[92%] max-w-[1200px] mx-auto">
        {/* Heading */}
        <h2 className="text-center text-4xl md:text-5xl font-medium text-[#0b63b8] mb-6">
          Certified Local SEO Experts
        </h2>

        {/* Description */}
        <p className="text-center text-gray-600 text-md max-w-[900px] mx-auto mb-12">
          Think of us as your growth crew. Certified, battle-tested, and fueled
          by AI, we ensure your brand appears where it matters: Maps, Search,
          and AI search results. The result? More clicks, more calls, more
          customers who stick.
        </p>

        {/* Certification Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-8 flex items-center justify-center min-h-[120px]"
            >
              <img
                src={cert.logo}
                alt="certification"
                className="h-20 object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lowwer Body */}
      <div className="w-[92%] max-w-[1200px] mx-auto py-20 mt-20 flex justify-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div>
            <h2 className="text-5xl font-normal text-gray-900 mb-6 leading-tight">
              Growth You Can Measure Or The Next Month Is On Us
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              If we don't move the needle or show meaningful improvements within
              60 days, your next month is on us. At LocalMighty, our confidence
              is built on more than a decade of hands-on experience, proven
              systems, and hundreds of real success stories. Many clients see
              measurable gains in as little as 30 days, with results that last.
              We are local search champions with a relentless work ethic and a
              team committed to driving every campaign forward. Our
              battle-tested process puts your business ahead on Google Search,
              Google Maps, and AI search platforms.
            </p>
          </div>

          {/* Right Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Stat 1 */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
              <p className="text-gray-800 font-semibold text-center mb-4">
                Local Businesses<br></br>Served
              </p>
              <div
                className="w-24 h-1 mx-auto mb-6"
                style={{
                  background: "linear-gradient(to right, #9333ea, #dc2626)",
                }}
              ></div>
              <p className="text-5xl font-bold text-[#0b63b8] text-center">
                500+
              </p>
            </div>

            {/* Stat 2 */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
              <p className="text-gray-800 font-semibold text-center mb-4">
                Leads Generated Across Campaigns
              </p>
              <div
                className="w-24 h-1 mx-auto mb-6"
                style={{
                  background: "linear-gradient(to right, #9333ea, #dc2626)",
                }}
              ></div>
              <p className="text-5xl font-bold text-[#0b63b8] text-center">
                900K+
              </p>
            </div>

            {/* Stat 3 */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
              <p className="text-gray-800 font-semibold text-center mb-4">
                Average Organic Traffic Growth
              </p>
              <div
                className="w-24 h-1 mx-auto mb-6"
                style={{
                  background: "linear-gradient(to right, #9333ea, #dc2626)",
                }}
              ></div>
              <p className="text-5xl font-bold text-[#0b63b8] text-center">
                2,000%+
              </p>
            </div>

            {/* Stat 4 */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
              <p className="text-gray-800 font-semibold text-center mb-4">
                Revenue Scale<br></br>Supported
              </p>
              <div
                className="w-24 h-1 mx-auto mb-6"
                style={{
                  background: "linear-gradient(to right, #9333ea, #dc2626)",
                }}
              ></div>
              <p className="text-5xl font-bold text-[#0b63b8] text-center">
                $400M+
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertsPage;
