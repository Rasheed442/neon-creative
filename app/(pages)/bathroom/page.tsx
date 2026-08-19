"use client";

import Header from '@/components/Header'
import Image from 'next/image'
import { bathimages } from '@/contants'
import { motion, AnimatePresence } from 'framer-motion';
import { FaBoxOpen, FaMinus, FaPlus } from 'react-icons/fa';
import { useState } from 'react';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

function Page() {
    const categories = [
  "All",
  "Wall Mounted & Floating",
  "Free Standing",

];

const faqs = [
  {
    question: "What types of Bathroom  do you offer?",
    answer:
      "We offer a range of modern bathroom styles designed for durability, natural light, ventilation, and contemporary interiors.",
  },
  {
    question: "Can I customize the size and design of my Bathroom?",
    answer:
      "",
  },
  {
    question: "What materials are your windows and doors made from?",
    answer:
      "",
  },
  {
    question: "Are your doors suitable for bathrooms?",
    answer:
      "",
  },
  {
    question: "Do you offer installation services?",
    answer:
      "",
  },
  {
    question: "Are your Bathroom energy efficient?",
    answer:
      "",
  },
  {
    question: "Can I match my windows and doors to my bathroom vanity?",
    answer:
      "",
  },
  {
    question: "How do I choose the right Bathroom for my space?",
    answer:
      "",
  },
]


  const [openIndices, setOpenIndices] = useState<Set<number>>(new Set([0]))
    const toggle = (index: number) => {
    setOpenIndices((prev) => {
      const next = new Set(prev)
      if (next.has(index)) {
        next.delete(index)
      } else {
        next.add(index)
      }
      return next
    })
  }
const projects = [
  {
    image: bathimages.bath1,
    label: "Cilan Series Red Light Luxury Bathroom Cabinet Floating Vanity – OBV24P01",
    categories: ["Wall Mounted & Floating", "Free Standing"],
  },
  {
    image: bathimages.bath2,
    label: "Cloud Series Modern Luxury Bathroom Cabinet Floating Vanity – OBV24L02",
    categories: ["Wall Mounted & Floating", "Free Standing"],
  },
  {
    image: bathimages.bath3,
    label: "Contemporary Floating Bathroom Vanity with LED Mirror Cabinet – OBV24L05",
    categories: ["Wall Mounted & Floating", "Free Standing"],
  },
  {
    image: bathimages.bath4,
    label: "Modern Floating Bathroom Vanity with LED Mirror – OBV24L04",
    categories: ["Wall Mounted & Floating", "Free Standing"],
  },
  {
    image: bathimages.bath5,
    label: "Modern Floating Vanity in Textured Melamine Finish OBV23-M01",
    categories: ["Wall Mounted & Floating", "Free Standing"],
  },
  {
    image: bathimages.bath6,
    label: "Modern Gray Wall-Mounted Bathroom Vanity with Mirror Cabinet – OBV24L03",
    categories: ["Wall Mounted & Floating", "Free Standing"],
  }

]

  const [activeCategory, setActiveCategory] = useState("All");
  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.categories.includes(activeCategory));

  return (
    <div>
           <div className="h-[70vh] sm:h-[75vh] md:h-[80vh] relative">
              {/* Background image layer */}
              <div className="absolute inset-0 -z-10">
                <Image
                  src={bathimages.bathbg}
                  alt="background"
                  fill
                  priority
                  className="object-cover transition-opacity duration-700 ease-in-out"
                />
              </div>
        
              {/* Overlay for contrast */}
              <div className="absolute inset-0 -z-10 bg-black/30" />
        
              {/* Header */}
                <Header />
        
              {/* Hero text */}
              <div className="relative z-10 min-h-[50vh] sm:min-h-[55vh] md:min-h-[60vh] flex flex-col items-center justify-end text-center px-4">
                <h2 className="font-serif text-white text-[26px] sm:text-[32px] font-semibold md:text-[44px] lg:text-[56px]">
                  Bathroom Vanities
                </h2>
                <p className="text-gray-300 text-[13px] sm:text-[14px] md:text-[17px] mt-3 md:mt-4 ">
                  Customised bathroom cabinets in your style, make your bathroom a total refresh look.
                </p>
              </div>
            </div>

            <div className='bg-[#F7F4EF] px-4 sm:px-6 md:px-14 py-12 sm:py-16 md:py-24'>
                 <motion.div 
        className="flex flex-wrap items-center justify-center md:justify-start gap-1.5 sm:gap-1 mb-6 md:mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {categories.map((category) => {
          const isActive = category === activeCategory;
          return (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-2.5 rounded text-[12px] sm:text-[13px] md:text-[15px] border border-gray-200 font-normal cursor-pointer transition-colors ${
                isActive
                  ? "bg-[#1f1f1f] text-white"
                  : "bg-white text-[#2E2E2E] hover:bg-gray-100"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          );
        })}
      </motion.div>

      {/* Grid or Empty State */}
      {filteredProjects.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col items-center justify-center text-center py-16 sm:py-20 md:py-28 rounded px-4"
        >
          <FaBoxOpen className="text-gray-300 mb-4 animate-bounce" size={48} />
          <p className="font-serif text-[#1f1f1f] text-[18px] sm:text-[20px] md:text-[24px]">
            No projects yet in {activeCategory}
          </p>
          <p className="text-gray-500 text-[13px] sm:text-[14px] md:text-[15px] mt-2 max-w-xs">
            We&apos;re still adding pieces to this collection — check back soon
            or explore another category.
          </p>
        </motion.div>
      ) : (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.label}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative w-full h-[220px] sm:h-[280px] md:h-[420px] overflow-hidden group cursor-pointer"
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src={project.image}
                  alt={project.label}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-x-0 bottom-0 min-h-10 sm:h-12 bg-black/10 backdrop-blur-sm flex items-center justify-center px-2 py-1.5">
                  <p className="text-white font-sans text-[11px] sm:text-[12px] md:text-[13px] font-medium text-center leading-snug line-clamp-2">
                    {project.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}
            </div>

              <div className="max-w-3xl mx-auto text-center py-10 md:py-16 px-4">
       
        <h2 className="font-serif text-[#1f2440] text-[26px] sm:text-[32px] md:text-[38px] leading-tight">
          FAQs about Modern Bathroom Vanity
        </h2>
        <p className="text-[#2E2E2E] text-[14px] md:text-[15px] mt-4">
          Oppolia has continued to provide dependable quality bathroom vanities to all of our clients. 
          We take pleasure in being one of the firms that work hard to guarantee that all of your 
          demands are addressed. When it comes to custom vanity makers, we are the ones to call.
        </p>
      </div>

        <div className="px-4 sm:px-8 md:px-16 lg:px-24 pb-12 md:pb-24">
              {faqs.map((faq, index) => {
                const isOpen = openIndices.has(index)
                return (
                  <div key={index} className="border-b border-gray-300">
                    <button
                      onClick={() => toggle(index)}
                      className="w-full flex items-center justify-between py-4 md:py-6 text-left"
                    >
                      <span className="text-[#1f2440] font-medium text-[15px] sm:text-[16px] md:text-[18px] pr-4">
                        {faq.question}
                      </span>
                      <span className="shrink-0 w-6 h-6 rounded-full border border-[#1f2440] flex items-center justify-center text-[#1f2440] text-xs">
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
                          <p className="text-gray-500 text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed pb-6 pr-4 sm:pr-8 md:pr-10">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
    </div>
    <CallToAction />
    <Footer/>
    </div>
  )
}

export default Page
