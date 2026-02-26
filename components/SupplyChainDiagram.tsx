"use client";

import { motion } from "framer-motion";
import {
  scrollRevealVariants,
  staggerContainer,
} from "@/lib/useScrollReveal";
import SectionLabel from "./SectionLabel";

// TODO: Build full SVG animation for supply chain diagram.
// OLD SYSTEM row appears first (1s delay). Money-flow animation shows cost
// accumulating left-to-right with a growing dollar indicator. After 2s,
// OLD SYSTEM fades to 60% opacity and iREMEDY row animates in below with
// a direct, clean flow. Hover tooltips on each node. The sequential reveal
// is the hero animation of the site. Consider GSAP if Framer Motion SVG
// animation complexity requires it. Must degrade gracefully with
// prefers-reduced-motion.

interface NodeProps {
  label: string;
  tooltip: string;
  color: string;
  borderColor: string;
}

function DiagramNode({ label, tooltip, color, borderColor }: NodeProps) {
  return (
    <div
      className="relative group flex flex-col items-center"
      role="img"
      aria-label={`${label}: ${tooltip}`}
    >
      <div
        className="w-28 h-28 md:w-32 md:h-32 rounded-lg flex items-center justify-center text-center p-3 border-2 transition-shadow duration-200 hover:shadow-lg"
        style={{ backgroundColor: color, borderColor }}
      >
        <span className="text-[13px] md:text-[14px] font-semibold leading-tight">
          {label}
        </span>
      </div>
      {/* Tooltip */}
      <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-56 bg-imperial text-white text-[12px] leading-snug rounded px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10 text-center">
        {tooltip}
      </div>
    </div>
  );
}

function Arrow({ label, variant }: { label: string; variant: "danger" | "blue" }) {
  const color = variant === "danger" ? "#8B0000" : "#0064A5";
  return (
    <div className="flex flex-col items-center justify-center min-w-[60px] md:min-w-[80px]">
      <svg width="60" height="24" className="mb-1" aria-hidden="true">
        <line x1="0" y1="12" x2="50" y2="12" stroke={color} strokeWidth="2" />
        <polygon points="50,6 60,12 50,18" fill={color} />
      </svg>
      <span
        className="text-[10px] md:text-[11px] font-semibold text-center leading-tight max-w-[100px]"
        style={{ color }}
      >
        {label}
      </span>
    </div>
  );
}

export default function SupplyChainDiagram() {
  return (
    <section
      id="disruption-visual"
      className="bg-surface py-24 md:py-32"
      aria-label="Supply chain comparison: traditional system versus iRemedy direct-source model"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-content mx-auto px-6"
      >
        <SectionLabel text="WHY IT MATTERS" />

        <motion.h2
          variants={scrollRevealVariants}
          className="text-h2 font-semibold text-imperial mb-4 max-w-[700px] text-[28px] md:text-h2"
        >
          Healthcare providers have been paying a tax they didn&rsquo;t know
          existed.
        </motion.h2>

        <motion.p
          variants={scrollRevealVariants}
          className="text-body-lg text-body mb-16 max-w-copy"
        >
          The diagram below shows the typical path a medical supply takes from
          manufacturer to your facility — and what happens to its price at every
          step.
        </motion.p>

        {/* Old System Row */}
        <motion.div variants={scrollRevealVariants}>
          <p className="text-caption font-bold text-danger uppercase tracking-[0.1em] mb-6">
            THE OLD SYSTEM
          </p>
          <div className="flex flex-wrap items-center justify-start gap-2 md:gap-0 mb-4 overflow-x-auto pb-4">
            <DiagramNode
              label="Manufacturer"
              tooltip="List price set at manufacturer. This is the only fair price in the chain."
              color="#FFF"
              borderColor="#D0D8E0"
            />
            <Arrow label="+12–18% distributor margin" variant="danger" />
            <DiagramNode
              label="National Distributor"
              tooltip="Adds 12–18% distributor margin. Rebates flow back to the GPO — not to you."
              color="#FEF2F2"
              borderColor="#8B0000"
            />
            <Arrow label="+8–14% sub-distribution" variant="danger" />
            <DiagramNode
              label="GPO / Sub-Distributor"
              tooltip="Controls your formulary options before you see a price. Adds 8–14% in administrative fees."
              color="#FEF2F2"
              borderColor="#8B0000"
            />
            <Arrow label="+5–9% administrative markup" variant="danger" />
            <DiagramNode
              label="Your Facility"
              tooltip="You pay 30–40% above direct-source cost. The difference funded a chain that added no clinical value."
              color="#FEE2E2"
              borderColor="#8B0000"
            />
          </div>
        </motion.div>

        {/* iRemedy Model Row */}
        <motion.div variants={scrollRevealVariants} className="mt-12">
          <p className="text-caption font-bold text-persian uppercase tracking-[0.1em] mb-6">
            THE iREMEDY MODEL
          </p>
          <div className="flex flex-wrap items-center justify-start gap-2 md:gap-0 mb-4 overflow-x-auto pb-4">
            <DiagramNode
              label="Manufacturer"
              tooltip="Direct contract pricing. No rebate capture. No formulary restriction."
              color="#FFF"
              borderColor="#0064A5"
            />
            <Arrow label="Direct-source pricing via MetaCommerceRx" variant="blue" />
            <DiagramNode
              label="MetaCommerceRx™"
              tooltip="AI-powered pricing intelligence + DSCSA compliance layer. Every transaction verified, documented, and auditable."
              color="#E8F4FC"
              borderColor="#00ACE6"
            />
            <Arrow label="Transparent fulfillment via UPS Healthcare" variant="blue" />
            <DiagramNode
              label="Your Facility"
              tooltip="Direct-source cost. Full chain-of-custody documentation. Delivered via UPS Healthcare."
              color="#F0FDF4"
              borderColor="#1A6B3A"
            />
          </div>
        </motion.div>

        {/* Closing stat */}
        <motion.p
          variants={scrollRevealVariants}
          className="mt-16 text-body-lg text-imperial font-semibold max-w-copy"
        >
          Providers who switched to direct-source procurement through iRemedy
          reduced supply costs by an average of 38%. That is not a discount.
          That is the removal of a structural tax.
        </motion.p>
      </motion.div>
    </section>
  );
}
