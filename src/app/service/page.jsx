"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

const services = [
  {
    id: "ui-ux-design",
    img: "/services/image-7(traced).png",
    title: "UI/UX Design",
    desc: "User-friendly interfaces are created by our UI/UX design services, which keep users happy and engaged.",
  },
  {
    id: "website-development",
    img: "/services/image-6(traced).png",
    title: "Website Development",
    desc: "We create visually stunning and functional websites that not only attract visitors but also turn them into customers.",
  },
  {
    id: "software-development",
    img: "/services/image-8(traced).png",
    title: "Software Development",
    desc: "We develop tailor-made software that streamlines your operations, enhances efficiency, and drives growth.",
  },
  {
    id: "animation",
    img: "/services/image-10(traced).png",
    title: "Animation",
    desc: "Our animation service provides complete support and enhancements to keep your digital visuals engaging and dynamic.",
  },
  {
    id: "mobile-app-development",
    img: "/services/image-9(traced).png",
    title: "Mobile App Development",
    desc: "We create scalable, robust mobile apps that perform well and offer a consistent user experience across devices.",
  },
  {
    id: "graphic-design",
    img: "/services/image-15(traced).png",
    title: "Graphic Design",
    desc: "Our creative graphic designers produce engaging and impactful designs that capture your brand's essence.",
  },
  {
    id: "digital-marketing",
    img: "/services/image-11(traced).png",
    title: "Digital Marketing",
    desc: "Our expert team uses a data-driven approach, leveraging the latest techniques to boost your online presence.",
  },
  {
    id: "social-media-management",
    img: "/services/image-14(traced).png",
    title: "Social Media Management",
    desc: "Our social media experts craft compelling content, engage with your audience, and manage your social presence.",
  },
  {
    id: "content-writing",
    img: "/services/image-13(traced).png",
    title: "Content Writing",
    desc: "Our content writing experts create engaging and persuasive content, connect with your audience, and enhance your online presence.",
  },
  {
    id: "upwork-profile-management",
    img: "/services/upwork.png",
    title: "Upwork Profile Management",
    desc: "We manage your verified Upwork profile end-to-end—handling projects and clients—while you earn a fair share of the income stress-free.",
  },
  {
    id: "seo",
    img: "/services/seo.png",
    title: "SEO",
    desc: "Our SEO service boosts your website’s visibility with proven strategies that drive organic traffic, improve rankings, and attract the right audience.",
  },
  {
    id: "logo-design",
    img: "/services/logodesign.png",
    title: "Logo Design",
    desc: "We design unique, memorable logos that capture your brand’s identity and leave a lasting impression.",
  },
  {
    id: "branding",
    img: "/services/branding.png",
    title: "Branding",
    desc: "Our branding service builds a strong, consistent identity that connects with your audience and sets you apart from competitors",
  },
  {
    id: "maintenance",
    img: "/services/maintenance.png",
    title: "Maintenance",
    desc: "We keep your site secure, updated, and running smoothly, ensuring optimal performance and reliability",
  },
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
