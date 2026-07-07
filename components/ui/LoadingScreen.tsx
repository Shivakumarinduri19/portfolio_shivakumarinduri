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
          setTimeout(() => setLoading(false), 400);
          return 100;
        }
        return p + Math.random() * 15;
      });
    }, 80);
    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#030712] overflow-hidden"
        >
          {/* Background grid */}
          <div className="absolute inset-0 grid-bg opacity-30" />

          {/* Scanning line */}
          <div
            className="absolute left-0 right-0 h-[1px] opacity-20"
            style={{
              background: "linear-gradient(90deg, transparent, #00d4ff, transparent)",
              top: `${progress}%`,
              transition: "top 0.1s ease",
            }}
          />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center gap-6">
            {/* Animated Globe Icon */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="relative"
            >
              <Globe2
                size={64}
                className="text-cyan-400"
                style={{ filter: "drop-shadow(0 0 20px rgba(0,212,255,0.8))" }}
              />
              {/* Orbit ring */}
              <div
                className="absolute inset-[-12px] rounded-full border border-cyan-400/20"
                style={{ animation: "spin 4s linear infinite reverse" }}
              />
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <h1 className="text-2xl font-bold text-white mb-1">
                Shiva<span className="text-cyan-400">Kumar</span>
              </h1>
              <p className="text-xs text-slate-500 uppercase tracking-[0.3em]">
                Geoinformatics Portfolio
              </p>
            </motion.div>

            {/* Progress bar */}
            <div className="w-48 h-[2px] bg-white/5 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: "linear-gradient(90deg, #00d4ff, #00ff88)",
                  width: `${Math.min(progress, 100)}%`,
                  transition: "width 0.1s ease",
                  boxShadow: "0 0 10px rgba(0,212,255,0.6)",
                }}
              />
            </div>

            <p className="text-xs text-slate-600 font-mono">
              {Math.min(Math.round(progress), 100)}%
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
