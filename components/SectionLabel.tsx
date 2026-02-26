"use client";

import { motion } from "framer-motion";
import { scrollRevealVariants } from "@/lib/useScrollReveal";

interface SectionLabelProps {
  text: string;
}

export default function SectionLabel({ text }: SectionLabelProps) {
  return (
    <motion.p
      variants={scrollRevealVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="text-caption font-semibold text-cerulean uppercase tracking-[0.12em] mb-4"
    >
      {text}
    </motion.p>
  );
}
