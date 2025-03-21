"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    title: string;
    description: string;
    link: string;
    logoUrl: string;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Left scroll handler
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  // Right scroll handler
  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="relative">
      {/* Left Navigation Button */}
      <button
        onClick={scrollLeft}
        className="absolute left-[-90px] top-1/2 -translate-y-1/2 z-10 bg-red-600 text-white p-3 rounded-full shadow-lg hover:bg-lime-500 active:scale-95 transition-all duration-300"
      >
        <ChevronLeft size={50} />
      </button>

      {/* Scroll Container */}
      <div
        ref={scrollRef}
        className={cn(
          "flex gap-6 overflow-x-auto py-10 scrollbar-hide scroll-smooth",
          className
        )}
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {items.map((item, idx) => (
          <Link
            href={item.link}
            key={item.link}
            className="relative group block p-2 w-80 flex-shrink-0"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { duration: 0.15 } }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}

            <Card logoUrl={item.logoUrl}>
              <CardTitle>{item.title}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
            </Card>
          </Link>
        ))}
      </div>

      {/* Right Navigation Button */}
      <button
        onClick={scrollRight}
        className="absolute right-[-90px] top-1/2 -translate-y-1/2 z-10 bg-red-600 text-white p-3 rounded-full shadow-lg hover:bg-lime-500 active:scale-95 transition-all duration-300"
      >
        <ChevronRight size={50} />
      </button>
    </div>
  );
};

export const Card = ({
  className,
  logoUrl,
  children,
}: {
  className?: string;
  logoUrl?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-60 w-80 p-4 overflow-hidden bg-gray-800 border border-transparent dark:border-white/[0.2] group-hover:border-slate-100 relative z-20",
        className
      )}
    >
      {logoUrl && (
        <div className="flex justify-center items-center w-full">
          <div className="flex justify-center items-center w-16 h-16 rounded-full bg-slate-700 mb-4">
            <Image
              src={logoUrl}
              alt="Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
        </div>
      )}

      <div className="relative z-50 p-4">{children}</div>
    </div>
  );
};

export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-zinc-100 font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-4 text-zinc-400 tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
