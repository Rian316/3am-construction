import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for 3AM Construction Services",
};

export default function PrivacyPage() {
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
          Privacy Policy
        </h1>

        <div className="space-y-8 text-[15px] text-charcoal/70 leading-[1.8]">
          <section>
            <h2 className="text-lg font-bold text-charcoal mb-3">1. Information We Collect</h2>
            <p>
              When you contact us through our website form, we collect the information you provide,
              including your name, email address, phone number, project type, and message content.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-charcoal mb-3">2. How We Use Your Information</h2>
            <p>
              We use the information you provide to respond to your inquiries, provide project
              estimates, and communicate about potential construction services. We do not sell or
              share your personal information with third parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-charcoal mb-3">3. Data Security</h2>
            <p>
              We implement appropriate security measures to protect your personal information.
              However, no method of transmission over the internet is completely secure, and we
              cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-charcoal mb-3">4. Cookies</h2>
            <p>
              Our website may use basic cookies to improve your browsing experience. You can
              choose to disable cookies through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-charcoal mb-3">5. Third-Party Services</h2>
            <p>
              We may use third-party services such as Google Analytics to understand website
              traffic and usage patterns. These services may collect information sent by your
              browser as part of a web page request.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-charcoal mb-3">6. Changes to This Policy</h2>
            <p>
              We reserve the right to update this privacy policy at any time. Changes will be
              posted on this page with an updated revision date.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-charcoal mb-3">7. Contact Us</h2>
            <p>
              If you have questions about this privacy policy, please contact us at{" "}
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
