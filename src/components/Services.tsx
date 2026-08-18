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
      className="py-16 md:py-24 lg:py-32 bg-[#FAFAF8]"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div
          className={`mb-10 md:mb-16 transition-all duration-700 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-[1px] bg-[#B8960C]" />
            <span className="text-[11px] font-medium tracking-[0.25em] text-[#B8960C] uppercase">
              Our Capabilities
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-charcoal leading-[1.1] tracking-tight">
            Comprehensive Construction{" "}
            <span className="text-[#B8960C]">Services</span>
          </h2>
        </div>

        <div>
          {services.map((service, i) => (
            <div
              key={service.number}
              className={`border-t border-charcoal/8 transition-all duration-500 ease-out ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
              style={{
                transitionDelay: isVisible ? `${i * 60}ms` : "0ms",
                backgroundColor:
                  hoveredIndex === i ? "rgba(184, 150, 12, 0.03)" : "transparent",
              }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 py-5 md:py-6 cursor-pointer">
                <span className="text-xs font-mono text-charcoal/20 w-12 shrink-0">
                  {service.number}
                </span>
                <h3
                  className={`text-base md:text-lg font-bold tracking-tight transition-colors duration-300 ${
                    hoveredIndex === i ? "text-[#B8960C]" : "text-charcoal"
                  }`}
                >
                  {service.title}
                </h3>
                <div className="flex-1 hidden md:block">
                  <p
                    className={`text-[13px] text-charcoal/45 max-w-md transition-all duration-400 ${
                      hoveredIndex === i
                        ? "opacity-100 translate-x-0"
                        : "opacity-0 -translate-x-3"
                    }`}
                  >
                    {service.description}
                  </p>
                </div>
                <svg
                  className={`w-4 h-4 shrink-0 transition-all duration-300 ${
                    hoveredIndex === i
                      ? "text-[#B8960C] translate-x-1"
                      : "text-charcoal/15"
                  }`}
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
              </div>
              <p className="md:hidden text-[13px] text-charcoal/45 pb-4 -mt-2">
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
