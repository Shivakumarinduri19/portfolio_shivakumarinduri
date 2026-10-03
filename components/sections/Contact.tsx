"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "@/data/profile";
import SectionTitle from "@/components/ui/SectionTitle";
import GlowCard from "@/components/ui/GlowCard";
import {
  Mail,
  MapPin,
  Send,
  Phone,
  AlertCircle,
  CheckCircle,
  Copy,
  Check,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import { Github, Linkedin, Twitter } from "@/components/ui/Icons";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setErrorMsg("Please fill out all fields before submitting.");
      setFormState("error");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setErrorMsg("Please provide a valid email address.");
      setFormState("error");
      return;
    }

    setFormState("loading");
    setErrorMsg("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setFormState("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setErrorMsg("Something went wrong. Please reach out directly via email.");
      setFormState("error");
    }
  };

  return (
    <section id="contact" className="section-padding relative bg-[#030712] overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-15 pointer-events-none" />

      {/* Decorative glows */}
      <div
        className="absolute bottom-10 left-10 w-[500px] h-[500px] rounded-full blur-[160px] opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #00f0ff, transparent)" }}
      />
      <div
        className="absolute top-10 right-10 w-[500px] h-[500px] rounded-full blur-[160px] opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, #10b981, transparent)" }}
      />

      <div className="section-container relative z-10">
        <SectionTitle
          tag="Let's Collaborate"
          title="Get In Touch"
          subtitle="Open for GeoAI engineer roles, remote sensing research collaborations, WebGIS development, and hackathon partnerships."
          className="mb-12"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column (Quick Direct Contact): 5 cols */}
          <div className="lg:col-span-5 space-y-6">
            <GlowCard glowColor="cyan" className="p-6 sm:p-7 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  Direct Communication
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">
                  Have a question, research proposal, or career opportunity? Send me a message directly or connect on social platforms.
                </p>
              </div>

              {/* Email Card with One-Click Copy */}
              <div className="p-4 rounded-xl bg-[#030712]/80 border border-white/[0.08] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-9 h-9 rounded-lg bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 flex-shrink-0">
                    <Mail size={16} />
                  </div>
                  <div className="truncate">
                    <span className="text-[10px] text-slate-500 font-mono uppercase font-bold block">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${profile.contact.email}`}
                      className="text-xs sm:text-sm text-white hover:text-cyan-300 font-semibold truncate block transition-colors"
                    >
                      {profile.contact.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={copyEmail}
                  className="p-2 rounded-lg bg-white/[0.04] hover:bg-cyan-400/10 text-slate-400 hover:text-cyan-300 border border-white/[0.08] transition-all flex-shrink-0 cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check size={15} className="text-emerald-400" /> : <Copy size={15} />}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-xl bg-[#030712]/80 border border-white/[0.08] flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center text-emerald-400 flex-shrink-0">
                  <MapPin size={16} />
                </div>
                <div>
                  <span className="text-[10px] text-slate-500 font-mono uppercase font-bold block">
                    Base Location
                  </span>
                  <p className="text-xs sm:text-sm text-white font-semibold">
                    {profile.contact.location}
                  </p>
                </div>
              </div>

              {/* Phone Card */}
              {profile.contact.phone && (
                <div className="p-4 rounded-xl bg-[#030712]/80 border border-white/[0.08] flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-purple-400/10 border border-purple-400/20 flex items-center justify-center text-purple-400 flex-shrink-0">
                    <Phone size={16} />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 font-mono uppercase font-bold block">
                      Phone / WhatsApp
                    </span>
                    <a
                      href={`tel:${profile.contact.phone}`}
                      className="text-xs sm:text-sm text-white hover:text-cyan-300 font-semibold transition-colors"
                    >
                      {profile.contact.phone}
                    </a>
                  </div>
                </div>
              )}

              {/* Social Channels */}
              <div className="pt-2">
                <span className="text-[10px] text-slate-400 font-mono uppercase font-bold tracking-wider block mb-3">
                  Social Channels & Repositories
                </span>
                <div className="flex gap-2.5">
                  {[
                    { icon: Github, href: profile.contact.github, label: "GitHub", handle: "GitHub" },
                    { icon: Linkedin, href: profile.contact.linkedin, label: "LinkedIn", handle: "LinkedIn" },
                    { icon: Twitter, href: profile.contact.twitter, label: "Twitter", handle: "Twitter" },
                  ].map((s) => {
                    const Icon = s.icon;
                    return (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.08] hover:border-cyan-400/40 hover:bg-cyan-400/10 text-slate-300 hover:text-cyan-300 transition-all flex items-center justify-center gap-2 text-xs font-semibold"
                      >
                        <Icon size={15} />
                        <span>{s.handle}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </GlowCard>
          </div>

          {/* Right Column (Interactive Contact Form): 7 cols */}
          <div className="lg:col-span-7">
            <GlowCard glowColor="emerald" className="p-6 sm:p-8">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider mb-6">
                <MessageSquare size={16} />
                <span>Send a Message</span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs text-slate-300 font-semibold font-mono uppercase">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={formState === "loading" || formState === "success"}
                      placeholder="e.g. Dr. Jane Smith"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#030712] border border-white/[0.08] focus:border-cyan-400/50 text-white placeholder-slate-600 text-xs sm:text-sm outline-none transition-all"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs text-slate-300 font-semibold font-mono uppercase">
                      Your Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={formState === "loading" || formState === "success"}
                      placeholder="jane@university.edu"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#030712] border border-white/[0.08] focus:border-cyan-400/50 text-white placeholder-slate-600 text-xs sm:text-sm outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Message field */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs text-slate-300 font-semibold font-mono uppercase">
                    Your Message / Proposal
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    disabled={formState === "loading" || formState === "success"}
                    placeholder="Describe your research project, role details, or collaboration ideas..."
                    className="w-full px-4 py-2.5 rounded-xl bg-[#030712] border border-white/[0.08] focus:border-cyan-400/50 text-white placeholder-slate-600 text-xs sm:text-sm outline-none transition-all resize-none"
                  />
                </div>

                {/* Feedback Alerts */}
                <AnimatePresence mode="wait">
                  {formState === "error" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="flex items-center gap-2 text-red-400 text-xs font-semibold bg-red-500/10 border border-red-500/20 p-3 rounded-xl"
                    >
                      <AlertCircle size={14} />
                      {errorMsg}
                    </motion.div>
                  )}

                  {formState === "success" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="flex items-center gap-2 text-emerald-300 text-xs font-semibold bg-emerald-500/10 border border-emerald-500/25 p-3 rounded-xl"
                    >
                      <CheckCircle size={15} />
                      Thank you! Your message has been received. I will respond promptly.
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={formState === "loading" || formState === "success"}
                  className="btn-primary w-full py-3 rounded-xl font-bold uppercase tracking-wider text-xs sm:text-sm disabled:opacity-50 cursor-pointer shadow-md"
                >
                  {formState === "loading" ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                      Transmitting Message...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send size={15} />
                      Send Transmission
                    </span>
                  )}
                </button>
              </form>
            </GlowCard>
          </div>
        </div>
      </div>
    </section>
  );
}
