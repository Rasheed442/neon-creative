"use client";

import { FaQuoteRight } from "react-icons/fa6";

const testimonials = [
  {
    quote:
      "Our kitchen completely transformed the feel of our home. Excellent workmanship and attention to detail throughout the entire process.",
    name: "Sarah & James Mitchell",
    location: "Hampstead, London",
    initial: "S",
  },
  {
    quote:
      "The wardrobe design was exactly what we imagined — beautiful, functional, and professionally installed. We couldn't be happier.",
    name: "Priya Sharma",
    location: "Canary Wharf, London",
    initial: "P",
  },
];

function Testimonials() {
  return (
    <div className="w-full bg-[#F7F4EF] px-14 py-24">
      <div className="flex flex-col items-center text-center mb-16">
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-[#E1AD56] h-[1.7px] w-10" />
          <div className="bg-[#E1AD56] h-2 w-2 rounded-full" />
        </div>
        <h2 className="font-serif text-[#1f1f1f] text-[46px]">
          What Our Clients Say
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-8 max-w-5xl mx-auto">
        {testimonials.map((testimonial, i) => (
          <div
            key={i}
            className="relative bg-white shadow-sm p-10 flex flex-col gap-6"
          >
            <FaQuoteRight className="absolute top-6 right-8 text-[#E1AD56]/40" size={36} />

            <p className="font-serif italic text-[#1f1f1f] text-[19px] py-8 leading-relaxed">
              &quot;{testimonial.quote}&quot;
            </p>

            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-[#e5ded2] flex items-center justify-center text-[#1f1f1f] font-semibold">
                {testimonial.initial}
              </div>
              <div>
                <p className="font-semibold text-[#1f1f1f] text-[15px]">
                  {testimonial.name}
                </p>
                <p className="text-gray-500 text-[14px]">
                  {testimonial.location}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;