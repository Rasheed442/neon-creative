"use client";

import React, { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { consultationImages, consultationImg } from '@/contants'

function FreeConsultation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
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
            Free Consultation
          </h2>
          <p className="text-gray-500 text-[15px] md:text-[16px] mb-8 max-w-md">
            Please fill in the form and we will contact you within 48 hours.
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
      src={consultationImages.consultationImg}
      alt="Free consultation"
      fill
      className="object-cover"
    />
  </div>
</motion.div>
      </div>
    </section>
  )
}

export default FreeConsultation