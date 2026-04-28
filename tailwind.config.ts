import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0D0D0D",
          900: "#0D0D0D",
          800: "#141414",
          700: "#1A1A1A",
          600: "#222222",
        },
        gold: {
          DEFAULT: "#C9A84C",
          light: "#F0D080",
          deep: "#8A6E2A",
        },
        bone: "#E8E2D2",
      },
      fontFamily: {
        serif: ["var(--font-cormorant)", "Cormorant Garamond", "serif"],
        sans: ["var(--font-montserrat)", "Montserrat", "sans-serif"],
      },
      letterSpacing: {
        widest2: "0.32em",
        widest3: "0.48em",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "in-out-soft": "cubic-bezier(0.65, 0, 0.35, 1)",
      },
      animation: {
        "scroll-arrow": "scrollArrow 2.4s cubic-bezier(0.65, 0, 0.35, 1) infinite",
        "shimmer": "shimmer 6s ease-in-out infinite",
        "drift-slow": "drift 18s linear infinite",
      },
      keyframes: {
        scrollArrow: {
          "0%": { transform: "translateY(-6px)", opacity: "0" },
          "30%": { opacity: "1" },
          "100%": { transform: "translateY(10px)", opacity: "0" },
        },
        shimmer: {
          "0%, 100%": { opacity: "0.55" },
          "50%": { opacity: "1" },
        },
        drift: {
          "0%": { transform: "translate3d(0,0,0)" },
          "100%": { transform: "translate3d(-40px,-30px,0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
