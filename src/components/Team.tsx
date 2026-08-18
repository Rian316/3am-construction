"use client";

import { useInView } from "@/hooks/useInView";
import Image from "next/image";

const team = [
  {
    name: "Armel V. Manipol",
    role: "Founder",
    description:
      "Provides leadership and direction for the company, ensuring every project upholds the standards of quality, safety, and client satisfaction.",
    image: "/images/team/armel-manipol.png",
  },
  {
    name: "Michelle Manipol",
    role: "Project Manager",
    description:
      "Oversees day-to-day coordination, documentation, and communication, keeping projects organized and on track from start to finish.",
    image: "/images/team/michelle-manipol.jpg",
  },
];

export default function Team() {
  const { ref, isVisible } = useInView({ threshold: 0.1 });

  return (
    <section id="team" ref={ref} className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div
          className={`mb-10 md:mb-16 transition-all duration-700 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-[1px] bg-[#953131]" />
            <span className="text-[11px] font-medium tracking-[0.25em] text-[#953131] uppercase">
              Leadership
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-charcoal leading-[1.1] tracking-tight">
            The People Behind{" "}
            <span className="text-[#953131]">3AM Construction</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          {team.map((member, i) => (
            <div
              key={member.name}
              className={`transition-all duration-700 ease-out ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-6">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <h3 className="text-lg font-bold text-charcoal tracking-tight">
                {member.name}
              </h3>
              <p className="text-[13px] font-semibold text-[#953131] mt-0.5 tracking-[0.04em]">
                {member.role}
              </p>
              <p className="text-[14px] text-charcoal/50 leading-relaxed mt-3">
                {member.description}
              </p>
            </div>
          ))}
        </div>

        <div
          className={`mt-14 relative aspect-[16/9] md:aspect-[21/8] overflow-hidden transition-all duration-700 ease-out delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <Image
            src="/images/team/team-photo.jpg"
            alt="3AM Construction Services team"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-charcoal/40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white text-base md:text-lg font-light tracking-wide text-center px-6">
              &ldquo;Built on integrity, driven by craftsmanship&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
