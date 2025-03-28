"use client";

import { DATA } from "@/data/resume";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import React, { MouseEvent as ReactMouseEvent, useState } from "react";
import Image from "next/image";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { cn } from "@/lib/utils";

const CardSpotlight = ({
  children,
  radius = 350,
  color = "#262626",
  className,
  ...props
}: {
  radius?: number;
  color?: string;
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLDivElement>) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({
    currentTarget,
    clientX,
    clientY,
  }: ReactMouseEvent<HTMLDivElement>) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => setIsHovering(true);
  const handleMouseLeave = () => setIsHovering(false);

  return (
    <div
      className={cn(
        "group/spotlight p-6 rounded-2xl relative border border-neutral-800 bg-black dark:border-neutral-800",
        className
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <motion.div
        className="pointer-events-none absolute z-0 -inset-px rounded-2xl opacity-0 transition duration-300 group-hover/spotlight:opacity-100"
        style={{
          backgroundColor: color,
          maskImage: useMotionTemplate`
            radial-gradient(
              ${radius}px circle at ${mouseX}px ${mouseY}px,
              white,
              transparent 80%
            )
          `,
        }}
      >
        {isHovering && (
          <CanvasRevealEffect
            animationSpeed={5}
            containerClassName="bg-transparent absolute inset-0 pointer-events-none"
            colors={[
              [59, 130, 246],
              [139, 92, 246],
            ]}
            dotSize={3}
          />
        )}
      </motion.div>

      {children}
    </div>
  );
};

export const Certifications = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-10">
      {DATA.certifications.map((cert, index) => (
        <CardSpotlight key={index}>
          <div className="relative z-10 p-4">
            <div className="flex justify-center mb-4">
              <Image
                src={cert.imageUrl}
                alt={cert.title}
                width={300}
                height={200}
                className="rounded-lg"
              />
            </div>
            <h3 className="text-lg font-bold text-white">{cert.title}</h3>
            <p className="text-sm text-zinc-400 mt-1">
              {cert.issuer} • {cert.date}
            </p>
            <p className="text-sm text-zinc-300 mt-2">{cert.description}</p>
          </div>
        </CardSpotlight>
      ))}
    </div>
  );
};
