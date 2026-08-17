"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaPhone,
  FaComment,
  FaEnvelope,
  FaLocationDot,
  FaInstagram,
  FaFacebookF,
} from "react-icons/fa6";
import { logo } from "@/contants";
import { motion } from 'framer-motion';

const quickLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Process", href: "#process" },
  { name: "Contact", href: "#contact" },
];

function Footer() {
  return (
    <motion.div 
      className="w-full bg-[#1f1f1f] px-4 md:px-14 pt-12 md:pt-16 pb-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 pb-8 md:pb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Brand */}
        <motion.div 
          className="flex flex-col gap-4 w-full min-w-0 md:w-auto"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="flex items-center gap-2 min-w-0">
            <Image src={logo} width={35} height={35} alt="" className="md:w-[40px] md:h-[40px]" />
            <p className="min-w-0 text-white font-semibold text-[13px] md:text-[16px] font-serif">
              NEON CREATIVE DESIGN LIMITED.
            </p>
          </div>
          <p className="text-gray-400 text-[13px] md:text-[15px] leading-relaxed">
            Premium cabinetry and interior finishing,<br/> designed and built with
            exceptional craft.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div 
          className="flex flex-col gap-4 w-full min-w-0 md:w-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-white font-medium text-[15px] md:text-[16px]">Quick Links</h3>
          <div className="flex flex-col gap-3">
            {quickLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + (i * 0.05) }}
              >
                <Link
                  href={link.href}
                  className="text-gray-400 text-[13px] md:text-[15px] hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Us */}
        <motion.div 
          className="flex flex-col gap-4 w-full min-w-0 md:w-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-white font-semibold text-[15px] md:text-[16px]">Contact Us</h3>
          <div className="flex flex-col gap-3">
            {[
              { icon: <FaPhone className="text-[#E1AD56]" size={14} />, text: "09119990003" },
              { icon: <FaComment className="text-[#E1AD56]" size={14} />, text: "09119990008" },
              { icon: <FaEnvelope className="text-[#E1AD56]" size={14} />, text: "hello@neonhomeafrica.com" },
              { icon: <FaLocationDot className="text-[#E1AD56]" size={14} />, text: "186a Igbosere Road Lagos Island" },
            ].map((item, i) => (
              <motion.div 
                key={i}
                className="flex items-center gap-3 min-w-0"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + (i * 0.05) }}
              >
                {item.icon}
                <p className="min-w-0 break-words text-gray-400 text-[13px] md:text-[15px]">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Follow Us + Hours */}
        <motion.div 
          className="flex flex-col gap-4 w-full min-w-0 md:w-auto"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-white font-semibold text-[15px] md:text-[16px]">Follow Us</h3>
          <div className="flex items-center gap-3">
            <motion.a
              href="#"
              className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-gray-600 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaInstagram size={16} />
            </motion.a>
            <motion.a
              href="#"
              className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-gray-600 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaFacebookF size={16} />
            </motion.a>
          </div>

          <motion.h3 
            className="text-white font-medium text-[15px] md:text-[16px] mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Showroom Hours
          </motion.h3>
          <motion.div 
            className="text-gray-400 text-[13px] md:text-[15px] flex flex-col gap-1"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <p>Mon – Fri: 9:00 am – 6:00 pm</p>
            <p>Sat: 10:00 am – 4:00 pm</p>
            <p>Sun: By Appointment</p>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.div 
        className="border-t border-gray-700 pt-4 md:pt-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <p className="text-gray-500 text-[12px] md:text-[14px] text-center">
          © 2026 Crafted Interiors. All rights reserved.
        </p>
      </motion.div>
    </motion.div>
  );
}

export default Footer;
