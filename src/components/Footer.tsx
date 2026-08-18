import Image from "next/image";
import { site } from "@/lib/site";
import { navLinks } from "@/lib/navigation";

const footerServices = [
  "Residential Construction",
  "Interior & Exterior Design",
  "Fit-Out Works",
  "Construction & Repairs",
  "Private & Public Projects",
  "Project Management",
];

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white">
      {/* Brand Statement */}
      <div className="border-b border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 py-16 md:py-24">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-20 items-end">
            <div className="lg:col-span-8">
              <p className="text-[10px] font-semibold tracking-[0.3em] text-[#953131] uppercase mb-4">
                {site.name}
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-[1.05] tracking-[-0.02em] font-display">
                Design.<br />
                Build.<br />
                <span className="text-[#953131]">Deliver.</span>
              </h2>
            </div>
            <div className="lg:col-span-4">
              <div className="flex flex-col sm:flex-row lg:flex-col gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 bg-[#953131] hover:bg-[#A93E3E] text-white px-7 py-3.5 text-[11px] font-semibold uppercase tracking-[0.1em] transition-colors"
                >
                  Get a Free Quote
                </a>
                <a
                  href={`tel:${site.phoneRaw}`}
                  className="inline-flex items-center justify-center gap-2 border border-white/20 text-white hover:bg-white/5 px-7 py-3.5 text-[11px] font-medium uppercase tracking-[0.1em] transition-colors"
                >
                  {site.phoneLocal}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 py-14 md:py-18">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1 - Brand */}
          <div>
            <a href="#" className="flex items-center gap-2.5 mb-5" aria-label={`${site.name} - Home`}>
              <Image src="/images/logo.png" alt={site.name} width={120} height={35} className="h-7 w-auto" />
            </a>
            <p className="text-[13px] text-white/50 leading-relaxed">
              Premium construction and design solutions delivered with
              precision, integrity, and craftsmanship across Luzon since {site.foundedYear}.
            </p>
          </div>

          {/* Column 2 - Navigation */}
          <div>
            <h3 className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/40 mb-5">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-[13px] text-white/50 hover:text-[#953131] transition-colors duration-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h3 className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/40 mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {footerServices.map((item) => (
                <li key={item}>
                  <a
                    href="#services"
                    className="text-[13px] text-white/50 hover:text-[#953131] transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/40 mb-5">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a href={`mailto:${site.email}`} className="text-[13px] text-white/50 hover:text-[#953131] transition-colors duration-300">
                  {site.email}
                </a>
              </li>
              <li>
                <a href={`tel:${site.phoneRaw}`} className="text-[13px] text-white/50 hover:text-[#953131] transition-colors duration-300">
                  {site.phoneLocal}
                </a>
              </li>
              <li>
                <a href={`tel:${site.phone2.replace(/\s/g, "")}`} className="text-[13px] text-white/50 hover:text-[#953131] transition-colors duration-300">
                  {site.phone2}
                </a>
              </li>
              <li>
                <a href={site.facebook} target="_blank" rel="noopener noreferrer" className="text-[13px] text-white/50 hover:text-[#953131] transition-colors duration-300">
                  Facebook
                </a>
              </li>
              <li className="text-[13px] text-white/30">
                {site.location}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-8 border-t border-white/6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[11px] text-white/40">
            &copy; {site.foundedYear}–2026 {site.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="/privacy" className="text-[11px] text-white/40 hover:text-white/60 transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="/terms" className="text-[11px] text-white/40 hover:text-white/60 transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
