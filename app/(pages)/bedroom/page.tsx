"use client";

import Header from '@/components/Header'
import Image from 'next/image'
import { cust2, cust1,cust3, kitchbg, cust6, cust5, cust4, bedroomImages } from '@/contants'
import { motion, AnimatePresence } from 'framer-motion';
import { FaBoxOpen, FaMinus, FaPlus } from 'react-icons/fa';
import { useState } from 'react';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

function page() {
    const categories = [
  "All",
  "Custom Wardrobes",
  "Built In Wardrobes",
  "Walk in Closet",
  "Hinge Door Wardrobe",
  "Sliding Door Wardrobe",
];

const faqs = [
  {
    question: "What are Custom Kitchen Cabinets",
    answer:
      "Custom kitchen cabinets are built to order and tailored to the specific requirements of your kitchen from a kitchen cabinet manufacturer. Custom cabinets are not mass-produced in standard sizes, shapes, and finishes compared to pre-made cabinets. Instead, they are designed and crafted to suit your needs, preferences, and space. It means that every aspect of the cabinet, from the materials used to the size and style, is entirely customizable to your liking.",
  },
  {
    question: "Types of Custom Cabinetry",
    answer:
      "",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "",
  },
  {
    question: "Can other info be added to an invoice?",
    answer:
      "",
  },
  {
    question: "How does billing work?",
    answer:
      "",
  },
  {
    question: "How do I change my account email?",
    answer:
      "",
  },
  {
    question: "How do I change my account email?",
    answer:
      "",
  },
  {
    question: "How do I change my account email?",
    answer:
      "",
  },
]


  const [openIndices, setOpenIndices] = useState<Set<number>>(new Set([0]))
    const toggle = (index: number) => {
    setOpenIndices((prev) => {
      const next = new Set(prev)
      if (next.has(index)) {
        next.delete(index)
      } else {
        next.add(index)
      }
      return next
    })
  }
const projects = [
  {
    image: bedroomImages.be1,
    label: "Airis Series White And Wood Two-Tone Modern Style Kitchen Cabinet – OBK24L02",
    category: "Custom Wardrobes",
  },
  {
    image: bedroomImages.be2,
    label: "Cloud Series Luxury Style Kitchen Cabinets With Lacquer Finish – OBK24L04",
    category: "Built In Wardrobes",
  },
  {
    image: bedroomImages.be3,
    label: "Como Series Modern Minimalist Semi-Open Kitchen",
    category: "Walk in Closet",
  },
  {
    image: bedroomImages.be4,
    label: "Hull Series Red Modern Minimalist Stylish Kitchen Cabinets – OBK24L03",
    category: "Hinge Door Wardrobe",
  },
  {
    image: bedroomImages.be5,
    label: "Lumi Series Purple Elegant Handleless Kitchen Cabinet – OBK24L07",
    category: "Sliding Door Wardrobe",
  },
  {
    image: bedroomImages.be6,
    label: "Lumi Series Purple Elegant Handleless Kitchen Cabinet – OBK24L07",
    category: "Sliding Door Wardrobe",
  }

]

  const [activeCategory, setActiveCategory] = useState("All");
  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div>
           <div className="h-[80vh] relative">
              {/* Background image layer */}
              <div className="absolute inset-0 -z-10">
                <Image
                  src={bedroomImages.bedbg}
                  alt="background"
                  fill
                  priority
                  className="object-cover transition-opacity duration-700 ease-in-out"
                />
              </div>
        
              {/* Overlay for contrast */}
              <div className="absolute inset-0 -z-10 bg-black/30" />
        
              {/* Header */}
              <div className="relative z-10">
                <Header />
              </div>
        
              {/* Hero text */}
              <div className="relative z-10 min-h-[60vh] flex flex-col items-center justify-end text-center px-4">
                <h2 className="font-serif text-white text-[32px] font-semibold md:text-[44px] lg:text-[56px]">
                  Bedrooms
                </h2>
                <p className="text-gray-300 text-[14px] md:text-[17px] mt-4 ">
                  Organize your bedroom in a better way
                </p>
              </div>
            </div>

            <div className='bg-[#F7F4EF] px-14 py-24'>
                 <motion.div 
        className="flex flex-wrap items-center justify-center md:justify-start gap-1 mb-6 md:mb-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {categories.map((category) => {
          const isActive = category === activeCategory;
          return (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 md:px-6 py-2 md:py-2.5 rounded text-[13px] md:text-[15px] border border-gray-200 font-normal cursor-pointer transition-colors ${
                isActive
                  ? "bg-[#1f1f1f] text-white"
                  : "bg-white text-[#2E2E2E] hover:bg-gray-100"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          );
        })}
      </motion.div>

      {/* Grid or Empty State */}
      {filteredProjects.length === 0 ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col items-center justify-center text-center py-20 md:py-28 rounded"
        >
          <FaBoxOpen className="text-gray-300 mb-4 animate-bounce" size={60} />
          <p className="font-serif text-[#1f1f1f] text-[20px] md:text-[24px]">
            No projects yet in {activeCategory}
          </p>
          <p className="text-gray-500 text-[14px] md:text-[15px] mt-2 max-w-xs">
            We&apos;re still adding pieces to this collection — check back soon
            or explore another category.
          </p>
        </motion.div>
      ) : (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.label}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative w-full h-[300px] md:h-[420px] overflow-hidden group cursor-pointer"
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src={project.image}
                  alt={project.label}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-x-0 bottom-0 h-12 bg-black/10 backdrop-blur-sm flex items-center justify-center">
                  <p className="text-white font-sans text-[13px] md:text-[13px] font-medium">
                    {project.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}
            </div>

              <div className="max-w-3xl mx-auto text-center py-16">
       
        <h2 className="font-serif text-[#1f2440] text-[32px] md:text-[38px] leading-tight">
          FAQs About Bedroom Wardrobe
        </h2>
        <p className="text-[#2E2E2E] text-[15px] md:text-[14px] mt-4">
          Oppolia is a well-known company that manufactures a wide range of fitted wardrobes. 
          At a very affordable cost. You will uncover everything you require to fit your room and lifestyle. We sell in bulk or retail
          . Learn about our many fitted wardrobe choices and designs below.
        </p>
      </div>

        <div className="px-24 pb-24">
              {faqs.map((faq, index) => {
                const isOpen = openIndices.has(index)
                return (
                  <div key={index} className="border-b border-gray-300">
                    <button
                      onClick={() => toggle(index)}
                      className="w-full flex items-center justify-between py-6 text-left"
                    >
                      <span className="text-[#1f2440] font-medium text-[16px] md:text-[18px] pr-4">
                        {faq.question}
                      </span>
                      <span className="shrink-0 w-6 h-6 rounded-full border border-[#1f2440] flex items-center justify-center text-[#1f2440] text-xs">
                        {isOpen ? <FaMinus /> : <FaPlus />}
                      </span>
                    </button>
      
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p className="text-gray-500 text-[15px] md:text-[16px] leading-relaxed pb-6 pr-10">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              })}
    </div>
    <CallToAction />
    <Footer/>
    </div>
  )
}

export default page