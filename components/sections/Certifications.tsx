"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { certificates, Certificate } from "@/data/certificates";
import SectionTitle from "@/components/ui/SectionTitle";
import GlowCard from "@/components/ui/GlowCard";
import { Award, ExternalLink, Calendar, BookOpen, Layers, CheckCircle } from "lucide-react";

export default function Certifications() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = useMemo(() => {
    const set = new Set<string>();
    certificates.forEach((c) => set.add(c.category));
    return ["All", ...Array.from(set)];
  }, []);

  const filteredCertificates = certificates.filter((cert) => {
    if (selectedCategory === "All") return true;
    return cert.category === selectedCategory;
  });

  return (
    <section id="certifications" className="section-padding relative bg-[#0a0f1e]/40">
      <div className="absolute inset-0 grid-bg opacity-10" />

      {/* Ambient glows */}
      <div
        className="absolute top-1/2 right-1/4 w-[500px] h-[500px] rounded-full blur-[140px] opacity-[0.03] pointer-events-none"
        style={{ background: "radial-gradient(circle, #00d4ff, transparent)" }}
      />

      <div className="section-container relative z-10">
        <SectionTitle
          tag="Professional Credentials"
          title="Certifications & Training"
          subtitle="A catalog of my professional training, university courses, and verified certifications in GIS technology, deep learning, and remote sensing."
          centered
          className="mb-12"
        />

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 border ${
                selectedCategory === cat
                  ? "border-cyan-400/50 bg-cyan-400/10 text-cyan-400 shadow-[0_0_15px_rgba(0,212,255,0.15)]"
                  : "border-white/[0.08] bg-white/[0.02] text-slate-400 hover:text-white hover:border-slate-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredCertificates.map((cert, index) => {
              const glowColor =
                cert.color === "cyan"
                  ? "cyan"
                  : cert.color === "emerald"
                  ? "emerald"
                  : cert.color === "purple"
                  ? "purple"
                  : cert.color === "blue"
                  ? "blue"
                  : "orange";

              return (
                <motion.div
                  key={cert.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <GlowCard glowColor={glowColor} className="p-6 flex flex-col h-full justify-between">
                    {/* Header Info */}
                    <div className="space-y-4">
                      <div className="flex items-start justify-between gap-3">
                        <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-center justify-center flex-shrink-0 text-cyan-400">
                          <Award size={20} />
                        </div>
                        <span className="text-[10px] font-mono bg-cyan-400/5 text-cyan-400 border border-cyan-400/10 px-2 py-0.5 rounded">
                          {cert.category}
                        </span>
                      </div>

                      <div className="space-y-1.5">
                        <h3 className="font-bold text-white text-base leading-snug tracking-tight">
                          {cert.title}
                        </h3>
                        <p className="text-xs text-slate-400 font-semibold">
                          {cert.organization}
                        </p>
                      </div>
                    </div>

                    {/* Footer Info */}
                    <div className="space-y-4 pt-6">
                      <div className="h-px bg-white/[0.05]" />

                      {/* Covered Skills */}
                      <div className="flex flex-wrap gap-1">
                        {cert.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.06] text-slate-400 text-[10px] font-mono"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
                        <span className="flex items-center gap-1">
                          <Calendar size={13} /> {cert.date}
                        </span>

                        {cert.credentialUrl && (
                          <a
                            href={cert.credentialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                          >
                            Verify <ExternalLink size={12} />
                          </a>
                        )}
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
