"use client";

import { useInView } from "@/hooks/useInView";
import { useState } from "react";

const services = [
  {
    number: "01",
    title: "Residential Construction",
    description:
      "From ground-up construction to complete remodeling, we ensure every home combines functionality, comfort, and style.",
  },
  {
    number: "02",
    title: "Interior & Exterior Design",
    description:
      "Our team provides creative and practical design solutions that enhance both the look and feel of a property.",
  },
  {
    number: "03",
    title: "Fit-Out Works",
    description:
      "From kitchens and bathrooms to bedrooms and living areas, we customize interiors to suit client preferences.",
  },
  {
    number: "04",
    title: "Construction & Repairs",
    description:
      "We offer a wide range of repair and improvement services, including structural works, roofing, flooring, plumbing, and electrical upgrades.",
  },
  {
    number: "05",
    title: "Private & Public Projects",
    description:
      "Beyond residential works, we also manage private developments and government infrastructure, ensuring compliance with quality and safety standards.",
  },
  {
    number: "06",
    title: "Project Management & Consultation",
    description:
      "We provide professional project oversight — from planning and scheduling to quality control and final turnover.",
  },
];

export default function Services() {
  const { ref, isVisible } = useInView({ threshold: 0.1 });
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
              Our Capabilities
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-charcoal leading-[1.08] tracking-[-0.02em]">
            Comprehensive Construction{" "}
            <span className="text-[#953131]">Services</span>
          </h2>
        </div>

        <div>
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
              <div
                className="flex flex-col md:flex-row md:items-center gap-2 md:gap-8 py-6 md:py-7 cursor-pointer focus-within:bg-[rgba(149,49,49,0.02)] transition-colors duration-300 px-2 -mx-2"
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                onFocus={() => setHoveredIndex(i)}
                onBlur={() => setHoveredIndex(null)}
                tabIndex={0}
                role="button"
                aria-label={`${service.title}: ${service.description}`}
              >
                <span className="text-[11px] text-charcoal/20 w-10 shrink-0 font-mono">
                  {service.number}
                </span>
                <h3
                  className={`text-lg md:text-xl font-bold tracking-tight transition-colors duration-300 ${
                    hoveredIndex === i ? "text-[#953131]" : "text-charcoal"
                  }`}
                >
                  {service.title}
                </h3>
                <div className="flex-1 hidden md:block">
                  <p
                    className={`text-[14px] text-charcoal/40 max-w-md leading-relaxed transition-all duration-400 ${
                      hoveredIndex === i
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-4"
                    }`}
                  >
                    {service.description}
                  </p>
                </div>
                <svg
                  className={`w-4 h-4 shrink-0 transition-all duration-300 ${
                    hoveredIndex === i
                      ? "text-[#953131] translate-x-1"
                      : "text-charcoal/15"
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
              <p className="md:hidden text-[14px] text-charcoal/40 pb-5 -mt-2 leading-relaxed px-2">
                {service.description}
              </p>
            </div>
          ))}
          <div className="border-t border-charcoal/8" />
        </div>
      </div>
    </section>
  );
}
