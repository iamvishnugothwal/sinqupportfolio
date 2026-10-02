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
export default function Home() {
  return (
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
