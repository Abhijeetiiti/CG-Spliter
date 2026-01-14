"use client";

import { useState, useRef, ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useAnimationFrame,
  useTransform,
} from "motion/react";
import "./GradientText.css";

type GradientTextProps = {
  children: ReactNode;
  className?: string;
  colors?: string[];
  animationSpeed?: number; 
  showBorder?: boolean;
  direction?: "horizontal" | "vertical";
  pauseOnHover?: boolean;
  yoyo?: boolean;
};

export default function GradientText({
  children,
  className = "",
  colors = ["#5227FF", "#FF9FFC", "#B19EEF"],
  animationSpeed = 8,
  showBorder = false,
  direction = "horizontal",
  pauseOnHover = false,
  yoyo = true,
}: GradientTextProps) {
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const progress = useMotionValue<number>(0);

  const elapsedRef = useRef<number>(0);
  const lastTimeRef = useRef<number | null>(null);

  const animationDuration = animationSpeed * 1000;

  useAnimationFrame((time: number) => {
    if (isPaused) {
      lastTimeRef.current = null;
      return;
    }

    if (lastTimeRef.current === null) {
      lastTimeRef.current = time;
      return;
    }

    const deltaTime = time - lastTimeRef.current;
    lastTimeRef.current = time;
    elapsedRef.current += deltaTime;

    if (yoyo) {
      const fullCycle = animationDuration * 2;
      const cycleTime = elapsedRef.current % fullCycle;

      if (cycleTime < animationDuration) {
        progress.set((cycleTime / animationDuration) * 100);
      } else {
        progress.set(
          100 - ((cycleTime - animationDuration) / animationDuration) * 100
        );
      }
    } else {
      progress.set((elapsedRef.current / animationDuration) * 100);
    }
  });

  const backgroundPosition = useTransform(
    progress,
    (v: number) =>
      direction === "vertical"
        ? `0% ${v}%`
        : `${v}% 0%`
  );

  return (
    <motion.span
      className={`gradient-text ${className}`}
      style={{
        backgroundImage: `linear-gradient(${
          direction === "vertical" ? "180deg" : "90deg"
        }, ${colors.join(", ")})`,
        backgroundPosition,
        backgroundSize: "200% 200%",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        border: showBorder ? "1px solid currentColor" : "none",
      }}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      {children}
    </motion.span>
  );
}
