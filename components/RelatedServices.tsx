"use client";

import { motion } from "framer-motion";
import {
  scrollRevealVariants,
  staggerContainer,
} from "@/lib/useScrollReveal";
import SectionLabel from "./SectionLabel";

const allServices = [
  {
    slug: "distribution",
    label: "Direct Distribution",
    headline: "Stop paying the middleman. Start buying direct.",
    href: "/distribution",
  },
  {
    slug: "incubator",
    label: "Manufacturer Incubator",
    headline: "Your product, in the US market. Without the 18-month runway.",
    href: "/incubator",
  },
  {
    slug: "saas",
    label: "SaaS Platform",
    headline: "Procurement intelligence. Finally built for the people doing the purchasing.",
    href: "/saas",
  },
  {
    slug: "advisory",
    label: "Government Advisory",
    headline: "Supply chain intelligence for agencies that cannot afford to guess.",
    href: "/advisory",
  },
  {
    slug: "intelligence",
    label: "Market Intelligence",
    headline: "Know what the market knows. Before your next formulary decision.",
    href: "/intelligence",
  },
];

interface RelatedServicesProps {
  currentSlug: string;
}

export default function RelatedServices({ currentSlug }: RelatedServicesProps) {
  const related = allServices.filter((s) => s.slug !== currentSlug);

  return (
    <section className="bg-surface py-24 md:py-32">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-content mx-auto px-6"
      >
        <SectionLabel text="EXPLORE OTHER SOLUTIONS" />

        <motion.h2
          variants={scrollRevealVariants}
          className="text-h2 font-semibold text-imperial mb-12 text-[28px] md:text-h2"
        >
          One platform. Configured for where you sit in the supply chain.
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {related.map((service) => (
            <motion.a
              key={service.slug}
              href={service.href}
              variants={scrollRevealVariants}
              className="bg-white border border-border rounded-lg p-6 hover:-translate-y-1 hover:border-l-cerulean hover:border-l-4 hover:shadow-md transition-all duration-200 group"
            >
              <p className="text-caption font-semibold text-cerulean uppercase tracking-[0.1em] mb-3">
                {service.label}
              </p>
              <p className="text-[15px] font-semibold text-imperial leading-snug group-hover:text-persian transition-colors">
                {service.headline}
              </p>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
