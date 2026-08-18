"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { navLinks } from "@/lib/navigation";
import { site } from "@/lib/site";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

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

  useEffect(() => {
    if (!mobileOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMobile();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [mobileOpen, closeMobile]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#1A1A1A]/95 backdrop-blur-md shadow-lg border-b border-white/5"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="flex items-center justify-between h-16 md:h-20">
            <a
              href="#"
              className="flex items-center gap-2.5"
              aria-label={`${site.name} - Home`}
            >
              <Image
                src="/images/logo.png"
                alt={site.name}
                width={140}
                height={40}
                className="h-8 md:h-10 w-auto"
                priority
              />
            </a>

            <div className="hidden lg:flex items-center gap-10">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="underline-hover text-[11px] font-medium uppercase tracking-[0.18em] text-white/60 hover:text-white transition-colors duration-300 py-1"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="text-[11px] font-medium uppercase tracking-[0.18em] px-6 py-2.5 bg-[#953131] text-white hover:bg-[#A93E3E] transition-all duration-300"
              >
                Request a Quote
              </a>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden relative w-11 h-11 flex items-center justify-center text-white transition-colors duration-300"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
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

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#1A1A1A] flex flex-col items-center justify-center transition-opacity duration-500 lg:hidden ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="flex flex-col items-center gap-10">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMobile}
              className={`text-3xl font-light text-white/70 hover:text-white tracking-wide transition-all duration-500 ${
                mobileOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{
                transitionDelay: mobileOpen ? `${i * 70}ms` : "0ms",
              }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={closeMobile}
            className={`mt-4 text-[13px] font-medium uppercase tracking-[0.18em] px-10 py-4 bg-[#953131] text-white hover:bg-[#A93E3E] transition-all duration-500 ${
              mobileOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
            style={{
              transitionDelay: mobileOpen
                ? `${navLinks.length * 70}ms`
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
