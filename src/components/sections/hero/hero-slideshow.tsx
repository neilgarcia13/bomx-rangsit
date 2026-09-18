"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import Image from "next/image";

import { heroSlides } from "@/data/hero-slides";

const slideDuration = 5000;

const HeroSlideshow = () => {
  const shouldReduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (shouldReduceMotion) return;

    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % heroSlides.length);
    }, slideDuration);

    return () => window.clearInterval(intervalId);
  }, [shouldReduceMotion]);

  return (
    <div className="absolute inset-0 overflow-hidden rounded-2xl">
      {heroSlides.map((slide, index) => {
        const isActive = activeIndex === index;

        return (
          <motion.div
            key={slide.src}
            aria-hidden={!isActive}
            animate={{ opacity: isActive ? 1 : 0 }}
            initial={false}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image
              fill
              preload={index === 0}
              src={slide.src}
              alt={slide.alt}
              sizes="(min-width: 1024px) 54vw, 100vw"
              style={{ objectPosition: slide.objectPosition }}
              className="object-cover"
              onError={(event) => {
                if (index > 0) event.currentTarget.src = heroSlides[0].src;
              }}
            />
          </motion.div>
        );
      })}
    </div>
  );
};

export default HeroSlideshow;
