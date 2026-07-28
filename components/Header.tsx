"use client";

import { logo } from '@/contants'
import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div className='w-full bg-gradient-to-r from-[#2a2a2a]/90 via-[#2a2a2a]/90 to-[#4a4a4a]/90 backdrop-blur-sm flex justify-between items-center px-14 h-[9vh] py-4 shadow-lg'>
      <div className='flex items-center gap-2'>
        <Image src={logo} width={45} height={45} alt='' />
        <p className='text-white font-semibold text-[20px] font-serif'>NEON CREATIVE DESIGN LIMITED.</p>
      </div>

      <div className='flex items-center gap-5 text-white'>
        <p>About</p>
        <p>Services</p>
        <p>Projects</p>
        <p>Process</p>
        <button className='bg-[#E1AD56] text-white w-24 py-2 rounded'>Contact</button>
      </div>
    </div>
  )
}

export default Header