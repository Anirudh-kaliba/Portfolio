"use client";
import React from "react";
import { ProjectCards } from "@/components/ui/cards";
import { Particles } from "@/components/magicui/particles";
import Contactcard from "@/components/ui/contactcard";
import { DATA } from "@/data/resume";
import { ABOUT } from "@/data/resume";
import Navbar from "@/components/navbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import TypingAnimation from "@/components/magicui/typing-animation";
import CircularSkills from "@/components/magicui/circularskills";
import { HackathonCard } from "@/components/hackathon-card";
import { Orbitron } from "next/font/google";
import WorkExperience from "@/components/ui/workexperience";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { Certifications } from "@/components/ui/card-spotlight";

const orbitron = Orbitron({ subsets: ["latin"], weight: ["400", "700"] });

const Pages = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen px-16 py-16 space-y-24 bg-white dark:bg-black text-black dark:text-white overflow-hidden">
      <Navbar />
      <Particles
        className="absolute inset-0 z-0"
        quantity={400}
        ease={300}
        color="#ff00ff"
        refresh
      />

      {/* Hero Section */}
      <div className="relative flex items-center justify-between w-full max-w-6xl mb-16">
        {/* Text Section */}
        <div className="flex-1">
          <h1
            className={`${orbitron.className} text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text mb-6 leading-tight`}
          >
            <TypingAnimation duration={80} delay={400} lineDelay={1000}>
              {["Welcome to Portfolio.", `I am ${DATA.name} 👋`]}
            </TypingAnimation>
          </h1>
        </div>

        {/* Avatar Section with Square Glowing Effect */}
        <div className="relative w-40 h-40">
          <div
            className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 
            animate-pulse rounded-xl shadow-2xl blur-xl"
          />
          <Avatar
            className="w-40 h-40 border-4 border-gray-300 dark:border-gray-700 rounded-xl shadow-lg 
            transition-transform transform hover:scale-110 hover:shadow-purple-500/50 duration-300"
          >
            <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
            <AvatarFallback className="text-6xl">
              {DATA.initials}
            </AvatarFallback>
          </Avatar>
        </div>
      </div>

      {/* About Section */}
      <div className="w-full max-w-5xl text-center mb-16">
        <p className="text-2xl dark:text-gray-300 leading-relaxed font-medium">
          Passionate Developer | Innovator | Tech Enthusiast
        </p>
        <p className="text-xl text-justify text-black dark:text-gray-400 mt-6 leading-relaxed">
          {ABOUT.description}
        </p>
      </div>

      {/* Education Section */}
      <h1
        className={`${orbitron.className} text-4xl font-bold text-center bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text mb-12`}
      >
        Education
      </h1>
      <div className="w-full max-w-5xl mb-16">
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
        className={`${orbitron.className} text-4xl font-bold text-center bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text mb-12`}
      >
        Skills
      </h1>
      <div className="w-full max-w-5xl mb-16">
        <CircularSkills />
      </div>

      {/* Projects Section */}
      <h1
        className={`${orbitron.className} text-4xl font-bold text-center bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text mb-12`}
      >
        Projects
      </h1>
      <div className="w-full max-w-5xl mb-16">
        <ProjectCards />
      </div>

      {/* Work Experience Section */}
      <h1
        className={`${orbitron.className} text-4xl font-bold text-center bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text mb-12`}
      >
        Work Experience
      </h1>
      <div className="w-full max-w-5xl mb-16">
        <WorkExperience />
      </div>

      {/* Hackathons Section */}
      <h1
        className={`${orbitron.className} text-4xl font-bold text-center bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text mb-12`}
      >
        Hackathons
      </h1>
      <div className="w-full max-w-5xl mb-16">
        {DATA.hackathons.map((hackathon) => (
          <HackathonCard key={hackathon.title} {...hackathon} />
        ))}
      </div>

      <h1
        className={`${orbitron.className} text-4xl font-bold text-center bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text mb-12`}
      >
        Certifications
      </h1>
      <div className="w-full max-w-5xl mb-16">
        <Certifications />
      </div>

      {/* Contact Section */}
      <h1
        className={`${orbitron.className} text-4xl font-bold text-center bg-gradient-to-r from-indigo-400 to-purple-500 text-transparent bg-clip-text mb-12`}
      >
        Contact Me
      </h1>
      <div className="w-full max-w-5xl mb-16">
        <Contactcard />
      </div>
    </div>
  );
};

export default Pages;
