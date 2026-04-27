"use client";

import { motion } from "framer-motion";
import { fadeUp, scaleIn, staggerContainer, viewportOnce } from "@/lib/motion";

const pillars = [
  {
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
    title: "Encrypted everything",
    body: "Every document is encrypted at rest (AES-256) and in transit (TLS 1.3). Your data is unreadable to anyone but you — including us.",
    accent: "from-purple-400/20 to-purple-600/10",
  },
  {
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" x2="23" y1="1" y2="23"/></svg>`,
    title: "Never sold. Never shared.",
    body: "We don't sell your health data. We don't use it for ads. We don't share it with third parties. Our business model is subscriptions, not surveillance.",
    accent: "from-lime-400/15 to-lime-600/5",
  },
  {
    icon: `<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>`,
    title: "You own your data",
    body: "Export everything anytime. Delete your account and all data is permanently wiped within 30 days. No lock-in. No hostage data.",
    accent: "from-purple-400/15 to-lime-400/10",
  },
];

export function Security() {
  return (
    <section id="security" className="relative overflow-hidden bg-slate-50 section-padding">
      <div className="section-container">
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center"
        >
          <motion.p variants={fadeUp} className="section-overline">
            Your data is sacred
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mx-auto mt-5 max-w-[800px] text-section-mobile font-bold text-slate-950 md:text-section"
          >
            Your family&apos;s most sensitive data. Treated like it.
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-16 grid gap-6 md:grid-cols-3"
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.title}
              variants={scaleIn}
              className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-md md:p-8"
            >
              {/* Gradient accent top bar */}
              <div
                className={`absolute left-0 right-0 top-0 h-1 bg-gradient-to-r ${pillar.accent}`}
              />

              {/* Icon in branded circle */}
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-50 text-purple-800 transition-colors duration-300 group-hover:bg-purple-100">
                <span dangerouslySetInnerHTML={{ __html: pillar.icon }} />
              </div>

              <h3 className="mt-5 text-lg font-semibold text-slate-950">
                {pillar.title}
              </h3>
              <p className="mt-2 text-body-sm text-slate-500">
                {pillar.body}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* AI disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="mx-auto mt-12 max-w-[500px] text-center text-caption text-slate-400"
        >
          Kinly&apos;s AI provides health information, not medical advice.
          Always consult a qualified healthcare professional.
        </motion.p>
      </div>
    </section>
  );
}
