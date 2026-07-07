"use client";

import { projects } from "@/data/projects";
import { notFound, useParams, useRouter } from "next/navigation";
import {
  ArrowLeft,
  ExternalLink,
  Calendar,
  Layers,
  MapPin,
  Database,
  CheckCircle,
  FileText,
  Workflow,
  Sparkles,
} from "lucide-react";
import { Github } from "@/components/ui/Icons";

import GlowCard from "@/components/ui/GlowCard";

export default function ProjectDetail() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug as string;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const isCompleted = project.status === "Completed";
  const glowColor =
    project.category === "Water Resources"
      ? "cyan"
      : project.category === "Urban Analytics"
      ? "orange"
      : project.category === "Agriculture"
      ? "emerald"
      : "purple";

  return (
    <div className="min-h-screen bg-[#030712] py-20 relative">
      <div className="absolute inset-0 grid-bg opacity-10" />

      {/* Decorative Blur */}
      <div
        className="absolute top-12 left-1/4 w-96 h-96 rounded-full blur-[140px] opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #00d4ff, transparent)" }}
      />

      <div className="section-container relative z-10">
        {/* Back Button */}
        <button
          onClick={() => router.push("/#projects")}
          className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 text-sm font-semibold mb-8 group transition-colors"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </button>

        {/* Project Header Card */}
        <div className="relative mb-10 p-6 md:p-8 glass-card rounded-3xl border border-white/[0.08] overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 to-emerald-400" />
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2.5 flex-wrap">
                <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
                  {project.category}
                </span>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${
                    isCompleted
                      ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                      : "bg-purple-500/10 text-purple-400 border border-purple-500/20"
                  }`}
                >
                  {project.status}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                {project.title}
              </h1>
              <p className="text-lg text-slate-300 font-semibold">{project.subtitle}</p>
              
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 pt-2 font-mono">
                <span className="flex items-center gap-1.5">
                  <Calendar size={13} /> {project.period}
                </span>
                {project.location && (
                  <span className="flex items-center gap-1.5 text-cyan-400">
                    <MapPin size={13} /> {project.location.label}
                  </span>
                )}
              </div>
            </div>

            {/* Links CTA */}
            <div className="flex flex-wrap gap-3 flex-shrink-0">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-sm"
                >
                  <Github size={16} />
                  Code Repository
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-sm"
                >
                  <ExternalLink size={16} />
                  Live Platform
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Detailed Layout */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Info Columns */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview & Description */}
            <GlowCard glowColor={glowColor} className="p-6 md:p-8">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <FileText size={18} className="text-cyan-400" />
                Project Overview
              </h2>
              <div className="text-slate-400 text-sm leading-relaxed space-y-4">
                {project.longDescription.split("\n\n").map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </GlowCard>

            {/* Objectives */}
            {project.objectives && project.objectives.length > 0 && (
              <GlowCard glowColor={glowColor} className="p-6 md:p-8">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Sparkles size={18} className="text-emerald-400" />
                  Key Objectives
                </h2>
                <ul className="grid md:grid-cols-2 gap-4">
                  {project.objectives.map((obj, i) => (
                    <li
                      key={i}
                      className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-slate-300 text-sm flex items-start gap-2.5"
                    >
                      <CheckCircle size={16} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </GlowCard>
            )}

            {/* Results / Deliverables */}
            {project.results && project.results.length > 0 && (
              <GlowCard glowColor={glowColor} className="p-6 md:p-8">
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <CheckCircle size={18} className="text-purple-400" />
                  Project Outcomes & Results
                </h2>
                <ul className="space-y-3">
                  {project.results.map((res, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                      <span>{res}</span>
                    </li>
                  ))}
                </ul>
              </GlowCard>
            )}

            {/* Simulated Workflow / Architecture diagram */}
            <GlowCard glowColor={glowColor} className="p-6 md:p-8">
              <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Workflow size={18} className="text-orange-400" />
                Data Pipeline & Architecture
              </h2>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                Below is the conceptual processing workflow and schema implemented to execute the project's analytical pipeline.
              </p>
              
              <div className="p-5 rounded-2xl bg-[#0a0f1e] border border-white/[0.06] text-xs font-mono text-cyan-400 space-y-3 leading-relaxed">
                <div>[1] SATELLITE DATA EXTRACTION (Sentinel / Landsat API)</div>
                <div className="text-slate-500 pl-4">└── Fetch optical/SAR bands & metadata, cloud filtering, CRS re-projection.</div>
                <div>[2] SPATIAL PROCESSING (GeoPandas / GDAL / PostGIS)</div>
                <div className="text-slate-500 pl-4">└── Extract zonal statistics, vector grid generation, masking, NDVI/LST computing.</div>
                <div>[3] MODEL INFERENCE (TensorFlow / Random Forest)</div>
                <div className="text-slate-500 pl-4">└── Input spatial arrays to model, predict inundation maps or classification values.</div>
                <div>[4] WEBGIS VISUALIZATION (Streamlit / Leaflet GL)</div>
                <div className="text-slate-500 pl-4">└── Render vector grids and styling layers, build interactive query panels.</div>
              </div>
            </GlowCard>
          </div>

          {/* Right Columns (Meta details / tech stacks) */}
          <div className="space-y-8">
            {/* Tech Stack card */}
            <GlowCard glowColor="purple" className="p-6">
              <h3 className="font-bold text-white text-base mb-4 flex items-center gap-2">
                <Layers size={16} className="text-purple-400" />
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded bg-[#0a0f1e] border border-white/[0.06] text-cyan-300 text-xs font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </GlowCard>

            {/* Datasets card */}
            {project.datasets && project.datasets.length > 0 && (
              <GlowCard glowColor="cyan" className="p-6">
                <h3 className="font-bold text-white text-base mb-4 flex items-center gap-2">
                  <Database size={16} className="text-cyan-400" />
                  Primary Datasets
                </h3>
                <ul className="space-y-2.5">
                  {project.datasets.map((data, i) => (
                    <li
                      key={i}
                      className="px-3 py-2 rounded-lg bg-white/[0.02] border border-white/[0.06] text-slate-300 text-xs leading-relaxed"
                    >
                      {data}
                    </li>
                  ))}
                </ul>
              </GlowCard>
            )}

            {/* Future Improvements card */}
            <GlowCard glowColor="orange" className="p-6">
              <h3 className="font-bold text-white text-base mb-3">Future Enhancements</h3>
              <ul className="space-y-2 text-xs text-slate-400 leading-relaxed list-disc pl-4">
                <li>Integrate real-time IoT weather sensors for ground validation.</li>
                <li>Optimize inference latency for browser-side deep learning classification.</li>
                <li>Extend geographical coverage to all neighboring Indian states.</li>
              </ul>
            </GlowCard>
          </div>
        </div>
      </div>
    </div>
  );
}
