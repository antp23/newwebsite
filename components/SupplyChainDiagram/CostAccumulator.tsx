"use client";

import { useState, useEffect } from "react";

interface CostAccumulatorProps {
  from: number;
  to: number;
  duration: number;
  isPlaying: boolean;
}

export default function CostAccumulator({
  from,
  to,
  duration,
  isPlaying,
}: CostAccumulatorProps) {
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!isPlaying) return;

    const start = performance.now();
    let raf: number;

    const animate = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      // ease-out-cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(from + (to - from) * eased));
      if (progress < 1) {
        raf = requestAnimationFrame(animate);
      }
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [isPlaying, from, to, duration]);

  return (
    <span className="font-bold text-old-arrow text-sm">+{count}%</span>
  );
}
