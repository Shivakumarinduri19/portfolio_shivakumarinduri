"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { hackathons, Hackathon } from "@/data/hackathons";
import SectionTitle from "@/components/ui/SectionTitle";
import GlowCard from "@/components/ui/GlowCard";
import {
  Trophy,
  Calendar,
  Users,
  Award,
  ChevronDown,
  ChevronUp,
  Code2,
  Sparkles,
  ExternalLink,
  Target,
  Cpu,
  Maximize2,
  X,
} from "lucide-react";
import Link from "next/link";

export default function Hackathons() {
  const [expandedId, setExpandedId] = useState<string | null>("1");
  const [activeImage, setActiveImage] = useState<{ src: string; title: string } | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="hackathons" className="section-padding relative bg-[#070d1d] overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />

      {/* Decorative radial gradients */}
      <div
        className="absolute top-1/3 left-10 w-[500px] h-[500px] rounded-full blur-[160px] opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #f59e0b, transparent)" }}
      />
      <div
        className="absolute bottom-1/3 right-10 w-[500px] h-[500px] rounded-full blur-[160px] opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #00f0ff, transparent)" }}
      />

      <div className="section-container relative z-10">
        <SectionTitle
          tag="Competitions & Sprints"
          title="National Hackathon Victories"
          subtitle="Battle-tested geospatial & AI systems engineered under rapid innovation sprints, solving critical national water and sustainability challenges."
          className="mb-12"
        />

        {/* Hackathon Cards Grid / Timeline */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {hackathons.map((h, idx) => {
            const isWinner = h.outcome === "Winner";
            const isExpanded = expandedId === h.id;
            const glowColor = h.color === "cyan" ? "cyan" : "emerald";

            return (
              <motion.div
                key={h.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="h-full flex flex-col"
              >
                <GlowCard glowColor={glowColor} className="p-6 sm:p-7 flex flex-col justify-between h-full">
                  <div className="space-y-5">
                    {/* Top Trophy Banner */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-bold font-mono">
                        <Trophy size={14} className="text-amber-400" />
                        <span>{h.achievement}</span>
                      </div>

                      <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                        <Calendar size={13} /> {h.date}
                      </span>
                    </div>

                    {/* Main Title & Event */}
                    <div>
                      <h3 className="text-xl sm:text-2xl font-black text-white leading-snug tracking-tight">
                        {h.title}
                      </h3>
                      <p className="text-sm font-semibold text-cyan-300 mt-1">{h.event}</p>
                      <p className="text-xs text-slate-400 font-medium mt-0.5">{h.organizer}</p>
                    </div>

                    {/* Quick Metadata Pill row */}
                    <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
                      <span className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-slate-300 font-mono">
                        Role: {h.myRole}
                      </span>
                      <span className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/[0.08] text-slate-300 font-mono flex items-center gap-1">
                        <Users size={12} /> Team Size: {h.teamSize}
                      </span>
                    </div>

                    {/* Solution Description */}
                    <div className="p-4 rounded-xl bg-[#030712]/70 border border-white/[0.06] text-xs sm:text-sm text-slate-300 leading-relaxed space-y-2">
                      <div className="flex items-center gap-1.5 font-bold text-cyan-300 font-mono text-[11px] uppercase">
                        <Target size={13} className="text-cyan-400" />
                        Problem & Engineered Solution:
                      </div>
                      <p>{h.solution}</p>
                    </div>

                    {/* Award Ceremony Photo Preview if present */}
                    {h.image && (
                      <div className="pt-1">
                        <button
                          type="button"
                          onClick={() => setActiveImage({ src: h.image!, title: `${h.title} — ${h.achievement}` })}
                          className={`w-full group/img relative rounded-xl overflow-hidden border bg-black/40 aspect-[16/9] block text-left transition-all ${
                            h.color === "emerald"
                              ? "border-emerald-400/20 hover:border-emerald-400/50 hover:shadow-[0_0_25px_rgba(16,185,129,0.15)]"
                              : "border-amber-400/20 hover:border-amber-400/50 hover:shadow-[0_0_25px_rgba(245,158,11,0.15)]"
                          }`}
                        >
                          <img
                            src={h.image}
                            alt={`${h.title} Award Ceremony`}
                            className="w-full h-full object-cover object-center transition-transform duration-500 group-hover/img:scale-105"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-90 group-hover/img:opacity-95 transition-opacity flex items-end p-3 justify-between">
                            <span className="text-[11px] font-semibold text-slate-200 flex items-center gap-1.5 font-mono">
                              <Maximize2 size={12} className={h.color === "emerald" ? "text-emerald-400" : "text-amber-400"} />
                              {h.id === "2" ? "TGPCB Eco Champions Award Ceremony" : "World Water Day Conclave Award Ceremony"}
                            </span>
                            <span className={`text-[10px] px-2 py-0.5 rounded-md font-mono border ${
                              h.color === "emerald"
                                ? "bg-emerald-500/20 text-emerald-300 border-emerald-400/30"
                                : "bg-amber-500/20 text-amber-300 border-amber-400/30"
                            }`}>
                              {h.id === "2" ? "1st Prize" : "New Delhi"}
                            </span>
                          </div>
                        </button>
                      </div>
                    )}

                    {/* Expandable Architecture Drawer */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="space-y-4 pt-2 overflow-hidden border-t border-white/[0.06]"
                        >
                          <div className="space-y-2">
                            <span className="text-[11px] font-bold text-slate-400 uppercase font-mono block">
                              Problem Statement:
                            </span>
                            <p className="text-xs text-slate-400 leading-relaxed">
                              {h.problemStatement}
                            </p>
                          </div>

                          <div className="space-y-2">
                            <span className="text-[11px] font-bold text-slate-400 uppercase font-mono block">
                              Impact Summary:
                            </span>
                            <p className="text-xs text-slate-400 leading-relaxed">
                              {h.description}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Bottom Tech Stack & Expand Toggle */}
                  <div className="pt-6 space-y-4">
                    <div className="h-px bg-white/[0.06]" />

                    <div className="flex flex-wrap gap-1">
                      {h.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded bg-cyan-400/5 text-cyan-300 text-[10px] font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-1">
                      <button
                        onClick={() => toggleExpand(h.id)}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
                      >
                        {isExpanded ? (
                          <>
                            Less Details <ChevronUp size={13} />
                          </>
                        ) : (
                          <>
                            View Architecture <ChevronDown size={13} />
                          </>
                        )}
                      </button>

                      {h.linkedProject && (
                        <Link
                          href={`/projects/${h.linkedProject}`}
                          className="inline-flex items-center gap-1 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition-colors"
                        >
                          Project Case Study →
                        </Link>
                      )}
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox / Modal for Award Ceremony Photo */}
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
              className="relative max-w-3xl w-full max-h-[90vh] bg-[#09152e] border border-amber-400/30 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(245,158,11,0.2)] flex flex-col"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 border-b border-white/10 bg-[#060c1c]">
                <div className="flex items-center gap-2">
                  <Trophy size={16} className="text-amber-400" />
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
