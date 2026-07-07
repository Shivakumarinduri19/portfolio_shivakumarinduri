"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import GlowCard from "@/components/ui/GlowCard";
import { BookOpen, Calendar, ArrowRight, Rss, Newspaper, Award, ExternalLink } from "lucide-react";

const mediaCoverage = [
  {
    title: "Rainwater Harvesting System With 'AI' - JNTU Student Develops 'Hydro Harvesting AI'",
    source: "ETV Bharat (Technology Section)",
    excerpt: "Highlights his background as a B.Tech Geoinformatics student at JNTU Hyderabad and roots in Adilabad, profiling how HydroHarvest AI utilizes satellite remote sensing to estimate potential rainwater yields.",
    date: "2026-03",
    type: "News Press",
    link: "#",
    color: "cyan",
  },
  {
    title: "Who Developed 'Hydro Harvest AI'? 💧 | JNTU Student Innovation!",
    source: "Tone Academy (Current Affairs)",
    excerpt: "Featured as a prominent current affairs and general knowledge topic for competitive exams (UPSC, TGPSC). The spotlight focuses on how the platform bridges AI with GIS mapping to promote sustainable smart cities.",
    date: "2026-03",
    type: "Educational Spotlight",
    link: "#",
    color: "purple",
  },
  {
    title: "World Water Day Event: Jal Shakti Hackathon 2025 Winners List",
    source: "Ministry of Jal Shakti, Government of India",
    excerpt: "Officially listed under Project ID 4422 (JNTUH). Recognized for HydroHarvest AI and awarded ₹1,00,000 grant by the Union Minister of Jal Shakti, Shri C.R. Patil, at DAIC, New Delhi.",
    date: "2025-12",
    type: "Govt Publication",
    link: "https://jalshakti-ddws.gov.in",
    color: "emerald",
  },
  {
    title: "FOSS United Developer Profile: Shiva Kumar Induri",
    source: "FOSS United Community Registry",
    excerpt: "Profiles his alignment with open-source development (FOSS4G) utilizing tools like QGIS, PostGIS, GEE, and CesiumJS, highlighting his JNTUH Digital Twin 3D flood dynamic simulation.",
    date: "2026-02",
    type: "Community Registry",
    link: "https://fossunited.org",
    color: "blue",
  },
  {
    title: "Open Source Projects Repository (Shivakumarinduri19)",
    source: "GitHub Open Source Registry",
    excerpt: "Main repository log tracking active source code builds for geospatial and AgriTech applications, including farmfriend-telangana-smartfarm and floodvisulizationforjntuh.",
    date: "Active",
    type: "Developer Registry",
    link: "https://github.com/Shivakumarinduri19",
    color: "orange",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="section-padding relative bg-[#0a0f1e]/40">
      <div className="absolute inset-0 grid-bg opacity-10" />

      <div className="section-container relative z-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <SectionTitle
            tag="Media & Publications"
            title="Press Coverage & Registries"
            subtitle="Explore featured news articles, educational spotlights, official government publications, and active developer registries highlighting my work."
          />
        </div>

        {/* Media Coverage grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mediaCoverage.map((post, i) => {
            const glowColor =
              post.color === "cyan"
                ? "cyan"
                : post.color === "emerald"
                ? "emerald"
                : post.color === "purple"
                ? "purple"
                : post.color === "orange"
                ? "orange"
                : "blue";

            return (
              <GlowCard
                key={post.title}
                glowColor={glowColor}
                delay={i * 0.1}
                className="p-6 flex flex-col justify-between h-full border border-white/[0.05]"
              >
                <div className="space-y-4">
                  {/* Category and date row */}
                  <div className="flex items-center justify-between text-xs">
                    <span className="px-2 py-0.5 rounded bg-white/[0.04] text-slate-300 border border-white/[0.08] font-mono font-medium">
                      {post.type}
                    </span>
                    <span className="flex items-center gap-1 text-slate-500 font-mono">
                      <Calendar size={12} /> {post.date}
                    </span>
                  </div>

                  {/* Title and Source */}
                  <div className="space-y-2">
                    <span className="text-[10px] uppercase tracking-wider font-bold text-cyan-400 font-mono block">
                      {post.source}
                    </span>
                    <h3 className="font-bold text-white text-base leading-snug tracking-tight hover:text-cyan-400 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed line-clamp-4">
                      {post.excerpt}
                    </p>
                  </div>
                </div>

                {/* Footer specs */}
                <div className="space-y-4 pt-6">
                  <div className="h-px bg-white/[0.05]" />
                  <div className="flex items-center justify-between text-xs pt-1">
                    <a
                      href={post.link}
                      target={post.link !== "#" ? "_blank" : undefined}
                      rel={post.link !== "#" ? "noopener noreferrer" : undefined}
                      className="inline-flex items-center gap-1.5 font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group/link"
                    >
                      {post.type.includes("Registry") ? "View Registry" : "Read Coverage"}
                      <ExternalLink size={13} className="group-hover/link:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </div>
              </GlowCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
