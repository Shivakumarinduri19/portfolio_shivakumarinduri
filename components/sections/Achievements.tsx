"use client";

import { useState, useMemo } from "react";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { achievements, Achievement } from "@/data/achievements";
import SectionTitle from "@/components/ui/SectionTitle";
import GlowCard from "@/components/ui/GlowCard";
import {
  Trophy,
  BookOpen,
  GraduationCap,
  Medal,
  Users,
  Calendar,
  Sparkles,
  Award,
  ExternalLink,
  Rocket,
  Maximize2,
  X,
} from "lucide-react";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Trophy,
  BookOpen,
  GraduationCap,
  Medal,
  Users,
  Rocket,
};

export default function Achievements() {
  const [selectedType, setSelectedType] = useState<string>("All");
  const [activeImage, setActiveImage] = useState<{ src: string; title: string } | null>(null);

  const types = useMemo(() => {
    const set = new Set<string>();
    achievements.forEach((ach) => set.add(ach.type));
    return ["All", ...Array.from(set)];
  }, []);

  const filteredAchievements = achievements.filter((ach) => {
    if (selectedType === "All") return true;
    return ach.type === selectedType;
  });

  return (
    <section id="achievements" className="section-padding relative bg-[#070d1d] overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />

      <div className="section-container relative z-10">
        <SectionTitle
          tag="Honors & Recognition"
          title="Awards, Mapathons & Milestones"
          subtitle="Recognition for academic excellence, state and national competition wins, satellite training, and humanitarian GIS mapping sprints."
          className="mb-10"
        />

        {/* Type Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-8">
          {types.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all border ${
                selectedType === type
                  ? "border-cyan-400/50 bg-cyan-400/10 text-cyan-300 shadow-[0_0_15px_rgba(0,240,255,0.15)]"
                  : "border-white/[0.08] bg-[#030712] text-slate-400 hover:text-white"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredAchievements.map((ach, index) => {
              const Icon = iconMap[ach.icon] || Trophy;
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
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  className="h-full flex flex-col"
                >
                  <GlowCard
                    glowColor={glowColor}
                    className={`p-6 flex flex-col justify-between h-full ${
                      isHighlight
                        ? "border-cyan-400/30 bg-[#09152e]/80 shadow-[0_4px_30px_rgba(0,240,255,0.06)]"
                        : ""
                    }`}
                  >
                    <div className="space-y-4">
                      {/* Card Header Row */}
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <div
                            className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 text-xs font-semibold ${
                              isHighlight
                                ? "bg-cyan-500/15 text-cyan-400 border border-cyan-400/30 shadow-[0_0_10px_rgba(0,240,255,0.2)]"
                                : "bg-white/[0.04] text-slate-400 border border-white/[0.08]"
                            }`}
                          >
                            <Icon size={17} />
                          </div>
                          <span className="text-[10px] font-mono uppercase text-slate-400 font-semibold">
                            {ach.type}
                          </span>
                        </div>

                        <span className="flex items-center gap-1 text-[11px] text-slate-400 font-mono">
                          <Calendar size={12} /> {ach.date}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="space-y-1.5">
                        <h3 className="text-base sm:text-lg font-bold text-white leading-snug tracking-tight">
                          {ach.title}
                        </h3>

                        {ach.subtitle && (
                          <p className="text-xs font-semibold text-cyan-300">
                            {ach.subtitle}
                          </p>
                        )}

                        <p className="text-xs text-slate-400 font-medium">
                          {ach.organization}
                        </p>

                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-2">
                          {ach.description}
                        </p>

                        {/* Image Presentation Preview if available */}
                        {ach.image && (
                          <div className="pt-2">
                            <button
                              type="button"
                              onClick={() => setActiveImage({ src: ach.image!, title: ach.title })}
                              className="w-full group/img relative rounded-xl overflow-hidden border border-white/10 bg-black/40 aspect-[16/10] block text-left transition-all hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(0,240,255,0.15)]"
                            >
                              <img
                                src={ach.image}
                                alt={ach.title}
                                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/img:scale-105"
                                loading="lazy"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover/img:opacity-90 transition-opacity flex items-end p-3 justify-between">
                                <span className="text-[11px] font-semibold text-cyan-200 flex items-center gap-1.5 font-mono">
                                  <Maximize2 size={12} className="text-cyan-400" />
                                  {ach.id === "1"
                                    ? "Click to view poster"
                                    : ach.id === "2"
                                    ? "UN Maps feature photo"
                                    : ach.id === "3"
                                    ? "Award ceremony photo"
                                    : ach.id === "4"
                                    ? "1st Prize ceremony photo"
                                    : ach.id === "5"
                                    ? "Meritorious award ceremony"
                                    : "ISRO / NRSC certificate"}
                                </span>
                                <span className="text-[10px] px-2 py-0.5 rounded-md bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 font-mono">
                                  {ach.id === "1"
                                    ? "NSD26-G-17"
                                    : ach.id === "2"
                                    ? "UN Maps"
                                    : ach.id === "3"
                                    ? "National Winner"
                                    : ach.id === "4"
                                    ? "1st Prize"
                                    : ach.id === "5"
                                    ? "Adilabad"
                                    : "ISRO NRSC"}
                                </span>
                              </div>
                            </button>
                          </div>
                        )}
                      </div>
                    </div>

                    {ach.link && (
                      <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs">
                        <a
                          href={ach.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 font-bold text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                          <span>{ach.linkText || "Official UN Maps News"}</span>
                          <ExternalLink size={13} />
                        </a>
                      </div>
                    )}

                    {isHighlight && !ach.link && (
                      <div className="pt-4 mt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-cyan-300">
                        <span>⭐ Highlight Milestone</span>
                        <span className="text-amber-400">{ach.type === "Research" ? "Presented" : "Awarded"}</span>
                      </div>
                    )}
                  </GlowCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox / Modal for Poster Photo */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-3xl w-full max-h-[90vh] bg-[#09152e] border border-cyan-400/30 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,240,255,0.2)] flex flex-col"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 border-b border-white/10 bg-[#060c1c]">
                <div className="flex items-center gap-2">
                  <Rocket size={16} className="text-cyan-400" />
                  <h4 className="text-sm font-bold text-white tracking-tight line-clamp-1">
                    {activeImage.title}
                  </h4>
                </div>
                <button
                  type="button"
                  onClick={() => setActiveImage(null)}
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Modal Image */}
              <div className="p-3 sm:p-4 overflow-auto flex items-center justify-center bg-black/40">
                <img
                  src={activeImage.src}
                  alt={activeImage.title}
                  className="max-h-[75vh] w-auto object-contain rounded-lg"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
