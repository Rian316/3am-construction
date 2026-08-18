"use client";

import Image from "next/image";
import { useInView } from "@/hooks/useInView";

export default function CTA() {
  const { ref, isVisible } = useInView({ threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-charcoal py-24 md:py-32 lg:py-40"
    >
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/construction-site.jpg"
          alt="Construction site"
          fill
          className="object-cover"
          quality={80}
        />
        <div className="absolute inset-0 bg-[#1A1A1A]/80" />
      </div>

      <div
        className={`relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 flex flex-col items-center text-center transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="flex items-center gap-4 mb-8">
          <span className="h-px w-10 bg-[#953131]" />
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#953131]">
            Ready to Build?
          </p>
          <span className="h-px w-10 bg-[#953131]" />
        </div>

        <h2 className="font-bold text-white tracking-[-0.02em] leading-[0.92] mb-8 font-display">
          <span className="block text-3xl md:text-5xl lg:text-6xl xl:text-7xl">
            Let&apos;s Build
          </span>
          <span className="block text-3xl md:text-5xl lg:text-6xl xl:text-7xl mt-1">
            Something
          </span>
          <span className="block text-3xl md:text-5xl lg:text-6xl xl:text-7xl mt-1">
            Exceptional.
          </span>
        </h2>

        <p className="text-[15px] md:text-[16px] text-white/65 max-w-lg mx-auto leading-[1.7] mb-12">
          Whether it&apos;s a new home, a renovation, or a commercial project —
          we&apos;re ready to bring your vision to life. No surprises. Just
          quality work, delivered on time.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 bg-[#953131] hover:bg-[#A93E3E] text-white px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.1em] transition-all duration-300"
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
            href="tel:+639556758128"
            className="flex items-center gap-3 border border-white/20 text-white hover:border-white/40 hover:bg-white/5 px-8 py-4 text-[12px] font-medium uppercase tracking-[0.1em] transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Call Us Now
          </a>
        </div>
      </div>
    </section>
  );
}
