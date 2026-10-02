// src/app/terms-of-use/page.jsx

"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function TermsOfUse() {
  return (
    <div className="w-full relative min-h-screen py-20 md:pt-32 lg:pt-40">
      <div className="w-full">
        <Header />
      </div>
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
          Terms of Use
        </h1>

        <div className="space-y-8 text-base leading-relaxed my-20">
          <section>
            <h2 className="text-2xl font-semibold  mb-3">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using the website of{" "}
              <span className="text-[#7c3aed] font-semibold">SINQUP</span>, you
              agree to comply with and be bound by these Terms of Use. If you do
              not agree, please do not use our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold  mb-3">2. Use of Website</h2>
            <p>
              You may use our website only for lawful purposes and in a manner
              that does not infringe the rights of, restrict, or inhibit anyone
              else’s use of the website. Unauthorized use of this website may
              give rise to a claim for damages or be a criminal offense.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold  mb-3">
              3. Intellectual Property
            </h2>
            <p>
              All content, design, graphics, logos, and materials on this
              website are the intellectual property of SINQUP unless otherwise
              stated. You may not reproduce, distribute, or use them without
              prior written consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold  mb-3">
              4. Third-Party Links
            </h2>
            <p>
              Our website may contain links to external sites. We are not
              responsible for the content or practices of those sites and
              encourage you to review their terms separately.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold  mb-3">5. Disclaimer</h2>
            <p>
              The information on our website is provided for general purposes
              only. While we strive for accuracy, we make no warranties
              regarding completeness, reliability, or suitability. Your use of
              any information or materials is at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold  mb-3">
              6. Limitation of Liability
            </h2>
            <p>
              SINQUP will not be held liable for any direct, indirect, or
              consequential damages arising from the use of our website or
              services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold  mb-3">
              7. Updates to Terms
            </h2>
            <p>
              We may update these Terms of Use at any time. Continued use of our
              website after changes means you accept the revised terms.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
