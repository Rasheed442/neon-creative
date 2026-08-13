"use client";

import React, { useState } from 'react'
import Image from 'next/image'
import { AnimatePresence, motion } from 'framer-motion'
import { consultationImages, ctbgImages } from '@/contants'
import CallToAction from './CallToAction';
import Footer from './Footer';
import { FaMinus, FaPlus } from 'react-icons/fa';
import FAQ from './Faq';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [openIndices, setOpenIndices] = useState<Set<number>>(new Set([0]));

  const toggle = (index: number) => {
    
    setOpenIndices((prev) => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

    const faqs = [
    {
      question: "What are Custom Kitchen Cabinets",
      answer:
        "Custom kitchen cabinets are built to order and tailored to the specific requirements of your kitchen from a kitchen cabinet manufacturer. Custom cabinets are not mass-produced in standard sizes, shapes, and finishes compared to pre-made cabinets. Instead, they are designed and crafted to suit your needs, preferences, and space. It means that every aspect of the cabinet, from the materials used to the size and style, is entirely customizable to your liking."
    },
    {
      question: "Types of Custom Cabinetry",
      answer: ""
    },
    {
      question: "What is your cancellation policy?",
      answer: ""
    },
    {
      question: "Can other info be added to an invoice?",
      answer: ""
    },
    {
      question: "How does billing work?",
      answer: ""
    },
    {
      question: "How do I change my account email?",
      answer: ""
    },
    {
      question: "How do I change my account email?",
      answer: ""
    },
    {
      question: "How do I change my account email?",
      answer: ""
    }
  ];

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Replace with your actual submit logic (API route, email service, etc.)
      console.log("Form submitted:", formData)
      await new Promise((resolve) => setTimeout(resolve, 800))
      setFormData({ name: "", email: "", phone: "", message: "" })
    } catch (err) {
      console.error("Submission failed:", err)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
           <section className="bg-white py-20 md:py-28 px-4 md:px-14">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
        {/* Left: Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-[#1f2440] text-[32px] md:text-[38px] font-semibold leading-tight mb-2">
            Send a Message
          </h2>
          <p className="text-gray-500 text-[15px] md:text-[16px] mb-8 max-w-md">
            You can reach us anytime via <span className="text-[#E1AD56]">hi@untitledui.com</span>
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <label
                htmlFor="name"
                className="block text-[#1f2440] text-[14px] font-medium mb-2"
              >
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="w-full border border-gray-300 rounded px-4 py-3 text-[15px] text-[#1f2440] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E1AD56] focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-[#1f2440] text-[14px] font-medium mb-2"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@company.com"
                required
                className="w-full border border-gray-300 rounded px-4 py-3 text-[15px] text-[#1f2440] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E1AD56] focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-[#1f2440] text-[14px] font-medium mb-2"
              >
                Phone number
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+1 (555) 000-0000"
                className="w-full border border-gray-300 rounded px-4 py-3 text-[15px] text-[#1f2440] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E1AD56] focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-[#1f2440] text-[14px] font-medium mb-2"
              >
                How can we help?
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us a little about the project..."
                className="w-full border border-gray-300 rounded px-4 py-3 text-[15px] text-[#1f2440] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#E1AD56] focus:border-transparent transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-2 bg-[#E1AD56] text-white font-medium py-3.5 rounded hover:bg-[#c9963d] transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Get started"}
            </button>
          </form>
        </motion.div>

        {/* Right: Image with offset accent panel */}
      {/* Right: Image with offset accent panel */}
{/* Right: Image with offset accent panel */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.15 }}
  className="relative w-full h-[400px] md:h-[560px]"
>
  {/* Offset accent panel — painted first, sits behind by DOM order alone */}
  <div className="absolute left-[-16px] top-6 bottom-6 w-16 md:w-20 bg-[#E1AD56]" />

  {/* Image — absolute + later in DOM, so it naturally paints on top */}
  <div className="absolute inset-0 overflow-hidden">
    <Image
      src={ctbgImages.cont}
      alt="Free consultation"
      fill
      className="object-cover"
    />
  </div>
</motion.div>
      </div>
    </section>

{/* <div className='bg-[#F7F4EF]'>
    <div className="max-w-3xl mx-auto text-center py-16">
        <p className=''>FAQs</p>
        <h2 className="font-serif text-[#1f2440] text-[32px] md:text-[38px] leading-tight">
         Frequently Asked Questions.
        </h2>
        <p className="text-[#2E2E2E] text-[15px] md:text-[14px] mt-4">
          Need something cleared up? Here are our most frequently asked questions.
        </p>
      </div>

      <div className="px-24 pb-24">
        {faqs.map((faq, index) => {
          const isOpen = openIndices.has(index);
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
                  {isOpen ? <FaMinus /> : <FaPlus /> }
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
          );
        })}
      </div>
</div> */}
      
      <FAQ/>
      <CallToAction />
      <Footer />
 
    </div>

  )
}

export default ContactUs