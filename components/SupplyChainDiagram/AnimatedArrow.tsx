"use client";

import { motion } from "framer-motion";

interface AnimatedArrowProps {
  variant: "old" | "remedy";
  isDrawing: boolean;
  label: string;
  percentLabel?: string;
  reducedMotion: boolean;
}

const PATH_LENGTH = 200;

export default function AnimatedArrow({
  variant,
  isDrawing,
  label,
  percentLabel,
  reducedMotion,
}: AnimatedArrowProps) {
  const color = variant === "old" ? "#CC4444" : "#0064A5";
  const labelColorClass =
    variant === "old" ? "text-old-arrow" : "text-persian";

  if (reducedMotion) {
    return (
      <div className="relative flex-1 min-w-[80px] flex flex-col items-center justify-center py-2">
        <div className="flex flex-col items-center gap-1 mb-1">
          {percentLabel && (
            <span className={`text-xs font-semibold ${labelColorClass}`}>
              {percentLabel}
            </span>
          )}
          <span className="text-[10px] text-body opacity-70 text-center leading-tight max-w-[140px]">
            {label}
          </span>
        </div>
        <svg
          className="w-full h-6"
          viewBox="0 0 220 24"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <line
            x1="10"
            y1="12"
            x2="200"
            y2="12"
            stroke={color}
            strokeWidth={3}
          />
          <polygon points="196,6 210,12 196,18" fill={color} />
        </svg>
      </div>
    );
  }

  return (
    <div className="relative flex-1 min-w-[80px] flex flex-col items-center justify-center py-2">
      <motion.div
        className="flex flex-col items-center gap-1 mb-1"
        initial={{ opacity: 0 }}
        animate={isDrawing ? { opacity: 1 } : {}}
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        {percentLabel && (
          <span className={`text-xs font-semibold ${labelColorClass}`}>
            {percentLabel}
          </span>
        )}
        <span className="text-[10px] text-body opacity-70 text-center leading-tight max-w-[140px]">
          {label}
        </span>
      </motion.div>
      <svg
        className="w-full h-6"
        viewBox="0 0 220 24"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <motion.line
          x1="10"
          y1="12"
          x2="200"
          y2="12"
          stroke={color}
          strokeWidth={3}
          strokeDasharray={PATH_LENGTH}
          initial={{ strokeDashoffset: PATH_LENGTH }}
          animate={isDrawing ? { strokeDashoffset: 0 } : {}}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
        <motion.polygon
          points="196,6 210,12 196,18"
          fill={color}
          initial={{ opacity: 0 }}
          animate={isDrawing ? { opacity: 1 } : {}}
          transition={{ delay: 0.4, duration: 0.15 }}
        />
      </svg>
    </div>
  );
}
