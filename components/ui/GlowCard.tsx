"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import React, { ReactNode, useState } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: "cyan" | "emerald" | "purple" | "blue" | "orange";
  onClick?: () => void;
  delay?: number;
}

const colorStyles = {
  cyan: {
    border: "hover:border-cyan-400/40",
    shadow: "hover:shadow-[0_12px_40px_rgba(0,240,255,0.12)]",
    spotlight: "rgba(0, 240, 255, 0.08)",
  },
  emerald: {
    border: "hover:border-emerald-400/40",
    shadow: "hover:shadow-[0_12px_40px_rgba(16,185,129,0.12)]",
    spotlight: "rgba(16, 185, 129, 0.08)",
  },
  purple: {
    border: "hover:border-purple-400/40",
    shadow: "hover:shadow-[0_12px_40px_rgba(139,92,246,0.12)]",
    spotlight: "rgba(139, 92, 246, 0.08)",
  },
  blue: {
    border: "hover:border-blue-400/40",
    shadow: "hover:shadow-[0_12px_40px_rgba(59,130,246,0.12)]",
    spotlight: "rgba(59, 130, 246, 0.08)",
  },
  orange: {
    border: "hover:border-amber-400/40",
    shadow: "hover:shadow-[0_12px_40px_rgba(245,158,11,0.12)]",
    spotlight: "rgba(245, 158, 11, 0.08)",
  },
};

export default function GlowCard({
  children,
  className,
  glowColor = "cyan",
  onClick,
  delay = 0,
}: GlowCardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const currentTheme = colorStyles[glowColor] || colorStyles.cyan;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -3 }}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "relative rounded-2xl bg-[#091122]/75 backdrop-blur-xl border border-white/[0.08] transition-all duration-300 overflow-hidden",
        currentTheme.border,
        currentTheme.shadow,
        onClick && "cursor-pointer",
        className
      )}
    >
      {/* Dynamic Cursor Spotlight Overlay */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, ${currentTheme.spotlight}, transparent 70%)`,
          }}
        />
      )}

      {/* Subtle Top Border Specular Accent */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

      {/* Children content */}
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
