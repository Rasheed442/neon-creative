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

const quickLinks = ["About", "Services", "Projects", "Process", "Contact"];

function Footer() {
  return (
    <div className="w-full bg-[#1f1f1f] px-14 pt-16 pb-6">
      <div className="flex justify-between gap-18 pb-12">
        {/* Brand */}
        <div className="flex flex-col gap-4">
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
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-4">
          <h3 className="text-white font-semibold text-[16px]">Quick Links</h3>
          <div className="flex flex-col gap-3">
            {quickLinks.map((link) => (
              <Link
                key={link}
                href="#"
                className="text-gray-400 text-[15px] hover:text-white transition-colors"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact Us */}
        <div className="flex flex-col gap-4">
          <h3 className="text-white font-semibold text-[16px]">Contact Us</h3>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <FaPhone className="text-[#E1AD56]" size={14} />
              <p className="text-gray-400 text-[15px]">+234 90 7123 4567</p>
            </div>
            <div className="flex items-center gap-3">
              <FaComment className="text-[#E1AD56]" size={14} />
              <p className="text-gray-400 text-[15px]">+234 90 7123 4567</p>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-[#E1AD56]" size={14} />
              <p className="text-gray-400 text-[15px]">
                hello@craftedinteriors.co.ng
              </p>
            </div>
            <div className="flex items-center gap-3">
              <FaLocationDot className="text-[#E1AD56]" size={14} />
              <p className="text-gray-400 text-[15px]">Lekki, Lagos</p>
            </div>
          </div>
        </div>

        {/* Follow Us + Hours */}
        <div className="flex flex-col gap-4">
          <h3 className="text-white font-semibold text-[16px]">Follow Us</h3>
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
            >
              <FaInstagram size={16} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors"
            >
              <FaFacebookF size={16} />
            </a>
          </div>

          <h3 className="text-white font-medium text-[16px] mt-4">
            Showroom Hours
          </h3>
          <div className="text-gray-400 text-[15px] flex flex-col gap-1">
            <p>Mon – Fri: 9:00 am – 6:00 pm</p>
            <p>Sat: 10:00 am – 4:00 pm</p>
            <p>Sun: By Appointment</p>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 pt-6">
        <p className="text-gray-500 text-[14px] text-center">
          © 2026 Crafted Interiors. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;