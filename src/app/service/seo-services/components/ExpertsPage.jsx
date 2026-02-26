"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { getServiceById } from "@/data/services";

const ExpertsPage = ({ params }) => {
  const serviceId = params?.id || "seo-services";
  const service = getServiceById(serviceId);
  const [clickedArrows, setClickedArrows] = useState([]);
  const [visibleCards, setVisibleCards] = useState(6);

  const handleArrowClick = (index) => {
    // Do not prevent default or stop propagation so Link navigation works.
    setClickedArrows((prev) => {
      if (prev.includes(index)) return prev;
      const next = [...prev, index];
      setTimeout(() => {
        setClickedArrows((innerPrev) => innerPrev.filter((i) => i !== index));
      }, 1200);
      return next;
    });
  };

  if (!service) {
    return (
      <div className="py-24 text-center">
        <h2 className="text-2xl font-bold">Service not found</h2>
        <p className="mt-4">We couldn't find the service you're looking for.</p>
        <div className="mt-6">
          <Link href="/service" className="text-[#072d7f] underline">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  const formatHtml = (s) => ({
    __html: (s || "").toString().replace(/\n/g, "<br/>"),
  });

  // New Component Data
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
        <motion.h2
          className="text-center text-4xl md:text-5xl font-medium text-[#0b63b8] mb-6"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          SEO That Brings Nearby Customers
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-center text-gray-600 text-md max-w-[900px] mx-auto mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Getting seen online does not require fancy tricks for small shops. The
          important thing is to appear when neighbors search in the area, which
          is exactly what small business SEO services focus on. Simple steps
          work better than complicated plans. Real outcomes, stable rates, and
          no extended contracts are what you can expect from some suppliers.
        </motion.p>

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

      {/* Old SEO-Services Grid */}
      {service.sub_categories && service.sub_categories.length > 0 && (
        <section className="py-12 md:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <motion.div
              className="text-center mb-12 md:mb-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* <motion.p
                className="text-[#FF3C1B] font-medium mb-2 md:mb-3 text-sm md:text-base"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                Services
              </motion.p> */}
              <motion.h2
                className="text-3xl sm:text-4xl md:text-5xl font-medium leading-tight"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <span className="text-4xl md:text-5xl font-medium text-[#0b63b8] mb-6 leading-tight">
                  Explore Related Services
                </span>
                {/* <br /> */}
                {/* <span className="bg-gradient-to-r from-[#072d7f] to-[#A7C7E7] text-transparent bg-clip-text">
                  Services
                </span> */}
              </motion.h2>
              <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
                Dive deeper into specific offerings related to this service.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {service.sub_categories.slice(0, visibleCards).map((sub, i) => (
                <div
                  key={sub.id}
                  className="group relative rounded-[30px] bg-[#072d7f] p-6 md:p-8 flex flex-col justify-between border border-transparent transition-all duration-300 hover:border-[#072d7f] cursor-pointer"
                >
                  <Link
                    href={`/service/${service.id}/${sub.id}`}
                    className="relative z-20 block"
                  >
                    <div>
                      <div className="w-14 h-14 md:w-16 md:h-16 mb-4 md:mb-6 p-2 flex items-center justify-center rounded-[20px] bg-[rgba(255,255,255,0.10)] transition-all duration-300 border border-transparent group-hover:border-[#DE2F04]">
                        {/* If sub has an icon component, render it; otherwise fallback to parent icon */}
                        {(() => {
                          const Icon = sub.icon || service.icon;
                          return Icon ? (
                            <Icon className="w-6 h-6 md:w-8 md:h-8 text-[#f84318]" />
                          ) : (
                            <img
                              src={sub.hero?.image || service.hero?.image}
                              alt={sub.title}
                              className="w-6 h-6 md:w-8 md:h-8 object-contain"
                            />
                          );
                        })()}
                      </div>

                      <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-white">
                        <span className="bg-gradient-to-r from-[#ffb199] to-[white] text-transparent bg-clip-text">
                          {sub.title.split(" ")[0]}
                        </span>{" "}
                        {sub.title.split(" ").slice(1).join(" ")}
                      </h3>

                      <p
                        className="text-white text-xs md:text-sm leading-relaxed mb-4 md:mb-6 line-clamp-4"
                        dangerouslySetInnerHTML={formatHtml(
                          sub.desc ||
                            (sub.introParagraphs && sub.introParagraphs[0]),
                        )}
                      />
                    </div>

                    <div className="flex justify-end">
                      <div
                        className="relative w-10 h-10 md:w-11 md:h-11 flex items-center justify-center rounded-[20px] bg-white overflow-hidden cursor-pointer"
                        onClick={() => handleArrowClick(i)}
                        role="button"
                        aria-label={`Open ${sub.title}`}
                      >
                        <div
                          className="relative z-10 text-[#072d7f] text-lg font-bold"
                          style={{
                            transform: clickedArrows.includes(i)
                              ? "rotate(360deg)"
                              : "rotate(0deg)",
                            transition: "transform 0.8s ease-in-out",
                          }}
                        >
                          {"→"}
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
            {visibleCards < service.sub_categories.length && (
              <div className="mt-10 flex justify-center">
                <button
                  type="button"
                  onClick={() => setVisibleCards((prev) => prev + 6)}
                  className="rounded-lg bg-[#072d7f] px-6 py-3 text-white font-semibold hover:bg-[#0a3eab] transition-colors"
                >
                  Load More<span className="ml-5">↓</span>
                </button>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Lowwer Body */}
      <div className="w-[92%] max-w-[1200px] mx-auto py-20 mt-20 flex justify-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Content */}
          <div>
            <h2 className="text-5xl font-normal text-gray-900 mb-6 leading-tight">
              Real SEO Results Not Just Rankings
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              We do <strong>SEO services</strong> that get you real money,
              qualified leads, and steady traffic, not just pretty reports. We
              offer <strong>professional SEO services</strong> to both small and
              large businesses that can grow with them. With our organic SEO
              services, we want to help your site grow over time. With our
              on-page SEO services, we want to make it easier to use. And with
              our technical SEO services, we want to make it better.
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
