import React from 'react'
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

interface HeroProps {
  onNext: () => void;
  onPrev: () => void;
}

function Hero({ onNext, onPrev }: HeroProps) {
  return (
    <div className='relative px-12 flex items-center h-[89vh]'>
      <div className='flex flex-col gap-4 w-[61%]'>
        <div className='flex items-center gap-4'>
          <div className='bg-white h-[1.7px] w-12' />
          <p className='text-[16px] font-medium text-white font-sans uppercase'>Premium Cabinetry & Interiors</p>
          <div className='bg-white h-[1.7px] w-12' />
        </div>
        <h3 className='font-serif text-[72px] text-white leading-22'>Crafting <span className='text-[#E1AD56] italic '>Beautiful Spaces</span> That Feel Like Home</h3>
        <p className='text-gray-300 text-[17px]'>From luxury kitchens and custom wardrobes to complete home finishing, we design and build timeless interiors tailored to your lifestyle.</p>
        <div className='flex items-center gap-4 py-4 pt-14'>
          <button className='bg-[#E1AD56] text-black px-6 py-3 rounded-sm font-medium flex items-center text-white gap-2'>View Our Work <FaArrowRight size={16} /></button>
          <button className='text-black px-6 py-3 rounded border border-gray-100 text-white font-medium'>Request a Quote</button>
        </div>
      </div>

      {/* Carousel arrows */}
      <div className='absolute bottom-16 right-12 flex items-center gap-3'>
        <button
          onClick={onPrev}
          aria-label="Previous background"
          className='w-11 h-11 flex items-center justify-center border border-white/70 text-white hover:bg-white hover:text-black transition-colors'
        >
          <FaArrowLeft size={16} />
        </button>
        <button
          onClick={onNext}
          aria-label="Next background"
          className='w-11 h-11 flex items-center justify-center border border-white/70 text-white hover:bg-white hover:text-black transition-colors'
        >
          <FaArrowRight size={16} />
        </button>
      </div>
    </div>
  )
}

export default Hero