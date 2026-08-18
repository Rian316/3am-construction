"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const steps = [
  {
    number: "01",
    title: "Planning & Consultation",
    description:
      "We begin by understanding the client's vision, needs, and budget. Our team provides expert consultation, site evaluation, and preliminary design concepts to set a strong foundation for the project.",
    image: "/images/process/planning.jpg",
  },
  {
    number: "02",
    title: "Design & Construction",
    description:
      "Once plans are finalized, we move to execution. From detailed design to construction and fit-out works, we ensure every stage is handled with precision, safety, and quality craftsmanship.",
    image: "/images/process/construction.jpg",
  },
  {
    number: "03",
    title: "Turnover & Aftercare",
    description:
      "We deliver the finished project on time and to specification. Beyond turnover, we provide support and maintenance guidance to ensure lasting satisfaction and long-term value.",
    image: "/images/process/turnover.jpg",
  },
];

export default function Process() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="process" ref={ref} className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div
          className={`mb-10 md:mb-16 transition-all duration-700 ease-out ${
            visible ? "translate-y-0" : "translate-y-6"
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-[1px] bg-burgundy" />
            <span className="text-[11px] font-medium tracking-[0.25em] text-burgundy uppercase">
              How We Work
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-charcoal leading-[1.1] tracking-tight">
            A Clear & Straightforward{" "}
            <span className="text-burgundy">Process</span>
          </h2>
          <p className="text-charcoal/50 mt-4 max-w-lg text-[14px] leading-relaxed">
            At 3AM Construction Services, we follow a proven process to ensure
            every project runs smoothly from start to finish.
          </p>
        </div>

        <div className="space-y-10 md:space-y-14">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center transition-all duration-700 ease-out ${
                visible ? "translate-y-0" : "translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-4xl md:text-5xl font-bold text-burgundy/10 leading-none shrink-0">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-charcoal tracking-tight">
                      {step.title}
                    </h3>
                    <p className="text-[14px] text-charcoal/50 leading-relaxed mt-3">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>

              <div
                className={`relative aspect-[16/10] overflow-hidden ${
                  i % 2 === 1 ? "lg:order-1" : ""
                }`}
              >
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
