"use client";

import Image from "next/image";
import { about } from "@/contants";
import { motion } from 'framer-motion';

const stats = [
    { value: "500+", label: "Projects Completed" },
    { value: "100%", label: "Client Satisfaction" },
    { value: "15+", label: "Design Awards" },
    { value: "3", label: "Showroom Locations" },
];

function About() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
        >
            <motion.div 
                className="w-full bg-[#1f1f1f]/95 px-14 py-9 flex items-center justify-between"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <p className="font-serif text-white text-[26px] italic">
                    Premium craftsmanship.{" "}
                    <span className="text-[#E1AD56]">Thoughtful design.</span> Exceptional
                    finishing.
                </p>

                <p className="text-gray-300 text-[15px] text-right leading-relaxed">
                    Every project is carefully planned, handcrafted, and installed with
                    attention to every detail.
                </p>
            </motion.div>
            <motion.div 
                className="w-full bg-[#F7F4EF] px-14 py-24 flex items-center gap-16"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
            >

                {/* Left: Image with floating badge */}
                <motion.div 
                    className="relative w-[45%]"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <div className="relative w-full h-[560px] rounded-sm overflow-hidden">
                        <Image
                            src={about}
                            alt="Neon Creative Design kitchen"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <motion.div 
                        className="absolute bottom-0 right-6 bg-[#2a2a2a] px-6 py-6"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <p className="text-[#E1AD56] text-[32px] font-semibold leading-none">
                            12+
                        </p>
                        <p className="text-white text-[15px] mt-1">Years of Excellence</p>
                    </motion.div>
                </motion.div>

                {/* Right: Content */}
                <motion.div 
                    className="w-[55%] flex flex-col gap-6"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <motion.div 
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, width: 0 }}
                        whileInView={{ opacity: 1, width: 'auto' }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <div className="bg-[#E1AD56] h-[1.7px] w-10" />
                        <div className="bg-[#E1AD56] h-2 w-2 rounded-full" />
                    </motion.div>

                    <motion.h2 
                        className="font-serif text-[52px] text-[#1f1f1f] leading-tight"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        About Neon Creative Design Limited
                    </motion.h2>

                    <motion.p 
                        className="text-gray-600 font-light text-[17px] leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        We specialize in creating elegant kitchens, bespoke wardrobes, TV units,
                        storage solutions, and complete interior finishing that combine beauty
                        with functionality.
                    </motion.p>
                    <motion.p 
                        className="text-gray-600 font-light text-[17px] leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                    >
                        Whether you&apos;re building a new home or renovating an existing one, our
                        team delivers premium craftsmanship using quality materials and modern
                        design techniques.
                    </motion.p>

                    <motion.div 
                        className="grid grid-cols-2 gap-x-12 gap-y-8 mt-4"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                    >
                        {stats.map((stat, i) => (
                            <motion.div 
                                key={i} 
                                className="flex items-center gap-4"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.9 + (i * 0.1) }}
                            >
                                <div className="bg-[#E1AD56] w-[2px] self-stretch" />
                                <div>
                                    <p className="text-[26px] font-semibold text-[#2E2E2E]">
                                        {stat.value}
                                    </p>
                                    <p className="text-[#2E2E2E] font-light text-[15px]">{stat.label}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </motion.div>
        </motion.div>

    );
}

export default About;