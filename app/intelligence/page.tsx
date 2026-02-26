import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import ServiceHero from "@/components/ServiceHero";
import ServiceChallenge from "@/components/ServiceChallenge";
import HowItWorksService from "@/components/HowItWorksService";
import ServiceProof from "@/components/ServiceProof";
import ServiceCTA from "@/components/ServiceCTA";
import RelatedServices from "@/components/RelatedServices";
import Footer from "@/components/Footer";

/* [NEEDS COPY] — No intelligence-specific meta title/description in Copy Deliverable Section 10.
   Placeholder derived from Section 06 Tab 05 card copy. */
export const metadata: Metadata = {
  title:
    "Market Intelligence — Real-Time Procurement Data for Health Systems · iRemedy",
  description:
    "Real-time pricing benchmarks, manufacturer capacity signals, formulary intelligence, and substitution analytics — delivered as a market intelligence subscription for GPOs, health systems, and institutional procurement teams.",
};

export default function IntelligencePage() {
  return (
    <>
      <NavBar />
      <main>
        {/* 1. ServiceHero — Copy Deliverable Section 06, Tab 05 */}
        <ServiceHero
          eyebrow="MARKET INTELLIGENCE"
          headline={"Know what the market knows.\nBefore your next formulary decision."}
          subheadline="Real-time pricing benchmarks, manufacturer capacity signals, formulary intelligence, and substitution analytics — delivered as a market intelligence subscription for GPOs, health systems, and institutional procurement teams."
          body="Stop benchmarking against last quarter. Start operating on what the market is doing right now."
          ctaText="Explore market intelligence →"
          ctaLink="#how-it-works"
          secondaryCtaText="Schedule an enterprise brief →"
          secondaryCtaLink="/contact?persona=enterprise"
        />

        {/* 2. ServiceChallenge — Derived from Section 06 Tab 05 card body (challenge framing) */}
        <ServiceChallenge body="Health systems and GPOs are benchmarking against last quarter — not against what the market is doing right now. Formulary decisions are made on incomplete data. Substitution opportunities are invisible. Manufacturer capacity signals never reach the procurement teams who need them. The intelligence gap is not a technology problem. It is a structural one." />

        {/* 3. HowItWorksService — Steps derived from Section 06 Tab 05 card body */}
        <HowItWorksService
          headline="Market intelligence that arrives before your next decision. Three capabilities. Updated in real time."
          steps={[
            {
              number: "01",
              headline: "Real-Time Pricing Benchmarks.",
              body: "Live pricing data sourced from direct manufacturer relationships. Benchmarked continuously. You see what the market actually charges — not what it charged last quarter.",
              stat: "Updated in real time. Sourced from direct manufacturer relationships.",
            },
            {
              number: "02",
              headline: "Formulary Intelligence.",
              body: "Substitution analytics that surface equivalent SKUs at lower cost, automatically benchmarked against live market rates. Your formulary decisions are informed by data that did not exist before MetaCommerceRx\u2122.",
              stat: "[NEEDS COPY]",
            },
            {
              number: "03",
              headline: "Capacity and Supply Signals.",
              body: "Manufacturer capacity signals, availability data, and supply chain disruption indicators — delivered to institutional procurement teams who need to plan, not react.",
              stat: "[NEEDS COPY]",
            },
          ]}
        />

        {/* 4. ServiceProof — From Section 07: Patents (primary for intelligence) + Compliance + Warp Speed */}
        <ServiceProof
          sectionLabel="BUILT TO HOLD"
          headline="The infrastructure is real. The compliance is structural. The track record is operational."
          proofPoints={[
            {
              headline:
                "Patented technology.\nFrom the infrastructure that built the modern marketplace.",
              body: "15 active patents covering the MetaCommerceRx\u2122 platform. Co-invented with the creator of the Amazon Marketplace \u2014 the same category of infrastructure intelligence that transformed consumer commerce, applied to healthcare procurement.",
            },
            {
              headline:
                "Compliance isn\u2019t a feature.\nIt\u2019s the architecture.",
              body: "DSCSA serialization. DEA Schedule II\u2013V licensure. FDA-registered facility network. Temperature-controlled fulfillment through UPS Healthcare. Cold-chain capability. These are not add-ons. They are the foundation every other capability is built on.",
            },
            {
              headline:
                "Operation Warp Speed.\nNationwide distribution. Proven at scale.",
              body: "iRemedy mobilized nationwide distribution capacity during the COVID-19 response, delivering critical supplies across the US healthcare system under federal contract. Enterprise-scale logistics under maximum pressure. Government-trusted performance.",
            },
          ]}
        />

        {/* 5. ServiceCTA — From Section 09 Card 03 (enterprise buyer) */}
        <ServiceCTA
          headline="Enterprise procurement intelligence for institutional buyers who require a partner, not a vendor."
          body="ERP integration. Formulary optimization at scale. Real-time market benchmarking. Compliance architecture that meets institutional audit requirements."
          ctaText="Schedule an Enterprise Brief"
          ctaLink="/contact?persona=enterprise"
          subtext="GSA MAS \u00b7 CAGE Registered \u00b7 Government contract vehicles available."
        />

        {/* 6. RelatedServices */}
        <RelatedServices currentSlug="intelligence" />
      </main>
      <Footer />
    </>
  );
}
