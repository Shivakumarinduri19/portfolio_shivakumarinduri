"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  tag?: string;
  badgeIcon?: React.ReactNode;
}

export default function SectionTitle({
  title,
  subtitle,
  centered = false,
  className,
  tag,
  badgeIcon,
}: SectionTitleProps) {
  return (
    <div className={cn("space-y-3", centered ? "text-center mx-auto" : "", className)}>
      {tag && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className={cn(
            "inline-flex items-center gap-2",
            centered ? "justify-center" : ""
          )}
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase border border-cyan-400/30 bg-cyan-400/10 text-cyan-300 shadow-[0_0_15px_rgba(0,240,255,0.15)] backdrop-blur-md">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            {badgeIcon}
            {tag}
          </span>
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-headline text-white tracking-tight"
      >
        {title.split(" ").map((word, i) => {
          // Highlight first 2 words if title has 3+ words or first word
          const isAccent = i === 0 || (i === 1 && title.split(" ").length > 3);
          return (
            <span
              key={i}
              className={isAccent ? "gradient-text-cyan font-extrabold" : "font-bold text-white"}
            >
              {word}{" "}
            </span>
          );
        })}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={cn(
            "text-slate-400 text-sm md:text-base max-w-2xl leading-relaxed",
            centered ? "mx-auto" : ""
          )}
        >
          {subtitle}
        </motion.p>
      )}

      {/* Modern minimal line accent */}
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: centered ? "60px" : "48px", opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className={cn("h-[2px] rounded-full mt-2", centered ? "mx-auto" : "")}
        style={{ background: "linear-gradient(90deg, #00f0ff, #10b981)" }}
      />
    </div>
  );
}
