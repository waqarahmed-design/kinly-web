/**
 * Motion system for Kinly landing page.
 *
 * Context: Healthcare product landing page — blend of calm trust (healthcare)
 * and bold impact (portfolio/creative). Motion communicates spatial relationships
 * and draws attention. Never decorative.
 *
 * Easing: ease-out for entrances (elements settle into place).
 * Duration: 400-600ms for scroll reveals (context shifts need processing time).
 * Stagger: 50ms gap, max 5-6 elements, total sequence < 500ms.
 * Exit: 60-70% of enter duration.
 */

import { Variants } from "framer-motion";

/* Scroll-triggered entrance: subtle fade + lift */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

/* Larger elements: slower, more dramatic entrance */
export const fadeUpLarge: Variants = {
  hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
};

/* Phone mockups: spring-based slide from side */
export const slideFromRight: Variants = {
  hidden: { opacity: 0, x: 60, rotate: 0 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 18,
      mass: 1,
      duration: 0.8,
    },
  },
};

export const slideFromLeft: Variants = {
  hidden: { opacity: 0, x: -60, rotate: 0 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 18,
      mass: 1,
      duration: 0.8,
    },
  },
};

/* Icons: gentle scale + fade */
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] },
  },
};

/* Stagger container: 50ms gap per child, sequence < 500ms */
export const staggerContainer = (staggerDelay = 0.06): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: 0.05,
    },
  },
});

/* Viewport trigger: once, 20% visible */
export const viewportOnce = {
  once: true,
  amount: 0.2 as const,
  margin: "0px 0px -40px 0px",
};
