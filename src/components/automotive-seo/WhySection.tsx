"use client";

import { motion } from "framer-motion";

import { automotiveSeoContent } from "./content";
import { fadeLeft, fadeRight, fadeUp, stagger, viewport } from "./motion";

const blockClass = "rounded-[32px] border border-black/10 bg-white p-6 sm:p-8";

const WhySection = () => {
  const { specialized, essential, capture, dominate, trust, competitors, growth } =
    automotiveSeoContent;

  return (
    <motion.section
      className="space-y-8"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={stagger}
    >
      <motion.div
        id={specialized.id}
        className="rounded-[36px] border border-black/10 bg-white p-6 sm:p-8 lg:p-10"
        variants={fadeUp}
      >
        <h2 className="text-3xl font-semibold leading-tight tracking-[-0.03em] text-black sm:text-4xl">
          {specialized.title}
        </h2>
        <motion.div className="mt-6 space-y-5 text-base leading-8 text-black/70 sm:text-lg" variants={stagger}>
          {specialized.paragraphs.map((paragraph, index) => (
            <motion.p key={index} variants={fadeUp}>
              {paragraph}
            </motion.p>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        id={essential.id}
        className="rounded-[36px] border border-black/10 bg-black/[0.02] p-6 sm:p-8 lg:p-10"
        variants={fadeUp}
      >
        <h2 className="text-3xl font-semibold leading-tight tracking-[-0.03em] text-black sm:text-4xl">
          {essential.title}
        </h2>
        <motion.div className="mt-6 space-y-5 text-base leading-8 text-black/70 sm:text-lg" variants={stagger}>
          {essential.paragraphs.map((paragraph, index) => (
            <motion.p key={index} variants={fadeUp}>
              {paragraph}
            </motion.p>
          ))}
        </motion.div>
      </motion.div>

      <motion.div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]" variants={stagger}>
        <motion.div
          className="overflow-hidden rounded-[32px] border border-black/10 bg-black/[0.04]"
          variants={fadeLeft}
          whileHover={{ y: -4 }}
        >
          <motion.img
            src={automotiveSeoContent.images.searchJourney.src}
            alt={automotiveSeoContent.images.searchJourney.alt}
            className="h-full min-h-[320px] w-full object-cover"
            loading="lazy"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
          />
        </motion.div>
        <motion.div
          className="overflow-hidden rounded-[32px] border border-black/10 bg-black/[0.04]"
          variants={fadeRight}
          whileHover={{ y: -4 }}
        >
          <motion.img
            src={automotiveSeoContent.images.localSeo.src}
            alt={automotiveSeoContent.images.localSeo.alt}
            className="h-full min-h-[320px] w-full object-cover"
            loading="lazy"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
          />
        </motion.div>
      </motion.div>

      <motion.div className={blockClass} variants={fadeUp}>
        <h3 className="text-2xl font-semibold leading-tight tracking-[-0.02em] text-black">
          {capture.title}
        </h3>
        <p className="mt-5 text-base leading-8 text-black/70">{capture.intro}</p>
        <p className="mt-5 text-base leading-8 text-black/70">{capture.leadIn}</p>
        <motion.div className="mt-5 grid gap-3 sm:grid-cols-2" variants={stagger}>
          {capture.items.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{ y: -3 }}
              className="rounded-2xl border border-black/10 bg-black/[0.02] px-4 py-4 text-sm leading-7 text-black/60"
            >
              {item}
            </motion.div>
          ))}
        </motion.div>
        <p className="mt-5 text-base leading-8 text-black/70">{capture.outro}</p>
      </motion.div>

      <motion.div className={blockClass} variants={fadeUp}>
        <h3 className="text-2xl font-semibold leading-tight tracking-[-0.02em] text-black">
          {dominate.title}
        </h3>
        <p className="mt-5 text-base leading-8 text-black/70">{dominate.intro}</p>
        <p className="mt-5 text-base leading-8 text-black/70">{dominate.leadIn}</p>
        <motion.div className="mt-5 grid gap-3 sm:grid-cols-2" variants={stagger}>
          {dominate.items.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{ y: -3 }}
              className="rounded-2xl border border-black/10 bg-black/[0.02] px-4 py-4 text-sm leading-7 text-black/60"
            >
              {item}
            </motion.div>
          ))}
        </motion.div>
        <p className="mt-5 text-base leading-8 text-black/70">{dominate.outro}</p>
      </motion.div>

      <motion.div className={blockClass} variants={fadeUp}>
        <h3 className="text-2xl font-semibold leading-tight tracking-[-0.02em] text-black">
          {trust.title}
        </h3>
        <p className="mt-5 text-base leading-8 text-black/70">{trust.intro}</p>
        <p className="mt-5 text-base leading-8 text-black/70">{trust.leadIn}</p>
        <motion.div className="mt-5 grid gap-3 sm:grid-cols-2" variants={stagger}>
          {trust.items.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{ y: -3 }}
              className="rounded-2xl border border-black/10 bg-black/[0.02] px-4 py-4 text-sm leading-7 text-black/60"
            >
              {item}
            </motion.div>
          ))}
        </motion.div>
        <p className="mt-5 text-base leading-8 text-black/70">{trust.outro}</p>
      </motion.div>

      <motion.div className={blockClass} variants={fadeUp}>
        <h3 className="text-2xl font-semibold leading-tight tracking-[-0.02em] text-black">
          {competitors.title}
        </h3>
        <motion.div className="mt-5 space-y-5 text-base leading-8 text-black/70" variants={stagger}>
          {competitors.paragraphs.map((paragraph, index) => (
            <motion.p key={index} variants={fadeUp}>
              {paragraph}
            </motion.p>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="rounded-[32px] border border-black/10 bg-black p-6 text-white sm:p-8"
        variants={fadeUp}
      >
        <motion.div
          className="mb-6 overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.06]"
          whileHover={{ y: -4 }}
        >
          <motion.img
            src={automotiveSeoContent.images.growth.src}
            alt={automotiveSeoContent.images.growth.alt}
            className="h-[220px] w-full object-cover"
            loading="lazy"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
          />
        </motion.div>
        <h3 className="text-2xl font-semibold leading-tight tracking-[-0.02em]">
          {growth.title}
        </h3>
        <p className="mt-5 text-base leading-8 text-white/74">{growth.intro}</p>
        <p className="mt-5 text-base leading-8 text-white/74">{growth.leadIn}</p>
        <motion.div className="mt-5 grid gap-3 sm:grid-cols-2" variants={stagger}>
          {growth.items.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              whileHover={{ y: -3 }}
              className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-4 text-sm leading-7 text-white/78"
            >
              {item}
            </motion.div>
          ))}
        </motion.div>
        <p className="mt-5 text-base leading-8 text-white/74">{growth.outro}</p>
      </motion.div>
    </motion.section>
  );
};

export default WhySection;
