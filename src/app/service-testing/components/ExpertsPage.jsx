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
          Local SEO That Brings Nearby Customers
        </h2>

        {/* Description */}
        <p className="text-center text-gray-600 text-md max-w-[900px] mx-auto mb-12">
         Getting seen online does not require fancy tricks for small shops. The important thing is to appear when neighbors search in the area, which is exactly what small business SEO services focus on. Simple steps work better than complicated plans. Real outcomes, stable rates, and no extended contracts are what you can expect from some suppliers. 
         <br />
         When listings show up clearly on maps, visibility increases. Rankings rise by focusing on what locals actually type into search bars. Customers arrive faster once details like hours and location stay accurate. Trust builds through consistency, not ads. Simple changes often lead to phone rings within days. Being found at the right moment beats expensive campaigns every time.
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
              Real SEO Results Not Just Rankings
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              We do SEO services that get you real money, qualified leads, and steady traffic, not just pretty reports. We offer professional SEO services to both small and large businesses that can grow with them. With our organic SEO services, we want to help your site grow over time. With our on-page SEO services, we want to make it easier to use. And with our technical SEO services, we want to make it better.
            </p>
          </div>

          {/* Right Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Stat 1 */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
              <p className="text-gray-800 font-semibold text-center mb-4">
                Local Businesses<br></br>Supported
              </p>
              <div
                className="w-24 h-1 mx-auto mb-6"
                style={{
                  background: "linear-gradient(to right, #9333ea, #dc2626)",
                }}
              ></div>
              <p className="text-5xl font-bold text-[#0b63b8] text-center">
                400+
              </p>
            </div>

            {/* Stat 2 */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
              <p className="text-gray-800 font-semibold text-center mb-4">
                Leads Generated Through SEO
              </p>
              <div
                className="w-24 h-1 mx-auto mb-6"
                style={{
                  background: "linear-gradient(to right, #9333ea, #dc2626)",
                }}
              ></div>
              <p className="text-5xl font-bold text-[#0b63b8] text-center">
                1200K+
              </p>
            </div>

            {/* Stat 3 */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
              <p className="text-gray-800 font-semibold text-center mb-4">
                Average Organic Growth Delivered
              </p>
              <div
                className="w-24 h-1 mx-auto mb-6"
                style={{
                  background: "linear-gradient(to right, #9333ea, #dc2626)",
                }}
              ></div>
              <p className="text-5xl font-bold text-[#0b63b8] text-center">
                1,000%+
              </p>
            </div>

            {/* Stat 4 */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-8">
              <p className="text-gray-800 font-semibold text-center mb-4">
                Revenue Influenced<br></br>via SEO
              </p>
              <div
                className="w-24 h-1 mx-auto mb-6"
                style={{
                  background: "linear-gradient(to right, #9333ea, #dc2626)",
                }}
              ></div>
              <p className="text-5xl font-bold text-[#0b63b8] text-center">
                $200k+
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertsPage;
