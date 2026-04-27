"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const steps = [
  {
    number: "01",
    title: "Create your family",
    body: "Add your family members — name, age, relationship, conditions, medications, allergies. Build their health profile once and Kinly remembers everything.",
    bgIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  },
  {
    number: "02",
    title: "Upload their records",
    body: "Take a photo or pick from your gallery. Lab reports, prescriptions, imaging, vaccination records — upload once and they're organized forever.",
    bgIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" x2="12" y1="3" y2="15"/></svg>`,
  },
  {
    number: "03",
    title: "Let Kinly do the rest",
    body: "AI extracts key values from lab reports. Smart alerts flag what needs attention. The health assistant answers your questions. You stay informed without the cognitive load.",
    bgIcon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.912 5.813a2 2 0 0 0 1.275 1.275L21 12l-5.813 1.912a2 2 0 0 0-1.275 1.275L12 21l-1.912-5.813a2 2 0 0 0-1.275-1.275L3 12l5.813-1.912a2 2 0 0 0 1.275-1.275L12 3z"/></svg>`,
  },
];

export function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const index = Math.min(Math.floor(v * steps.length), steps.length - 1);
    if (index !== activeStep && index >= 0) {
      setActiveStep(index);
    }
  });

  const active = steps[activeStep];

  return (
    <section id="how-it-works">
      <div ref={sectionRef} className="relative" style={{ height: `${steps.length * 80}vh` }}>
        <div className="sticky top-0 flex min-h-screen items-center bg-slate-50">
          <div className="section-container w-full px-6 lg:px-8">
            {/* Header */}
            <motion.div
              variants={staggerContainer(0.08)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="text-center"
            >
              <motion.p variants={fadeUp} className="section-overline">
                How it works
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="mt-5 text-[28px] font-bold text-slate-950 md:text-section-mobile lg:text-section"
              >
                Up and running in under 2 minutes.
              </motion.h2>
            </motion.div>

            {/* Number → Arrow → Content — stacks on mobile */}
            <div className="relative mt-10 flex flex-col items-center justify-center gap-4 md:mt-16 md:flex-row md:gap-12 lg:gap-16">


              {/* Big number */}
              <div className="relative h-[80px] w-[100px] flex-shrink-0 overflow-hidden md:h-[120px] md:w-[140px] lg:h-[160px] lg:w-[180px]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={activeStep}
                    initial={{ y: 60, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -60, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                    className="absolute inset-0 flex items-center justify-center text-[64px] font-extrabold leading-none tracking-tighter text-lime-500 md:text-[100px] lg:text-[140px]"
                    style={{
                      fontFamily: "var(--font-dm-sans)",
                      WebkitTextStroke: "2px",
                      paintOrder: "stroke fill",
                    }}
                  >
                    {active.number}
                  </motion.span>
                </AnimatePresence>
              </div>

              {/* Arrow — rotated down on mobile, right on desktop */}
              <div className="flex-shrink-0 text-slate-300">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="rotate-90 md:rotate-0"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </div>

              {/* Content */}
              <div className="max-w-[480px] text-center md:text-left">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeStep}
                    initial={{ opacity: 0, x: 0, y: 20 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    <h3 className="text-[22px] font-bold text-slate-950 md:text-[28px]">
                      {active.title}
                    </h3>
                    <p className="mt-3 text-body-sm text-slate-500 md:text-body">
                      {active.body}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Step indicators */}
            <div className="mt-8 flex justify-center gap-2 md:mt-12">
              {steps.map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === activeStep
                      ? "w-8 bg-purple-800"
                      : "w-1.5 bg-slate-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
