"use client";

import { useRef } from "react";
import type { ReactNode } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

type HeroProductMotionProps = {
  children: ReactNode;
};

const HeroProductMotion = ({ children }: HeroProductMotionProps) => {
  const productRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: productRef,
    offset: ["start end", "end start"],
  });
  const productY = useTransform(scrollYProgress, [0, 1], [16, -16]);

  return (
    <motion.div
      ref={productRef}
      initial={{ opacity: 0, x: 24, scale: 0.98 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.65, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.div style={{ y: shouldReduceMotion ? 0 : productY }}>{children}</motion.div>
    </motion.div>
  );
};

export default HeroProductMotion;
