"use client";

import { motion } from "framer-motion";
import { fadeUp, fadeUpLarge, staggerContainer, viewportOnce } from "@/lib/motion";

const rows = [
  {
    without: "Re-explain your father's conditions every chat",
    with: "AI already knows — permanent health profiles",
    icon: "🔄",
  },
  {
    without: "Copy-paste lab values from photos",
    with: "Upload the report — AI reads it automatically",
    icon: "📋",
  },
  {
    without: "Separate conversations per family member",
    with: "One app, entire family, unified context",
    icon: "💬",
  },
  {
    without: "Hope the answer is accurate",
    with: "Every answer cites the specific report and date",
    icon: "🎯",
  },
  {
    without: "Only get help when you ask",
    with: "Proactive alerts for overdue checkups and trends",
    icon: "🔔",
  },
  {
    without: "No guardrails — AI can say anything",
    with: "Never diagnoses. Always recommends a doctor.",
    icon: "🛡️",
  },
];

export function AIUpgrade() {
  return (
    <section className="relative overflow-hidden bg-white section-padding">
      {/* Subtle mesh gradient */}
      <div className="pointer-events-none absolute inset-0 mesh-gradient-hero opacity-60" />

      <div className="section-container relative">
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center"
        >
          <motion.p variants={fadeUp} className="section-overline">
            For the AI-curious
          </motion.p>
          <motion.h2
            variants={fadeUpLarge}
            className="mx-auto mt-5 max-w-[800px] text-section-mobile font-bold text-slate-950 text-balance md:text-section"
          >
            Already using ChatGPT for health questions?{" "}
            <span className="text-lime-700">You&apos;re halfway there.</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-5 max-w-[600px] text-body text-slate-500"
          >
            Millions of people now paste lab values into ChatGPT and ask &ldquo;what
            does this mean?&rdquo; They&apos;re onto something — but they&apos;re
            doing it the hard way.
          </motion.p>
        </motion.div>

        {/* Comparison — redesigned as card pairs */}
        <motion.div
          variants={staggerContainer(0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto mt-16 grid max-w-[1000px] gap-4 md:grid-cols-2"
        >
          {/* Column headers */}
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-2 px-2 pb-2"
          >
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-slate-200">
              <svg className="h-3.5 w-3.5 text-slate-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 9-6 6" /><path d="m9 9 6 6" />
              </svg>
            </div>
            <span className="text-caption font-semibold uppercase tracking-wider text-slate-400">
              Without Kinly
            </span>
          </motion.div>
          <motion.div
            variants={fadeUp}
            className="flex items-center gap-2 px-2 pb-2"
          >
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-lime-500">
              <svg className="h-3.5 w-3.5 text-purple-950" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </div>
            <span className="text-caption font-semibold uppercase tracking-wider text-purple-800">
              With Kinly
            </span>
          </motion.div>

          {/* Row pairs */}
          {rows.map((row, i) => (
            <motion.div key={i} variants={fadeUp} className="contents">
              {/* Without */}
              <div className="rounded-xl bg-slate-100 px-5 py-4">
                <p className="text-body-sm text-slate-500">{row.without}</p>
              </div>
              {/* With */}
              <div className="rounded-xl bg-gradient-to-r from-purple-50 to-lime-200/30 px-5 py-4 ring-1 ring-lime-400/20">
                <p className="text-body-sm font-medium text-slate-950">
                  {row.with}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Closing line */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-14 max-w-[600px] text-center text-subtitle font-medium text-slate-600"
        >
          Same AI intelligence. But with your family&apos;s actual data
          underneath —{" "}
          <span className="text-purple-800">structured, persistent, and safe.</span>
        </motion.p>

        {/* Mid-page CTA */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mt-10 text-center"
        >
          <a
            href="#waitlist"
            className="inline-flex items-center gap-2 rounded-full bg-purple-800 px-8 py-3 text-[15px] font-semibold text-white transition-all hover:scale-[1.02] hover:bg-purple-700"
          >
            Get Early Access
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
