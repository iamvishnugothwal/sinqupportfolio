"use client";
import { motion } from "framer-motion";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We're a strategic creative branding and marketing studio specializing in three core areas: Branding, Web Development, and Search Engine Marketing (SEO, Google Ads, local search optimization). We help businesses build strong brands and drive growth through strategic creative solutions.",
  },

  {
    question: "How long does a typical branding project take?",
    answer:
      "Brand identity projects typically take 3-6 weeks, depending on complexity. This includes strategy development, design exploration, refinements, and final deliverable preparation. Rush timelines are possible for an additional fee.",
  },
  {
    question: "What's the timeline for website development?",
    answer:
      "Simple custom websites usually take 2-4 weeks, while complex sites with custom functionality, can span several weeks. We'll provide a detailed timeline during project planning. We aim to be efficient without sacrificing quality.",
  },
  {
    question: "Do you work with clients remotely?",
    answer:
      "We're a fully virtual creative Team of designers, Developers, and Marketing Experts. We work exclusively remotely with clients worldwide. This virtual-first approach allows us to tap into top talent regardless of location and offer our services to businesses anywhere. We're equipped with cutting-edge collaboration tools and proven processes that make remote work feel seamless and personal.",
  },
  {
    question: "Is an advance payment required to start?",
    answer:
      "Yes, We usually take 50% upfront and 50% upon completion for smaller projects. Larger projects may be broken into milestone payments. All payment terms are clearly outlined in our contracts. It keeps things fair and ensures both sides are invested from the start.",
  },
  {
    question: "Do you offer refunds?",
    answer: `We do not offer refunds once we start, the time and resources are already rolling. Kindly read our refund policy and contact sinqup.studio@gmail.com for further assistant.`,
  },
  {
    question: "How quickly can I get an estimate?",
    answer:
      "We don't like keeping you hanging! Once we get what you need, we'll pull together the right team, do our homework, and have a solid proposal in your hands within 24 hours.",
  },
];

export default function Faqs() {
  return (
    <section
      id="faqs"
      className=" px-4 md:px-6 py-10 md:py-10 lg:py-20 overflow-x-hidden"
    >
      <div className="my-10 w-full max-w-7xl mx-auto  ">
        <div className="space-y-5 mb-10 md:mb-20 ">
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            className="text-3xl md:text-5xl leading-[50px] "
          >
            Frequently Asked Questions{" "}
            <span className="text-purple-500">?</span>
          </motion.h2>
        </div>
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
                  className={"border-b-1 border-white/30 pb-2 "}
                >
                  <AccordionTrigger
                    className={
                      "text-left text-lg  md:text-2xl lg:text-3xl xl:text-4xl"
                    }
                  >
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className={`w-full max-w-6xl`}>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            );
          })}
        </Accordion>
      </div>
    </section>
  );
}
