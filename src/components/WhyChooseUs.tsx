"use client";

import { useInView } from "@/hooks/useInView";

const reasons = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
    title: "Direct Access to Decision Makers",
    description: "You work directly with our founder and project manager — no sales teams, no middlemen. Every decision is made by the people building your project.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Transparent Pricing",
    description: "Fixed quotes, no hidden fees. We provide detailed breakdowns before work begins so you know exactly where your investment goes.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "On-Time Delivery",
    description: "We respect your timeline. Our project management process ensures milestones are met and your project is completed on schedule.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
      </svg>
    ),
    title: "Licensed & Insured",
    description: "Fully licensed and insured for your protection. We carry comprehensive coverage and comply with all local building regulations.",
  },
];

export default function WhyChooseUs() {
  const { ref, isVisible } = useInView({ threshold: 0.1 });

  return (
    <section className="bg-white py-20 md:py-28 lg:py-36">
      <div ref={ref} className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div
          className={`text-center mb-16 transition-all duration-700 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="w-8 h-[1px] bg-[#953131]" />
            <span className="text-[10px] font-semibold tracking-[0.3em] text-[#953131] uppercase">
              Why 3AM
            </span>
            <div className="w-8 h-[1px] bg-[#953131]" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal leading-[1.08] tracking-[-0.02em] font-display mb-5">
            Why Clients Choose Us
          </h2>
          <p className="text-[15px] text-charcoal/60 leading-[1.7] max-w-2xl mx-auto">
            We&apos;re not the biggest construction company in Luzon — but we&apos;re the most hands-on. Here&apos;s what sets us apart.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className={`group transition-all duration-700 ease-out ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 flex items-center justify-center bg-[#953131]/8 text-[#953131] mb-5 group-hover:bg-[#953131] group-hover:text-white transition-colors duration-300">
                {reason.icon}
              </div>
              <h3 className="text-[16px] font-bold text-charcoal mb-3 tracking-[-0.01em]">
                {reason.title}
              </h3>
              <p className="text-[14px] text-charcoal/55 leading-[1.7]">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
