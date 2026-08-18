"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function About() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div
            className={`transition-all duration-700 ease-out ${
              visible ? "translate-x-0" : "-translate-x-8"
            }`}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-[1px] bg-burgundy" />
              <span className="text-[11px] font-medium tracking-[0.25em] text-burgundy uppercase">
                Who We Are
              </span>
            </div>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-charcoal leading-[1.1] tracking-tight mb-6">
              A Trusted Partner in
              <br />
              <span className="text-burgundy">Building Excellence</span>
            </h2>

            <div className="space-y-4 text-charcoal/60 leading-relaxed text-[14px] md:text-[15px]">
              <p>
                <strong className="text-charcoal font-semibold">
                  3AM Construction Services
                </strong>{" "}
                is a dynamic and trusted construction company in Luzon,
                specializing in residential, private, and public projects. With
                expertise in interior and exterior design, fit-outs,
                construction, and repair, we deliver high-quality results that
                meet the unique needs of homeowners, developers, and government
                institutions.
              </p>
              <p>
                Founded by Mr. Armel V. Manipol, 3AM Construction Services was
                built on the values of integrity, craftsmanship, and innovation.
                Over the years, the company has established itself as a reliable
                partner in the industry — committed to quality, safety, and
                client satisfaction.
              </p>
            </div>

            <a
              href="#services"
              className="inline-flex items-center gap-2 mt-6 text-burgundy text-[13px] font-semibold tracking-[0.06em] uppercase group hover:gap-3 transition-all duration-300"
            >
              Discover Our Services
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

          <div
            className={`relative transition-all duration-700 ease-out delay-150 ${
              visible ? "translate-x-0" : "translate-x-8"
            }`}
          >
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/house-modern.jpg"
                alt="Modern residential construction by 3AM Construction Services"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 bg-burgundy text-white px-6 py-5 max-w-[180px]">
              <div className="text-2xl font-bold">7+</div>
              <div className="text-[10px] tracking-[0.12em] text-white/70 uppercase mt-0.5">
                Years of trusted service in Luzon
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
