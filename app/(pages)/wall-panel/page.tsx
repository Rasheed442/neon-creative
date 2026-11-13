"use client";

import Header from '@/components/Header'
import Image from 'next/image'
import { wallPanelImages } from '@/contants'
import { motion, AnimatePresence } from 'framer-motion';
import { FaBoxOpen } from 'react-icons/fa';
import { useState } from 'react';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import FAQ, { wallPanelFaqs } from '@/components/Faq';

function Page() {
  const categories = [
    "All",
    "Acoustic Slatted Panels",
    "Fluted Wall Panelling",
    "Veneer Feature Walls",
  ];

  const projects = [
    {
      image: wallPanelImages.wallpanel1,
      label: "Airis Series Contemporary Natural Wood Veneer Feature Wall",
      categories: ["Veneer Feature Walls", "All"],
    },
    {
      image: wallPanelImages.wallpanel2,
      label: "Cloud Series 3D Fluted Wall Panelling With Ambient LED Channels",
      categories: ["Fluted Wall Panelling", "All"],
    },
    {
      image: wallPanelImages.wallpane3,
      label: "Como Series Vertical Acoustic Slatted Wood Panelling Ensemble",
      categories: ["Acoustic Slatted Panels", "All"],
    },
    {
      image: wallPanelImages.wallpanel4,
      label: "Hull Series Architectural Wall Panelling With Concealed Storage",
      categories: ["Veneer Feature Walls", "Fluted Wall Panelling", "All"],
    },
  ];

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
            src={wallPanelImages.wallpanelbg}
            alt="Wall Panel Background"
            fill
            priority
            className="object-cover transition-opacity duration-700 ease-in-out"
          />
        </div>

        {/* Overlay for contrast */}
        <div className="absolute inset-0 -z-10 bg-black/40" />

        {/* Header */}
        <Header />

        {/* Hero text */}
        <div className="relative z-10 min-h-[50vh] sm:min-h-[55vh] md:min-h-[60vh] flex flex-col items-center justify-end text-center px-4">
          <h2 className="font-serif text-white text-[28px] sm:text-[36px] font-semibold md:text-[46px] lg:text-[58px]">
            Wall Panel
          </h2>
          <p className="text-gray-300 text-[13px] md:text-[18px] mt-4 max-w-2xl">
            Bespoke decorative and acoustic wall panelling designed to elevate your interior architecture.
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 md:py-16">
        <div className="text-center mb-8 md:mb-12">
          <p className="text-[#2E2E2E] text-[15px] sm:text-[17px] md:text-[19px] font-medium max-w-3xl mx-auto leading-relaxed">
            Beautifully crafted Wall Panel designed for comfort, elegance, and memorable moments.
          </p>
        </div>

        {/* Categories Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 text-[12px] sm:text-[13px] md:text-[14px] font-medium transition-all duration-300 cursor-pointer ${
                activeCategory === category
                  ? "bg-[#E1AD56] text-black shadow-sm"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-gray-400">
            <FaBoxOpen className="text-5xl mb-4 text-gray-300" />
            <p className="text-lg font-medium">No projects found in this category.</p>
          </div>
        ) : (
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 md:gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project, i) => (
                <motion.div
                  key={project.label}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="relative w-full h-[260px] sm:h-[340px] md:h-[420px] overflow-hidden group cursor-pointer"
                  whileHover={{ scale: 1.01 }}
                >
                  <Image
                    src={project.image}
                    alt={project.label}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-x-0 bottom-0 min-h-10 sm:h-12 bg-black/30 backdrop-blur-sm flex items-center justify-center px-3 py-1.5">
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
        faqs={wallPanelFaqs}
        title="Frequently Asked Questions."
        subtitle="FAQs"
        description="Need something cleared up? Here are our most frequently asked questions."
      />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default Page;

