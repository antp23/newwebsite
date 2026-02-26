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
  title:
    "Government Advisory — Healthcare Supply Chain Intelligence for Federal Agencies · iRemedy",
  description:
    "iRemedy advises federal agencies on healthcare procurement modernization and supply chain resilience. GSA MAS contract holder. Operation Warp Speed participant. CAGE registered.",
};

export default function AdvisoryPage() {
  return (
    <>
      <NavBar />
      <main>
        {/* 1. ServiceHero — Copy Deliverable Section 06, Tab 04 */}
        <ServiceHero
          eyebrow="GOVERNMENT ADVISORY"
          headline="Supply chain intelligence for agencies that cannot afford to guess."
          subheadline="iRemedy advises federal agencies on healthcare procurement modernization, domestic sourcing strategy, and supply chain resilience — backed by the operational track record of an organization that distributed critical supplies during Operation Warp Speed."
          body="Policy recommendations grounded in live infrastructure, not theory."
          ctaText="Request a government brief →"
          ctaLink="#contact"
          secondaryCtaText="Schedule an enterprise brief →"
          secondaryCtaLink="/contact?persona=enterprise"
        />

        {/* 2. ServiceChallenge — [NEEDS COPY] No advisory-specific challenge statement in deliverable.
           Placeholder derived from card body + Section 09 Card 03 enterprise pain statement. */}
        <ServiceChallenge body="Federal agencies and health systems that have outgrown what their current distribution infrastructure can tell them face a specific gap: the intelligence layer does not exist. Policy decisions are made on lagging data. Procurement modernization is advised by firms that have never managed a supply chain. The guidance is theoretical. The stakes are not." />

        {/* 3. HowItWorksService — Steps derived from Section 06 Tab 04 card body */}
        <HowItWorksService
          headline="Advisory grounded in operations. Three ways iRemedy supports government and institutional buyers."
          steps={[
            {
              number: "01",
              headline: "Procurement Modernization.",
              body: "iRemedy advises federal agencies on healthcare procurement modernization — informed by the operational reality of managing supply chains under federal contract, not by theory.",
              stat: "Operation Warp Speed participant. Government-trusted performance.",
            },
            {
              number: "02",
              headline: "Domestic Sourcing Strategy.",
              body: "Domestic sourcing strategy and supply chain resilience recommendations backed by direct manufacturer relationships and real-time market intelligence from MetaCommerceRx\u2122.",
              stat: "[NEEDS COPY]",
            },
            {
              number: "03",
              headline: "Policy Intelligence.",
              body: "Policy recommendations grounded in live infrastructure, not theory. iRemedy operates the supply chain it advises on — a distinction that separates operational advisory from consulting.",
              stat: "GSA MAS contract holder. CAGE Code registered. DIU OTA experienced.",
            },
          ]}
        />

        {/* 4. ServiceProof — From Section 07: Warp Speed (primary) + Compliance + Patents */}
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

        {/* 5. ServiceCTA — From Section 09 Card 03 */}
        <ServiceCTA
          headline="Enterprise procurement intelligence for institutional buyers who require a partner, not a vendor."
          body="ERP integration. Formulary optimization at scale. Real-time market benchmarking. Compliance architecture that meets institutional audit requirements. Government contract vehicles available."
          ctaText="Schedule an Enterprise Brief"
          ctaLink="/contact?persona=enterprise"
          subtext="GSA MAS \u00b7 CAGE Registered \u00b7 Government contract vehicles available."
        />

        {/* 6. RelatedServices */}
        <RelatedServices currentSlug="advisory" />
      </main>
      <Footer />
    </>
  );
}
