"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import React from "react";
import { skillCategories, SkillCategory, Skill } from "@/data/skills";
import SectionTitle from "@/components/ui/SectionTitle";
import GlowCard from "@/components/ui/GlowCard";
import {
  Satellite,
  Code2,
  Cpu,
  Layers,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const categoryIconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  "Geospatial Analysis": Satellite,
  "Programming & Stack": Code2,
  "Development & Tools": Cpu,
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = ["All", ...skillCategories.map((c) => c.category)];

  const filteredCategories = activeCategory === "All"
    ? skillCategories
    : skillCategories.filter((c) => c.category === activeCategory);

  return (
    <section id="skills" className="section-padding relative bg-[#070d1d] overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />

      {/* Ambient background glows */}
      <div
        className="absolute top-1/4 right-10 w-[500px] h-[500px] rounded-full blur-[150px] opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #00f0ff, transparent)" }}
      />
      <div
        className="absolute bottom-1/4 left-10 w-[400px] h-[400px] rounded-full blur-[140px] opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #10b981, transparent)" }}
      />

      <div className="section-container relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <SectionTitle
            tag="Technical Stack"
            title="Geospatial & AI Engineering Capabilities"
            subtitle="Deep expertise spanning Satellite Remote Sensing, Google Earth Engine, GeoAI Computer Vision, and scalable WebGIS architectures."
          />
        </div>

        <div className="space-y-8">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all border cursor-pointer ${
                  activeCategory === cat
                    ? "border-cyan-400/50 bg-cyan-400/10 text-cyan-300 shadow-[0_0_15px_rgba(0,240,255,0.15)]"
                    : "border-white/[0.08] bg-[#030712]/60 text-slate-400 hover:text-white hover:border-slate-600"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Category Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredCategories.map((category, idx) => {
              const Icon = categoryIconMap[category.category] || Layers;
              const glowColor =
                category.color === "cyan"
                  ? "cyan"
                  : category.color === "blue"
                  ? "blue"
                  : "purple";

              return (
                <GlowCard
                  key={category.category}
                  glowColor={glowColor}
                  delay={idx * 0.1}
                  className="p-6 flex flex-col justify-between"
                >
                  <div className="space-y-5">
                    {/* Header */}
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400">
                        <Icon size={20} />
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-base">
                          {category.category}
                        </h3>
                        <span className="text-[11px] font-mono text-slate-400">
                          {category.skills.length} Core Tools
                        </span>
                      </div>
                    </div>

                    {/* Skills List with Progress */}
                    <div className="space-y-4 pt-2">
                      {category.skills.map((skill) => (
                        <div key={skill.name} className="space-y-1.5">
                          <div className="flex items-center justify-between text-xs">
                            <span className="text-slate-200 font-medium flex items-center gap-1.5">
                              <CheckCircle2 size={12} className="text-cyan-400" />
                              {skill.name}
                            </span>
                            <span className="text-cyan-300 font-mono text-[11px] font-semibold">
                              {skill.level} ({skill.percent}%)
                            </span>
                          </div>

                          {/* Gauge Bar */}
                          <div className="w-full h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.percent}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, ease: "easeOut" }}
                              className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 shadow-[0_0_8px_rgba(0,240,255,0.4)]"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </GlowCard>
              );
            })}
          </div>
        </div>

        {/* Preferred Tech Stack Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-10 p-5 rounded-2xl bg-[#030712]/90 border border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 flex-shrink-0">
              <Sparkles size={16} />
            </div>
            <div>
              <h4 className="text-white font-bold text-xs sm:text-sm">Primary Production Stack</h4>
              <p className="text-[11px] text-slate-400">
                Optimized for high-throughput GeoAI inference and spatial vector processing
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 justify-center">
            {[
              "Python",
              "Google Earth Engine",
              "QGIS & PostGIS",
              "GeoPandas",
              "OpenCV",
              "Django",
              "React Native",
              "MapLibre GL",
            ].map((tool) => (
              <span
                key={tool}
                className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white/[0.04] border border-white/[0.08] text-slate-300 shadow-sm"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
