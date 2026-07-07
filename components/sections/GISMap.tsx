"use client";

import dynamic from "next/dynamic";
import SectionTitle from "@/components/ui/SectionTitle";

// Dynamically import GISMapClient to avoid window variable lookup during server build
const GISMapClient = dynamic(() => import("./GISMapClient"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[480px] rounded-2xl bg-white/[0.02] border border-white/[0.08] flex flex-col items-center justify-center space-y-4">
      <div className="w-10 h-10 rounded-full border-t-2 border-r-2 border-cyan-400 animate-spin" />
      <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
        Initializing Spatial Engine...
      </span>
    </div>
  ),
});

export default function GISMap() {
  return (
    <section id="map" className="section-padding relative bg-[#0a0f1e]/40">
      <div className="absolute inset-0 grid-bg opacity-10" />

      {/* Glow overlays */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-[160px] opacity-[0.03] pointer-events-none"
        style={{ background: "radial-gradient(circle, #00ff88, transparent)" }}
      />

      <div className="section-container relative z-10">
        <SectionTitle
          tag="Geospatial Index"
          title="Interactive Project Map"
          subtitle="Click on markers across Hyderabad, Adilabad, Telangana, and Maharashtra to view the localized GIS projects and GeoAI deployments."
          centered
          className="mb-12"
        />

        {/* Dynamic map container */}
        <div className="w-full glass-card rounded-2xl overflow-hidden border border-white/[0.05] p-2 hover:border-cyan-400/20 transition-all duration-300">
          <GISMapClient />
        </div>
      </div>
    </section>
  );
}
