"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { profile } from "@/data/profile";
import SectionTitle from "@/components/ui/SectionTitle";
import GlowCard from "@/components/ui/GlowCard";
import { Mail, MapPin, Send, Phone, AlertCircle, CheckCircle } from "lucide-react";
import { Github, Linkedin, Twitter } from "@/components/ui/Icons";


export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formState, setFormState] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Basic Validation
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMsg("Please fill out all fields.");
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
      // Simulate form submission API request
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setFormState("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setErrorMsg("Something went wrong. Please try again later.");
      setFormState("error");
    }
  };

  return (
    <section id="contact" className="section-padding relative bg-[#030712]">
      <div className="absolute inset-0 grid-bg opacity-15" />

      {/* Glow shapes */}
      <div
        className="absolute bottom-10 left-10 w-96 h-96 rounded-full blur-[140px] opacity-5 pointer-events-none"
        style={{ background: "radial-gradient(circle, #00d4ff, transparent)" }}
      />
      <div
        className="absolute top-10 right-10 w-96 h-96 rounded-full blur-[140px] opacity-5 pointer-events-none"
        style={{ background: "radial-gradient(circle, #00ff88, transparent)" }}
      />

      <div className="section-container relative z-10">
        <SectionTitle
          tag="Contact Info"
          title="Get In Touch"
          subtitle="Feel free to reach out if you have research opportunities, internships, open-source projects, or technical collaborations."
          centered
          className="mb-12"
        />

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Left panel: Info */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-xl font-bold text-white mb-2">Connect Directly</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Drop me an email, reach out on LinkedIn, or fill out the contact form. I try my best to respond within 24 hours.
            </p>

            <div className="space-y-4">
              <GlowCard className="p-5 flex items-center gap-4 border border-white/[0.05]">
                <div className="w-10 h-10 rounded-xl bg-cyan-400/10 flex items-center justify-center text-cyan-400">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Email Address</h4>
                  <a
                    href={`mailto:${profile.contact.email}`}
                    className="text-white hover:text-cyan-400 text-sm font-semibold transition-colors break-all"
                  >
                    {profile.contact.email}
                  </a>
                </div>
              </GlowCard>

              <GlowCard className="p-5 flex items-center gap-4 border border-white/[0.05]">
                <div className="w-10 h-10 rounded-xl bg-emerald-400/10 flex items-center justify-center text-emerald-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Current Location</h4>
                  <p className="text-white text-sm font-semibold">{profile.contact.location}</p>
                </div>
              </GlowCard>

              {profile.contact.phone && (
                <GlowCard className="p-5 flex items-center gap-4 border border-white/[0.05]">
                  <div className="w-10 h-10 rounded-xl bg-purple-400/10 flex items-center justify-center text-purple-400">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Phone Number</h4>
                    <a
                      href={`tel:${profile.contact.phone}`}
                      className="text-white hover:text-cyan-400 text-sm font-semibold transition-colors"
                    >
                      {profile.contact.phone}
                    </a>
                  </div>
                </GlowCard>
              )}
            </div>

            {/* Social handles */}
            <div className="pt-6">
              <h4 className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-3">Social Networks</h4>
              <div className="flex gap-3">
                {[
                  { icon: Github, href: profile.contact.github, label: "GitHub" },
                  { icon: Linkedin, href: profile.contact.linkedin, label: "LinkedIn" },
                  { icon: Twitter, href: profile.contact.twitter, label: "Twitter" },
                ].map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.08] hover:border-cyan-400/30 text-slate-400 hover:text-cyan-400 hover:bg-cyan-400/5 transition-all duration-300"
                      aria-label={social.label}
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right panel: Contact Form */}
          <div className="lg:col-span-3">
            <GlowCard className="p-6 md:p-8 border border-white/[0.05]">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={formState === "loading" || formState === "success"}
                      placeholder="John Doe"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.02] border border-white/[0.08] focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/20 text-white placeholder-slate-600 text-sm transition-all duration-300 outline-none"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={formState === "loading" || formState === "success"}
                      placeholder="john@example.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-white/[0.02] border border-white/[0.08] focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/20 text-white placeholder-slate-600 text-sm transition-all duration-300 outline-none"
                    />
                  </div>
                </div>

                {/* Message field */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs text-slate-400 font-semibold uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    disabled={formState === "loading" || formState === "success"}
                    placeholder="Describe your project, collaboration opportunities, or ask a question..."
                    className="w-full px-4 py-2.5 rounded-xl bg-white/[0.02] border border-white/[0.08] focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/20 text-white placeholder-slate-600 text-sm transition-all duration-300 outline-none resize-none"
                  />
                </div>

                {/* Status Messages */}
                <AnimatePresence mode="wait">
                  {formState === "error" && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="flex items-center gap-2 text-red-400 text-xs font-semibold"
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
                      className="flex items-center gap-2 text-emerald-400 text-xs font-semibold bg-emerald-500/10 border border-emerald-500/25 p-3 rounded-lg"
                    >
                      <CheckCircle size={15} />
                      Thank you! Your message has been sent successfully.
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={formState === "loading" || formState === "success"}
                  className="btn-primary w-full justify-center flex items-center gap-2 py-3 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed text-sm font-bold uppercase tracking-wider"
                >
                  {formState === "loading" ? (
                    <>
                      <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send size={15} />
                      Send Message
                    </>
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
