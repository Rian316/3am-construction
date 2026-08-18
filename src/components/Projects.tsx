"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Modern Kitchen Renovation",
    category: "Residential",
    location: "Metro Manila",
    image: "/images/projects/kitchen-modern.jpg",
  },
  {
    id: 2,
    title: "Contemporary Living Space",
    category: "Residential",
    location: "Luzon",
    image: "/images/projects/living-room.jpg",
  },
  {
    id: 3,
    title: "Luxury Kitchen Fit-Out",
    category: "Fit-Out",
    location: "Metro Manila",
    image: "/images/projects/luxury-kitchen.jpg",
  },
  {
    id: 4,
    title: "Modern Bathroom Design",
    category: "Residential",
    location: "Luzon",
    image: "/images/projects/bathroom-modern.jpg",
  },
  {
    id: 5,
    title: "Premium Cabinetry Work",
    category: "Fit-Out",
    location: "Metro Manila",
    image: "/images/projects/cabinetry.jpg",
  },
  {
    id: 6,
    title: "Urban Condo Interior",
    category: "Residential",
    location: "Metro Manila",
    image: "/images/projects/interior-wood.jpg",
  },
];

export default function Projects() {
  const [visible, setVisible] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
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

  const nextProject = () =>
    setActiveProject((prev) => (prev + 1) % projects.length);
  const prevProject = () =>
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);

  return (
    <section id="projects" ref={ref} className="py-16 md:py-24 lg:py-32 bg-charcoal">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div
          className={`flex flex-col md:flex-row md:items-end md:justify-between mb-10 md:mb-14 transition-all duration-700 ease-out ${
            visible ? "translate-y-0" : "translate-y-6"
          }`}
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-[1px] bg-burgundy-light" />
              <span className="text-[11px] font-medium tracking-[0.25em] text-burgundy-light uppercase">
                Selected Projects
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-[1.1] tracking-tight">
              Our Work{" "}
              <span className="text-burgundy-light">Speaks for Itself</span>
            </h2>
          </div>
          <div className="flex gap-2 mt-6 md:mt-0">
            <button
              onClick={prevProject}
              className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/50 hover:border-white/50 hover:text-white transition-all duration-300"
              aria-label="Previous project"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextProject}
              className="w-10 h-10 border border-white/20 flex items-center justify-center text-white/50 hover:border-white/50 hover:text-white transition-all duration-300"
              aria-label="Next project"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        <div
          className={`transition-all duration-700 ease-out delay-150 ${
            visible ? "translate-y-0" : "translate-y-6"
          }`}
        >
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
            <div className="relative aspect-[4/3] overflow-hidden group">
              <Image
                src={projects[activeProject].image}
                alt={projects[activeProject].title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-400 translate-y-3 group-hover:translate-y-0">
                <span className="text-[10px] tracking-[0.18em] text-white/70 uppercase">
                  {projects[activeProject].category} &middot;{" "}
                  {projects[activeProject].location}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {projects.map((project, i) => (
                <button
                  key={project.id}
                  onClick={() => setActiveProject(i)}
                  className={`relative aspect-[3/2] overflow-hidden transition-all duration-300 ${
                    i === activeProject
                      ? "ring-1 ring-burgundy"
                      : "opacity-40 hover:opacity-70"
                  }`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div>
              <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">
                {projects[activeProject].title}
              </h3>
              <p className="text-[13px] text-white/40 mt-0.5">
                {projects[activeProject].category} &middot;{" "}
                {projects[activeProject].location}
              </p>
            </div>
            <span className="text-[13px] font-mono text-white/25">
              {String(activeProject + 1).padStart(2, "0")} /{" "}
              {String(projects.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
