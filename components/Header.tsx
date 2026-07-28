"use client";

import { logo } from '@/contants'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes } from 'react-icons/fa'

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <div className='w-full sticky top-0 z-50 bg-gradient-to-r from-[#2a2a2a]/90 via-[#2a2a2a]/90 to-[#4a4a4a]/90 backdrop-blur-sm flex justify-between items-center px-4 md:px-14 py-3 md:py-4 shadow-lg'>
      <div className='flex items-center gap-2 min-w-0'>
        <Image
          src={logo}
          width={38}
          height={38}
          alt=''
          className='w-9 h-9 md:w-[45px] md:h-[45px] shrink-0'
        />
        <p className='text-white font-semibold text-[13px] leading-tight sm:text-[16px] md:text-[20px] font-serif truncate'>
          NEON CREATIVE DESIGN LIMITED.
        </p>
      </div>

      {/* Desktop Navigation */}
      <div className='hidden md:flex items-center gap-5 text-white shrink-0'>
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className='hover:text-[#E1AD56] cursor-pointer transition-colors'
          >
            {link.label}
          </a>
        ))}
        <button className='bg-[#E1AD56] text-white px-6 py-2 rounded hover:bg-[#c9963d] transition-colors'>
          Contact
        </button>
      </div>

      {/* Mobile Menu Button */}
      <button
        className='md:hidden text-white text-2xl p-2 -mr-2 shrink-0'
        onClick={() => setIsMenuOpen(true)}
        aria-label="Open menu"
      >
        <FaBars />
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className='fixed inset-0 h-[100dvh] bg-[#1f1f1f] z-[80] flex flex-col items-center justify-center gap-8 md:hidden'
          >
            <button
              className='absolute top-5 right-5 text-white text-3xl p-2'
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <FaTimes />
            </button>

            <div className='absolute top-6 left-6 flex items-center gap-2'>
              <Image src={logo} width={34} height={34} alt='' />
            </div>

            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className='text-white text-2xl font-serif hover:text-[#E1AD56] cursor-pointer transition-colors'
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button
              className='bg-[#E1AD56] text-white px-8 py-3 rounded text-xl hover:bg-[#c9963d] transition-colors mt-2'
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Header