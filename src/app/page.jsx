"use client";

// import LaunchSoon from "@/components/LaunchSoon";

import Whyus from "@/components/Whyus";
import Faqs from "@/components/Faqs";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { GoogleTagManager } from '@next/third-parties/google'
export default function Home() {
  return (
    return <GoogleTagManager gtmId="GTM-XYZ" />
    <div className="w-full min-h-screen   ">
      {/* <LaunchSoon /> */}
      <div className="w-full">
        <Header />
      </div>
      <Hero />
      <Work />
      <Services />
      <Whyus />
      <Faqs />
      <Contact />
      <Footer />
    </div>
  );
}
