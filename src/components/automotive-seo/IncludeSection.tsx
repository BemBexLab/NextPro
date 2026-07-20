"use client";

import { motion } from "framer-motion";

import { automotiveSeoContent } from "./content";
import { fadeUp, stagger, viewport } from "./motion";

const IncludeSection = () => {
  const { include: includeSection } = automotiveSeoContent;

  return (
    <motion.section
      id={includeSection.id}
      className="rounded-[36px] border border-black/10 bg-black text-white"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={fadeUp}
    >
      <div className="p-6 sm:p-8 lg:p-10">
        <motion.h2 className="text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-4xl" variants={fadeUp}>
          {includeSection.title}
        </motion.h2>
        <motion.p className="mt-6 max-w-4xl text-base leading-8 text-white/72 sm:text-lg" variants={fadeUp}>
          {includeSection.intro}
        </motion.p>
        <motion.div className="mt-8 grid gap-3 md:grid-cols-2" variants={stagger}>
          {includeSection.items.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="rounded-3xl border border-white/10 bg-white/[0.05] px-5 py-5 text-sm leading-7 text-white/78"
            >
              {item}
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="mt-8 space-y-5 text-base leading-8 text-white/72 sm:text-lg" variants={stagger}>
          {includeSection.paragraphs.map((paragraph, index) => (
            <motion.p key={index} variants={fadeUp}>
              {paragraph}
            </motion.p>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default IncludeSection;
