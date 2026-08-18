"use client";

import { useInView } from "@/hooks/useInView";

const steps = [
  {
    number: "01",
    title: "CONSULTATION",
    description:
      "We begin by understanding the client's vision, needs, and budget.",
  },
  {
    number: "02",
    title: "PLANNING",
    description:
      "Our team develops detailed plans, timelines, and resource allocation strategies.",
  },
  {
    number: "03",
    title: "DESIGN",
    description:
      "Creative and functional designs are crafted to bring the client's vision to life.",
  },
  {
    number: "04",
    title: "CONSTRUCTION",
    description:
      "Expert craftsmanship and quality materials ensure lasting results.",
  },
  {
    number: "05",
    title: "TURNOVER",
    description:
      "We deliver the finished project on time and to the highest standards.",
  },
];

export default function Process() {
  const { ref: headerRef, isVisible: headerVisible } = useInView({
    threshold: 0.1,
  });
  const { ref: timelineRef, isVisible: timelineVisible } = useInView({
    threshold: 0.1,
  });

  return (
    <section id="process" className="bg-white py-16 md:py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div
          ref={headerRef}
          className={`mb-10 md:mb-16 transition-all duration-700 ease-out ${
            headerVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-[1px] bg-[#953131]" />
            <span className="text-[11px] font-medium tracking-[0.25em] text-[#953131] uppercase">
              How We Work
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-charcoal leading-[1.1] tracking-tight">
            A Clear & Straightforward{" "}
            <span className="text-[#953131]">Process</span>
          </h2>
          <p className="text-charcoal/50 mt-4 max-w-lg text-[14px] leading-relaxed">
            We follow a proven process to ensure every project runs smoothly from
            start to finish.
          </p>
        </div>

        {/* Desktop Horizontal Timeline */}
        <div
          ref={timelineRef}
          className="hidden md:block"
        >
          <div className="relative">
            <div className="absolute top-[14px] left-0 right-0 h-[1px] bg-charcoal/10" />
            <div className="grid grid-cols-5 gap-6">
              {steps.map((step, i) => (
                <div
                  key={step.number}
                  className={`relative flex flex-col items-center text-center transition-all duration-700 ease-out ${
                    timelineVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-6 opacity-0"
                  }`}
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <span className="text-2xl font-bold text-[#953131] mb-3">
                    {step.number}
                  </span>
                  <h3 className="text-sm font-bold text-charcoal tracking-[0.15em] uppercase mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[13px] text-charcoal/45 leading-relaxed max-w-[200px] mx-auto">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="md:hidden">
          <div className="relative pl-8 border-l border-charcoal/10">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`relative mb-10 last:mb-0 transition-all duration-700 ease-out ${
                  timelineVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 opacity-0"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="absolute -left-8 top-0 w-4 h-[1px] bg-charcoal/10" />
                <div className="flex items-start gap-4">
                  <span className="text-xl font-bold text-[#953131] shrink-0">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-charcoal tracking-[0.15em] uppercase mb-1">
                      {step.title}
                    </h3>
                    <p className="text-[13px] text-charcoal/45 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
