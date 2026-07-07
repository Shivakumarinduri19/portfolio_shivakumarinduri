"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { hackathons, Hackathon, HackathonOutcome } from "@/data/hackathons";
import SectionTitle from "@/components/ui/SectionTitle";
import GlowCard from "@/components/ui/GlowCard";
import { Calendar, Users, Trophy, ChevronDown, ChevronUp, Code2, Award, Sparkles } from "lucide-react";

export default function Hackathons() {
  const [selectedOutcome, setSelectedOutcome] = useState<string>("All");
  const [selectedYear, setSelectedYear] = useState<string>("All");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  // Extract unique outcomes and years for filter dynamically
  const outcomes = useMemo(() => {
    const set = new Set<string>();
    hackathons.forEach((h) => {
      if (h.outcome === "Winner") set.add("Winner");
      else if (h.outcome === "Finalist" || h.outcome === "Runner-Up") set.add("Finalist");
      else set.add("Top 10");
    });
    return ["All", ...Array.from(set)];
  }, []);

  const years = useMemo(() => {
    const set = new Set<string>();
    hackathons.forEach((h) => set.add(h.year.toString()));
    return ["All", ...Array.from(set).sort((a, b) => b.localeCompare(a))];
  }, []);

  // Filter hackathons
  const filteredHackathons = useMemo(() => {
    return hackathons.filter((h) => {
      const matchOutcome =
        selectedOutcome === "All"
          ? true
          : selectedOutcome === "Winner"
          ? h.outcome === "Winner"
          : selectedOutcome === "Finalist"
          ? h.outcome === "Finalist" || h.outcome === "Runner-Up"
          : h.outcome === "Top 10";

      const matchYear = selectedYear === "All" ? true : h.year.toString() === selectedYear;

      return matchOutcome && matchYear;
    });
  }, [selectedOutcome, selectedYear]);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="hackathons" className="section-padding relative bg-[#030712]">
      <div className="absolute inset-0 grid-bg opacity-15" />

      {/* Decorative gradients */}
      <div
        className="absolute top-1/4 left-10 w-96 h-96 rounded-full blur-[140px] opacity-5 pointer-events-none"
        style={{ background: "radial-gradient(circle, #8b5cf6, transparent)" }}
      />
      <div
        className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full blur-[140px] opacity-5 pointer-events-none"
        style={{ background: "radial-gradient(circle, #00d4ff, transparent)" }}
      />

      <div className="section-container relative z-10">
        <SectionTitle
          tag="Hackathons & Competitions"
          title="Battle-Tested Innovations"
          subtitle="A showcase of hackathons and geospatial innovation sprints where I designed and deployed fast-paced spatial intelligence solutions."
          centered
          className="mb-12"
        />

        {/* Filter Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 p-5 glass-card rounded-2xl border border-white/[0.05]">
          {/* Outcome filters */}
          <div className="flex flex-wrap gap-2">
            {outcomes.map((o) => (
              <button
                key={o}
                onClick={() => setSelectedOutcome(o)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-300 border ${
                  selectedOutcome === o
                    ? "border-cyan-400/50 bg-cyan-400/10 text-cyan-400 shadow-[0_0_10px_rgba(0,212,255,0.1)]"
                    : "border-white/[0.06] bg-white/[0.02] text-slate-400 hover:text-white"
                }`}
              >
                {o === "All" ? "All Outcomes" : o + "s"}
              </button>
            ))}
          </div>

          {/* Year filters */}
          <div className="flex flex-wrap gap-2">
            {years.map((y) => (
              <button
                key={y}
                onClick={() => setSelectedYear(y)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all duration-300 border ${
                  selectedYear === y
                    ? "border-cyan-400/50 bg-cyan-400/10 text-cyan-400 shadow-[0_0_10px_rgba(0,212,255,0.1)]"
                    : "border-white/[0.06] bg-white/[0.02] text-slate-400 hover:text-white"
                }`}
              >
                {y === "All" ? "All Years" : y}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Stack */}
        <div className="relative border-l-2 border-white/[0.06] pl-6 ml-4 space-y-12">
          {filteredHackathons.map((h, index) => {
            const isWinner = h.outcome === "Winner";
            const isRunner = h.outcome === "Runner-Up";
            const isExpanded = expandedId === h.id;

            const glowColor = isWinner ? "cyan" : isRunner ? "emerald" : "purple";

            return (
              <div key={h.id} className="relative">
                {/* Timeline Bullet Pin */}
                <span
                  className={`absolute -left-[37px] top-1.5 w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs transition-all duration-300 ${
                    isWinner
                      ? "bg-cyan-950 border-cyan-400 text-cyan-400 shadow-[0_0_10px_rgba(0,212,255,0.6)]"
                      : isRunner
                      ? "bg-emerald-950 border-emerald-400 text-emerald-400 shadow-[0_0_10px_rgba(0,255,136,0.6)]"
                      : "bg-purple-950 border-purple-400 text-purple-400"
                  }`}
                >
                  {isWinner ? <Trophy size={12} /> : isRunner ? <Award size={12} /> : <Sparkles size={12} />}
                </span>

                <GlowCard glowColor={glowColor} className="p-6">
                  {/* Summary Card Header */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-[10px] font-mono bg-cyan-400/5 text-cyan-400 border border-cyan-400/10 px-2 py-0.5 rounded">
                          {h.year}
                        </span>
                        <span
                          className={`text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded ${
                            isWinner
                              ? "bg-cyan-500/10 text-cyan-400 border border-cyan-400/20"
                              : isRunner
                              ? "bg-emerald-500/10 text-emerald-400 border border-emerald-400/20"
                              : "bg-purple-500/10 text-purple-400 border border-purple-400/20"
                          }`}
                        >
                          {h.achievement}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-white leading-snug">{h.title}</h3>
                      <p className="text-sm text-slate-400 font-semibold">{h.event}</p>
                      <p className="text-xs text-slate-500">{h.organizer}</p>
                    </div>

                    <div className="flex items-center gap-4 flex-wrap md:flex-col md:items-end text-xs text-slate-500 flex-shrink-0">
                      <span className="flex items-center gap-1">
                        <Calendar size={13} /> {h.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users size={13} /> Team Size: {h.teamSize}
                      </span>
                      <button
                        onClick={() => toggleExpand(h.id)}
                        className="flex items-center gap-1 px-3 py-1 rounded bg-white/5 hover:bg-cyan-400/10 text-cyan-400 text-xs font-semibold transition-all"
                      >
                        {isExpanded ? (
                          <>
                            Collapse <ChevronUp size={12} />
                          </>
                        ) : (
                          <>
                            Expand details <ChevronDown size={12} />
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Expanded Body details with Framer motion collapse animation */}
                  <AnimatePresence initial={false}>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden mt-6 pt-6 border-t border-white/[0.04] space-y-6"
                      >
                        <div className="grid md:grid-cols-2 gap-6 text-sm">
                          {/* Role and problem */}
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-semibold text-white text-xs uppercase tracking-wider mb-1.5 text-cyan-400">
                                My Role
                              </h4>
                              <p className="text-slate-300 leading-relaxed font-medium">{h.myRole}</p>
                            </div>
                            <div>
                              <h4 className="font-semibold text-white text-xs uppercase tracking-wider mb-1.5 text-slate-400">
                                Problem Statement
                              </h4>
                              <p className="text-slate-400 leading-relaxed">{h.problemStatement}</p>
                            </div>
                          </div>

                          {/* Developed Solution */}
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-semibold text-white text-xs uppercase tracking-wider mb-1.5 text-emerald-400">
                                Solution Developed
                              </h4>
                              <p className="text-slate-300 leading-relaxed">{h.solution}</p>
                            </div>
                            <div>
                              <h4 className="font-semibold text-white text-xs uppercase tracking-wider mb-1.5 text-slate-400">
                                Summary Description
                              </h4>
                              <p className="text-slate-400 leading-relaxed">{h.description}</p>
                            </div>
                          </div>
                        </div>

                        {/* Tech Stack used */}
                        <div className="space-y-2 pt-2">
                          <h4 className="font-semibold text-slate-400 text-xs uppercase tracking-wider flex items-center gap-1.5">
                            <Code2 size={13} /> Technologies Used
                          </h4>
                          <div className="flex flex-wrap gap-1.5">
                            {h.techStack.map((tech) => (
                              <span
                                key={tech}
                                className="px-2.5 py-0.5 rounded bg-cyan-400/5 border border-cyan-400/10 text-cyan-300 text-xs font-mono"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </GlowCard>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
