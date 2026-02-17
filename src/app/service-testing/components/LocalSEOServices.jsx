import Image from "next/image";
import React from "react";

const LocalSEOServices = () => {
  const services = [
    {
      icon: "/service-testing/keyword.png", // Replace with actual icon/image
      title: "Keyword Research",
      description:
        "We identify local keywords using expert research and premium tools that bring customers.",
    },
    {
      icon: "/service-testing/seoaudit.png", // Replace with actual icon/image
      title: "SEO Audit",
      description:
        "Our audits uncover technical gaps, competitor weaknesses, and hidden growth opportunities.",
    },
    {
      icon: "/service-testing/onpageseo.png", // Replace with actual icon/image
      title: "On-Page SEO",
      description:
        "We optimize pages with metas, headings, NLP content, and schema to rank higher and convert.",
    },
    {
      icon: "/service-testing/technicalseo.png", // Replace with actual icon/image
      title: "Technical SEO",
      description:
        "We fix crawl errors, Core Web Vitals, and indexing issues, making sure Google discovers you first.",
    },
    {
      icon: "/service-testing/linkbuilding.png", // Replace with actual icon/image
      title: "Link Building",
      description:
        "We earn high-authority backlinks from trusted local sources that build trust and long-term visibility.",
    },
    {
      icon: "/service-testing/contentmarketing.png", // Replace with actual icon/image
      title: "Content Marketing",
      description:
        "We create content ecosystems that dominate Google search and AI-driven results.",
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-20">
      <div className="w-[92%] max-w-[1200px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-lg font-semibold text-gray-600 mb-3">
            The Foundation of Local Growth
          </p>
          <h2 className="text-4xl font-medium text-gray-900">
            The Local SEO Services Every Winning Business Needs
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Icon */}
              <div className="mb-6 text-center text-5xl">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={64}
                  height={64}
                  className="mx-auto"
                />
              </div>

              {/* Title */}
              <h3 className="text-xl text-center font-medium text-gray-900 mb-1">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-center text-md leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocalSEOServices;
