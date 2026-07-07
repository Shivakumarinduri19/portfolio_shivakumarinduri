import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core palette
        "space-black": "#030712",
        "space-dark": "#0a0f1e",
        "space-navy": "#0d1b2a",
        "deep-blue": "#0b1d3a",
        "mid-blue": "#0e2a4a",
        // Accent colors
        "cyber-cyan": "#00d4ff",
        "cyber-cyan-dark": "#0099cc",
        "neon-emerald": "#00ff88",
        "neon-emerald-dark": "#00cc6a",
        "electric-blue": "#3b82f6",
        "stellar-purple": "#8b5cf6",
        // Text
        "text-primary": "#f0f4ff",
        "text-secondary": "#94a3b8",
        "text-muted": "#64748b",
        // Borders
        "border-glow": "rgba(0, 212, 255, 0.3)",
        "border-subtle": "rgba(255, 255, 255, 0.08)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-gradient":
          "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(0,212,255,0.15) 0%, rgba(0,0,0,0) 60%), radial-gradient(ellipse 50% 40% at 80% 80%, rgba(0,255,136,0.08) 0%, rgba(0,0,0,0) 50%)",
        "card-gradient": "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)",
        "glow-cyan": "radial-gradient(circle, rgba(0,212,255,0.2) 0%, transparent 70%)",
      },
      boxShadow: {
        "glow-cyan": "0 0 20px rgba(0,212,255,0.3), 0 0 60px rgba(0,212,255,0.1)",
        "glow-emerald": "0 0 20px rgba(0,255,136,0.3), 0 0 60px rgba(0,255,136,0.1)",
        "glow-blue": "0 0 20px rgba(59,130,246,0.3), 0 0 60px rgba(59,130,246,0.1)",
        "card-hover": "0 8px 40px rgba(0,212,255,0.15), 0 0 0 1px rgba(0,212,255,0.2)",
        "card-default": "0 4px 20px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.05)",
        "glass": "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        "orbit": "orbit 8s linear infinite",
        "shimmer": "shimmer 2s linear infinite",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "gradient-x": "gradientX 4s ease infinite",
        "twinkle": "twinkle 3s ease-in-out infinite",
        "scan-line": "scanLine 4s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(0,212,255,0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(0,212,255,0.6), 0 0 80px rgba(0,212,255,0.2)" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg) translateX(120px) rotate(0deg)" },
          "100%": { transform: "rotate(360deg) translateX(120px) rotate(-360deg)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        gradientX: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0.2", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.2)" },
        },
        scanLine: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      spacing: {
        "18": "4.5rem",
        "88": "22rem",
        "128": "32rem",
      },
    },
  },
  plugins: [],
};

export default config;
