"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

function AnimatedCounter({
  target,
  suffix = "",
  duration = 1.5,
}: {
  target: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, target, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [isInView, target, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix}
    </span>
  );
}

const stats = [
  {
    value: 6,
    suffix: "",
    label: "avg. family members per account",
  },
  {
    value: 10,
    suffix: " sec",
    label: "to upload and organize a record",
  },
  {
    value: 100,
    suffix: "%",
    label: "of your data stays private. Always.",
  },
];

export function Stats() {
  return (
    <section className="bg-white section-padding">
      <div className="section-container">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center"
        >
          <motion.p variants={fadeUp} className="section-overline">
            Built for families like yours
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-4 text-section-mobile font-bold text-slate-950 md:text-section"
          >
            The numbers so far.
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-0"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className={`text-center ${
                i < stats.length - 1
                  ? "md:border-r md:border-slate-200"
                  : ""
              }`}
            >
              <div className="text-[48px] font-extrabold leading-none tracking-tighter text-lime-600 md:text-[56px] lg:text-[64px]">
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                />
              </div>
              <p className="mx-auto mt-3 max-w-[200px] text-body-sm text-slate-500">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
