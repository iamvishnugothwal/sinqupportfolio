"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Mail } from "lucide-react";

export default function ConstructionPage() {
  const [mounted, setMounted] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setMounted(true);

    // Dynamic Progress Calculation
    // Start Date: Feb 22, 2026
    // Launch Date: March 15, 2026
    // Total Days: 21
    // Logic: Today (Feb 22) is 79%, March 15 is 100%. 1% increase per day.

    const calculateProgress = () => {
      const targetDate = new Date("2026-03-15");
      const today = new Date();

      // Calculate difference in days
      const diffTime = targetDate - today;
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

      // If diffDays is 21 (Feb 22), progress is 100 - 21 = 79
      // If diffDays is 0 (March 15), progress is 100
      let currentProgress = 100 - diffDays;

      // Clamp between 0 and 100
      currentProgress = Math.min(100, Math.max(0, currentProgress));
      return currentProgress;
    };

    // Staggered animation entry
    const timer = setTimeout(() => {
      setProgress(calculateProgress());
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative min-h-screen w-full py-10 overflow-hidden bg-[#050505] text-white flex flex-col items-center justify-center font-poppins selection:bg-blue-500/30">
      {/* Noise Effect Overlay */}
      <div className="absolute inset-0 z-[1] opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[5%] left-[5%] md:top-[5%] md:left-[5%] h-[300px] w-[300px] md:h-[600px] md:w-[600px] rounded-full bg-blue-600/90 blur-[100px] md:blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.08, 0.15, 0.08],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[5%] right-[5%] md:bottom-[5%] md:right-[5%] h-[300px] w-[300px] md:h-[600px] md:w-[600px] rounded-full bg-purple-600/90 blur-[100px] md:blur-[120px]"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-full bg-[#050505]/40 backdrop-blur-[2px] z-[2]" />
      </div>

      <main className="relative z-10 flex flex-col items-center text-center px-4 w-full max-w-6xl">
        {/* Logo Animation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10"
        >
          <Image
            src="/img/logo2.webp"
            alt="SINQUP Logo"
            width={180}
            height={50}
            className="object-contain brightness-110 h-auto w-32 md:w-44"
            priority
          />
        </motion.div>

        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mb-8"
        >
          <Badge
            variant="outline"
            className="px-4 py-1.5 border-white/10 bg-white/5 backdrop-blur-md text-[#60a5fa] animate-pulse"
          >
            <span className="mr-2 h-1.5 w-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]" />
            UPGRADING EXPERIENCE
          </Badge>
        </motion.div>

        {/* Main Content */}
        <div className="overflow-hidden mb-6">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl font-black font-primary tracking-tighter leading-[0.95] md:leading-[0.9]"
          >
            THE SITE IS ON <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white/90 to-white/30">
              CONSTRUCTION
            </span>
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="max-w-2xl text-sm md:text-lg text-white/50 mb-8 font-light tracking-wide leading-relaxed px-4"
        >
          We're refining our digital home to match the quality of our work.
          Expect a seamless, world-class experience very soon.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="text-lg md:text-2xl font-light tracking-[0.3em] text-white/80"
        >
          AVAILABLE SOON
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 1 }}
          className="mt-5 flex flex-col items-center gap-6"
        >
          <p className="text-[10px] uppercase tracking-[0.4em] text-white/20 font-bold">
            Stay Connected
          </p>
          <div className="flex gap-8 md:gap-12">
            <a
              href="mailto:sinqup.studio@gmail.com"
              className="group flex items-center gap-2 relative text-[10px] md:text-xs tracking-[0.2em] uppercase text-white/40 hover:text-white transition-all duration-300"
            >
              <Mail className="size-6" />
              Mail Us
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-blue-500 transition-all duration-300 group-hover:w-full" />
            </a>
          </div>
        </motion.div>
      </main>

      {/* Decorative Orbs Fixed */}
      <div className="fixed top-0 right-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-blue-500/5 blur-[100px] md:blur-[180px] -mr-[150px] -mt-[150px] pointer-events-none" />
      <div className="fixed bottom-0 left-0 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-purple-500/5 blur-[100px] md:blur-[180px] -ml-[150px] -mb-[150px] pointer-events-none" />
    </div>
  );
}
