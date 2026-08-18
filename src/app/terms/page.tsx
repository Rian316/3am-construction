import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for 3AM Construction Services",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-white py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-8 h-[1px] bg-[#953131]" />
          <span className="text-[10px] font-semibold tracking-[0.3em] text-[#953131] uppercase">
            Legal
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl font-bold text-charcoal tracking-tight mb-10">
          Terms of Service
        </h1>

        <div className="space-y-8 text-[15px] text-charcoal/70 leading-[1.8]">
          <section>
            <h2 className="text-lg font-bold text-charcoal mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing and using the 3AM Construction Services website, you accept and agree
              to be bound by these Terms of Service. If you do not agree to these terms, please
              do not use our website.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-charcoal mb-3">2. Services</h2>
            <p>
              3AM Construction Services provides construction, design, and project management
              services in Luzon, Philippines. Information on this website is for general
              informational purposes and does not constitute a binding offer of services.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-charcoal mb-3">3. Accuracy of Information</h2>
            <p>
              We strive to keep the information on our website accurate and up-to-date. However,
              we make no warranties or representations regarding the completeness, accuracy, or
              reliability of any information on this site.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-charcoal mb-3">4. Intellectual Property</h2>
            <p>
              All content on this website, including text, images, logos, and design elements,
              is the property of 3AM Construction Services and is protected by applicable
              intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-charcoal mb-3">5. Limitation of Liability</h2>
            <p>
              3AM Construction Services shall not be held liable for any indirect, incidental,
              or consequential damages arising from the use of this website or reliance on any
              information provided herein.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-charcoal mb-3">6. Governing Law</h2>
            <p>
              These terms are governed by and construed in accordance with the laws of the
              Philippines. Any disputes shall be resolved in the appropriate courts of Luzon,
              Philippines.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-charcoal mb-3">7. Contact</h2>
            <p>
              For questions about these Terms of Service, contact us at{" "}
              <a href="mailto:3am.constservices@gmail.com" className="text-[#953131] hover:underline">
                3am.constservices@gmail.com
              </a>
              .
            </p>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-charcoal/8">
          <p className="text-[12px] text-charcoal/45">
            Last updated: August 2026
          </p>
          <Link href="/" className="inline-flex items-center gap-2 mt-4 text-[12px] font-semibold text-[#953131] uppercase tracking-[0.08em] hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
