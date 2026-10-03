"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Globe2, Download, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#hackathons", label: "Hackathons" },
  { href: "#certifications", label: "Certs" },
  { href: "#achievements", label: "Awards" },
  { href: "#resume", label: "Resume" },
  { href: "#blog", label: "Media" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      document.documentElement.style.setProperty("--scroll-progress", `${progress}%`);

      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 140) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Top Gradient Scroll Progress Line */}
      <div
        className="fixed top-0 left-0 h-[2.5px] z-[100] transition-all duration-100"
        style={{
          width: "var(--scroll-progress, 0%)",
          background: "linear-gradient(90deg, #00f0ff, #10b981)",
        }}
      />

      <header className="fixed top-0 left-0 right-0 z-50 px-3 md:px-6 pt-3 pointer-events-none">
        <div
          className={cn(
            "section-container w-full mx-auto rounded-2xl transition-all duration-300 pointer-events-auto",
            scrolled
              ? "bg-[#030712]/80 backdrop-blur-xl border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.5)] py-2.5 px-4"
              : "bg-transparent py-3 px-2"
          )}
        >
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 group"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <div className="relative w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500/20 to-emerald-500/20 border border-cyan-400/30 flex items-center justify-center group-hover:border-cyan-400 transition-all duration-300 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
                <Globe2
                  size={18}
                  className="text-cyan-400 group-hover:scale-110 transition-transform"
                />
                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-emerald-400 rounded-full animate-ping" />
                <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-emerald-400 rounded-full" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-sm md:text-base text-white group-hover:text-cyan-300 transition-colors tracking-tight">
                  Shiva Kumar <span className="text-cyan-400">Induri</span>
                </span>
                <span className="text-[10px] font-mono text-slate-400 -mt-0.5 tracking-wider uppercase">
                  GeoAI & Geoinformatics
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Pills */}
            <nav className="hidden lg:flex items-center gap-1 bg-[#091122]/60 p-1.5 rounded-full border border-white/[0.06] backdrop-blur-md">
              {navLinks.map((link) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={cn(
                      "px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 relative",
                      isActive
                        ? "text-cyan-300"
                        : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
                    )}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNavPill"
                        className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 rounded-full border border-cyan-400/40 shadow-[0_0_12px_rgba(0,240,255,0.25)]"
                        transition={{ type: "spring", bounce: 0.25, duration: 0.45 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </button>
                );
              })}
            </nav>

            {/* Action Buttons */}
            <div className="flex items-center gap-2.5">
              <a
                href="/resume.pdf"
                download
                className="hidden sm:inline-flex btn-primary text-xs py-2 px-3.5 shadow-sm"
              >
                <Download size={13} />
                <span>CV</span>
              </a>

              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-xl bg-white/[0.04] border border-white/[0.08] text-slate-300 hover:text-white transition-colors"
                aria-label="Toggle navigation menu"
              >
                {mobileOpen ? <X size={18} /> : <Menu size={18} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden section-container mt-2 pointer-events-auto"
            >
              <div className="bg-[#070d1d]/95 backdrop-blur-2xl border border-white/[0.1] rounded-2xl p-4 shadow-2xl space-y-1">
                {navLinks.map((link) => (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className="w-full text-left px-4 py-2.5 rounded-xl text-slate-300 hover:text-cyan-300 hover:bg-white/[0.05] transition-all text-sm font-medium flex items-center justify-between"
                  >
                    <span>{link.label}</span>
                    <span className="text-slate-600 text-xs">#</span>
                  </button>
                ))}
                <div className="pt-2 border-t border-white/[0.08]">
                  <a
                    href="/resume.pdf"
                    download
                    className="btn-primary w-full justify-center text-xs py-2.5"
                  >
                    <Download size={14} /> Download Resume
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
