"use client";

import Header from "@/components/Header";
import Image from "next/image";
import { whbgimages } from "@/contants";
import { motion, AnimatePresence } from "framer-motion";
import { FaBoxOpen, FaMinus, FaPlus } from "react-icons/fa";
import { useState } from "react";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

function Page() {
  const categories = ["All", "Whole House Solution", "Apartments", "Villas"];

  const faqs = [
    {
      question: "What is a Whole house customized design?",
      answer:
        ""
    },
    {
      question: "What is the proccess of getting a whole house cutomized design?",
      answer: ""
    },
    {
      question: "How long does a Whole-house customized design project take?",
      answer: ""
    },
    {
      question: "What is the cost of a whole-house customized design",
      answer: ""
    },
  
  ];

  const [openIndices, setOpenIndices] = useState<Set<number>>(new Set([0]));
  const toggle = (index: number) => {
    setOpenIndices((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };
  const projects = [
    {
      image: whbgimages.wh1,
      label:
        "ONE STOP TO GET WHOLE HOUSE FURNITURE.",
      categories: ["Whole House Solution", "Apartments"]
    },
    {
      image: whbgimages.wh2,
      label:
        "Cilan Series Modern Elegance Italian Style Contemporary Interior Design – OB24AP03",
      categories: ["Whole House Solution", "Apartments"]
    },
    {
      image: whbgimages.wh3,
      label: "Como Series Modern Beige and Walnut Whole-House Design",
      categories: ["Whole House Solution", "Apartments"]
    },
    {
      image: whbgimages.wh4,
      label:
        "Contemporary Home Design with Custom Joinery OB23-Villa01",
      categories: ["Whole House Solution", "Villas"]
    },
    {
      image: whbgimages.wh5,
      label: "Cream Interior Design Warm White Fitted Furniture OB23-Apart02",
      categories: ["Whole House Solution", "Villas"]
    },
    {
      image: whbgimages.wh6,
      label: "Cybel Series Modern Whole House Interior Design – OB24AP09",
      categories: ["Whole House Solution", "Villas"]
    }
  ];

  const [activeCategory, setActiveCategory] = useState("All");
  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.categories.includes(activeCategory));

  return (
    <div>
      <div className="h-[80vh] relative">
        {/* Background image layer */}
        <div className="absolute inset-0 -z-10">
          <Image
            src={whbgimages.whbg}
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
        <div className="relative z-10 min-h-[60vh] flex flex-col items-center justify-end text-center px-4">
          <h2 className="font-serif text-white text-[32px] font-semibold md:text-[44px] lg:text-[56px]">
            Whole House Solution
          </h2>
          <p className="text-gray-300 text-[14px] capitalize md:text-[17px] mt-4 ">
          ONE STOP TO GET WHOLE HOUSE FURNITURE.
          </p>
        </div>
      </div>

      <div className="bg-[#F7F4EF] px-4 py-12 sm:px-8 md:px-10 lg:px-14 lg:py-24">
        <motion.div
          className="flex flex-wrap items-center justify-center md:justify-start gap-1 mb-6 md:mb-6"
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
                className={`px-4 md:px-6 py-2 md:py-2.5 rounded text-[13px] md:text-[15px] border border-gray-200 font-normal cursor-pointer transition-colors ${
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
            className="flex flex-col items-center justify-center text-center py-20 md:py-28 rounded"
          >
            <FaBoxOpen
              className="text-gray-300 mb-4 animate-bounce"
              size={60}
            />
            <p className="font-serif text-[#1f1f1f] text-[20px] md:text-[24px]">
              No projects yet in {activeCategory}
            </p>
            <p className="text-gray-500 text-[14px] md:text-[15px] mt-2 max-w-xs">
              We&apos;re still adding pieces to this collection — check back
              soon or explore another category.
            </p>
          </motion.div>
        ) : (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
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
                  className="relative w-full h-[300px] md:h-[420px] overflow-hidden group cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                >
                  <Image
                    src={project.image}
                    alt={project.label}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-12 bg-black/10 backdrop-blur-sm flex items-center justify-center">
                    <p className="text-white text-center font-sans text-[13px] md:text-[13px] font-medium">
                      {project.label}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </div>

      <div className="max-w-3xl mx-auto text-center px-4 py-12 sm:px-6 md:px-8 md:py-16">
        <h2 className="font-serif text-[#1f2440] text-[28px] sm:text-[32px] md:text-[38px] leading-tight">
          FAQs about Whole House Solution
        </h2>
        <p className="text-[#2E2E2E] text-[14px] md:text-[14px] mt-4 leading-relaxed">
         Whole house design refers to the comprehensive planning and coordination of architectural, interior, and landscaping
          elements of a residential property. It involves integrating various aspects of design to create a cohesive and harmonious living environment that meets the functional and aesthetic needs of the homeowners.
        </p>
      </div>

      <div className="px-4 pb-12 sm:px-6 md:px-10 lg:px-24 lg:pb-24">
        {faqs.map((faq, index) => {
          const isOpen = openIndices.has(index);
          return (
            <div key={index} className="border-b border-gray-300">
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between py-6 text-left"
              >
                <span className="text-[#1f2440] font-medium text-[16px] md:text-[18px] pr-4">
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
                    <p className="text-gray-500 text-[15px] md:text-[16px] leading-relaxed pb-6 pr-10">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
      <CallToAction />
      <Footer />
    </div>
  );
}

export default Page;
