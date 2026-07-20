"use client";

import { motion } from "framer-motion";

import { automotiveSeoContent } from "./content";
import { fadeLeft, fadeRight, fadeUp, stagger, viewport } from "./motion";

const DefinitionSection = () => {
  const { definition } = automotiveSeoContent;

  return (
    <motion.section
      id={definition.id}
      className="rounded-[36px] border border-black/10 bg-white p-6 sm:p-8 lg:p-10"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={fadeUp}
    >
      <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
        <motion.div variants={fadeLeft}>
          <motion.h2
            className="text-3xl font-semibold leading-tight tracking-[-0.03em] text-black sm:text-4xl"
            variants={fadeUp}
          >
            {definition.title}
          </motion.h2>
          <motion.div className="mt-6 space-y-5 text-base leading-8 text-black/70 sm:text-lg" variants={stagger}>
            {definition.paragraphs.map((paragraph, index) => (
              <motion.p key={index} variants={fadeUp}>
                {paragraph}
              </motion.p>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="overflow-hidden rounded-[30px] border border-black/10 bg-black/[0.04]"
          variants={fadeRight}
          whileHover={{ y: -4 }}
        >
          <motion.img
            src={automotiveSeoContent.images.definition.src}
            alt={automotiveSeoContent.images.definition.alt}
            className="h-full min-h-[340px] w-full object-cover"
            loading="lazy"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default DefinitionSection;
