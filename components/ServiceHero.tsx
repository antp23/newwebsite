"use client";

import { motion } from "framer-motion";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" as const, delay },
});

interface ServiceHeroProps {
  eyebrow: string;
  headline: string;
  subheadline: string;
  body?: string;
  ctaText: string;
  ctaLink: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
}

export default function ServiceHero({
  eyebrow,
  headline,
  subheadline,
  body,
  ctaText,
  ctaLink,
  secondaryCtaText,
  secondaryCtaLink,
}: ServiceHeroProps) {
  return (
    <section className="relative bg-imperial flex items-center overflow-hidden pt-[72px]">
      {/* Subtle diagonal texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0' y1='60' x2='60' y2='0' stroke='%23fff' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-content mx-auto px-6 py-24 md:py-32 w-full">
        <div className="max-w-[700px] text-left">
          {/* Eyebrow label */}
          <motion.p
            {...fadeUp(0)}
            className="text-caption font-semibold text-cerulean uppercase tracking-[0.12em] mb-6"
          >
            {eyebrow}
          </motion.p>

          {/* Headline */}
          <motion.h1
            {...fadeUp(0.15)}
            className="text-white font-bold mb-6 text-[36px] md:text-[44px] lg:text-h1 leading-[1.1] whitespace-pre-line"
          >
            {headline}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            {...fadeUp(0.3)}
            className="text-[20px] md:text-h3 text-white/80 font-light max-w-copy mb-6 leading-relaxed"
          >
            {subheadline}
          </motion.p>

          {/* Optional body */}
          {body && (
            <motion.p
              {...fadeUp(0.35)}
              className="text-body-lg text-white/60 max-w-copy mb-10"
            >
              {body}
            </motion.p>
          )}

          {/* CTAs */}
          <motion.div
            {...fadeUp(0.45)}
            className="flex flex-col sm:flex-row gap-4 items-start mt-10"
          >
            <a
              href={ctaLink}
              className="bg-persian hover:bg-[#004F84] text-white font-bold text-[16px] px-8 py-4 rounded-btn transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,100,165,0.3)]"
            >
              {ctaText}
            </a>
            {secondaryCtaText && secondaryCtaLink && (
              <a
                href={secondaryCtaLink}
                className="text-white/80 hover:text-white font-semibold text-[15px] underline underline-offset-4 decoration-white/30 hover:decoration-white/60 transition-all duration-200 py-4"
              >
                {secondaryCtaText}
              </a>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
