"use client";

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { Kitchen, Wardrobe, Ceiling, Stone } from "@/contants";
import { motion } from 'framer-motion';

const services = [
  {
    image: Kitchen,
    title: "Custom Kitchens",
    description: "Modern & classic kitchen cabinetry built to maximize space and functionality.",
  },
  {
    image: Wardrobe,
    title: "Wardrobes",
    description: "Walk-in closets, sliding wardrobes, fitted wardrobes, and custom storage.",
  },
  {
    image: Ceiling,
    title: "Home Finishing",
    description: "Interior woodworks, TV consoles, shelving, wall panels, & bespoke furniture.",
  },
  {
    image: Stone,
    title: "Interior Consultation",
    description: "Design consultation, space planning, material selection, and project guidance.",
  },
];

function WhatWeCreate() {
  return (
    <motion.div 
      className="w-full bg-[#2a2a2a] px-4 md:px-14 py-12 md:py-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      {/* Heading */}
      <motion.div 
        className="flex flex-col items-center text-center mb-8 md:mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-4 md:mb-6">
          <div className="bg-white h-[1.7px] w-10" />
          <div className="bg-[#E1AD56] h-2 w-2 rounded-full" />
        </div>
        <h2 className="font-serif text-white text-[32px] md:text-[40px] lg:text-[46px]">What We Create</h2>
        <p className="text-gray-300 text-[14px] md:text-[16px] mt-4 max-w-xl px-4">
          Tailored solutions for every room in your home, built with precision and
          designed with intent.
        </p>
      </motion.div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((service, i) => (
          <motion.div 
            key={i} 
            className="bg-[#333333] flex flex-col pt-4 p-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 + (i * 0.15) }}
            whileHover={{ y: -8 }}
          >
            <div className="relative w-full h-[400px] md:h-[600px]">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>

            <div className="flex flex-col items-center text-center px-6 md:px-10 py-6 md:py-8 gap-3">
              <h3 className="font-serif text-white text-[22px] md:text-[28px]">
                {service.title}
              </h3>
              <p className="text-gray-300 text-[13px] md:text-[15px]">{service.description}</p>

              <motion.button 
                className="mt-4 bg-[#E1AD56] text-white px-6 py-3 rounded-sm font-medium flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Collection <FaArrowRight size={14} />
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default WhatWeCreate;