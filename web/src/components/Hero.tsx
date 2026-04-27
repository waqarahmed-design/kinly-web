"use client";

import { motion } from "framer-motion";
import { WaitlistForm } from "./WaitlistForm";
import { fadeUp, fadeUpLarge, staggerContainer } from "@/lib/motion";

/* Health icons in colored circles scattered around the content.
   Blue circles → lime green icons. Lime green circles → blue icons. */
const healthIcons = [
  // --- 70% NEAR CONTENT (tight to container border, 18-28% from edges) ---
  // Stethoscope — left of heading, blue
  { svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3"/><path d="M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4"/><circle cx="20" cy="10" r="2"/></svg>`, x: "left-[18%]", y: "top-[30%]", circle: 52, bg: "bg-purple-800", iconColor: "text-lime-400", rotate: -10, delay: 0.2 },
  // Heart — right near form area, lime
  { svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M19.5 12.572l-7.5 7.428-7.5-7.428A5 5 0 1 1 12 6.006a5 5 0 1 1 7.5 6.572"/><path d="M12 6v4l2 2"/></svg>`, x: "right-[20%]", y: "top-[55%]", circle: 44, bg: "bg-lime-500", iconColor: "text-purple-800", rotate: 8, delay: 0.6 },
  // Document — left of text field
  { svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><line x1="9" x2="15" y1="15" y2="15"/><line x1="9" x2="13" y1="11" y2="11"/></svg>`, x: "left-[28%]", y: "top-[66%]", circle: 40, bg: "bg-purple-700", iconColor: "text-lime-400", rotate: 6, delay: 0.45 },
  // Activity pulse (ECG) — top edge of container
  { svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`, x: "left-[65%]", y: "top-[14%]", circle: 36, bg: "bg-purple-700", iconColor: "text-lime-400", rotate: 0, delay: 0.55 },

  // --- 30% AT CONTAINER EDGES (8-12% from edges) ---
  // Pill — bottom-left, lime
  { svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7z"/><path d="m8.5 8.5 7 7"/></svg>`, x: "left-[10.5%]", y: "bottom-[22%]", circle: 44, bg: "bg-lime-500", iconColor: "text-purple-800", rotate: -18, delay: 0.5 },
  // Sparkle — bottom-right, small lime
  { svg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l1.9 5.8a2 2 0 0 0 1.3 1.3L21 12l-5.8 1.9a2 2 0 0 0-1.3 1.3L12 21l-1.9-5.8a2 2 0 0 0-1.3-1.3L3 12l5.8-1.9a2 2 0 0 0 1.3-1.3L12 3z"/></svg>`, x: "right-[11.5%]", y: "bottom-[25%]", circle: 36, bg: "bg-purple-800", iconColor: "text-lime-400", rotate: 15, delay: 0.3 },
];

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-slate-50 pt-16">
      {/* Mesh gradient background */}
      <div className="pointer-events-none absolute inset-0 mesh-gradient-hero" />

      {/* Floating health icons in colored circles — z-10 brings them in front of container */}
      <div className="pointer-events-none absolute inset-0 z-10 hidden lg:block">
        {healthIcons.map((icon, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.5, rotate: icon.rotate - 15 }}
            animate={{ opacity: 1, scale: 1, rotate: icon.rotate }}
            transition={{
              type: "spring",
              stiffness: 60,
              damping: 14,
              delay: icon.delay + 0.3,
            }}
            className={`absolute ${icon.x} ${icon.y}`}
          >
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 4 + i * 0.4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
              className={`flex items-center justify-center rounded-full ${icon.bg} shadow-lg`}
              style={{ width: icon.circle, height: icon.circle }}
            >
              <span
                className={icon.iconColor}
                style={{ width: icon.circle * 0.45, height: icon.circle * 0.45 }}
                dangerouslySetInnerHTML={{ __html: icon.svg }}
              />
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Colored circles behind the container */}
      <div className="pointer-events-none absolute left-[5%] top-[20%] h-[200px] w-[200px] animate-float rounded-full bg-purple-400 opacity-[0.15] blur-[100px] md:h-[350px] md:w-[350px]" />
      <div className="pointer-events-none absolute bottom-[15%] right-[5%] h-[180px] w-[180px] animate-float-slow rounded-full bg-lime-500 opacity-[0.13] blur-[90px] md:h-[300px] md:w-[300px]" />
      <div className="pointer-events-none absolute right-[20%] top-[8%] hidden animate-float rounded-full bg-purple-600 opacity-[0.12] blur-[80px] [animation-delay:3s] md:block md:h-[220px] md:w-[220px]" />
      <div className="pointer-events-none absolute bottom-[22%] left-[18%] hidden animate-float-slow rounded-full bg-lime-400 opacity-[0.10] blur-[70px] [animation-delay:1.5s] md:block md:h-[200px] md:w-[200px]" />

      {/* Centered content in outlined container */}
      <div className="section-container w-full px-6 lg:px-8">
        <div className="mx-auto max-w-[1200px] animate-heartbeat overflow-hidden rounded-3xl border border-slate-200/80 bg-white/40 backdrop-blur-sm">
          {/* Main content area */}
          <motion.div
            variants={staggerContainer(0.08)}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center px-5 pb-10 pt-12 text-center md:px-16 md:pb-16 md:pt-20 lg:px-28"
          >
            <motion.p variants={fadeUp} className="section-overline">
              Your family&apos;s health companion
            </motion.p>

            <motion.h1
              variants={fadeUpLarge}
              className="mt-5 text-hero-mobile font-extrabold text-slate-950 md:text-[72px] md:leading-[76px]"
            >
              Health records shouldn&apos;t
              <br className="hidden md:block" />
              {" "}live in{" "}
              <span className="inline-block rounded-lg bg-lime-500 px-3 py-0.5 text-purple-950">
                drawers
              </span>
              .
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-[720px] text-body text-slate-500"
            >
              Store, organize, and understand every medical record for your
              entire family. Upload a report — AI does the rest.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-10 w-full max-w-md">
              <WaitlistForm variant="light" />
              <p className="mt-3 text-caption text-slate-400">
                Free early access. No credit card required.
              </p>
            </motion.div>
          </motion.div>

          {/* Trust strip — bottom row, 3 columns with dividers */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="grid grid-cols-1 border-t border-slate-200/80 md:grid-cols-3"
          >
            {[
              { icon: lockSmall, text: "End-to-end encrypted" },
              { icon: shieldSmall, text: "Your data is never sold" },
              { icon: eyeOffSmall, text: "Privacy by design" },
            ].map((item, i) => (
              <div
                key={item.text}
                className={`flex items-center justify-center gap-2.5 py-5 text-caption font-medium text-slate-400 ${
                  i < 2 ? "md:border-r md:border-slate-200/80" : ""
                }`}
              >
                <span dangerouslySetInnerHTML={{ __html: item.icon }} />
                {item.text}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const lockSmall = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`;
const shieldSmall = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>`;
const eyeOffSmall = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" x2="22" y1="2" y2="22"/></svg>`;
