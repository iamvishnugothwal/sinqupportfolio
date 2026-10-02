"use client";

import { motion } from "framer-motion";
import ScrollText from "./ui/ScrollText";
import Link from "next/link";

export default function WhyUs() {
  const phrase =
    "Our work isn't just about looking good—it's growth-driven. We believe what separates a pretty website from a profitable one is its ability to turn visitors into customers. Every brand element, website feature, and marketing strategy we create starts with one question: will this help your business grow? We think strategically through everything we do at SINQUP, because great design without results is just expensive art.";

  return (
    <section className="relative py-20  w-full h-full md:h-[60vh] xl:h-[100vh]  flex items-center justify-center bg-[url('/img/whyus-bg.webp')] bg-cover bg-center">
      {/* Liquid Glass Overlay */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-xs"></div>

      {/* Content */}

      <div className="relative w-full max-w-[1400px] text-center text-white flex flex-col gap-5">
        <div className="relative text-xl md:text-3xl xl:text-4xl px-5 leading-tight ">
          <ScrollText phrase={phrase} className={"relative"} />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-8"
        >
          <Link
            href={"/contact"}
            className="mt-5 text-xl px-6 py-3 border-2 border-white rounded-xl text-white hover:bg-white hover:text-black hover:font-medium transition"
          >
            Start Your Project
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
