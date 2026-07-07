"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { skillCategories, SkillCategory, Skill } from "@/data/skills";
import SectionTitle from "@/components/ui/SectionTitle";
import GlowCard from "@/components/ui/GlowCard";
import {
  Map,
  Satellite,
  Brain,
  Code2,
  Globe2,
  Database,
  Terminal,
  Cpu,
  Server,
  Workflow,
  Sparkles,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Map,
  Satellite,
  Brain,
  Code2,
  Globe2,
  Database,
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filteredCategories = activeCategory
    ? skillCategories.filter((c) => c.category === activeCategory)
    : skillCategories;

  return (
    <section id="skills" className="section-padding relative bg-[#0a0f1e]/50">
      <div className="absolute inset-0 grid-bg opacity-10" />

      {/* Decorative radial gradients */}
      <div
        className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full blur-[150px] opacity-5 pointer-events-none"
        style={{ background: "radial-gradient(circle, #00d4ff, transparent)" }}
      />
      <div
        className="absolute bottom-1/3 left-1/4 w-[400px] h-[400px] rounded-full blur-[130px] opacity-5 pointer-events-none"
        style={{ background: "radial-gradient(circle, #00ff88, transparent)" }}
      />

      <div className="section-container relative z-10">
        <SectionTitle
          tag="Skills & Tech Stack"
          title="Technical Capabilities Dashboard"
          subtitle="My expertise spans Geographic Information Systems (GIS), Satellite Remote Sensing, GeoAI, Machine Learning, and Modern WebGIS development."
          centered
          className="mb-12"
        />

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 border ${
              activeCategory === null
                ? "border-cyan-400/50 bg-cyan-400/10 text-cyan-400 shadow-[0_0_15px_rgba(0,212,255,0.15)]"
                : "border-white/[0.08] bg-white/[0.02] text-slate-400 hover:text-white hover:border-slate-600"
            }`}
          >
            All Skills
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.category}
              onClick={() => setActiveCategory(cat.category)}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 border ${
                activeCategory === cat.category
                  ? "border-cyan-400/50 bg-cyan-400/10 text-cyan-400 shadow-[0_0_15px_rgba(0,212,255,0.15)]"
                  : "border-white/[0.08] bg-white/[0.02] text-slate-400 hover:text-white hover:border-slate-600"
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat, catIdx) => {
            const Icon = (iconMap[cat.icon] || Globe2) as React.ComponentType<any>;
            const glowColor =
              cat.color === "cyan"
                ? "cyan"
                : cat.color === "emerald"
                ? "emerald"
                : cat.color === "purple"
                ? "purple"
                : cat.color === "blue"
                ? "blue"
                : "orange";

            return (
              <GlowCard
                key={cat.category}
                glowColor={glowColor}
                delay={catIdx * 0.1}
                className="p-6 flex flex-col h-full"
              >
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-white/[0.03] border border-white/[0.08]`}
                    style={{
                      borderColor:
                        cat.color === "cyan"
                          ? "rgba(0, 212, 255, 0.2)"
                          : cat.color === "emerald"
                          ? "rgba(0, 255, 136, 0.2)"
                          : cat.color === "purple"
                          ? "rgba(139, 92, 246, 0.2)"
                          : "rgba(59, 130, 246, 0.2)",
                    }}
                  >
                    <Icon
                      size={20}
                      className={
                        cat.color === "cyan"
                          ? "text-cyan-400"
                          : cat.color === "emerald"
                          ? "text-emerald-400"
                          : cat.color === "purple"
                          ? "text-purple-400"
                          : "text-blue-400"
                      }
                    />
                  </div>
                  <h3 className="font-bold text-white text-base leading-tight">
                    {cat.category}
                  </h3>
                </div>

                {/* Skills List */}
                <div className="space-y-5 flex-1">
                  {cat.skills.map((skill, skillIdx) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex justify-between items-center text-xs">
                        <span className="font-medium text-slate-300">
                          {skill.name}
                        </span>
                        <span className="text-slate-500 font-mono">
                          {skill.level} ({skill.percent}%)
                        </span>
                      </div>
                      {/* Skill Bar */}
                      <div className="w-full h-[6px] bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.percent}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: "easeOut", delay: skillIdx * 0.05 }}
                          className="h-full rounded-full"
                          style={{
                            background:
                              cat.color === "cyan"
                                ? "linear-gradient(90deg, #00d4ff, #3b82f6)"
                                : cat.color === "emerald"
                                ? "linear-gradient(90deg, #00ff88, #10b981)"
                                : cat.color === "purple"
                                ? "linear-gradient(90deg, #8b5cf6, #ec4899)"
                                : "linear-gradient(90deg, #3b82f6, #00d4ff)",
                            boxShadow:
                              cat.color === "cyan"
                                ? "0 0 8px rgba(0, 212, 255, 0.4)"
                                : cat.color === "emerald"
                                ? "0 0 8px rgba(0, 255, 136, 0.4)"
                                : "0 0 8px rgba(139, 92, 246, 0.4)",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </GlowCard>
            );
          })}
        </div>

        {/* Featured Skill Badges at bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 p-6 glass-card rounded-2xl border border-white/[0.05] flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-cyan-400/10 flex items-center justify-center text-cyan-400">
              <Sparkles size={18} />
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm">Preferred Tech Stack</h4>
              <p className="text-xs text-slate-400">For building GeoAI models and high-performance WebGIS platforms</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            {["Python", "Google Earth Engine", "GeoPandas", "QGIS", "TensorFlow", "React", "MapLibre GL JS", "PostGIS"].map((t) => (
              <span
                key={t}
                className="px-3 py-1 rounded-md text-xs font-mono bg-white/[0.04] border border-white/[0.08] text-slate-300"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
