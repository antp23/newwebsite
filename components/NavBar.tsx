"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Platform", href: "#platform" },
    { label: "Solutions", href: "#solutions" },
    { label: "Resources", href: "#proof" },
    { label: "About", href: "#about" },
  ];

  return (
    <motion.nav
      initial={{ backgroundColor: "rgba(33, 46, 62, 0)" }}
      animate={{
        backgroundColor: scrolled
          ? "rgba(33, 46, 62, 1)"
          : "rgba(33, 46, 62, 0)",
      }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="max-w-content mx-auto px-6 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <span className="text-white font-bold text-[22px] tracking-tight">
            iRemedy
          </span>
          <span className="text-cerulean text-[10px] font-semibold tracking-[0.08em] uppercase hidden sm:inline">
            Healthcare Companies
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white/80 hover:text-white text-[15px] font-semibold transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Primary CTA */}
        <a
          href="#contact"
          className="hidden md:inline-block bg-persian hover:bg-[#004F84] text-white font-bold text-[15px] px-7 py-3 rounded-btn transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
        >
          Request Access
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white p-2"
          aria-label="Toggle navigation menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {mobileOpen ? (
              <path d="M6 6l12 12M6 18L18 6" />
            ) : (
              <path d="M3 6h18M3 12h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-imperial border-t border-white/10 px-6 pb-6 pt-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block text-white/80 hover:text-white text-[15px] font-semibold py-3 border-b border-white/5"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="block mt-4 bg-persian text-white font-bold text-[15px] px-7 py-3 rounded-btn text-center"
          >
            Request Access
          </a>
        </div>
      )}
    </motion.nav>
  );
}
