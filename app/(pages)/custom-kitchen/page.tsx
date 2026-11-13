"use client";

import Header from '@/components/Header'
import Image from 'next/image'
import { cust2, cust1, cust3, kitchbg, cust6, cust5, cust4 } from '@/contants'
import { motion, AnimatePresence } from 'framer-motion';
import { FaBoxOpen } from 'react-icons/fa';
import { useState } from 'react';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import FAQ, { kitchenFaqs } from '@/components/Faq';

function Page() {
  const categories = [
    "All",
    "Modern Kitchens",
    "Island Kitchens",
    "U Shape Kitchens",
    "L Shape Kitchens",
    "Straight Kitchens",
    "T Shape Kitchens",
  ];

  const projects = [
    {
      image: cust1,
      label: "Airis Series White And Wood Two-Tone Modern Style Kitchen Cabinet – OBK24L02",
      categories: ["Modern Kitchens", "U Shape Kitchens", "L Shape Kitchens"],
    },
    {
      image: cust2,
      label: "Cloud Series Luxury Style Kitchen Cabinets With Lacquer Finish – OBK24L04",
      categories: ["Modern Kitchens", "Island Kitchens", "Straight Kitchens"],
    },
    {
      image: cust3,
      label: "Como Series Modern Minimalist Semi-Open Kitchen",
      categories: ["Modern Kitchens", "Island Kitchens", "U Shape Kitchens"],
    },
    {
      image: cust4,
      label: "Hull Series Red Modern Minimalist Stylish Kitchen Cabinets – OBK24L03",
      categories: ["Modern Kitchens", "T Shape Kitchens", "L Shape Kitchens"],
    },
    {
      image: cust5,
      label: "Lumi Series Purple Elegant Handleless Kitchen Cabinet – OBK24L07",
      categories: ["Modern Kitchens", "L Shape Kitchens", "Straight Kitchens"],
    },
    {
      image: cust6,
      label: "Minimalist Elegance Red and Grey Open Concept Kitchen with Island – OBK25L02",
      categories: ["Modern Kitchens", "Island Kitchens", "T Shape Kitchens"],
    },
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
            src={kitchbg}
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
            Kitchen
          </h2>
          <p className="text-gray-300 text-[13px] sm:text-[14px] md:text-[17px] mt-3 md:mt-4 ">
            Get a custom kitchen design you will love for a life.
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
                className={`px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-2.5 rounded text-[12px] sm:text-[13px] md:text-[15px] border border-gray-200 font-normal cursor-pointer transition-colors ${isActive
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

      <FAQ
        faqs={kitchenFaqs}
        title="Custom Kitchen"
        subtitle="FAQs"
        description="Need something cleared up? Here are our most frequently asked questions.."
      />
      <CallToAction />
      <Footer />
    </div>
  )
}

export default Page
