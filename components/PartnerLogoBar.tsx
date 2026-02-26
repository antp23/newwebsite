"use client";

import { motion } from "framer-motion";
import { scrollRevealVariants, staggerContainer } from "@/lib/useScrollReveal";

const logos = [
  { label: "Enterprise Fulfillment Partner", name: "UPS Healthcare" },
  { label: "Drug Supply Chain Security Act Compliant", name: "DSCSA" },
  { label: "DEA & FDA Licensed", name: "DEA / FDA" },
  { label: "GSA Schedule Contract Holder", name: "GSA" },
  { label: "15 Active Patents — MetaCommerceRx™ Infrastructure", name: "Patents" },
  { label: "Operation Warp Speed Participant", name: "Warp Speed" },
];

export default function PartnerLogoBar() {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="flex flex-wrap justify-center gap-8 md:gap-12 py-12 border-b border-border"
    >
      {logos.map((logo) => (
        <motion.div
          key={logo.name}
          variants={scrollRevealVariants}
          className="flex flex-col items-center gap-2 group"
        >
          {/* Placeholder badge */}
          <div className="w-24 h-16 bg-surface rounded flex items-center justify-center border border-border grayscale group-hover:grayscale-0 transition-all duration-300">
            <span className="text-[11px] font-bold text-imperial/60 text-center leading-tight px-2">
              {logo.name}
            </span>
          </div>
          <span className="text-[10px] text-body/50 text-center max-w-[120px] leading-tight">
            {logo.label}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
}
