"use client";

import { motion } from "framer-motion";

import { automotiveSeoContent } from "./content";
import { fadeLeft, fadeRight, fadeUp, stagger, viewport } from "./motion";

const ServicesSection = () => {
  const { servicesIntro, serviceBlocks } = automotiveSeoContent;

  return (
    <section id={servicesIntro.id} className="space-y-8">
      <motion.div
        className="rounded-[36px] border border-black/10 bg-white p-6 sm:p-8 lg:p-10"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <div className="grid gap-8 lg:grid-cols-[1fr_0.88fr] lg:items-start">
          <motion.div variants={fadeLeft}>
            <motion.h2
              className="text-3xl font-semibold leading-tight tracking-[-0.03em] text-black sm:text-4xl"
              variants={fadeUp}
            >
              {servicesIntro.title}
            </motion.h2>
            <motion.div className="mt-6 space-y-5 text-base leading-8 text-black/70 sm:text-lg" variants={stagger}>
              {servicesIntro.paragraphs.map((paragraph, index) => (
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
              src={automotiveSeoContent.images.services.src}
              alt={automotiveSeoContent.images.services.alt}
              className="h-full min-h-[320px] w-full object-cover"
              loading="lazy"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>
        </div>
      </motion.div>

      <div className="space-y-6">
        {serviceBlocks.map((block, index) => (
          <motion.article
            key={index}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            whileHover={{ y: -4 }}
            className={`rounded-[32px] border p-6 sm:p-8 ${
              index % 2 === 1
                ? "border-black/10 bg-black text-white"
                : "border-black/10 bg-white text-black"
            }`}
          >
            <h3 className="text-2xl font-semibold leading-tight tracking-[-0.02em]">
              {block.title}
            </h3>
            <motion.div
              className={`mt-5 space-y-5 text-base leading-8 ${
                index % 2 === 1 ? "text-white/74" : "text-black/70"
              }`}
              variants={stagger}
            >
              {block.paragraphs.map((paragraph, paragraphIndex) => (
                <motion.p key={paragraphIndex} variants={fadeUp}>
                  {paragraph}
                </motion.p>
              ))}
            </motion.div>

            <p
              className={`mt-5 text-base leading-8 ${
                index % 2 === 1 ? "text-white/74" : "text-black/70"
              }`}
            >
              {block.leadIn}
            </p>

            <motion.div className="mt-5 grid gap-3 sm:grid-cols-2" variants={stagger}>
              {block.items.map((item, itemIndex) => (
                <motion.div
                  key={itemIndex}
                  variants={fadeUp}
                  whileHover={{ y: -3 }}
                  className={`rounded-2xl border px-4 py-4 text-sm leading-7 ${
                    index % 2 === 1
                      ? "border-white/10 bg-white/[0.05] text-white/78"
                      : "border-black/10 bg-black/[0.02] text-black/60"
                  }`}
                >
                  {item}
                </motion.div>
              ))}
            </motion.div>

            {"secondaryLeadIn" in block && block.secondaryLeadIn ? (
              <>
                <p
                  className={`mt-5 text-base leading-8 ${
                    index % 2 === 1 ? "text-white/74" : "text-black/70"
                  }`}
                >
                  {block.secondaryLeadIn}
                </p>
                <motion.div className="mt-5 grid gap-3 sm:grid-cols-2" variants={stagger}>
                  {block.secondaryItems?.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      variants={fadeUp}
                      whileHover={{ y: -3 }}
                      className={`rounded-2xl border px-4 py-4 text-sm leading-7 ${
                        index % 2 === 1
                          ? "border-white/10 bg-white/[0.05] text-white/78"
                          : "border-black/10 bg-black/[0.02] text-black/60"
                      }`}
                    >
                      {item}
                    </motion.div>
                  ))}
                </motion.div>
              </>
            ) : null}

            <p
              className={`mt-5 text-base leading-8 ${
                index % 2 === 1 ? "text-white/74" : "text-black/70"
              }`}
            >
              {block.closing}
            </p>

            {"finalLine" in block && block.finalLine ? (
              <p
                className={`mt-5 text-base leading-8 ${
                  index % 2 === 1 ? "text-white/74" : "text-black/70"
                }`}
              >
                {block.finalLine}
              </p>
            ) : null}
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
