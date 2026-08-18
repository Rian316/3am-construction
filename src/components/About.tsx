"use client";

import { useInView } from "@/hooks/useInView";
import Image from "next/image";

export default function About() {
  const { ref, isVisible } = useInView({ threshold: 0.15 });

  return (
    <section id="about" className="py-20 md:py-28 lg:py-36 bg-white">
      <div ref={ref} className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div
            className={`lg:col-span-5 transition-all duration-700 ease-out ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-8 opacity-0"
            }`}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-[1px] bg-[#953131]" />
              <span className="text-[10px] font-semibold tracking-[0.3em] text-[#953131] uppercase">
                About 3AM
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-charcoal leading-[1.08] tracking-[-0.02em] mb-8">
              BUILT WITH
              <br />
              INTENTION.
            </h2>

            <div className="space-y-5 text-charcoal/55 leading-[1.75] text-[15px] md:text-[16px]">
              <p>
                <strong className="text-charcoal font-semibold">
                  3AM Construction Services
                </strong>{" "}
                is a trusted construction company in Luzon, specializing in
                residential, private, and public projects. With expertise in
                interior and exterior design, fit-outs, construction, and
                repair, we deliver high-quality results that meet the unique
                needs of homeowners, developers, and government institutions.
              </p>
              <p>
                Founded by Mr. Armel V. Manipol, 3AM Construction Services was
                built on the values of integrity, craftsmanship, and innovation.
                Over the years, the company has established itself as a reliable
                partner — committed to quality, safety, and client satisfaction.
              </p>
            </div>

            <a
              href="#services"
              className="inline-flex items-center gap-2.5 mt-8 text-charcoal text-[12px] font-semibold tracking-[0.08em] uppercase group hover:gap-3.5 transition-all duration-300"
            >
              Discover Our Services
              <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                →
              </span>
            </a>
          </div>

          <div
            className={`lg:col-span-7 transition-all duration-700 ease-out delay-150 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-8 opacity-0"
            }`}
          >
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/house-modern.jpg"
                  alt="Modern residential construction by 3AM Construction Services"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>
              <div className="absolute -bottom-6 -left-4 md:-bottom-8 md:-left-8 bg-[#1A1A1A] text-white px-6 py-5 md:px-8 md:py-6">
                <div className="text-3xl md:text-4xl font-bold tracking-tight">7+</div>
                <div className="text-[10px] md:text-[11px] tracking-[0.15em] text-white/50 uppercase mt-1">
                  Years of Service in Luzon
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
