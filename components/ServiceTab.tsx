"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  scrollRevealVariants,
  staggerContainer,
} from "@/lib/useScrollReveal";
import SectionLabel from "./SectionLabel";

const tabs = [
  {
    id: "distribution",
    label: "Direct Distribution",
    headline: "Stop paying the middleman.\nStart buying direct.",
    body: "iRemedy connects ambulatory providers and surgery centers directly to manufacturers — eliminating the GPO layer, the sub-distributor margin, and the formulary restrictions that have controlled your options for decades. Direct-source pricing. Transparent cost. Compliant by default.",
    cta: "See how direct distribution works →",
    ctaLink: "/distribution",
    proofPoint:
      "Fulfilled through UPS Healthcare. DSCSA-compliant at every step.",
  },
  {
    id: "incubator",
    label: "Manufacturer Incubator",
    headline: "Your product, in the US market.\nWithout the 18-month runway.",
    body: "Entering US healthcare distribution requires DEA licensing, FDA registration, DSCSA serialization, state-by-state compliance infrastructure, and distribution relationships most manufacturers spend years building. iRemedy has all of it. The Incubator puts it to work for you — in weeks.",
    cta: "Explore the Incubator program →",
    ctaLink: "/incubator",
    proofPoint:
      "Serving manufacturers across branded pharmaceutical, medical device, and specialty supply categories.",
  },
  {
    id: "saas",
    label: "SaaS Platform",
    headline:
      "Procurement intelligence.\nFinally built for the people doing the purchasing.",
    body: "MetaCommerceRx™ as a subscription. Real-time pricing benchmarks, formulary optimization, spend analytics, and compliance monitoring — delivered through a platform built for procurement teams who have been operating on spreadsheets and distributor catalogs. You see the market. You make better decisions. You keep the savings.",
    cta: "See the platform in action →",
    ctaLink: "/saas",
    proofPoint: "50,000+ SKUs. Live pricing. Your existing ERP, connected.",
  },
  {
    id: "advisory",
    label: "Government Advisory",
    headline:
      "Supply chain intelligence for agencies that cannot afford to guess.",
    body: "iRemedy advises federal agencies on healthcare procurement modernization, domestic sourcing strategy, and supply chain resilience — backed by the operational track record of an organization that distributed critical supplies during Operation Warp Speed. Policy recommendations grounded in live infrastructure, not theory.",
    cta: "Request a government brief →",
    ctaLink: "/advisory",
    proofPoint:
      "GSA MAS contract holder. CAGE Code registered. DIU OTA experienced.",
  },
  {
    id: "intelligence",
    label: "Market Intelligence",
    headline:
      "Know what the market knows.\nBefore your next formulary decision.",
    body: "Real-time pricing benchmarks, manufacturer capacity signals, formulary intelligence, and substitution analytics — delivered as a market intelligence subscription for GPOs, health systems, and institutional procurement teams. Stop benchmarking against last quarter. Start operating on what the market is doing right now.",
    cta: "Explore market intelligence →",
    ctaLink: "/intelligence",
    proofPoint:
      "Updated in real time. Sourced from direct manufacturer relationships.",
  },
];

export default function ServiceTab() {
  const [activeTab, setActiveTab] = useState("distribution");
  const activeService = tabs.find((t) => t.id === activeTab)!;

  return (
    <section id="solutions" className="bg-surface py-24 md:py-32">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-content mx-auto px-6"
      >
        <SectionLabel text="SOLUTIONS" />

        <motion.h2
          variants={scrollRevealVariants}
          className="text-h2 font-semibold text-imperial mb-4 text-[28px] md:text-h2"
        >
          One platform. Configured for where you sit in the supply chain.
        </motion.h2>

        <motion.p
          variants={scrollRevealVariants}
          className="text-body-lg text-body mb-12 max-w-copy"
        >
          Whether you are a provider buying supplies, a manufacturer entering
          the US market, or a health system optimizing procurement at scale —
          MetaCommerceRx™ is the infrastructure underneath every iRemedy
          service.
        </motion.p>

        {/* Tab bar */}
        <motion.div
          variants={scrollRevealVariants}
          className="flex flex-wrap gap-1 mb-8 border-b border-border"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-5 py-3 text-[14px] font-semibold transition-colors duration-200 ${
                activeTab === tab.id
                  ? "text-persian"
                  : "text-body/60 hover:text-body"
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-[3px] bg-persian rounded-t"
                  transition={{ duration: 0.25 }}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeService.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="bg-white border border-border rounded-lg p-8 md:p-12"
          >
            <h3 className="text-h3 font-semibold text-imperial mb-6 text-[22px] md:text-h3 whitespace-pre-line">
              {activeService.headline}
            </h3>
            <p className="text-body-lg text-body leading-relaxed mb-8 max-w-copy">
              {activeService.body}
            </p>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <a
                href={activeService.ctaLink}
                className="text-persian font-semibold text-[15px] hover:underline"
              >
                {activeService.cta}
              </a>
              <span className="text-[13px] text-success font-semibold flex items-center gap-2">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <circle
                    cx="8"
                    cy="8"
                    r="7"
                    stroke="#1A6B3A"
                    strokeWidth="1.5"
                  />
                  <polyline
                    points="5,8 7,10 11,6"
                    stroke="#1A6B3A"
                    strokeWidth="1.5"
                    fill="none"
                  />
                </svg>
                {activeService.proofPoint}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
