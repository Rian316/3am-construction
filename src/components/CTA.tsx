"use client";

import Image from "next/image";
import { useInView } from "@/hooks/useInView";

export default function CTA() {
  const { ref, isVisible } = useInView({ threshold: 0.2 });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-charcoal py-20 md:py-28 lg:py-36"
    >
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/construction-site.jpg"
          alt="Construction site"
          fill
          className="object-cover"
          quality={80}
        />
        <div className="absolute inset-0 bg-charcoal/80" />
      </div>

      {/* Content */}
      <div
        className={`relative z-10 max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 flex flex-col items-center text-center transition-all duration-1000 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Eyebrow */}
        <div className="flex items-center gap-4 mb-8">
          <span className="h-px w-8 bg-[#953131]" />
          <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-[#953131]">
            READY TO BUILD?
          </p>
          <span className="h-px w-8 bg-[#953131]" />
        </div>

        {/* Main Heading */}
        <h2 className="font-bold text-white tracking-tight leading-[0.95] mb-8">
          <span className="block text-3xl md:text-5xl lg:text-6xl xl:text-7xl">
            LET&apos;S BUILD
          </span>
          <span className="block text-3xl md:text-5xl lg:text-6xl xl:text-7xl">
            SOMETHING
          </span>
          <span className="block text-3xl md:text-5xl lg:text-6xl xl:text-7xl">
            EXCEPTIONAL.
          </span>
        </h2>

        {/* Supporting Text */}
        <p className="text-[14px] md:text-[15px] text-white/40 max-w-md mx-auto leading-relaxed mb-10">
          Whether it&apos;s a new home, a renovation, or a commercial project —
          we&apos;re ready to bring your vision to life with quality and
          craftsmanship.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <button type="button" className="bg-[#953131] hover:bg-[#A93E3E] text-white px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.08em] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#953131]">
            REQUEST A CONSULTATION →
          </button>
          <a
            href="tel:+639556758128"
            className="flex items-center gap-2 border border-white/20 text-white hover:border-white/40 hover:bg-white/5 px-8 py-4 text-[13px] font-semibold uppercase tracking-[0.08em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#953131]"
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
            CALL US NOW
          </a>
        </div>
      </div>
    </section>
  );
}
