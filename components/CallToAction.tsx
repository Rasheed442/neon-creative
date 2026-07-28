"use client";

import { ctabg } from "@/contants";
import { FaArrowRight } from "react-icons/fa6";
import { motion } from 'framer-motion';

function CallToAction() {
  return (
    <motion.div
      className="relative w-full h-[600px] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${ctabg.src})` }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <motion.div 
        className="absolute inset-0 bg-black/55"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      />

      <motion.div 
        className="relative z-10 flex flex-col items-center text-center px-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <motion.div 
          className="flex items-center gap-3 mb-6"
          initial={{ opacity: 0, width: 0 }}
          whileInView={{ opacity: 1, width: 'auto' }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="bg-white h-[1.7px] w-10" />
          <div className="bg-[#E1AD56] h-2 w-2 rounded-full" />
        </motion.div>

        <motion.h2 
          className="font-serif text-white text-[46px]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          Ready to Transform Your Space?
        </motion.h2>

        <motion.p 
          className="text-gray-200 text-[17px] font-light mt-4 max-w-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Let&apos;s create a home you&apos;ll love for years to come. Our team
          is ready to bring your vision to life.
        </motion.p>

        <motion.button 
          className="mt-8 bg-[#E1AD56] text-white px-8 py-4 rounded-sm font-medium flex items-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get a Free Consultation <FaArrowRight size={16} />
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

export default CallToAction;