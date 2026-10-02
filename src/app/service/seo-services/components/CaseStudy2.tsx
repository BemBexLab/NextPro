"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";

const CaseStudy2: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  const images = [
    {
      src: "/TX Auto Group Houston SEO Case Study.png",
      alt: "Case study image 1",
    },
    {
      src: "/Elite Auto Service SEO Growth Case Study.png",
      alt: "Case study image 2",
    },
    {
      src: "/River Oaks Auto Sales SEO Results.png",
      alt: "Case study image 3",
    },
    {
      src: "/Mountain View Auto Sales SEO Case Study.png",
      alt: "Case study image 4",
    },
  ];

  return (
    <section className="w-full py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-full mx-auto">

        {/* Heading */}
        <motion.div
          className="relative isolate overflow-hidden border-b border-blue-900/20 bg-gradient-to-br from-[#061f59] via-[#073b91] to-[#0b63b8] px-5 py-9 shadow-lg shadow-blue-950/10 sm:px-8 sm:py-12 lg:px-16 lg:py-14 mb-4"
          initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="pointer-events-none absolute -right-16 -top-24 h-64 w-64 rounded-full border border-white/10 bg-white/5 blur-sm" />
          <div className="pointer-events-none absolute bottom-0 right-24 h-24 w-24 rounded-full bg-cyan-300/20 blur-2xl" />
          <h2 className="relative max-w-full text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl uppercase">
            Real Growth GSC Snap Shots
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {images.map((image, index) => (
            <motion.article
              key={image.src}
              className="overflow-hidden bg-white"
              initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
              whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.18 }}
              transition={{
                duration: 0.5,
                delay: prefersReducedMotion ? 0 : index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <motion.img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                decoding="async"
                className="block h-auto w-full"
                whileHover={prefersReducedMotion ? undefined : { scale: 1.025 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudy2;
