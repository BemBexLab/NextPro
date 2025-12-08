"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

// const services = [
//   {
//     id: "social-media-marketing",
//     img: "/services/image-7(traced).png",
//     title: "Web Founders USA | (SMM) Social Media Marketing Agency",
//     desc: "Web Founders USA offers social media marketing that grows your brand, boosts engagement, and converts followers into real customers.",
//   },
//   {
//     id: "digital-marketing-services",
//     img: "/services/image-6(traced).png",
//     title: "Web Founders USA: Digital Marketing Services",
//     desc: "Web Founders USA, a digital marketing agency and website design and development company, creates smart and human focused strategies to help your business get success.",
//   },
//   {
//     id: "content-writing-services",
//     img: "/services/image-8(traced).png",
//     title: "Web Founders USA - Content Writing Services",
//     desc: "Web Founders USA content writing service delivering clear, SEO-friendly copy for businesses and brands.",
//   },
//   {
//     id: "pay-per-click-advertising",
//     img: "/services/image-10(traced).png",
//     title: "Web Founders USA - Pay Per Click Advertising Services",
//     desc: "Get real results with Web Founders USA PPC. Smart, human focused ads that boost leads, lower costs, and help businesses grow with confidence.",
//   },
//   {
//     id: "conversion-optimization-services",
//     img: "/services/image-9(traced).png",
//     title: "Web Founders USA - (CRO) Conversion Optimization Services",
//     desc: "Web Founders USA offers conversion optimization services that increase sales, decrease friction, and improve user experience.",
//   },
//   {
//     id: "website-design-development-services",
//     img: "/services/image-15(traced).png",
//     title: "Web Founders USA - Website Design & Development Services",
//     desc: "Website Design & Website Development Services by Web Founders USA. Build, scale, and optimize your online store with our e-commerce website SEO packages and redesign services for growth.",
//   },
//   {
//     id: "graphic-designing-services",
//     img: "/services/image-11(traced).png",
//     title: "Web Founders USA - Graphic Designing Services",
//     desc: "Our expert team uses a data-driven approach, leveraging the latest techniques to boost your online presence.",
//   },
//   {
//     id: "website-maintenance-services",
//     img: "/services/image-14(traced).png",
//     title: "Web Founders USA - Website Maintenance Services",
//     desc: "Web Founders USA offers professional website maintenance services, which keep your site fast, secure, and always online.",
//   },
//   {
//     id: "e-commerce-marketing-services",
//     img: "/services/image-13(traced).png",
//     title: "Web Founders USA - E-Commerce Marketing Services",
//     desc: "Web Founders USA delivers powerful e-commerce marketing strategies designed to increase conversions, traffic, and revenue. Get expert solutions for e-commerce marketing.",
//   },
//   {
//     id: "video-animation-services",
//     img: "/services/upwork.png",
//     title: "Web Founders USA - Professional Video Animation Services",
//     desc: "Web Founders USA provides customized Video Animation Services. We also offer complete video and animation solutions for brands that want to stand out.",
//   },
//   {
//     id: "email-marketing-services",
//     img: "/services/seo.png",
//     title: "Web Founders USA - Email Marketing Services",
//     desc: "Drive engagement and sales with professional email marketing services from Web Founders USA. Our expert team delivers strategy, automation, and creative campaigns for businesses of all sizes.",
//   },
//   {
//     id: "seo-services",
//     img: "/services/logodesign.png",
//     title: "Web Founders USA - SEO Services",
//     desc: "Web Founders USA provides professional SEO services for different enterprises. Get expert search engine optimization, technical audits, and strategic SEO solutions to boost online visibility.",
//   },
//   {
//     id: "affiliate-and-marketing-services",
//     img: "/services/branding.png",
//     title: "Web Founders USA - Affiliate and Marketing Services",
//     desc: "Our branding service builds a strong, consistent identity that connects with your audience and sets you apart from competitors",
//   },
//   // {
//   //   id: "maintenance",
//   //   img: "/services/maintenance.png",
//   //   title: "Maintenance",
//   //   desc: "Boost your revenue with our expert affiliate and marketing services. We build and manage powerful affiliate programs for different industries.",
//   // },
// ];

const services = [
  {
    id: "social-media-marketing",
    img: "/services/image-14(traced).png",
    title: "Social Media Marketing",
    desc: "Web Founders USA offers social media marketing that grows your brand, boosts engagement, and converts followers into real customers.",
  },
  {
    id: "digital-marketing-services",
    img: "/services/image-11(traced).png",
    title: "Digital Marketing Services",
    desc: "Web Founders USA, a digital marketing agency and website design and development company, creates smart and human focused strategies to help your business get success.",
  },
  {
    id: "content-writing-services",
    img: "/services/image-13(traced).png",
    title: "Content Writing Services",
    desc: "Web Founders USA content writing service delivering clear, SEO-friendly copy for businesses and brands.",
  },
  {
    id: "pay-per-click-advertising",
    img: "/services/image-10(traced).png",
    title: "Pay Per Click Advertising",
    desc: "Get real results with Web Founders USA PPC. Smart, human focused ads that boost leads, lower costs, and help businesses grow with confidence.",
  },
  {
    id: "conversion-optimization-services",
    img: "/services/image-8(traced).png",
    title: "Conversion Optimization Services",
    desc: "Web Founders USA offers conversion optimization services that increase sales, decrease friction, and improve user experience.",
  },
  {
    id: "website-design-development-services",
    img: "/services/image-6(traced).png",
    title: "Website Design & Development Services",
    desc: "Website Design & Website Development Services by Web Founders USA. Build, scale, and optimize your online store with our e-commerce website SEO packages and redesign services for growth.",
  },
  {
    id: "graphic-designing-services",
    img: "/services/image-15(traced).png",
    title: "Graphic Designing Services",
    desc: "Our expert team uses a data-driven approach, leveraging the latest techniques to boost your online presence.",
  },
  {
    id: "website-maintenance-services",
    img: "/services/maintenance.png",
    title: "Website Maintenance Services",
    desc: "Web Founders USA offers professional website maintenance services, which keep your site fast, secure, and always online.",
  },
  {
    id: "e-commerce-marketing-services",
    img: "/services/image-13(traced).png",
    title: "E-Commerce Marketing Services",
    desc: "Web Founders USA delivers powerful e-commerce marketing strategies designed to increase conversions, traffic, and revenue. Get expert solutions for e-commerce marketing.",
  },
  {
    id: "video-animation-services",
    img: "/services/image-9(traced).png",
    title: "Video Animation Services",
    desc: "Web Founders USA provides customized Video Animation Services. We also offer complete video and animation solutions for brands that want to stand out.",
  },
  {
    id: "email-marketing-services",
    img: "/services/1765204528-removebg-preview.png",
    title: "Email Marketing Services",
    desc: "Drive engagement and sales with professional email marketing services from Web Founders USA. Our expert team delivers strategy, automation, and creative campaigns for businesses of all sizes.",
  },
  {
    id: "seo-services",
    img: "/services/seo.png",
    title: "SEO Services",
    desc: "Web Founders USA provides professional SEO services for different enterprises. Get expert search engine optimization, technical audits, and strategic SEO solutions to boost online visibility.",
  },
  {
    id: "affiliate-and-marketing-services",
    img: "/services/branding.png",
    title: "Affiliate and Marketing Services",
    desc: "Our branding service builds a strong, consistent identity that connects with your audience and sets you apart from competitors",
  },
  // {
  //   id: "maintenance",
  //   img: "/services/maintenance.png",
  //   title: "Maintenance",
  //   desc: "Boost your revenue with our expert affiliate and marketing services. We build and manage powerful affiliate programs for different industries.",
  // },
];

const ServicesSection = () => {
  const [clickedArrows, setClickedArrows] = useState([]);

  const handleArrowClick = (index) => {
    setClickedArrows((prev) => {
      if (prev.includes(index)) return prev;
      const next = [...prev, index];
      setTimeout(() => {
        setClickedArrows((innerPrev) => innerPrev.filter((i) => i !== index));
      }, 2000);
      return next;
    });
  };

  return (
    <section className="bg-white text-white px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.p
            className="text-[#FF3C1B] font-semibold mb-2 md:mb-3 text-sm md:text-base"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Services
          </motion.p>
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <span className="bg-gradient-to-r from-[#072d7f] to-[#A7C7E7] text-transparent bg-clip-text">
              Digital Services
            
            That <br className="" />
            
            </span>
            <span className="bg-gradient-to-r from-[#072d7f] to-[#A7C7E7] text-transparent bg-clip-text">
              Deliver Results
            </span>
          </motion.h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="group relative rounded-[30px] bg-[#072d7f] backdrop-blur-[33px] p-6 md:p-8 flex flex-col justify-between border border-transparent transition-all duration-300 hover:border-[#072d7f] cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              {/* Link Overlay */}
              <Link href="/contact-us" className="absolute inset-0 z-10" />

              {/* Card Content */}
              {/* <Link href={`/services/${service.id}`}> */}
                <div className="relative z-20">
                  {/* Icon */}
                  <div className="w-14 h-14 md:w-16 md:h-16 mb-4 md:mb-6 p-2 flex items-center justify-center rounded-[20px] bg-[rgba(255,255,255,0.10)] backdrop-blur-[33.15px] transition-all duration-300 border border-transparent group-hover:border-[#DE2F04]">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-6 h-6 md:w-8 md:h-8 object-contain"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">
                    <span className="bg-gradient-to-r from-[#ffb199] to-[white] text-transparent bg-clip-text">
                      {service.title.split(" ")[0]}
                    </span>{" "}
                    {service.title.split(" ").slice(1).join(" ")}
                  </h3>

                  {/* Description */}
                  <p className="text-white text-xs md:text-sm leading-relaxed mb-4 md:mb-6">
                    {service.desc}
                  </p>

                  {/* Arrow */}
                  
                    <div
                      className="relative w-10 h-10 md:w-11 md:h-11 flex items-center justify-center rounded-[20px] bg-white backdrop-blur-[33.15px] overflow-hidden cursor-pointer"
                      onClick={() => handleArrowClick(i)}
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
                        →
                      </div>
                    </div>
                  
                </div>
              {/* </Link> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
