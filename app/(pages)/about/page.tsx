"use client";
import Header from '@/components/Header'
import React from 'react'
import Image from 'next/image'
import { about, saldine } from '@/contants'
import { motion } from 'framer-motion';
import VisionMission from '@/components/VisionMission';
import FAQ from '@/components/Faq';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

function page() {
    const stats = [
    { value: "500+", label: "Projects Completed" },
    { value: "100%", label: "Client Satisfaction" },
    { value: "15+", label: "Design Awards" },
    { value: "3", label: "Showroom Locations" },
];
  return (
    <div>
      <div className="h-[80vh] relative">
  {/* Background image layer */}
  <div className="absolute inset-0 -z-10">
    <Image src={saldine} alt="background" fill priority className="object-cover transition-opacity duration-700 ease-in-out" />
  </div>

  {/* Overlay for contrast */}
  <div className="absolute inset-0 -z-10 bg-black/30" />

  {/* Header — no wrapping z-10 div */}
  <Header />

  {/* Hero text */}
                <div className="relative z-10 min-h-[60vh] flex flex-col items-center justify-end text-center px-4">
                <h2 className="font-serif text-white text-[32px] font-semibold md:text-[44px] lg:text-[56px]">
                  Bathroom Vanities
                </h2>
                <p className="text-gray-300 text-[14px] md:text-[17px] mt-4 ">
                  Customised bathroom cabinets in your style, make your bathroom a total refresh look.
                </p>
              </div>

</div>
       <motion.div 
                    className="w-full bg-[#F7F4EF] px-4 md:px-14 py-12 md:py-24 flex flex-col md:flex-row items-center gap-8 md:gap-16"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                >
    
                    {/* Left: Image with floating badge */}
                    <motion.div 
                        className="relative w-full md:w-[70%] order-2 md:order-1"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <div className="relative w-full  h-[400px] md:h-[760px] rounded-sm overflow-hidden">
                            <Image
                                src={about}
                                alt="Neon Creative Design kitchen"
                                fill
                                className="object-cover"
                            />
                        </div>
    
                        <motion.div 
                            className="absolute bottom-0 right-4 md:right-6 bg-[#2a2a2a] px-4 md:px-6 py-4 md:py-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <p className="text-[#E1AD56] text-[24px] md:text-[32px] font-semibold leading-none">
                                12+
                            </p>
                            <p className="text-white text-[13px] md:text-[15px] mt-1">Years of Excellence</p>
                        </motion.div>
                    </motion.div>
    
                    {/* Right: Content */}
                    <motion.div 
                        className="w-full md:w-[55%] flex flex-col gap-4 md:gap-4 order-1 md:order-2"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    >
                        <motion.div 
                            className="flex items-center gap-3"
                            initial={{ opacity: 0, width: 0 }}
                            whileInView={{ opacity: 1, width: 'auto' }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <div className="bg-[#E1AD56] h-[1.7px] w-10" />
                            <div className="bg-[#E1AD56] h-2 w-2 rounded-full" />
                        </motion.div>
    
                        <motion.h2 
                            className="font-serif text-[#1f1f1f] text-[32px] md:text-[42px] lg:text-[48px] leading-tight"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                        >
                             Neon Creative Design Limited
                        </motion.h2>
    
                        <motion.p 
                            className="text-gray-600 font-light text-[14px] md:text-[15px] lg:text-[16px] leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            We specialize in creating elegant kitchens, bespoke wardrobes, TV units,
                            storage solutions, and complete interior finishing that combine beauty
                            with functionality.
                        </motion.p>
                        <motion.p 
                            className="text-gray-600 font-light text-[14px] md:text-[15px] lg:text-[16px] leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.7 }}
                        >
                            Whether you&apos;re building a new home or renovating an existing one, our
                            team delivers premium craftsmanship using quality materials and modern
                            design techniques.
                        </motion.p>
    
                        <motion.div 
                            className="grid grid-cols-2 gap-x-6 md:gap-x-12 gap-y-6 md:gap-y-8 mt-2"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                        >
                            {stats.map((stat, i) => (
                                <motion.div 
                                    key={i} 
                                    className="flex items-center gap-4"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.9 + (i * 0.1) }}
                                >
                                    <div className="bg-[#E1AD56] w-[2px] self-stretch" />
                                    <div>
                                        <p className="text-[20px] md:text-[24px] font-semibold text-[#2E2E2E]">
                                            {stat.value}
                                        </p>
                                        <p className="text-[#2E2E2E] font-light text-[12px] md:text-[15px]">{stat.label}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </motion.div>

                <VisionMission />
                <FAQ/>
                <CallToAction/>
                <Footer/>
    </div>
   
  )
}

export default page