"use client";

import React from 'react'
import { motion } from 'framer-motion'
import { FaRegCommentDots, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'

const contactCards = [
  {
    icon: FaRegCommentDots,
    title: "Chat to support",
    subtitle: "We're here to help.",
    details: ["support@untitledui.com"],
    bg: "bg-[#1f1f1f]",
    iconBg: "bg-[#E1AD56]",
    textColor: "text-white",
    subTextColor: "text-gray-300",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Visit us",
    subtitle: "Visit our office HQ.",
    details: ["100 Smith Street", "Collingwood VIC 3066 AU"],
    bg: "bg-[#E1AD56]",
    iconBg: "bg-[#1f1f1f]",
    textColor: "text-white",
    subTextColor: "text-white/80",
  },
  {
    icon: FaPhoneAlt,
    title: "Call us",
    subtitle: "Mon-Fri from 8am to 5pm.",
    details: ["+1 (555) 000-0000"],
    bg: "bg-[#E7E1D8]",
    iconBg: "bg-[#1f1f1f]",
    textColor: "text-[#1f1f1f]",
    subTextColor: "text-gray-600",
  },
]

function ContactCards() {
  return (
    <section className="bg-[#f7f3ee] py-16 md:py-20 px-4 md:px-14">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {contactCards.map((card, index) => {
          const Icon = card.icon
          return (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`${card.bg} rounded-lg p-6 md:p-8 flex flex-col justify-between min-h-[260px] md:min-h-[300px]`}
            >
              <div
                className={`${card.iconBg} w-12 h-12 rounded-lg flex items-center justify-center text-white text-lg`}
              >
                <Icon />
              </div>

              <div className="mt-auto pt-16">
                <h3 className={`${card.textColor} font-medium text-[22px] mb-2`}>
                  {card.title}
                </h3>
                <p className={`${card.subTextColor} text-[15px] mb-6`}>
                  {card.subtitle}
                </p>
                <div className={`${card.textColor} text-[16px] font-medium`}>
                  {card.details.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}

export default ContactCards
