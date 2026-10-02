"use client";
import Header from "@/components/Header";
import Image from "next/image";
import ScrollBaseAnimation from "../../../components/uilayouts/scroll-text-marque";
import Footer from "@/components/Footer";
import Contactform from "@/components/ui/Contactform";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
export default function contactus() {
  return (
    <div className="relative w-full h-full ">
      <div className="w-full ">
        <Header />
      </div>
      <section id="hero" className="relative w-full h-[80vh]  ">
        <Image
          src={"/img/contactbanner.webp"}
          alt="Contact us"
          fill
          className="object-center object-cover xl:object-fill "
        />
        <div className=" w-full h-full max-w-3xl font-semibold px-10 font-primary mx-auto text-4xl lg:text-6xl xl:text-7xl z-5 relative text-white  flex flex-col justify-center  ">
          <div className="">Let's Work</div>
          <div className="flex justify-end text-purple-600">Together</div>
        </div>
      </section>
      <div className="bg-white  gap-5 md:gap-10 grid place-content-center">
        <ScrollBaseAnimation
          delay={500}
          baseVelocity={-3}
          clasname="font-primary uppercase p-3 md:p-5 text-2xl md:text-7xl text-black flex gap-10 xl:text-8xl font-semibold bg-white "
        >
          <span className="text-black">
            {" "}
            Contact <span className="text-purple-600">Us</span>{" "}
          </span>
          <span className="text-black">
            {" "}
            Contact <span className="text-purple-600">Us</span>{" "}
          </span>
        </ScrollBaseAnimation>
      </div>
      <section className="relative w-full min-h-[100vh] max-w-7xl mx-auto overflow-hidden my-20">
        <div className="absolute right-5 bottom-0 md:bottom-20 -z-1">
          <div className="relative w-[300px] h-[300px] rotate-180 ">
            <Image
              src={"/img/shap5.webp"}
              alt="shape"
              fill
              className="object-cover object-center opacity-20"
            />
          </div>
        </div>
        <div className="absolute left-0 md:top-20 -z-1">
          <div className="relative w-[300px] h-[300px] rotate-45 ">
            <Image
              src={"/img/shap2.webp"}
              alt="shape"
              fill
              className="object-cover object-center opacity-20"
            />
          </div>
        </div>
        <div className="w-full px-5 pt-20 ">
          <div className="space-y-10">
            <h1 className="text-3xl md:text-6xl font-bold text-center lg:leading-normal">
              Ready to transform Your Intentions into Reality ?
            </h1>
            <p className="md:text-lg max-w-3xl mx-auto text-center ">
              Whether you’re starting fresh or scaling your brand, our team is
              here to guide you. Fill out the form or reach us through the
              details below. We usually respond within 24 hours.
            </p>
          </div>
        </div>
        <div className="xl:w-full w-full md:w-[90%] mx-auto xl:flex justify-between my-10 md:my-20 space-y-20 xl:space-y-0">
          <div className="w-full ">
            <Contactform />
          </div>
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="w-full  h-full px-10 space-y-5 md:space-y-10 "
          >
            <div className=" flex gap-5 items-center">
              <IoLocationOutline size={32} />
              <div className="">
                <div className="text-purple-500 text-2xl font-medium font-primary">
                  Location
                </div>
                <div className=" text-lg flex items-center gap-1 ">
                  Remote, we serve worldwide :)
                </div>
              </div>
            </div>
            <div className=" flex gap-5 items-center">
              <MdOutlineAlternateEmail size={28} />
              <div className="">
                <div className=" text-purple-500 text-2xl font-medium font-primary">
                  Email
                </div>
                <div className=" text-lg flex items-center gap-1 ">
                  sinqup.studio@gmail.com
                </div>
              </div>
            </div>
            <hr className=" border-white/40" />
            <div className="grid grid-cols-1 lg:grid-cols-3 l gap-5">
              <a
                href="https://www.instagram.com/sinqup.studio"
                target="_blank"
                className="px-4 py-2 rounded-lg border-2 flex-col flex gap-2 hover:text-pink-600"
              >
                <div className="flex font-primary items-center gap-2">
                  <FaInstagram size={28} className="text-pink-600" />
                  Instagram
                </div>
              </a>
              <a
                href="https://www.linkedin.com/company/sinqup-studio/"
                target="_blank"
                className="px-4 py-2 rounded-lg border-2 flex-col flex gap-5 hover:text-blue-600"
              >
                <div className="flex font-primary items-center gap-2">
                  <FaLinkedinIn size={28} className="text-blue-600" />
                  LinkedIn
                </div>
              </a>
              <a
                href="#"
                target="_blank"
                className="px-4 py-2 rounded-lg border-2 flex-col flex gap-5"
              >
                <div className="flex font-primary items-center gap-2 xl:text-white/50 hover:text-white">
                  <FaXTwitter size={28} className="text-white" />
                  Twitter
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
