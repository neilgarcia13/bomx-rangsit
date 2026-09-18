"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";

import { cn } from "@/lib/utils";

type HeroTrackFieldProps = {
  variant?: "hero" | "catalog";
};

const HeroTrackField = ({ variant = "hero" }: HeroTrackFieldProps) => {
  const fieldRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const isCatalog = variant === "catalog";
  const { scrollYProgress } = useScroll({
    target: fieldRef,
    offset: ["start start", "end start"],
  });

  const arcX = useTransform(scrollYProgress, [0, 1], [0, isCatalog ? 36 : 72]);
  const arcY = useTransform(scrollYProgress, [0, 1], [0, isCatalog ? -18 : -36]);
  const glowY = useTransform(scrollYProgress, [0, 1], [0, isCatalog ? 24 : 52]);
  const lineX = useTransform(scrollYProgress, [0, 1], [0, isCatalog ? 44 : 96]);

  return (
    <div
      ref={fieldRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      <div
        className={cn(
          "absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-size-[48px_48px]",
          isCatalog ? "opacity-20" : "opacity-35",
        )}
      />

      <motion.div
        className={cn(
          "absolute top-1/2 -translate-y-1/2 -rotate-12 rounded-[50%] will-change-transform",
          isCatalog
            ? "border-primary/6 -left-40 h-72 w-120 border-[2rem] sm:-left-28 sm:h-80 sm:w-152"
            : "border-primary/10 -left-80 h-152 w-200 border-[3.5rem] sm:-left-64 sm:h-176 sm:w-232",
        )}
        style={{
          x: shouldReduceMotion ? 0 : arcX,
          y: shouldReduceMotion ? 0 : arcY,
        }}
      />

      <motion.div
        className={cn(
          "absolute right-[8%] rounded-full blur-3xl will-change-transform",
          isCatalog
            ? "bg-secondary/10 top-1/4 size-48 sm:size-64"
            : "bg-secondary/20 top-1/3 size-64 sm:size-96",
        )}
        style={{ y: shouldReduceMotion ? 0 : glowY }}
      />

      <motion.div
        className={cn(
          "absolute right-[4%] hidden -rotate-12 space-y-3 will-change-transform sm:block",
          isCatalog ? "bottom-[22%] w-40 opacity-60" : "bottom-[18%] w-52",
        )}
        style={{ x: shouldReduceMotion ? 0 : lineX }}
      >
        <div className="bg-primary/30 h-px w-full" />
        <div className="bg-secondary/60 ml-14 h-0.5 w-36" />
      </motion.div>
    </div>
  );
};

export default HeroTrackField;
