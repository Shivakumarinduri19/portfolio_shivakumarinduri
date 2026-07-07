"use client";

import Link from "next/link";
import { Globe2, ArrowLeft, RefreshCw } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#030712] flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-25" />

      {/* Orbit Rings */}
      <div className="absolute w-[500px] h-[500px] rounded-full border border-cyan-500/10 animate-[spin_40s_linear_infinite] flex items-center justify-center">
        <div className="w-[300px] h-[300px] rounded-full border border-emerald-500/10 animate-[spin_20s_linear_infinite] reverse flex items-center justify-center">
          <div className="w-[150px] h-[150px] rounded-full border border-purple-500/10" />
        </div>
      </div>

      <div className="relative z-10 text-center max-w-md px-6 space-y-6">
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="inline-flex p-4 rounded-3xl bg-cyan-500/5 border border-cyan-500/10 text-cyan-400 mb-2"
        >
          <Globe2 size={48} className="animate-spin-slow" />
        </motion.div>

        <div className="space-y-2">
          <h1 className="text-4xl font-extrabold tracking-tight text-white">
            404 <span className="text-cyan-400">|</span> Coordinate Lost
          </h1>
          <p className="text-sm font-mono text-cyan-400 uppercase tracking-widest">
            ERROR: EPSG:404_OUT_OF_BOUNDS
          </p>
          <p className="text-slate-400 text-sm leading-relaxed max-w-xs mx-auto">
            The latitude and longitude coordinates you requested lie outside our grid projections.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="btn-primary w-full sm:w-auto text-sm justify-center"
          >
            <ArrowLeft size={16} />
            Return to Base
          </Link>
          <button
            onClick={() => window.location.reload()}
            className="btn-secondary w-full sm:w-auto text-sm justify-center"
          >
            <RefreshCw size={14} />
            Re-align Orbit
          </button>
        </div>
      </div>
    </div>
  );
}
