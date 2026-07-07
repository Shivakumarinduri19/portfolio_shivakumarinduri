"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import {
  Download,
  FolderOpen,
  Mail,
  MapPin,
  Satellite,
  ChevronDown,
} from "lucide-react";
import { Github, Linkedin, Twitter } from "@/components/ui/Icons";

import { profile } from "@/data/profile";
import Image from "next/image";

// Lazy load the 3D globe to avoid SSR issues
const EarthGlobe = dynamic(() => import("@/components/three/EarthGlobe"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-48 h-48 rounded-full border border-cyan-400/20 animate-pulse" />
    </div>
  ),
});

const socialLinks = [
  { icon: Github, href: profile.contact.github, label: "GitHub", color: "hover:text-white" },
  { icon: Linkedin, href: profile.contact.linkedin, label: "LinkedIn", color: "hover:text-blue-400" },
  { icon: Twitter, href: profile.contact.twitter, label: "Twitter", color: "hover:text-sky-400" },
  { icon: Mail, href: `mailto:${profile.contact.email}`, label: "Email", color: "hover:text-cyan-400" },
];

const typewriterWords = [
  "GIS Analyst",
  "Remote Sensing Expert",
  "GeoAI Developer",
  "WebGIS Engineer",
  "Spatial Data Scientist",
];

export default function Hero() {
  const [imageError, setImageError] = useState(false);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-[#030712]"
    >
      {/* Background effects */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Ambient blobs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-[120px] opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #00d4ff, transparent)" }}
      />
      <div
        className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full blur-[100px] opacity-8 pointer-events-none"
        style={{ background: "radial-gradient(circle, #00ff88, transparent)" }}
      />

      {/* 3D Globe — right half background */}
      <div className="absolute right-0 top-0 w-full h-full lg:w-1/2 opacity-60 lg:opacity-80 pointer-events-none">
        <EarthGlobe />
      </div>

      <div className="relative z-10 section-container w-full pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left: Text content */}
          <div className="space-y-6">
            {/* Location badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-400/20 bg-cyan-400/5 text-cyan-400 text-xs font-medium"
            >
              <MapPin size={12} />
              {profile.contact.location}
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h1 className="text-display font-black text-white leading-[1.05]">
                <span className="block text-slate-400 text-lg font-normal tracking-wide mb-2">
                  Hello, I'm
                </span>
                {profile.name.split(" ").map((word, i) => (
                  <span
                    key={i}
                    className={i === 1 ? "gradient-text-cyan block" : "block"}
                  >
                    {word}
                  </span>
                ))}
              </h1>
            </motion.div>

            {/* Title + tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-2"
            >
              <p className="text-xl font-semibold text-slate-200">
                {profile.title}
              </p>
              <div className="flex flex-wrap gap-2">
                {profile.tagline.split(" | ").map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs rounded-md border border-white/[0.08] bg-white/[0.03] text-slate-300 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-slate-400 leading-relaxed max-w-xl"
            >
              {profile.bio}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-3"
            >
              <a
                href={profile.resumeUrl}
                download
                className="btn-primary"
                id="hero-download-resume"
              >
                <Download size={16} />
                Download Resume
              </a>
              <button
                onClick={scrollToProjects}
                className="btn-secondary"
                id="hero-view-projects"
              >
                <FolderOpen size={16} />
                View Projects
              </button>
              <button
                onClick={scrollToContact}
                className="btn-secondary"
                id="hero-contact"
              >
                <Mail size={16} />
                Contact Me
              </button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex items-center gap-4 pt-2"
            >
              <span className="text-xs text-slate-600 uppercase tracking-wider">Connect</span>
              <div className="h-px flex-1 max-w-[40px] bg-white/10" />
              {socialLinks.map(({ icon: Icon, href, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className={`text-slate-500 ${color} transition-all duration-200 hover:scale-110`}
                >
                  <Icon size={20} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right: Profile card — visible on lg+, hidden on mobile (globe shows instead) */}
          <div className="hidden lg:flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="relative"
            >
              {/* Profile image container */}
              <div className="relative w-72 h-72">
                {/* Glow rings */}
                <div className="absolute inset-0 rounded-full border-2 border-cyan-400/20 animate-pulse" />
                <div className="absolute inset-[-12px] rounded-full border border-cyan-400/10 animate-[spin_20s_linear_infinite]" />
                <div className="absolute inset-[-24px] rounded-full border border-emerald-400/5" />

                {/* Satellite icons orbiting */}
                <div className="absolute inset-[-40px] animate-[spin_12s_linear_infinite]">
                  <Satellite
                    size={20}
                    className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-cyan-400 opacity-60"
                  />
                </div>

                {/* Profile photo */}
                <div className="w-full h-full rounded-full overflow-hidden border-2 border-cyan-400/30 shadow-[0_0_40px_rgba(0,212,255,0.2)] relative">
                  {!imageError ? (
                    <img
                      src="/images/profile.jpg?v=2"
                      alt="Shiva Kumar"
                      className="w-full h-full object-cover relative z-10 animate-fade-in"
                      style={{ transform: "scale(2.4)", transformOrigin: "center 38%" }}
                      onError={() => setImageError(true)}
                    />
                  ) : (
                    /* Fallback initials */
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#0b1d3a] to-[#0d1b2a] flex items-center justify-center">
                      <span className="text-5xl font-bold gradient-text-cyan">SK</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Floating stat cards */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-4 -left-8 glass-card rounded-xl px-4 py-3 border border-cyan-400/20"
              >
                <p className="text-xs text-slate-500">Hackathons Won</p>
                <p className="text-2xl font-bold text-cyan-400">2x 🏆</p>
              </motion.div>

              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -top-4 -right-8 glass-card rounded-xl px-4 py-3 border border-emerald-400/20"
              >
                <p className="text-xs text-slate-500">Projects Built</p>
                <p className="text-2xl font-bold text-emerald-400">8+</p>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-slate-600 uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown size={20} className="text-slate-600" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
