"use client";

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaPlus, FaMinus } from 'react-icons/fa'

export interface FAQItem {
  question: string;
  answer: string;
}

export const aboutFaqs: FAQItem[] = [
  {
    question: "1. Do you offer fully customised kitchen designs?",
    answer:
      "Yes! We specialise in designing and creating bespoke kitchens tailored to your personal style, space, lifestyle, and functional needs. From kitchen layouts and cabinetry to countertops, finishes, storage solutions, and accessories, every detail is carefully considered to create a kitchen that is both beautiful and practical.",
  },
  {
    question: "2. Can I customise my kitchen cabinets, materials, and finishes?",
    answer:
      "Absolutely. We offer a range of customisation options, including cabinet styles, colours, materials, textures, handles, finishes, and internal storage configurations. Our team works closely with you to select options that complement your preferred aesthetic while meeting your functional requirements.",
  },
  {
    question: "3. Do you handle complete home interior design and customisation?",
    answer:
      "Yes. We provide comprehensive interior solutions for entire homes, including living rooms, bedrooms, kitchens, dining areas, bathrooms, wardrobes, and other interior spaces. Our goal is to create a cohesive design that reflects your personality, enhances comfort, and maximises functionality throughout your home.",
  },
  {
    question: "4. How does the kitchen or full-home customisation process work?",
    answer:
      "Our process typically begins with an initial consultation to understand your needs, preferences, space, and budget. This is followed by site measurements, design development, material selection, and proposal approval. Once everything is agreed upon, we proceed with production, installation, and final detailing to bring your vision to life.",
  },
  {
    question: "5. How long does a custom kitchen or full-home interior project take?",
    answer:
      "Project timelines vary depending on the size, complexity, materials, and level of customisation required. A custom kitchen may take several weeks, while a complete home interior project may require several months. Following our initial assessment, we provide a project-specific timeline to guide you through each stage.",
  },
  {
    question: "6. Do you work within a client's budget?",
    answer:
      "Yes. We understand that every client has different budget considerations. We work with you to establish a realistic budget and recommend suitable materials, finishes, designs, and solutions that align with your financial expectations without compromising the overall quality and functionality of the project.",
  },
  {
    question: "7. Can you work with my existing kitchen or furniture layout?",
    answer:
      "Certainly. We can work with your existing layout where practical or recommend modifications to improve functionality, storage, movement, and aesthetics. Our team assesses the available space and provides design solutions that make the most of your existing structure.",
  },
  {
    question: "8. Do you provide 3D designs or visualisations before production and installation?",
    answer:
      "Yes. Where included in the project scope, we provide 3D design visualisations to help you understand how your proposed kitchen or interior space will look before execution begins. This allows you to review layouts, colours, materials, and design details and request adjustments before final approval.",
  },
  {
    question: "9. Do you handle delivery and installation of custom kitchens and furniture?",
    answer:
      "Yes. We provide coordinated delivery and professional installation as part of our agreed project scope. Our team pays close attention to measurements, fittings, finishing, and detailing to ensure that every element is properly installed and aligns with the approved design.",
  },
  {
    question: "10. How do I get started on my custom kitchen or full-home interior project?",
    answer:
      "Getting started is simple! Contact us through our website, phone, or social media platforms to schedule an initial consultation. Share your ideas, requirements, project location, and any available space measurements or inspiration images. Our team will guide you through the next steps towards creating a space that is uniquely yours.",
  },
]

export const bedroomFaqs: FAQItem[] = [
  {
    question: "1. What does your bedroom customisation include?",
    answer:
      "We design and build complete bedrooms: beds and headboards, bedside tables, wardrobes, dressers, vanity units, TV walls, wall panelling and study nooks, all tailored to your room’s size and the atmosphere you want.",
  },
  {
    question: "2. Can you design a fully coordinated bedroom suite?",
    answer:
      "Yes. We create one design language across every piece, from the headboard and wall panels to the wardrobe and bedside tables, so the finished room feels calm, cohesive and intentional.",
  },
  {
    question: "3. Do you make custom beds and headboards?",
    answer:
      "We make upholstered, panelled and fluted headboards, including options with integrated lighting and floating bedsides. Beds can also include storage, such as drawers or lift-up bases, for linens and seasonal items.",
  },
  {
    question: "4. Can you design children's and guest bedrooms?",
    answer:
      "Yes. For children's rooms, we use durable finishes, rounded edges and flexible storage that can adapt as they grow. For guest rooms, we focus on comfortable, practical pieces that make visitors feel at home.",
  },
  {
    question: "5. What materials do you use for bedroom furniture?",
    answer:
      "We work with quality engineered boards, wood veneers, lacquers, upholstery fabrics and leathers, with metal or stone accents where they suit the design. We help you choose materials that are durable and easy to care for.",
  },
  {
    question: "6. Can you include a vanity or dressing area in my bedroom?",
    answer:
      "Yes. We can integrate a dressing table with mirror, lighting and drawers into your wardrobe wall or as a standalone piece, designed to match the rest of the room.",
  },
  {
    question: "7. How can you make a small bedroom feel more spacious?",
    answer:
      "We use wall-to-wall built-in storage, floating bedside tables, under-bed storage, mirrored or light finishes and integrated lighting, keeping floor space clear so the room feels larger and more open.",
  },
  {
    question: "8. Do you handle bedroom lighting?",
    answer:
      "We can integrate headboard reading lights, ambient LED strips, wardrobe lighting and bedside switching. We coordinate the lighting plan with your electrician during installation.",
  },
  {
    question: "9. How long does a bedroom project take?",
    answer:
      "A single piece such as a wardrobe or headboard takes a few weeks, while a full bedroom suite takes longer. After our assessment, we provide a timeline for each stage of your project.",
  },
]

export const kitchenFaqs: FAQItem[] = [
  {
    question: "1. What kitchen layouts can you design for my space?",
    answer:
      "We design L-shaped, U-shaped, galley, island, peninsula and open-plan kitchens. After measuring your space, we recommend the layout that gives the smoothest workflow between your sink, cooker and fridge, with enough worktop and walking room for the way your household cooks.",
  },
  {
    question: "2. What cabinet materials and finishes can I choose from?",
    answer:
      "You can choose from matte and high-gloss lacquer, wood veneer, textured laminate, fluted panels and glass-front units, in single colours or two-tone combinations like our Airis and Cloud series. We also help you pick handles, or handle-less push-to-open and profile options for a cleaner look.",
  },
  {
    question: "3. Which countertop options do you offer?",
    answer:
      "We offer quartz, sintered stone, marble-effect surfaces and other durable worktops. We guide you on heat, stain and scratch resistance so your countertop stands up to everyday Nigerian cooking, and we can match backsplashes and islands to the same surface.",
  },
  {
    question: "4. Can you build in my appliances?",
    answer:
      "Yes. We design housings for ovens, microwaves, hobs, extractor hoods, dishwashers, fridges and wine coolers to the manufacturer's dimensions and ventilation requirements. You can supply your own appliances or ask us to recommend options that suit your layout.",
  },
  {
    question: "5. How do you maximise storage in a custom kitchen?",
    answer:
      "We use tall larder units, corner carousels and pull-outs, deep pot-and-pan drawers, internal organisers, cutlery inserts and wall units that run to the ceiling. Every cabinet is planned around what you actually store, so nothing ends up as wasted space.",
  },
  {
    question: "6. Will my kitchen cabinets hold up to heat, steam and humidity?",
    answer:
      "Yes. We use moisture-resistant carcasses, sealed edges and finishes suited to our climate, with extra protection around the sink, hob and dishwasher zones. Hinges and drawer runners are soft-close hardware chosen for daily use.",
  },
  {
    question: "7. Do you include lighting in the kitchen design?",
    answer:
      "We can integrate under-cabinet LED strips for worktop lighting, in-cabinet lights for glass units, toe-kick lighting and sensor lights in drawers and larders. We coordinate the points and switching with your electrician during installation.",
  },
  {
    question: "8. Can you replace an old kitchen in a home I already live in?",
    answer:
      "Yes. We measure your existing space, plan the removal of old units and design around your current plumbing, gas and electrical points, or advise where relocating them would improve the layout. We schedule work to keep disruption to your home as low as possible.",
  },
  {
    question: "9. How long does a custom kitchen take from design to installation?",
    answer:
      "A custom kitchen typically takes several weeks after design approval, depending on its size, materials, countertop and appliances. After our site assessment, we give you a project-specific timeline covering production, delivery and installation.",
  },
]

interface FAQProps {
  faqs?: FAQItem[];
  title?: string;
  subtitle?: string;
  description?: string;
  defaultOpenIndex?: number | null;
  className?: string;
}

function FAQ({
  faqs = aboutFaqs,
  title = "Frequently Asked Questions.",
  subtitle = "FAQs",
  description = "Need something cleared up? Here are our most frequently asked questions.",
  defaultOpenIndex = 0,
  className = "bg-[#f7f3ee] py-14 px-4 sm:px-6 md:py-20 md:py-28 lg:px-4",
}: FAQProps) {
  // Item 1 is open by default (index 0); on click, expands one open at a time
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex)

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <section className={className}>
      <div className="max-w-3xl mx-auto text-center mb-10 md:mb-16">
        {subtitle && (
          <p className="italic text-[#1f2440] text-sm md:text-[26px] mb-4 font-serif">
            {subtitle}
          </p>
        )}
        {title && (
          <h2 className="font-serif text-[#1f2440] text-[28px] sm:text-[32px] md:text-[42px] leading-tight">
            {title}
          </h2>
        )}
        {description && (
          <p className="text-gray-500 text-[14px] md:text-[14px] mt-4 leading-relaxed">
            {description}
          </p>
        )}
      </div>

      <div className="px-0 sm:px-4 md:px-8 lg:px-24">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index
          return (
            <div key={index} className="border-b border-gray-300">
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between gap-3 py-5 text-left sm:py-6 cursor-pointer"
                aria-expanded={isOpen}
              >
                <span className="text-[#1f2440] font-medium text-[14px] sm:text-[16px] md:text-[18px] pr-2 leading-relaxed">
                  {faq.question}
                </span>
                <span className="shrink-0 w-6 h-6 rounded-full border border-gray-400 flex items-center justify-center text-gray-500 text-[10px] sm:text-xs">
                  {isOpen ? <FaMinus /> : <FaPlus />}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-500 text-[13px] sm:text-[15px] md:text-[16px] leading-relaxed pb-5 pr-0 sm:pb-6 sm:pr-8 md:pr-10 whitespace-pre-line">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default FAQ