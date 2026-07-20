"use client";

import { motion } from "framer-motion";

import { automotiveSeoAnchors } from "./content";
import { fadeUp, stagger, viewport } from "./motion";

const StickyNav = () => {
  return (
    <motion.aside
      className="rounded-[28px] border border-black/10 bg-white p-6 lg:sticky lg:top-24"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={fadeUp}
    >
      <motion.div className="space-y-3" variants={stagger}>
        {automotiveSeoAnchors.map((anchor) => (
          <motion.a
            key={anchor.id}
            href={`#${anchor.id}`}
            variants={fadeUp}
            whileHover={{ x: 4 }}
            className="block rounded-2xl border border-transparent px-3 py-3 text-sm leading-6 text-black/60 transition hover:border-black/10 hover:bg-black/[0.03] hover:text-black"
          >
            {anchor.label}
          </motion.a>
        ))}
      </motion.div>
    </motion.aside>
  );
};

export default StickyNav;
