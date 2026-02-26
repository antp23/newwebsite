"use client";

import { motion } from "framer-motion";
import { scrollRevealVariants, staggerContainer } from "@/lib/useScrollReveal";

interface ServiceChallengeProps {
  body: string;
}

export default function ServiceChallenge({ body }: ServiceChallengeProps) {
  return (
    <section className="bg-white py-24 md:py-32">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-content mx-auto px-6"
      >
        <motion.p
          variants={scrollRevealVariants}
          className="text-caption font-semibold text-cerulean uppercase tracking-[0.12em] mb-4"
        >
          THE CHALLENGE
        </motion.p>
        <motion.p
          variants={scrollRevealVariants}
          className="text-body-lg text-body leading-relaxed max-w-copy"
        >
          {body}
        </motion.p>
      </motion.div>
    </section>
  );
}
