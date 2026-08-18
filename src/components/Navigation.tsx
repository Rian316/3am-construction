"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const textColor = scrolled ? "text-white" : "text-white";
  const linkColor = scrolled ? "text-white/70" : "text-white/70";
  const linkHover = scrolled ? "hover:text-white" : "hover:text-white";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#1A1A1A]/95 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="flex items-center justify-between h-16 md:h-20">
            <a href="#" className="flex items-center gap-2.5">
              <Image
                src="/images/logo.png"
                alt="3AM Construction Services"
                width={140}
                height={40}
                className="h-8 md:h-10 w-auto"
                priority
              />
            </a>

            <div className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-[12px] uppercase tracking-[0.15em] transition-colors duration-300 ${linkColor} ${linkHover}`}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="text-[12px] uppercase tracking-[0.15em] px-6 py-2.5 bg-[#953131] text-white hover:bg-[#A93E3E] transition-all duration-300"
              >
                Request a Quote
              </a>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden relative w-8 h-8 flex items-center justify-center transition-colors duration-300 ${textColor}`}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={`block h-[1.5px] w-full origin-center transition-all duration-300 ${
                    mobileOpen
                      ? "translate-y-[8px] rotate-45 bg-white"
                      : "bg-white"
                  }`}
                />
                <span
                  className={`block h-[1.5px] w-full transition-all duration-300 ${
                    mobileOpen ? "opacity-0 scale-0" : "bg-white"
                  }`}
                />
                <span
                  className={`block h-[1.5px] w-full origin-center transition-all duration-300 ${
                    mobileOpen
                      ? "-translate-y-[8px] -rotate-45 bg-white"
                      : "bg-white"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 bg-[#1A1A1A] flex flex-col items-center justify-center transition-opacity duration-300 lg:hidden ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-8">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className={`text-2xl text-white/70 hover:text-white tracking-wide transition-all duration-300 ${
                mobileOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{
                transitionDelay: mobileOpen ? `${i * 60}ms` : "0ms",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className={`mt-4 text-sm uppercase tracking-[0.15em] px-8 py-3.5 bg-[#953131] text-white hover:bg-[#A93E3E] transition-all duration-300 ${
              mobileOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{
              transitionDelay: mobileOpen
                ? `${NAV_LINKS.length * 60}ms`
                : "0ms",
            }}
          >
            Request a Quote
          </a>
        </div>
      </div>
    </>
  );
}
