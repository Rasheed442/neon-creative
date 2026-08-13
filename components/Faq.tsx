"use client";

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaPlus, FaMinus } from 'react-icons/fa'

const faqs = [
  {
    question: "Is there a free trial available?",
    answer:
      "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible.",
  },
  {
    question: "Can I change my plan later?",
    answer:
      "Our tailored services address key challenges such as regulatory hurdles, market entry strategies and sales optimization. whether you are a startup or an established enterprise, We provide the support needed to thrive in this dynamic market",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "Our tailored services address key challenges such as regulatory hurdles, market entry strategies and sales optimization. whether you are a startup or an established enterprise, We provide the support needed to thrive in this dynamic market",
  },
  {
    question: "Can other info be added to an invoice?",
    answer:
      "Our tailored services address key challenges such as regulatory hurdles, market entry strategies and sales optimization. whether you are a startup or an established enterprise, We provide the support needed to thrive in this dynamic market",
  },
  {
    question: "How does billing work?",
    answer:
      "Our tailored services address key challenges such as regulatory hurdles, market entry strategies and sales optimization. whether you are a startup or an established enterprise, We provide the support needed to thrive in this dynamic market",
  },
  {
    question: "How do I change my account email?",
    answer:
      "Our tailored services address key challenges such as regulatory hurdles, market entry strategies and sales optimization. whether you are a startup or an established enterprise, We provide the support needed to thrive in this dynamic market",
  },
  {
    question: "How do I change my account email?",
    answer:
      "Our tailored services address key challenges such as regulatory hurdles, market entry strategies and sales optimization. whether you are a startup or an established enterprise, We provide the support needed to thrive in this dynamic market",
  },
  {
    question: "How do I change my account email?",
    answer:
      "Our tailored services address key challenges such as regulatory hurdles, market entry strategies and sales optimization. whether you are a startup or an established enterprise, We provide the support needed to thrive in this dynamic market",
  },
]

function FAQ() {
  // All items open by default; toggling a question removes it from the open set
  const [openIndices, setOpenIndices] = useState<Set<number>>(
    new Set(faqs.map((_, i) => i))
  )

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

  return (
    <section className="bg-[#f7f3ee] py-14 px-4 sm:px-6 md:py-20 md:py-28 lg:px-4">
      <div className="max-w-3xl mx-auto text-center mb-10 md:mb-16">
        <p className="italic text-[#1f2440] text-sm md:text-[26px] mb-4 font-serif">
          FAQs
        </p>
        <h2 className="font-serif text-[#1f2440] text-[28px] sm:text-[32px] md:text-[42px] leading-tight">
          Frequently Asked Questions.
        </h2>
        <p className="text-gray-500 text-[14px] md:text-[14px] mt-4 leading-relaxed">
          Need something cleared up? Here are our most frequently asked questions.
        </p>
      </div>

      <div className="px-0 sm:px-4 md:px-8 lg:px-24">
        {faqs.map((faq, index) => {
          const isOpen = openIndices.has(index)
          return (
            <div key={index} className="border-b border-gray-300">
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between gap-3 py-5 text-left sm:py-6"
              >
                <span className="text-[#1f2440] font-medium text-[14px] sm:text-[16px] md:text-[18px] pr-2 leading-relaxed">
                  {faq.question}
                </span>
                <span className="shrink-0 w-6 h-6 rounded-full border border-[#1f2440] flex items-center justify-center text-[#1f2440] text-[10px] sm:text-xs">
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
                    <p className="text-gray-500 text-[13px] sm:text-[15px] md:text-[16px] leading-relaxed pb-5 pr-0 sm:pb-6 sm:pr-8 md:pr-10">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default FAQ