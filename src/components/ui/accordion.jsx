"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "lucide-react";

import { cn } from "@/lib/utils";

function Accordion({ ...props }) {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      {...props}
      className="mb-5"
    />
  );
}

function AccordionItem({ className, ...props }) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("mb-8", className)}
      {...props}
    />
  );
}

function AccordionTrigger({ className, children, ...props }) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          " focus-visible:ring-ring/50 flex flex-1 font-primary font-bold justify-between items-center rounded-md py-4  font-normal transition-all outline-none  disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>svg]:rotate-180 ",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDownIcon className="text-white/70 pointer-events-none size-8 shrink-0 translate-y-0.5 transition-transform duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({ className, children, ...props }) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down text-white/80  overflow-hidden pr-5 sm:text-lg lg:text-xl "
      {...props}
    >
      <div className={cn("pt-0 pb-4", className)}>{children}</div>
    </AccordionPrimitive.Content>
  );
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
