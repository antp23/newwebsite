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
    "SaaS Platform — Procurement Intelligence for Healthcare Teams · iRemedy",
  description:
    "MetaCommerceRx\u2122 as a subscription. Real-time pricing benchmarks, formulary optimization, spend analytics, and compliance monitoring for procurement teams who have outgrown spreadsheets and distributor catalogs. 50,000+ SKUs. ERP-connected.",
};

export default function SaaSPage() {
  return (
    <>
      <NavBar />
      <main>
        {/* 1. ServiceHero — Copy Deliverable Section 06, Tab 03 */}
        <ServiceHero
          eyebrow="SAAS PLATFORM"
          headline={"Procurement intelligence.\nFinally built for the people doing the purchasing."}
          subheadline="MetaCommerceRx\u2122 as a subscription. Real-time pricing benchmarks, formulary optimization, spend analytics, and compliance monitoring — delivered through a platform built for procurement teams who have been operating on spreadsheets and distributor catalogs."
          body="You see the market. You make better decisions. You keep the savings."
          ctaText="See the platform in action →"
          ctaLink="#how-it-works"
          secondaryCtaText="Request a demo →"
          secondaryCtaLink="/contact?persona=provider"
        />

        {/* 2. ServiceChallenge — Derived from Section 06 Tab 03 card body (challenge framing) */}
        <ServiceChallenge body="Procurement teams have been operating on spreadsheets and distributor catalogs — benchmarking against last quarter, not against what the market is doing right now. You cannot verify the prices you are paying. You cannot see the alternatives that exist. The tools you have were built for the distributor, not for you." />

        {/* 3. HowItWorksService — Steps derived from Section 06 Tab 03 card body */}
        <HowItWorksService
          headline="Intelligence that changes how your procurement team operates. Three capabilities. One subscription."
          steps={[
            {
              number: "01",
              headline: "See Real-Time Pricing.",
              body: "Real-time pricing benchmarks across 50,000+ medical supply SKUs. Updated continuously. You see what the market actually charges — not what a distributor catalog tells you the market charges.",
              stat: "50,000+ SKUs. Live pricing. Updated continuously.",
            },
            {
              number: "02",
              headline: "Optimize Your Formulary.",
              body: "MetaCommerceRx\u2122 surfaces substitution opportunities your team would take hours to find manually, benchmarks your current spend against live market rates, and identifies where your formulary decisions are costing you money you could keep.",
              stat: "Live benchmarking across 50,000+ SKUs. Updated continuously from direct manufacturer pricing data.",
            },
            {
              number: "03",
              headline: "Connect Your Systems.",
              body: "Your existing ERP, connected. HL7, EDI 850/855/856/810 compatible. Compliance monitoring built in. Spend analytics delivered through a platform built for the way procurement teams actually work.",
              stat: "Your existing ERP, connected.",
            },
          ]}
        />

        {/* 4. ServiceProof — From Section 07: Patents + Compliance + Warp Speed */}
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

        {/* 5. ServiceCTA — From Section 06 Tab 03 CTA + Section 09 Card 01 framing */}
        <ServiceCTA
          headline="Find out exactly what you\u2019re paying above direct-source cost."
          body="A procurement audit takes less than two business days. You will see, for the first time, the gap between what you pay today and what you would pay with direct-source access."
          ctaText="See the Platform in Action"
          ctaLink="/contact?persona=provider"
          subtext="Free. Two-day turnaround. No obligation."
        />

        {/* 6. RelatedServices */}
        <RelatedServices currentSlug="saas" />
      </main>
      <Footer />
    </>
  );
}
