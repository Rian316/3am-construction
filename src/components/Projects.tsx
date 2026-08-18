"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useInView } from "@/hooks/useInView";

const projects = [
  {
    id: 1,
    title: "Modern Kitchen Renovation",
    category: "Residential",
    location: "Metro Manila",
    year: "2024",
    image: "/images/projects/kitchen-modern.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "Contemporary Living Space",
    category: "Residential",
    location: "Luzon",
    year: "2024",
    image: "/images/projects/living-room.jpg",
    featured: false,
  },
  {
    id: 3,
    title: "Luxury Kitchen Fit-Out",
    category: "Fit-Out",
    location: "Metro Manila",
    year: "2023",
    image: "/images/projects/luxury-kitchen.jpg",
    featured: false,
  },
  {
    id: 4,
    title: "Modern Bathroom Design",
    category: "Residential",
    location: "Luzon",
    year: "2024",
    image: "/images/projects/bathroom-modern.jpg",
    featured: true,
  },
  {
    id: 5,
    title: "Premium Cabinetry Work",
    category: "Fit-Out",
    location: "Metro Manila",
    year: "2023",
    image: "/images/projects/cabinetry.jpg",
    featured: false,
  },
  {
    id: 6,
    title: "Urban Condo Interior",
    category: "Residential",
    location: "Metro Manila",
    year: "2024",
    image: "/images/projects/interior-wood.jpg",
    featured: false,
  },
  {
    id: 7,
    title: "Open Plan Living",
    category: "Residential",
    location: "Luzon",
    year: "2023",
    image: "/images/projects/open-living.jpg",
    featured: false,
  },
  {
    id: 8,
    title: "Executive Office Suite",
    category: "Commercial",
    location: "Metro Manila",
    year: "2024",
    image: "/images/projects/office-desk.jpg",
    featured: false,
  },
];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const lightboxRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
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

  const openLightbox = useCallback(() => {
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  useEffect(() => {
    if (!lightboxOpen) return;

    const previousFocus = document.activeElement as HTMLElement;
    closeButtonRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeLightbox();
        return;
      }
      if (e.key === "ArrowLeft") {
        goToPrev();
        return;
      }
      if (e.key === "ArrowRight") {
        goToNext();
        return;
      }
      if (e.key === "Tab" && lightboxRef.current) {
        const focusable = lightboxRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
      previousFocus?.focus();
    };
  }, [lightboxOpen, closeLightbox, goToPrev, goToNext]);

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
            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.08] tracking-[-0.02em]">
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
          <button
            className="lg:col-span-7 aspect-[4/3] lg:aspect-[3/2] overflow-hidden cursor-pointer relative bg-[#1A1A1A] group"
            onClick={openLightbox}
            aria-label={`Open lightbox for ${activeProject.title}`}
          >
            <Image
              src={activeProject.image}
              alt={activeProject.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              sizes="(max-width: 1024px) 100vw, 60vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 left-0 p-6 md:p-8">
              <span className="text-[#953131] text-[10px] font-semibold tracking-[0.2em] uppercase">
                {activeProject.category}
              </span>
              <h3 className="text-white text-xl md:text-2xl font-bold mt-1.5 tracking-tight">
                {activeProject.title}
              </h3>
              <p className="text-white/40 text-[13px] mt-1">
                {activeProject.location} &middot; {activeProject.year}
              </p>
            </div>
          </button>

          {/* Right side: 2x2 grid of thumbnails */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-3">
            {projects.slice(0, 4).map((project, index) => (
              <button
                key={project.id}
                onClick={() => setActiveIndex(index)}
                className={`aspect-[4/3] overflow-hidden cursor-pointer relative group ${
                  index === activeIndex
                    ? "ring-1 ring-[#953131]"
                    : "opacity-50 hover:opacity-80 transition-opacity"
                }`}
                aria-label={`View ${project.title}`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="200px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
                <div className="absolute bottom-0 left-0 p-3">
                  <span className="text-white text-[11px] font-medium tracking-wide">
                    {project.title}
                  </span>
                </div>
              </button>
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
              <button
                key={project.id}
                onClick={() => setActiveIndex(index + 4)}
                className={`w-16 h-12 overflow-hidden relative ${
                  index + 4 === activeIndex
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
                  sizes="64px"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          ref={lightboxRef}
          role="dialog"
          aria-modal="true"
          aria-label="Project lightbox"
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            ref={closeButtonRef}
            onClick={closeLightbox}
            className="absolute top-5 right-5 md:top-8 md:right-8 w-12 h-12 text-white/60 hover:text-white flex items-center justify-center transition-colors z-10"
            aria-label="Close lightbox"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); goToPrev(); }}
            className="absolute left-3 md:left-6 w-12 h-12 md:w-14 md:h-14 text-white/40 hover:text-white flex items-center justify-center transition-colors z-10"
            aria-label="Previous project"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <div
            className="max-w-6xl mx-auto px-4 sm:px-8 md:px-16"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={activeProject.image}
              alt={activeProject.title}
              width={1200}
              height={750}
              className="max-h-[75vh] w-full object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 75vw"
            />
            <div className="mt-6 text-center">
              <p className="text-white text-[10px] font-semibold tracking-[0.2em] uppercase mb-2">
                {activeProject.category} &middot; {activeProject.location} &middot; {activeProject.year}
              </p>
              <p className="text-lg md:text-xl text-white font-medium">
                {activeProject.title}
              </p>
            </div>
          </div>

          <button
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
            className="absolute right-3 md:right-6 w-12 h-12 md:w-14 md:h-14 text-white/40 hover:text-white flex items-center justify-center transition-colors z-10"
            aria-label="Next project"
          >
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
}
