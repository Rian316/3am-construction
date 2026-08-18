"use client";

import { useEffect, useRef, useState, useCallback } from "react";
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
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const activeProject = projects[activeIndex];

  const openLightbox = useCallback((index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  const nextProject = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  }, []);

  const prevProject = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  }, []);

  const nextLightbox = useCallback(() => {
    setLightboxIndex((prev) => (prev + 1) % projects.length);
  }, []);

  const prevLightbox = useCallback(() => {
    setLightboxIndex((prev) => (prev - 1 + projects.length) % projects.length);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;

      if (e.key === "Escape") {
        closeLightbox();
      } else if (e.key === "ArrowRight") {
        nextLightbox();
      } else if (e.key === "ArrowLeft") {
        prevLightbox();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, closeLightbox, nextLightbox, prevLightbox]);

  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxOpen]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("translate-y-0");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".scroll-animate");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section
        ref={sectionRef}
        className="py-16 md:py-24 lg:py-32 bg-charcoal"
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16">
          <div className="flex items-end justify-between mb-12 md:mb-16 scroll-animate translate-y-8 transition-transform duration-700">
            <div>
              <p className="text-burgundy text-sm tracking-[0.2em] uppercase mb-3">
                Selected Projects
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                Our Work Speaks for Itself
              </h2>
            </div>
            <div className="flex gap-3">
              <button
                onClick={prevProject}
                className="w-12 h-12 border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="Previous project"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-white"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                onClick={nextProject}
                className="w-12 h-12 border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="Next project"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-white"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-6 scroll-animate translate-y-8 transition-transform duration-700 delay-200">
            <div className="lg:col-span-8">
              <div
                className="aspect-[16/10] overflow-hidden cursor-pointer bg-charcoal"
                onClick={() => openLightbox(activeIndex)}
              >
                <Image
                  src={activeProject.image}
                  alt={activeProject.title}
                  width={1200}
                  height={750}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="grid grid-cols-3 lg:grid-cols-2 gap-3">
                {projects.map((project, index) => (
                  <button
                    key={project.id}
                    onClick={() => setActiveIndex(index)}
                    className={`aspect-square overflow-hidden transition-all duration-300 ${
                      index === activeIndex
                        ? "ring-1 ring-burgundy"
                        : "opacity-40 hover:opacity-70"
                    }`}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center gap-6 scroll-animate translate-y-8 transition-transform duration-700 delay-300">
            <h3 className="text-xl md:text-2xl font-semibold text-white">
              {activeProject.title}
            </h3>
            <span className="text-white/40 text-lg">
              {String(activeIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </section>

      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center text-white hover:text-burgundy transition-colors z-10"
            aria-label="Close lightbox"
          >
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              prevLightbox();
            }}
            className="absolute left-4 md:left-8 w-14 h-14 flex items-center justify-center text-white hover:text-burgundy transition-colors z-10"
            aria-label="Previous project"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextLightbox();
            }}
            className="absolute right-4 md:right-8 w-14 h-14 flex items-center justify-center text-white hover:text-burgundy transition-colors z-10"
            aria-label="Next project"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          <div
            className="max-w-6xl mx-auto px-16"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={projects[lightboxIndex].image}
              alt={projects[lightboxIndex].title}
              width={1600}
              height={1000}
              className="w-full max-h-[85vh] object-contain"
            />
            <div className="text-center mt-6">
              <h3 className="text-xl md:text-2xl font-semibold text-white">
                {projects[lightboxIndex].title}
              </h3>
              <p className="text-white/50 mt-2">
                {projects[lightboxIndex].category}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
