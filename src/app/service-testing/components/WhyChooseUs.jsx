import React from "react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: "👨‍⚕️", // Blue dentist chair icon placeholder
      iconBg: "bg-blue-50",
      iconColor: "text-blue-500",
      title: "Less Time in the Chair",
      description:
        "Justo non dolor lectus ac egestas dictum. Leo tempus nec amet fringilla. Eu semper velit tristique semper. Laoreet mi lacus nisi diam in.",
    },
    {
      icon: "🦷", // Purple tooth icon placeholder
      iconBg: "bg-purple-50",
      iconColor: "text-purple-500",
      title: "More Efficient",
      description:
        "Justo non dolor lectus ac egestas dictum. Leo tempus nec amet fringilla. Eu semper velit tristique semper. Laoreet mi lacus nisi diam in.",
    },
    {
      icon: "🦷", // Red tooth icon placeholder
      iconBg: "bg-red-50",
      iconColor: "text-red-500",
      title: "Longer Lasting",
      description:
        "Justo non dolor lectus ac egestas dictum. Leo tempus nec amet fringilla. Eu semper velit tristique semper. Laoreet mi lacus nisi diam in.",
    },
    {
      icon: "😊", // Green smile icon placeholder
      iconBg: "bg-green-50",
      iconColor: "text-green-500",
      title: "More Comfortable Experience",
      description:
        "Justo non dolor lectus ac egestas dictum. Leo tempus nec amet fringilla. Eu semper velit tristique semper. Laoreet mi lacus nisi diam in.",
    },
  ];

  return (
    <section className="w-full bg-[#EBF4FC] py-12 md:py-16 lg:py-20">
      <div className="w-[92%] max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-10 md:mb-12 lg:mb-14">
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#0a3254] inline-block relative pb-3">
            Why Choose Us?
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-14 md:w-16 h-1 bg-[#FF8C42] rounded-full"></div>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 items-center">
          {/* Left Side - Features */}
          <div className="space-y-4 md:space-y-5">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-5 md:p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-start gap-3 md:gap-4">
                  {/* Icon */}
                  <div
                    className={`flex-shrink-0 w-12 h-12 md:w-14 md:h-14 ${feature.iconBg} rounded-xl md:rounded-[14px] flex items-center justify-center text-xl md:text-2xl`}
                  >
                    <span className={feature.iconColor}>{feature.icon}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-base md:text-lg lg:text-xl font-bold text-[#0a3254] mb-1.5 md:mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-500 text-xs md:text-sm lg:text-[15px] leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side - Image */}
          <div className="relative mt-6 lg:mt-0">
            <div className="relative rounded-[2rem] md:rounded-[2.5rem] lg:rounded-[3rem] overflow-hidden border-[6px] md:border-[8px] lg:border-[10px] border-[#4AB8E8] shadow-xl">
              <img
                src="/service-testing/whychooseus.png"
                alt="Dental practice"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;