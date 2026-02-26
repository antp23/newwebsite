import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import ChallengeSolution from "@/components/ChallengeSolution";
import SupplyChainDiagram from "@/components/SupplyChainDiagram/index";
import HowItWorks from "@/components/HowItWorks";
import PlatformSection from "@/components/PlatformSection";
import ServiceTab from "@/components/ServiceTab";
import ProofPointGrid from "@/components/ProofPointGrid";
import StatBar from "@/components/StatBar";
import PersonaCTASection from "@/components/PersonaCTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        {/* ACT 01 — The Burden */}
        <HeroSection />

        {/* ACT 01 → 02 — Challenge / Solution Frame */}
        <ChallengeSolution />

        {/* ACT 02 — The System */}
        <SupplyChainDiagram />

        {/* ACT 03 — The Correction: How It Works */}
        <HowItWorks />

        {/* ACT 03 continued — Platform */}
        <PlatformSection />

        {/* ACT 03 continued — Service Lines */}
        <ServiceTab />

        {/* ACT 04 — The Proof */}
        <ProofPointGrid />

        {/* ACT 04 continued — Stat Bar */}
        <StatBar />

        {/* ACT 05 — The Call */}
        <PersonaCTASection />
      </main>
      <Footer />
    </>
  );
}
