"use client";

import { useInView } from "@/hooks/useInView";
import { useState } from "react";
import Image from "next/image";
import { services } from "@/lib/services";

export default function Services() {
  const { ref, isVisible } = useInView({ threshold: 0.05 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="services"
      ref={ref}
      className="py-20 md:py-28 lg:py-36 bg-[#FAFAF8]"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div
          className={`mb-12 md:mb-20 transition-all duration-700 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-[1px] bg-[#953131]" />
            <span className="text-[10px] font-semibold tracking-[0.3em] text-[#953131] uppercase">
              What We Do
            </span>
          </div>
          <h2 className="text-[1.75rem] md:text-4xl lg:text-[2.75rem] font-bold text-charcoal leading-[1.08] tracking-[-0.02em] font-display">
            Construction Services{" "}
            <span className="text-[#953131]">Built on Experience</span>
          </h2>
        </div>

        {/* Desktop: Editorial alternating layout */}
        <div className="hidden md:block">
          {services.map((service, i) => {
            const isEven = i % 2 === 0;
            return (
              <div
                key={service.number}
                className={`group border-t border-charcoal/8 transition-all duration-700 ease-out ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
                style={{ transitionDelay: isVisible ? `${i * 80}ms` : "0ms" }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className={`grid grid-cols-12 gap-6 lg:gap-10 py-8 lg:py-10 items-center ${
                    isEven ? "" : "direction-rtl"
                  }`}
                >
                  {/* Number + Title */}
                  <div className={`col-span-5 ${isEven ? "" : "col-start-8 col-end-13"}`}>
                    <div className={`flex items-start gap-5 ${isEven ? "" : "flex-row-reverse"}`}>
                      <span className="text-[11px] text-[#953131]/60 w-10 shrink-0 font-mono font-semibold pt-1">
                        {service.number}
                      </span>
                      <div>
                        <h3 className="text-xl lg:text-2xl font-bold tracking-tight text-charcoal group-hover:text-[#953131] transition-colors duration-300 font-display">
                          {service.title}
                        </h3>
                        <p className="text-[14px] text-charcoal/55 leading-[1.75] mt-3 max-w-md">
                          {service.description}
                        </p>
                        <span className="inline-flex items-center gap-2 mt-4 text-[#953131] text-[11px] font-semibold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-all duration-300">
                          Explore Service
                          <svg className="w-3 h-3 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Image */}
                  <div className={`col-span-7 ${isEven ? "" : "col-start-1 col-end-7"}`}>
                    <div className="aspect-[16/9] overflow-hidden relative">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className={`object-cover transition-transform duration-700 ${
                          hoveredIndex === i ? "scale-105" : "scale-100"
                        }`}
                        sizes="(max-width: 1024px) 100vw, 50vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="border-t border-charcoal/8" />
        </div>

        {/* Mobile: Compact list */}
        <div className="md:hidden">
          {services.map((service, i) => (
            <div
              key={service.number}
              className={`group border-t border-charcoal/8 transition-all duration-600 ease-out ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: isVisible ? `${i * 60}ms` : "0ms" }}
            >
              <div className="flex flex-col gap-2 py-6 px-2 -mx-2">
                <div className="flex items-center gap-3">
                  <span className="text-[11px] text-[#953131]/60 w-10 shrink-0 font-mono font-semibold">
                    {service.number}
                  </span>
                  <h3 className="text-[15px] font-bold tracking-tight text-charcoal font-display">
                    {service.title}
                  </h3>
                </div>
                <p className="text-[14px] text-charcoal/60 leading-relaxed pl-[52px]">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
          <div className="border-t border-charcoal/8" />
        </div>
      </div>
    </section>
  );
}
