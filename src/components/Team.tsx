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
    <section id="team" ref={ref} className="py-20 md:py-28 lg:py-36 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div
          className={`mb-12 md:mb-20 transition-all duration-700 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-[1px] bg-[#953131]" />
            <span className="text-[10px] font-semibold tracking-[0.3em] text-[#953131] uppercase">
              Leadership
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-charcoal leading-[1.08] tracking-[-0.02em]">
            The People Behind{" "}
            <span className="text-[#953131]">3AM Construction</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
          {team.map((member, i) => (
            <div
              key={member.name}
              className={`transition-all duration-700 ease-out ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="relative aspect-[3/4] overflow-hidden mb-7">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <h3 className="text-xl font-bold text-charcoal tracking-tight">
                {member.name}
              </h3>
              <p className="text-[12px] font-semibold text-[#953131] mt-1 tracking-[0.08em] uppercase">
                {member.role}
              </p>
              <p className="text-[15px] text-charcoal/45 leading-[1.75] mt-4">
                {member.description}
              </p>
            </div>
          ))}
        </div>

        {/* Team photo banner with quote */}
        <div
          className={`mt-16 md:mt-20 relative aspect-[16/9] md:aspect-[21/8] overflow-hidden transition-all duration-700 ease-out delay-300 ${
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
          <div className="absolute inset-0 bg-[#1A1A1A]/50" />
          <div className="absolute inset-0 flex items-center justify-center px-6">
            <blockquote className="text-center max-w-2xl">
              <p className="text-white text-lg md:text-xl lg:text-2xl font-light tracking-wide leading-[1.6] italic">
                &ldquo;Built on integrity, driven by craftsmanship&rdquo;
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
