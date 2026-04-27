"use client";

import Image from "next/image";

interface PhoneMockupProps {
  label: string;
  className?: string;
  glowColor?: "lime" | "purple";
  screenshot?: string;
}

/**
 * iPhone 15 Pro-style device frame.
 * If `screenshot` is provided, renders the real image. Otherwise shows placeholder.
 */
export function PhoneMockup({
  label,
  className = "",
  glowColor = "lime",
  screenshot,
}: PhoneMockupProps) {
  const glowClass =
    glowColor === "lime"
      ? "bg-lime-500/[0.07]"
      : "bg-purple-400/[0.1]";

  return (
    <div className={`relative ${className}`}>
      {/* Glow behind device */}
      <div
        className={`absolute -inset-12 rounded-full blur-[80px] ${glowClass}`}
      />

      {/* Device frame */}
      <div className="relative rounded-[48px] border-[8px] border-[#1a1a1a] bg-[#1a1a1a] shadow-2xl">
        {/* Notch / Dynamic Island */}
        <div className="absolute left-1/2 top-3 z-10 h-[28px] w-[100px] -translate-x-1/2 rounded-full bg-[#1a1a1a]" />

        {/* Screen area */}
        <div className="relative overflow-hidden rounded-[40px]">
          {screenshot ? (
            <Image
              src={screenshot}
              alt={label}
              width={390}
              height={844}
              className="block w-full"
              priority
            />
          ) : (
            /* Placeholder screen */
            <div className="flex aspect-[390/844] w-full flex-col bg-gradient-to-br from-purple-900 via-purple-800 to-purple-950 p-8">
              {/* Fake status bar */}
              <div className="flex items-center justify-between px-2 pt-4">
                <div className="h-2 w-10 rounded-full bg-white/20" />
                <div className="flex gap-1">
                  <div className="h-2 w-4 rounded-full bg-white/20" />
                  <div className="h-2 w-4 rounded-full bg-white/20" />
                  <div className="h-2 w-4 rounded-full bg-white/20" />
                </div>
              </div>

              <div className="flex-1 space-y-3 pt-10">
                <div className="flex items-center justify-between">
                  <div className="h-3 w-24 rounded-full bg-white/30" />
                  <div className="h-6 w-6 rounded-full bg-white/10" />
                </div>
                <div className="space-y-1 pt-2">
                  <div className="h-2 w-16 rounded-full bg-white/15" />
                  <div className="h-4 w-36 rounded-full bg-white/30" />
                </div>
                <div className="flex gap-2 overflow-hidden pt-2">
                  {["bg-lime-500/30", "bg-purple-400/30", "bg-pink-400/30", "bg-cyan-400/30"].map(
                    (bg, i) => (
                      <div
                        key={i}
                        className={`flex h-16 w-14 flex-shrink-0 flex-col items-center justify-center gap-1 rounded-2xl ${bg}`}
                      >
                        <div className="h-6 w-6 rounded-full bg-white/30" />
                        <div className="h-1.5 w-8 rounded-full bg-white/20" />
                      </div>
                    )
                  )}
                </div>
                {[0.2, 0.15, 0.12].map((opacity, i) => (
                  <div
                    key={i}
                    className="rounded-2xl p-3"
                    style={{ backgroundColor: `rgba(255,255,255,${opacity})` }}
                  >
                    <div className="flex items-start gap-3">
                      <div
                        className="h-8 w-8 flex-shrink-0 rounded-xl"
                        style={{
                          backgroundColor:
                            i === 0
                              ? "rgba(184,255,0,0.3)"
                              : i === 1
                              ? "rgba(123,111,255,0.3)"
                              : "rgba(255,255,255,0.15)",
                        }}
                      />
                      <div className="flex-1 space-y-1.5">
                        <div className="h-2.5 w-3/4 rounded-full bg-white/25" />
                        <div className="h-2 w-1/2 rounded-full bg-white/15" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-4 text-center">
                <span className="rounded-full bg-white/10 px-3 py-1 text-[10px] font-medium text-white/50">
                  {label}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
