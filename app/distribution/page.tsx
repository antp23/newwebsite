import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import ServiceHero from "@/components/ServiceHero";
import ServiceChallenge from "@/components/ServiceChallenge";
import HowItWorksService from "@/components/HowItWorksService";
import ServiceProof from "@/components/ServiceProof";
import ServiceCTA from "@/components/ServiceCTA";
import RelatedServices from "@/components/RelatedServices";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Direct Distribution — Cut the Middleman. Buy Direct. · iRemedy",
  description:
    "iRemedy connects ambulatory providers and surgery centers directly to manufacturers — eliminating GPO intermediaries and delivering up to 38% procurement cost reduction.",
};

export default function DistributionPage() {
  return (
    <>
      <NavBar />
      <main>
        {/* 1. ServiceHero — Copy Deliverable Section 06, Tab 01 */}
        <ServiceHero
          eyebrow="DIRECT DISTRIBUTION"
          headline={"Stop paying the middleman.\nStart buying direct."}
          subheadline="iRemedy connects ambulatory providers and surgery centers directly to manufacturers — eliminating the GPO layer, the sub-distributor margin, and the formulary restrictions that have controlled your options for decades."
          body="Direct-source pricing. Transparent cost. Compliant by default."
          ctaText="See how direct distribution works →"
          ctaLink="#how-it-works"
          secondaryCtaText="Request a procurement audit →"
          secondaryCtaLink="/contact?persona=provider"
        />

        {/* 2. ServiceChallenge — Copy Deliverable Section 02 LEFT BODY (verbatim) */}
        <ServiceChallenge body="Intermediaries stack margins across layers that providers cannot see, cannot audit, and cannot escape. Rebates flow back to the wrong parties. Formulary control limits your options before you even see a price. The system is not broken. It is working exactly as designed — for everyone except you." />

        {/* 3. HowItWorksService — Steps derived from Section 06 Tab 01 card body + proof point */}
        <HowItWorksService
          headline="Direct distribution in three steps. Every one of them removes a cost your current model hides."
          steps={[
            {
              number: "01",
              headline: "Connect Directly to Manufacturers.",
              body: "iRemedy contracts directly with manufacturers on your behalf. No GPO intermediary. No sub-distributor fee. No rebate capture that never reaches you. Direct cost, delivered to your facility.",
              stat: "Up to 38% reduction in procurement cost for ambulatory providers and surgery centers.",
            },
            {
              number: "02",
              headline: "See Your True Cost.",
              body: "What you pay is what the product costs — verified, documented, and auditable at every step. The markup is not negotiated down. It is structurally removed.",
              stat: "Pricing transparency across 50,000+ medical supply SKUs.",
            },
            {
              number: "03",
              headline: "Receive Through Verified Fulfillment.",
              body: "Every order fulfilled through UPS Healthcare. Temperature-controlled. Chain-of-custody verified. DSCSA-compliant at every step. From manufacturer to your facility — documented end to end.",
              stat: "Fulfilled through UPS Healthcare. DSCSA-compliant at every step.",
            },
          ]}
        />

        {/* 4. ServiceProof — From Section 07 proof points: Warp Speed + Compliance + Patents */}
        <ServiceProof
          sectionLabel="BUILT TO HOLD"
          headline="The infrastructure is real. The compliance is structural. The track record is operational."
          proofPoints={[
            {
              headline:
                "Operation Warp Speed.\nNationwide distribution. Proven at scale.",
              body: "iRemedy mobilized nationwide distribution capacity during the COVID-19 response, delivering critical supplies across the US healthcare system under federal contract. Enterprise-scale logistics under maximum pressure. Government-trusted performance.",
            },
            {
              headline:
                "Compliance isn\u2019t a feature.\nIt\u2019s the architecture.",
              body: "DSCSA serialization. DEA Schedule II\u2013V licensure. FDA-registered facility network. Temperature-controlled fulfillment through UPS Healthcare. Cold-chain capability. These are not add-ons. They are the foundation every other capability is built on.",
            },
            {
              headline:
                "Patented technology.\nFrom the infrastructure that built the modern marketplace.",
              body: "15 active patents covering the MetaCommerceRx\u2122 platform. Co-invented with the creator of the Amazon Marketplace \u2014 the same category of infrastructure intelligence that transformed consumer commerce, applied to healthcare procurement.",
            },
          ]}
        />

        {/* 5. ServiceCTA — CTA from Section 06 Tab 01 + Section 09 Card 01 */}
        <ServiceCTA
          headline="Find out exactly what you\u2019re paying above direct-source cost."
          body="A procurement audit takes less than two business days. You will see, for the first time, the gap between what you pay today and what you would pay with direct-source access."
          ctaText="Request Your Procurement Audit"
          ctaLink="/contact?persona=provider"
          subtext="Free. Two-day turnaround. No obligation."
        />

        {/* 6. RelatedServices */}
        <RelatedServices currentSlug="distribution" />
      </main>
      <Footer />
    </>
  );
}
