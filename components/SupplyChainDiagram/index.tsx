"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import SectionLabel from "../SectionLabel";
import DiagramNode from "./DiagramNode";
import AnimatedArrow from "./AnimatedArrow";
import CostAccumulator from "./CostAccumulator";
import { useAnimationSequence } from "./useAnimationSequence";
import { oldSystemRow, remedyRow } from "./data";
import { COST_STEPS } from "./constants";

export default function SupplyChainDiagram() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const anim = useAnimationSequence(isInView, reducedMotion);

  // Map old system node visibility and pulse state by index
  const oldNodeVisible = [
    anim.oldNode1Visible,
    anim.oldNode2Visible,
    anim.oldNode3Visible,
    anim.oldNode4Visible,
  ];
  const oldNodePulsing = [
    anim.oldNode1Pulsing,
    anim.oldNode2Pulsing,
    anim.oldNode3Pulsing,
    anim.oldNode4Pulsing,
  ];
  const oldArrowDrawing = [
    anim.oldArrow1Drawing,
    anim.oldArrow2Drawing,
    anim.oldArrow3Drawing,
  ];
  const costStepPlaying = [
    anim.costStep1Playing,
    anim.costStep2Playing,
    anim.costStep3Playing,
  ];
  const costStepValues: [number, number][] = [
    [0, COST_STEPS.AFTER_ARROW_1],
    [COST_STEPS.AFTER_ARROW_1, COST_STEPS.AFTER_ARROW_2],
    [COST_STEPS.AFTER_ARROW_2, COST_STEPS.AFTER_ARROW_3],
  ];

  // Map remedy node visibility by index
  const remedyNodeVisible = [
    anim.remedyNode1Visible,
    anim.remedyNode2Visible,
    anim.remedyNode3Visible,
  ];
  const remedyArrowDrawing = [
    anim.remedyArrow1Drawing,
    anim.remedyArrow2Drawing,
  ];

  // Helpers for animated fade wrappers
  const fadeProps = (visible: boolean) =>
    reducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 16 } as const,
          animate: visible
            ? ({ opacity: 1, y: 0 } as const)
            : ({ opacity: 0, y: 16 } as const),
          transition: { duration: 0.5, ease: "easeOut" as const },
        };

  const labelFadeProps = (visible: boolean) =>
    reducedMotion
      ? {}
      : {
          initial: { opacity: 0 } as const,
          animate: visible ? ({ opacity: 1 } as const) : ({ opacity: 0 } as const),
          transition: { duration: 0.3 },
        };

  return (
    <section
      id="disruption-visual"
      className="bg-surface py-16 md:py-24"
      aria-label="Healthcare supply chain comparison diagram"
      aria-describedby="diagram-description"
    >
      {/* Screen-reader-only description */}
      <p id="diagram-description" className="sr-only">
        This diagram compares two supply chain models. The traditional
        distribution model includes four nodes: Manufacturer, National
        Distributor (adding 12–18% margin), GPO/Sub-Distributor (adding
        8–14%), and Your Facility, which pays 30–40% above direct-source cost.
        The iRemedy direct model connects Manufacturer directly to
        MetaCommerceRx (AI intelligence + compliance layer), then to Your
        Facility at direct-source cost via UPS Healthcare.
      </p>

      <div ref={ref} className="max-w-[1200px] mx-auto px-6">
        {/* Section header */}
        <motion.div {...fadeProps(anim.sectionVisible)}>
          <SectionLabel text="WHY IT MATTERS" />
        </motion.div>

        <motion.h2
          {...fadeProps(anim.headlineVisible)}
          className="text-h2 font-bold text-imperial mb-4 max-w-[720px] text-[28px] md:text-h2"
        >
          Healthcare providers have been paying a tax they didn&rsquo;t know
          existed.
        </motion.h2>

        <motion.p
          {...fadeProps(anim.subheadVisible)}
          className="text-body text-body mb-16 max-w-[640px]"
        >
          The diagram below shows the typical path a medical supply takes from
          manufacturer to your facility — and what happens to its price at
          every step.
        </motion.p>

        {/* ─── DESKTOP LAYOUT (768px+) ─── */}
        <div className="hidden md:block">
          {/* Old System Row */}
          <motion.div
            {...labelFadeProps(anim.oldRowFaded ? true : anim.oldLabelVisible)}
            style={
              !reducedMotion && anim.oldRowFaded
                ? { opacity: 0.4, transition: "opacity 800ms ease" }
                : undefined
            }
          >
            <motion.p
              {...labelFadeProps(anim.oldLabelVisible)}
              className="text-caption font-bold text-old-arrow uppercase tracking-[0.1em] mb-6"
            >
              {oldSystemRow.rowLabel}
            </motion.p>

            <div
              className="flex items-center justify-between mb-4"
              role="img"
              aria-label="Traditional distribution: 4-step chain with 30–40% markup"
            >
              {oldSystemRow.nodes.map((node, i) => (
                <div key={node.id} className="flex items-center">
                  <DiagramNode
                    node={node}
                    isVisible={oldNodeVisible[i]}
                    isPulsing={oldNodePulsing[i]}
                    reducedMotion={reducedMotion}
                  />
                  {i < oldSystemRow.arrows.length && (
                    <div className="flex flex-col items-center mx-2">
                      <AnimatedArrow
                        variant={oldSystemRow.arrows[i].variant}
                        isDrawing={oldArrowDrawing[i]}
                        label={oldSystemRow.arrows[i].label}
                        percentLabel={oldSystemRow.arrows[i].percentLabel}
                        reducedMotion={reducedMotion}
                      />
                      <CostAccumulator
                        from={costStepValues[i][0]}
                        to={costStepValues[i][1]}
                        duration={400}
                        isPlaying={costStepPlaying[i]}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Running total badge at Node 4 */}
            <motion.div
              className="flex justify-end"
              {...(reducedMotion
                ? {}
                : {
                    initial: { opacity: 0 },
                    animate: anim.oldTotalBadgeVisible
                      ? { opacity: 1 }
                      : { opacity: 0 },
                    transition: { duration: 0.4 },
                  })}
            >
              <span className="inline-block bg-old-final text-old-dark text-sm font-bold px-4 py-2 rounded-lg border border-old-dark">
                +{COST_STEPS.AFTER_ARROW_3}% above direct-source cost
              </span>
            </motion.div>
          </motion.div>

          {/* Gap between rows */}
          <div className="h-12" />

          {/* iRemedy Row */}
          <div>
            <motion.p
              {...labelFadeProps(anim.remedyLabelVisible)}
              className="text-caption font-bold text-persian uppercase tracking-[0.1em] mb-6"
            >
              {remedyRow.rowLabel}
            </motion.p>

            <div
              className="flex items-center justify-between mb-4"
              role="img"
              aria-label="iRemedy direct: 3-step direct path, no markup"
            >
              {remedyRow.nodes.map((node, i) => (
                <div key={node.id} className="flex items-center">
                  <DiagramNode
                    node={node}
                    isVisible={remedyNodeVisible[i]}
                    isPulsing={false}
                    reducedMotion={reducedMotion}
                  />
                  {i < remedyRow.arrows.length && (
                    <div className="mx-2">
                      <AnimatedArrow
                        variant={remedyRow.arrows[i].variant}
                        isDrawing={remedyArrowDrawing[i]}
                        label={remedyRow.arrows[i].label}
                        percentLabel={remedyRow.arrows[i].percentLabel}
                        reducedMotion={reducedMotion}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ─── MOBILE LAYOUT (<768px) ─── */}
        <div className="md:hidden">
          {/* Old System — vertical stack */}
          <p className="text-caption font-bold text-old-arrow uppercase tracking-[0.1em] mb-4">
            {oldSystemRow.rowLabel}
          </p>
          <div
            className="flex flex-col items-center gap-3 mb-8"
            role="img"
            aria-label="Traditional distribution: 4-step chain with 30–40% markup"
          >
            {oldSystemRow.nodes.map((node, i) => (
              <div key={node.id} className="flex flex-col items-center">
                <DiagramNode
                  node={node}
                  isVisible={true}
                  isPulsing={false}
                  reducedMotion={true}
                />
                {i < oldSystemRow.arrows.length && (
                  <div className="flex flex-col items-center my-2">
                    <svg
                      width="24"
                      height="32"
                      aria-hidden="true"
                      className="text-old-arrow"
                    >
                      <line
                        x1="12"
                        y1="0"
                        x2="12"
                        y2="22"
                        stroke="#CC4444"
                        strokeWidth={2}
                      />
                      <polygon points="6,22 12,32 18,22" fill="#CC4444" />
                    </svg>
                    <span className="text-xs font-semibold text-old-arrow mt-1">
                      {oldSystemRow.arrows[i].percentLabel}
                    </span>
                  </div>
                )}
              </div>
            ))}
            <span className="inline-block bg-old-final text-old-dark text-sm font-bold px-4 py-2 rounded-lg border border-old-dark mt-2">
              +{COST_STEPS.AFTER_ARROW_3}% above direct-source cost
            </span>
          </div>

          {/* iRemedy — vertical stack */}
          <p className="text-caption font-bold text-persian uppercase tracking-[0.1em] mb-4">
            {remedyRow.rowLabel}
          </p>
          <div
            className="flex flex-col items-center gap-3 mb-8"
            role="img"
            aria-label="iRemedy direct: 3-step direct path, no markup"
          >
            {remedyRow.nodes.map((node, i) => (
              <div key={node.id} className="flex flex-col items-center">
                <DiagramNode
                  node={node}
                  isVisible={true}
                  isPulsing={false}
                  reducedMotion={true}
                />
                {i < remedyRow.arrows.length && (
                  <div className="flex flex-col items-center my-2">
                    <svg
                      width="24"
                      height="32"
                      aria-hidden="true"
                    >
                      <line
                        x1="12"
                        y1="0"
                        x2="12"
                        y2="22"
                        stroke="#0064A5"
                        strokeWidth={2}
                      />
                      <polygon points="6,22 12,32 18,22" fill="#0064A5" />
                    </svg>
                    <span className="text-xs font-semibold text-persian mt-1">
                      {remedyRow.arrows[i].percentLabel}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Closing stat */}
        <motion.p
          {...fadeProps(anim.closingStatVisible)}
          className="mt-16 text-base text-imperial max-w-[600px] mx-auto text-center"
        >
          Providers who switched to direct-source procurement through iRemedy
          reduced supply costs by an average of{" "}
          <span className="text-persian font-bold text-2xl">38%</span>. That
          is not a discount. That is the removal of a structural tax.
        </motion.p>
      </div>
    </section>
  );
}
