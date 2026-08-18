"use client";

import { useInView } from "@/hooks/useInView";

export default function ClosingCTA() {
  const { ref, isVisible } = useInView({ threshold: 0.2 });

  return (
    <section ref={ref} className="bg-[#1A1A1A] py-20 md:py-28">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div
          className={`text-center transition-all duration-700 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <p className="text-[10px] font-semibold tracking-[0.3em] text-[#953131] uppercase mb-4">
            One More Step
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-[1.1] tracking-[-0.02em] font-display mb-6">
            Your Project Deserves<br />
            <span className="text-[#953131]">Professional Hands.</span>
          </h2>
          <p className="text-[15px] text-white/50 leading-[1.7] max-w-lg mx-auto mb-10">
            We&apos;ve delivered over 100 projects across Luzon. From first
            consultation to final turnover — we handle every detail so you
            don&apos;t have to worry.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="group inline-flex items-center gap-3 bg-[#953131] hover:bg-[#A93E3E] text-white px-8 py-4 text-[12px] font-semibold uppercase tracking-[0.1em] transition-all duration-300"
            >
              Get a Free Consultation
              <svg
                className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="https://wa.me/639556758128"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 border border-white/20 text-white hover:border-white/40 hover:bg-white/5 px-8 py-4 text-[12px] font-medium uppercase tracking-[0.1em] transition-all duration-300"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Message on WhatsApp
            </a>
          </div>

          <p className="text-[12px] text-white/25 mt-8">
            Free consultation &middot; No obligation &middot; Response within 24 hours
          </p>
        </div>
      </div>
    </section>
  );
}
