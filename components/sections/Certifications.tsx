"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { certificates, Certificate } from "@/data/certificates";
import SectionTitle from "@/components/ui/SectionTitle";
import GlowCard from "@/components/ui/GlowCard";
import {
  Award,
  ExternalLink,
  Calendar,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Maximize2,
  X,
} from "lucide-react";

export default function Certifications() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeImage, setActiveImage] = useState<{ src: string; title: string } | null>(null);

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
    <section id="certifications" className="section-padding relative bg-[#030712] overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />

      <div className="section-container relative z-10">
        <SectionTitle
          tag="Credentials & Training"
          title="Verified Professional Certifications"
          subtitle="Specialized training and verified credentials from ISRO/NRSC, Oracle Cloud, UN Mappers, and academic GIS institutes."
          className="mb-10"
        />

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all border ${
                selectedCategory === cat
                  ? "border-cyan-400/50 bg-cyan-400/10 text-cyan-300 shadow-[0_0_15px_rgba(0,240,255,0.15)]"
                  : "border-white/[0.08] bg-[#070d1d] text-slate-400 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  className="h-full flex flex-col"
                >
                  <GlowCard glowColor={glowColor} className="p-6 flex flex-col justify-between h-full">
                    <div className="space-y-4">
                      {/* Header */}
                      <div className="flex items-start justify-between gap-2">
                        <div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 flex-shrink-0">
                          <ShieldCheck size={20} />
                        </div>
                        <span className="text-[10px] font-mono font-bold bg-cyan-400/5 text-cyan-300 border border-cyan-400/10 px-2.5 py-0.5 rounded-full uppercase">
                          {cert.category}
                        </span>
                      </div>

                      {/* Title & Organization */}
                      <div>
                        <h3 className="font-bold text-white text-base leading-snug tracking-tight">
                          {cert.title}
                        </h3>
                        <p className="text-xs text-slate-400 font-semibold mt-1">
                          {cert.organization}
                        </p>
                      </div>

                      {/* Certificate Ceremony Image Preview if available */}
                      {cert.image && (
                        <div className="pt-2">
                          <button
                            type="button"
                            onClick={() => setActiveImage({ src: cert.image!, title: cert.title })}
                            className="w-full group/img relative rounded-xl overflow-hidden border border-orange-400/20 bg-black/40 aspect-[16/10] block text-left transition-all hover:border-orange-400/50 hover:shadow-[0_0_25px_rgba(249,115,22,0.15)]"
                          >
                            <img
                              src={cert.image}
                              alt={cert.title}
                              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/img:scale-105"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-90 group-hover/img:opacity-95 transition-opacity flex items-end p-3 justify-between">
                              <span className="text-[11px] font-semibold text-orange-200 flex items-center gap-1.5 font-mono">
                                <Maximize2 size={12} className="text-orange-400" /> ISRO Shadnagar Ceremony
                              </span>
                              <span className="text-[10px] px-2 py-0.5 rounded-md bg-orange-500/20 text-orange-300 border border-orange-400/30 font-mono">
                                NRSC
                              </span>
                            </div>
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Footer Skills & Date */}
                    <div className="pt-6 space-y-4">
                      <div className="h-px bg-white/[0.06]" />

                      {/* Skill Chips */}
                      <div className="flex flex-wrap gap-1">
                        {cert.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.06] text-slate-300 text-[10px] font-mono"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
                        <span className="flex items-center gap-1 font-mono text-[11px]">
                          <Calendar size={12} /> {cert.date}
                        </span>

                        <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-400">
                          <CheckCircle2 size={12} />
                          Verified
                        </span>
                      </div>
                    </div>
                  </GlowCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* Lightbox / Modal for Certificate Ceremony Photo */}
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
              className="relative max-w-3xl w-full max-h-[90vh] bg-[#09152e] border border-orange-400/30 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(249,115,22,0.2)] flex flex-col"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 border-b border-white/10 bg-[#060c1c]">
                <div className="flex items-center gap-2">
                  <Award size={16} className="text-orange-400" />
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
