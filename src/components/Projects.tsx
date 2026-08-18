"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "@/hooks/useInView";

const projects = [
  {
    id: 1,
    slug: "modern-kitchen-renovation",
    title: "Modern Kitchen Renovation",
    category: "Residential",
    scope: "Custom Cabinetry, Lighting, Space Optimization",
    location: "Metro Manila",
    year: "2024",
    image: "/images/projects/kitchen-modern.jpg",
    featured: true,
  },
  {
    id: 2,
    slug: "contemporary-living-space",
    title: "Contemporary Living Space",
    category: "Residential",
    scope: "Open-Plan Redesign, Smart Lighting, Custom Woodwork",
    location: "Luzon",
    year: "2024",
    image: "/images/projects/living-room.jpg",
    featured: false,
  },
  {
    id: 3,
    slug: "luxury-kitchen-fit-out",
    title: "Luxury Kitchen Fit-Out",
    category: "Fit-Out",
    scope: "Italian Appliances, Quartz Countertops, Custom Cabinetry",
    location: "Metro Manila",
    year: "2023",
    image: "/images/projects/luxury-kitchen.jpg",
    featured: false,
  },
  {
    id: 4,
    slug: "modern-bathroom-design",
    title: "Modern Bathroom Design",
    category: "Residential",
    scope: "Waterproofing, Porcelain Tiling, Rain Shower",
    location: "Luzon",
    year: "2024",
    image: "/images/projects/bathroom-modern.jpg",
    featured: true,
  },
  {
    id: 5,
    slug: "premium-cabinetry-work",
    title: "Premium Cabinetry Work",
    category: "Fit-Out",
    scope: "Custom Wardrobes, Kitchen Cabinets, Entertainment Unit",
    location: "Metro Manila",
    year: "2023",
    image: "/images/projects/cabinetry.jpg",
    featured: false,
  },
  {
    id: 6,
    slug: "urban-condo-interior",
    title: "Urban Condo Interior",
    category: "Residential",
    scope: "Multi-Functional Furniture, Built-In Storage, Styling",
    location: "Metro Manila",
    year: "2024",
    image: "/images/projects/interior-wood.jpg",
    featured: false,
  },
  {
    id: 7,
    slug: "open-plan-living",
    title: "Open Plan Living",
    category: "Residential",
    scope: "Structural Modification, Kitchen Redesign, Flooring",
    location: "Luzon",
    year: "2023",
    image: "/images/projects/open-living.jpg",
    featured: false,
  },
  {
    id: 8,
    slug: "executive-office-suite",
    title: "Executive Office Suite",
    category: "Commercial",
    scope: "Custom Furniture, Glass Partitions, AV Integration",
    location: "Metro Manila",
    year: "2024",
    image: "/images/projects/office-desk.jpg",
    featured: false,
  },
];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const { ref: headerRef, isVisible: headerInView } = useInView({ threshold: 0.1 });
  const { ref: gridRef, isVisible: gridInView } = useInView({ threshold: 0.1 });
  const { ref: infoRef, isVisible: infoInView } = useInView({ threshold: 0.1 });

  const activeProject = projects[activeIndex];

  const goToPrev = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  }, []);

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  }, []);

  return (
    <section id="projects" className="bg-[#1A1A1A] py-20 md:py-28 lg:py-36">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div
          ref={headerRef}
          className={`flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 ${
            headerInView
              ? "translate-y-0 opacity-100 transition-all duration-700"
              : "translate-y-8 opacity-0"
          }`}
        >
          <div>
            <span className="block text-[#953131] text-[10px] font-semibold tracking-[0.3em] uppercase mb-4">
              Selected Projects
            </span>
            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.08] tracking-[-0.02em] font-display">
              Our Work Speaks
              <br className="hidden md:block" /> for Itself
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={goToPrev}
              className="w-12 h-12 border border-white/15 text-white/40 flex items-center justify-center hover:bg-white/5 hover:text-white transition-colors"
              aria-label="Previous project"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="w-12 h-12 border border-white/15 text-white/40 flex items-center justify-center hover:bg-white/5 hover:text-white transition-colors"
              aria-label="Next project"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Editorial Layout: Large featured + smaller grid */}
        <div
          ref={gridRef}
          className={`grid lg:grid-cols-12 gap-4 lg:gap-5 ${
            gridInView
              ? "translate-y-0 opacity-100 transition-all duration-700 delay-200"
              : "translate-y-8 opacity-0"
          }`}
        >
          {/* Main large image */}
          <Link
            href={`/projects/${activeProject.slug}`}
            className="lg:col-span-7 aspect-[4/3] lg:aspect-[3/2] overflow-hidden relative bg-[#1A1A1A] group"
          >
            <Image
              src={activeProject.image}
              alt={activeProject.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              sizes="(max-width: 1024px) 100vw, 60vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
            <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[#953131] text-[10px] font-semibold tracking-[0.2em] uppercase">
                  {activeProject.category}
                </span>
                <span className="w-1 h-1 rounded-full bg-white/30" />
                <span className="text-white/40 text-[11px] tracking-wide">
                  {activeProject.location} &middot; {activeProject.year}
                </span>
              </div>
              <h3 className="text-white text-xl md:text-2xl font-bold tracking-tight">
                {activeProject.title}
              </h3>
              <p className="text-white/50 text-[13px] mt-2 max-w-md">
                {activeProject.scope}
              </p>
              <span className="inline-flex items-center gap-2 mt-4 text-[#953131] text-[11px] font-semibold uppercase tracking-wider group-hover:gap-3 transition-all">
                View Case Study
                <svg className="w-3 h-3 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </div>
          </Link>

          {/* Right side: 2x2 grid of thumbnails */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-3">
            {projects.slice(0, 4).map((project, index) => (
              <Link
                key={project.id}
                href={`/projects/${project.slug}`}
                className={`aspect-[4/3] overflow-hidden relative group ${
                  index === activeIndex
                    ? "ring-1 ring-[#953131]"
                    : "opacity-50 hover:opacity-80 transition-opacity"
                }`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="200px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <div className="absolute bottom-0 left-0 p-3 w-full">
                  <span className="text-white text-[11px] font-medium tracking-wide block">
                    {project.title}
                  </span>
                  <span className="text-white/40 text-[10px] tracking-wide block mt-0.5">
                    {project.scope.split(",")[0]}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Project counter and additional thumbnails */}
        <div
          ref={infoRef}
          className={`mt-6 flex items-center justify-between ${
            infoInView
              ? "translate-y-0 opacity-100 transition-all duration-700 delay-300"
              : "translate-y-8 opacity-0"
          }`}
        >
          <div className="flex items-center gap-4">
            <span className="text-white/25 text-[13px] font-medium">
              {String(activeIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
            </span>
            <span className="text-white/40 text-[13px] font-medium">
              {activeProject.title}
            </span>
          </div>
          <div className="hidden md:flex items-center gap-2">
            {projects.slice(4).map((project, index) => (
              <Link
                key={project.id}
                href={`/projects/${project.slug}`}
                className={`w-16 h-12 overflow-hidden relative ${
                  index + 4 === activeIndex
                    ? "ring-1 ring-[#953131]"
                    : "opacity-30 hover:opacity-60 transition-opacity"
                }`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
