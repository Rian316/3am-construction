"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.06)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="flex items-center justify-between h-14 md:h-16">
            <a href="#" className="flex items-center gap-2.5 group">
              <div
                className={`transition-colors duration-300 ${
                  scrolled ? "text-burgundy" : "text-white"
                }`}
              >
                <svg width="26" height="26" viewBox="0 0 100 100" fill="none">
                  <path
                    d="M50 5L15 30V75L50 95L85 75V30L50 5Z"
                    stroke="currentColor"
                    strokeWidth="5"
                    fill="none"
                  />
                  <path
                    d="M50 25V70M35 40H65M35 55H65"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                </svg>
              </div>
              <div className="flex flex-col">
                <span
                  className={`text-xs font-bold tracking-[0.18em] leading-tight transition-colors duration-300 ${
                    scrolled ? "text-charcoal" : "text-white"
                  }`}
                >
                  3AM CONSTRUCTION
                </span>
                <span
                  className={`text-[9px] tracking-[0.22em] leading-tight transition-colors duration-300 ${
                    scrolled ? "text-charcoal/50" : "text-white/60"
                  }`}
                >
                  SERVICES
                </span>
              </div>
            </a>

            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`text-[12px] font-medium tracking-[0.06em] uppercase transition-colors duration-300 hover:opacity-70 ${
                    scrolled ? "text-charcoal/70" : "text-white/70"
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className={`text-[12px] font-semibold tracking-[0.06em] uppercase px-5 py-2 transition-all duration-300 ${
                  scrolled
                    ? "bg-burgundy text-white hover:bg-burgundy-dark"
                    : "bg-white/10 text-white border border-white/30 hover:bg-white/20"
                }`}
              >
                Get a Quote
              </a>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden flex flex-col gap-[4px] p-1.5 transition-colors ${
                scrolled ? "text-charcoal" : "text-white"
              }`}
              aria-label="Toggle menu"
            >
              <span
                className={`block w-5 h-[1.5px] transition-all duration-300 ${
                  mobileOpen ? "rotate-45 translate-y-[5.5px]" : ""
                } ${scrolled ? "bg-charcoal" : "bg-white"}`}
              />
              <span
                className={`block w-5 h-[1.5px] transition-all duration-300 ${
                  mobileOpen ? "opacity-0" : ""
                } ${scrolled ? "bg-charcoal" : "bg-white"}`}
              />
              <span
                className={`block w-5 h-[1.5px] transition-all duration-300 ${
                  mobileOpen ? "-rotate-45 -translate-y-[5.5px]" : ""
                } ${scrolled ? "bg-charcoal" : "bg-white"}`}
              />
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-white transition-all duration-400 lg:hidden ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-6">
          {navLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`text-xl font-light tracking-[0.08em] text-charcoal transition-all duration-300 ${
                mobileOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-3"
              }`}
              style={{ transitionDelay: `${i * 50 + 80}ms` }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className={`mt-2 px-7 py-2.5 bg-burgundy text-white text-[13px] font-semibold tracking-[0.08em] uppercase transition-all duration-300 ${
              mobileOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-3"
            }`}
            style={{ transitionDelay: `${navLinks.length * 50 + 80}ms` }}
          >
            Get a Quote
          </a>
        </div>
      </div>
    </>
  );
}
