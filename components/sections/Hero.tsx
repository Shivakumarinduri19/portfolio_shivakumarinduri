"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Download,
  FolderOpen,
  Mail,
  MapPin,
  Satellite,
  ChevronDown,
  Trophy,
  Layers,
  ArrowRight,
} from "lucide-react";
import { Github, Linkedin, Twitter } from "@/components/ui/Icons";
import { profile } from "@/data/profile";
import HUDOverlay from "@/components/ui/HUDOverlay";

const socialLinks = [
  { icon: Github, href: profile.contact.github, label: "GitHub", color: "hover:text-white" },
  { icon: Linkedin, href: profile.contact.linkedin, label: "LinkedIn", color: "hover:text-blue-400" },
  { icon: Twitter, href: profile.contact.twitter, label: "Twitter", color: "hover:text-sky-400" },
  { icon: Mail, href: `mailto:${profile.contact.email}`, label: "Email", color: "hover:text-cyan-400" },
];

export default function Hero() {
  const [imageError, setImageError] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#030712] pt-24 pb-16"
    >
      {/* High-Tech Background Ambient Grid & Radial Gradients */}
      <div className="absolute inset-0 grid-bg opacity-25 pointer-events-none" />
      <div className="absolute inset-0 grid-dots opacity-40 pointer-events-none" />
      
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full blur-[160px] pointer-events-none opacity-20"
        style={{ background: "radial-gradient(circle, #00f0ff 0%, #10b981 40%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-10 right-10 w-[400px] h-[400px] rounded-full blur-[140px] pointer-events-none opacity-10"
        style={{ background: "radial-gradient(circle, #8b5cf6, transparent)" }}
      />

      <HUDOverlay />

      <div className="relative z-10 section-container w-full">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column (Hero Content): 7 cols on lg */}
          <div className="lg:col-span-7 space-y-6">
            {/* National Winner Live Banner */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-500/10 backdrop-blur-md text-cyan-300 text-xs font-semibold shadow-[0_0_20px_rgba(0,240,255,0.15)]"
            >
              <Trophy size={14} className="text-amber-400" />
              <span>Jal Shakti National Hackathon Winner</span>
              <span className="hidden sm:inline-block text-cyan-500">•</span>
              <span className="hidden sm:inline-block text-amber-300 font-mono">₹1,00,000 Grant</span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="space-y-2"
            >
              <h1 className="text-display text-white tracking-tight">
                Architecting <br />
                <span className="gradient-text-cyan font-black">Spatial AI & Geo-Data</span> <br />
                From Space.
              </h1>
            </motion.div>

            {/* Sub-headline & Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="space-y-3"
            >
              <p className="text-base sm:text-lg text-slate-300 font-medium leading-relaxed max-w-xl">
                I am <span className="text-white font-semibold">{profile.name}</span>, a Geoinformatics engineer & AI/ML specialist at JNTU Hyderabad leveraging satellite earth observation, Google Earth Engine, and computer vision pipelines to engineer precision models for climate, water, and smart infrastructure.
              </p>

              {/* Skill Pill badges */}
              <div className="flex flex-wrap gap-2 pt-1">
                {["Satellite Remote Sensing", "Google Earth Engine", "Computer Vision", "WebGIS & PostGIS", "Python / GeoPandas"].map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-[#0b152b]/80 border border-white/[0.08] text-slate-300 backdrop-blur-md shadow-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* CTA Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex flex-wrap items-center gap-3.5 pt-2"
            >
              <button
                onClick={() => scrollToSection("projects")}
                className="btn-primary cursor-pointer"
                id="hero-view-projects"
              >
                <FolderOpen size={16} />
                <span>Explore Projects</span>
                <ArrowRight size={14} className="ml-0.5" />
              </button>

              <a
                href={profile.resumeUrl}
                download
                className="btn-secondary cursor-pointer"
                id="hero-download-resume"
              >
                <Download size={16} />
                <span>Download CV</span>
              </a>

              <button
                onClick={() => scrollToSection("contact")}
                className="btn-secondary cursor-pointer"
                id="hero-contact"
              >
                <Mail size={16} />
                <span>Contact Me</span>
              </button>
            </motion.div>

            {/* Social Links & Location metadata */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-wrap items-center gap-6 pt-4 border-t border-white/[0.08] text-xs text-slate-400"
            >
              <div className="flex items-center gap-1.5 font-medium">
                <MapPin size={13} className="text-cyan-400" />
                <span>{profile.contact.location}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse ml-1" />
              </div>

              <div className="flex items-center gap-2">
                <span className="text-slate-500 font-mono uppercase tracking-wider text-[10px]">
                  Channels:
                </span>
                {socialLinks.map(({ icon: Icon, href, label, color }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className={`text-slate-400 ${color} transition-all p-1.5 rounded-lg hover:bg-white/[0.06]`}
                  >
                    <Icon size={16} />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column (Visual Portrait & Telemetry Cards): 5 cols on lg */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-square flex items-center justify-center"
            >
              {/* Animated Orbital Radar Rings */}
              <div className="absolute inset-0 rounded-full border border-cyan-400/20 animate-pulse-glow pointer-events-none" />
              <div className="absolute -inset-4 rounded-full border border-cyan-400/10 animate-orbit pointer-events-none" />
              <div className="absolute -inset-8 rounded-full border border-emerald-400/10 pointer-events-none" />

              {/* Orbiting Satellite Marker */}
              <div className="absolute -inset-10 animate-[spin_18s_linear_infinite] pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#0b152b] border border-cyan-400/50 p-1.5 rounded-full shadow-[0_0_12px_#00f0ff]">
                  <Satellite size={16} className="text-cyan-400" />
                </div>
              </div>

              {/* Main Profile Photo Container */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-3xl overflow-hidden border-2 border-cyan-400/30 shadow-[0_0_50px_rgba(0,240,255,0.25)] bg-[#070d1d]">
                {!imageError ? (
                  <img
                    src="/images/profile.jpg?v=2"
                    alt="Shiva Kumar Induri"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    style={{ transform: "scale(2.2)", transformOrigin: "center 36%" }}
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#0b152b] to-[#070d1d] flex flex-col items-center justify-center">
                    <span className="text-5xl font-black gradient-text-cyan">SK</span>
                    <span className="text-xs text-slate-400 mt-2 font-mono">Shiva Kumar Induri</span>
                  </div>
                )}
                {/* Subtle Inner Glow Border */}
                <div className="absolute inset-0 rounded-3xl border border-white/10 pointer-events-none" />
              </div>

              {/* Floating Stat Card 1: Hackathon Badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-4 sm:-left-8 bg-[#091122]/90 backdrop-blur-xl rounded-xl px-4 py-3 border border-cyan-400/30 shadow-xl"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                    <Trophy size={16} />
                  </div>
                  <div>
                    <p className="text-[10px] text-cyan-300 font-mono uppercase font-bold tracking-wider">
                      National Winner
                    </p>
                    <p className="text-xs font-bold text-white">Jal Shakti 2025</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Stat Card 2: Academic Specialization */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-4 -right-4 sm:-right-6 bg-[#091122]/90 backdrop-blur-xl rounded-xl px-4 py-3 border border-emerald-400/30 shadow-xl"
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <Layers size={16} />
                  </div>
                  <div>
                    <p className="text-[10px] text-emerald-300 font-mono uppercase font-bold tracking-wider">
                      Academic GPA
                    </p>
                    <p className="text-xs font-bold text-white">8.53 / 10.0</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Centered Scroll Down Indicator */}
        <div className="flex justify-center pt-10">
          <button
            onClick={() => scrollToSection("about")}
            className="flex flex-col items-center gap-1.5 text-slate-400 hover:text-cyan-400 transition-colors group cursor-pointer"
            aria-label="Scroll to About section"
          >
            <span className="text-[10px] font-mono uppercase tracking-widest group-hover:text-cyan-300">
              Explore Portfolio
            </span>
            <ChevronDown size={18} className="text-cyan-400 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
}
