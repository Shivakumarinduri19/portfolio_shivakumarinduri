"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { achievements, Achievement, AchievementType } from "@/data/achievements";
import SectionTitle from "@/components/ui/SectionTitle";
import GlowCard from "@/components/ui/GlowCard";
import {
  Trophy,
  BookOpen,
  GraduationCap,
  Medal,
  Users,
  Presentation,
  Code2,
  Calendar,
  Sparkles,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Trophy,
  BookOpen,
  GraduationCap,
  Medal,
  Users,
  Presentation,
  Github: Code2,
  Map: BookOpen,
};

export default function Achievements() {
  const [selectedType, setSelectedType] = useState<string>("All");

  const types = useMemo(() => {
    const set = new Set<string>();
    achievements.forEach((ach) => set.add(ach.type));
    return ["All", ...Array.from(set)];
  }, []);

  const filteredAchievements = achievements.filter((ach) => {
    if (selectedType === "All") return true;
    if (selectedType === "Open Source" && ach.type === "Open Source") return true;
    return ach.type === selectedType;
  });

  return (
    <section id="achievements" className="section-padding relative bg-[#030712]">
      <div className="absolute inset-0 grid-bg opacity-15" />

      {/* Radial gradients */}
      <div
        className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full blur-[140px] opacity-[0.03] pointer-events-none"
        style={{ background: "radial-gradient(circle, #8b5cf6, transparent)" }}
      />

      <div className="section-container relative z-10">
        <SectionTitle
          tag="Milestones & Impact"
          title="Awards, Research & Leadership"
          subtitle="A track record of hackathon victories, academic research presentations, open source contributions, and leadership roles in the geospatial community."
          centered
          className="mb-12"
        />

        {/* Type Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {types.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 border ${
                selectedType === type
                  ? "border-cyan-400/50 bg-cyan-400/10 text-cyan-400 shadow-[0_0_15px_rgba(0,212,255,0.15)]"
                  : "border-white/[0.08] bg-white/[0.02] text-slate-400 hover:text-white hover:border-slate-600"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredAchievements.map((ach, index) => {
              const Icon = (iconMap[ach.icon] || Trophy) as React.ComponentType<any>;
              const isHighlight = ach.highlight;
              const glowColor =
                ach.color === "cyan"
                  ? "cyan"
                  : ach.color === "emerald"
                  ? "emerald"
                  : ach.color === "purple"
                  ? "purple"
                  : ach.color === "blue"
                  ? "blue"
                  : "orange";

              return (
                <motion.div
                  key={ach.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <GlowCard
                    glowColor={glowColor}
                    className={`p-6 h-full flex flex-col justify-between border ${
                      isHighlight
                        ? "border-cyan-400/20 bg-cyan-500/[0.02] shadow-[0_4px_30px_rgba(0,212,255,0.05)]"
                        : "border-white/[0.06]"
                    }`}
                  >
                    <div className="space-y-4">
                      {/* Top Header Row */}
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2">
                          <div
                            className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 text-xs font-semibold ${
                              isHighlight
                                ? "bg-cyan-500/10 text-cyan-400 border border-cyan-400/20"
                                : "bg-white/[0.03] text-slate-400 border border-white/[0.08]"
                            }`}
                          >
                            <Icon size={16} />
                          </div>
                          <span className="text-[10px] font-mono uppercase text-slate-500">
                            {ach.type}
                          </span>
                        </div>

                        <span className="flex items-center gap-1 text-[11px] text-slate-500 font-mono">
                          <Calendar size={12} /> {ach.date}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="space-y-2">
                        <h3 className="text-lg font-bold text-white leading-snug tracking-tight">
                          {ach.title}
                          {isHighlight && (
                            <span className="inline-flex ml-2 items-center text-[10px] bg-cyan-400/10 text-cyan-400 px-2 py-0.5 rounded-full border border-cyan-400/20 font-semibold tracking-wider uppercase">
                              Highlight
                            </span>
                          )}
                        </h3>
                        {ach.subtitle && (
                          <p className="text-xs font-semibold text-cyan-400 uppercase tracking-wide">
                            {ach.subtitle}
                          </p>
                        )}
                        <p className="text-xs text-slate-500 font-medium">
                          {ach.organization}
                        </p>
                        <p className="text-sm text-slate-400 leading-relaxed pt-2">
                          {ach.description}
                        </p>
                      </div>
                    </div>
                  </GlowCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
