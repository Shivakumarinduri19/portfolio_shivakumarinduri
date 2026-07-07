"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Globe2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#hackathons", label: "Hackathons" },
  { href: "#certifications", label: "Certs" },
  { href: "#achievements", label: "Awards" },
  { href: "#blog", label: "Media" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update scroll progress CSS variable
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      document.documentElement.style.setProperty("--scroll-progress", `${progress}%`);

      // Detect active section
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section);
        if (el && window.scrollY >= el.offsetTop - 120) {
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
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-[2px] z-[100] transition-all duration-100"
        style={{
          width: "var(--scroll-progress, 0%)",
          background: "linear-gradient(90deg, #00d4ff, #00ff88)",
        }}
      />

      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "backdrop-blur-xl bg-[#030712]/80 border-b border-white/[0.06] shadow-2xl"
            : "bg-transparent"
        )}
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 group"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <div className="relative">
                <Globe2
                  size={24}
                  className="text-cyan-400 group-hover:text-cyan-300 transition-colors"
                  style={{ filter: "drop-shadow(0 0 8px rgba(0,212,255,0.6))" }}
                />
                <span className="absolute -top-1 -right-1 w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              </div>
              <span className="font-bold text-lg text-white group-hover:text-cyan-300 transition-colors">
                Shiva<span className="text-cyan-400">Kumar</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const sectionId = link.href.replace("#", "");
                const isActive = activeSection === sectionId;
                return (
                  <button
                    key={link.href}
                    onClick={() => handleNavClick(link.href)}
                    className={cn(
                      "px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 relative",
                      isActive
                        ? "text-cyan-400"
                        : "text-slate-400 hover:text-white hover:bg-white/[0.05]"
                    )}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 bg-cyan-400/10 rounded-md border border-cyan-400/20"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                      />
                    )}
                    <span className="relative z-10">{link.label}</span>
                  </button>
                );
              })}
            </div>

            {/* CTA & Mobile toggle */}
            <div className="flex items-center gap-3">
              <a
                href="/resume.pdf"
                download
                className="hidden sm:inline-flex btn-primary text-sm py-2 px-4"
              >
                Resume
              </a>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-md text-slate-400 hover:text-white hover:bg-white/[0.05] transition-colors"
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden backdrop-blur-xl bg-[#030712]/95 border-t border-white/[0.06]"
            >
              <div className="section-container py-4 flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    onClick={() => handleNavClick(link.href)}
                    className="text-left px-4 py-3 rounded-lg text-slate-300 hover:text-white hover:bg-white/[0.05] transition-all text-sm font-medium"
                  >
                    {link.label}
                  </motion.button>
                ))}
                <a
                  href="/resume.pdf"
                  download
                  className="btn-primary mt-2 justify-center"
                >
                  Download Resume
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
