 "use client";

import { motion } from "framer-motion";
import { automotiveSeoContent } from "@/components/automotive-seo/content";

const cardClass = "rounded-[32px] border border-black/10 bg-white p-6 sm:p-8";
const viewport = { once: true, amount: 0.2 };

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 32 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.06,
    },
  },
};

const ServiceBody2 = () => {
  const content = automotiveSeoContent;

  return (
    <motion.section
      className="bg-white text-black"
      initial="hidden"
      animate="visible"
      variants={stagger}
    >
      <section className="relative overflow-hidden border-b border-black/10 bg-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.06),transparent_28%),linear-gradient(to_bottom,rgba(0,0,0,0.015),transparent_30%)]" />

        <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <motion.div variants={fadeLeft}>
              <motion.span
                className="inline-flex rounded-full border border-black/10 bg-black/[0.03] px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-black/60"
                variants={fadeUp}
              >
                {content.meta.eyebrow}
              </motion.span>
              <motion.h1
                className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.02] tracking-[-0.04em] text-black sm:text-5xl lg:text-7xl"
                variants={fadeUp}
              >
                {content.hero.title}
              </motion.h1>

              <motion.div
                className="mt-8 max-w-3xl space-y-5 text-base leading-8 text-black/70 sm:text-lg"
                variants={stagger}
              >
                {content.hero.paragraphs.map((paragraph, index) => (
                  <motion.p key={index} variants={fadeUp}>
                    {paragraph}
                  </motion.p>
                ))}
              </motion.div>

              <motion.div
                className="mt-8 flex flex-col gap-4 sm:flex-row"
                variants={stagger}
              >
                {content.meta.ctas.map((cta, index) => (
                  <motion.a
                    key={index}
                    href={cta.href}
                    variants={fadeUp}
                    whileHover={{ y: -2, scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className={
                      cta.variant === "primary"
                        ? "inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-semibold text-white transition hover:bg-black/90"
                        : "inline-flex items-center justify-center rounded-full border border-black/15 px-6 py-3 text-sm font-semibold text-black transition hover:bg-black/[0.04]"
                    }
                  >
                    {cta.label}
                  </motion.a>
                ))}
              </motion.div>
            </motion.div>

            <motion.div
              variants={fadeRight}
              className="overflow-hidden mt-3 rounded-[34px] border border-black/10 bg-black/[0.04] shadow-[0_30px_80px_rgba(0,0,0,0.08)]"
            >
              <div className="relative">
                <motion.img
                  src={content.images.hero.src}
                  alt={content.images.hero.alt}
                  className="h-[420px] w-full object-cover"
                  loading="lazy"
                  initial={{ scale: 1.06 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <motion.div
                    className="inline-flex rounded-full border border-white/15 bg-black/45 px-4 py-2 text-xs font-medium tracking-[0.2em] text-white/80 backdrop-blur-sm"
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.5 }}
                  >
                    {content.meta.heroImageBadge}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
        <div className="space-y-10">
          <motion.section
            className={`${cardClass} shadow-[0_24px_80px_rgba(0,0,0,0.04)]`}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <motion.h2 className="text-3xl font-semibold leading-tight tracking-[-0.03em] text-black sm:text-4xl" variants={fadeUp}>
              {content.hero.benefitsHeading}
            </motion.h2>
            <motion.div className="mt-8 grid gap-3 sm:grid-cols-2" variants={stagger}>
              {content.hero.benefits.map((item, index) => (
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
              <p className="text-base leading-8 text-black/70 sm:text-lg">
                {content.hero.closing}
              </p>
            </motion.div>

            <motion.div
              className="mt-10 rounded-[30px] bg-black px-6 py-8 text-white sm:px-8"
              variants={fadeUp}
            >
              <h2 className="text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-4xl">
                {content.traffic.title}
              </h2>
              <motion.div className="mt-6 space-y-5 text-base leading-8 text-white/76 sm:text-lg" variants={stagger}>
                {content.traffic.paragraphs.map((paragraph, index) => (
                  <motion.p key={index} variants={fadeUp}>
                    {paragraph}
                  </motion.p>
                ))}
              </motion.div>
            </motion.div>
          </motion.section>

          <motion.section
            id={content.definition.id}
            className={cardClass}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
              <motion.div variants={fadeLeft}>
                <h2 className="text-3xl font-semibold leading-tight tracking-[-0.03em] text-black sm:text-4xl">
                  {content.definition.title}
                </h2>
                <motion.div className="mt-6 space-y-5 text-base leading-8 text-black/70 sm:text-lg" variants={stagger}>
                  {content.definition.paragraphs.map((paragraph, index) => (
                    <motion.p key={index} variants={fadeUp}>
                      {paragraph}
                    </motion.p>
                  ))}
                </motion.div>
              </motion.div>

              <motion.div
                className="overflow-hidden rounded-[30px] border border-black/10 bg-black/[0.04]"
                variants={fadeRight}
              >
                <motion.img
                  src={content.images.definition.src}
                  alt={content.images.definition.alt}
                  className="h-full min-h-[340px] w-full object-cover"
                  loading="lazy"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            </div>
          </motion.section>

          <motion.section
            id={content.include.id}
            className="rounded-[36px] border border-black/10 bg-black text-white"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <div className="p-6 sm:p-8 lg:p-10">
              <motion.h2 className="text-3xl font-semibold leading-tight tracking-[-0.03em] sm:text-4xl" variants={fadeUp}>
                {content.include.title}
              </motion.h2>
              <motion.p className="mt-6 max-w-4xl text-base leading-8 text-white/72 sm:text-lg" variants={fadeUp}>
                {content.include.intro}
              </motion.p>
              <motion.div className="mt-8 grid gap-3 md:grid-cols-2" variants={stagger}>
                {content.include.items.map((item, index) => (
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
                {content.include.paragraphs.map((paragraph, index) => (
                  <motion.p key={index} variants={fadeUp}>
                    {paragraph}
                  </motion.p>
                ))}
              </motion.div>
            </div>
          </motion.section>

          <motion.section
            id={content.specialized.id}
            className={cardClass}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.03em] text-black sm:text-4xl">
              {content.specialized.title}
            </h2>
            <motion.div className="mt-6 space-y-5 text-base leading-8 text-black/70 sm:text-lg" variants={stagger}>
              {content.specialized.paragraphs.map((paragraph, index) => (
                <motion.p key={index} variants={fadeUp}>
                  {paragraph}
                </motion.p>
              ))}
            </motion.div>
          </motion.section>

          <motion.section
            id={content.essential.id}
            className={`${cardClass} bg-black/[0.02]`}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.03em] text-black sm:text-4xl">
              {content.essential.title}
            </h2>
            <motion.div className="mt-6 space-y-5 text-base leading-8 text-black/70 sm:text-lg" variants={stagger}>
              {content.essential.paragraphs.map((paragraph, index) => (
                <motion.p key={index} variants={fadeUp}>
                  {paragraph}
                </motion.p>
              ))}
            </motion.div>
          </motion.section>

          <motion.div
            className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]"
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={stagger}
          >
            <motion.div
              className="overflow-hidden rounded-[32px] border border-black/10 bg-black/[0.04]"
              variants={fadeLeft}
            >
              <motion.img
                src={content.images.searchJourney.src}
                alt={content.images.searchJourney.alt}
                className="h-full min-h-[320px] w-full object-cover"
                loading="lazy"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
            <motion.div
              className="overflow-hidden rounded-[32px] border border-black/10 bg-black/[0.04]"
              variants={fadeRight}
            >
              <motion.img
                src={content.images.localSeo.src}
                alt={content.images.localSeo.alt}
                className="h-full min-h-[320px] w-full object-cover"
                loading="lazy"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          </motion.div>

          {[
            content.capture,
            content.dominate,
            content.trust,
            content.competitors,
          ].map((section, index) => (
            <motion.section
              key={index}
              className={cardClass}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              <motion.h3
                className="text-2xl font-semibold leading-tight tracking-[-0.02em] text-black"
                variants={fadeUp}
              >
                {section.title}
              </motion.h3>

              {"intro" in section ? (
                <motion.p className="mt-5 text-base leading-8 text-black/70" variants={fadeUp}>
                  {section.intro}
                </motion.p>
              ) : null}

              {"leadIn" in section ? (
                <motion.p className="mt-5 text-base leading-8 text-black/70" variants={fadeUp}>
                  {section.leadIn}
                </motion.p>
              ) : null}

              {"items" in section ? (
                <motion.div className="mt-5 grid gap-3 sm:grid-cols-2" variants={stagger}>
                  {section.items.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      variants={fadeUp}
                      whileHover={{ y: -4 }}
                      className="rounded-2xl border border-black/10 bg-black/[0.02] px-4 py-4 text-sm leading-7 text-black/60"
                    >
                      {item}
                    </motion.div>
                  ))}
                </motion.div>
              ) : null}

              {"paragraphs" in section ? (
                <motion.div className="mt-5 space-y-5 text-base leading-8 text-black/70" variants={stagger}>
                  {section.paragraphs.map((paragraph, paragraphIndex) => (
                    <motion.p key={paragraphIndex} variants={fadeUp}>
                      {paragraph}
                    </motion.p>
                  ))}
                </motion.div>
              ) : null}

              {"outro" in section ? (
                <motion.p className="mt-5 text-base leading-8 text-black/70" variants={fadeUp}>
                  {section.outro}
                </motion.p>
              ) : null}
            </motion.section>
          ))}

          <motion.section
            className="rounded-[32px] border border-black/10 bg-black p-6 text-white sm:p-8"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <motion.div
              className="mb-6 overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.06]"
              variants={fadeUp}
            >
              <motion.img
                src={content.images.growth.src}
                alt={content.images.growth.alt}
                className="h-[220px] w-full object-cover"
                loading="lazy"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
            <motion.h3 className="text-2xl font-semibold leading-tight tracking-[-0.02em]" variants={fadeUp}>
              {content.growth.title}
            </motion.h3>
            <motion.p className="mt-5 text-base leading-8 text-white/74" variants={fadeUp}>{content.growth.intro}</motion.p>
            <motion.p className="mt-5 text-base leading-8 text-white/74" variants={fadeUp}>{content.growth.leadIn}</motion.p>
            <motion.div className="mt-5 grid gap-3 sm:grid-cols-2" variants={stagger}>
              {content.growth.items.map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-4 text-sm leading-7 text-white/78"
                >
                  {item}
                </motion.div>
              ))}
            </motion.div>
            <motion.p className="mt-5 text-base leading-8 text-white/74" variants={fadeUp}>{content.growth.outro}</motion.p>
          </motion.section>

          <section id={content.servicesIntro.id} className="space-y-8">
            <motion.div
              className={cardClass}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              <div className="grid gap-8 lg:grid-cols-[1fr_0.88fr] lg:items-start">
                <motion.div variants={fadeLeft}>
                  <h2 className="text-3xl font-semibold leading-tight tracking-[-0.03em] text-black sm:text-4xl">
                    {content.servicesIntro.title}
                  </h2>
                  <motion.div className="mt-6 space-y-5 text-base leading-8 text-black/70 sm:text-lg" variants={stagger}>
                    {content.servicesIntro.paragraphs.map((paragraph, index) => (
                      <motion.p key={index} variants={fadeUp}>
                        {paragraph}
                      </motion.p>
                    ))}
                  </motion.div>
                </motion.div>

                <motion.div
                  className="overflow-hidden rounded-[30px] border border-black/10 bg-black/[0.04]"
                  variants={fadeRight}
                >
                  <motion.img
                    src={content.images.services.src}
                    alt={content.images.services.alt}
                    className="h-full min-h-[320px] w-full object-cover"
                    loading="lazy"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.div>
              </div>
            </motion.div>

            <div className="space-y-6">
              {content.serviceBlocks.map((block, index) => (
                <motion.article
                  key={index}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewport}
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
                        whileHover={{ y: -4 }}
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

                  {block.secondaryLeadIn ? (
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
                            whileHover={{ y: -4 }}
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

                  {block.finalLine ? (
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

          <motion.section
            id={content.faqs.id}
            className="rounded-[36px] border border-black/10 bg-white p-6 sm:p-8 lg:p-10"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <h2 className="text-3xl font-semibold leading-tight tracking-[-0.03em] text-black sm:text-4xl">
              {content.faqs.title}
            </h2>
            <motion.div
              className="mt-8 divide-y divide-black/10 rounded-[28px] border border-black/10 bg-black/[0.02] px-5 sm:px-7"
              variants={stagger}
            >
              {content.faqs.items.map((faq, index) => (
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
        </div>
      </div>
    </motion.section>
  );
};

export default ServiceBody2;
