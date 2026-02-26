"use client";

import { motion } from "framer-motion";
import * as Tooltip from "@radix-ui/react-tooltip";
import type { DiagramNode as DiagramNodeType } from "./data";

interface DiagramNodeProps {
  node: DiagramNodeType;
  isVisible: boolean;
  isPulsing: boolean;
  reducedMotion: boolean;
}

const variantStyles: Record<
  DiagramNodeType["variant"],
  { bg: string; border: string; ring: string }
> = {
  neutral: {
    bg: "bg-white",
    border: "border-border",
    ring: "ring-border",
  },
  old: {
    bg: "bg-old-node",
    border: "border-old-arrow",
    ring: "ring-old-arrow",
  },
  oldFinal: {
    bg: "bg-old-final",
    border: "border-old-dark",
    ring: "ring-old-dark",
  },
  remedySoft: {
    bg: "bg-lightblue",
    border: "border-cerulean",
    ring: "ring-cerulean",
  },
  remedyStrong: {
    bg: "bg-remedy-node",
    border: "border-remedy-text",
    ring: "ring-remedy-text",
  },
};

export default function DiagramNode({
  node,
  isVisible,
  isPulsing,
  reducedMotion,
}: DiagramNodeProps) {
  const styles = variantStyles[node.variant];

  const nodeContent = (
    <div
      className={`
        min-w-[140px] max-w-[160px] min-h-[88px] rounded-lg p-4
        border-2 ${styles.bg} ${styles.border}
        transition-all duration-200
        hover:scale-[1.04] hover:ring-2 ${styles.ring} hover:cursor-pointer
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-persian focus-visible:ring-offset-2
        ${isPulsing && !reducedMotion ? "animate-pulse" : ""}
      `}
    >
      <p className="font-semibold text-sm leading-tight text-imperial">
        {node.label}
      </p>
      {node.sublabel && (
        <p className="text-xs text-body opacity-70 mt-1">{node.sublabel}</p>
      )}
    </div>
  );

  const wrappedNode = (
    <Tooltip.Provider delayDuration={200}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <button
            type="button"
            aria-label={`${node.label}: ${node.tooltip}`}
            aria-haspopup="true"
            className="text-left"
          >
            {nodeContent}
          </button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="bg-imperial text-white text-sm rounded-lg px-4 py-3 max-w-[280px] shadow-xl leading-relaxed z-50"
            sideOffset={8}
          >
            {node.tooltip}
            <Tooltip.Arrow className="fill-imperial" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );

  if (reducedMotion) {
    return wrappedNode;
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={
        isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
      }
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {wrappedNode}
    </motion.div>
  );
}
