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
  CheckCircle2,
  FileText,
  Workflow,
  Sparkles,
  Trophy,
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
    <div className="min-h-screen bg-[#030712] pt-24 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />

      {/* Ambient background glow */}
      <div
        className="absolute top-12 left-1/4 w-[500px] h-[500px] rounded-full blur-[160px] opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #00f0ff, transparent)" }}
      />

      <div className="section-container relative z-10">
        {/* Back Button */}
        <button
          onClick={() => router.push("/#projects")}
          className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-300 text-xs sm:text-sm font-semibold mb-8 group transition-colors cursor-pointer"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Projects Directory
        </button>

        {/* Project Header Banner */}
        <div className="relative mb-10 p-6 md:p-8 rounded-3xl bg-[#070d1d] border border-white/[0.08] shadow-2xl overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 to-emerald-400" />
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2.5 flex-wrap">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-cyan-400/10 text-cyan-300 border border-cyan-400/20">
                  {project.category}
                </span>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider ${
                    isCompleted
                      ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                      : "bg-purple-500/10 text-purple-400 border border-purple-500/20"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-white leading-tight tracking-tight">
                {project.title}
              </h1>
              <p className="text-sm sm:text-base text-slate-300 font-medium">{project.subtitle}</p>
              
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-1 font-mono">
                <span className="flex items-center gap-1.5">
                  <Calendar size={13} className="text-cyan-400" /> {project.period}
                </span>
                {project.location && (
                  <span className="flex items-center gap-1.5 text-cyan-300">
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
                  className="btn-secondary text-xs sm:text-sm py-2 px-4"
                >
                  <Github size={15} />
                  <span>GitHub Repository</span>
                </a>
              )}
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-xs sm:text-sm py-2 px-4"
                >
                  <ExternalLink size={15} />
                  <span>Launch Live Platform</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Detailed Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Info Columns: 7 cols */}
          <div className="lg:col-span-7 space-y-6">
            {/* Overview & Description */}
            <GlowCard glowColor={glowColor} className="p-6 md:p-8">
              <h2 className="text-base sm:text-lg font-bold text-white mb-4 flex items-center gap-2">
                <FileText size={17} className="text-cyan-400" />
                Project Narrative & Context
              </h2>
              <div className="text-slate-300 text-xs sm:text-sm leading-relaxed space-y-3">
                {project.longDescription.split("\n\n").map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </GlowCard>

            {/* Objectives */}
            {project.objectives && project.objectives.length > 0 && (
              <GlowCard glowColor={glowColor} className="p-6 md:p-8">
                <h2 className="text-base sm:text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Sparkles size={17} className="text-emerald-400" />
                  Key Engineering Objectives
                </h2>
                <ul className="space-y-2.5">
                  {project.objectives.map((obj, i) => (
                    <li
                      key={i}
                      className="p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.06] text-slate-300 text-xs sm:text-sm flex items-start gap-2.5"
                    >
                      <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{obj}</span>
                    </li>
                  ))}
                </ul>
              </GlowCard>
            )}

            {/* Results / Deliverables */}
            {project.results && project.results.length > 0 && (
              <GlowCard glowColor={glowColor} className="p-6 md:p-8">
                <h2 className="text-base sm:text-lg font-bold text-white mb-4 flex items-center gap-2">
                  <Trophy size={17} className="text-amber-400" />
                  Key Results & Hackathon Honors
                </h2>
                <ul className="space-y-2.5">
                  {project.results.map((res, i) => (
                    <li key={i} className="p-3 rounded-xl bg-[#030712]/80 border border-white/[0.06] text-slate-300 text-xs sm:text-sm flex items-start gap-2.5 leading-relaxed">
                      <span className="text-amber-400 mt-0.5 flex-shrink-0">🏆</span>
                      <span>{res}</span>
                    </li>
                  ))}
                </ul>

                {project.awardImage && (
                  <div className="mt-5 pt-4 border-t border-white/[0.06]">
                    <div className="rounded-2xl overflow-hidden border border-amber-400/30 bg-black/40 relative shadow-[0_0_30px_rgba(245,158,11,0.12)]">
                      <img
                        src={project.awardImage}
                        alt="National Award Ceremony — World Water Day Conclave"
                        className="w-full h-auto object-cover max-h-[360px]"
                      />
                      <div className="p-3 bg-gradient-to-t from-black/90 to-black/40 flex items-center justify-between text-xs font-mono text-amber-200">
                        <span>🏆 World Water Day Conclave Award Ceremony</span>
                        <span className="text-slate-400">DAIC, New Delhi</span>
                      </div>
                    </div>
                  </div>
                )}
              </GlowCard>
            )}

            {/* Data Pipeline / Architecture workflow */}
            <GlowCard glowColor={glowColor} className="p-6 md:p-8">
              <h2 className="text-base sm:text-lg font-bold text-white mb-3 flex items-center gap-2">
                <Workflow size={17} className="text-cyan-400" />
                Data Pipeline & Analytical Flow
              </h2>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Architecture flow executed across satellite acquisition, geospatial processing, ML inference, and GIS visualization:
              </p>
              
              <div className="p-4 rounded-xl bg-[#030712] border border-white/[0.08] text-xs font-mono text-cyan-300 space-y-2.5 leading-relaxed">
                <div>[1] SATELLITE DATA HARVESTING (Landsat 8/9 / Sentinel / Copernicus)</div>
                <div className="text-slate-400 pl-4 text-[11px]">└── Calibrate multispectral / thermal infrared bands, filter cloud anomalies.</div>
                <div>[2] SPATIAL COMPUTATION (Google Earth Engine / GeoPandas / PostGIS)</div>
                <div className="text-slate-400 pl-4 text-[11px]">└── Calculate NDVI/LST indices, generate rooftop vector masks & hydrological runoff matrices.</div>
                <div>[3] MACHINE LEARNING / GEOMETRIC INFERENCE</div>
                <div className="text-slate-400 pl-4 text-[11px]">└── Model storage optimization based on 30-year rainfall curves and soil absorption.</div>
                <div>[4] WEBGIS VISUALIZATION & MAP SERVICES</div>
                <div className="text-slate-400 pl-4 text-[11px]">└── Render interactive geospatial vector tiles and decision metrics for municipal planners.</div>
              </div>
            </GlowCard>
          </div>

          {/* Right Columns: 5 cols */}
          <div className="lg:col-span-5 space-y-6">
            {/* Tech Stack card */}
            <GlowCard glowColor="purple" className="p-6">
              <h3 className="font-bold text-white text-sm uppercase tracking-wider font-mono mb-3 flex items-center gap-2">
                <Layers size={15} className="text-purple-400" />
                Technology Stack
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg bg-[#030712] border border-white/[0.08] text-cyan-300 text-xs font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </GlowCard>

            {/* Datasets card */}
            {project.datasets && project.datasets.length > 0 && (
              <GlowCard glowColor="cyan" className="p-6">
                <h3 className="font-bold text-white text-sm uppercase tracking-wider font-mono mb-3 flex items-center gap-2">
                  <Database size={15} className="text-cyan-400" />
                  Datasets & Spatial Layers
                </h3>
                <ul className="space-y-2">
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

            {/* Future Scope */}
            <GlowCard glowColor="orange" className="p-6">
              <h3 className="font-bold text-white text-sm uppercase tracking-wider font-mono mb-2">
                Scalability & Future Scope
              </h3>
              <ul className="space-y-2 text-xs text-slate-400 leading-relaxed list-disc pl-4">
                <li>Integrate real-time IoT weather sensors and moisture telemetry for ground validation.</li>
                <li>Optimize inference latency for browser-side deep learning and computer vision classification.</li>
                <li>Build robust systems for geospatial foundational models and real-world applications in agriculture, forestry, and urban planning.</li>
                <li>Scale regional deployment across Telangana and national municipal wards.</li>
              </ul>
            </GlowCard>
          </div>
        </div>
      </div>
    </div>
  );
}
