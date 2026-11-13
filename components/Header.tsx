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
      { label: "Wardrobe", href: "/wardrobe" },
      { label: "Bedroom", href: "/bedroom" },
      { label: "Dining", href: "/dining" },
      { label: "Living Room Cabinet", href: "/living-room" },
      { label: "TV Cabinet", href: "/tv-cabinet" },
      { label: "Display Cabinet", href: "/display-cabinet" },
      { label: "Study Cabinet", href: "/study-cabinet" },
      { label: "Side Cabinet", href: "/side-cabinet" },
      { label: "Wall Panel", href: "/wall-panel" },
      { label: "Bathroom", href: "/bathroom" },
      // { label: "Doors & Windows", href: "/door-windows" }, 
      { label: "Whole House Solution", href: "/whole-house-solution" },
      // { label: "Furniture", href: "/furniture" },
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

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setOpenMobileAccordion(null);
  };

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
                  className={`text-xs transition-transform duration-200 ${openDropdown === link.label ? "rotate-180" : ""
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
                    className={`absolute top-full mt-3 bg-white rounded-xl shadow-2xl border border-gray-100 z-[60] ${link.children.length > 6
                      ? "right-[-120px] lg:right-[-80px] w-[520px] p-4"
                      : "right-0 w-60 py-2"
                      }`}
                    onMouseEnter={() => openNow(link.label)}
                    onMouseLeave={() => scheduleClose(link.label)}
                  >
                    {link.children.length > 6 ? (
                      <div>
                        {/* Header banner */}
                        <div className='flex items-center justify-between pb-3 mb-2 border-b border-gray-100 px-1'>
                          <div>
                            <p className='text-[10px] font-thin tracking-wider text-gray-500 uppercase'>Our Collections</p>
                            <p className='text-[13px] text-[#2a2a2a] font-serif font-medium'>Explore Custom Spaces</p>
                          </div>
                          <span className='text-[11px] font-medium text-[#E1AD56] bg-[#E1AD56]/10 px-2.5 py-0.5 rounded-full'>
                            {link.children.length} Products
                          </span>
                        </div>

                        {/* 2-column grid */}
                        <div className='grid grid-cols-2 gap-x-2.5 gap-y-0.5'>
                          {link.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className='group flex items-center justify-between px-3 py-2 rounded-lg text-[#2a2a2a] hover:bg-[#F7F4EF] hover:text-[#E1AD56] transition-all duration-150 text-[13.5px] font-medium'
                              onClick={() => {
                                cancelClose()
                                setOpenDropdown(null)
                              }}
                            >
                              <div className='flex items-center gap-2 min-w-0'>
                                <span className='w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-[#E1AD56] transition-colors shrink-0' />
                                <span className='truncate'>{child.label}</span>
                              </div>
                              <FaChevronRight className='text-[9px] text-gray-300 group-hover:text-[#E1AD56] group-hover:translate-x-0.5 transition-all shrink-0 ml-1' />
                            </Link>
                          ))}
                        </div>

                        {/* Footer shortcut */}
                        <div className='mt-3 pt-2.5 px-3 border-t border-gray-100 flex items-center justify-between bg-[#F7F4EF]/70 -mx-4 -mb-4 p-3 rounded-b-xl'>
                          <span className='text-[12px] font-light text-gray-500'>Looking for a tailored complete home package?</span>
                          <Link
                            href="/whole-house-solution"
                            className='text-[12px] font-thin text-[#E1AD56] hover:underline flex items-center gap-1 shrink-0'
                            onClick={() => {
                              cancelClose()
                              setOpenDropdown(null)
                            }}
                          >
                            Whole House Solution &rarr;
                          </Link>
                        </div>
                      </div>
                    ) : (
                      <div className='py-1'>
                        {link.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className='group flex items-center justify-between px-5 py-3 text-[#1f1f1f] hover:bg-[#F7F4EF] hover:text-[#E1AD56] transition-colors text-[14px] font-medium'
                            onClick={() => {
                              cancelClose()
                              setOpenDropdown(null)
                            }}
                          >
                            <span>{child.label}</span>
                            <FaChevronRight className='text-[10px] text-gray-400 group-hover:text-[#E1AD56] group-hover:translate-x-0.5 transition-all' />
                          </Link>
                        ))}
                      </div>
                    )}
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
              onClick={closeMobileMenu}
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
                      className={`text-base transition-transform duration-200 ${openMobileAccordion === link.label ? "rotate-180" : ""
                        }`}
                    />
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className='text-white text-2xl font-serif hover:text-[#E1AD56] cursor-pointer transition-colors w-full text-center py-2'
                    onClick={closeMobileMenu}
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
                      className='w-full mt-3 overflow-hidden'
                    >
                      {link.children.length > 6 ? (
                        <div className='grid grid-cols-2 gap-2 max-w-sm mx-auto w-full'>
                          {link.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className='bg-white/5 hover:bg-[#E1AD56]/20 border border-white/10 hover:border-[#E1AD56]/40 text-gray-200 hover:text-white text-[13px] font-sans rounded-lg py-2.5 px-3 text-center transition-all truncate block'
                              onClick={closeMobileMenu}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      ) : (
                        <div className='flex flex-col items-center gap-3'>
                          {link.children.map((child) => (
                            <Link
                              key={child.label}
                              href={child.href}
                              className='text-gray-300 text-lg font-sans hover:text-[#E1AD56] transition-colors'
                              onClick={closeMobileMenu}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            <Link href="/contact" onClick={closeMobileMenu}>
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