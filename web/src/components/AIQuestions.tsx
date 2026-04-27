"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const topRow = [
  "What medications is my father on?",
  "Is my mother's cholesterol improving?",
  "When was Ahmed's last blood test?",
  "What does this HbA1c result mean?",
  "List my father's active conditions",
  "Any medication interactions to worry about?",
  "When is the next checkup due?",
  "What's my mother's blood type?",
];

const bottomRow = [
  "Summarize Ahmed's last lab report",
  "Who needs a follow-up this month?",
  "What diet helps with high cholesterol?",
  "Show my father's medication history",
  "Any allergies I should tell the doctor?",
  "Explain this discharge summary",
  "What vaccines are overdue?",
  "Prepare for tomorrow's appointment",
];

// Heart path check: is point (x,y) inside the heart shape?
function isInsideHeart(px: number, py: number, cx: number, cy: number, size: number): boolean {
  // Normalize to [-1, 1]
  const x = (px - cx) / (size * 0.45);
  const y = -(py - cy) / (size * 0.45) + 0.4;
  // Heart implicit equation: (x^2 + y^2 - 1)^3 - x^2 * y^3 < 0
  const a = x * x + y * y - 1;
  return a * a * a - x * x * y * y * y < 0;
}

function generateHeartDots(width: number, height: number, dotRadius: number, gap: number): Array<{ cx: number; cy: number; opacity: number }> {
  const dots: Array<{ cx: number; cy: number; opacity: number }> = [];
  const centerX = width / 2;
  const centerY = height / 2;
  const heartSize = Math.min(width, height) * 0.9;

  // Seed-based pseudo-random for opacity only (SSR-safe)
  let seed = 42;
  const rand = () => {
    seed = (seed * 16807 + 0) % 2147483647;
    return seed / 2147483647;
  };

  // Uniform grid — fixed spacing, no jitter, no overlap
  const step = dotRadius * 2 + gap;
  for (let gx = dotRadius; gx < width - dotRadius; gx += step) {
    for (let gy = dotRadius; gy < height - dotRadius; gy += step) {
      if (!isInsideHeart(gx, gy, centerX, centerY, heartSize)) continue;

      // Ensure dot doesn't clip heart edge
      const margin = dotRadius + 1;
      const allInside =
        isInsideHeart(gx - margin, gy, centerX, centerY, heartSize) &&
        isInsideHeart(gx + margin, gy, centerX, centerY, heartSize) &&
        isInsideHeart(gx, gy - margin, centerX, centerY, heartSize) &&
        isInsideHeart(gx, gy + margin, centerX, centerY, heartSize);
      if (!allInside) continue;

      const opacity = 0.3 + rand() * 0.25;
      dots.push({ cx: gx, cy: gy, opacity });
    }
  }
  return dots;
}

// Pre-generate dots at build time (deterministic)
const HEART_W = 600;
const HEART_H = 600;
const heartDots = generateHeartDots(HEART_W, HEART_H, 3.5, 4);

function DottedHeart() {
  return (
    <svg
      viewBox={`0 0 ${HEART_W} ${HEART_H}`}
      className="pointer-events-none absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-[25%] w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] md:w-[550px] md:h-[550px] lg:w-[700px] lg:h-[700px] opacity-25"
      fill="none"
    >
      {heartDots.map((dot, i) => (
        <motion.circle
          key={i}
          cx={dot.cx}
          cy={dot.cy}
          r={3.5}
          fill="rgba(107, 153, 0, 1)"
          animate={{
            opacity: [dot.opacity, dot.opacity * 0.4, dot.opacity * 1.2, dot.opacity],
          }}
          transition={{
            duration: 3 + (i % 5) * 0.8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: (i % 17) * 0.3,
          }}
        />
      ))}
    </svg>
  );
}

function ScrollRow({ items, direction, bg = "white" }: { items: string[]; direction: "left" | "right"; bg?: "white" | "lime" }) {
  const doubled = [...items, ...items];
  const animateX = direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"];
  const fadeFrom = bg === "lime" ? "from-lime-500" : "from-slate-50";

  return (
    <div className="relative overflow-hidden">
      <div className={`pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r ${fadeFrom} to-transparent`} />
      <div className={`pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l ${fadeFrom} to-transparent`} />

      <motion.div
        animate={{ x: animateX }}
        transition={{ duration: 30, ease: "linear", repeat: Infinity }}
        className="flex w-max gap-4"
      >
        {doubled.map((q, i) => (
          <div
            key={i}
            className="flex-shrink-0 rounded-2xl bg-white px-5 py-4 md:px-7 md:py-5"
          >
            <p className="whitespace-nowrap text-[15px] font-semibold text-purple-950 md:text-[17px]">
              {q}
            </p>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function AIQuestions() {
  return (
    <section className="bg-slate-50 px-6 py-20 md:px-12 md:py-[100px] lg:px-20">
      <div className="section-container">
        <div className="relative overflow-hidden rounded-3xl bg-lime-500">
          {/* Dotted heart shape — centered, cropped 1/4 from bottom */}
          <DottedHeart />
          <motion.div
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="px-6 pt-16 text-center md:pt-20 lg:px-8"
          >
            <motion.p variants={fadeUp} className="text-[12px] font-semibold uppercase tracking-[0.1em] text-purple-800">
              Your family&apos;s health AI
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="mt-5 text-section-mobile font-bold text-purple-950 md:text-section"
            >
              Ask Kinly anything.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mx-auto mt-4 max-w-[500px] text-body text-purple-900/70"
            >
              Powered by your family&apos;s actual health data — not generic advice.
            </motion.p>
          </motion.div>

          <div className="mt-12 space-y-4 pb-16 md:pb-20">
            <ScrollRow items={topRow} direction="left" bg="lime" />
            <ScrollRow items={bottomRow} direction="right" bg="lime" />
          </div>
        </div>
      </div>
    </section>
  );
}
