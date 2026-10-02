// src/app/refund-policy/page.jsx

"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function RefundPolicy() {
  return (
    <div className="relative w-full min-h-screen py-20 md:pt-32 lg:pt-40">
      <div className="w-full">
        <Header />
      </div>
      <div className="max-w-5xl mx-auto">
        <h1 className="font-poppins text-4xl lg:text-5xl font-bold  mb-6">
          Refund Policy
        </h1>
        <p className="text-sm text-gray-400 mb-12">
          Effective Date: [30th August, 2025]
        </p>

        <div className="space-y-8 text-base leading-relaxed pb-20">
          <section>
            <h2 className="font-poppins text-2xl font-semibold  mb-3">
              1. General Policy
            </h2>
            <p>
              At SINQUP, our services are tailored and project-based. Because
              each project involves significant time, effort, and resources, all
              payments made for services are considered final and non-refundable
              once work has commenced.
            </p>
          </section>

          <section>
            <h2 className="font-poppins text-2xl font-semibold  mb-3">
              2. Deposits & Advance Payments
            </h2>
            <p>
              Advance deposits paid to secure a project are non-refundable. They
              represent a commitment of time and resources allocated
              specifically to your project.
            </p>
          </section>

          <section>
            <h2 className="font-poppins text-2xl font-semibold  mb-3">
              3. Cancellations
            </h2>
            <p>
              If you decide to cancel a project before work begins, you may
              request a refund of any payment made, excluding non-refundable
              deposits. Once work has started, no refunds will be issued for
              cancellations initiated by the client.
            </p>
          </section>

          <section>
            <h2 className="font-poppins text-2xl font-semibold  mb-3">
              4. Service Delivery Issues
            </h2>
            <p>
              If SINQUP fails to deliver the agreed-upon services due to reasons
              solely attributable to us, we may, at our discretion, offer a
              partial or full refund. Each case will be reviewed individually.
            </p>
          </section>

          <section>
            <h2 className="font-poppins text-2xl font-semibold  mb-3">
              5. Dispute Resolution
            </h2>
            <p>
              Any concerns regarding payments, cancellations, or refunds should
              be raised with us directly. We aim to resolve disputes amicably
              and fairly in line with this policy.
            </p>
          </section>
          <section>
            <h2 className="font-poppins text-2xl font-semibold  mb-3">
              5. Contact us
            </h2>
            <p>
              For any concerns regarding payments, cancellations, or refunds,
              You can reach us at:{" "}
              <a
                href="mailto:sinqup.support@gmail.com"
                className="text-purple-400 underline"
              >
                sinqup.studio@gmail.com
              </a>
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
