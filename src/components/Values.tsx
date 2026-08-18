"use client";

import { useInView } from "@/hooks/useInView";

const mission = [
  "To deliver construction solutions that combine quality, safety, and functionality.",
  "To provide tailored services for homes, private developments, and government projects.",
  "To integrate modern designs, sustainable practices, and efficient project management in every build.",
  "To build strong, lasting relationships with clients and partners based on trust and transparency.",
];

const coreValues = [
  {
    title: "Integrity & Reliability",
    description:
      "We uphold honesty, transparency, and professionalism in all our dealings.",
  },
  {
    title: "Quality & Craftsmanship",
    description:
      "Every project is a reflection of our standard of excellence.",
  },
  {
    title: "Client Satisfaction & Safety",
    description:
      "We measure success through client satisfaction while ensuring safety.",
  },
];

export default function Values() {
  const { ref: sectionRef, isVisible } = useInView({ threshold: 0.1 });

  return (
    <section
      id="values"
      ref={sectionRef}
      className="py-20 md:py-28 lg:py-36 bg-stone"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Top Statement */}
        <div
          className={`text-center mb-16 md:mb-20 transition-all duration-700 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <p className="text-lg md:text-xl text-charcoal/55 font-light tracking-[0.15em] uppercase mb-4">
            Built on
          </p>
          <p className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-charcoal tracking-[-0.02em] leading-[1.0] font-display">
            <span className="block">DISCIPLINE.</span>
            <span className="block mt-1">PRECISION.</span>
            <span className="block mt-1">TRUST.</span>
          </p>
          <p className="mt-8 text-[15px] text-charcoal/65 max-w-lg mx-auto leading-[1.7]">
            These principles guide every project we undertake, ensuring
            excellence in every detail.
          </p>
        </div>

        {/* Two Columns */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Vision & Mission */}
          <div
            className={`transition-all duration-700 ease-out delay-150 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            <h3 className="text-[13px] font-bold text-charcoal tracking-[0.12em] uppercase mb-5">
              Our Vision
            </h3>
            <div className="space-y-5 text-[15px] text-charcoal/65 leading-[1.75]">
              <p>
                To be a trusted construction company delivering quality
                residential, private, and public projects with integrity and
                craftsmanship.
              </p>
              <p>
                To be a growing construction firm committed to building safe,
                functional, and well-designed spaces for families, businesses,
                and communities.
              </p>
            </div>

            <div className="mt-10">
              <h3 className="text-[13px] font-bold text-charcoal tracking-[0.12em] uppercase mb-5">
                Our Mission
              </h3>
              <div className="space-y-4">
                {mission.map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <span className="text-[#953131] font-bold text-[12px] mt-1 shrink-0 font-mono">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-[15px] text-charcoal/65 leading-[1.75]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Core Values */}
          <div
            className={`transition-all duration-700 ease-out delay-300 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            <h3 className="text-[13px] font-bold text-charcoal tracking-[0.12em] uppercase mb-8">
              Core Values
            </h3>
            <div className="space-y-8">
              {coreValues.map((value) => (
                <div
                  key={value.title}
                  className="border-l-2 border-[#953131]/20 pl-6 py-2 hover:border-[#953131] transition-colors duration-300"
                >
                  <h4 className="text-[16px] font-bold text-charcoal tracking-tight mb-2">
                    {value.title}
                  </h4>
                  <p className="text-[15px] text-charcoal/65 leading-[1.75]">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
