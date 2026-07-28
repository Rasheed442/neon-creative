"use client";

import { useState } from "react";
import Header from "@/components/Header";
import { heroImages } from "@/contants";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhatWeCreate from "@/components/WhatWeCreate";
import FeaturedProjects from "@/components/Projects";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonial";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export default function Home() {
  const [current, setCurrent] = useState(0);

  const handleNext = () =>
    setCurrent((prev) => (prev + 1) % heroImages.length);

  const handlePrev = () =>
    setCurrent((prev) => (prev - 1 + heroImages.length) % heroImages.length);

  return (
    <div>
      <div className="min-h-screen relative">
        {/* Background image layer */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-700"
          style={{ backgroundImage: `url(${heroImages[current].src})` }}
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/70 to-black/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        {/* Content */}
        <div className="relative z-10">
          <Header />
          <Hero onNext={handleNext} onPrev={handlePrev} />
        </div>
      </div>
      <About />
      <WhatWeCreate/>
      <FeaturedProjects />  
      <WhyChooseUs/>
      <Testimonials/>
      <CallToAction/>
      <Footer/>
    </div>

  );
}