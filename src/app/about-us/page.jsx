"use client";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa";
import { MdOutlineArrowOutward } from "react-icons/md";
import ScrollText from "@/components/ui/ScrollText";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ScrollBaseAnimation from "../../../components/uilayouts/scroll-text-marque";
import Footer from "@/components/Footer";

const process = [
  {
    stepName: "SYNC",
    description:
      "We start by understanding your business inside out through strategic conversations about your vision, goals, and customers.",
    deliverables: [
      "Your unique value and what makes you different",
      "Who your ideal customers are and what they need",
      "Your competition and market opportunities",
      "How you want people to feel about your brand",
    ],
    outcome:
      "By the end, we're completely aligned on your direction and ready to bring your vision to life.",
  },
  {
    stepName: "DESIGN",
    description:
      "Using everything we learned in the Sync phase, we create your complete visual identity and website design.",
    deliverables: [
      "Brand identity (logo, colors, typography, visual style)",
      "Website user interface and user experience design",
      "Mockups and layouts designed for your specific audience",
      "Revisions based on your feedback until you're 100% happy",
    ],
    outcome:
      "Once you approve the designs, we're ready to build your digital presence.",
  },
  {
    stepName: "DEVELOPMENT",
    description:
      "With approved designs in hand, we build your website using modern technology that's fast, secure, and user-friendly.",
    deliverables: [
      "Responsive website that works perfectly on all devices",
      "Fast-loading pages optimized for search engines",
      "Any functionality you need (forms, booking, e-commerce)",
      "Thorough testing to ensure everything works smoothly",
    ],
    outcome:
      "After launch, your website is ready to start attracting and converting customers.",
  },
  {
    stepName: "GROW",
    description:
      "Now that your brand and website are live, we focus on getting you found by the right people and tracking your success.",
    deliverables: [
      "Strategic SEO to improve your search visibility",
      "Analytics to track visitor behavior and conversions",
      "Content optimization for better search rankings",
      "Targeted campaigns if you need faster results",
    ],
    outcome:
      "This ongoing work ensures your investment continues to generate results and grows with your business.",
  },
];

const coreServices = [
  {
    id: 1,
    img: "/img/s1.webp",
    title: "Creative Branding",
    description:
      "We create brand identities that make you memorable—from strategy and storytelling to visual elements that connect with your audience.",
  },
  {
    id: 2,
    img: "/img/s2.webp",
    title: "UI/UX & Web Development",
    description:
      "We design and build websites that look great and work flawlessly—fast, user-friendly, and optimized to turn visitors into customers.",
  },
  {
    id: 3,
    img: "/img/s3.webp",
    title: "Search Engine Marketing",
    description:
      "While others chase rankings, we focus on revenue—connecting you with people who are ready to buy what you're building.",
  },
];

const faqs = [
  {
    question: "Do you work with individuals or only businesses?",
    answer:
      "Both. We work with brands, startups, and also professionals such as consultants, designers, creators, and artists who want to build a strong digital presence.",
  },
  {
    question: "Can I hire you for standalone services?",
    answer:
      "Yes, absolutely. While we often deliver complete branding and digital solutions, you can also work with us for specific services like web design, web development, or SEO depending on your needs.",
  },
  {
    question: "Do you also offer additional services beyond websites?",
    answer:
      "Yes. Along with websites, we also support businesses with services like SEO strategy, digital branding, and creative consulting to strengthen your online presence.",
  },
  {
    question: "Will I get to be involved in the creative process?",
    answer:
      "Definitely. We believe the best results come from collaboration. You’ll receive regular updates, and your feedback will be included at every stage to ensure the final outcome truly represents your brand.",
  },
];

export default function AboutPage() {
  const whywe =
    " Because great founders should not struggle to connect with the customers who need them most.";
  const processtext = " How we sync together?";
  const servicetext = "What we can do for you?";
  return (
    <div className="relative w-full h-full ">
      <div className="w-full">
        <Header />
      </div>
      {/* hero section */}
      <main className="relative w-full  px-5 h-[90vh] md:min-h-screen pt-16 md:pt-32 xl:pt-0 xl:flex justify-center items-center  ">
        {/* floating image in bg start */}
        <div className="absolute md:right-40 md:top-40 -z-1">
          <div className="relative w-[200px] h-[200px] ">
            <Image
              src={"/img/shap1.webp"}
              alt="shape"
              fill
              className="object-cover object-center opacity-20"
            />
          </div>
        </div>
        <div className="absolute md:left-32 bottom-0 -z-1">
          <div className="relative w-[300px] h-[300px] ">
            <Image
              src={"/img/shap5.webp"}
              alt="shape"
              fill
              className="object-cover object-center opacity-14"
            />
          </div>
        </div>
        {/* floating image in bg end */}

        <div className="w-full max-w-7xl space-y-5 md:space-y-20 xl:space-y-20 mx-auto pt-16 md:pt-32 lg:pt-40 xl:pt-52 ">
          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="font-primary text-5xl md:text-7xl pb-3 md:pb-0"
          >
            About Us
          </motion.h1>
          <div className="space-y-5 md:space-y-10">
            <motion.h2
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className=" lg:max-w-4xl xl:max-w-6xl text-lg lg:text-5xl xl:text-4xl lg:leading-[70px] xl:leading-[50px] font-light"
            >
              <span className="bg-white font-medium font-primary text-black text-base md:text-lg lg:text-3xl xl:text-lg  px-3 py-1 mr-2 relative -z-1 inline-block w-max rounded-full -rotate-8 md:-rotate-8">
                WE'RE
              </span>
              a team of creative minds who came together to form SINQUP, A
              Virtual Creative Branding Studio that blends creativity,
              technology, and strategy to help ambitious founders grow.
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col xl:flex-row xl:items-center space-y-10 gap-5 justify-between "
            >
              <p className=" md:max-w-4xl xl:max-w-3xl text-white/80 text-sm  md:text-3xl xl:text-lg">
                We love working with founders and businesses who want to make a
                real impact. Whether you're just starting out or ready to take
                things to the next level, we're here to help you build something
                that truly connects with the people who matter most to your
                success.
              </p>
              <div className="">
                <Link
                  href="/contact"
                  className="md:text-xl xl:text-base w-max tracking-widest h-max px-6 py-3 border-2 font-primary font-medium border-white rounded-full hover:bg-white hover:text-black transition"
                >
                  Let's Sync Up
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </main>
      {/* Why we exist section */}
      <section className="relative w-full max-w-7xl mx-auto h-full pt-20 md:py-20 mt-10 overflow-hidden md:mt-40 px-5">
        <div className="absolute left-0 top-0 -z-1">
          <div className="relative w-[200px] h-[200px] ">
            <Image
              src={"/img/shap3.webp"}
              alt="shape"
              fill
              className="object-cover object-center opacity-20"
            />
          </div>
        </div>
        <div className="absolute right-0 md:-right-20 bottom-0 md:top-40 -z-1">
          <div className="relative w-[200px] h-[200px] ">
            <Image
              src={"/img/shap5.webp"}
              alt="shape"
              fill
              className="object-cover object-center opacity-20"
            />
          </div>
        </div>
        <div className=" space-y-5 md:space-y-10">
          <div className="">
            <motion.h2
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl  "
            >
              Why we exist <span className="text-purple-500">?</span>
            </motion.h2>
          </div>
          <div className="flex justify-end ">
            <motion.h3 className=" font-bold max-w-4xl text-2xl md:text-4xl xl:text-5xl text-white relative font-primary">
              <ScrollText phrase={whywe} />
            </motion.h3>
          </div>
          <div className="md:flex justify-end">
            <p className="w-full md:max-w-4xl  md:text-xl  text-white/90">
              Too many talented founders are building incredible products and
              services but struggling to reach the people who actually need
              them. It's not that their businesses aren't good enough, they just
              lack the right creative strategy to stand out in a crowded digital
              world. We exist to bridge that gap, helping visionary founders
              transform their intention into experience that get seen, and
              chosen by the right audience.
            </p>
          </div>
        </div>
      </section>
      {/* Our process section */}
      <section className="relative w-full max-w-7xl mx-auto h-full py-20 xl:pt-32 px-5 overflow-hidden">
        <div className="absolute -right-5 md:right-40 top-60  md:top-40 -z-1">
          <div className="relative w-[200px] md:w-[300px] h-[200px] md:h-[300px] ">
            <Image
              src={"/img/shap8.webp"}
              alt="shape"
              fill
              className="object-cover object-center opacity-20"
            />
          </div>
        </div>
        <div className="absolute left-10 md:left-30 top-10 md:top-10 -z-1">
          <div className="relative w-[100px] md:w-[200px] h-[100px] md:h-[200px] ">
            <Image
              src={"/img/shap6.webp"}
              alt="shape"
              fill
              className="object-cover object-center opacity-14"
            />
          </div>
        </div>
        <div className="w-full flex flex-col-reverse lg:flex-row justify-between gap-20">
          <div className="left w-full space-y-5 xl:space-y-10">
            <div className="">
              <motion.h2
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl tracking-wider  "
              >
                Our
                <span className="text-purple-500"> Process </span>
              </motion.h2>
            </div>
            <div className="space-y-5">
              <h3 className=" font-bold w-full max-w-2xl leading-tight text-4xl sm:text-5xl font-primary relative">
                <ScrollText phrase={processtext} />
              </h3>
              <p className="w-full max-w-2xl text-white/90 md:text-lg ">
                Every great partnership starts with understanding. Here's how we
                work together to turn your intention into results that matter.
              </p>
            </div>
            <div className="py-2 md:py-0">
              <Accordion type="single" collapsible>
                {process.map((process, i) => {
                  return (
                    <motion.div
                      className=""
                      initial={{ opacity: 0, y: 100 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      viewport={{ once: true, amount: 0.2 }}
                      key={i}
                    >
                      <AccordionItem
                        value={`item-${i + 1}`}
                        className={
                          "border-b-1 border-white/10 pb-2 md:pb-4 lg:pb-5"
                        }
                      >
                        <AccordionTrigger
                          className={
                            "uppercase text-left text-xl md:text-2xl lg:text-3xl xl:text-4xl"
                          }
                        >
                          <div className="flex gap-2 items-end ">
                            <span className=" text-3xl md:text-6xl ">
                              0{i + 1}.
                            </span>
                            {process.stepName}
                          </div>
                        </AccordionTrigger>
                        <AccordionContent
                          className={` w-[90%] md:max-w-3xl xl:max-w-5xl mx-auto `}
                        >
                          {process.description}
                          {
                            <ul className="text-sm md:text-xl space-y-2 mt-4 list-disc list-inside">
                              {process.deliverables.map((item, i) => {
                                return (
                                  <li key={`key_${i}`} className=" ">
                                    {` ${item}`}
                                  </li>
                                );
                              })}
                            </ul>
                          }
                        </AccordionContent>
                      </AccordionItem>
                    </motion.div>
                  );
                })}
              </Accordion>
            </div>
          </div>
        </div>
      </section>
      {/* Our services section */}

      <section className="relative w-full max-w-7xl mx-auto h-full overflow-hidden ">
        <div className="absolute left-0 top-0 -z-1">
          <div className="relative w-[300px] h-[300px] ">
            <Image
              src={"/img/shap4.webp"}
              alt="shape"
              fill
              className="object-cover object-center opacity-30"
            />
          </div>
        </div>
        <div className="absolute right-5 bottom-0 md:-bottom-20 -z-1">
          <div className="relative w-[300px] h-[300px] rotate-45 ">
            <Image
              src={"/img/shap5.webp"}
              alt="shape"
              fill
              className="object-cover object-center opacity-20"
            />
          </div>
        </div>
        <div className="">
          <div className="  space-y-5 px-5">
            <div className="">
              <motion.h2
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="text-2xl md:text-3xl tracking-wider  "
              >
                Core
                <span className="text-purple-500"> Services </span>
              </motion.h2>
            </div>
            <div className="space-y-5 ">
              <h3 className=" font-bold w-full max-w-[400px] leading-tight text-4xl sm:text-5xl font-primary relative">
                <ScrollText phrase={servicetext} />
              </h3>
              <p className=" max-w-2xl text-white/90 md:text-lg ">
                Consider us your creative co-pilots, we sync with your rhythm,
                understand your goals, and execute the branding and marketing
                you envision.
              </p>
            </div>
          </div>
          <div className=" my-10">
            <div className="grid grid-cols-1 p-5 lg:grid-cols-3 gap-8">
              {coreServices.map((service, i) => {
                return (
                  <div
                    key={i + service.id}
                    className="group flex flex-col   overflow-hidden"
                  >
                    <div className="overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform ">
                      {/* Image */}
                      <div className="relative w-full h-60 md:h-96 lg:h-60 overflow-hidden">
                        <Image
                          src={service.img}
                          alt="branding services"
                          fill
                          className="w-full  object-cover transition-transform duration-300 group-hover:scale-[1.1]"
                        />
                      </div>
                      {/* Content */}
                      <div className="py-4 px-1 space-y-2 md:space-y-5">
                        <h2 className="title text-lg md:text-xl flex gap-2 text-purple-500 font-medium ">
                          <span className="text-sm text-white opacity-70">
                            {service.id}.
                          </span>{" "}
                          {service.title}
                        </h2>
                        <p className="text-white/70">{service.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
      <section className="whyUs my-10">
        <div className=" md:h-[400px] gap-5 md:gap-10 grid place-content-center">
          <ScrollBaseAnimation
            delay={500}
            baseVelocity={-3}
            clasname="font-primary p-3 md:p-5 text-2xl md:text-5xl  xl:text-6xl  "
          >
            <div className="flex gap-10">
              <div className="">
                Why Choose <span className="text-purple-500">Us?</span>
              </div>
              <div className="">
                Why Choose <span className="text-purple-500">Us?</span>
              </div>
            </div>
          </ScrollBaseAnimation>
          <ScrollBaseAnimation
            delay={500}
            baseVelocity={3}
            clasname="font-primary text-2xl md:text-3xl xl:text-4xl p-3 md:p-5"
          >
            <div className="flex gap-5">
              <div className="border-2 border-white text-white px-5 py-1 rounded-full">
                Creativity
              </div>
              <div className="border-2 border-purple-500 text-purple-500 px-5 py-1 rounded-full">
                Technology
              </div>
              <div className=" border-2 border-yellow-500 text-yellow-500 px-5 py-1 rounded-full">
                Intention
              </div>
            </div>
          </ScrollBaseAnimation>
        </div>
      </section>
      {/* Friquently Asked Question */}
      <section className="relative w-full max-w-7xl mx-auto h-full overflow-hidden py-10  mt-10 md:mt-20 ">
        <div className="absolute left-0 top-0 -z-1">
          <div className="relative w-[300px] h-[300px] ">
            <Image
              src={"/img/shap2.webp"}
              alt="shape"
              fill
              className="object-cover object-center opacity-30"
            />
          </div>
        </div>
        <div className="absolute right-5 bottom-0 md:-bottom-20 -z-1">
          <div className="relative w-[300px] h-[300px] rotate-45 ">
            <Image
              src={"/img/shap8.webp"}
              alt="shape"
              fill
              className="object-cover object-center opacity-20"
            />
          </div>
        </div>
        <div className=" space-y-5 px-5">
          <div className="max-w-4xl">
            <motion.h2
              initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-3xl md:text-7xl tracking-wider font-primary font-bold"
            >
              Friquently Asked
              <span className="text-purple-500"> Questions?</span>
            </motion.h2>
          </div>
        </div>
        <div className="my-10 px-5">
          <Accordion type="single" collapsible>
            {faqs.map((faq, i) => {
              return (
                <motion.div
                  className=""
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  viewport={{ once: true, amount: 0.2 }}
                  key={i}
                >
                  <AccordionItem
                    value={`item-${i + 1}`}
                    className={
                      "border-b-1 border-white/10 pb-2 md:pb-4 lg:pb-5"
                    }
                  >
                    <AccordionTrigger
                      className={
                        "font-poppins text-left sm:text-xl md:text-2xl font-medium xl:text-4xl"
                      }
                    >
                      <div className="flex gap-2 items-end ">
                        {faq.question}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className={``}>
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              );
            })}
          </Accordion>
        </div>
      </section>
      {/* Contact us section */}
      <section
        id="contact"
        className="w-full min-h-screen pb-10 md:py-10 px-3 md:px-5 "
      >
        <div className="w-full h-full grid gap-10 grid-cols-1 xl:grid-cols-2">
          <div className="relative w-full p-5 lg:p-10 h-[50vh] xl:h-[70vh] overflow-hidden bg-[url('/img/contactus-bg.webp')] bg-cover bg-center rounded-2xl">
            <div className="relative w-[90%] h-full font-primary z-1 text-xl md:text-6xl xl:text-4xl leading-tight">
              Your next growth phase starts here.
            </div>
            <Link
              href={"/contact"}
              className="group relative z-1 bottom-14  px-5 xl:px-3 py-2  flex items-center w-max  gap-2 font-medium hover:font-medium text-md md:text-3xl xl:text-lg hover:bg-white  hover:text-black hover:scale-[1.1] rounded-full border-2 border-white  transition"
            >
              Let's Collaborate
              <MdOutlineArrowOutward className=" text-2xl font-primary md:text-3xl rounded-full" />
            </Link>
            <div className="absolute inset-0 bg-black/10 backdrop-blur-xs opacity-[80%]"></div>
          </div>
          <div className="relative w-full p-5 lg:p-10 h-[50vh] xl:h-[70vh] overflow-hidden bg-[url('/img/followus-bg.webp')] bg-cover bg-center rounded-2xl">
            <div className="relative w-[90%] h-full font-primary z-1 text-xl md:text-5xl xl:text-4xl leading-tight">
              Watch us build the future, one brand at a time.
            </div>
            <Link
              href={"https://www.instagram.com/sinqupstudio/"}
              className="group relative z-1 bottom-14 px-5 xl:px-3 py-2  flex items-center w-max hover:font-medium gap-2 uppercase text-xl md:text-3xl xl:text-lg hover:bg-white hover:text-black hover:scale-[1.1] rounded-full border-2 border-white  transition"
            >
              {" "}
              <span>
                <FaInstagram className="text-3xl  md:text-4xl xl:text-3xl rounded-full" />
              </span>
              Follow Us
            </Link>
            <div className="absolute inset-0 bg-black/5 backdrop-blur-sm opacity-[80%]"></div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
