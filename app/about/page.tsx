import type { Metadata } from "next";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About — iRemedy Healthcare Companies",
  description:
    "iRemedy Healthcare Companies is a technology-enabled medical supply chain infrastructure company. Learn about our mission, patented platform, and operational track record.",
};

export default function AboutPage() {
  return (
    <>
      <NavBar />
      <main>
        {/* Hero */}
        <section className="bg-imperial pt-32 pb-20">
          <div className="max-w-content mx-auto px-6">
            <span className="inline-block bg-cerulean/20 text-cerulean text-caption font-semibold uppercase tracking-[0.1em] px-4 py-2 rounded-full mb-8">
              About iRemedy
            </span>
            <h1 className="text-h1 text-white font-bold max-w-[700px] mb-6">
              Smarter Supply. Better Care.
            </h1>
            <p className="text-h3 text-white/80 font-light max-w-copy">
              iRemedy Healthcare Companies is a technology-enabled medical supply
              chain infrastructure company. We replace legacy distribution
              intermediaries with direct-source pricing, real-time market
              intelligence, and compliance-native supply chain infrastructure.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="bg-white py-24">
          <div className="max-w-content mx-auto px-6">
            <h2 className="text-h2 text-imperial font-bold mb-8">
              Our Mission
            </h2>
            <p className="text-body-lg text-body max-w-copy mb-6">
              Healthcare providers pay too much for medical supplies &mdash; and
              they know it. Legacy group purchasing organizations and
              multi-tier distribution networks add cost at every step while
              reducing transparency.
            </p>
            <p className="text-body-lg text-body max-w-copy">
              iRemedy exists to fix that. Our patented MetaCommerceRx&trade;
              platform connects providers directly to manufacturers, delivering
              real-time pricing visibility across 50,000+ medical supply SKUs,
              AI-powered procurement intelligence, and compliance-native
              fulfillment through UPS Healthcare.
            </p>
          </div>
        </section>

        {/* Track Record */}
        <section className="bg-surface py-24">
          <div className="max-w-content mx-auto px-6">
            <h2 className="text-h2 text-imperial font-bold mb-12">
              Operational Track Record
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-8">
                <p className="text-cerulean text-h2 font-bold mb-2">15</p>
                <p className="text-body font-semibold text-imperial mb-2">
                  Active Patents
                </p>
                <p className="text-body text-body">
                  Covering the MetaCommerceRx&trade; platform, co-invented with
                  the creator of the Amazon Marketplace.
                </p>
              </div>
              <div className="bg-white rounded-lg p-8">
                <p className="text-cerulean text-h2 font-bold mb-2">50K+</p>
                <p className="text-body font-semibold text-imperial mb-2">
                  Medical Supply SKUs
                </p>
                <p className="text-body text-body">
                  Direct-source pricing and real-time market intelligence across
                  the full formulary.
                </p>
              </div>
              <div className="bg-white rounded-lg p-8">
                <p className="text-cerulean text-h2 font-bold mb-2">
                  Warp Speed
                </p>
                <p className="text-body font-semibold text-imperial mb-2">
                  Operation Warp Speed
                </p>
                <p className="text-body text-body">
                  Nationwide distribution of critical medical supplies under
                  federal contract during the COVID-19 response.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance */}
        <section className="bg-white py-24">
          <div className="max-w-content mx-auto px-6">
            <h2 className="text-h2 text-imperial font-bold mb-8">
              Compliance Infrastructure
            </h2>
            <p className="text-body-lg text-body max-w-copy mb-8">
              Compliance isn&rsquo;t a feature &mdash; it&rsquo;s the
              architecture. Every capability we offer is built on a
              compliance-native foundation.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {[
                "DSCSA Serialization",
                "DEA Schedule II\u2013V Licensed",
                "FDA-Registered Facilities",
                "GSA MAS Contract Holder",
                "CAGE Code Registered",
                "UPS Healthcare Fulfillment",
              ].map((item) => (
                <div
                  key={item}
                  className="bg-surface rounded px-5 py-4 text-body font-semibold text-imperial"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-imperial py-24">
          <div className="max-w-content mx-auto px-6 text-center">
            <h2 className="text-h2 text-white font-bold mb-6">
              Ready to see what you&rsquo;re actually paying?
            </h2>
            <p className="text-body-lg text-white/70 max-w-copy mx-auto mb-10">
              Request a platform demo or schedule an enterprise brief to learn
              how iRemedy can transform your procurement.
            </p>
            <a
              href="/#contact"
              className="inline-block bg-persian hover:bg-[#004F84] text-white font-bold text-[16px] px-8 py-4 rounded-btn transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Request Access
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
