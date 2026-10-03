"use client";

import Link from "next/link";
import { Mail, Globe2, ArrowUp, MapPin, Sparkles } from "lucide-react";
import { Github, Linkedin, Twitter } from "@/components/ui/Icons";
import { profile } from "@/data/profile";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Hackathons", href: "#hackathons" },
  { label: "Certifications", href: "#certifications" },
  { label: "Awards", href: "#achievements" },
  { label: "Resume", href: "#resume" },
  { label: "Press", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Github, href: profile.contact.github, label: "GitHub" },
  { icon: Linkedin, href: profile.contact.linkedin, label: "LinkedIn" },
  { icon: Twitter, href: profile.contact.twitter, label: "Twitter" },
  { icon: Mail, href: `mailto:${profile.contact.email}`, label: "Email" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/[0.08] bg-[#020611] overflow-hidden">
      {/* Top gradient glow line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

      <div className="section-container py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 shadow-[0_0_10px_rgba(0,240,255,0.2)]">
                <Globe2 size={18} />
              </div>
              <span className="font-bold text-lg text-white">
                Shiva Kumar <span className="text-cyan-400">Induri</span>
              </span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              Geoinformatics & GeoAI developer transforming earth observation satellite data, computer vision, and spatial models into scalable sustainable solutions.
            </p>

            {/* Status indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for GeoAI & GIS Roles / Research
            </div>

            <div className="flex items-center gap-2.5 pt-2">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2.5 rounded-xl border border-white/[0.08] bg-white/[0.02] text-slate-400 hover:text-cyan-400 hover:border-cyan-400/40 hover:bg-cyan-400/10 transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-slate-300 uppercase tracking-widest font-mono">
              Quick Navigation
            </h3>
            <ul className="grid grid-cols-2 gap-x-2 gap-y-2 text-sm">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-slate-400 hover:text-cyan-300 transition-colors text-xs font-medium"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-slate-300 uppercase tracking-widest font-mono">
              Location & Contact
            </h3>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <MapPin size={14} className="text-cyan-400 flex-shrink-0" />
                <span>Hyderabad, Telangana, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={14} className="text-cyan-400 flex-shrink-0" />
                <a
                  href={`mailto:${profile.contact.email}`}
                  className="hover:text-cyan-300 transition-colors break-all"
                >
                  {profile.contact.email}
                </a>
              </div>
              <div className="pt-2">
                <button
                  onClick={scrollToTop}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] hover:border-cyan-400/30 text-slate-300 hover:text-cyan-300 text-xs transition-all"
                >
                  <ArrowUp size={12} />
                  Back to Top
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-12 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {year} Shiva Kumar Induri. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Engineered with Next.js, TypeScript & Geospatial Stack
          </p>
        </div>
      </div>
    </footer>
  );
}
