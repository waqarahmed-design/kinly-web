import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: {
          50: "#F6F4FF",
          100: "#EDEAFF",
          200: "#C8C2FF",
          400: "#7B6FFF",
          600: "#3D28C6",
          700: "#2E1BA8",
          800: "#221080",
          900: "#161052",
          950: "#0E0A3C",
        },
        lime: {
          200: "#EAFFAD",
          300: "#DBFF73",
          400: "#CCFF40",
          500: "#B8FF00",
          600: "#96CC00",
          700: "#6B9900",
        },
        slate: {
          50: "#F8F7FC",
          100: "#F0EFF5",
          200: "#E2E0ED",
          300: "#C4C0D8",
          400: "#9490AB",
          500: "#6B6589",
          600: "#4A4568",
          800: "#1E1B3A",
          950: "#0C0A1A",
        },
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-manrope)", "var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tighter: "-0.03em",
        tight: "-0.02em",
        snug: "-0.01em",
        wide: "0.02em",
        wider: "0.06em",
        widest: "0.08em",
      },
      fontSize: {
        /* Bigger headlines, smaller body = more contrast */
        hero: ["80px", { lineHeight: "82px", letterSpacing: "-0.035em" }],
        "hero-mobile": ["44px", { lineHeight: "48px", letterSpacing: "-0.03em" }],
        section: ["52px", { lineHeight: "56px", letterSpacing: "-0.025em" }],
        "section-mobile": ["36px", { lineHeight: "40px", letterSpacing: "-0.02em" }],
        subtitle: ["19px", { lineHeight: "29px" }],
        body: ["16px", { lineHeight: "26px" }],
        "body-sm": ["15px", { lineHeight: "24px" }],
        caption: ["13px", { lineHeight: "18px" }],
        label: ["12px", { lineHeight: "16px", letterSpacing: "0.1em" }],
        pull: ["24px", { lineHeight: "34px", letterSpacing: "-0.01em" }],
      },
      borderRadius: {
        "2xl": "16px",
        "3xl": "20px",
        "4xl": "40px",
        "5xl": "48px",
      },
      animation: {
        float: "float 8s ease-in-out infinite",
        "float-slow": "float 12s ease-in-out infinite",
        "pulse-glow": "pulseGlow 4s ease-in-out infinite",
        heartbeat: "heartbeat 9s cubic-bezier(0.4, 0, 0.2, 1) infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulseGlow: {
          "0%, 100%": { transform: "scale(1)", opacity: "0.04" },
          "50%": { transform: "scale(1.05)", opacity: "0.08" },
        },
        heartbeat: {
          "0%, 100%": { transform: "scale(1)" },
          "2%": { transform: "scale(0.988)" },
          "5%": { transform: "scale(1.006)" },
          "8%": { transform: "scale(0.992)" },
          "11%": { transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
