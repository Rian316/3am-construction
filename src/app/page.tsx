import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TrustMetrics from "@/components/TrustMetrics";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Team from "@/components/Team";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import ClosingCTA from "@/components/ClosingCTA";
import Footer from "@/components/Footer";
import StickyMobileCTA from "@/components/StickyMobileCTA";
import StickyDesktopCTA from "@/components/StickyDesktopCTA";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ConstructionBusiness",
  name: "3AM Construction Services",
  description:
    "Premium construction company in Luzon specializing in residential, private, and public projects. Interior and exterior design, fit-outs, construction, and repair.",
  url: "https://3amconstruction.com",
  logo: "https://3amconstruction.com/images/logo.png",
  foundingDate: "2018",
  founder: {
    "@type": "Person",
    name: "Armel V. Manipol",
  },
  areaServed: {
    "@type": "Place",
    name: "Luzon, Philippines",
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+63-955-675-8128",
      contactType: "customer service",
    },
    {
      "@type": "ContactPoint",
      telephone: "+63-991-262-0627",
      contactType: "customer service",
    },
  ],
  email: "3am.constservices@gmail.com",
  sameAs: ["https://facebook.com/3amconstructionph"],
  serviceType: [
    "Residential Construction",
    "Interior Design",
    "Exterior Design",
    "Fit-Out Works",
    "Construction and Repairs",
    "Project Management",
  ],
};

export default function Home() {
  return (
    <main id="main-content" className="flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Navigation />
      <StickyDesktopCTA />
      <Hero />
      <TrustMetrics />
      <About />
      <Services />
      <Projects />
      <Team />
      <CTA />
      <FAQ />
      <Contact />
      <ClosingCTA />
      <Footer />
      <StickyMobileCTA />
    </main>
  );
}
