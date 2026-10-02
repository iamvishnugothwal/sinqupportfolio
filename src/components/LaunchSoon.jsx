"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaMailchimp } from "react-icons/fa";
import Image from "next/image";

export default function LaunchSoon() {
  // Target date: Sept 2, 2025 10:00am IST
  const targetDate = new Date("2025-09-02T10:00:00+05:30").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: "--",
    hours: "--",
    mins: "--",
    secs: "--",
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, mins: 0, secs: 0 });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          mins: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          secs: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <main className="relative w-full h-screen overflow-hidden  text-white">
      <video
        className="absolute inset-0 w-full h-full object-cover "
        src="/vid/chess.mp4" // replace with your path
        autoPlay
        loop
        muted
        playsInline
      />
      <div className="absolute inset-0 bg-black/80 backdrop-blur-xs "></div>
      <header className=" relative flex justify-between py-10 px-5 md:px-10">
        <Image
          src={"/img/logo2.webp"}
          alt="logo"
          width={150}
          height={50}
          className="object-contain"
        />
        <a
          href="https://www.instagram.com/sinqupstudio/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 font-medium border-2 hover:bg-white hover:text-black px-4 rounded-lg"
        >
          <FaInstagram className="inline text-2xl" />
          Follow Us
        </a>
      </header>

      <section className="relative space-y-10 w-[90%] h-full min-h-[50vh]  gap-10 text-center mx-auto pt-20 md:pt-32 ">
        <h2 className="text-lg w-[90%] mx-auto md:text-xl lg:text-2xl font-poppins text-center ">
          We're almost ready to <span className="font-medium">sync up</span>{" "}
          with world.
        </h2>
        <h1 className="text-5xl md:text-6xl lg:text-8xl uppercase font-poppins font-bold">
          Launching Soon
        </h1>
        <div className="max-w-xl  mx-auto leading-[30px] ">
          {" "}
          <p className="">For founders who know their idea deserves better.</p>
          <p className=""> For Ideas that deserve to be seen.</p>
          <p className=""> For Individuals who want to make an impact.</p>
        </div>
      </section>
    </main>
  );
}
