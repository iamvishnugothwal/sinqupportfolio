"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function TextScroll({ phrase }) {
  const containerRef = useRef(null);

  // track scroll progress for this section

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 50%"],
  });
  const words = phrase.split("");

  return (
    <section ref={containerRef} className="relative">
      <div className="  ">
        {words.map((word, i) => {
          // create a range for each word
          const start = i / words.length;
          const end = (i + 1) / words.length;

          // opacity transforms from 0.2 → 1 as we scroll
          const opacity = useTransform(scrollYProgress, [start, end], [0.2, 2]);

          return (
            <motion.span key={i} style={{ opacity }}>
              {word}
            </motion.span>
          );
        })}
      </div>
    </section>
  );
}
