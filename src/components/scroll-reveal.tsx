"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
};

const ScrollReveal = ({ children, className, delay = 0, direction = "up" }: ScrollRevealProps) => {
  const initialPosition = {
    x: direction === "left" ? -32 : direction === "right" ? 32 : 0,
    y: direction === "up" ? 24 : 0,
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...initialPosition }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -64px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
