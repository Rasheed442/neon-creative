"use client";

import Image from "next/image";
import { about } from "@/contants";

const stats = [
    { value: "500+", label: "Projects Completed" },
    { value: "100%", label: "Client Satisfaction" },
    { value: "15+", label: "Design Awards" },
    { value: "3", label: "Showroom Locations" },
];

function About() {
    return (
        <div>
            <div className="w-full bg-[#1f1f1f]/95 px-14 py-9 flex items-center justify-between">
                <p className="font-serif text-white text-[26px] italic">
                    Premium craftsmanship.{" "}
                    <span className="text-[#E1AD56]">Thoughtful design.</span> Exceptional
                    finishing.
                </p>

                <p className="text-gray-300 text-[15px] text-right leading-relaxed">
                    Every project is carefully planned, handcrafted, and installed with
                    attention to every detail.
                </p>
            </div>
            <div className="w-full bg-[#F7F4EF] px-14 py-24 flex items-center gap-16">

                {/* Left: Image with floating badge */}
                <div className="relative w-[45%]">
                    <div className="relative w-full h-[560px] rounded-sm overflow-hidden">
                        <Image
                            src={about}
                            alt="Neon Creative Design kitchen"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="absolute bottom-0 right-6 bg-[#2a2a2a] px-6 py-6">
                        <p className="text-[#E1AD56] text-[32px] font-semibold leading-none">
                            12+
                        </p>
                        <p className="text-white text-[15px] mt-1">Years of Excellence</p>
                    </div>
                </div>

                {/* Right: Content */}
                <div className="w-[55%] flex flex-col gap-6">
                    <div className="flex items-center gap-3">
                        <div className="bg-[#E1AD56] h-[1.7px] w-10" />
                        <div className="bg-[#E1AD56] h-2 w-2 rounded-full" />
                    </div>

                    <h2 className="font-serif text-[52px] text-[#1f1f1f] leading-tight">
                        About Neon Creative Design Limited
                    </h2>

                    <p className="text-gray-600 font-light text-[17px] leading-relaxed">
                        We specialize in creating elegant kitchens, bespoke wardrobes, TV units,
                        storage solutions, and complete interior finishing that combine beauty
                        with functionality.
                    </p>
                    <p className="text-gray-600 font-light text-[17px] leading-relaxed">
                        Whether you&apos;re building a new home or renovating an existing one, our
                        team delivers premium craftsmanship using quality materials and modern
                        design techniques.
                    </p>

                    <div className="grid grid-cols-2 gap-x-12 gap-y-8 mt-4">
                        {stats.map((stat, i) => (
                            <div key={i} className="flex items-center gap-4">
                                <div className="bg-[#E1AD56] w-[2px] self-stretch" />
                                <div>
                                    <p className="text-[26px] font-semibold text-[#2E2E2E]">
                                        {stat.value}
                                    </p>
                                    <p className="text-[#2E2E2E] font-light text-[15px]">{stat.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    );
}

export default About;