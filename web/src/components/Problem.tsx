"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence, useInView, useScroll, useTransform } from "framer-motion";
import { fadeUp, viewportOnce } from "@/lib/motion";

const CYCLE_DURATION = 7;

const problems = [
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`,
    title: "The WhatsApp Dig",
    body: "The doctor asks for your father's last blood test. You scroll through 6 months of messages. You find a blurry photo. Was that even the right one?",
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2a8 8 0 0 0-8 8c0 3.4 2.1 6.4 4.6 8.6A21 21 0 0 0 12 21a21 21 0 0 0 3.4-2.4C17.9 16.4 20 13.4 20 10a8 8 0 0 0-8-8z"/><circle cx="12" cy="10" r="3"/></svg>`,
    title: "The Mental Load",
    body: "Your mother's medications changed last month. Or was it two months ago? You're tracking 4 people's health from memory. And memory isn't reliable.",
  },
  {
    icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><path d="m9 16 2 2 4-4"/></svg>`,
    title: "The Missed Follow-Up",
    body: "The doctor said repeat the test in 3 months. It's been 7. Nobody reminded you. Nobody reminded them.",
  },
];

// Split text into words for scroll-fill effect
const headingWords = [
  "You", "already", "manage", "your", "family's",
  "HEART_ICON",
  ".", "You", "just", "don't", "have", "a", "system", "for", "it."
];

function ScrollFillHeading() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.9", "start 0.3"],
  });

  return (
    <h2
      ref={containerRef}
      className="mt-5 max-w-[500px] text-section-mobile font-bold md:text-section"
    >
      {headingWords.map((word, i) => {
        if (word === "HEART_ICON") {
          return (
            <HeartIcon key={i} index={i} total={headingWords.length} progress={scrollYProgress} />
          );
        }
        return (
          <ScrollWord
            key={i}
            word={word}
            index={i}
            total={headingWords.length}
            progress={scrollYProgress}
          />
        );
      })}
    </h2>
  );
}

function ScrollWord({
  word,
  index,
  total,
  progress,
}: {
  word: string;
  index: number;
  total: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const start = index / total;
  const end = (index + 1) / total;
  const color = useTransform(progress, [start, end], ["#C4C0D8", "#0C0A1A"]);

  return (
    <motion.span style={{ color }} className="inline-block">
      {word === "." ? "" : "\u00A0"}
      {word}
    </motion.span>
  );
}

function HeartIcon({
  index,
  total,
  progress,
}: {
  index: number;
  total: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const start = index / total;
  const end = (index + 1) / total;
  const opacity = useTransform(progress, [start, end], [0.25, 1]);

  return (
    <motion.span style={{ opacity }} className="inline-block">
      {"\u00A0"}
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke="none"
        className="inline-block h-[0.8em] w-[0.8em] align-baseline text-lime-500"
      >
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    </motion.span>
  );
}

export function Problem() {
  const [active, setActive] = useState(0);
  const [loaderKey, setLoaderKey] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const advance = useCallback(() => {
    setActive((prev) => (prev + 1) % problems.length);
    setLoaderKey((prev) => prev + 1);
  }, []);

  useEffect(() => {
    if (!isInView) return;
    const timer = setTimeout(advance, CYCLE_DURATION * 1000);
    return () => clearTimeout(timer);
  }, [isInView, active, loaderKey, advance]);

  const handleClick = (i: number) => {
    setActive(i);
    setLoaderKey((prev) => prev + 1);
  };

  return (
    <section className="flex min-h-[auto] items-center overflow-hidden bg-white px-6 py-16 md:h-[640px] md:min-h-0 md:px-12 md:py-0 lg:px-20" ref={sectionRef}>
      <div className="section-container">
        <div className="grid items-start gap-8 md:gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          {/* Left — scroll-fill text */}
          <div>
            <p className="section-overline">The reality</p>
            <ScrollFillHeading />
          </div>

          {/* Right — single outlined container with 3 rows */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={fadeUp}
            className="overflow-hidden rounded-2xl border border-slate-200"
          >
            {problems.map((problem, i) => {
              const isActive = active === i;
              const isLast = i === problems.length - 1;
              return (
                <div
                  key={problem.title}
                  onClick={() => handleClick(i)}
                  className="relative cursor-pointer"
                >
                  <div className="flex items-center gap-4 px-6 py-5">
                    <span className="flex-shrink-0 text-purple-600">
                      <span dangerouslySetInnerHTML={{ __html: problem.icon }} />
                    </span>
                    <h3 className="text-lg font-semibold text-slate-950">
                      {problem.title}
                    </h3>
                  </div>

                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-5 pl-[64px] text-body-sm text-slate-500">
                          {problem.body}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {!isLast && (
                    <div className="relative h-[1px] bg-slate-200">
                      {isActive && (
                        <motion.div
                          key={`loader-${i}-${loaderKey}`}
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: CYCLE_DURATION, ease: "linear" }}
                          className="absolute left-0 top-0 h-full bg-purple-800"
                        />
                      )}
                    </div>
                  )}
                  {isLast && (
                    <div className="relative h-0">
                      {isActive && (
                        <motion.div
                          key={`loader-${i}-${loaderKey}`}
                          initial={{ width: "0%" }}
                          animate={{ width: "100%" }}
                          transition={{ duration: CYCLE_DURATION, ease: "linear" }}
                          className="absolute bottom-0 left-0 h-[1px] bg-purple-800"
                        />
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
