"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/profile";
import SectionTitle from "@/components/ui/SectionTitle";
import GlowCard from "@/components/ui/GlowCard";
import { Download, GraduationCap, Briefcase, Code, MapPin, Calendar, Award } from "lucide-react";

const experience = [
  {
    role: "Founder & developer of HydroHarvest Ai",
    organization: "JNTUH Project Lab",
    location: "Hyderabad, India",
    period: "March 2026 – Present (5 months)",
    description: [
      "Spearheaded the development of HydroHarvest AI, a geospatial design suite utilizing GeoAI to optimize urban rooftop rainwater harvesting systems.",
      "Awarded an INR 1,00,000 grant from the Ministry of Jal Shakti to develop and scale the project's Proof-of-Concept.",
      "Secured 1st Place at the Jal Shakti Hackathon 2025 by demonstrating the platform's potential for sustainable water management.",
      "Integrated geospatial technologies and machine learning models to analyze spatial data and predict harvesting yields.",
      "Refined technical architecture and project scope under the expert mentorship of Prof. Thatiparthi Vijaya Lakshmi and Dr. T. Ravi Shanker at JNTUH.",
    ],
  },
  {
    role: "Technical Trainee (Winter Internship)",
    organization: "India Space Lab",
    location: "India",
    period: "Feb 2026 – March 2026",
    description: [
      "Satellite Systems: Prototyped sensor-to-satellite data pipelines for CanSat and CubeSat architectures.",
      "Earth Observation: Leveraged Remote Sensing and GIS for agricultural optimization and disaster management modeling.",
      "Advanced Drone Technology: Gained technical knowledge in drone systems, rocketry science, and satellite payloads.",
    ],
  },
  {
    role: "Industrial Trainee",
    organization: "Govt. of Telangana, Irrigation & CAD Dept",
    location: "Adilabad, Telangana, India",
    period: "Dec 2023 – June 2024",
    description: [
      "Hydrology: Conducted field-based hydraulic surveys and monitored water distribution for state-level irrigation projects.",
      "Data Management: Streamlined technical documentation for irrigation command area development and infrastructure monitoring.",
      "Irrigation Planning: AutoCAD drafting of canal layouts and estimating material quantities/costs for canal networks.",
    ],
  },
];

const education = [
  {
    degree: "B.Tech in Geoinformatics (Major)",
    institution: "Jawaharlal Nehru Technological University Hyderabad (JNTUH)",
    location: "Hyderabad, India",
    period: "Aug 2024 – May 2027",
    details: "Current CGPA: 8.53/10 | Major focusing on remote sensing, spatial database, and digital image processing.",
  },
  {
    degree: "AI & Machine Learning (Minor)",
    institution: "Jawaharlal Nehru Technological University Hyderabad (JNTUH)",
    location: "Hyderabad, India",
    period: "2025 – 2027",
    details: "Current CGPA: 8.0/10 | Minor focusing on deep learning and neural network integration.",
  },
  {
    degree: "Diploma in Civil Engineering",
    institution: "S.G. Govt Polytechnic, Adilabad",
    location: "Adilabad, Telangana, India",
    period: "June 2021 – April 2024",
    details: "Overall CGPA: 8.77/10 | Awarded the Meritorious Student Award for academic excellence in Civil Engineering.",
  },
];

const technicalCore = [
  { category: "Geospatial Analysis", items: ["QGIS", "ArcGIS Pro", "Google Earth Engine (GEE)", "Bhuvan Geoportal", "PostGIS"] },
  { category: "Programming", items: ["Python (NumPy, Pandas, GeoPandas, Rasterio, OpenCV)", "SQL (PostgreSQL/MySQL)", "JavaScript (GEE API)"] },
  { category: "Development", items: ["HTML", "CSS", "Git/GitHub"] },
  { category: "Aerospace & Engineering", items: ["Drone Systems", "CanSat & CubeSat Prototyping", "Rocketry Science", "AutoCAD Design", "Irrigation planning"] },
];

export default function Resume() {
  return (
    <section id="resume" className="section-padding relative bg-[#0a0f1e]/40">
      <div className="absolute inset-0 grid-bg opacity-10" />

      <div className="section-container relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <SectionTitle
            tag="Resume / Curriculum Vitae"
            title="Professional Summary"
            subtitle="An overview of my academic background, technical experience, and core programming/GIS competencies."
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-shrink-0"
          >
            <a
              href={profile.resumeUrl}
              download
              className="btn-primary flex items-center gap-2 text-sm"
              id="resume-download-btn"
            >
              <Download size={16} />
              Download Resume (PDF)
            </a>
          </motion.div>
        </div>

        {/* Structured Resume Content */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Columns (Education & Experience) */}
          <div className="lg:col-span-2 space-y-8">
            {/* Experience Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2 border-b border-white/[0.06] pb-2">
                <Briefcase size={18} className="text-cyan-400" />
                Work & Leadership Experience
              </h3>

              <div className="space-y-6">
                {experience.map((exp, i) => (
                  <GlowCard key={exp.role} delay={i * 0.1} className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                      <div>
                        <h4 className="font-bold text-white text-base leading-snug">{exp.role}</h4>
                        <p className="text-sm font-semibold text-cyan-400 mt-0.5">{exp.organization}</p>
                      </div>
                      <div className="sm:text-right flex-shrink-0 space-y-1">
                        <p className="text-xs text-slate-500 font-mono flex sm:justify-end items-center gap-1.5">
                          <Calendar size={12} /> {exp.period}
                        </p>
                        <p className="text-xs text-slate-400 font-medium flex sm:justify-end items-center gap-1.5">
                          <MapPin size={12} /> {exp.location}
                        </p>
                      </div>
                    </div>

                    <ul className="list-disc list-outside pl-4 space-y-2 text-sm text-slate-400 leading-relaxed">
                      {exp.description.map((bullet, idx) => (
                        <li key={idx}>{bullet}</li>
                      ))}
                    </ul>
                  </GlowCard>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2 border-b border-white/[0.06] pb-2">
                <GraduationCap size={18} className="text-emerald-400" />
                Education
              </h3>

              {education.map((edu) => (
                <GlowCard key={edu.degree} glowColor="emerald" className="p-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <h4 className="font-bold text-white text-base leading-snug">{edu.degree}</h4>
                      <p className="text-sm font-semibold text-emerald-400 mt-0.5">{edu.institution}</p>
                    </div>
                    <div className="sm:text-right flex-shrink-0 space-y-1">
                      <p className="text-xs text-slate-500 font-mono flex sm:justify-end items-center gap-1.5">
                        <Calendar size={12} /> {edu.period}
                      </p>
                      <p className="text-xs text-slate-400 font-medium flex sm:justify-end items-center gap-1.5">
                        <MapPin size={12} /> {edu.location}
                      </p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-400 leading-relaxed">{edu.details}</p>
                </GlowCard>
              ))}
            </div>
          </div>

          {/* Right Column (Technical Skills Breakdown) */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-white flex items-center gap-2 border-b border-white/[0.06] pb-2">
              <Code size={18} className="text-purple-400" />
              Technical Stack Summary
            </h3>

            <div className="grid gap-4">
              {technicalCore.map((tech, i) => (
                <GlowCard key={tech.category} glowColor="purple" delay={i * 0.05} className="p-5">
                  <h4 className="font-bold text-white text-sm mb-3 text-purple-300">
                    {tech.category}
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {tech.items.map((item) => (
                      <span
                        key={item}
                        className="px-2.5 py-1 rounded bg-[#0a0f1e] border border-white/[0.06] text-slate-300 text-xs font-mono"
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
    </section>
  );
}
