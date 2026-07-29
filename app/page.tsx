"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
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
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % heroImages.length);
    resetAutoPlay();
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + heroImages.length) % heroImages.length);
    resetAutoPlay();
  };

  const resetAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 5000);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return (
    <div>
      <div className="min-h-screen relative">
        {/* Background image layer */}
   {/* Background image layer */}
<div className="absolute inset-0">
  {heroImages.map((img, index) => {
    const isNeighbor =
      index === current ||
      index === (current + 1) % heroImages.length ||
      index === (current - 1 + heroImages.length) % heroImages.length;

    if (!isNeighbor) return null;

    return (
      <Image
        key={img.src ?? index}
        src={img}
        alt="Hero background"
        fill
        priority={index === 0}
        className={`object-cover absolute inset-0 transition-opacity duration-700 ease-in-out ${
          index === current ? "opacity-100" : "opacity-0"
        }`}
      />
    );
  })}
</div>

        {/* Content */}
        <div className="relative z-10">
          <Header />
          <Hero onNext={handleNext} onPrev={handlePrev} />
        </div>
      </div>
      <div id="about">
        <About />
      </div>
      <div id="services">
        <WhatWeCreate/>
      </div>
      <div id="projects">
        <FeaturedProjects />  
      </div>
      <div id="process">
        <WhyChooseUs/>
      </div>
      <Testimonials/>
      <CallToAction/>
      <Footer/>
    </div>

  );
}