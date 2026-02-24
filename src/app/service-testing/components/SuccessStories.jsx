import Image from "next/image";
import React from "react";

const SuccessStories = () => {
  const caseStudies = [
    {
      stats: "/service-testing/bg.webp",
      title: "Cleaning Business SEO Success Story",
      description:
        "6,750% Increase in Organic Leads and 12,300% Traffic Growth for a Cleaning Business",
    },
    {
      stats: "/service-testing/bg.webp",
      title: "Law Firm SEO Case Study",
      description:
        "1,200% Growth in Organic Traffic and 750% Lead Boost for a Law Firm",
    },
    {
      stats: "/service-testing/bg.webp",
      title: "Dental Clinic SEO Results",
      description:
        "350% Rise in Organic Traffic and 480% Increase in Leads for a Dental Clinic",
    },
    {
      stats: "/service-testing/bg.webp",
      title: "E-commerce SEO Performance Review",
      description:
        "800% Increase in Organic Traffic and 950% Growth in Leads for an E-commerce Store",
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="w-[92%] max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-lg text-gray-600 mb-4 font-medium">
            Success Stories That Speak Louder Than Words
          </p>
          <h2 className="text-3xl font-medium text-[#0749A7]">
            How Smart SEO Services Drive<br></br>Real Business Growth
          </h2>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Image as background with overlay paragraph only */}
              <div className="relative w-full h-48">
                <Image
                  src={study.stats}
                  alt={study.title}
                  fill
                  className="object-cover transition-transform duration-300 transform group-hover:scale-105"
                />

                <div className="absolute inset-0 flex items-center justify-center text-center px-4 bg-gradient-to-t from-black/60 via-black/30 to-transparent">
                  <p className="text-white mt-2 text-sm md:text-lg">{study.description}</p>
                </div>
              </div>

              {/* Title below the image */}
              <div className="p-6 bg-white text-left">
                <h4 className="text-gray-900 text-lg font-bold">{study.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
