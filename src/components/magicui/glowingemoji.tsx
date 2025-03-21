"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface GlowingEmojiProps {
  size?: number;
  thickness?: number;
  duration?: number;
  gradientColors?: string[];
  children?: React.ReactNode;
}

export const GlowingEmoji = ({
  size = 250,
  thickness = 1,
  duration = 20,
  gradientColors = ["#ff0000", "#00ff00", "#0000ff"],
  children,
}: GlowingEmojiProps) => {
  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      {/* Soft Glow Effect */}
      <motion.div
        className="absolute"
        style={{
          width: size + 20,
          height: size + 20,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${gradientColors[0]} 0%, ${gradientColors[1]} 50%, ${gradientColors[2]} 100%)`,
          filter: `blur(${thickness}px)`,
          opacity: 0.9,
        }}
        animate={{
          scale: [1, 1.05, 1], // for breathing effect
          opacity: [0.4, 0.5, 0.4], // for stuble effect
        }}
        transition={{
          duration: duration,
          repeat: Infinity,
          ease: "easeInOut", //Create Animation smooth
        }}
      />

      {/* Emoji Avatar */}
      <div className="relative flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};
