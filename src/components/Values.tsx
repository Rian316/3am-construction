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
      className="py-16 md:py-24 lg:py-32 bg-stone"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Top Statement */}
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-700 ease-out ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <p className="text-xl md:text-2xl text-charcoal/40 font-light tracking-wide mb-3">
            BUILT ON
          </p>
          <p className="text-3xl md:text-4xl lg:text-5xl font-bold text-charcoal tracking-tight leading-[1.1]">
            <span className="block">DISCIPLINE.</span>
            <span className="block">PRECISION.</span>
            <span className="block">TRUST.</span>
          </p>
          <p className="mt-6 text-[14px] text-charcoal/50 max-w-lg mx-auto leading-relaxed">
            These principles guide every project we undertake, ensuring
            excellence in every detail.
          </p>
        </div>

        {/* Two Columns */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left Column - Vision & Mission */}
          <div
            className={`transition-all duration-700 ease-out delay-150 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            }`}
          >
            <h3 className="text-base font-bold text-charcoal tracking-tight mb-4">
              Our Vision
            </h3>
            <div className="space-y-4 text-[14px] text-charcoal/55 leading-relaxed">
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

            <div className="mt-8">
              <h3 className="text-base font-bold text-charcoal tracking-tight mb-4">
                Our Mission
              </h3>
              <div className="space-y-3">
                {mission.map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <span className="text-gold font-bold text-[13px] mt-0.5 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="text-[14px] text-charcoal/55 leading-relaxed">
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
            <h3 className="text-base font-bold text-charcoal tracking-tight mb-6">
              Core Values
            </h3>
            <div className="space-y-6">
              {coreValues.map((value) => (
                <div
                  key={value.title}
                  className="border-l-2 border-gold/20 pl-5 py-1.5 hover:border-gold transition-colors duration-300"
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
      </div>
    </section>
  );
}
