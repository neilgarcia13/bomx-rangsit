"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";

const ScrollProgress = () => {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 28,
    mass: 0.2,
  });

  if (shouldReduceMotion) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="bg-primary pointer-events-none absolute inset-x-0 -bottom-px h-0.5 origin-left"
      style={{ scaleX }}
    />
  );
};

export default ScrollProgress;
