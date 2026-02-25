import Image from "next/image";
import React from "react";

const LocalSEOServices = () => {
  const services = [
    {
      icon: "/service-testing/keyword.png", // Replace with actual icon/image
      title: "Keyword Strategy",
      description: (
        <>
          We find the high-intent searches that your customers really use, and
          then we put the terms that will bring in steady calls, visits, and
          sales at the top of the list. This is great for{" "}
          <strong>professional SEO services</strong> and{" "}
          <strong>small business SEO services</strong> that want to grow.
        </>
      ),
    },
    {
      icon: "/service-testing/seoaudit.png", // Replace with actual icon/image
      title: "Full SEO Audit",
      description: (
        <>
          We do a thorough check of your site through{" "}
          <a
            href="/service/seo-services/seo-audit/"
            className="text-blue-800 font-bold hover:underline"
            rel="noopener noreferrer"
          >
            SEO audit services
          </a>{" "}
          to find things that are keeping it from ranking, missed chances, and
          gaps in your competitors' sites. Then we turn that information into an
          action plan that also helps with{" "}
          <strong>enterprise SEO services</strong>.
        </>
      ),
    },
    {
      icon: "/service-testing/onpageseo.png", // Replace with actual icon/image
      title: "On-Page SEO Optimization",
      description: (
        <>
          With <strong>on page SEO services</strong> and{" "}
          <strong>SEO copywriting services</strong>, we improve your pages by
          giving them better structure, smarter headings, internal links, and
          on-page signals. This helps Google understand your content and get
          more users to convert.
        </>
      ),
    },
    {
      icon: "/service-testing/technicalseo.png", // Replace with actual icon/image
      title: "Technical SEO Fixes",
      description: (
        <>
          We fix crawl issues, indexing problems, site speed, Core Web Vitals,
          and architecture so that your website works the way it should. These
          are advanced <strong>technical SEO services</strong> backed by
          detailed <strong>SEO audit services</strong> that make your site
          easier to find.
        </>
      ),
    },
    {
      icon: "/service-testing/linkbuilding.png", // Replace with actual icon/image
      title: "Authority & Link Growth",
      description: (
        <>
          We get quality mentions and backlinks from relevant sources to build
          trust, improve domain authority, and move competitive pages up. This is
          all part of our <strong>professional SEO services</strong> approach and long-term
          <strong>organic SEO services</strong> mindset, not spammy links.
        </>
      ),
    },
    {
      icon: "/service-testing/contentmarketing.png", // Replace with actual icon/image
      title: "Content & SEO Copywriting",
      description: (
        <>
          We create content that matches search intent and drives action: service
          pages, location pages, blogs, and landing pages, high-impact <strong>SEO copywriting services</strong> made for AI + Google results.
        </>
      ),
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
            SEO Services Built to Win Rankings, Traffic, and Customers
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
