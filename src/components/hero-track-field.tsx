"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

const HeroTrackField = () => {
  const fieldRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: fieldRef,
    offset: ["start start", "end start"],
  });

  const arcX = useTransform(scrollYProgress, [0, 1], [0, 72]);
  const arcY = useTransform(scrollYProgress, [0, 1], [0, -36]);
  const glowY = useTransform(scrollYProgress, [0, 1], [0, 52]);
  const lineX = useTransform(scrollYProgress, [0, 1], [0, 96]);

  return (
    <div
      ref={fieldRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      <div className="absolute inset-0 [background-image:linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] [mask-image:linear-gradient(to_bottom,black_0%,black_72%,transparent_100%)] [background-size:48px_48px] opacity-35" />

      <motion.div
        className="border-primary/10 absolute top-1/2 -left-80 h-[38rem] w-[50rem] -translate-y-1/2 -rotate-12 rounded-[50%] border-[3.5rem] will-change-transform sm:-left-64 sm:h-[44rem] sm:w-[58rem]"
        style={{
          x: shouldReduceMotion ? 0 : arcX,
          y: shouldReduceMotion ? 0 : arcY,
        }}
      />

      <motion.div
        className="bg-secondary/20 absolute top-1/3 right-[8%] size-64 rounded-full blur-3xl will-change-transform sm:size-96"
        style={{ y: shouldReduceMotion ? 0 : glowY }}
      />

      <motion.div
        className="absolute right-[4%] bottom-[18%] hidden w-52 -rotate-12 space-y-3 will-change-transform sm:block"
        style={{ x: shouldReduceMotion ? 0 : lineX }}
      >
        <div className="bg-primary/30 h-px w-full" />
        <div className="bg-secondary/60 ml-14 h-0.5 w-36" />
      </motion.div>
    </div>
  );
};

export default HeroTrackField;
