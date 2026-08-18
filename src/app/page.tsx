import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TrustMetrics from "@/components/TrustMetrics";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Process from "@/components/Process";
import Values from "@/components/Values";
import Team from "@/components/Team";
import CTA from "@/components/CTA";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex-1">
      <Navigation />
      <Hero />
      <TrustMetrics />
      <About />
      <Services />
      <Projects />
      <Process />
      <Values />
      <Team />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
