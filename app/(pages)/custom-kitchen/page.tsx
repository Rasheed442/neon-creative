"use client";

import Header from '@/components/Header'
import Image from 'next/image'
import { cust2, cust1,cust3, kitchbg, cust6, cust5, cust4 } from '@/contants'
import { motion, AnimatePresence } from 'framer-motion';
import { FaBoxOpen, FaMinus, FaPlus } from 'react-icons/fa';
import { useState } from 'react';
import CallToAction from '@/components/CallToAction';
import Footer from '@/components/Footer';

function Page() {
    const categories = [
  "All",
  "Modern Kitchens",
  "Island Kitchens",
  "U Shape Kitchens",
  "L Shape Kitchens",
  "Straight Kitchens",
  "T Shape Kitchens",
];

const projects = [
  {
    image: cust1,
    label: "Airis Series White And Wood Two-Tone Modern Style Kitchen Cabinet – OBK24L02",
    categories: ["Modern Kitchens", "U Shape Kitchens", "L Shape Kitchens"],
  },
  {
    image: cust2,
    label: "Cloud Series Luxury Style Kitchen Cabinets With Lacquer Finish – OBK24L04",
    categories: ["Modern Kitchens", "Island Kitchens", "Straight Kitchens"],
  },
  {
    image: cust3,
    label: "Como Series Modern Minimalist Semi-Open Kitchen",
    categories: ["Modern Kitchens", "Island Kitchens", "U Shape Kitchens"],
  },
  {
    image: cust4,
    label: "Hull Series Red Modern Minimalist Stylish Kitchen Cabinets – OBK24L03",
    categories: ["Modern Kitchens", "T Shape Kitchens", "L Shape Kitchens"],
  },
  {
    image: cust5,
    label: "Lumi Series Purple Elegant Handleless Kitchen Cabinet – OBK24L07",
    categories: ["Modern Kitchens", "L Shape Kitchens", "Straight Kitchens"],
  },
  {
    image: cust6,
    label: "Minimalist Elegance Red and Grey Open Concept Kitchen with Island – OBK25L02",
    categories: ["Modern Kitchens", "Island Kitchens", "T Shape Kitchens"],
  },
]


  const faqs = [
    {
      question: "What are Custom Kitchen Cabinets",
      answer:
        "Custom kitchen cabinets are built to order and tailored to the specific requirements of your kitchen from a kitchen cabinet manufacturer. Custom cabinets are not mass-produced in standard sizes, shapes, and finishes compared to pre-made cabinets. Instead, they are designed and crafted to suit your needs, preferences, and space. It means that every aspect of the cabinet, from the materials used to the size and style, is entirely customizable to your liking."
    },
    {
      question: "Types of Custom Cabinetry",
      answer:
        "When it comes to custom kitchen cabinets, there are two main types to consider: framed cabinets and frameless cabinets.\n\nFramed Cabinets:\nFramed cabinets are the traditional style of cabinet construction, built with a frame attached to the front of the cabinet box. This frame supports the doors and drawers while adding a decorative element to the cabinet. It can be made from a variety of materials, including solid wood, MDF, or plywood. Framed cabinets are versatile and can be customized to fit both traditional and contemporary styles.\n\nFrameless Cabinets:\nFrameless cabinets, also known as European-style cabinets, represent a more modern approach to cabinet construction. Rather than relying on a front frame, the cabinet box itself is built with thicker side walls that support the doors and drawers directly. This style is popular in contemporary and minimalist kitchens for its sleek, streamlined look, and is typically made from plywood or MDF finished with laminate or veneer."
    },
    {
      question: "What are the popular materials used in custom kitchen cabinets?",
      answer: "Typically, kitchen cabinets are crafted from premium materials such as wood, medium-density fiberboard (MDF), and high-gloss finishes, ensuring every kitchen achieves a balance of durability, aesthetic appeal, and practical functionality.."
    },
    {
      question: "What design styles are trending for custom kitchen cabinets?",
      answer: "Please refer to the latest custom cabinet trends guide: Modern Kitchen Design Trends. You can also obtain the latest design guide by downloading our free brochure: Download Catalogues!"
    },
    {
      question: "What is the average cost of custom kitchen cabinets?",
      answer: "Here’s a breakdown of what you can generally expect to pay for custom kitchen cabinets, along with key factors that drive the cost: For modest size & simpler materials: $7,000–12,000 (or equivalent locally). For a full luxury custom kitchen: $20,000–30,000+ (or higher depending on scope and materials)."
    },
    {
      question: "How do I choose the right custom kitchen cabinets for my space?",
      answer: "To select the perfect cabinets, consider your style preferences, layout, material, and budget. NEONHOMEAFRICA’s guide helps you make an informed decision tailored to your space and needs."
    },
    {
      question: "Can I get a free consultation for custom kitchen cabinets installation?",
      answer: "Of course, NEONHOMEAFRICA designers offer complimentary consultation and design services. Whether you make a purchase or not, we provide free consultations.Contact us today!"
    },
    {
      question: "Does NEONHOMEAFRICA offer eco-friendly custom kitchen cabinets?",
      answer: "Yes, all NEONHOMEAFRICA panels comply with emission class E1, tested with the European chamber method EN717-1, and meet the stringent California Air Resources Board (CARB) emissions standards. We only purchase panels from FSC-certified suppliers, guaranteeing that the wood products that consumers purchase are not coming from questionable sources or from overexploitation, but come from managed semi-natural forests."
    }
  ];


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


  const [activeCategory, setActiveCategory] = useState("All");
  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.categories.includes(activeCategory));

  return (
    <div>
           <div className="h-[70vh] sm:h-[75vh] md:h-[80vh] relative">
              {/* Background image layer */}
              <div className="absolute inset-0 -z-10">
                <Image
                  src={kitchbg}
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
              <div className="relative z-10 min-h-[50vh] sm:min-h-[55vh] md:min-h-[60vh] flex flex-col items-center justify-end text-center px-4">
                <h2 className="font-serif text-white text-[26px] sm:text-[32px] font-semibold md:text-[44px] lg:text-[56px]">
                  Custom Kitchen
                </h2>
                <p className="text-gray-300 text-[13px] sm:text-[14px] md:text-[17px] mt-3 md:mt-4 ">
                  Get a custom kitchen design you will love for a life. 
                </p>
              </div>
            </div>

            <div className='bg-[#F7F4EF] px-4 sm:px-6 md:px-14 py-12 sm:py-16 md:py-24'>
                 <motion.div 
        className="flex flex-wrap items-center justify-center md:justify-start gap-1.5 sm:gap-1 mb-6 md:mb-6"
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
              className={`px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-2.5 rounded text-[12px] sm:text-[13px] md:text-[15px] border border-gray-200 font-normal cursor-pointer transition-colors ${
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
          className="flex flex-col items-center justify-center text-center py-16 sm:py-20 md:py-28 rounded px-4"
        >
          <FaBoxOpen className="text-gray-300 mb-4 animate-bounce" size={48} />
          <p className="font-serif text-[#1f1f1f] text-[18px] sm:text-[20px] md:text-[24px]">
            No projects yet in {activeCategory}
          </p>
          <p className="text-gray-500 text-[13px] sm:text-[14px] md:text-[15px] mt-2 max-w-xs">
            We&apos;re still adding pieces to this collection — check back soon
            or explore another category.
          </p>
        </motion.div>
      ) : (
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8"
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
                className="relative w-full h-[220px] sm:h-[280px] md:h-[420px] overflow-hidden group cursor-pointer"
                whileHover={{ scale: 1.02 }}
              >
                <Image
                  src={project.image}
                  alt={project.label}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-x-0 bottom-0 min-h-10 sm:h-12 bg-black/10 backdrop-blur-sm flex items-center justify-center px-2 py-1.5">
                  <p className="text-white font-sans text-[11px] sm:text-[12px] md:text-[13px] font-medium text-center leading-snug line-clamp-2">
                    {project.label}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}
            </div>

     <div className="max-w-3xl mx-auto text-center py-10 md:py-16 px-4">

  <h2 className="font-serif text-[#1f2440] text-[26px] sm:text-[32px] md:text-[38px] leading-tight">
    FAQs About Custom Kitchen Cabinets
  </h2>
  <p className="text-[#2E2E2E] text-[14px] md:text-[15px] mt-4">
    Discover NEONHOMEAFRICA’s premium custom kitchen cabinets, designed for every style and layout.
    With a range of materials, finishes, and designs,
    we offer tailored solutions to create your dream kitchen. Start designing your custom kitchen today.
  </p>
</div>

<div className="px-4 sm:px-8 md:px-16 lg:px-24 pb-12 md:pb-24">
  {faqs.map((faq, index) => {
    const isOpen = openIndices.has(index)
    return (
      <div key={index} className="border-b border-gray-300">
        <button
          onClick={() => toggle(index)}
          className="w-full flex items-center justify-between py-4 md:py-6 text-left"
        >
          <span className="text-[#1f2440] font-medium text-[15px] sm:text-[16px] md:text-[18px] pr-4">
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
              <p className="text-gray-500 text-[14px] sm:text-[15px] whitespace-pre-line md:text-[16px] leading-relaxed pb-6 pr-4 sm:pr-8 md:pr-10">
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

export default Page
