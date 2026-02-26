"use client";

import { motion } from "framer-motion";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" as const, delay },
});

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-imperial flex items-center overflow-hidden">
      {/* Subtle diagonal texture */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cline x1='0' y1='60' x2='60' y2='0' stroke='%23fff' stroke-width='0.5'/%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-content mx-auto px-6 py-32 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-12 items-center">
          {/* Left — copy stack */}
          <div className="text-left">
            {/* Eyebrow badge */}
            <motion.div {...fadeUp(0)}>
              <span className="inline-block bg-cerulean/20 text-cerulean text-caption font-semibold uppercase tracking-[0.1em] px-4 py-2 rounded-full mb-8">
                Built on MetaCommerceRx™ · 15 Active Patents · Powered by
                iRemedy
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              {...fadeUp(0.2)}
              className="text-display text-white font-bold max-w-[700px] mb-6 text-[40px] md:text-[52px] lg:text-display"
            >
              You&rsquo;re paying more than you should.
              <br />
              You know it. Now there&rsquo;s a way to prove it.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              {...fadeUp(0.35)}
              className="text-h3 text-white/80 font-light max-w-copy mb-6 text-[20px] md:text-h3"
            >
              iRemedy replaces legacy distribution intermediaries with
              direct-source pricing, real-time market intelligence, and supply
              chain infrastructure that works for providers — not against them.
            </motion.p>

            {/* Body */}
            <motion.p
              {...fadeUp(0.35)}
              className="text-body-lg text-white/60 max-w-copy mb-10"
            >
              MetaCommerceRx™ gives ambulatory providers, surgery centers, and
              health systems direct-source pricing, real-time market
              intelligence, and supply chain visibility across 50,000+ medical
              supply SKUs — powered by patented technology and fulfilled through
              UPS Healthcare.
            </motion.p>

            {/* CTAs */}
            <motion.div
              {...fadeUp(0.48)}
              className="flex flex-col sm:flex-row gap-4 items-start"
            >
              <a
                href="#disruption-visual"
                className="bg-persian hover:bg-[#004F84] text-white font-bold text-[16px] px-8 py-4 rounded-btn transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,100,165,0.3)]"
              >
                See What You&rsquo;re Actually Paying
              </a>
              <a
                href="#contact"
                className="text-white/80 hover:text-white font-semibold text-[15px] underline underline-offset-4 decoration-white/30 hover:decoration-white/60 transition-all duration-200 py-4"
              >
                Or schedule an enterprise brief →
              </a>
            </motion.div>
          </div>

          {/* Right — abstract supply chain diagram placeholder */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="hidden lg:flex items-center justify-center"
          >
            <svg
              viewBox="0 0 400 400"
              className="w-full max-w-[400px]"
              aria-label="Abstract supply chain flow diagram"
            >
              {/* Abstract node network */}
              {[
                { cx: 80, cy: 80, r: 12 },
                { cx: 200, cy: 50, r: 16 },
                { cx: 320, cy: 90, r: 12 },
                { cx: 120, cy: 200, r: 20 },
                { cx: 280, cy: 180, r: 14 },
                { cx: 200, cy: 300, r: 18 },
                { cx: 100, cy: 340, r: 10 },
                { cx: 320, cy: 320, r: 14 },
              ].map((node, i) => (
                <g key={i}>
                  <circle
                    cx={node.cx}
                    cy={node.cy}
                    r={node.r}
                    fill="none"
                    stroke="#00ACE6"
                    strokeWidth="1.5"
                    opacity={0.6}
                  >
                    <animate
                      attributeName="opacity"
                      values="0.3;0.8;0.3"
                      dur="3s"
                      begin={`${i * 0.375}s`}
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle
                    cx={node.cx}
                    cy={node.cy}
                    r={node.r * 0.4}
                    fill="#00ACE6"
                    opacity={0.4}
                  >
                    <animate
                      attributeName="opacity"
                      values="0.2;0.6;0.2"
                      dur="3s"
                      begin={`${i * 0.375}s`}
                      repeatCount="indefinite"
                    />
                  </circle>
                </g>
              ))}
              {/* Connecting lines */}
              {[
                [80, 80, 200, 50],
                [200, 50, 320, 90],
                [80, 80, 120, 200],
                [320, 90, 280, 180],
                [120, 200, 200, 300],
                [280, 180, 200, 300],
                [200, 300, 100, 340],
                [200, 300, 320, 320],
                [120, 200, 280, 180],
              ].map(([x1, y1, x2, y2], i) => (
                <line
                  key={i}
                  x1={x1}
                  y1={y1}
                  x2={x2}
                  y2={y2}
                  stroke="#00ACE6"
                  strokeWidth="1"
                  opacity={0.2}
                />
              ))}
            </svg>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
