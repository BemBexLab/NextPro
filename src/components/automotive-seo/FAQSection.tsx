"use client";

import { motion } from "framer-motion";

import { automotiveSeoContent } from "./content";
import { fadeUp, stagger, viewport } from "./motion";

const FAQSection = () => {
  const { faqs } = automotiveSeoContent;

  return (
    <motion.section
      id={faqs.id}
      className="rounded-[36px] border border-black/10 bg-white p-6 sm:p-8 lg:p-10"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={fadeUp}
    >
      <motion.h2
        className="text-3xl font-semibold leading-tight tracking-[-0.03em] text-black sm:text-4xl"
        variants={fadeUp}
      >
        {faqs.title}
      </motion.h2>
      <motion.div
        className="mt-8 divide-y divide-black/10 rounded-[28px] border border-black/10 bg-black/[0.02] px-5 sm:px-7"
        variants={stagger}
      >
        {faqs.items.map((faq, index) => (
          <motion.details key={index} className="group py-5" variants={fadeUp}>
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-lg font-semibold text-black">
              <span>{faq.question}</span>
              <span className="text-2xl font-normal text-black/45 transition group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="pt-4 text-base leading-8 text-black/70">{faq.answer}</p>
          </motion.details>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default FAQSection;
