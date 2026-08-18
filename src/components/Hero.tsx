"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[85vh] min-h-[560px] max-h-[800px] flex items-end overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-house.jpg"
          alt="3AM Construction Services - Modern residential project"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 w-full pb-12 md:pb-16">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-6 h-[1px] bg-burgundy-light" />
          <span className="text-[11px] font-medium tracking-[0.3em] text-white/60 uppercase">
            Est. 2018 &middot; Luzon, Philippines
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.0] tracking-tight max-w-3xl">
          Building with{" "}
          <span className="text-burgundy-light">Integrity</span> &{" "}
          <span className="text-burgundy-light">Craftsmanship</span>
        </h1>

        <p className="text-sm md:text-base text-white/60 max-w-lg mt-4 leading-relaxed font-light">
          A trusted construction company delivering quality residential,
          private, and public projects across Luzon with precision and care.
        </p>

        <div className="flex flex-wrap gap-3 mt-6">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 bg-burgundy hover:bg-burgundy-dark text-white px-6 py-3 text-[13px] font-semibold tracking-[0.08em] uppercase transition-all duration-300"
          >
            Explore Our Projects
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
            href="#contact"
            className="inline-flex items-center gap-2 border border-white/25 hover:border-white/50 text-white px-6 py-3 text-[13px] font-medium tracking-[0.08em] uppercase transition-all duration-300 hover:bg-white/5"
          >
            Start a Conversation
          </a>
        </div>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-1.5">
        <span className="text-[9px] tracking-[0.2em] text-white/40 uppercase">
          Scroll
        </span>
        <div className="w-[1px] h-6 bg-white/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-white/60 animate-[scroll_2s_ease-in-out_infinite]" />
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
      `}</style>
    </section>
  );
}
