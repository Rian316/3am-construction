"use client";

import { useInView } from "@/hooks/useInView";

const metrics = [
  { value: "2018", label: "Founded" },
  { value: "7+", label: "Years of Trusted Service" },
  { value: "100+", label: "Projects Delivered" },
  { value: "Zero", label: "Harm Safety Policy" },
];

export default function TrustMetrics() {
  const { ref, isVisible } = useInView({ threshold: 0.3 });

  return (
    <section
      ref={ref}
      className="bg-[#1A1A1A] py-8 md:py-12"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {metrics.map((metric, i) => (
            <div
              key={metric.label}
              className={`text-center py-4 md:py-0 ${
                i > 0 && "border-t md:border-t-0 md:border-l border-white/10"
              } transition-all duration-500 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-3"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white tracking-tight">
                {metric.value}
              </div>
              <div className="text-[10px] md:text-[11px] tracking-[0.2em] text-white/30 uppercase mt-1">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
