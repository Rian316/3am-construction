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
    transform: mounted ? "translateY(0)" : "translateY(30px)",
    transition: "opacity 0.9s cubic-bezier(0.16, 1, 0.3, 1), transform 0.9s cubic-bezier(0.16, 1, 0.3, 1)",
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 w-full pb-16 md:pb-24">
        <div style={fadeUp(0)} className="flex items-center gap-4 mb-6">
          <div className="w-10 h-[1px] bg-[#953131]" />
          <span className="text-[11px] font-medium tracking-[0.3em] text-white/70 uppercase">
            Design &amp; Build &middot; Luzon, Philippines
          </span>
        </div>

        <h1 style={fadeUp(150)} className="max-w-5xl font-display">
          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold text-white leading-[0.92] tracking-[-0.02em]">
            BUILDING WITH{" "}
            <span className="text-[#953131]">PURPOSE.</span>
          </span>
          <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold text-white leading-[0.92] tracking-[-0.02em] mt-1">
            BUILT TO{" "}
            <span className="text-[#953131]">LAST.</span>
          </span>
        </h1>

        <p style={fadeUp(300)} className="text-[15px] md:text-[17px] text-white/70 max-w-xl mt-7 leading-[1.7] font-light">
          Residential construction, commercial fit-outs, interior design, and
          project management — delivered with precision across Luzon since 2018.
        </p>

        <div style={fadeUp(400)} className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-7">
          <a
            href="tel:+639556758128"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white text-[13px] font-medium tracking-wide transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            0955 675 8128
          </a>
          <a
            href="https://wa.me/639556758128"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white text-[13px] font-medium tracking-wide transition-colors"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp
          </a>
        </div>

        <div style={fadeUp(500)} className="flex flex-wrap gap-4 mt-9">
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 bg-[#953131] hover:bg-[#A93E3E] text-white px-7 py-4 text-[12px] font-semibold tracking-[0.1em] uppercase transition-all duration-300"
          >
            Start Your Project
            <svg
              className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#projects"
            className="group inline-flex items-center gap-3 border border-white/25 hover:border-white/40 text-white px-7 py-4 text-[12px] font-medium tracking-[0.1em] uppercase transition-all duration-300 hover:bg-white/5"
          >
            View Our Work
            <svg
              className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        {/* Inline Trust Indicators */}
        <div style={fadeUp(600)} className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-8 pt-6 border-t border-white/10">
          <span className="text-[11px] text-white/50 font-medium tracking-wide">
            <span className="text-[#953131] font-semibold">100+</span> Projects Completed
          </span>
          <span className="text-[11px] text-white/50 font-medium tracking-wide">
            <span className="text-[#953131] font-semibold">7+</span> Years in Luzon
          </span>
          <span className="text-[11px] text-white/50 font-medium tracking-wide">
            Residential &amp; Commercial
          </span>
          <span className="text-[11px] text-white/50 font-medium tracking-wide">
            Licensed &amp; Insured
          </span>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-3">
        <span className="text-[9px] tracking-[0.25em] text-white/50 uppercase">
          Scroll
        </span>
        <div className="w-[1px] h-10 bg-white/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-white/60 animate-[scroll-line_2.5s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  );
}
