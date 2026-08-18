"use client";

import { useEffect, useRef, useState } from "react";

export default function CTA() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-16 md:py-24 lg:py-32 bg-charcoal relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 relative z-10">
        <div
          className={`text-center transition-all duration-700 ease-out ${
            visible ? "translate-y-0" : "translate-y-6"
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-6 h-[1px] bg-burgundy-light" />
            <span className="text-[11px] font-medium tracking-[0.25em] text-burgundy-light uppercase">
              Ready to Build?
            </span>
            <div className="w-6 h-[1px] bg-burgundy-light" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.05] tracking-tight">
            Let&apos;s Build{" "}
            <span className="text-burgundy-light">What&apos;s Next</span>
          </h2>

          <p className="text-[14px] md:text-[15px] text-white/40 max-w-md mx-auto mt-5 leading-relaxed font-light">
            Whether it&apos;s a new home, a renovation, or a commercial project —
            we&apos;re ready to bring your vision to life with quality and
            craftsmanship.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mt-8">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 bg-burgundy hover:bg-burgundy-light text-white px-7 py-3 text-[13px] font-semibold tracking-[0.08em] uppercase transition-all duration-300"
            >
              Discuss Your Project
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
            <a
              href="tel:+639556758128"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white px-7 py-3 text-[13px] font-medium tracking-[0.08em] uppercase transition-all duration-300 hover:bg-white/5"
            >
              <svg
                className="w-3.5 h-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              Call Us Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
