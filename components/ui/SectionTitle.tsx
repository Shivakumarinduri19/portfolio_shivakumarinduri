"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  tag?: string;
}

export default function SectionTitle({
  title,
  subtitle,
  centered = false,
  className,
  tag,
}: SectionTitleProps) {
  return (
    <div className={cn(centered ? "text-center" : "", className)}>
      {tag && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={cn(
            "inline-flex items-center gap-2 mb-3",
            centered && "justify-center"
          )}
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-widest border border-cyan-400/30 bg-cyan-400/5 text-cyan-400">
            {tag}
          </span>
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-headline font-bold text-white mb-3"
      >
        {title.split(" ").map((word, i) => {
          const isAccent = i === 0;
          return (
            <span
              key={i}
              className={isAccent ? "gradient-text-cyan" : ""}
            >
              {word}{" "}
            </span>
          );
        })}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-400 text-base md:text-lg max-w-2xl leading-relaxed"
          style={centered ? { margin: "0 auto" } : {}}
        >
          {subtitle}
        </motion.p>
      )}

      {/* Decorative underline */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: centered ? "80px" : "60px" }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className={cn("mt-4 h-[2px] rounded-full", centered && "mx-auto")}
        style={{ background: "linear-gradient(90deg, #00d4ff, #00ff88)" }}
      />
    </div>
  );
}
