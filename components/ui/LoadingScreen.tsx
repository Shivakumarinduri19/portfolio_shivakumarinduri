"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Globe2 } from "lucide-react";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 200);
          return 100;
        }
        return p + Math.random() * 25 + 15;
      });
    }, 40);
    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#030712] overflow-hidden"
        >
          {/* Background grid */}
          <div className="absolute inset-0 grid-bg opacity-30" />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center gap-5">
            {/* Animated Globe Icon */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
              className="relative"
            >
              <Globe2
                size={48}
                className="text-cyan-400"
                style={{ filter: "drop-shadow(0 0 20px rgba(0,240,255,0.8))" }}
              />
              <div
                className="absolute -inset-2 rounded-full border border-cyan-400/20"
                style={{ animation: "spin 3s linear infinite reverse" }}
              />
            </motion.div>

            {/* Name */}
            <div className="text-center">
              <h1 className="text-xl font-bold text-white tracking-tight">
                Shiva Kumar <span className="text-cyan-400">Induri</span>
              </h1>
              <p className="text-[10px] font-mono text-slate-400 uppercase tracking-[0.25em] mt-0.5">
                GeoAI & Spatial Data Science
              </p>
            </div>

            {/* Progress bar */}
            <div className="w-40 h-[2px] bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-100"
                style={{
                  background: "linear-gradient(90deg, #00f0ff, #10b981)",
                  width: `${Math.min(progress, 100)}%`,
                  boxShadow: "0 0 10px rgba(0,240,255,0.6)",
                }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
