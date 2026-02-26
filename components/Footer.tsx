"use client";

const footerColumns = [
  {
    title: "Platform",
    links: [
      { label: "MetaCommerceRx Overview", href: "/platform" },
      { label: "AI & Intelligence", href: "/platform#ai" },
      { label: "Integrations", href: "/platform#integrations" },
      { label: "Security & Compliance", href: "/compliance" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "Direct Distribution", href: "/distribution" },
      { label: "Manufacturer Incubator", href: "/incubator" },
      { label: "SaaS Platform", href: "/saas" },
      { label: "Government Advisory", href: "/advisory" },
      { label: "Market Intelligence", href: "/intelligence" },
    ],
  },
  {
    title: "Compliance",
    links: [
      { label: "DSCSA", href: "/compliance#dscsa" },
      { label: "DEA / FDA", href: "/compliance#dea-fda" },
      { label: "GSA Schedule", href: "/compliance#gsa" },
      { label: "CAGE Code", href: "/compliance#cage" },
      { label: "UEI Number", href: "/compliance#uei" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Careers", href: "/careers" },
      { label: "Blog", href: "/blog" },
      { label: "Press", href: "/press" },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-imperial pt-16 pb-8">
      <div className="max-w-content mx-auto px-6">
        {/* Top section — logo + tagline */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 pb-8 border-b border-white/10">
          <div>
            <span className="text-white font-bold text-[22px] tracking-tight">
              iRemedy
            </span>
            <p className="text-cerulean text-[14px] font-semibold mt-1">
              Smarter Supply. Better Care.
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex gap-4">
            <a
              href="https://linkedin.com"
              aria-label="iRemedy on LinkedIn"
              className="text-white/40 hover:text-white transition-colors"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Footer columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="text-[13px] font-bold text-white uppercase tracking-[0.08em] mb-4">
                {col.title}
              </h4>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[14px] text-white/50 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mission line */}
        <div className="border-t border-white/10 pt-8 mb-6">
          <p className="text-[13px] text-white/40 max-w-copy leading-relaxed">
            iRemedy Healthcare Companies is a technology-enabled medical supply
            chain infrastructure company. MetaCommerceRx™ is our patented
            platform for direct-source procurement, market intelligence, and
            compliance-native distribution.
          </p>
        </div>

        {/* Compliance block */}
        <div className="border-t border-white/10 pt-6 mb-6">
          <p className="text-[11px] text-white/30 leading-relaxed">
            CAGE Code: [XXXX] · GSA MAS: [XXXXXXXXX] · UEI: [XXXXXXXXX] ·
            NAICS: 511210, 541511, 424490 · DEA Licensed · FDA Registered
          </p>
        </div>

        {/* Copyright + legal */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center text-[12px] text-white/30">
          <p>© 2025 iRemedy Healthcare Companies. All rights reserved.</p>
          <div className="flex gap-6 mt-2 md:mt-0">
            <a href="/privacy" className="hover:text-white/50 transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-white/50 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
