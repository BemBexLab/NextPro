import Image from "next/image";
import React from "react";

const SuccessStories = () => {
  const caseStudies = [
    {
      stats: "/service-testing/stat1.png",
      title: "Cleaning Business Case Study",
    },
    {
      stats: "/service-testing/stat2.png",
      title: "Law Office Case Study",
    },
    {
      stats: "/service-testing/stat3.png",
      title: "Dentist Case Study",
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
            Why Local Businesses Win With<br></br>LocalMighty
          </h2>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              {/* Image */}
              <Image
                src={study.stats}
                alt={study.title}
                width={400}
                height={250}
                className="w-full h-48 object-cover transition-transform duration-300 transform group-hover:scale-105"
              />

              {/* White Footer with Title */}
              <div className="p-6">
                <h4 className="text-gray-900 text-xl font-bold">
                  {study.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
