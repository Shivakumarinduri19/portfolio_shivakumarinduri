"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import GlowCard from "@/components/ui/GlowCard";
import {
  Newspaper,
  Calendar,
  ExternalLink,
  BookOpen,
  Sparkles,
  Radio,
  FileCheck,
} from "lucide-react";

const mediaCoverage = [
  {
    title: "UN Mappers Humanitarian Mapping Sessions at JNTU Hyderabad — Special Mention",
    source: "United Nations (UN Maps / UN Mappers)",
    excerpt: "Featured and given a Special Mention in UN Maps global news for playing a vital role in organizing humanitarian mapping sessions at JNTU Hyderabad and developing Hydro Harvest AI to calculate rooftop rainwater harvesting using satellite data & AI.",
    date: "May 2026",
    type: "UN Global News",
    link: "https://maps.un.org/news/un-mappers-humanitarian-mapping-sessions-jntu-hyderabad",
    color: "cyan",
  },
  {
    title: "Rainwater Harvesting System With 'AI' - JNTU Student Develops 'Hydro Harvesting AI'",
    source: "ETV Bharat (Technology Section)",
    excerpt: "Profiles his background as a B.Tech Geoinformatics student at JNTU Hyderabad and roots in Adilabad, reporting how HydroHarvest AI utilizes satellite remote sensing to estimate urban rainwater runoff.",
    date: "March 2026",
    type: "News Press",
    link: "https://www.etvbharat.com",
    color: "emerald",
  },
  {
    title: "Who Developed 'Hydro Harvest AI'? 💧 | JNTU Student Innovation!",
    source: "Tone Academy (Current Affairs & General Studies)",
    excerpt: "Featured as a prominent current affairs topic for national competitive exams (UPSC, TGPSC), spotlighting how the platform bridges AI with spatial satellite data for sustainable water infrastructure.",
    date: "March 2026",
    type: "Educational Spotlight",
    link: "https://www.youtube.com",
    color: "purple",
  },
  {
    title: "World Water Day: Jal Shakti Hackathon 2025 National Winners Gazette",
    source: "Ministry of Jal Shakti, Government of India",
    excerpt: "Officially recognized under Project ID 4422 (JNTUH) for HydroHarvest AI, awarded ₹1,00,000 grant by the Union Minister of Jal Shakti at DAIC, New Delhi.",
    date: "Dec 2025",
    type: "Govt Publication",
    link: "https://jalshakti-ddws.gov.in",
    color: "blue",
  },
  {
    title: "FOSS United Developer Profile: Shiva Kumar Induri",
    source: "FOSS United Community Registry",
    excerpt: "Profiles alignment with open-source geospatial development (FOSS4G) utilizing tools like QGIS, PostGIS, GEE, and CesiumJS, highlighting JNTUH Digital Twin 3D flood simulations.",
    date: "Feb 2026",
    type: "Community Registry",
    link: "https://fossunited.org",
    color: "orange",
  },
  {
    title: "Open Source Projects Repository (Shivakumarinduri19)",
    source: "GitHub Open Source Registry",
    excerpt: "Public source repositories tracking active builds for geospatial and AgriTech applications, including farmfriend-telangana-smartfarm and flood visualization suites.",
    date: "Active",
    type: "Source Registry",
    link: "https://github.com/Shivakumarinduri19",
    color: "purple",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="section-padding relative bg-[#070d1d] overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />

      <div className="section-container relative z-10">
        <SectionTitle
          tag="Press & Spotlight"
          title="Media Coverage & Publications"
          subtitle="Featured news articles, educational current affairs spotlights, official government gazettes, and open-source developer registries."
          className="mb-10"
        />

        {/* Media Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              <motion.div
                key={post.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="h-full flex flex-col"
              >
                <GlowCard
                  glowColor={glowColor}
                  className="p-6 flex flex-col justify-between h-full"
                >
                  <div className="space-y-4">
                    {/* Header: Source and Type */}
                    <div className="flex items-center justify-between text-xs">
                      <span className="px-2.5 py-0.5 rounded-full bg-cyan-400/10 text-cyan-300 border border-cyan-400/20 font-mono font-bold text-[10px] uppercase">
                        {post.type}
                      </span>
                      <span className="flex items-center gap-1 text-slate-400 font-mono text-[11px]">
                        <Calendar size={12} /> {post.date}
                      </span>
                    </div>

                    <div className="space-y-1.5">
                      <span className="text-[11px] uppercase tracking-wider font-bold text-cyan-300 font-mono block">
                        {post.source}
                      </span>
                      <h3 className="font-bold text-white text-base leading-snug tracking-tight hover:text-cyan-300 transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-slate-300 text-xs sm:text-sm leading-relaxed line-clamp-4 pt-1">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Footer Link */}
                  <div className="pt-6 space-y-4">
                    <div className="h-px bg-white/[0.06]" />
                    <div className="flex items-center justify-between text-xs pt-1">
                      <a
                        href={post.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-bold text-cyan-400 hover:text-cyan-300 transition-colors group/link"
                      >
                        <span>{post.type.includes("Registry") ? "View Registry" : "Read Full Coverage"}</span>
                        <ExternalLink size={13} className="group-hover/link:translate-x-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
