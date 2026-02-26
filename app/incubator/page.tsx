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
  title: "Manufacturer Incubator — US Market Access in Weeks · iRemedy",
  description:
    "The iRemedy Incubator gives manufacturers DEA licensing, DSCSA compliance infrastructure, and distribution reach to enter US healthcare distribution without the 12-18 month buildout.",
};

export default function IncubatorPage() {
  return (
    <>
      <NavBar />
      <main>
        {/* 1. ServiceHero — Copy Deliverable Section 06, Tab 02 */}
        <ServiceHero
          eyebrow="MANUFACTURER INCUBATOR"
          headline={"Your product, in the US market.\nWithout the 18-month runway."}
          subheadline="Entering US healthcare distribution requires DEA licensing, FDA registration, DSCSA serialization, state-by-state compliance infrastructure, and distribution relationships most manufacturers spend years building. iRemedy has all of it. The Incubator puts it to work for you — in weeks."
          ctaText="Explore the Incubator program →"
          ctaLink="#how-it-works"
          secondaryCtaText="Talk to our team →"
          secondaryCtaLink="/contact?persona=manufacturer"
        />

        {/* 2. ServiceChallenge — Derived from Section 06 Tab 02 card body (challenge framing) */}
        <ServiceChallenge body="Entering US healthcare distribution requires DEA licensing, FDA registration, DSCSA serialization, state-by-state compliance infrastructure, and distribution relationships most manufacturers spend years building. The regulatory runway alone takes 12 to 18 months. Most manufacturers cannot afford to wait that long to reach their market." />

        {/* 3. HowItWorksService — Steps derived from Section 06 Tab 02 card body + proof point */}
        <HowItWorksService
          headline="From product to US market in three steps. Without building the infrastructure from scratch."
          steps={[
            {
              number: "01",
              headline: "License and Register.",
              body: "iRemedy provides the DEA licensing, FDA registration, and DSCSA serialization infrastructure your product requires. State-by-state compliance is handled. You bring the product. We bring the regulatory architecture.",
              stat: "DEA licensed. FDA registered. DSCSA-compliant serialization.",
            },
            {
              number: "02",
              headline: "Connect to Distribution.",
              body: "Access iRemedy\u2019s existing distribution relationships and fulfillment infrastructure. Your product reaches ambulatory providers and surgery centers through UPS Healthcare — without building a single distribution relationship from scratch.",
              stat: "Serving manufacturers across branded pharmaceutical, medical device, and specialty supply categories.",
            },
            {
              number: "03",
              headline: "Reach Your Market.",
              body: "The Incubator puts your product in front of the providers who need it — through MetaCommerceRx\u2122, iRemedy\u2019s patented procurement intelligence platform. Real buyers. Real demand. Real revenue. In weeks, not years.",
              stat: "Ongoing DEA, FDA, and DSCSA compliance monitoring — managed by iRemedy, not by your team.",
            },
          ]}
        />

        {/* 4. ServiceProof — From Section 07: Compliance + Patents + Warp Speed (regulatory credibility) */}
        <ServiceProof
          sectionLabel="BUILT TO HOLD"
          headline="The compliance infrastructure is real. The distribution network is operational."
          proofPoints={[
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
            {
              headline:
                "Operation Warp Speed.\nNationwide distribution. Proven at scale.",
              body: "iRemedy mobilized nationwide distribution capacity during the COVID-19 response, delivering critical supplies across the US healthcare system under federal contract. Enterprise-scale logistics under maximum pressure. Government-trusted performance.",
            },
          ]}
        />

        {/* 5. ServiceCTA — From Section 09 Card 02 */}
        <ServiceCTA
          headline="US market access without building the infrastructure from scratch."
          body="The iRemedy Incubator gives manufacturers the DEA licensing, DSCSA compliance infrastructure, and distribution reach to enter US healthcare distribution without the 12\u201318 month buildout. Talk to our team about what your product category requires and what timeline is realistic."
          ctaText="Explore the Incubator"
          ctaLink="/contact?persona=manufacturer"
          subtext="Currently accepting applications across pharma, medical device, and specialty supply."
        />

        {/* 6. RelatedServices */}
        <RelatedServices currentSlug="incubator" />
      </main>
      <Footer />
    </>
  );
}
