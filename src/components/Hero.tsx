"use client";

import { useRef, useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    rafRef.current = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const fadeUp = (delay: number) => ({
    opacity: mounted ? 1 : 0,
    transform: mounted ? "translateY(0)" : "translateY(24px)",
    transition: "opacity 0.8s ease-out, transform 0.8s ease-out",
    transitionDelay: `${delay}ms`,
  });

  return (
    <section className="relative h-screen min-h-[600px] max-h-[1000px] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-house.jpg"
          alt="3AM Construction Services - Modern residential project"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 w-full pb-14 md:pb-20">
        <div style={fadeUp(0)} className="flex items-center gap-3 mb-5">
          <div className="w-8 h-[1px] bg-[#953131]" />
          <span className="text-[11px] font-medium tracking-[0.3em] text-white/60 uppercase">
            Est. 2018 &middot; Luzon, Philippines
          </span>
        </div>

        <h1 style={fadeUp(150)} className="max-w-4xl">
          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[0.95] tracking-tight">
            BUILDING WITH{" "}
            <span className="text-[#953131]">PURPOSE.</span>
          </span>
          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[0.95] tracking-tight">
            BUILT TO{" "}
            <span className="text-[#953131]">LAST.</span>
          </span>
        </h1>

        <p style={fadeUp(300)} className="text-sm md:text-base text-white/50 max-w-md mt-5 leading-relaxed font-light">
          Precision construction and design for residential, commercial, and
          public projects across Luzon.
        </p>

        <div style={fadeUp(450)} className="flex flex-wrap gap-3 mt-7">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2.5 bg-[#953131] hover:bg-[#A93E3E] text-white px-6 py-3.5 text-[13px] font-medium tracking-[0.08em] uppercase transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#953131]"
          >
            REQUEST A CONSULTATION
            <svg
              className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
          <a
            href="#projects"
            className="group inline-flex items-center gap-2.5 border border-white/20 hover:border-white/40 text-white px-6 py-3.5 text-[13px] font-medium tracking-[0.08em] uppercase transition-all duration-300 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#953131]"
          >
            VIEW OUR WORK
            <svg
              className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2">
        <span className="text-[9px] tracking-[0.2em] text-white/30 uppercase">
          Scroll
        </span>
        <div className="w-[1px] h-8 bg-white/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-white/50 animate-[scroll-line_2s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  );
}
