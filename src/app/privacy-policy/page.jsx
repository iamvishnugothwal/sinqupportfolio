// src/app/privacy-policy/page.jsx

"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function PrivacyPolicy() {
  return (
    <div className="relative min-h-screen  text">
      <div className="w-full ">
        <Header />
      </div>
      <div className="max-w-6xl mx-auto pt-20 md:pt-32 lg:pt-40">
        {/* Heading */}
        <h1 className="text-4xl lg:text-5xl font-bold  mb-6 font-poppins">
          Privacy Policy
        </h1>

        {/* Content */}
        <div className="space-y-8 text-base leading-relaxed py-20">
          <section>
            <h2 className="  text-2xl font-semibold  mb-3">Introduction</h2>
            <p>
              Thank you for taking the time to review our Privacy Policy. At{" "}
              <span className="text-[#7c3aed] font-semibold">SINQUP</span>, we
              are committed to keeping your personal information safe and
              secure. We collect certain information about our clients and
              website visitors, including both identifiable personal information
              and non-identifiable information. <br /> <br /> Identifiable
              personal data is collected when you contact us through our website
              forms or share project details with us. Non-identifiable data,
              such as analytics information, is collected automatically when you
              visit our website. <br /> <br />
              This Privacy Policy explains what information we collect, why we
              collect it, and how we use it. In most cases, we collect this
              information to communicate effectively with you, understand your
              needs, and provide you with the best possible service.
            </p>
          </section>

          <section>
            <h2 className="  text-2xl font-semibold  mb-3">Confidentiality</h2>
            <p>
              SINQUP respects your privacy. All personal information you provide
              while interacting with us is kept confidential. We do not sell,
              rent, or trade your personal information to third parties for
              marketing or commercial purposes.
            </p>
          </section>

          <section>
            <h2 className="  text-2xl font-semibold  mb-3">
              Collection of Personal Data
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Submitting an inquiry through our website</li>
              <li>Sharing project requirements with us</li>
              <li>Communicating with us via email, phone, or other channels</li>
            </ul>
            <p className="mt-4">
              We may collect your name, email, phone number, project details,
              and any additional information you provide. We also collect
              non-identifiable analytics data (such as device type, browser, and
              pages visited) to improve your experience on our website.
            </p>
          </section>

          <section>
            <h2 className="  text-2xl font-semibold  mb-3">
              Use of Personal Data
            </h2>
            <p>
              The information we collect is used solely for responding to your
              inquiries, understanding your project requirements, communicating
              with you about our services, and improving our website. We do not
              use your information for unsolicited marketing or advertising
              campaigns.
            </p>
          </section>

          <section>
            <h2 className="  text-2xl font-semibold  mb-3">
              Third-Party Services
            </h2>
            <p>
              We may use trusted third-party providers to host our website,
              manage contact forms, or analyze performance. These providers only
              access the information necessary to perform their tasks and are
              obligated to protect your data.
            </p>
          </section>

          <section>
            <h2 className="  text-2xl font-semibold  mb-3">Data Security</h2>
            <p>
              We take reasonable measures to protect your data from unauthorized
              access, misuse, or disclosure. However, no method of online
              storage or transmission is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="  text-2xl font-semibold  mb-3">Site Links</h2>
            <p>
              Our website may contain links to third-party sites. We are not
              responsible for the privacy practices or content of those
              websites. Please review their policies separately.
            </p>
          </section>

          <section>
            <h2 className="  text-2xl font-semibold  mb-3">Minors</h2>
            <p>
              Our services are intended for individuals aged 18 and above. We do
              not knowingly collect data from minors. If you believe a minor has
              provided us with personal information, please contact us to remove
              it.
            </p>
          </section>

          <section>
            <h2 className="  text-2xl font-semibold  mb-3">Legal Disclosure</h2>
            <p>
              We may disclose your personal information if required by law, to
              comply with legal obligations, protect our rights, or assist law
              enforcement in investigating illegal activities.
            </p>
          </section>

          <section>
            <h2 className="  text-2xl font-semibold  mb-3">
              Updates to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. The updated
              version will be posted on this page with a new effective date. We
              encourage you to review this page regularly.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
