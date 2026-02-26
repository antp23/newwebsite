"use client";

import { motion } from "framer-motion";
import {
  scrollRevealVariants,
  staggerContainer,
} from "@/lib/useScrollReveal";
import SectionLabel from "./SectionLabel";

interface ProofPoint {
  headline: string;
  body: string;
}

interface ServiceProofProps {
  sectionLabel: string;
  headline: string;
  proofPoints: ProofPoint[];
}

export default function ServiceProof({
  sectionLabel,
  headline,
  proofPoints,
}: ServiceProofProps) {
  return (
    <section className="bg-white py-24 md:py-32">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-content mx-auto px-6"
      >
        <SectionLabel text={sectionLabel} />

        <motion.h2
          variants={scrollRevealVariants}
          className="text-h2 font-semibold text-imperial mb-16 max-w-[800px] text-[28px] md:text-h2"
        >
          {headline}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {proofPoints.map((point, i) => (
            <motion.div
              key={i}
              variants={scrollRevealVariants}
              className="bg-white border-l-4 border-l-persian p-8"
            >
              <h3 className="text-[20px] font-semibold text-imperial mb-4 whitespace-pre-line leading-tight">
                {point.headline}
              </h3>
              <p className="text-body text-body leading-relaxed">
                {point.body}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
