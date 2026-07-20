"use client";

import Link from "next/link";
import { ArrowRight, MoveUpRight } from "lucide-react";
import { motion } from "framer-motion";

import { automotiveSeoContent } from "./content";
import { fadeLeft, fadeRight, fadeUp, stagger, viewport } from "./motion";

const Hero = () => {
  const { hero, meta, images } = automotiveSeoContent;

  return (
    <motion.section
      className="relative overflow-hidden border-b border-black/10 bg-white"
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={stagger}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.06),transparent_28%),linear-gradient(to_bottom,rgba(0,0,0,0.015),transparent_30%)]" />

      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <motion.div variants={fadeLeft}>
            <motion.span
              className="inline-flex rounded-full border border-black/10 bg-black/[0.03] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-black/60"
              variants={fadeUp}
            >
              {meta.eyebrow}
            </motion.span>
            <motion.h1
              className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.04em] text-black sm:text-5xl lg:text-7xl"
              variants={fadeUp}
            >
              {hero.title}
            </motion.h1>

            <motion.div
              className="mt-8 max-w-3xl space-y-5 text-base leading-8 text-black/70 sm:text-lg"
              variants={stagger}
            >
              {hero.paragraphs.map((paragraph, index) => (
                <motion.p key={index} variants={fadeUp}>
                  {paragraph}
                </motion.p>
              ))}
            </motion.div>

            <motion.div
              className="mt-8 flex flex-col gap-4 sm:flex-row"
              variants={stagger}
            >
              <motion.div variants={fadeUp} whileHover={{ y: -2, scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                <Link
                  href={String(meta.ctas[0]?.href ?? "/contact-us/")}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-black/90"
                >
                  {meta.ctas[0]?.label}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
              <motion.div variants={fadeUp} whileHover={{ y: -2, scale: 1.01 }} whileTap={{ scale: 0.99 }}>
                <Link
                  href={String(meta.ctas[1]?.href ?? "/contact-us/")}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-black/15 px-6 py-3 text-sm font-semibold text-black transition hover:bg-black/[0.04]"
                >
                  {meta.ctas[1]?.label}
                  <MoveUpRight className="h-4 w-4" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div className="space-y-4" variants={fadeRight}>
            <motion.div
              className="overflow-hidden rounded-[34px] border border-black/10 bg-black/[0.04] shadow-[0_30px_80px_rgba(0,0,0,0.08)]"
              whileHover={{ y: -4 }}
            >
              <div className="relative">
                <motion.img
                  src={images.hero.src}
                  alt={images.hero.alt}
                  className="h-[420px] w-full object-cover"
                  loading="lazy"
                  initial={{ scale: 1.05 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <motion.div
                    className="inline-flex rounded-full border border-white/15 bg-black/45 px-4 py-2 text-xs font-medium tracking-[0.2em] text-white/80 backdrop-blur-sm"
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25, duration: 0.45 }}
                  >
                    {meta.heroImageBadge}
                  </motion.div>
                </div>
              </div>
            </motion.div>

            <motion.div className="grid gap-4 sm:grid-cols-3" variants={stagger}>
              <motion.div
                className="rounded-[28px] border border-black/10 bg-white p-5 sm:col-span-1"
                variants={fadeUp}
                whileHover={{ y: -4 }}
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-black/45">
                  Focus
                </p>
                <p className="mt-3 text-sm leading-7 text-black/70">
                  Local SEO, technical optimization, content marketing, link building, and reputation management.
                </p>
              </motion.div>
              <motion.div
                className="rounded-[28px] border border-black/10 bg-black p-5 text-white sm:col-span-2"
                variants={fadeUp}
                whileHover={{ y: -4 }}
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/45">
                  Outcome
                </p>
                <p className="mt-3 text-sm leading-7 text-white/75">
                  Turn online searches into phone calls, appointments, and sales with a campaign built around qualified automotive traffic.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
