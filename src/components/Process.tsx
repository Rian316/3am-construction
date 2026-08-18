"use client";

import { useInView } from "@/hooks/useInView";

const steps = [
  {
    number: "01",
    title: "CONSULTATION",
    description:
      "We begin by understanding the client's vision, needs, and budget.",
    image: "/images/process/planning.jpg",
  },
  {
    number: "02",
    title: "PLANNING",
    description:
      "Our team develops detailed plans, timelines, and resource allocation strategies.",
    image: "/images/process/planning.jpg",
  },
  {
    number: "03",
    title: "DESIGN",
    description:
      "Creative and functional designs are crafted to bring the client's vision to life.",
    image: "/images/process/planning.jpg",
  },
  {
    number: "04",
    title: "CONSTRUCTION",
    description:
      "Expert craftsmanship and quality materials ensure lasting results.",
    image: "/images/process/construction.jpg",
  },
  {
    number: "05",
    title: "TURNOVER",
    description:
      "We deliver the finished project on time and to the highest standards.",
    image: "/images/process/turnover.jpg",
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
    <section id="process" className="bg-white py-20 md:py-28 lg:py-36">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div
          ref={headerRef}
          className={`mb-12 md:mb-20 transition-all duration-700 ease-out ${
            headerVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-[1px] bg-[#953131]" />
            <span className="text-[10px] font-semibold tracking-[0.3em] text-[#953131] uppercase">
              How We Work
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-charcoal leading-[1.08] tracking-[-0.02em]">
            A Clear & Straightforward{" "}
            <span className="text-[#953131]">Process</span>
          </h2>
          <p className="text-charcoal/45 mt-5 max-w-lg text-[15px] leading-[1.7]">
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
            <div className="absolute top-[18px] left-0 right-0 h-[1px] bg-charcoal/8" />
            <div className="grid grid-cols-5 gap-8">
              {steps.map((step, i) => (
                <div
                  key={step.number}
                  className={`relative flex flex-col items-center text-center transition-all duration-700 ease-out ${
                    timelineVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-6 opacity-0"
                  }`}
                  style={{ transitionDelay: `${i * 120}ms` }}
                >
                  <span className="text-[28px] font-bold text-[#953131] mb-4 tracking-tight">
                    {step.number}
                  </span>
                  <h3 className="text-[13px] font-bold text-charcoal tracking-[0.18em] uppercase mb-2.5">
                    {step.title}
                  </h3>
                  <p className="text-[14px] text-charcoal/40 leading-relaxed max-w-[200px] mx-auto">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Vertical Timeline */}
        <div className="md:hidden">
          <div className="relative pl-10 border-l border-charcoal/8">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`relative mb-12 last:mb-0 transition-all duration-700 ease-out ${
                  timelineVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 opacity-0"
                }`}
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <div className="absolute -left-10 top-0 w-10 flex justify-center">
                  <div className="w-[1px] h-full bg-charcoal/8 absolute" />
                  <div className="w-2.5 h-2.5 bg-[#953131] rounded-full relative z-10 mt-1.5" />
                </div>
                <span className="text-[11px] font-semibold text-[#953131] tracking-[0.2em]">
                  {step.number}
                </span>
                <h3 className="text-[15px] font-bold text-charcoal tracking-[0.1em] uppercase mt-1 mb-2">
                  {step.title}
                </h3>
                <p className="text-[14px] text-charcoal/40 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
