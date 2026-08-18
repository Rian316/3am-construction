"use client";

import { useEffect, useRef, useState } from "react";

const values = [
  {
    title: "Integrity & Reliability",
    description:
      "We uphold honesty, transparency, and professionalism in all our dealings. We deliver on our commitments and ensure clients can depend on us for consistent, trustworthy service from start to finish.",
  },
  {
    title: "Quality & Craftsmanship",
    description:
      "Every project we take on is a reflection of our standard of excellence. From design to finishing, we combine functionality, durability, and attention to detail — building spaces that are both practical and aesthetically pleasing.",
  },
  {
    title: "Client Satisfaction & Safety",
    description:
      "We measure our success through the satisfaction of our clients while ensuring their safety and peace of mind. By following a strict Zero Harm policy, we create secure and reliable spaces that bring our clients' vision to life.",
  },
];

const mission = [
  "To deliver construction solutions that combine quality, safety, and functionality.",
  "To provide tailored services for homes, private developments, and government projects.",
  "To integrate modern designs, sustainable practices, and efficient project management in every build.",
  "To build strong, lasting relationships with clients and partners based on trust and transparency.",
];

export default function Values() {
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
    <section id="values" ref={ref} className="py-16 md:py-24 lg:py-32 bg-warm-gray">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div
          className={`mb-10 md:mb-16 transition-all duration-700 ease-out ${
            visible ? "translate-y-0" : "translate-y-6"
          }`}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-[1px] bg-burgundy" />
            <span className="text-[11px] font-medium tracking-[0.25em] text-burgundy uppercase">
              Our Foundation
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-charcoal leading-[1.1] tracking-tight">
            Vision, Mission{" "}
            <span className="text-burgundy">& Values</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div
            className={`lg:col-span-6 transition-all duration-700 ease-out ${
              visible ? "translate-y-0" : "translate-y-6"
            }`}
          >
            <h3 className="text-base font-bold text-charcoal tracking-tight mb-4">
              Our Vision
            </h3>
            <div className="space-y-4 text-[14px] text-charcoal/60 leading-relaxed">
              <p>
                To be a trusted construction company delivering quality
                residential, private, and public projects with integrity and
                craftsmanship. 3AM Construction Services envisions being
                recognized for reliability, safety, and attention to detail —
                ensuring that every project reflects our clients&apos; vision and
                stands the test of time.
              </p>
              <p>
                To be a growing construction firm committed to building safe,
                functional, and well-designed spaces for families, businesses,
                and communities.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="text-base font-bold text-charcoal tracking-tight mb-4">
                Our Mission
              </h3>
              <div className="space-y-3">
                {mission.map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <span className="text-burgundy font-bold text-[13px] mt-0.5 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-[14px] text-charcoal/60 leading-relaxed">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            className={`lg:col-span-6 space-y-6 transition-all duration-700 ease-out delay-150 ${
              visible ? "translate-y-0" : "translate-y-6"
            }`}
          >
            <h3 className="text-base font-bold text-charcoal tracking-tight mb-4">
              Core Values
            </h3>
            {values.map((value) => (
              <div
                key={value.title}
                className="border-l-2 border-burgundy/20 pl-5 py-1.5 hover:border-burgundy transition-colors duration-300"
              >
                <h4 className="text-[15px] font-bold text-charcoal tracking-tight mb-1.5">
                  {value.title}
                </h4>
                <p className="text-[14px] text-charcoal/50 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
