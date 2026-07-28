"use client";

import { FaQuoteRight } from "react-icons/fa6";
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote:
      "Our kitchen completely transformed the feel of our home. Excellent workmanship and attention to detail throughout the entire process.",
    name: "Sarah & James Mitchell",
    location: "Hampstead, London",
    initial: "S",
  },
  {
    quote:
      "The wardrobe design was exactly what we imagined — beautiful, functional, and professionally installed. We couldn't be happier.",
    name: "Priya Sharma",
    location: "Canary Wharf, London",
    initial: "P",
  },
];

function Testimonials() {
  return (
    <motion.div 
      className="w-full bg-[#F7F4EF] px-4 md:px-14 py-12 md:py-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <motion.div 
        className="flex flex-col items-center text-center mb-8 md:mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-3 mb-4 md:mb-6">
          <div className="bg-[#E1AD56] h-[1.7px] w-10" />
          <div className="bg-[#E1AD56] h-2 w-2 rounded-full" />
        </div>
        <h2 className="font-serif text-[#1f1f1f] text-[32px] md:text-[40px] lg:text-[46px]">
          What Our Clients Say
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
        {testimonials.map((testimonial, i) => (
          <motion.div
            key={i}
            className="relative bg-white shadow-sm p-6 md:p-10 flex flex-col gap-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 + (i * 0.15) }}
            whileHover={{ y: -8 }}
          >
            <motion.div
              className="absolute top-4 md:top-6 right-6 md:right-8 text-[#E1AD56]/40"
              initial={{ rotate: 0 }}
              whileInView={{ rotate: 10 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 + (i * 0.15) }}
            >
              <FaQuoteRight size={36} />
            </motion.div>

            <p className="font-serif italic text-[#1f1f1f] text-[16px] md:text-[17px] lg:text-[19px] py-6 md:py-8 leading-relaxed">
              &quot;{testimonial.quote}&quot;
            </p>

            <div className="flex items-center gap-3">
              <motion.div 
                className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-[#e5ded2] flex items-center justify-center text-[#1f1f1f] font-semibold text-[14px] md:text-[16px]"
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                {testimonial.initial}
              </motion.div>
              <div>
                <p className="font-semibold text-[#1f1f1f] text-[13px] md:text-[14px] lg:text-[15px]">
                  {testimonial.name}
                </p>
                <p className="text-gray-500 text-[12px] md:text-[13px] lg:text-[14px]">
                  {testimonial.location}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

export default Testimonials;