"use client";

import { useState } from "react";
import Link from "next/link";
import SectionTitle from "@/components/ui/SectionTitle";
import GlowCard from "@/components/ui/GlowCard";
import { Calendar, ArrowLeft, Search, Newspaper, ExternalLink, AlertCircle } from "lucide-react";

const blogCategories = ["All", "News Press", "Govt Publication", "Educational Spotlight", "Community Registry", "Developer Registry"];

const allPosts = [
  {
    title: "Rainwater Harvesting System With 'AI' - JNTU Student Develops 'Hydro Harvesting AI'",
    source: "ETV Bharat (Technology Section)",
    excerpt: "Highlights his background as a B.Tech Geoinformatics student at JNTU Hyderabad and roots in Adilabad, profiling how HydroHarvest AI utilizes satellite remote sensing to estimate potential rainwater yields.",
    date: "2026-03",
    category: "News Press",
    link: "#",
    color: "cyan",
  },
  {
    title: "Who Developed 'Hydro Harvest AI'? 💧 | JNTU Student Innovation!",
    source: "Tone Academy (Current Affairs)",
    excerpt: "Featured as a prominent current affairs and general knowledge topic for competitive exams (UPSC, TGPSC). The spotlight focuses on how the platform bridges AI with GIS mapping to promote sustainable smart cities.",
    date: "2026-03",
    category: "Educational Spotlight",
    link: "#",
    color: "purple",
  },
  {
    title: "World Water Day Event: Jal Shakti Hackathon 2025 Winners List",
    source: "Ministry of Jal Shakti, Government of India",
    excerpt: "Officially listed under Project ID 4422 (JNTUH). Recognized for HydroHarvest AI and awarded ₹1,00,000 grant by the Union Minister of Jal Shakti, Shri C.R. Patil, at DAIC, New Delhi.",
    date: "2025-12",
    category: "Govt Publication",
    link: "https://jalshakti-ddws.gov.in",
    color: "emerald",
  },
  {
    title: "FOSS United Developer Profile: Shiva Kumar Induri",
    source: "FOSS United Community Registry",
    excerpt: "Profiles his alignment with open-source development (FOSS4G) utilizing tools like QGIS, PostGIS, GEE, and CesiumJS, highlighting his JNTUH Digital Twin 3D flood dynamic simulation.",
    date: "2026-02",
    category: "Community Registry",
    link: "https://fossunited.org",
    color: "blue",
  },
  {
    title: "Open Source Projects Repository (Shivakumarinduri19)",
    source: "GitHub Open Source Registry",
    excerpt: "Main repository log tracking active source code builds for geospatial and AgriTech applications, including farmfriend-telangana-smartfarm and floodvisulizationforjntuh.",
    date: "Active",
    category: "Developer Registry",
    link: "https://github.com/Shivakumarinduri19",
    color: "orange",
  },
];

export default function BlogCatalog() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Filter posts based on category and search query
  const filteredPosts = allPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.source.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#030712] py-20 relative">
      <div className="absolute inset-0 grid-bg opacity-10" />

      {/* Ambient background glows */}
      <div
        className="absolute top-1/4 left-1/10 w-96 h-96 rounded-full blur-[140px] opacity-5 pointer-events-none"
        style={{ background: "radial-gradient(circle, #00d4ff, transparent)" }}
      />
      <div
        className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full blur-[140px] opacity-5 pointer-events-none"
        style={{ background: "radial-gradient(circle, #00ff88, transparent)" }}
      />

      <div className="section-container relative z-10">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-400 text-sm font-semibold mb-8 group transition-colors"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </Link>

        <SectionTitle
          tag="Press Hub"
          title="Articles & Publications"
          subtitle="A complete archive of featured tech articles, educational spots, official publications, and registries referencing my engineering projects."
          className="mb-12"
        />

        {/* Filters and Search */}
        <div className="grid md:grid-cols-3 gap-6 mb-10 p-6 glass-card rounded-2xl border border-white/[0.05]">
          {/* Search bar */}
          <div className="md:col-span-2 relative">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500">
              <Search size={18} />
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search news title, publisher, or keywords..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/[0.02] border border-white/[0.08] focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/20 text-white placeholder-slate-500 text-sm transition-all outline-none"
            />
          </div>

          {/* Category Dropdown */}
          <div className="relative">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-[#0a0f1e] border border-white/[0.08] focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/20 text-white text-sm outline-none cursor-pointer appearance-none"
            >
              {blogCategories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat === "All" ? "Filter by Type (All)" : cat}
                </option>
              ))}
            </select>
            <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">▼</span>
          </div>
        </div>

        {/* Catalog grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post, i) => {
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
                  className="p-6 flex flex-col justify-between h-full border border-white/[0.05]"
                >
                  <div className="space-y-4">
                    {/* Header: type & date */}
                    <div className="flex items-center justify-between text-xs">
                      <span className="px-2 py-0.5 rounded bg-white/[0.04] text-slate-300 border border-white/[0.08] font-mono font-medium">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-slate-500 font-mono">
                        <Calendar size={12} /> {post.date}
                      </span>
                    </div>

                    {/* Content: Title & Excerpt */}
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

                  {/* Actions */}
                  <div className="space-y-4 pt-6">
                    <div className="h-px bg-white/[0.05]" />
                    <div className="flex items-center justify-between text-xs pt-1">
                      <a
                        href={post.link}
                        target={post.link !== "#" ? "_blank" : undefined}
                        rel={post.link !== "#" ? "noopener noreferrer" : undefined}
                        className="inline-flex items-center gap-1.5 font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group/link"
                      >
                        {post.category.includes("Registry") ? "View Registry" : "Read Coverage"}
                        <ExternalLink size={13} className="group-hover/link:translate-x-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                </GlowCard>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20 p-6 glass-card rounded-3xl border border-white/[0.05] max-w-md mx-auto space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-white/[0.02] border border-white/[0.08] flex items-center justify-center text-slate-400 mx-auto">
              <AlertCircle size={22} />
            </div>
            <h3 className="text-lg font-bold text-white">No coverage found</h3>
            <p className="text-slate-400 text-sm">
              We couldn't find any press listings or publications matching "{searchQuery}" under {selectedCategory}.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
