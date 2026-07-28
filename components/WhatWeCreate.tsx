"use client";

import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { Kitchen, Wardrobe, Ceiling, Stone } from "@/contants";

const services = [
  {
    image: Kitchen,
    title: "Custom Kitchens",
    description: "Modern & classic kitchen cabinetry built to maximize space and functionality.",
  },
  {
    image: Wardrobe,
    title: "Wardrobes",
    description: "Walk-in closets, sliding wardrobes, fitted wardrobes, and custom storage.",
  },
  {
    image: Ceiling,
    title: "Ceiling & Lighting",
    description: "Custom ceiling designs with integrated lighting for every space.",
  },
  {
    image: Stone,
    title: "Stone & Surfaces",
    description: "Premium countertops, marble, and surface finishing for a lasting impression.",
  },
];

function WhatWeCreate() {
  return (
    <div className="w-full bg-[#2a2a2a] px-14 py-24">
      {/* Heading */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-white h-[1.7px] w-10" />
          <div className="bg-[#E1AD56] h-2 w-2 rounded-full" />
        </div>
        <h2 className="font-serif text-white text-[46px]">What We Create</h2>
        <p className="text-gray-300 text-[16px] mt-4 max-w-xl">
          Tailored solutions for every room in your home, built with precision and
          designed with intent.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-4 ">
        {services.map((service, i) => (
          <div key={i} className="bg-[#333333] flex flex-col pt-4 p-2">
            <div className="relative w-full h-[600px]">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>

            <div className="flex flex-col items-center text-center px-10 py-8 gap-3">
              <h3 className="font-serif text-white text-[28px]">
                {service.title}
              </h3>
              <p className="text-gray-300 text-[15px]">{service.description}</p>

              <button className="mt-4 bg-[#E1AD56] text-white px-6 py-3 rounded-sm font-medium flex items-center gap-2">
                Explore Collection <FaArrowRight size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhatWeCreate;