export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 lg:px-16 py-10 md:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13 3L2 12H5V22H11V16H15V22H21V12H24L13 3Z" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <path d="M7 4L13 0L19 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <text x="8" y="18" fill="currentColor" fontSize="6" fontWeight="bold" fontFamily="sans-serif">3AM</text>
              </svg>
              <span className="text-xs font-bold tracking-widest">3AM CONSTRUCTION SERVICES</span>
            </div>
            <p className="text-[13px] text-white/40 leading-relaxed">
              Delivering exceptional construction and design solutions with precision, integrity, and excellence since inception.
            </p>
          </div>

          {/* Column 2 - Navigation */}
          <div>
            <h3 className="text-[11px] font-semibold tracking-wider uppercase text-white/60 mb-3">Navigation</h3>
            <ul className="space-y-2">
              {["About", "Services", "Projects", "Process", "Team", "Contact"].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-[13px] text-white/40 hover:text-burgundy-light transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h3 className="text-[11px] font-semibold tracking-wider uppercase text-white/60 mb-3">Services</h3>
            <ul className="space-y-2">
              {[
                "Residential Construction",
                "Interior & Exterior Design",
                "Fit-Out Works",
                "Construction & Repairs",
                "Private & Public Projects",
                "Project Management",
              ].map((item) => (
                <li key={item}>
                  <a href="#services" className="text-[13px] text-white/40 hover:text-burgundy-light transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3 className="text-[11px] font-semibold tracking-wider uppercase text-white/60 mb-3">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:info@3amconstruction.com" className="text-[13px] text-white/40 hover:text-burgundy-light transition-colors">
                  info@3amconstruction.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="text-[13px] text-white/40 hover:text-burgundy-light transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li>
                <a href="tel:+1234567891" className="text-[13px] text-white/40 hover:text-burgundy-light transition-colors">
                  +1 (234) 567-891
                </a>
              </li>
              <li>
                <a href="https://facebook.com/3amconstruction" target="_blank" rel="noopener noreferrer" className="text-[13px] text-white/40 hover:text-burgundy-light transition-colors">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-white/8 text-center">
          <p className="text-[11px] text-white/30">
            &copy; {new Date().getFullYear()} 3AM Construction Services. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
