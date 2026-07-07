"use client";

import Link from "next/link";
import { Mail, Globe2, Heart } from "lucide-react";
import { Github, Linkedin, Twitter } from "@/components/ui/Icons";

import { profile } from "@/data/profile";

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Hackathons", href: "#hackathons" },
  { label: "Resume", href: "#resume" },
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

  return (
    <footer className="relative border-t border-white/[0.06] bg-[#030712]">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

      <div className="section-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Globe2 size={22} className="text-cyan-400" style={{ filter: "drop-shadow(0 0 6px rgba(0,212,255,0.6))" }} />
              <span className="font-bold text-lg text-white">
                Shiva<span className="text-cyan-400">Kumar</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
              Geoinformatics Student passionate about GeoAI, Remote Sensing, and building geospatial intelligence systems.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2 rounded-lg border border-white/[0.08] text-slate-400 hover:text-cyan-400 hover:border-cyan-400/30 hover:bg-cyan-400/5 transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-sm text-slate-400 hover:text-cyan-400 transition-colors animated-underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">Contact</h3>
            <div className="space-y-2">
              <a
                href={`mailto:${profile.contact.email}`}
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <Mail size={14} />
                {profile.contact.email}
              </a>
              <p className="flex items-center gap-2 text-sm text-slate-400">
                <Globe2 size={14} />
                {profile.contact.location}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500 flex items-center gap-1.5">
            Built with <Heart size={12} className="text-red-400" fill="currentColor" /> using open-source technologies
          </p>
          <p className="text-xs text-slate-500">
            © {year} Shiva Kumar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
