"use client";

import { motion } from "framer-motion";
import {
  scrollRevealVariants,
  staggerContainer,
} from "@/lib/useScrollReveal";
import SectionLabel from "./SectionLabel";

const steps = [
  {
    number: "01",
    headline: "Eliminate the Markup.",
    body: "Direct manufacturer-to-provider distribution removes the intermediary layers that inflate cost and obscure value. What you pay is what the product costs — verified, documented, and auditable at every step. The markup is not negotiated down. It is structurally removed.",
    stat: "Up to 38% reduction in procurement cost for ambulatory providers and surgery centers.",
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        stroke="#00ACE6"
        strokeWidth="2"
        aria-hidden="true"
      >
        <circle cx="16" cy="24" r="8" />
        <circle cx="32" cy="24" r="8" />
        <line x1="22" y1="18" x2="26" y2="30" />
        <line x1="8" y1="8" x2="40" y2="40" strokeWidth="2.5" />
      </svg>
    ),
  },
  {
    number: "02",
    headline: "Illuminate the Market.",
    body: "MetaCommerceRx™ gives your procurement team real-time intelligence on pricing, availability, and substitution alternatives across 50,000+ SKUs. You are no longer operating on a catalog you did not build, with prices you cannot verify. You are operating on a live market with full visibility.",
    stat: "Real-time pricing across 50,000+ medical supply SKUs. Updated continuously.",
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        stroke="#00ACE6"
        strokeWidth="2"
        aria-hidden="true"
      >
        <circle cx="20" cy="20" r="12" />
        <line x1="29" y1="29" x2="40" y2="40" strokeWidth="2.5" />
        <rect x="14" y="16" width="12" height="2" rx="1" />
        <rect x="14" y="22" width="8" height="2" rx="1" />
      </svg>
    ),
  },
  {
    number: "03",
    headline: "Optimize Every Decision.",
    body: "AI-powered analytics turn your procurement history into a strategic asset. Benchmark your current spend against real-time market rates. Identify substitution opportunities across equivalent SKUs. Surface compliance gaps before they become audit findings. Your procurement team stops reacting and starts planning.",
    stat: "Compliance-native architecture. DSCSA, DEA, and FDA requirements met by design — not by exception.",
    icon: (
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        stroke="#00ACE6"
        strokeWidth="2"
        aria-hidden="true"
      >
        <polyline points="8,36 16,28 24,32 32,16 40,12" />
        <polyline points="34,12 40,12 40,18" />
        <polyline points="30,38 36,32 42,36" strokeWidth="1.5" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-24 md:py-32">
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
          Three things happen when you work with iRemedy. Only one of them
          feels like procurement.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={scrollRevealVariants}
              className="bg-lightblue rounded-lg p-8"
            >
              <div className="mb-6">{step.icon}</div>
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
