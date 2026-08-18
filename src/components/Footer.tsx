import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 py-14 md:py-18">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1 - Brand */}
          <div>
            <a href="#" className="flex items-center gap-2.5 mb-5" aria-label="3AM Construction Services - Home">
              <Image src="/images/logo.png" alt="3AM Construction Services" width={120} height={35} className="h-7 w-auto" />
            </a>
            <p className="text-[13px] text-white/50 leading-relaxed">
              Delivering exceptional construction and design solutions with
              precision, integrity, and excellence.
            </p>
          </div>

          {/* Column 2 - Navigation */}
          <div>
            <h3 className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/40 mb-5">
              Navigation
            </h3>
            <ul className="space-y-3">
              {[
                { label: "About", href: "#about" },
                { label: "Services", href: "#services" },
                { label: "Projects", href: "#projects" },
                { label: "Process", href: "#process" },
                { label: "Contact", href: "#contact" },
              ].map((item) => (
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
              {[
                "Residential Construction",
                "Interior & Exterior Design",
                "Fit-Out Works",
                "Construction & Repairs",
                "Private & Public Projects",
                "Project Management",
              ].map((item) => (
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
                <a
                  href="mailto:3am.constservices@gmail.com"
                  className="text-[13px] text-white/50 hover:text-[#953131] transition-colors duration-300"
                >
                  3am.constservices@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+639556758128"
                  className="text-[13px] text-white/50 hover:text-[#953131] transition-colors duration-300"
                >
                  0955 675 8128
                </a>
              </li>
              <li>
                <a
                  href="tel:+639912620627"
                  className="text-[13px] text-white/50 hover:text-[#953131] transition-colors duration-300"
                >
                  0991 262 0627
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com/3amconstructionph"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] text-white/50 hover:text-[#953131] transition-colors duration-300"
                >
                  facebook.com/3amconstructionph
                </a>
              </li>
              <li className="text-[13px] text-white/30">
                Luzon, Philippines
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-8 border-t border-white/6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[11px] text-white/40">
            &copy; 2018–2026 3AM Construction Services. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="/privacy"
              className="text-[11px] text-white/40 hover:text-white/60 transition-colors duration-300"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-[11px] text-white/40 hover:text-white/60 transition-colors duration-300"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
