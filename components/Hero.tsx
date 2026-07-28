import React from 'react'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import { motion } from 'framer-motion';

interface HeroProps {
  onNext: () => void;
  onPrev: () => void;
}

function Hero({ onNext, onPrev }: HeroProps) {
  return (
    <div className='relative px-4 md:px-12 flex items-center h-[89vh]  md:pt-16'>
      <motion.div 
        className='flex flex-col gap-4 w-full md:w-[61%]'
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <motion.div 
          className='flex items-center gap-2 md:gap-4'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className='bg-white h-[1.7px] w-8 md:w-12' />
          <p className='text-[12px] md:text-[16px] font-medium text-white font-sans uppercase text-center md:text-left'>Premium Cabinetry & Interiors</p>
          <div className='bg-white h-[1.7px] w-8 md:w-12' />
        </motion.div>
        <motion.h3 
          className='font-serif text-white text-[36px] md:text-[52px] lg:text-[72px] leading-tight md:leading-22'
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          Crafting <span className='text-[#E1AD56] italic '>Beautiful Spaces</span> That Feel Like Home
        </motion.h3>
        <motion.p 
          className='text-gray-300 text-[14px] md:text-[15px] lg:text-[17px]'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          From luxury kitchens and custom wardrobes to complete home finishing, we design and build timeless interiors tailored to your lifestyle.
        </motion.p>
        <motion.div 
          className='flex flex-col sm:flex-row items-center gap-4 py-4 pt-8 md:pt-14'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <button className='bg-[#E1AD56] text-black px-6 py-3 rounded-sm font-medium flex items-center text-white gap-2 w-full sm:w-auto justify-center'>View Our Work <FaArrowRight size={16} /></button>
          <button className='text-black px-6 py-3 rounded border border-gray-100 text-white font-medium w-full sm:w-auto'>Request a Quote</button>
        </motion.div>
      </motion.div>

      {/* Carousel arrows */}
      <motion.div 
        className='absolute bottom-16 right-4 md:right-12 flex items-center gap-3'
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <button
          onClick={onPrev}
          aria-label="Previous background"
          className='w-10 h-10 md:w-11 md:h-11 flex items-center justify-center border border-white/70 text-white hover:bg-white hover:text-black transition-colors mx-1'
        >
          <FaArrowLeft size={16} />
        </button>
        <button
          onClick={onNext}
          aria-label="Next background"
          className='w-10 h-10 md:w-11 md:h-11 flex items-center justify-center border border-white/70 text-white hover:bg-white hover:text-black transition-colors mx-1'
        >
          <FaArrowRight size={16} />
        </button>
      </motion.div>
    </div>
  )
}

export default Hero