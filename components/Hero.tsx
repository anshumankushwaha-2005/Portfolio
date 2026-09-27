"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone, MapPin, Sparkles, FileDown, ArrowRight } from "lucide-react";
import { personalInfo } from "@/lib/data";
import ParticleField from "./ParticleField";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] items-center overflow-hidden pt-24 pb-16"
    >
      {/* Particle background */}
      <ParticleField />

      {/* Radiant positive background orbs */}
      <div
        className="pointer-events-none absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-gradient-to-tr from-indigo-300/30 via-sky-300/30 to-emerald-200/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/3 -right-20 h-80 w-80 rounded-full bg-gradient-to-bl from-emerald-200/25 to-teal-100/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-10 -left-20 h-80 w-80 rounded-full bg-gradient-to-tr from-sky-200/25 to-indigo-100/20 blur-3xl"
        aria-hidden="true"
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto w-full max-w-content section-padding"
      >
        {/* Status badge */}
        <motion.div variants={item} className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50/90 px-4 py-1.5 text-xs font-semibold text-emerald-800 shadow-sm backdrop-blur-sm">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-600" />
            </span>
            Seeking Software Dev / Full-Stack Internships
          </span>

          <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white/80 px-3.5 py-1 text-xs font-medium text-slate-600 shadow-xs backdrop-blur-sm">
            <MapPin size={13} className="text-indigo-600" />
            {personalInfo.location}
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={item}
          className="mt-6 max-w-4xl text-4xl font-extrabold leading-[1.12] tracking-tight sm:text-6xl lg:text-7xl text-slate-900"
        >
          <span>Hi, I&apos;m </span>
          <span className="gradient-text">{personalInfo.name}</span>
          <br />
          <span className="text-slate-700 font-semibold text-[0.6em] sm:text-[0.55em] block mt-2">
            {personalInfo.heroSubheading}
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={item}
          className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl"
        >
          Third-year Computer Science student specializing in the{" "}
          <strong className="font-semibold text-slate-900">MERN Stack</strong> with proven hands-on
          experience independently building and shipping 4+ production web applications and
          AI-integrated platforms.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-4">
          <a href="#projects" className="btn-gradient group">
            <Sparkles size={16} />
            Explore Projects
            <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
          </a>
          <a
            href={personalInfo.resumeUrl}
            download="Anshuman-Kushwaha-Resume.pdf"
            className="btn-ghost"
          >
            <FileDown size={16} className="text-indigo-600" />
            Download Resume (PDF)
          </a>
          <a href="#contact" className="inline-flex items-center gap-1.5 px-4 py-3 text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors">
            Get in touch &rarr;
          </a>
        </motion.div>

        {/* Quick Social & Contact Icons */}
        <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-3">
          {[
            { href: personalInfo.github, Icon: Github, label: "GitHub" },
            { href: personalInfo.linkedin, Icon: Linkedin, label: "LinkedIn" },
            { href: `mailto:${personalInfo.email}`, Icon: Mail, label: "Email" },
            { href: `tel:${personalInfo.phone.replace(/\s+/g, "")}`, Icon: Phone, label: "Phone" },
          ].map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target={label === "GitHub" || label === "LinkedIn" ? "_blank" : undefined}
              rel={label === "GitHub" || label === "LinkedIn" ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="group flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-sm transition-all duration-200 hover:border-indigo-300 hover:text-indigo-600 hover:shadow-md hover:-translate-y-0.5"
            >
              <Icon size={18} />
            </a>
          ))}
          <span className="text-xs font-mono text-slate-500 pl-2">
            Lucknow, India · {personalInfo.email}
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
