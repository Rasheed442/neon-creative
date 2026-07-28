"use client";

import { logo } from '@/contants'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className='w-full bg-gradient-to-r from-[#2a2a2a]/90 via-[#2a2a2a]/90 to-[#4a4a4a]/90 backdrop-blur-sm flex justify-between items-center px-4 md:px-14 h-[9vh] py-4 shadow-lg'>
      <div className='flex items-center gap-2'>
        <Image src={logo} width={40} height={40} alt='' className='md:w-[45px] md:h-[45px]' />
        <p className='text-white font-semibold text-[14px] md:text-[20px] font-serif hidden sm:block'>NEON CREATIVE DESIGN LIMITED.</p>
        <p className='text-white font-semibold text-[14px] font-serif sm:hidden'>NEON CREATIVE</p>
      </div>

      {/* Desktop Navigation */}
      <div className='hidden md:flex items-center gap-5 text-white'>
        <p className='hover:text-[#E1AD56] cursor-pointer transition-colors'>About</p>
        <p className='hover:text-[#E1AD56] cursor-pointer transition-colors'>Services</p>
        <p className='hover:text-[#E1AD56] cursor-pointer transition-colors'>Projects</p>
        <p className='hover:text-[#E1AD56] cursor-pointer transition-colors'>Process</p>
        <button className='bg-[#E1AD56] text-white px-6 py-2 rounded hover:bg-[#c9963d] transition-colors'>Contact</button>
      </div>

      {/* Mobile Menu Button */}
      <button 
        className='md:hidden text-white text-2xl'
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className='fixed inset-0 bg-[#2a2a2a]/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center gap-8 md:hidden'
          >
            <p className='text-white text-2xl font-serif hover:text-[#E1AD56] cursor-pointer transition-colors' onClick={() => setIsMenuOpen(false)}>About</p>
            <p className='text-white text-2xl font-serif hover:text-[#E1AD56] cursor-pointer transition-colors' onClick={() => setIsMenuOpen(false)}>Services</p>
            <p className='text-white text-2xl font-serif hover:text-[#E1AD56] cursor-pointer transition-colors' onClick={() => setIsMenuOpen(false)}>Projects</p>
            <p className='text-white text-2xl font-serif hover:text-[#E1AD56] cursor-pointer transition-colors' onClick={() => setIsMenuOpen(false)}>Process</p>
            <button className='bg-[#E1AD56] text-white px-8 py-3 rounded text-xl hover:bg-[#c9963d] transition-colors' onClick={() => setIsMenuOpen(false)}>Contact</button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Header