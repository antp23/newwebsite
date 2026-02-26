"use client";

import { motion } from "framer-motion";
import {
  scrollRevealVariants,
  staggerContainer,
} from "@/lib/useScrollReveal";
import SectionLabel from "./SectionLabel";

const personas = [
  {
    eyebrow: "FOR PROVIDERS & SURGERY CENTERS",
    headline:
      "Find out exactly what you\u2019re paying above direct-source cost.",
    body: "A procurement audit takes less than two business days. You will see, for the first time, the gap between what you pay today and what you would pay with direct-source access. No commitment required. No sales call. Just the number.",
    ctaText: "Request Your Procurement Audit",
    ctaLink: "/contact?persona=provider",
    microCopy: "Free. Two-day turnaround. No obligation.",
    accentColor: "#0064A5",
  },
  {
    eyebrow: "FOR MANUFACTURERS & PHARMA COMPANIES",
    headline:
      "US market access without building the infrastructure from scratch.",
    body: "The iRemedy Incubator gives manufacturers the DEA licensing, DSCSA compliance infrastructure, and distribution reach to enter US healthcare distribution without the 12\u201318 month buildout. Talk to our team about what your product category requires and what timeline is realistic.",
    ctaText: "Explore the Incubator",
    ctaLink: "/contact?persona=manufacturer",
    microCopy:
      "Currently accepting applications across pharma, medical device, and specialty supply.",
    accentColor: "#00ACE6",
  },
  {
    eyebrow: "FOR HEALTH SYSTEMS, GPOs & GOVERNMENT",
    headline:
      "Enterprise procurement intelligence for institutional buyers who require a partner, not a vendor.",
    body: "ERP integration. Formulary optimization at scale. Real-time market benchmarking. Compliance architecture that meets institutional audit requirements. Government contract vehicles available. iRemedy works with health systems and federal agencies that have outgrown what their current distribution infrastructure can tell them.",
    ctaText: "Schedule an Enterprise Brief",
    ctaLink: "/contact?persona=enterprise",
    microCopy:
      "GSA MAS \u00b7 CAGE Registered \u00b7 Government contract vehicles available.",
    accentColor: "#212E3E",
  },
];

export default function PersonaCTASection() {
  return (
    <section id="contact" className="bg-surface py-24 md:py-32">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-content mx-auto px-6"
      >
        <SectionLabel text="WHERE DO YOU FIT" />

        <motion.h2
          variants={scrollRevealVariants}
          className="text-h2 font-semibold text-imperial mb-16 max-w-[700px] text-[28px] md:text-h2"
        >
          The supply chain problem is the same. The solution looks different
          depending on where you sit in it.
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {personas.map((persona, i) => (
            <motion.div
              key={i}
              variants={scrollRevealVariants}
              className="bg-white border border-border rounded-lg p-10 flex flex-col h-full"
              style={{ borderTopColor: persona.accentColor, borderTopWidth: 4 }}
            >
              <p className="text-caption font-semibold uppercase tracking-[0.1em] mb-4" style={{ color: persona.accentColor }}>
                {persona.eyebrow}
              </p>
              <h3 className="text-[20px] font-semibold text-imperial mb-4 leading-tight">
                {persona.headline}
              </h3>
              <p className="text-body text-body leading-relaxed mb-8 flex-grow">
                {persona.body}
              </p>
              <a
                href={persona.ctaLink}
                className="inline-block text-center font-bold text-[15px] px-6 py-4 rounded-btn transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg text-white mb-3"
                style={{ backgroundColor: persona.accentColor }}
              >
                {persona.ctaText}
              </a>
              <p className="text-[12px] text-body/50 text-center">
                {persona.microCopy}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
