"use client";

import { motion } from "framer-motion";

import { automotiveSeoContent } from "./content";
import { fadeUp, stagger, viewport } from "./motion";

const BenefitsSection = () => {
  const { hero, traffic } = automotiveSeoContent;

  return (
    <motion.section
      className="rounded-[36px] border border-black/10 bg-white p-6 shadow-[0_24px_80px_rgba(0,0,0,0.04)] sm:p-8 lg:p-10"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={fadeUp}
    >
      <motion.h2
        className="text-3xl font-semibold leading-tight tracking-[-0.03em] text-black sm:text-4xl"
        variants={fadeUp}
      >
        {hero.benefitsHeading}
      </motion.h2>
      <motion.div className="mt-8 grid gap-3 sm:grid-cols-2" variants={stagger}>
        {hero.benefits.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            whileHover={{ y: -4 }}
            className="rounded-3xl border border-black/10 bg-black/[0.02] px-5 py-5 text-sm leading-7 text-black/60"
          >
            {item}
          </motion.div>
        ))}
      </motion.div>

      <motion.div className="mt-8 border-t border-black/10 pt-8" variants={fadeUp}>
        <p className="text-base leading-8 text-black/70 sm:text-lg">{hero.closing}</p>
      </motion.div>

      <motion.div className="mt-10 rounded-[30px] bg-black px-6 py-8 text-white sm:px-8" variants={fadeUp}>
        <h2 className="text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-4xl">
          {traffic.title}
        </h2>
        <motion.div className="mt-6 space-y-5 text-base leading-8 text-white/76 sm:text-lg" variants={stagger}>
          {traffic.paragraphs.map((paragraph, index) => (
            <motion.p key={index} variants={fadeUp}>
              {paragraph}
            </motion.p>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default BenefitsSection;
