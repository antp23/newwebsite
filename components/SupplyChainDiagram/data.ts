import type { ReactNode } from "react";

export interface DiagramNode {
  id: string;
  label: string;
  sublabel?: string;
  tooltip: string;
  variant: "neutral" | "old" | "oldFinal" | "remedySoft" | "remedyStrong";
  icon?: ReactNode;
}

export interface DiagramArrow {
  label: string;
  percentLabel?: string;
  variant: "old" | "remedy";
}

export interface DiagramRow {
  id: "old" | "remedy";
  rowLabel: string;
  nodes: DiagramNode[];
  arrows: DiagramArrow[];
}

export const oldSystemRow: DiagramRow = {
  id: "old",
  rowLabel: "TRADITIONAL DISTRIBUTION",
  nodes: [
    {
      id: "old-manufacturer",
      label: "Manufacturer",
      sublabel: "Product origin",
      tooltip:
        "List price set at manufacturer. This is the only fair price in the chain.",
      variant: "neutral",
    },
    {
      id: "old-distributor",
      label: "National Distributor",
      sublabel: "Adds margin, controls rebates",
      tooltip:
        "Adds 12\u201318% distributor margin. Rebates flow back to the GPO \u2014 not to you.",
      variant: "old",
    },
    {
      id: "old-gpo",
      label: "GPO / Sub-Distributor",
      sublabel: "Controls your formulary",
      tooltip:
        "Controls your formulary options before you see a price. Adds 8\u201314% in administrative fees.",
      variant: "old",
    },
    {
      id: "old-facility",
      label: "Your Facility",
      sublabel: "You pay the full stack",
      tooltip:
        "You pay 30\u201340% above direct-source cost. The difference funded a chain that added no clinical value.",
      variant: "oldFinal",
    },
  ],
  arrows: [
    {
      label: "Distributor margin applied",
      percentLabel: "+ 12\u201318%",
      variant: "old",
    },
    {
      label: "Sub-distribution fee",
      percentLabel: "+ 8\u201314%",
      variant: "old",
    },
    {
      label: "Administrative markup",
      percentLabel: "+ 5\u20139%",
      variant: "old",
    },
  ],
};

export const remedyRow: DiagramRow = {
  id: "remedy",
  rowLabel: "iREMEDY DIRECT",
  nodes: [
    {
      id: "remedy-manufacturer",
      label: "Manufacturer",
      sublabel: "Direct contract pricing",
      tooltip:
        "Direct contract pricing. No rebate capture. No formulary restriction.",
      variant: "neutral",
    },
    {
      id: "remedy-meta",
      label: "MetaCommerceRx\u2122",
      sublabel: "AI intelligence + compliance layer",
      tooltip:
        "AI-powered pricing intelligence + DSCSA compliance layer. Every transaction verified, documented, and auditable.",
      variant: "remedySoft",
    },
    {
      id: "remedy-facility",
      label: "Your Facility",
      sublabel: "Direct-source cost",
      tooltip:
        "Direct-source cost. Full chain-of-custody documentation. Delivered via UPS Healthcare.",
      variant: "remedyStrong",
    },
  ],
  arrows: [
    {
      label: "Direct-source pricing via MetaCommerceRx\u2122",
      percentLabel: "No markup",
      variant: "remedy",
    },
    {
      label: "Transparent fulfillment via UPS Healthcare",
      percentLabel: "Verified",
      variant: "remedy",
    },
  ],
};
