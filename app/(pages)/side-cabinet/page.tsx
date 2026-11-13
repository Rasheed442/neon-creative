"use client";

import Header from '@/components/Header'
import Image from 'next/image'
import { sideCabinetImages } from '@/contants'
import { motion } from 'framer-motion';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';
import FAQ, { sideCabinetFaqs } from '@/components/Faq';

function Page() {
  return (
    <div>
      <div className="h-[70vh] sm:h-[75vh] md:h-[80vh] relative">
        {/* Background image layer */}
        <div className="absolute inset-0 -z-10">
          <Image
            src={sideCabinetImages.sidecabinetbg}
            alt="Side Cabinet Background"
            fill
            priority
            className="object-cover transition-opacity duration-700 ease-in-out"
          />
        </div>

        {/* Overlay for contrast */}
        <div className="absolute inset-0 -z-10 bg-black/40" />

        {/* Header */}
        <Header />

        {/* Hero text */}
        <div className="relative z-10 min-h-[50vh] sm:min-h-[55vh] md:min-h-[60vh] flex flex-col items-center justify-end text-center px-4">
          <h2 className="font-serif text-white text-[28px] sm:text-[36px] font-semibold md:text-[46px] lg:text-[58px]">
            Side Cabinet
          </h2>
          <p className="text-gray-300 text-[13px] md:text-[18px] mt-4 max-w-2xl">
            Compact and stylish storage solutions that add functionality and elegance to any space.
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 md:py-16">
        <div className="text-center mb-8 md:mb-12">
          <p className="text-[#2E2E2E] text-[15px] sm:text-[17px] md:text-[19px] font-medium max-w-3xl mx-auto leading-relaxed">
            Beautifully crafted Side Cabinet designed for comfort, elegance, and memorable moments.
          </p>
        </div>

        {/* Featured Showcase Item */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative w-full max-w-4xl mx-auto h-[320px] sm:h-[450px] md:h-[560px] overflow-hidden group cursor-pointer shadow-lg rounded-sm"
        >
          <Image
            src={sideCabinetImages.sidecab1}
            alt="Custom Side Cabinets Collection"
            fill
            className="object-cover group-hover:scale-103 transition-transform duration-500"
          />
          <div className="absolute inset-x-0 bottom-0 min-h-12 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4 py-2">
            <p className="text-white font-sans text-[12px] sm:text-[14px] md:text-[15px] font-medium text-center">
              Luxury Custom Side Cabinets & Modern Accent Sideboards
            </p>
          </div>
        </motion.div>
      </div>

      <FAQ
        faqs={sideCabinetFaqs}
        title="Frequently Asked Questions."
        subtitle="FAQs"
        description="Need something cleared up? Here are our most frequently asked questions."
      />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default Page;

