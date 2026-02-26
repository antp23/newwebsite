"use client";

import { motion } from "framer-motion";
import {
  scrollRevealVariants,
  staggerContainer,
} from "@/lib/useScrollReveal";
import SectionLabel from "./SectionLabel";

interface Step {
  number: string;
  headline: string;
  body: string;
  stat: string;
}

interface HowItWorksServiceProps {
  headline: string;
  steps: Step[];
}

export default function HowItWorksService({
  headline,
  steps,
}: HowItWorksServiceProps) {
  return (
    <section className="bg-surface py-24 md:py-32">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-content mx-auto px-6"
      >
        <SectionLabel text="HOW IT WORKS" />

        <motion.h2
          variants={scrollRevealVariants}
          className="text-h2 font-semibold text-imperial mb-16 max-w-[700px] text-[28px] md:text-h2"
        >
          {headline}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={scrollRevealVariants}
              className="bg-lightblue rounded-lg p-8"
            >
              <span className="text-[14px] font-bold text-persian mb-2 block">
                {step.number}
              </span>
              <h3 className="text-h3 font-semibold text-imperial mb-4 text-[22px] md:text-h3">
                {step.headline}
              </h3>
              <p className="text-body text-body leading-relaxed mb-6">
                {step.body}
              </p>
              <p className="text-[14px] text-persian font-semibold">
                {step.stat}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
