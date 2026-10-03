"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  Maximize2,
  X,
} from "lucide-react";

interface MediaItem {
  title: string;
  source: string;
  excerpt: string;
  date: string;
  type: string;
  link: string;
  color: string;
  image?: string;
}

const mediaCoverage: MediaItem[] = [
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
    title: "‘ఏఐ’తో వర్షపు నీటిని ఒడిసిపట్టే విధానం — ‘హైడ్రో హార్వెస్టింగ్ ఏఐ’",
    source: "Eenadu (ఈనాడు) — Greater Hyderabad Edition",
    excerpt: "Prominently featured in Eenadu Greater Hyderabad print edition: Reports how JNTU Geoinformatics student Shiva Kumar Induri developed HydroHarvest AI using satellite imagery and 30-year rainfall analytics, receiving the national Jal Shakti Hackathon award in New Delhi.",
    date: "March 2026",
    type: "Print Press",
    link: "https://www.eenadu.net",
    color: "amber",
    image: "/images/eenadu-hydroharvest-press.jpg",
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
  const [activeImage, setActiveImage] = useState<{ src: string; title: string } | null>(null);

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
                : post.color === "amber"
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

                      {/* Image Thumbnail Preview if available */}
                      {post.image && (
                        <div className="pt-2">
                          <button
                            type="button"
                            onClick={() => setActiveImage({ src: post.image!, title: post.title })}
                            className="w-full group/img relative rounded-xl overflow-hidden border border-amber-400/30 bg-black/40 aspect-[16/9] block text-left transition-all hover:border-amber-400/60 hover:shadow-[0_0_20px_rgba(245,158,11,0.2)]"
                          >
                            <img
                              src={post.image}
                              alt={post.title}
                              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/img:scale-105"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-90 group-hover/img:opacity-95 transition-opacity flex items-end p-2.5 justify-between">
                              <span className="text-[11px] font-semibold text-amber-200 flex items-center gap-1.5 font-mono">
                                <Maximize2 size={12} className="text-amber-400" /> Read Newspaper Clipping
                              </span>
                              <span className="text-[10px] px-2 py-0.5 rounded-md bg-amber-500/20 text-amber-300 border border-amber-400/30 font-mono">
                                ఈనాడు Print
                              </span>
                            </div>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Footer Link */}
                  <div className="pt-6 space-y-4">
                    <div className="h-px bg-white/[0.06]" />
                    <div className="flex items-center justify-between text-xs pt-1">
                      {post.image ? (
                        <button
                          type="button"
                          onClick={() => setActiveImage({ src: post.image!, title: post.title })}
                          className="inline-flex items-center gap-1.5 font-bold text-amber-400 hover:text-amber-300 transition-colors group/link cursor-pointer"
                        >
                          <span>View Newspaper Clip</span>
                          <Maximize2 size={13} className="group-hover/link:scale-110 transition-transform" />
                        </button>
                      ) : (
                        <a
                          href={post.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 font-bold text-cyan-400 hover:text-cyan-300 transition-colors group/link"
                        >
                          <span>{post.type.includes("Registry") ? "View Registry" : "Read Full Coverage"}</span>
                          <ExternalLink size={13} className="group-hover/link:translate-x-0.5 transition-transform" />
                        </a>
                      )}
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox / Modal for Newspaper Clipping */}
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
              className="relative max-w-4xl w-full max-h-[90vh] bg-[#09152e] border border-amber-400/40 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(245,158,11,0.25)] flex flex-col"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 border-b border-white/10 bg-[#060c1c]">
                <div className="flex items-center gap-2">
                  <Newspaper size={16} className="text-amber-400" />
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
              <div className="p-3 sm:p-4 overflow-auto flex items-center justify-center bg-black/50">
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
