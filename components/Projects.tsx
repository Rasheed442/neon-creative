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
      className="w-full bg-[#F7F4EF] px-14 py-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      {/* Heading */}
      <motion.div 
        className="flex items-start justify-between mb-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-[#E1AD56] h-[1.7px] w-10" />
            <div className="bg-[#E1AD56] h-2 w-2 rounded-full" />
          </div>
          <h2 className="font-serif text-[#1f1f1f] text-[52px]">
            Featured Projects
          </h2>
        </div>

        <p className="text-[#2E2E2E] text-[16px] font-light leading-relaxed max-w-sm mt-2">
          Each project tells a story of collaboration, craft, and considered
          design.
        </p>
      </motion.div>

      {/* Filter tabs */}
      <motion.div 
        className="flex flex-wrap items-center gap-2 mb-10"
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
              className={`px-6 py-2.5 rounded text-[15px] border border-gray-200 font-normal cursor-pointer transition-colors ${
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

      {/* Grid */}
      <motion.div 
        className="grid grid-cols-2 gap-8"
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
              className="relative w-full h-[420px] overflow-hidden group cursor-pointer"
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src={project.image}
                alt={project.label}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-x-0 bottom-0 h-12 bg-black/10 backdrop-blur-sm flex items-center justify-center">
                <p className="text-white font-sans text-[15px] font-medium">{project.label}</p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

export default FeaturedProjects;