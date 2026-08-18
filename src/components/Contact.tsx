"use client";

import { useInView } from "@/hooks/useInView";
import { useState, type FormEvent } from "react";

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

interface FormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  projectType?: string;
  message?: string;
}

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = "Name is required";
  if (!data.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Please enter a valid email";
  }
  if (data.phone && !/^[\d\s\-\+\(\)]{7,}$/.test(data.phone)) {
    errors.phone = "Please enter a valid phone number";
  }
  if (!data.projectType) errors.projectType = "Please select a project type";
  if (!data.message.trim()) errors.message = "Message is required";
  return errors;
}

export default function Contact() {
  const { ref, isVisible } = useInView({ threshold: 0.1 });
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setForm((prev) => ({ ...prev, [id]: value }));
    if (errors[id as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [id]: undefined }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitting(true);
    // Simulate submission — replace with actual API call
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setForm({ name: "", email: "", phone: "", projectType: "", message: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="bg-cream py-20 md:py-28 lg:py-36">
      <div ref={ref} className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-16">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-20">
          {/* Left Column - Contact Info */}
          <div
            className={`transition-all duration-700 lg:col-span-2 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="mb-10">
              <div className="mb-5 flex items-center gap-4">
                <span className="block h-px w-10 bg-[#953131]" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#953131]">
                  Get In Touch
                </span>
              </div>
              <h2 className="text-3xl font-bold text-charcoal md:text-4xl lg:text-[2.5rem] leading-[1.1] tracking-[-0.02em] font-display">
                Let&apos;s Start<br />
                Your Project.
              </h2>
              <p className="text-[15px] text-charcoal/60 leading-[1.7] mt-4 max-w-sm">
                Tell us about your project and we&apos;ll get back to you within
                24 hours with a clear plan and transparent pricing.
              </p>
            </div>

            <div className="space-y-5">
              {CONTACT_ITEMS.map((item) => (
                <div key={item.label} className="flex items-start gap-3.5">
                  <span className="mt-0.5 text-[#953131]/80">{item.icon}</span>
                  <span className="text-[14px] font-light text-charcoal/70">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className={`lg:col-span-3 transition-all delay-150 duration-700 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}>
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-[#953131]/10 flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-[#953131]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-charcoal mb-2">Thank You</h3>
                <p className="text-[14px] text-charcoal/50 max-w-sm">
                  Your inquiry has been received. We&apos;ll get back to you
                  within 24 hours with next steps.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-[12px] font-semibold text-[#953131] uppercase tracking-[0.08em] hover:underline"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form className="space-y-7" onSubmit={handleSubmit} noValidate>
                <div className="grid gap-7 sm:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-[11px] font-semibold uppercase tracking-[0.2em] text-charcoal/55"
                    >
                      Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      className={`w-full border-b bg-transparent py-3 text-[15px] text-charcoal outline-none transition-colors ${
                        errors.name ? "border-[#953131]" : "border-charcoal/15 focus:border-[#953131]"
                      }`}
                      placeholder="Your name"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="text-[11px] text-[#953131] mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-[11px] font-semibold uppercase tracking-[0.2em] text-charcoal/55"
                    >
                      Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      className={`w-full border-b bg-transparent py-3 text-[15px] text-charcoal outline-none transition-colors ${
                        errors.email ? "border-[#953131]" : "border-charcoal/15 focus:border-[#953131]"
                      }`}
                      placeholder="your@email.com"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="text-[11px] text-[#953131] mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="text-[11px] font-semibold uppercase tracking-[0.2em] text-charcoal/55"
                  >
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    className={`w-full border-b bg-transparent py-3 text-[15px] text-charcoal outline-none transition-colors ${
                      errors.phone ? "border-[#953131]" : "border-charcoal/15 focus:border-[#953131]"
                    }`}
                    placeholder="Phone number"
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                  />
                  {errors.phone && (
                    <p id="phone-error" className="text-[11px] text-[#953131] mt-1">{errors.phone}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="projectType"
                    className="text-[11px] font-semibold uppercase tracking-[0.2em] text-charcoal/55"
                  >
                    Project Type *
                  </label>
                  <div className="select-wrapper">
                    <select
                      id="projectType"
                      value={form.projectType}
                      onChange={handleChange}
                      className={`w-full appearance-none border-b bg-transparent py-3 pr-8 text-[15px] text-charcoal outline-none transition-colors ${
                        errors.projectType ? "border-[#953131]" : "border-charcoal/15 focus:border-[#953131]"
                      } ${!form.projectType ? "text-charcoal/40" : ""}`}
                      aria-invalid={!!errors.projectType}
                      aria-describedby={errors.projectType ? "project-error" : undefined}
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
                  {errors.projectType && (
                    <p id="project-error" className="text-[11px] text-[#953131] mt-1">{errors.projectType}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-[11px] font-semibold uppercase tracking-[0.2em] text-charcoal/55"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    className={`w-full resize-none border-b bg-transparent py-3 text-[15px] text-charcoal outline-none transition-colors ${
                      errors.message ? "border-[#953131]" : "border-charcoal/15 focus:border-[#953131]"
                    }`}
                    placeholder="Tell us about your project"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="text-[11px] text-[#953131] mt-1">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="bg-[#953131] px-8 py-3.5 text-[12px] font-semibold uppercase tracking-[0.1em] text-white transition-all hover:bg-[#A93E3E] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? "Sending..." : "Send Inquiry"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
