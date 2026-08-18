"use client";

import { useInView } from "@/hooks/useInView";

const PROJECT_TYPES = [
  "Residential Construction",
  "Interior & Exterior Design",
  "Fit-Out Works",
  "Construction & Repairs",
  "Private & Public Projects",
  "Project Management",
];

const CONTACT_ITEMS = [
  {
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    label: "3am.constservices@gmail.com",
  },
  {
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    label: "armelmanipol@yahoo.com",
  },
  {
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    label: "0955 675 8128",
  },
  {
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    label: "0991 262 0627",
  },
  {
    icon: (
      <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    label: "facebook.com/3amconstructionph",
  },
  {
    icon: (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    label: "Luzon, Philippines",
  },
];

export default function Contact() {
  const { ref, isVisible } = useInView({ threshold: 0.1 });

  return (
    <section className="bg-cream py-16 md:py-24 lg:py-32">
      <div ref={ref} className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">
        <div className="grid gap-10 lg:grid-cols-5 lg:gap-16">
          {/* Left Column - Contact Info */}
          <div
            className={`transition-all duration-700 lg:col-span-2 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="mb-10">
              <div className="mb-4 flex items-center gap-4">
                <span className="block h-px w-12 bg-gold" />
                <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-gold">
                  Get In Touch
                </span>
              </div>
              <h2 className="text-2xl font-bold text-charcoal md:text-3xl lg:text-4xl">
                Start Your Project Today
              </h2>
            </div>

            <div className="space-y-5">
              {CONTACT_ITEMS.map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <span className="mt-0.5 text-gold/60">{item.icon}</span>
                  <span className="text-[14px] font-light text-charcoal/70">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <form
            className={`space-y-6 transition-all delay-150 duration-700 lg:col-span-3 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-[11px] font-medium uppercase tracking-[0.2em] text-charcoal/40"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full border-b border-charcoal/15 bg-transparent py-3 text-[14px] text-charcoal outline-none transition-colors focus:border-gold"
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-[11px] font-medium uppercase tracking-[0.2em] text-charcoal/40"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full border-b border-charcoal/15 bg-transparent py-3 text-[14px] text-charcoal outline-none transition-colors focus:border-gold"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="phone"
                className="text-[11px] font-medium uppercase tracking-[0.2em] text-charcoal/40"
              >
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                className="w-full border-b border-charcoal/15 bg-transparent py-3 text-[14px] text-charcoal outline-none transition-colors focus:border-gold"
                placeholder="Phone number"
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="project-type"
                className="text-[11px] font-medium uppercase tracking-[0.2em] text-charcoal/40"
              >
                Project Type
              </label>
              <select
                id="project-type"
                className="w-full appearance-none border-b border-charcoal/15 bg-transparent py-3 text-[14px] text-charcoal outline-none transition-colors focus:border-gold"
                defaultValue=""
              >
                <option value="" disabled>
                  Select project type
                </option>
                {PROJECT_TYPES.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-[11px] font-medium uppercase tracking-[0.2em] text-charcoal/40"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full resize-none border-b border-charcoal/15 bg-transparent py-3 text-[14px] text-charcoal outline-none transition-colors focus:border-gold"
                placeholder="Tell us about your project"
              />
            </div>

            <button
              type="submit"
              className="bg-charcoal px-8 py-3 text-[13px] font-semibold uppercase tracking-[0.06em] text-white transition-colors hover:bg-charcoal-light"
            >
              Send Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
