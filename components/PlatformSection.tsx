"use client";

import { motion } from "framer-motion";
import {
  scrollRevealVariants,
  staggerContainer,
} from "@/lib/useScrollReveal";
import SectionLabel from "./SectionLabel";

const capabilities = [
  "Real-time market pricing across direct-source manufacturer contracts — updated continuously, visible to your team.",
  "AI-powered substitution intelligence — surface equivalent SKUs at lower cost, automatically benchmarked against live market rates.",
  "DSCSA-compliant serialization and chain-of-custody tracking — every transaction documented to the unit level, audit-ready by default.",
  "GPO, ERP, and health system integration — HL7, EDI 850/855/856/810 compatible. Your existing systems, connected.",
  "Compliance-native audit trails — DEA, FDA, and DSCSA requirements met by architecture, not by manual process.",
  "Fulfillment through UPS Healthcare — temperature-controlled, chain-of-custody verified, nationwide.",
];

export default function PlatformSection() {
  return (
    <section id="platform" className="bg-imperial py-24 md:py-32">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-content mx-auto px-6"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left — copy stack */}
          <div>
            <SectionLabel text="THE PLATFORM" />

            <motion.h2
              variants={scrollRevealVariants}
              className="text-h2 font-semibold text-white mb-4 text-[28px] md:text-h2"
            >
              MetaCommerceRx™. The intelligence infrastructure healthcare
              procurement has been missing.
            </motion.h2>

            <motion.p
              variants={scrollRevealVariants}
              className="text-h3 text-cerulean font-light mb-8 text-[20px] md:text-h3"
            >
              Patented. AI-powered. Built for providers who are done guessing.
            </motion.p>

            <motion.p
              variants={scrollRevealVariants}
              className="text-body-lg text-white/70 mb-8 max-w-copy"
            >
              MetaCommerceRx™ is the operating layer beneath every iRemedy
              service. It connects manufacturers, providers, and compliance
              systems through a single patented infrastructure — making
              direct-source procurement not just possible, but operationally
              superior to the legacy distribution model it replaces.
            </motion.p>

            <motion.p
              variants={scrollRevealVariants}
              className="text-[15px] text-cerulean font-semibold mb-10"
            >
              15 active patents — 4 owned, 11 exclusively licensed. Co-invented
              with the creator of the Amazon Marketplace. The same category of
              infrastructure intelligence, applied to healthcare procurement.
            </motion.p>

            <motion.div variants={scrollRevealVariants}>
              <a
                href="/platform"
                className="inline-block bg-cerulean hover:bg-[#008FB8] text-imperial font-bold text-[15px] px-8 py-4 rounded-btn transition-all duration-200 hover:-translate-y-0.5"
              >
                Explore the Platform →
              </a>
            </motion.div>
          </div>

          {/* Right — capability list */}
          <div className="flex flex-col justify-center">
            {capabilities.map((capability, i) => (
              <motion.div
                key={i}
                variants={scrollRevealVariants}
                className="flex items-start gap-4 py-5 border-b border-white/10 last:border-b-0"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="flex-shrink-0 mt-0.5"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="10" stroke="#00ACE6" strokeWidth="1.5" />
                  <polyline
                    points="8,12 11,15 16,9"
                    stroke="#00ACE6"
                    strokeWidth="2"
                    fill="none"
                  />
                </svg>
                <p className="text-body text-white/80 leading-relaxed">
                  {capability}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
