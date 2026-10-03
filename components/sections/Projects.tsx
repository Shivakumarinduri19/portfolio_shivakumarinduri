"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { projects, Project } from "@/data/projects";
import SectionTitle from "@/components/ui/SectionTitle";
import GlowCard from "@/components/ui/GlowCard";
import {
  Search,
  ExternalLink,
  ArrowRight,
  X,
  Trophy,
} from "lucide-react";
import { Github } from "@/components/ui/Icons";

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const glowColor =
    project.category === "Water Resources"
      ? "cyan"
      : project.category === "Urban Analytics"
      ? "orange"
      : project.category === "Agriculture"
      ? "emerald"
      : "purple";

  const isAwardWinner = project.tags.some((t) => t.toLowerCase().includes("winner") || t.toLowerCase().includes("jal shakti"));

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="h-full flex flex-col"
    >
      <GlowCard glowColor={glowColor} className="flex flex-col h-full justify-between p-6">
        {/* Top Metadata Header */}
        <div className="space-y-4">
          <div className="flex items-start justify-between gap-2">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-cyan-400/10 text-cyan-300 border border-cyan-400/20">
                {project.category}
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-slate-400 border border-white/[0.08]">
                {project.status}
              </span>
            </div>

            {isAwardWinner && (
              <span className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-300 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded-full">
                <Trophy size={11} className="text-amber-400" />
                1st Prize
              </span>
            )}
          </div>

          {/* Project Title & Subtitle */}
          <div>
            <h3 className="font-bold text-white text-lg sm:text-xl leading-snug tracking-tight hover:text-cyan-300 transition-colors">
              {project.title}
            </h3>
            <p className="text-xs text-slate-400 font-medium mt-1">
              {project.subtitle}
            </p>
          </div>

          {/* Description */}
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-3">
            {project.description}
          </p>

          {/* Key Objective / Highlight Bullet */}
          {project.results && project.results.length > 0 && (
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs text-slate-300 leading-relaxed">
              <span className="font-bold text-cyan-300 font-mono text-[10px] uppercase block mb-1">
                ⭐ Key Result / Grant:
              </span>
              <span className="line-clamp-2">{project.results[0]}</span>
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/[0.06] text-slate-400 text-[10px] font-mono"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom Actions & Tech Stack */}
        <div className="pt-6 space-y-4">
          <div className="h-px bg-white/[0.06]" />

          {/* Tech Stack Chips */}
          <div className="flex flex-wrap gap-1">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded bg-cyan-400/5 text-cyan-300 text-[10px] font-mono"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Links */}
          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center gap-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/[0.04] hover:bg-cyan-400/10 hover:text-cyan-400 text-slate-400 border border-white/[0.08] hover:border-cyan-400/30 transition-all"
                  title="Source Code"
                >
                  <Github size={15} />
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white/[0.04] hover:bg-emerald-400/10 hover:text-emerald-400 text-slate-400 border border-white/[0.08] hover:border-emerald-400/30 transition-all"
                  title="Live Demo"
                >
                  <ExternalLink size={15} />
                </a>
              )}
            </div>

            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400 hover:text-cyan-300 transition-colors group/link"
            >
              Case Study
              <ArrowRight size={13} className="group-hover/link:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </GlowCard>
    </motion.div>
  );
};

export default function Projects() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = useMemo(() => {
    return Array.from(new Set(projects.map((p) => p.category)));
  }, []);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.techStack.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase())) ||
        project.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory = selectedCategory ? project.category === selectedCategory : true;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <section id="projects" className="section-padding relative bg-[#030712] overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <SectionTitle
            tag="Featured Projects"
            title="Geospatial & GeoAI Innovations"
            subtitle="Applied engineering projects built using satellite thermal/multispectral imagery, Google Earth Engine, computer vision, and spatial runoff algorithms."
          />
        </div>

        <div className="space-y-8">
          {/* Search & Category Filter Bar */}
          <div className="p-4 rounded-2xl bg-[#070d1d] border border-white/[0.08] flex flex-col md:flex-row items-center gap-3">
            {/* Search Bar */}
            <div className="relative flex-1 w-full">
              <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects by keyword, model, or tech stack..."
                className="w-full pl-9 pr-8 py-2 rounded-xl bg-[#030712] border border-white/[0.08] focus:border-cyan-400/50 text-white placeholder-slate-500 text-xs sm:text-sm outline-none transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white cursor-pointer"
                >
                  <X size={14} />
                </button>
              )}
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap gap-1.5 w-full md:w-auto">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all border cursor-pointer ${
                  selectedCategory === null
                    ? "border-cyan-400/50 bg-cyan-400/10 text-cyan-300 shadow-sm"
                    : "border-white/[0.06] bg-[#030712] text-slate-400 hover:text-white"
                }`}
              >
                All
              </button>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(selectedCategory === cat ? null : cat)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all border cursor-pointer ${
                    selectedCategory === cat
                      ? "border-cyan-400/50 bg-cyan-400/10 text-cyan-300 shadow-sm"
                      : "border-white/[0.06] bg-[#030712] text-slate-400 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, idx) => (
                  <ProjectCard key={project.id} project={project} index={idx} />
                ))}
              </AnimatePresence>
            </div>
          ) : (
            <div className="text-center py-16 p-8 rounded-2xl bg-[#070d1d] border border-white/[0.06]">
              <p className="text-slate-400 text-sm">No projects found matching your search.</p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory(null);
                }}
                className="mt-3 btn-primary text-xs py-1.5 px-4 cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
