"use client";

import { motion } from "framer-motion";
import { scrollRevealVariants, staggerContainer } from "@/lib/useScrollReveal";

interface ServiceCTAProps {
  headline: string;
  body?: string;
  ctaText: string;
  ctaLink: string;
  subtext?: string;
}

export default function ServiceCTA({
  headline,
  body,
  ctaText,
  ctaLink,
  subtext,
}: ServiceCTAProps) {
  return (
    <section className="bg-imperial py-24 md:py-32">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-content mx-auto px-6 text-center"
      >
        <motion.h2
          variants={scrollRevealVariants}
          className="text-h2 font-semibold text-white mb-6 max-w-[700px] mx-auto text-[28px] md:text-h2"
        >
          {headline}
        </motion.h2>

        {body && (
          <motion.p
            variants={scrollRevealVariants}
            className="text-body-lg text-white/70 mb-10 max-w-copy mx-auto"
          >
            {body}
          </motion.p>
        )}

        <motion.div variants={scrollRevealVariants}>
          <a
            href={ctaLink}
            className="inline-block bg-cerulean hover:bg-[#008FB8] text-imperial font-bold text-[16px] px-10 py-4 rounded-btn transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
          >
            {ctaText}
          </a>
        </motion.div>

        {subtext && (
          <motion.p
            variants={scrollRevealVariants}
            className="text-[13px] text-white/40 mt-6"
          >
            {subtext}
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}
