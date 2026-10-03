"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import SectionTitle from "@/components/ui/SectionTitle";
import GlowCard from "@/components/ui/GlowCard";
import {
  Download,
  GraduationCap,
  Briefcase,
  Code,
  MapPin,
  Calendar,
  Sparkles,
  CheckCircle2,
  FileText,
} from "lucide-react";

const experience = [
  {
    role: "Founder & Lead Developer of HydroHarvest AI",
    organization: "JNTUH Project Lab",
    location: "Hyderabad, India",
    period: "March 2026 – Present",
    badge: "Funded PoC",
    description: [
      "Spearheaded HydroHarvest AI, an automated geospatial design suite utilizing GeoAI to optimize urban rooftop rainwater harvesting (RWH) layouts.",
      "Awarded an INR 1,00,000 research grant from the Ministry of Jal Shakti to develop and scale the platform's Proof-of-Concept.",
      "Secured 1st Place at the National Jal Shakti Hackathon 2025 under academic mentorship of Prof. Thatiparthi Vijaya Lakshmi and Dr. T. Ravi Shanker at JNTUH.",
      "Integrated 30-year historical rainfall datasets, soil permeability layers, and satellite computer vision for automated rooftop boundary extraction.",
    ],
  },
  {
    role: "Technical Trainee (Winter Internship)",
    organization: "India Space Lab",
    location: "India",
    period: "Feb 2026 – March 2026",
    badge: "Aerospace",
    description: [
      "Prototyped sensor-to-satellite data pipelines for CanSat and CubeSat payload architectures.",
      "Applied Earth Observation Remote Sensing and GIS for precision agricultural modeling and disaster risk mitigation.",
      "Gained technical expertise in drone systems, telemetry payloads, and rocketry science.",
    ],
  },
  {
    role: "Industrial Trainee",
    organization: "Govt. of Telangana, Irrigation & CAD Dept",
    location: "Adilabad, Telangana, India",
    period: "Dec 2023 – June 2024",
    badge: "Hydraulics",
    description: [
      "Conducted field-based hydraulic surveys and monitored water distribution for state-level irrigation projects.",
      "Streamlined technical documentation for command area development and infrastructure monitoring.",
      "Drafted AutoCAD canal network layouts and estimated material quantities and cost models.",
    ],
  },
];

const technicalSummary = [
  {
    category: "Geospatial & Remote Sensing",
    items: ["Google Earth Engine (GEE)", "QGIS", "ArcGIS Pro", "Bhuvan Geoportal", "PostGIS", "NISAR SAR Data"],
  },
  {
    category: "AI, ML & Programming",
    items: ["Python (NumPy, Pandas, GeoPandas)", "Rasterio", "OpenCV", "SQL (PostgreSQL)", "JavaScript (GEE API)"],
  },
  {
    category: "Full Stack & WebGIS",
    items: ["React Native", "Django", "Next.js", "MapLibre GL JS", "Git / GitHub", "HTML5 & Tailwind CSS"],
  },
  {
    category: "Aerospace & Engineering",
    items: ["CanSat & CubeSat Systems", "Drone Payloads", "AutoCAD Design", "Hydraulic Surveying"],
  },
];

export default function Resume() {
  return (
    <section id="resume" className="section-padding relative bg-[#030712] overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionTitle
            tag="Curriculum Vitae"
            title="Experience & Academic Track"
            subtitle="A comprehensive overview of my research engineering roles, space lab training, and academic background."
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-shrink-0"
          >
            <a
              href={profile.resumeUrl}
              download
              className="btn-primary text-xs py-2.5 px-4 shadow-lg flex items-center gap-2"
              id="resume-download-btn"
            >
              <FileText size={15} />
              <span>Download Official Resume (PDF)</span>
            </a>
          </motion.div>
        </div>

        {/* 2-Column CV Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column (Work & Project Roles): 7 cols */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2 border-b border-white/[0.08] pb-3">
              <Briefcase size={16} className="text-cyan-400" />
              Professional & Research Roles
            </h3>

            <div className="space-y-5">
              {experience.map((exp, i) => (
                <GlowCard key={exp.role} delay={i * 0.1} className="p-6">
                  {/* Role Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 mb-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-cyan-400/10 text-cyan-300 border border-cyan-400/20">
                          {exp.badge}
                        </span>
                        <span className="text-xs text-slate-400 font-medium">
                          {exp.organization}
                        </span>
                      </div>
                      <h4 className="font-bold text-white text-base sm:text-lg mt-1">
                        {exp.role}
                      </h4>
                    </div>

                    <div className="text-left sm:text-right flex-shrink-0 font-mono text-[11px] text-slate-400 space-y-0.5">
                      <div className="flex items-center sm:justify-end gap-1">
                        <Calendar size={12} className="text-cyan-400" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center sm:justify-end gap-1 text-slate-500">
                        <MapPin size={12} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2 pt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {exp.description.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-cyan-400 mt-1 flex-shrink-0 text-xs">▹</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </GlowCard>
              ))}
            </div>
          </div>

          {/* Right Column (Education & Tech Core): 5 cols */}
          <div className="lg:col-span-5 space-y-6">
            {/* Education Track */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2 border-b border-white/[0.08] pb-3">
                <GraduationCap size={16} className="text-emerald-400" />
                Degrees & Qualifications
              </h3>

              <div className="space-y-3.5">
                {profile.education.map((edu) => (
                  <GlowCard key={edu.degree} glowColor="emerald" className="p-5">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="font-bold text-white text-sm">
                          {edu.degree}
                        </h4>
                        <p className="text-xs text-emerald-300 font-medium mt-0.5">
                          {edu.institution}
                        </p>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                        GPA: {edu.gpa}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed mt-2">
                      {edu.description}
                    </p>
                    <div className="text-[10px] text-slate-500 font-mono mt-2">
                      {edu.period}
                    </div>
                  </GlowCard>
                ))}
              </div>
            </div>

            {/* Technical Stack Breakdown */}
            <div className="space-y-4 pt-2">
              <h3 className="text-sm font-bold text-white uppercase tracking-wider font-mono flex items-center gap-2 border-b border-white/[0.08] pb-3">
                <Code size={16} className="text-purple-400" />
                Tooling & Stack Summary
              </h3>

              <div className="space-y-3">
                {technicalSummary.map((tech) => (
                  <GlowCard key={tech.category} glowColor="purple" className="p-4">
                    <h5 className="font-bold text-purple-300 text-xs uppercase tracking-wider font-mono mb-2">
                      {tech.category}
                    </h5>
                    <div className="flex flex-wrap gap-1.5">
                      {tech.items.map((item) => (
                        <span
                          key={item}
                          className="px-2 py-0.5 rounded bg-white/[0.04] border border-white/[0.08] text-slate-300 text-[11px] font-mono"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </GlowCard>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
