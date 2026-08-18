"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { useInView } from "@/hooks/useInView";

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
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
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

  const openLightbox = useCallback(() => setLightboxOpen(true), []);
  const closeLightbox = useCallback(() => setLightboxOpen(false), []);

  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goToPrev();
      if (e.key === "ArrowRight") goToNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [lightboxOpen, closeLightbox, goToPrev, goToNext]);

  return (
    <section className="bg-[#1A1A1A] py-16 md:py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
        <div
          ref={headerRef}
          className={`flex items-end justify-between mb-10 ${
            headerInView
              ? "translate-y-0 opacity-100 transition-all duration-700"
              : "translate-y-8 opacity-0"
          }`}
        >
          <div>
            <span className="block text-[#953131] text-[13px] tracking-[0.2em] uppercase mb-3">
              Selected Projects
            </span>
            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold">
              Our Work Speaks for Itself
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={goToPrev}
              className="w-12 h-12 border border-white/15 text-white/40 flex items-center justify-center hover:bg-white/5 hover:text-white transition-colors"
              aria-label="Previous project"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="w-12 h-12 border border-white/15 text-white/40 flex items-center justify-center hover:bg-white/5 hover:text-white transition-colors"
              aria-label="Next project"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        <div
          ref={gridRef}
          className={`grid lg:grid-cols-12 gap-6 ${
            gridInView
              ? "translate-y-0 opacity-100 transition-all duration-700 delay-200"
              : "translate-y-8 opacity-0"
          }`}
        >
          <div
            className="lg:col-span-8 aspect-[16/10] overflow-hidden cursor-pointer relative bg-[#1A1A1A]"
            onClick={openLightbox}
          >
            <Image
              src={activeProject.image}
              alt={activeProject.title}
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 1024px) 100vw, 66vw"
              priority
            />
          </div>
          <div className="lg:col-span-4 grid grid-cols-3 lg:grid-cols-2 gap-2 lg:gap-3">
            {projects.map((project, index) => (
              <button
                key={project.id}
                onClick={() => setActiveIndex(index)}
                className={`aspect-square overflow-hidden cursor-pointer relative ${
                  index === activeIndex
                    ? "ring-1 ring-[#953131]"
                    : "opacity-30 hover:opacity-60 transition-opacity"
                }`}
                aria-label={`View ${project.title}`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="150px"
                />
              </button>
            ))}
          </div>
        </div>

        <div
          ref={infoRef}
          className={`flex items-center gap-4 mt-6 ${
            infoInView
              ? "translate-y-0 opacity-100 transition-all duration-700 delay-300"
              : "translate-y-8 opacity-0"
          }`}
        >
          <h3 className="text-xl md:text-2xl font-semibold text-white">
            {activeProject.title}
          </h3>
          <span className="text-white/30">
            {String(activeIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
          </span>
        </div>
      </div>

      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-12 h-12 text-white hover:text-[#953131] flex items-center justify-center transition-colors z-10"
            aria-label="Close lightbox"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goToPrev();
            }}
            className="absolute left-4 md:left-8 w-14 h-14 text-white hover:text-[#953131] flex items-center justify-center transition-colors z-10"
            aria-label="Previous project"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div
            className="max-w-6xl mx-auto px-20"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={activeProject.image}
              alt={activeProject.title}
              width={1200}
              height={750}
              className="max-h-[85vh] w-full object-contain"
              sizes="(max-width: 1024px) 100vw, 75vw"
            />
            <div className="mt-4 text-center">
              <p className="text-xl text-white">{activeProject.title}</p>
              <p className="text-white/50 mt-1">
                {activeProject.category} • {activeProject.location}
              </p>
            </div>
          </div>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goToNext();
            }}
            className="absolute right-4 md:right-8 w-14 h-14 text-white hover:text-[#953131] flex items-center justify-center transition-colors z-10"
            aria-label="Next project"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
}
