"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { projects, Project } from "@/data/projects";
import SectionTitle from "@/components/ui/SectionTitle";
import GlowCard from "@/components/ui/GlowCard";
import { Search, ExternalLink, ArrowRight, Layers, Tag, X } from "lucide-react";
import { Github } from "@/components/ui/Icons";


export default function Projects() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Extract all unique categories
  const categories = useMemo(() => {
    return Array.from(new Set(projects.map((p) => p.category)));
  }, []);

  // Extract all unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    projects.forEach((p) => p.tags.forEach((t) => tags.add(t)));
    return Array.from(tags);
  }, []);

  // Filter projects
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.techStack.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesCategory = selectedCategory ? project.category === selectedCategory : true;
      const matchesTag = selectedTag ? project.tags.includes(selectedTag) : true;

      return matchesSearch && matchesCategory && matchesTag;
    });
  }, [searchQuery, selectedCategory, selectedTag]);

  const handleResetFilters = () => {
    setSearchQuery("");
    setSelectedCategory(null);
    setSelectedTag(null);
  };

  return (
    <section id="projects" className="section-padding relative bg-[#030712]">
      <div className="absolute inset-0 grid-bg opacity-15" />

      <div className="section-container relative z-10">
        <SectionTitle
          tag="Portfolio Projects"
          title="Featured Geospatial & GeoAI Work"
          subtitle="Explore the research, applications, and geospatial systems I have built using remote sensing data, machine learning, and interactive GIS mapping."
          centered
          className="mb-12"
        />

        {/* Filters and Search Bar Container */}
        <div className="space-y-6 mb-10 p-6 glass-card rounded-2xl border border-white/[0.05]">
          <div className="grid md:grid-cols-3 gap-4">
            {/* Search Input */}
            <div className="relative col-span-1 md:col-span-2">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                <Search size={18} />
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects, technologies, or keywords..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/[0.02] border border-white/[0.08] focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/20 text-white placeholder-slate-500 text-sm transition-all duration-300 outline-none"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-500 hover:text-white"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Category Select */}
            <div className="relative">
              <select
                value={selectedCategory || ""}
                onChange={(e) => setSelectedCategory(e.target.value || null)}
                className="w-full px-4 py-2.5 rounded-xl bg-[#0a0f1e] border border-white/[0.08] focus:border-cyan-400/50 text-slate-300 text-sm transition-all outline-none appearance-none cursor-pointer"
              >
                <option value="">All Categories</option>
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                <Layers size={14} />
              </div>
            </div>
          </div>

          {/* Tags Cloud */}
          <div className="flex flex-wrap items-center gap-1.5 pt-2 border-t border-white/[0.04]">
            <span className="text-xs text-slate-500 font-medium mr-2 flex items-center gap-1">
              <Tag size={12} /> Filter by Tag:
            </span>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                className={`px-2.5 py-1 rounded-md text-xs font-medium transition-all duration-200 border ${
                  selectedTag === tag
                    ? "border-cyan-400/50 bg-cyan-400/10 text-cyan-400"
                    : "border-white/[0.06] bg-white/[0.02] text-slate-400 hover:text-white hover:border-slate-600"
                }`}
              >
                {tag}
              </button>
            ))}
            {(selectedCategory || selectedTag || searchQuery) && (
              <button
                onClick={handleResetFilters}
                className="text-xs text-cyan-400 hover:text-cyan-300 font-semibold underline underline-offset-4 ml-auto"
              >
                Clear all filters
              </button>
            )}
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => {
                const glowColor =
                  project.category === "Water Resources"
                    ? "cyan"
                    : project.category === "Urban Analytics"
                    ? "orange"
                    : project.category === "Agriculture"
                    ? "emerald"
                    : "purple";

                return (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <GlowCard glowColor={glowColor} className="flex flex-col h-full overflow-hidden">
                      {/* Image Banner fallback */}
                      <div className="relative w-full h-48 bg-gradient-to-br from-[#0b1d3a] to-[#0a0f1e] flex items-center justify-center border-b border-white/[0.05] group-hover:scale-105 transition-transform duration-500">
                        <div className="absolute inset-0 bg-[#00d4ff]/5 opacity-30 mix-blend-overlay" />
                        {/* Dynamic SVG / Canvas indicator */}
                        <div className="absolute inset-0 grid-bg opacity-30" />
                        <div className="text-center p-4">
                          <span className="text-[10px] font-mono tracking-wider uppercase bg-cyan-400/10 text-cyan-400 px-2 py-0.5 rounded border border-cyan-400/20">
                            {project.category}
                          </span>
                          <h3 className="font-bold text-white text-lg mt-3 leading-snug tracking-tight px-2">
                            {project.title}
                          </h3>
                          <p className="text-slate-400 text-xs mt-1.5 max-w-[200px] mx-auto line-clamp-1">
                            {project.subtitle}
                          </p>
                        </div>
                      </div>

                      {/* Content Card Body */}
                      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                        <div className="space-y-2">
                          <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
                            {project.description}
                          </p>
                          {/* Tags */}
                          <div className="flex flex-wrap gap-1.5 pt-2">
                            {project.tags.slice(0, 3).map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.06] text-slate-400 text-[10px] font-medium"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Tech Stack Chips */}
                        <div className="space-y-3">
                          <div className="h-px bg-white/[0.05]" />
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

                          {/* Footer Action Links */}
                          <div className="flex items-center justify-between pt-2">
                            <div className="flex gap-2">
                              {project.githubUrl && (
                                <a
                                  href={project.githubUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="p-2 rounded-lg bg-white/5 hover:bg-cyan-400/10 hover:text-cyan-400 text-slate-400 border border-white/10 hover:border-cyan-400/20 transition-all duration-300"
                                  title="View Source Code"
                                >
                                  <Github size={15} />
                                </a>
                              )}
                              {project.demoUrl && (
                                <a
                                  href={project.demoUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="p-2 rounded-lg bg-white/5 hover:bg-emerald-400/10 hover:text-emerald-400 text-slate-400 border border-white/10 hover:border-emerald-400/20 transition-all duration-300"
                                  title="Live Demo"
                                >
                                  <ExternalLink size={15} />
                                </a>
                              )}
                            </div>

                            <Link
                              href={`/projects/${project.slug}`}
                              className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group/link"
                            >
                              Details
                              <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </GlowCard>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        ) : (
          <div className="text-center py-16 p-8 glass-card rounded-2xl border border-white/[0.05]">
            <p className="text-slate-400 text-base">No projects matched your filters.</p>
            <button
              onClick={handleResetFilters}
              className="mt-4 px-5 py-2 btn-primary text-xs"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
