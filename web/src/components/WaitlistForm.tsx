"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface WaitlistFormProps {
  variant?: "light" | "dark";
}

export function WaitlistForm({ variant = "light" }: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;

    setState("loading");
    // Simulate API call — replace with real waitlist endpoint
    setTimeout(() => {
      setState("success");
    }, 1200);
  };

  const isDark = variant === "dark";

  return (
    <AnimatePresence mode="wait">
      {state === "success" ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-lime-500">
            <svg
              className="h-5 w-5 text-purple-950"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          </div>
          <div>
            <p className={`text-sm font-semibold ${isDark ? "text-white" : "text-slate-950"}`}>
              You&apos;re on the list.
            </p>
            <p className={`text-sm ${isDark ? "text-purple-300" : "text-slate-500"}`}>
              We&apos;ll let you know when Kinly is ready.
            </p>
          </div>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          onSubmit={handleSubmit}
          className="flex w-full max-w-full flex-col gap-3 sm:max-w-md sm:flex-row sm:gap-2"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            className={`h-[48px] flex-grow rounded-xl px-4 md:h-[52px] text-base outline-none transition-all ${
              isDark
                ? "border border-purple-700 bg-purple-900/80 text-white placeholder:text-purple-400 focus:border-purple-600 focus:ring-2 focus:ring-purple-600/30"
                : "border-[1.5px] border-slate-300 bg-white text-slate-950 placeholder:text-slate-400 focus:border-purple-600 focus:ring-2 focus:ring-purple-100"
            }`}
          />
          <button
            type="submit"
            disabled={state === "loading"}
            className="h-[48px] flex-shrink-0 whitespace-nowrap rounded-xl bg-lime-500 px-5 text-sm font-semibold text-purple-950 transition-all hover:scale-[1.02] hover:bg-lime-400 active:scale-[0.98] active:bg-lime-600 disabled:opacity-70 sm:w-auto md:h-[52px] md:px-7 md:text-base"
          >
            {state === "loading" ? (
              <span className="flex items-center justify-center gap-2">
                <svg
                  className="h-4 w-4 animate-spin"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
                Joining...
              </span>
            ) : (
              "Secure My Spot"
            )}
          </button>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
