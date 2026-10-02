"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";
import { Projects } from "@/data/projects";
import Image from "next/image";

export default function Work() {
  return (
    <section id="work" className=" px-3 md:px-10 py-20 pt-24 xl:pt-44 ">
      <div className="w-full space-y-10 mx-auto">
        {/* Heading */}
        <div className="lg:space-y-5 mb-10 md:mb-20 flex gap-10 flex-col lg:flex-row lg:justify-between  ">
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
            className="w-full text-4xl uppercase sm:text-3xl md:text-4xl "
          >
            Featured <span className="text-purple-500">work</span>
          </motion.h2>
          <div className="flex flex-col space-y-5 md:space-y-7 ">
            <h3 className="text-2xl font-primary sm:text-3xl lg:text-5xl leading-tight">
              Work That Speaks Before You Do
            </h3>
            <motion.p
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-lg text-gray-400"
            >
              What you see here isn’t just design work. It’s creativity,
              strategy, and execution coming together to build brands that grow.
            </motion.p>
          </div>
        </div>

        <div className="w-full grid grid-cols-5 gap-10 md:gap-20  mx-auto ">
          {/* item 1 */}
          {Projects.map((items) => {
            return (
              <div
                key={items.id}
                className={`group  relative w-full ${items.orientation === "horizontal-full" ? "col-span-5" : items.orientation === "horizontal" ? "col-span-5 xl:col-span-3" : "col-span-5 xl:col-span-2"} h-[400px] md:h-[500px] xl:h-[600px]  bg-center bg-cover overflow-hidden rounded-lg `}
              >
                <div className="absolute inset-0 bg-black/10 w-full h-full z-1"></div>
                <Image
                  src={items.image}
                  alt={items.title}
                  fill
                  className="object-cover z-0"
                />
                <h3
                  className={`absolute z-10 top-10 left-5 md:left-10 font-primary ${items.orientation === "horizontal-full" ? "text-4xl md:text-5xl lg:text-6xl " : items.orientation === "horizontal" ? "text-4xl md:text-5xl lg:text-6xl xl:text-5xl" : "text-4xl md:text-5xl lg:text-6xl xl:text-4xl"}`}
                >
                  {items.title}
                </h3>
                <div className="hidden md:w-[50%] z-10 md:flex absolute bottom-10 left-10 flex-wrap gap-2 text-sm md:text-lg font-thin">
                  {items.badges.map((badge) => (
                    <span
                      key={badge}
                      className="border-2 border-white px-4 py-1 rounded-full bg-black/30 backdrop-blur-sm"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
                <div
                  className={` absolute bottom-5 z-10 md:bottom-10 left-[5%] md:left-[70%] lg:left-[75%] ${items.orientation === "horizontal-full" ? " xl:left-[80%]" : items.orientation === "horizontal" ? "xl:left-[75%]" : "xl:left-[62%]"}`}
                >
                  <Link
                    href={items.link}
                    className="w-max group px-3 py-2 flex items-center  gap-2 uppercase  text-md hover:bg-white hover:text-black hover:scale-[1.1] rounded-full border-2 border-white  transition font-medium"
                  >
                    Visit Website
                    <span>
                      <MdOutlineArrowOutward className="text-3xl rounded-full" />
                    </span>
                  </Link>
                </div>
              </div>
            );
          })}

          <div
            className={`group relative col-span-5 xl:col-span-2 w-full h-[400px] bg-[url('/img/contactus-bg.webp')] bg-cover bg-center md:h-[600px]  to-white  overflow-hidden rounded-lg flex items-center  `}
          >
            {" "}
            {/* Overlay */}
            <div className="absolute inset-0 "></div>
            {/* Content */}
            <div className="relative text-center text-white space-y-2 bg-black/10 backdrop-blur-sm w-[80%] h-[50%] m-auto flex flex-col justify-center items-center rounded-2xl">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-primary uppercase">
                Coming soon
              </h3>
              <p className="">Exciting projects are on the way 🚀</p>
              <Link
                href="/contact"
                className=" block mx-auto md:text-lg xl:text-base w-max tracking-widest font-medium uppercase h-max px-6 py-3 border-2 hover:border-white border-purple-500 rounded-full hover:bg-white hover:text-black transition mt-10"
              >
                Start Your Project
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
