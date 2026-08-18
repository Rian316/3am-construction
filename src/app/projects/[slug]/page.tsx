import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProjectBySlug } from "@/lib/projects";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | Case Study`,
    description: project.description.slice(0, 160),
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative aspect-[16/9] md:aspect-[21/9] w-full">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 lg:p-16">
          <div className="max-w-[1400px] mx-auto">
            <span className="text-[#953131] text-[11px] font-semibold tracking-[0.2em] uppercase">
              {project.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-2 tracking-[-0.02em] font-display">
              {project.title}
            </h1>
            <p className="text-white/60 text-[14px] mt-2">
              {project.location} &middot; {project.year}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 py-12 md:py-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Main Content */}
          <div className="lg:col-span-8">
            <p className="text-[16px] md:text-[17px] text-charcoal/70 leading-[1.8] mb-10">
              {project.description}
            </p>

            {/* Gallery */}
            <div className="grid grid-cols-2 gap-4 mb-12">
              {project.gallery.map((img, i) => (
                <div key={i} className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={img}
                    alt={`${project.title} - Image ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 40vw"
                  />
                </div>
              ))}
            </div>

            {/* Challenges & Solutions */}
            <div className="grid md:grid-cols-2 gap-10 mb-12">
              <div>
                <h3 className="text-[13px] font-bold text-charcoal tracking-[0.12em] uppercase mb-5">
                  Challenges
                </h3>
                <ul className="space-y-3">
                  {project.challenges.map((challenge, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <span className="text-[#953131] mt-1.5 shrink-0">
                        <svg className="w-2 h-2" fill="currentColor" viewBox="0 0 8 8">
                          <circle cx="4" cy="4" r="4" />
                        </svg>
                      </span>
                      <p className="text-[14px] text-charcoal/60 leading-[1.7]">
                        {challenge}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-[13px] font-bold text-charcoal tracking-[0.12em] uppercase mb-5">
                  Solutions
                </h3>
                <ul className="space-y-3">
                  {project.solutions.map((solution, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <span className="text-[#953131] mt-1.5 shrink-0">
                        <svg className="w-2 h-2" fill="currentColor" viewBox="0 0 8 8">
                          <circle cx="4" cy="4" r="4" />
                        </svg>
                      </span>
                      <p className="text-[14px] text-charcoal/60 leading-[1.7]">
                        {solution}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <div className="sticky top-24 space-y-8">
              <div className="bg-stone p-6 md:p-8">
                <h3 className="text-[11px] font-bold text-charcoal tracking-[0.15em] uppercase mb-6">
                  Project Details
                </h3>
                <div className="space-y-4">
                  <div>
                    <span className="text-[11px] text-charcoal/40 uppercase tracking-wider">
                      Scope
                    </span>
                    <p className="text-[14px] text-charcoal/70 mt-1">
                      {project.details.scope}
                    </p>
                  </div>
                  <div className="border-t border-charcoal/8 pt-4">
                    <span className="text-[11px] text-charcoal/40 uppercase tracking-wider">
                      Duration
                    </span>
                    <p className="text-[14px] text-charcoal/70 mt-1">
                      {project.details.duration}
                    </p>
                  </div>
                  <div className="border-t border-charcoal/8 pt-4">
                    <span className="text-[11px] text-charcoal/40 uppercase tracking-wider">
                      Area
                    </span>
                    <p className="text-[14px] text-charcoal/70 mt-1">
                      {project.details.area}
                    </p>
                  </div>
                  <div className="border-t border-charcoal/8 pt-4">
                    <span className="text-[11px] text-charcoal/40 uppercase tracking-wider">
                      Location
                    </span>
                    <p className="text-[14px] text-charcoal/70 mt-1">
                      {project.location}
                    </p>
                  </div>
                  <div className="border-t border-charcoal/8 pt-4">
                    <span className="text-[11px] text-charcoal/40 uppercase tracking-wider">
                      Year
                    </span>
                    <p className="text-[14px] text-charcoal/70 mt-1">
                      {project.year}
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="#contact"
                className="block w-full bg-[#953131] hover:bg-[#A93E3E] text-white text-center py-4 text-[12px] font-semibold uppercase tracking-[0.1em] transition-colors"
              >
                Start Your Project
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Back Link */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 pb-12">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-[12px] font-semibold text-[#953131] uppercase tracking-[0.08em] hover:underline"
        >
          ← Back to Projects
        </Link>
      </div>
    </main>
  );
}
