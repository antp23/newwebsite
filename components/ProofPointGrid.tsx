"use client";

import { motion } from "framer-motion";
import {
  scrollRevealVariants,
  staggerContainer,
} from "@/lib/useScrollReveal";
import SectionLabel from "./SectionLabel";
import PartnerLogoBar from "./PartnerLogoBar";

const proofPoints = [
  {
    headline: "Operation Warp Speed.\nNationwide distribution. Proven at scale.",
    body: "iRemedy mobilized nationwide distribution capacity during the COVID-19 response, delivering critical supplies across the US healthcare system under federal contract. Enterprise-scale logistics under maximum pressure. Government-trusted performance.",
  },
  {
    headline: "Compliance isn\u2019t a feature.\nIt\u2019s the architecture.",
    body: "DSCSA serialization. DEA Schedule II\u2013V licensure. FDA-registered facility network. Temperature-controlled fulfillment through UPS Healthcare. Cold-chain capability. These are not add-ons. They are the foundation every other capability is built on.",
  },
  {
    headline:
      "Patented technology.\nFrom the infrastructure that built the modern marketplace.",
    body: "15 active patents covering the MetaCommerceRx\u2122 platform. Co-invented with the creator of the Amazon Marketplace \u2014 the same category of infrastructure intelligence that transformed consumer commerce, applied to healthcare procurement.",
  },
];

export default function ProofPointGrid() {
  return (
    <section id="proof" className="bg-white py-24 md:py-32">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-content mx-auto px-6"
      >
        <SectionLabel text="BUILT TO HOLD" />

        <motion.h2
          variants={scrollRevealVariants}
          className="text-h2 font-semibold text-imperial mb-16 max-w-[800px] text-[28px] md:text-h2"
        >
          The infrastructure is real. The compliance is structural. The track
          record is operational.
        </motion.h2>

        {/* Logo bar */}
        <PartnerLogoBar />

        {/* Proof point cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
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
