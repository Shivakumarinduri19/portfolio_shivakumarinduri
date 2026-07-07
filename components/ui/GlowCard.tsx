"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: "cyan" | "emerald" | "purple" | "blue" | "orange";
  onClick?: () => void;
  delay?: number;
}

const glowStyles = {
  cyan: "hover:border-cyan-400/40 hover:shadow-[0_8px_40px_rgba(0,212,255,0.15)]",
  emerald: "hover:border-emerald-400/40 hover:shadow-[0_8px_40px_rgba(0,255,136,0.15)]",
  purple: "hover:border-purple-400/40 hover:shadow-[0_8px_40px_rgba(139,92,246,0.15)]",
  blue: "hover:border-blue-400/40 hover:shadow-[0_8px_40px_rgba(59,130,246,0.15)]",
  orange: "hover:border-orange-400/40 hover:shadow-[0_8px_40px_rgba(251,146,60,0.15)]",
};

export default function GlowCard({
  children,
  className,
  glowColor = "cyan",
  onClick,
  delay = 0,
}: GlowCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -4 }}
      onClick={onClick}
      className={cn(
        "glass-card rounded-2xl transition-all duration-300",
        glowStyles[glowColor],
        onClick && "cursor-pointer",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
