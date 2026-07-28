"use client";

import { useState } from "react";
import Image from "next/image";
import {
    bedroom,
    dining,
  livingromm,
  modkitchen,
} from "@/contants";
import { motion, AnimatePresence } from 'framer-motion';
import { FaBoxOpen } from 'react-icons/fa6';

const categories = [
  "All",
  "Modern Kitchens",
  "Luxury Wardrobes",
  "Living Rooms",
  "TV Units",
  "Bedrooms",
  "Home Finishing",
];

const projects = [
  { image: bedroom, label: "Bedrooms", category: "Bedrooms" },
  { image: modkitchen, label: "Mordern Kitchen", category: "Modern Kitchens" },
  { image: dining, label: "Mordern Dining", category: "Modern Kitchens" },
  { image: livingromm, label: "Living Rooms", category: "Living Rooms" },
];

function FeaturedProjects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <motion.div 
      className="w-full bg-[#F7F4EF] px-4 md:px-14 py-12 md:py-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      {/* Heading */}
      <motion.div 
        className="flex flex-col md:flex-row items-start justify-between mb-6 md:mb-10 gap-4"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-4 md:mb-6">
            <div className="bg-[#E1AD56] h-[1.7px] w-10" />
            <div className="bg-[#E1AD56] h-2 w-2 rounded-full" />
          </div>
          <h2 className="font-serif text-[#1f1f1f] text-[32px] md:text-[42px] lg:text-[52px]">
            Featured Projects
          </h2>
        </div>

        <p className="text-[#2E2E2E] text-[14px] md:text-[16px] font-light leading-relaxed max-w-sm mt-2 text-center md:text-left">
          Each project tells a story of collaboration, craft, and considered
          design.
        </p>
      </motion.div>

      {/* Filter tabs */}
      <motion.div 
        className="flex flex-wrap items-center justify-center md:justify-start gap-2 mb-6 md:mb-10"
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
          <FaBoxOpen className="text-gray-300 mb-4" size={40} />
          <p className="font-serif text-[#1f1f1f] text-[20px] md:text-[24px]">
            No projects yet in {activeCategory}
          </p>
          <p className="text-gray-500 text-[14px] md:text-[15px] mt-2 max-w-xs">
            We&apos;re still adding pieces to this collection — check back soon
            or explore another category.
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
                  <p className="text-white font-sans text-[13px] md:text-[15px] font-medium">
                    {project.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}
    </motion.div>
  );
}

export default FeaturedProjects;