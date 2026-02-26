"use client";

import { motion } from "framer-motion";
import { scrollRevealVariants, staggerContainer } from "@/lib/useScrollReveal";

export default function ChallengeSolution() {
  return (
    <section className="bg-white py-24 md:py-32">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-content mx-auto px-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Left — The Challenge */}
          <motion.div
            variants={scrollRevealVariants}
            className="pr-0 md:pr-12 pb-12 md:pb-0 border-b md:border-b-0 md:border-r border-imperial/20"
          >
            <p className="text-caption font-semibold text-cerulean uppercase tracking-[0.12em] mb-4">
              THE CHALLENGE
            </p>
            <h2 className="text-h2 font-semibold text-imperial mb-6 text-[28px] md:text-h2">
              Healthcare procurement was designed to profit from the problem it
              claims to solve.
            </h2>
            <p className="text-body-lg text-body leading-relaxed max-w-copy">
              Intermediaries stack margins across layers that providers cannot
              see, cannot audit, and cannot escape. Rebates flow back to the
              wrong parties. Formulary control limits your options before you
              even see a price. The system is not broken. It is working exactly
              as designed — for everyone except you.
            </p>
          </motion.div>

          {/* Right — The Solution */}
          <motion.div
            variants={scrollRevealVariants}
            className="pl-0 md:pl-12 pt-12 md:pt-0"
          >
            <p className="text-caption font-semibold text-cerulean uppercase tracking-[0.12em] mb-4">
              THE SOLUTION
            </p>
            <h2 className="text-h2 font-semibold text-imperial mb-6 text-[28px] md:text-h2">
              A platform built to replace the system — not compete within it.
            </h2>
            <p className="text-body-lg text-body leading-relaxed max-w-copy">
              iRemedy removes the intermediary layers entirely and replaces them
              with MetaCommerceRx™: direct manufacturer-to-provider pricing,
              AI-powered market intelligence, and compliance-native supply chain
              infrastructure. What you pay is what the product costs. Nothing
              more. Nothing hidden.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
