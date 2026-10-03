"use client";

import { useState } from "react";
import Link from "next/link";
import SectionTitle from "@/components/ui/SectionTitle";
import GlowCard from "@/components/ui/GlowCard";
import { Calendar, ArrowLeft, Search, Newspaper, ExternalLink, AlertCircle, Sparkles } from "lucide-react";

const blogCategories = ["All", "UN Global News", "News Press", "Govt Publication", "Educational Spotlight", "Community Registry", "Developer Registry"];

const allPosts = [
  {
    title: "UN Mappers Humanitarian Mapping Sessions at JNTU Hyderabad — Special Mention",
    source: "United Nations (UN Maps / UN Mappers)",
    excerpt: "Featured and given a Special Mention in UN Maps global news for playing a vital role in organizing humanitarian mapping sessions at JNTU Hyderabad and developing Hydro Harvest AI to calculate rooftop rainwater harvesting using satellite data & AI.",
    date: "May 2026",
    category: "UN Global News",
    link: "https://maps.un.org/news/un-mappers-humanitarian-mapping-sessions-jntu-hyderabad",
    color: "cyan",
  },
  {
    title: "Rainwater Harvesting System With 'AI' - JNTU Student Develops 'Hydro Harvesting AI'",
    source: "ETV Bharat (Technology Section)",
    excerpt: "Profiles his background as a B.Tech Geoinformatics student at JNTU Hyderabad and roots in Adilabad, reporting how HydroHarvest AI utilizes satellite remote sensing to estimate urban rainwater runoff.",
    date: "March 2026",
    category: "News Press",
    link: "https://www.etvbharat.com",
    color: "emerald",
  },
  {
    title: "Who Developed 'Hydro Harvest AI'? 💧 | JNTU Student Innovation!",
    source: "Tone Academy (Current Affairs & General Studies)",
    excerpt: "Featured as a prominent current affairs topic for national competitive exams (UPSC, TGPSC), spotlighting how the platform bridges AI with spatial satellite data for sustainable water infrastructure.",
    date: "March 2026",
    category: "Educational Spotlight",
    link: "https://www.youtube.com",
    color: "purple",
  },
  {
    title: "World Water Day: Jal Shakti Hackathon 2025 National Winners Gazette",
    source: "Ministry of Jal Shakti, Government of India",
    excerpt: "Officially recognized under Project ID 4422 (JNTUH) for HydroHarvest AI, awarded ₹1,00,000 grant by the Union Minister of Jal Shakti at DAIC, New Delhi.",
    date: "Dec 2025",
    category: "Govt Publication",
    link: "https://jalshakti-ddws.gov.in",
    color: "emerald",
  },
  {
    title: "FOSS United Developer Profile: Shiva Kumar Induri",
    source: "FOSS United Community Registry",
    excerpt: "Profiles alignment with open-source geospatial development (FOSS4G) utilizing tools like QGIS, PostGIS, GEE, and CesiumJS, highlighting JNTUH Digital Twin 3D flood simulations.",
    date: "Feb 2026",
    category: "Community Registry",
    link: "https://fossunited.org",
    color: "blue",
  },
  {
    title: "Open Source Projects Repository (Shivakumarinduri19)",
    source: "GitHub Open Source Registry",
    excerpt: "Public source repositories tracking active builds for geospatial and AgriTech applications, including farmfriend-telangana-smartfarm and flood visualization suites.",
    date: "Active",
    category: "Developer Registry",
    link: "https://github.com/Shivakumarinduri19",
    color: "orange",
  },
];

export default function BlogCatalog() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredPosts = allPosts.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.source.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#030712] pt-24 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />

      {/* Ambient background glow */}
      <div
        className="absolute top-1/4 left-10 w-[500px] h-[500px] rounded-full blur-[160px] opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #00f0ff, transparent)" }}
      />

      <div className="section-container relative z-10">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-cyan-300 text-xs sm:text-sm font-semibold mb-8 group transition-colors"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home Portfolio
        </Link>

        <SectionTitle
          tag="Press & Spotlight Hub"
          title="Articles, Coverage & Registries"
          subtitle="Archive of featured press coverages, educational current affairs spots, official government gazettes, and developer community registries."
          className="mb-10"
        />

        {/* Filters and Search Bar */}
        <div className="p-4 rounded-2xl bg-[#070d1d] border border-white/[0.08] flex flex-col md:flex-row items-center gap-3 mb-8">
          {/* Search bar */}
          <div className="relative flex-1 w-full">
            <Search size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search news, publication title, or publisher..."
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-[#030712] border border-white/[0.08] focus:border-cyan-400/50 text-white placeholder-slate-500 text-xs sm:text-sm outline-none transition-all"
            />
          </div>

          {/* Category Dropdown */}
          <div className="w-full md:w-auto">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-4 py-2 rounded-xl bg-[#030712] border border-white/[0.08] focus:border-cyan-400/50 text-slate-300 text-xs sm:text-sm outline-none cursor-pointer"
            >
              {blogCategories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat === "All" ? "All Categories" : cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Catalog grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => {
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
                  className="p-6 flex flex-col justify-between h-full"
                >
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex items-center justify-between text-xs">
                      <span className="px-2.5 py-0.5 rounded-full bg-cyan-400/10 text-cyan-300 border border-cyan-400/20 font-mono font-bold text-[10px] uppercase">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1 text-slate-400 font-mono text-[11px]">
                        <Calendar size={12} /> {post.date}
                      </span>
                    </div>

                    {/* Content */}
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

                  {/* Actions */}
                  <div className="pt-6 space-y-4">
                    <div className="h-px bg-white/[0.06]" />
                    <div className="flex items-center justify-between text-xs pt-1">
                      <a
                        href={post.link}
                        target={post.link !== "#" ? "_blank" : undefined}
                        rel={post.link !== "#" ? "noopener noreferrer" : undefined}
                        className="inline-flex items-center gap-1.5 font-bold text-cyan-400 hover:text-cyan-300 transition-colors group/link"
                      >
                        <span>{post.category.includes("Registry") ? "View Source Registry" : "Read Full Article"}</span>
                        <ExternalLink size={13} className="group-hover/link:translate-x-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                </GlowCard>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16 p-6 rounded-2xl bg-[#070d1d] border border-white/[0.06] max-w-md mx-auto space-y-3">
            <AlertCircle size={24} className="text-slate-500 mx-auto" />
            <h3 className="text-base font-bold text-white">No publications matched</h3>
            <p className="text-slate-400 text-xs">
              No press articles or registries found matching your filter criteria.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
