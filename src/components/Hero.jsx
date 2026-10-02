"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className=" min-h-screen  flex items-center justify-center px-4 md:px-6 lg:px-20 xl:px-10 py-20 md:py-0">
      <div className="w-full flex flex-col  space-y-4 sm:space-y-8">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="w-full max-w-7xl mx-auto h-max text-5xl md:text-7xl md:space-y-10 leading-40 font-primary pt-20 md:pt-32 xl:pt-24 "
        >
          <div className="flex flex-col md:flex-row md:gap-5 items-center md:items-baseline uppercase">
            <span className="text-base  sm:text-lg text-purple-500 font-poppins tracking-wider font-thin">
              A Virtual
            </span>
            <span className="border-b-2 w-28 lg:w-40 border-purple-500 hidden md:block"></span>
            <span className="leading-normal"> creative</span>
          </div>

          <div className="flex flex-col md:flex-row md:gap-5 items-center md:items-baseline md:justify-end uppercase">
            <span className="leading-normal ">Branding</span>
            <span className="border-b-2 w-28 lg:w-40 border-purple-500 hidden md:block"></span>
            <span className="text-base  sm:text-lg text-purple-500 font-poppins tracking-wider font-thin">
              studio
            </span>
          </div>
        </motion.h1>

        <div className="flex flex-col lg:flex-row gap-10 mt-5 md:mt-14 w-full max-w-7xl mx-auto ">
          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="w-full text-gray-400 sm:text-lg xl:text-xl text-center md:text-left leading-normal md:leading-loose "
          >
            <span className="bg-white font-primary text-black text-sm md:text-md tracking-widest px-3 py-1 mr-2 md:font-medium relative -z-1 inline-block w-max rounded-lg -rotate-4 ">
              We Sync
            </span>
            with founders to transform their intention into experience that can
            be seen, felt, and chosen by the right audience, with creative
            branding and smooth websites.
          </motion.p>
          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="w-full md:w-[40%] flex justify-center items-center  "
          >
            <Link
              href="/contact"
              className="md:text-lg xl:text-base w-max tracking-widest h-max px-6 py-3 border-2 font-medium border-white rounded-full hover:bg-white hover:text-black transition"
            >
              Let's Sync Up
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
