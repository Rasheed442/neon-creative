import ContactCards from '@/components/ContactCards'
import ContactUs from '@/components/ContactUs'
import Header from '@/components/Header'
import { cpbgimages, ctbgImages } from '@/contants'
import Image from 'next/image'
import React from 'react'

function page() {
  return (
    <div>
         <div className="h-[80vh] relative">
        {/* Background image layer */}
        <div className="absolute inset-0 -z-10">
          <Image
            src={ctbgImages.ctbg}
            alt="background"
            fill
            priority
            className="object-cover transition-opacity duration-700 ease-in-out"
          />
        </div>

        {/* Overlay for contrast */}
        <div className="absolute inset-0 -z-10 bg-black/30" />

        {/* Header */}
          <Header />

        {/* Hero text */}
        <div className="relative z-10 min-h-[60vh] flex flex-col items-center justify-end text-center px-4">
          <h2 className="font-serif text-white text-[32px] font-semibold md:text-[44px] lg:text-[56px]">
            Commercial Project
          </h2>
          <p className="text-gray-300 text-[14px] capitalize md:text-[17px] mt-4 ">
          Explore One-Stop Interior Design Solutions
          </p>
        </div>
      </div>
      <ContactCards/>
      <ContactUs/>
    </div>
  )
}

export default page