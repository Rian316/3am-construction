import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TrustMetrics from "@/components/TrustMetrics";
import WhyChooseUs from "@/components/WhyChooseUs";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Team from "@/components/Team";
import Process from "@/components/Process";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import ClosingCTA from "@/components/ClosingCTA";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import StickyDesktopCTA from "@/components/StickyDesktopCTA";
import { site } from "@/lib/site";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ConstructionBusiness",
  name: site.name,
  description: site.description,
  url: site.url,
  logo: `${site.url}/images/logo.png`,
  foundingDate: site.foundedYear,
  founder: {
    "@type": "Person",
    name: site.founder,
  },
  areaServed: {
    "@type": "Place",
    name: site.location,
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: site.phone,
      contactType: "customer service",
    },
  ],
  email: site.email,
  sameAs: [site.facebook],
  serviceType: [
    "Residential Construction",
    "Interior Design",
    "Exterior Design",
    "Fit-Out Works",
    "Construction and Repairs",
    "Project Management",
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What areas do you serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We serve the entire Luzon region, including Metro Manila, Central Luzon, Calabarzon, and surrounding provinces. For large-scale projects, we can accommodate locations across the Philippines.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a typical project take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Timelines vary based on scope and complexity. A standard residential build typically takes 6–12 months. Renovations and fit-outs can range from 2–6 months. We provide a detailed timeline during the consultation phase.",
      },
    },
    {
      "@type": "Question",
      name: "Do you handle permits and documentation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We manage all necessary permits, building applications, and regulatory compliance as part of our project management service. You won't need to navigate the paperwork alone.",
      },
    },
    {
      "@type": "Question",
      name: "How does your process work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our process is designed for clarity and peace of mind. It begins with a free consultation where we discuss your vision, budget, and timeline. We then provide a detailed, transparent quote. Once approved, we handle all permits, schedule construction, and keep you updated with regular progress reports. Throughout the build, you have direct access to our project manager. Finally, we conduct a thorough walkthrough before final turnover to ensure every detail meets your expectations.",
      },
    },
    {
      "@type": "Question",
      name: "How do you determine project cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We provide transparent, itemized quotes after an initial consultation. Pricing depends on project scope, materials, and timeline. We never charge hidden fees — what we quote is what you pay.",
      },
    },
  ],
};

export default function Home() {
  return (
    <main id="main-content" className="flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Navigation />
      <StickyDesktopCTA />
      <Hero />
      <TrustMetrics />
      <WhyChooseUs />
      <About />
      <Services />
      <Projects />
      <Team />
      <Process />
      <CTA />
      <FAQ />
      <Contact />
      <ClosingCTA />
      <Footer />
      <StickyMobileCTA />
    </main>
  );
}
