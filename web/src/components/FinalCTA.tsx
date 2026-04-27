"use client";

import { motion } from "framer-motion";
import { WaitlistForm } from "./WaitlistForm";
import { fadeUp, staggerContainer, viewportOnce } from "@/lib/motion";

export function FinalCTA() {
  return (
    <section id="waitlist" className="relative overflow-hidden bg-purple-950">

      <div className="relative px-6 py-14 lg:px-8 lg:py-16">
        {/* Mesh gradient + lime glow */}
        <div className="pointer-events-none absolute inset-0 mesh-gradient-cta" />
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 animate-pulse-glow rounded-full bg-lime-500/[0.06] blur-[120px] md:h-[500px] md:w-[500px]" />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="section-container relative text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="mx-auto max-w-[700px] text-section-mobile font-bold text-white md:text-section"
          >
            Ready to organize your family&apos;s{" "}
            <span className="text-lime-500">health?</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-4 text-subtitle text-purple-300"
          >
            We&apos;re inviting 200 families to early access. Spots are limited.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mx-auto mt-8 flex max-w-md flex-col items-center"
          >
            <WaitlistForm variant="dark" />
            <p className="mt-3 text-caption text-purple-400">
              Free early access. No credit card required.
              <span className="ml-2 text-lime-500 font-medium">143 of 200 spots claimed.</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
