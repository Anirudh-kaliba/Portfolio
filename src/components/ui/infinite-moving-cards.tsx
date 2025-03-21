import React, { useEffect, useState } from "react";

type HackathonItem = {
  title: string;
  dates: string;
  location: string;
  description: string;
  image: string;
  mlh?: string;
  links?: { title: string; href: string }[];
};

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: HackathonItem[]; // ✅ Correct type
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      containerRef.current.style.setProperty(
        "--animation-duration",
        speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s"
      );
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={idx}
            className="w-[350px] max-w-full relative rounded-2xl border border-b-0 shrink-0 border-slate-700 px-8 py-6 md:w-[450px]"
            style={{
              background:
                "linear-gradient(180deg, var(--slate-800), var(--slate-900))",
            }}
          >
            <div>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-40 object-cover rounded-t-md"
              />
            </div>
            <blockquote>
              <span className="relative z-20 text-lg font-bold text-gray-100">
                {item.title}
              </span>
              <div className="text-gray-400 mt-2">
                {item.dates} • {item.location}
              </div>
              <p className="mt-2 text-sm leading-[1.6] text-gray-300">
                {item.description}
              </p>
              {item.mlh && (
                <img
                  src={item.mlh}
                  alt="MLH Badge"
                  className="mt-4 w-12 h-12"
                />
              )}
              {item.links?.length > 0 && (
                <div className="mt-4 flex space-x-3">
                  {item.links.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:text-blue-700 transition"
                    >
                      {link.title}
                    </a>
                  ))}
                </div>
              )}
            </blockquote>
          </li>
        ))}
      </ul>
    </div>
  );
};
