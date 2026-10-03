"use client";

import { motion } from "framer-motion";
import React from "react";
import {
  Map,
  Satellite,
  Brain,
  Code2,
  Globe2,
  Droplets,
  Building2,
  Leaf,
  GraduationCap,
  Sparkles,
  Trophy,
  Award,
  Target,
  Compass,
} from "lucide-react";
import { profile } from "@/data/profile";
import SectionTitle from "@/components/ui/SectionTitle";
import GlowCard from "@/components/ui/GlowCard";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Satellite,
  Map,
  Brain,
  Code2,
  Globe2,
  Droplets,
  Building2,
  Leaf,
};

const stats = [
  { value: "₹1,00,000", label: "Grant Awarded", icon: Trophy, color: "text-amber-400" },
  { value: "2x", label: "Hackathon Winner", icon: Award, color: "text-cyan-400" },
  { value: "8+", label: "GeoAI Projects", icon: Globe2, color: "text-emerald-400" },
  { value: "8.53", label: "B.Tech CGPA", icon: GraduationCap, color: "text-purple-400" },
];

export default function About() {
  return (
    <section id="about" className="section-padding relative bg-[#030712] overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />

      {/* Subtle background glow */}
      <div
        className="absolute top-1/3 left-1/4 w-[500px] h-[500px] rounded-full blur-[160px] opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #00f0ff, transparent)" }}
      />

      <div className="section-container relative z-10">
        <SectionTitle
          tag="About & Background"
          title="Bridging Earth Observation & Machine Intelligence"
          subtitle="Combining satellite remote sensing, Google Earth Engine, and deep learning to model sustainable infrastructure and precision water systems."
          className="mb-12"
        />

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Column (Main Story & Objective): 7 cols */}
          <div className="lg:col-span-7 space-y-6">
            {/* Main Narrative Card */}
            <GlowCard glowColor="cyan" className="p-6 sm:p-8">
              <div className="flex items-center gap-2.5 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-4">
                <Compass size={16} />
                <span>Engineering Philosophy</span>
              </div>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  I am a final-year Geoinformatics student at <strong className="text-white">Jawaharlal Nehru Technological University Hyderabad (JNTUH)</strong>, pursuing a B.Tech in Geoinformatics with an academic minor in <strong className="text-white">Artificial Intelligence and Machine Learning (AIML)</strong>.
                </p>
                <p>
                  My engineering journey is centered around processing massive earth observation satellite datasets — converting raw spectral imagery and thermal infrared bands into high-accuracy actionable decision platforms for precision agriculture, urban cooling, and automated rainwater harvesting.
                </p>
              </div>

              {/* Career Objective Box */}
              <div className="mt-6 p-4 rounded-xl bg-cyan-500/5 border border-cyan-400/20 text-xs sm:text-sm text-cyan-200/90 leading-relaxed flex items-start gap-3">
                <Target size={18} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-white block mb-1 uppercase tracking-wider text-[11px] font-mono">
                    Career Objective
                  </span>
                  {profile.careerObjective}
                </div>
              </div>
            </GlowCard>

            {/* Quick Metrics Bento */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <GlowCard key={stat.label} delay={i * 0.05} className="p-4 text-center">
                    <div className="flex justify-center mb-1.5">
                      <Icon size={16} className={stat.color} />
                    </div>
                    <div className={`text-xl sm:text-2xl font-black ${stat.color} font-mono`}>
                      {stat.value}
                    </div>
                    <div className="text-[11px] text-slate-400 font-medium mt-0.5">
                      {stat.label}
                    </div>
                  </GlowCard>
                );
              })}
            </div>

            {/* Research Focus Chips */}
            <GlowCard glowColor="emerald" className="p-6">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono mb-3 flex items-center gap-2">
                <Leaf size={15} className="text-emerald-400" />
                Research & Scientific Interests
              </h3>
              <div className="flex flex-wrap gap-2">
                {profile.researchInterests.map((interest) => (
                  <span
                    key={interest}
                    className="px-3 py-1 rounded-lg text-xs font-medium bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 hover:border-emerald-400/40 hover:bg-emerald-500/20 transition-all cursor-default"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </GlowCard>
          </div>

          {/* Right Column (Expertise & Education): 5 cols */}
          <div className="lg:col-span-5 space-y-6">
            {/* Technical Expertise Matrix */}
            <GlowCard glowColor="blue" className="p-6">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono mb-4 flex items-center gap-2">
                <Brain size={16} className="text-blue-400" />
                Core Competencies
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {profile.expertise.map((item) => {
                  const Icon = iconMap[item.icon] || Globe2;
                  return (
                    <div
                      key={item.label}
                      className="p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-cyan-400/30 hover:bg-white/[0.05] transition-all flex items-center gap-2.5"
                    >
                      <div className="w-7 h-7 rounded-lg bg-cyan-400/10 flex items-center justify-center text-cyan-400 flex-shrink-0">
                        <Icon size={14} />
                      </div>
                      <span className="text-xs text-slate-200 font-medium leading-snug">
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </GlowCard>

            {/* Education Track */}
            <GlowCard glowColor="purple" className="p-6 space-y-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2">
                <GraduationCap size={16} className="text-purple-400" />
                Academic Background
              </h3>

              <div className="space-y-3.5">
                {profile.education.map((edu) => (
                  <div
                    key={edu.degree}
                    className="p-3.5 rounded-xl bg-[#030712]/60 border border-white/[0.06] space-y-1.5"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="font-bold text-white text-xs sm:text-sm leading-tight">
                          {edu.degree}
                        </h4>
                        <p className="text-[11px] text-cyan-300 font-medium mt-0.5">
                          {edu.institution}
                        </p>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex-shrink-0">
                        {edu.gpa}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 leading-relaxed">
                      {edu.description}
                    </p>
                    <div className="text-[10px] text-slate-500 font-mono">
                      {edu.period}
                    </div>
                  </div>
                ))}
              </div>
            </GlowCard>
          </div>
        </div>
      </div>
    </section>
  );
}
