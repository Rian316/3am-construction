"use client";

import { useEffect, useRef, useState } from "react";

const metrics = [
  { value: "2018", label: "Founded" },
  { value: "7+", label: "Years of Experience" },
  { value: "100+", label: "Projects Delivered" },
  { value: "Zero", label: "Harm Safety Policy" },
];

export default function TrustMetrics() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-charcoal py-10 md:py-14">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {metrics.map((metric, i) => (
            <div
              key={metric.label}
              className={`text-center transition-all duration-500 ${
                visible ? "translate-y-0" : "translate-y-4"
              }`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                {metric.value}
              </div>
              <div className="text-[10px] md:text-[11px] tracking-[0.18em] text-white/40 uppercase font-medium mt-1">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
