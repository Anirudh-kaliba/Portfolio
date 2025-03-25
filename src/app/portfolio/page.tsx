"use client";
import React, { useRef } from "react";
import { ProjectCards } from "@/components/ui/cards";
import { Particles } from "@/components/magicui/particles";
import Contactcard from "@/components/ui/contactcard";
import { DATA } from "@/data/resume";
import { ABOUT } from "@/data/resume";
import Navbar from "@/components/navbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import TypingAnimation from "@/components/magicui/typing-animation";
import { HackathonCard } from "@/components/hackathon-card";
import { Orbitron } from "next/font/google";
import WorkExperience from "@/components/ui/workexperience";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { Certifications } from "@/components/ui/card-spotlight";
import SkillsSection from "@/components/magicui/skills";
import { ArrowUpIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import BlurFade from "@/components/magicui/blur-fade";
const BLUR_FADE_DELAY = 0.04;

const orbitron = Orbitron({ subsets: ["latin"], weight: ["400", "700"] });

const Pages = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  const scrollToHero = () => {
    heroRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen px-4 sm:px-8 md:px-16 py-8 sm:py-12 md:py-16 space-y-12 sm:space-y-16 md:space-y-24 bg-white dark:bg-black text-black dark:text-white overflow-hidden">
      <Navbar />
      <Particles
        className="absolute inset-0 z-0"
        quantity={400}
        ease={300}
        color="#ff00ff"
        refresh
      />

      {/* Hero Section */}
      <div
        ref={heroRef}
        className="relative flex flex-col sm:flex-row items-center justify-between w-full max-w-6xl mb-8 sm:mb-12 md:mb-16"
      >
        <div className="flex-1 text-center sm:text-left">
          <h1
            className={`${orbitron.className} text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text mb-4 sm:mb-6 leading-tight`}
          >
            <TypingAnimation duration={80} delay={400} lineDelay={1000}>
              {["Welcome to Portfolio.", `I am ${DATA.name} 👋`]}
            </TypingAnimation>
          </h1>
        </div>
        <div className="relative w-32 h-32 sm:w-40 sm:h-40 mt-6 sm:mt-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 animate-pulse rounded-xl shadow-2xl blur-xl" />
          <Avatar className="w-32 h-32 sm:w-40 sm:h-40 border-4 border-gray-300 dark:border-gray-700 rounded-xl shadow-lg transition-transform transform hover:scale-110 hover:shadow-purple-500/50 duration-300">
            <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
            <AvatarFallback className="text-4xl sm:text-6xl">
              {DATA.initials}
            </AvatarFallback>
          </Avatar>
        </div>
      </div>

      {/* About Section */}
      <div className="w-full max-w-5xl text-center mb-8 sm:mb-12 md:mb-16">
        <p className="text-xl sm:text-2xl dark:text-gray-300 leading-relaxed font-medium">
          Passionate Developer | Innovator | Tech Enthusiast
        </p>
        <p className="text-lg sm:text-xl text-justify text-black dark:text-gray-400 mt-4 sm:mt-6 leading-relaxed">
          {ABOUT.description}
        </p>
      </div>

      {/* Education Section */}
      <h1
        className={`${orbitron.className} text-3xl sm:text-4xl font-bold text-center bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text mb-8 sm:mb-12`}
      >
        Education
      </h1>
      <div className="w-full max-w-5xl mb-8 sm:mb-12 md:mb-16">
        <HoverEffect
          items={DATA.education.map((edu) => ({
            title: edu.school,
            description: `${edu.degree} (${edu.start} - ${edu.end})`,
            link: edu.href,
            logoUrl: edu.logoUrl,
          }))}
        />
      </div>

      {/* Skills Section */}
      <h1
        className={`${orbitron.className} text-3xl sm:text-4xl font-bold text-center bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text mb-8 sm:mb-12`}
      >
        Skills
      </h1>
      <div className="w-full max-w-5xl mb-8 sm:mb-12 md:mb-16">
        <SkillsSection />
      </div>

      {/* Projects Section */}
      <h1
        className={`${orbitron.className} text-3xl sm:text-4xl font-bold text-center bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text mb-8 sm:mb-12`}
      >
        Projects
      </h1>
      <div className="w-full max-w-5xl mb-8 sm:mb-12 md:mb-16">
        <ProjectCards />
      </div>

      {/* Work Experience Section */}
      <h1
        className={`${orbitron.className} text-3xl sm:text-4xl font-bold text-center bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text mb-8 sm:mb-12`}
      >
        Work Experience
      </h1>
      <div className="w-full max-w-5xl mb-8 sm:mb-12 md:mb-16">
        <WorkExperience />
      </div>

      {/* Hackathons Section */}
      <h1
        className={`${orbitron.className} text-3xl sm:text-4xl font-bold text-center bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text mb-8 sm:mb-12`}
      >
        Hackathons
      </h1>
      <div className="w-full max-w-5xl mb-8 sm:mb-12 md:mb-16">
        {DATA.hackathons.map((hackathon) => (
          <HackathonCard key={hackathon.title} {...hackathon} />
        ))}
      </div>

      <h1
        className={`${orbitron.className} text-3xl sm:text-4xl font-bold text-center bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text mb-8 sm:mb-12`}
      >
        Certifications
      </h1>
      <div className="w-full max-w-5xl mb-8 sm:mb-12 md:mb-16">
        <Certifications />
      </div>

      {/* Contact Section */}
      <h1
        className={`${orbitron.className} text-3xl sm:text-4xl font-bold text-center bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text mb-8 sm:mb-12`}
      >
        Contact Me
      </h1>
      <div className="w-full max-w-5xl mb-8 sm:mb-12 md:mb-16">
        <BlurFade delay={BLUR_FADE_DELAY * 16}>
          <div className="space-y-3">
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Want to chat? Just shoot me a dm{" "}
              <Link
                href={DATA.contact.social.X.url}
                className="text-blue-500 hover:underline"
              >
                with a direct question on twitter
              </Link>{" "}
              and I&apos;ll respond whenever I can. I will ignore all
              soliciting.
            </p>
          </div>
        </BlurFade>
        <Contactcard />
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToHero}
        className="fixed bottom-8 right-8 bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-full shadow-lg z-50"
      >
        <ArrowUpIcon className="w-6 h-6" />
      </button>
    </div>
  );
};

export default Pages;
