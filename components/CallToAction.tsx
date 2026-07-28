"use client";

import { ctabg } from "@/contants";
import { FaArrowRight } from "react-icons/fa6";

function CallToAction() {
  return (
    <div
      className="relative w-full h-[600px] bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${ctabg.src})` }}
    >
      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 flex flex-col items-center text-center px-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-white h-[1.7px] w-10" />
          <div className="bg-[#E1AD56] h-2 w-2 rounded-full" />
        </div>

        <h2 className="font-serif text-white text-[46px]">
          Ready to Transform Your Space?
        </h2>

        <p className="text-gray-200 text-[17px] font-light mt-4 max-w-xl">
          Let&apos;s create a home you&apos;ll love for years to come. Our team
          is ready to bring your vision to life.
        </p>

        <button className="mt-8 bg-[#E1AD56] text-white px-8 py-4 rounded-sm font-medium flex items-center gap-2">
          Get a Free Consultation <FaArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}

export default CallToAction;