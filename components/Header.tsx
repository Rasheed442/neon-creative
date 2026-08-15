"use client";

import { logo } from '@/contants'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaBars, FaTimes, FaChevronDown, FaChevronRight } from 'react-icons/fa'
import { useRouter } from 'next/navigation';

const navLinks = [
  { label: "About", href: "/about" },
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "Custom Kitchen", href: "/custom-kitchen" },
      { label: "Bedroom", href: "/bedroom" },
      { label: "Bathroom", href: "/bathroom" },
      { label: "Doors & Windows", href: "/door-windows" },
      { label: "Whole House Solution", href: "/whole-house-solution" },
      { label: "Furniture", href: "/furniture" },
    ],
  },
  {
    label: "Showcases",
    href: "/home-cases",
    children: [
      { label: "Home Cases", href: "/home-cases" },
      { label: "Commercial Projects", href: "/commercial-projects" },
    ],
  },
];



function Header() {
    const router = useRouter();

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const [openMobileAccordion, setOpenMobileAccordion] = useState<string | null>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const cancelClose = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
  }

  const openNow = (label: string) => {
    cancelClose()
    setOpenDropdown(label)
  }

  const scheduleClose = (label: string) => {
    cancelClose()
    closeTimer.current = setTimeout(() => {
      setOpenDropdown((current) => (current === label ? null : current))
    }, 250)
  }

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Reset mobile accordion state whenever the mobile menu closes
  useEffect(() => {
    if (!isMenuOpen) {
      setOpenMobileAccordion(null)
    }
  }, [isMenuOpen]);

  return (
    <div className='w-full sticky top-0 z-50 bg-gradient-to-r from-[#2a2a2a]/5 via-[#2a2a2a]/5 to-[#4a4a4a]/5 backdrop-blur-sm flex justify-between items-center px-4 md:px-14 py-3 md:py-4 shadow-lg'>
      <div className='flex items-center gap-2 min-w-0 cursor-pointer' onClick={() => router.push("/")}>
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
            onMouseEnter={() => link.children && openNow(link.label)}
            onMouseLeave={() => link.children && scheduleClose(link.label)}
          >
            {link.children ? (
              <button
                type="button"
                onClick={() =>
                  setOpenDropdown((prev) => (prev === link.label ? null : link.label))
                }
                className='flex items-center gap-1.5 hover:text-[#E1AD56] cursor-pointer transition-colors text-white'
              >
                {link.label}
                <FaChevronDown
                  className={`text-xs transition-transform duration-200 ${
                    openDropdown === link.label ? "rotate-180" : ""
                  }`}
                />
              </button>
            ) : (
              <Link
                href={link.href}
                className='flex items-center gap-1.5 hover:text-[#E1AD56] cursor-pointer transition-colors'
              >
                {link.label}
              </Link>
            )}

            {/* Invisible bridge — closes the gap between button and panel so hover doesn't drop */}
            {link.children && (
              <div className='absolute top-full left-0 right-0 h-3' />
            )}

            {/* Dropdown Panel */}
            {link.children && (
              <AnimatePresence>
                {openDropdown === link.label && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className='absolute top-full right-0 mt-3 w-64 bg-white rounded-md shadow-xl overflow-hidden py-2 z-[60]'
                    onMouseEnter={() => openNow(link.label)}
                    onMouseLeave={() => scheduleClose(link.label)}
                  >
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className='flex items-center justify-between px-5 py-3 text-[#1f1f1f] hover:bg-gray-50 hover:text-[#E1AD56] transition-colors text-[15px]'
                        onClick={() => {
                          cancelClose()
                          setOpenDropdown(null)
                        }}
                      >
                        {child.label}
                        <FaChevronRight className='text-xs opacity-60' />
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            )}
          </div>
        ))}

        <Link
          href="/contact"
          className='flex items-center gap-1.5 hover:text-[#E1AD56] cursor-pointer transition-colors'
        >
          <button className='bg-[#E1AD56] text-white px-6 py-2 rounded hover:bg-[#c9963d] transition-colors'>
            Contact
          </button>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        type="button"
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
              type="button"
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
                {link.children ? (
                  <button
                    type="button"
                    onClick={() =>
                      setOpenMobileAccordion(
                        openMobileAccordion === link.label ? null : link.label
                      )
                    }
                    className='flex items-center justify-center gap-2 text-white text-2xl font-serif hover:text-[#E1AD56] transition-colors w-full py-2'
                  >
                    {link.label}
                    <FaChevronDown
                      className={`text-base transition-transform duration-200 ${
                        openMobileAccordion === link.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className='text-white text-2xl font-serif hover:text-[#E1AD56] cursor-pointer transition-colors w-full text-center py-2'
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}

                <AnimatePresence>
                  {link.children && openMobileAccordion === link.label && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2, ease: "easeInOut" }}
                      className='flex flex-col items-center gap-3 mt-4 overflow-hidden w-full'
                    >
                      {link.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          className='text-gray-300 text-lg font-sans hover:text-[#E1AD56] transition-colors'
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
              <button
                type="button"
                className='bg-[#E1AD56] text-white px-8 py-3 rounded text-xl hover:bg-[#c9963d] transition-colors mt-4'
              >
                Contact
              </button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Header