"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useMotionValueEvent } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";
import Image from "next/image";
import { HugeiconsIcon } from "@hugeicons/react";
import { Database01Icon, AiContentGenerator01Icon, AiChat02Icon, Notification01Icon } from "@hugeicons/core-free-icons";

const features = [
  {
    tab: "Record Vault",
    tabIconComponent: Database01Icon,
    overline: "MEDICAL RECORD VAULT",
    title: "Upload once. Find it forever.",
    body: "Snap a photo of a lab report, prescription, or discharge summary. Pick a family member. Done. Every document is categorized, searchable, and organized by person — not buried in your gallery or a WhatsApp thread.",
    mockupLabel: "Upload Record",
    screenshot: "/screenshots/record-vault.png",
    contentIconComponent: Database01Icon,
    layout: "content-left" as const,
  },
  {
    tab: "AI Extraction",
    tabIconComponent: AiContentGenerator01Icon,
    overline: "AI-POWERED UNDERSTANDING",
    title: "AI reads the report so you don't have to.",
    body: "Upload a lab report and Kinly extracts every value — haemoglobin, cholesterol, blood sugar — flags what's abnormal, and explains what it means in plain language. No more Googling medical terms at 11pm.",
    mockupLabel: "Lab Report Scan",
    screenshot: "/screenshots/ai-extraction.png",
    contentIconComponent: AiContentGenerator01Icon,
    layout: "content-right" as const,
  },
  {
    tab: "Health AI",
    tabIconComponent: AiChat02Icon,
    overline: "YOUR FAMILY'S HEALTH AI",
    title: "Ask anything about your family's health.",
    body: '"What medications is my father on?" "Has my mother\'s cholesterol been improving?" Kinly\'s AI knows your family\'s complete health history and answers from their actual data — not generic internet advice.',
    mockupLabel: "AI Health Agent",
    screenshot: "/screenshots/health-ai.png",
    contentIconComponent: AiChat02Icon,
    layout: "content-left" as const,
  },
  {
    tab: "Reminders",
    tabIconComponent: Notification01Icon,
    overline: "NOTHING FALLS THROUGH",
    title: "The app remembers so you don't have to.",
    body: "Medication at 8am. Follow-up test in 3 months. Annual checkup overdue. Kinly tracks it all and nudges you before things slip. Smart alerts surface when a lab value is abnormal or a checkup is overdue.",
    mockupLabel: "Reminders & Alerts",
    screenshot: "/screenshots/reminders.png",
    contentIconComponent: Notification01Icon,
    layout: "content-right" as const,
  },
];

export function ProductShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  // Each tab gets 25% of the scroll. Progress within current tab = loader width.
  const segmentSize = 1 / features.length;

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const index = Math.min(Math.floor(v * features.length), features.length - 1);
    if (index !== activeTab && index >= 0) {
      setActiveTab(index);
    }
  });

  // Pre-create loader transforms for each tab
  const tabLoader0 = useTransform(scrollYProgress, (v) => {
    const s = 0, e = segmentSize;
    return `${Math.max(0, Math.min(1, (v - s) / (e - s))) * 100}%`;
  });
  const tabLoader1 = useTransform(scrollYProgress, (v) => {
    const s = segmentSize, e = segmentSize * 2;
    return `${Math.max(0, Math.min(1, (v - s) / (e - s))) * 100}%`;
  });
  const tabLoader2 = useTransform(scrollYProgress, (v) => {
    const s = segmentSize * 2, e = segmentSize * 3;
    return `${Math.max(0, Math.min(1, (v - s) / (e - s))) * 100}%`;
  });
  const tabLoader3 = useTransform(scrollYProgress, (v) => {
    const s = segmentSize * 3, e = segmentSize * 4;
    return `${Math.max(0, Math.min(1, (v - s) / (e - s))) * 100}%`;
  });
  const tabLoaders = [tabLoader0, tabLoader1, tabLoader2, tabLoader3];

  const active = features[activeTab];

  return (
    <section id="features" className="relative">
      {/* Diagonal lines strip */}
      <div className="h-16 border-t border-[rgba(123,111,255,0.15)] bg-white diagonal-lines md:h-20" />

      {/* Scroll container */}
      <div ref={sectionRef} className="relative" style={{ height: `${features.length * 100}vh` }}>
        <div className="sticky top-0 min-h-screen bg-purple-900">
          <div className="absolute inset-0 dot-grid" />
          <div className="absolute inset-0 mesh-gradient-dark" />

          <div className="relative section-container px-6 pb-12 pt-24 lg:px-8 lg:pb-16 lg:pt-28">
            {/* Section header */}
            <motion.div
              variants={staggerContainer(0.08)}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="text-center"
            >
              <motion.p
                variants={fadeUp}
                className="text-[12px] font-semibold uppercase tracking-[0.1em] text-purple-400"
              >
                What Kinly does
              </motion.p>
              <motion.h2
                variants={fadeUp}
                className="mt-3 text-[28px] font-bold text-white md:text-[36px]"
              >
                Everything your family&apos;s health needs.{" "}
                <span className="text-lime-500">One app.</span>
              </motion.h2>
            </motion.div>

            {/* Tab bar — above the container */}
            <div className="relative mt-10 flex items-center justify-center gap-2 md:gap-3">
              {features.map((f, i) => {
                const isActive = activeTab === i;
                return (
                  <button
                    key={f.tab}
                    onClick={() => setActiveTab(i)}
                    className={`relative rounded-full px-4 py-2.5 text-[13px] font-semibold transition-all duration-300 md:px-6 md:py-3 md:text-[15px] ${
                      isActive
                        ? "bg-lime-500 text-purple-900"
                        : "text-purple-300 hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="tab-pill"
                        className="absolute inset-0 rounded-full bg-lime-500"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      <HugeiconsIcon icon={f.tabIconComponent} size={18} />
                      {f.tab}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Feature container */}
            <div className="relative mt-6 rounded-3xl bg-white">
              {/* Floating icon */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`floating-icon-${activeTab}`}
                  initial={{ opacity: 0, scale: 0.5, rotate: -25 }}
                  animate={{ opacity: 1, scale: 1, rotate: -12 }}
                  exit={{ opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                  className={`pointer-events-none absolute bottom-[25px] z-20 hidden md:block ${
                    active.layout === "content-right" ? "left-[910px]" : "left-[540px]"
                  }`}
                >
                  <HugeiconsIcon icon={active.contentIconComponent} size={160} color="#B8FF00" strokeWidth={1.2} />
                </motion.div>
              </AnimatePresence>

              {/* Row 2: Content + Screenshot — animated layout */}
              <div className="relative h-auto md:h-[420px]">
                <div className="flex h-full overflow-hidden">
                  {/* Left column */}
                  <motion.div
                    className="relative flex-shrink-0 overflow-hidden"
                    animate={{
                      width: active.layout === "content-left" ? "65%" : "35%",
                    }}
                    transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    <AnimatePresence mode="wait">
                      {active.layout === "content-left" ? (
                        <motion.div
                          key={`content-${activeTab}`}
                          initial={{ opacity: 0, x: 50 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                          className="px-8 pb-12 pt-8 md:px-12 md:pb-16 md:pt-8 lg:px-16"
                        >
                          <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-purple-600">
                            {active.overline}
                          </p>
                          <h3 className="mt-4 text-[26px] font-bold leading-[32px] tracking-snug text-slate-950 md:text-[30px] md:leading-[36px]">
                            {active.title}
                          </h3>
                          <p className="mt-4 max-w-[440px] text-body text-slate-500">
                            {active.body}
                          </p>
                        </motion.div>
                      ) : (
                        <motion.div
                          key={`phone-left-${activeTab}`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
                          className="relative flex h-full items-start justify-center pt-8"
                        >
                          <div className="absolute inset-0 dot-grid opacity-25" />
                          {active.screenshot && (
                            <div className="relative w-[240px] lg:w-[280px]">
                              <Image src={active.screenshot} alt={active.mockupLabel} width={390} height={844} className="rounded-[40px] border-[4px] border-slate-950" priority />
                            </div>
                          )}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>

                  {/* Separator — moves with column width */}
                  <div className="w-[1px] flex-shrink-0 bg-slate-200" />

                  {/* Right column */}
                  <motion.div
                    className="relative hidden flex-shrink-0 overflow-hidden md:block"
                    animate={{
                      width: active.layout === "content-left" ? "35%" : "65%",
                    }}
                    transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    <AnimatePresence mode="wait">
                      {active.layout === "content-left" ? (
                        <motion.div
                          key={`phone-right-${activeTab}`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
                          className="relative flex h-full items-start justify-center pt-8"
                        >
                          <div className="absolute inset-0 dot-grid opacity-25" />
                          {active.screenshot && (
                            <div className="relative w-[240px] lg:w-[280px]">
                              <Image src={active.screenshot} alt={active.mockupLabel} width={390} height={844} className="rounded-[40px] border-[4px] border-slate-950" priority />
                            </div>
                          )}
                        </motion.div>
                      ) : (
                        <motion.div
                          key={`content-right-${activeTab}`}
                          initial={{ opacity: 0, x: -50 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                          className="px-8 pb-12 pt-8 md:px-12 md:pb-16 md:pt-8 lg:px-16"
                        >
                          <p className="text-[12px] font-semibold uppercase tracking-[0.1em] text-purple-600">
                            {active.overline}
                          </p>
                          <h3 className="mt-4 text-[26px] font-bold leading-[32px] tracking-snug text-slate-950 md:text-[30px] md:leading-[36px]">
                            {active.title}
                          </h3>
                          <p className="mt-4 max-w-[440px] text-body text-slate-500">
                            {active.body}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
