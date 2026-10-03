"use client";

import { useEffect, useState } from "react";
import { Activity, Compass, Radio } from "lucide-react";

export default function HUDOverlay() {
  const [dataStream, setDataStream] = useState<string[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const code = Math.floor(Math.random() * 16777215)
        .toString(16)
        .toUpperCase()
        .padStart(6, "0");
      const prefix = Math.random() > 0.5 ? "SAT_EO_" : "GEO_AI_";
      
      setDataStream((prev) => {
        const next = [prefix + code, ...prev];
        if (next.length > 4) next.pop();
        return next;
      });
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden select-none">
      {/* Subtle Horizontal Scanning Pulse */}
      <div 
        className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" 
        style={{ animation: "scanline 8s cubic-bezier(0.4, 0, 0.6, 1) infinite" }}
      />

      {/* Top Left: Telemetry Status */}
      <div className="hidden lg:flex flex-col gap-1 absolute top-24 left-8 text-cyan-400/60 font-mono text-[11px] backdrop-blur-sm bg-black/20 p-2.5 rounded-lg border border-cyan-400/10">
        <div className="flex items-center gap-2 text-cyan-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-semibold tracking-wider">GEO-SPATIAL ENGINE</span>
        </div>
        <div className="text-slate-400 text-[10px]">DATUM: WGS 84 / UTM 44N</div>
        <div className="text-slate-400 text-[10px]">RADAR: ACTIVE (NISAR SAR)</div>
      </div>

      {/* Top Right: Compass Coordinate */}
      <div className="hidden lg:flex items-center gap-3 absolute top-24 right-8 font-mono text-[11px] text-cyan-400/70 backdrop-blur-sm bg-black/20 p-2.5 rounded-lg border border-cyan-400/10">
        <div className="text-right">
          <div className="text-slate-200 font-semibold">17.3850° N, 78.4867° E</div>
          <div className="text-[10px] text-slate-400">HYDERABAD • JNTUH</div>
        </div>
        <Compass size={22} className="text-cyan-400 animate-spin" style={{ animationDuration: "30s" }} />
      </div>

      {/* Bottom Left: Data Stream */}
      <div className="hidden xl:flex flex-col absolute bottom-8 left-8 font-mono text-[10px] text-cyan-400/50 backdrop-blur-sm bg-black/20 p-2.5 rounded-lg border border-cyan-400/10">
        <div className="text-xs font-semibold text-cyan-300/80 mb-1 flex items-center gap-1.5">
          <Radio size={12} className="text-emerald-400 animate-pulse" />
          <span>GEODATA FEED</span>
        </div>
        {dataStream.map((code, i) => (
          <div key={i} className="text-slate-400" style={{ opacity: 1 - i * 0.2 }}>
            [{code}]
          </div>
        ))}
      </div>
    </div>
  );
}
