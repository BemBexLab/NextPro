import React from "react";

const WhyChoose = () => {
  const reasons = [
    {
      text: "Google-certified SEO specialists",
      color: "bg-blue-600",
    },
    {
      text: "Proven track record of success",
      color: "bg-red-600",
    },
    {
      text: "Thorough reporting and continuous optimization",
      color: "bg-yellow-500",
    },
    {
      text: "Local focus",
      color: "bg-blue-600",
    },
    {
      text: "Dedicated account manager for optimum support",
      color: "bg-green-600",
    },
    {
      text: "The Perfect Partners",
      color: "bg-red-600",
    },
  ];

  return (
    <section className="w-full bg-white py-20">
      <div className="w-[92%] max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center mb-5">
          <h2 className="text-4xl font-medium text-[#0749A7]">
            Why Choose LocalMighty?
          </h2>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-6 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 flex items-center gap-4 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Colored Vertical Line */}
              <div
                className={`w-1 h-24 ${reason.color} rounded-full flex-shrink-0`}
              ></div>

              {/* Text */}
              <p className="text-gray-700 text-[15px] leading-relaxed flex-1 pt-2">
                {reason.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
