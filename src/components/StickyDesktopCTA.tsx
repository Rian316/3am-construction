"use client";

import { useState, useEffect } from "react";

export default function StickyDesktopCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 800);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`hidden lg:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        visible
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="bg-[#1A1A1A]/95 backdrop-blur-md border-b border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 flex items-center justify-between h-12">
          <div className="flex items-center gap-4">
            <span className="text-[11px] text-white/50 font-medium">
              Ready to start your project?
            </span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="tel:+639556758128"
              className="text-[11px] text-white/60 hover:text-white font-medium tracking-wide transition-colors"
            >
              0955 675 8128
            </a>
            <span className="w-px h-4 bg-white/15" />
            <a
              href="#contact"
              className="text-[10px] font-semibold uppercase tracking-[0.12em] px-5 py-2 bg-[#953131] text-white hover:bg-[#A93E3E] transition-colors"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
