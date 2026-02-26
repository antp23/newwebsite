"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, scrollRevealVariants } from "@/lib/useScrollReveal";

const stats = [
  {
    value: 50,
    prefix: "$",
    suffix: "B+",
    label: "Serviceable market within US healthcare procurement",
  },
  {
    value: 50000,
    prefix: "",
    suffix: "+",
    label: "Medical supply SKUs on the MetaCommerceRx™ platform",
  },
  {
    value: 38,
    prefix: "Up to ",
    suffix: "%",
    label: "Reduction in procurement cost for direct-source clients",
  },
  {
    value: 15,
    prefix: "",
    suffix: "",
    label: "Active patents protecting MetaCommerceRx™ infrastructure",
  },
];

function CountUp({
  value,
  prefix,
  suffix,
  inView,
}: {
  value: number;
  prefix: string;
  suffix: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!inView || hasAnimated.current) return;
    hasAnimated.current = true;

    const duration = 1200;
    const startTime = performance.now();

    function update(currentTime: number) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * value));

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        setCount(value);
      }
    }

    requestAnimationFrame(update);
  }, [inView, value]);

  const display =
    value >= 1000 ? count.toLocaleString() : count.toString();

  return (
    <span className="text-[48px] md:text-[64px] font-bold text-white tabular-nums">
      {prefix}
      {display}
      {suffix}
    </span>
  );
}

export default function StatBar() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-imperial py-20 md:py-24" ref={ref}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-content mx-auto px-6"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center">
          {stats.map((stat, i) => (
            <motion.div key={i} variants={scrollRevealVariants}>
              <CountUp
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                inView={inView}
              />
              <p className="text-[14px] text-white/60 mt-2 leading-snug max-w-[200px] mx-auto">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
