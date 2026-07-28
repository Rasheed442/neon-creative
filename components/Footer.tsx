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

const quickLinks = ["About", "Services", "Projects", "Process", "Contact"];

function Footer() {
  return (
    <motion.div 
      className="w-full bg-[#1f1f1f] px-14 pt-16 pb-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <motion.div 
        className="flex justify-between gap-18 pb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Brand */}
        <motion.div 
          className="flex flex-col gap-4"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="flex items-center gap-2">
            <Image src={logo} width={40} height={40} alt="" />
            <p className="text-white font-semibold text-[16px] font-serif">
              NEON CREATIVE DESIGN LIMITED.
            </p>
          </div>
          <p className="text-gray-400 text-[15px] leading-relaxed">
            Premium cabinetry and interior finishing,<br/> designed and built with
            exceptional craft.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div 
          className="flex flex-col gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-white font-medium text-[16px]">Quick Links</h3>
          <div className="flex flex-col gap-3">
            {quickLinks.map((link, i) => (
              <motion.div
                key={link}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + (i * 0.05) }}
              >
                <Link
                  href="#"
                  className="text-gray-400 text-[15px] hover:text-white transition-colors"
                >
                  {link}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Us */}
        <motion.div 
          className="flex flex-col gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-white font-semibold text-[16px]">Contact Us</h3>
          <div className="flex flex-col gap-3">
            {[
              { icon: <FaPhone className="text-[#E1AD56]" size={14} />, text: "+234 90 7123 4567" },
              { icon: <FaComment className="text-[#E1AD56]" size={14} />, text: "+234 90 7123 4567" },
              { icon: <FaEnvelope className="text-[#E1AD56]" size={14} />, text: "hello@craftedinteriors.co.ng" },
              { icon: <FaLocationDot className="text-[#E1AD56]" size={14} />, text: "Lekki, Lagos" },
            ].map((item, i) => (
              <motion.div 
                key={i}
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + (i * 0.05) }}
              >
                {item.icon}
                <p className="text-gray-400 text-[15px]">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Follow Us + Hours */}
        <motion.div 
          className="flex flex-col gap-4"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-white font-semibold text-[16px]">Follow Us</h3>
          <div className="flex items-center gap-3">
            <motion.a
              href="#"
              className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaInstagram size={16} />
            </motion.a>
            <motion.a
              href="#"
              className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaFacebookF size={16} />
            </motion.a>
          </div>

          <motion.h3 
            className="text-white font-medium text-[16px] mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Showroom Hours
          </motion.h3>
          <motion.div 
            className="text-gray-400 text-[15px] flex flex-col gap-1"
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
        className="border-t border-gray-700 pt-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.7 }}
      >
        <p className="text-gray-500 text-[14px] text-center">
          © 2026 Crafted Interiors. All rights reserved.
        </p>
      </motion.div>
    </motion.div>
  );
}

export default Footer;