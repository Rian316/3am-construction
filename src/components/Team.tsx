"use client";

import { useEffect, useRef, useState } from "react";
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
    <section id="team" ref={ref} className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div
          className={`mb-10 md:mb-16 transition-all duration-700 ease-out ${
            visible ? "translate-y-0" : "translate-y-6"
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-[1px] bg-burgundy" />
            <span className="text-[11px] font-medium tracking-[0.25em] text-burgundy uppercase">
              Leadership
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-charcoal leading-[1.1] tracking-tight">
            The People Behind{" "}
            <span className="text-burgundy">3AM Construction</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          {team.map((member, i) => (
            <div
              key={member.name}
              className={`text-center transition-all duration-700 ease-out ${
                visible ? "translate-y-0" : "translate-y-6"
              }`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="relative w-32 h-32 mx-auto mb-6 overflow-hidden rounded-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="128px"
                />
              </div>
              <h3 className="text-lg font-bold text-charcoal tracking-tight">
                {member.name}
              </h3>
              <p className="text-[13px] font-semibold text-burgundy mt-0.5 tracking-[0.04em]">
                {member.role}
              </p>
              <p className="text-[14px] text-charcoal/50 leading-relaxed mt-3 max-w-sm mx-auto">
                {member.description}
              </p>
            </div>
          ))}
        </div>

        <div
          className={`mt-14 relative aspect-[21/8] overflow-hidden transition-all duration-700 ease-out delay-300 ${
            visible ? "translate-y-0" : "translate-y-6"
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
