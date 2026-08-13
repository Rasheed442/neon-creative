"use client";

import { logo } from '@/contants'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes, FaChevronDown, FaChevronRight } from 'react-icons/fa'

const navLinks = [
  { label: "About", href: "/about" },
  {
    label: "Products",
    href: "#products",
    children: [
      { label: "Custom Kitchen", href: "/custom-kitchen" },
      { label: "Bedroom", href: "/bedroom" },
      { label: "Bathroom", href: "/bathroom" },
      { label: "Doors & Windows", href: "/door-windows" },
      { label: "Whole House Solution", href: "#whole-house-solution" },
      { label: "Furniture", href: "#furniture" },
    ],
  },
  {
    label: "Projects",
    href: "#projects",
    children: [
      { label: "Residential", href: "#residential" },
      { label: "Commercial", href: "#commercial" },
    ],
  },
];

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [openMobileAccordion, setOpenMobileAccordion] = useState<string | null>(null)

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <div className='w-full sticky top-0 z-50 bg-gradient-to-r from-[#2a2a2a]/5 via-[#2a2a2a]/5 to-[#4a4a4a]/5 backdrop-blur-sm flex justify-between items-center px-4 md:px-14 py-3 md:py-4 shadow-lg'>
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
          <div
            key={link.label}
            className='relative'
            onMouseEnter={() => link.children && setOpenDropdown(link.label)}
            onMouseLeave={() => link.children && setOpenDropdown(null)}
          >
            <a
              href={link.href}
              className='flex items-center gap-1.5 hover:text-[#E1AD56] cursor-pointer transition-colors'
            >
              {link.label}
              {link.children && (
                <FaChevronDown
                  className={`text-xs transition-transform duration-200 ${
                    openDropdown === link.label ? "rotate-180" : ""
                  }`}
                />
              )}
            </a>

            {/* Dropdown Panel */}
            {link.children && (
              <AnimatePresence>
                {openDropdown === link.label && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className='absolute top-full right-0 mt-3 w-64 bg-white rounded-md shadow-xl overflow-hidden py-2'
                  >
                    {link.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className='flex items-center justify-between px-5 py-3 text-[#1f1f1f] hover:bg-gray-50 hover:text-[#E1AD56] transition-colors text-[15px]'
                      >
                        {child.label}
                        <FaChevronRight className='text-xs opacity-60' />
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            )}
          </div>
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
            className='fixed inset-0 h-[100dvh] bg-[#1f1f1f] z-[80] flex flex-col items-center justify-start gap-6 md:hidden overflow-y-auto pt-24 pb-10'
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
              <div key={link.label} className='flex flex-col items-center w-full px-8'>
                <div
                  className='flex items-center gap-2 text-white text-2xl font-serif hover:text-[#E1AD56] cursor-pointer transition-colors'
                  onClick={() => {
                    if (link.children) {
                      setOpenMobileAccordion(
                        openMobileAccordion === link.label ? null : link.label
                      )
                    } else {
                      setIsMenuOpen(false)
                    }
                  }}
                >
                  {link.children ? (
                    <>
                      {link.label}
                      <FaChevronDown
                        className={`text-base transition-transform duration-200 ${
                          openMobileAccordion === link.label ? "rotate-180" : ""
                        }`}
                      />
                    </>
                  ) : (
                    <a href={link.href}>{link.label}</a>
                  )}
                </div>

                <AnimatePresence>
                  {link.children && openMobileAccordion === link.label && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      className='flex flex-col items-center gap-3 mt-4 overflow-hidden'
                    >
                      {link.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          className='text-gray-300 text-lg font-sans hover:text-[#E1AD56] transition-colors'
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {child.label}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            <button
              className='bg-[#E1AD56] text-white px-8 py-3 rounded text-xl hover:bg-[#c9963d] transition-colors mt-4'
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