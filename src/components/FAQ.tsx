"use client";

import { useInView } from "@/hooks/useInView";
import { useState } from "react";
import { faqs } from "@/lib/faq";

function FaqItem({
  faq,
  isOpen,
  onToggle,
  index,
}: {
  faq: (typeof faqs)[0];
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <div className="border-b border-charcoal/10">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-5 text-left group"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-4 pr-4">
          <span className="text-[11px] font-mono text-[#953131]/60 w-8 shrink-0">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-[15px] md:text-[16px] font-semibold text-charcoal group-hover:text-[#953131] transition-colors">
            {faq.question}
          </span>
        </div>
        <svg
          className={`w-5 h-5 text-charcoal/40 shrink-0 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-60 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-[14px] text-charcoal/60 leading-[1.7] pl-12">
          {faq.answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  const { ref, isVisible } = useInView({ threshold: 0.1 });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-20 md:py-28 lg:py-36">
      <div ref={ref} className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div
            className={`lg:col-span-5 transition-all duration-700 ease-out ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-[1px] bg-[#953131]" />
              <span className="text-[10px] font-semibold tracking-[0.3em] text-[#953131] uppercase">
                Common Questions
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-charcoal leading-[1.08] tracking-[-0.02em] mb-6 font-display">
              Frequently Asked{" "}
              <span className="text-[#953131]">Questions</span>
            </h2>
            <p className="text-[15px] text-charcoal/60 leading-[1.7]">
              Have a question not listed here? Contact us directly and we&apos;ll
              be happy to help.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 mt-6 text-[#953131] text-[12px] font-semibold tracking-[0.08em] uppercase group hover:gap-3.5 transition-all duration-300"
            >
              Ask a Question
              <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                →
              </span>
            </a>
          </div>

          <div
            className={`lg:col-span-7 transition-all duration-700 ease-out delay-150 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            {faqs.map((faq, i) => (
              <FaqItem
                key={i}
                faq={faq}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
