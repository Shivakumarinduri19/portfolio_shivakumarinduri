"use client";

import { motion } from "framer-motion";
import {
  Map, Satellite, Brain, Code2, Globe2, Droplets, Building2, Leaf
} from "lucide-react";
import { profile } from "@/data/profile";
import SectionTitle from "@/components/ui/SectionTitle";
import GlowCard from "@/components/ui/GlowCard";

const iconMap: Record<string, React.ElementType> = {
  Map, Satellite, Brain, Code2, Globe2, Droplets, Building2, Leaf,
};

const stats = [
  { value: "8+", label: "Projects Built" },
  { value: "2x", label: "Hackathon Winner" },
  { value: "6+", label: "Hackathons" },
  { value: "8+", label: "Certifications" },
];

export default function About() {
  return (
    <section id="about" className="section-padding relative bg-[#030712]">
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Text */}
          <div className="space-y-8">
            <SectionTitle
              tag="About Me"
              title="Building Intelligence from Space Data"
              subtitle="A passionate Geoinformatics student combining satellite imagery, AI/ML, and spatial data science to build solutions that matter."
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              {profile.longBio.split("\n\n").map((para, i) => (
                <p key={i} className="text-slate-400 leading-relaxed">
                  {para}
                </p>
              ))}
            </motion.div>

            {/* Career Objective */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="glass-card rounded-xl p-5 border-l-2 border-cyan-400"
            >
              <h3 className="text-sm font-semibold text-cyan-400 uppercase tracking-wider mb-2">
                Career Objective
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">{profile.careerObjective}</p>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i }}
                  className="glass-card rounded-xl p-4 text-center"
                >
                  <div className="text-2xl font-black gradient-text-cyan">{stat.value}</div>
                  <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: Research Interests + Expertise */}
          <div className="space-y-8">
            {/* Areas of Expertise */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-5 h-5 rounded bg-cyan-400/20 flex items-center justify-center">
                  <Brain size={12} className="text-cyan-400" />
                </span>
                Areas of Expertise
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {profile.expertise.map((item, i) => {
                  const Icon = (iconMap[item.icon] ?? Globe2) as React.ComponentType<any>;
                  return (
                    <GlowCard key={item.label} delay={i * 0.05} className="p-4 flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-cyan-400/10 flex items-center justify-center flex-shrink-0">
                        <Icon size={18} className="text-cyan-400" />
                      </div>
                      <span className="text-sm text-slate-300 font-medium leading-tight">{item.label}</span>
                    </GlowCard>
                  );
                })}
              </div>
            </motion.div>

            {/* Research Interests */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-5 h-5 rounded bg-emerald-400/20 flex items-center justify-center">
                  <Leaf size={12} className="text-emerald-400" />
                </span>
                Research Interests
              </h3>
              <div className="flex flex-wrap gap-2">
                {profile.researchInterests.map((interest, i) => (
                  <motion.span
                    key={interest}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04 }}
                    className="px-3 py-1.5 rounded-full text-xs font-medium border border-emerald-400/20 bg-emerald-400/5 text-emerald-300 hover:border-emerald-400/40 hover:bg-emerald-400/10 transition-all cursor-default"
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <h3 className="text-lg font-semibold text-white mb-4">Education</h3>
              {profile.education.map((edu) => (
                <GlowCard key={edu.degree} className="p-5">
                  <div className="flex justify-between items-start gap-4 flex-wrap">
                    <div>
                      <h4 className="font-semibold text-white">{edu.degree}</h4>
                      <p className="text-cyan-400 text-sm mt-0.5">{edu.institution}</p>
                      <p className="text-slate-400 text-sm mt-2 leading-relaxed">{edu.description}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-xs text-slate-500">{edu.period}</p>
                      <p className="text-sm font-bold text-emerald-400 mt-1">GPA: {edu.gpa}</p>
                    </div>
                  </div>
                </GlowCard>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
