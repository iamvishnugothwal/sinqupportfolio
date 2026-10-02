"use client";
import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";

const services = [
  {
    title: "UI/UX Design",
    description:
      "We design clean, modern, and visually appealing digital products that deliver seamless user experiences across all platforms.",
    keys: ["Wireframing", "Prototyping", "User Research", "Interface Design"],
    img: "/img/uiux.webp",
  },
  {
    title: "Web Development",
    description:
      "We build fast, scalable, and SEO-friendly websites tailored to your business needs.",
    keys: [
      "Custom Websites",
      "Responsive & Smooth ",
      "High Performance & Security",
      "SEO Friendly",
    ],
    img: "/img/webdev.webp",
  },
  {
    title: "Search Engine Marketing",
    description:
      "Boost your online visibility and reach the right audience with our data-driven marketing strategies. We help you attract, engage, and convert customers effectively.",
    keys: [
      "Research & audits",
      "On-going SEO",
      "Ad Campaigns",
      "Analytics & Reporting",
    ],
    img: "/img/s4.webp",
  },
];

export default function Services() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  return (
    <ReactLenis root>
      <main
        className="w-full h-full md:px-10  md:py-20  md:pt-32 xl:pt-44 px-5 relative "
        ref={container}
      >
        <div className="lg:space-y-5 mb-10 md:mb-20 flex gap-10 flex-col lg:flex-row lg:justify-between  ">
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="w-full text-5xl uppercase  md:text-6xl lg:text-4xl "
          >
            Our <span className="text-purple-500">services</span>
          </motion.h2>
          <div className="flex flex-col space-y-5 md:space-y-7 ">
            <h3 className="text-2xl font-primary sm:text-3xl lg:text-5xl leading-tight">
              Our area of expertise
            </h3>
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              className="text-lg text-gray-400"
            >
              Every successful brand needs three fundamental pillars: a
              memorable identity that stands out, a digital presence that
              converts, and a strategy that brings the right customers to you.
              At SINQUP, we combine technology, creativity, and strategy to
              create a growth ecosystem, designed to work together and amplify
              your success.
            </motion.p>
          </div>
        </div>
        <section className=" w-full h-full relative ">
          {services.map((service, i) => {
            const targetScale = 1 - (services.length - i) * 0.05;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                url={service?.img}
                keys={service?.keys}
                title={service?.title}
                description={service?.description}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </section>
      </main>
    </ReactLenis>
  );
}
export const Card = ({
  i,
  url,
  keys,
  title,
  description,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });
  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);
  return (
    <div
      ref={container}
      className="h-[80vh] md:h-[60vh] xl:h-[100vh] flex items-center justify-center sticky top-10 md:top-20 xl:top-10 "
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={`flex  py-2 relative -top-[25%] h-[500px]  md:h-[600px] xl:h-[600px] w-full overflow-hidden rounded-2xl text-white origin-top bg-black backdrop-blur-sm shadow-md md:shadow-lg shadow-purple-500/40`}
      >
        <div className="w-full h-full overflow-hidden md:flex gap-5 md:flex-row md:gap-10">
          <div className=" text-container h-full p-5 md:p-10 w-full flex flex-col gap-5  ">
            <h2 className="text-3xl md:text-5xl lg:text-6xl text-purple-500 font-bold tracking-wider">
              {title}
            </h2>
            <p className="text-sm md:text-xl text-gray-300/80 md:mt-2">
              {description}
            </p>
            <hr className="border border-purple-500" />
            <ul className=" text-gray-300 mt-2 pl-2 text-sm md:text-xl">
              {keys.map((key, i) => {
                return (
                  <li key={`key_${i}`} className="my-1 ">
                    <span className="text-purple-500">-</span>
                    {` ${key}`}
                  </li>
                );
              })}
            </ul>
            <Link
              href={"/contact"}
              className="group  flex gap-1 mt-2 border-2 w-max border-purple-500 hover:border-white uppercase text-white hover:bg-white hover:text-black px-4 py-2 rounded-full font-medium"
            >
              Learn More <MdOutlineArrowOutward size={24} />
            </Link>
          </div>
          <div className="img-container w-full h-full hidden overflow-hidden rounded-xl lg:block">
            <motion.div
              initial={{ scale: 1 }}
              whileInView={{ scale: 1.1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
              className="relative w-full h-full min-h-[200px] md:h-[100%] "
            >
              <Image
                style={{ scale: imageScale }}
                fill
                src={url}
                alt="image"
                className="object-fill"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
