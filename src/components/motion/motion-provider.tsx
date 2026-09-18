"use client";

import type { ReactNode } from "react";
import { MotionConfig } from "motion/react";

type MotionProviderProps = {
  children: ReactNode;
};

const MotionProvider = ({ children }: MotionProviderProps) => {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
};

export default MotionProvider;
