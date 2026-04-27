"use client";

import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

const testimonials = [
  {
    quote:
      "I walked into my mother's cardiologist with her last 3 reports pulled up in 10 seconds. The doctor was impressed.",
    name: "Ayesha K.",
    detail: "Manages health for 4 family members",
  },
  {
    quote:
      "No more digging through WhatsApp for my father's prescriptions. Everything is in one place now.",
    name: "Omar S.",
    detail: "Manages health for 3 family members",
  },
  {
    quote:
      "The AI explained my son's blood test results better than Google ever did.",
    name: "Fatima R.",
    detail: "Manages health for 5 family members",
  },
];

export function Testimonials() {
  return (
    <section className="bg-white section-padding">
      <div className="section-container">
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="text-center"
        >
          <motion.p variants={fadeUp} className="section-overline">
            From families like yours
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-5 text-section-mobile font-bold text-slate-950 md:text-section"
          >
            They tried it. They stayed.
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-14 grid gap-6 md:grid-cols-3"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={fadeUp}
              className="flex flex-col justify-between rounded-2xl border border-slate-200 p-6 md:p-8"
            >
              {/* Quote */}
              <div>
                <svg
                  className="mb-4 text-lime-500"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M11 7.5a4.5 4.5 0 0 0-9 0v1a4.5 4.5 0 0 0 4.5 4.5h.5a4 4 0 0 1-4 4h-.5a.5.5 0 0 0 0 1H3a5 5 0 0 0 5-5V8a1 1 0 0 0-1-1H4.5A2.5 2.5 0 0 1 2 4.5v-1A2.5 2.5 0 0 1 4.5 1h2A4.5 4.5 0 0 1 11 5.5v2z" opacity="0" />
                  <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C9.591 11.69 11 13.166 11 15c0 1.933-1.567 3.5-3.5 3.5-1.288 0-2.42-.697-2.917-1.179zM16.583 17.321C15.553 16.227 15 15 15 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311C21.591 11.69 23 13.166 23 15c0 1.933-1.567 3.5-3.5 3.5-1.288 0-2.42-.697-2.917-1.179z" />
                </svg>
                <p className="text-[17px] leading-[26px] text-slate-700">
                  {t.quote}
                </p>
              </div>

              {/* Author */}
              <div className="mt-6 border-t border-slate-100 pt-4">
                <p className="text-[15px] font-semibold text-slate-950">
                  {t.name}
                </p>
                <p className="mt-0.5 text-caption text-slate-400">
                  {t.detail}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
