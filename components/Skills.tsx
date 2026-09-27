"use client";

import { skillCategories } from "@/lib/data";
import ScrollReveal from "./ScrollReveal";
import {
  Code2,
  Server,
  Cpu,
  Wrench,
  Brain,
  Globe,
  CheckCircle,
} from "lucide-react";

const categoryIcons: Record<string, { icon: React.ReactNode; color: string; bg: string }> = {
  "MERN & Frontend": {
    icon: <Code2 size={20} />,
    color: "text-indigo-600",
    bg: "bg-indigo-50 border-indigo-100",
  },
  "Backend & APIs": {
    icon: <Server size={20} />,
    color: "text-sky-600",
    bg: "bg-sky-50 border-sky-100",
  },
  "CS Fundamentals": {
    icon: <Cpu size={20} />,
    color: "text-emerald-600",
    bg: "bg-emerald-50 border-emerald-100",
  },
  "Developer Tools": {
    icon: <Wrench size={20} />,
    color: "text-amber-600",
    bg: "bg-amber-50 border-amber-100",
  },
  "Soft Skills": {
    icon: <Brain size={20} />,
    color: "text-violet-600",
    bg: "bg-violet-50 border-violet-100",
  },
  Languages: {
    icon: <Globe size={20} />,
    color: "text-teal-600",
    bg: "bg-teal-50 border-teal-100",
  },
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 sm:py-28 bg-slate-50/60">
      <div className="mx-auto max-w-content section-padding">
        <ScrollReveal>
          <span className="section-heading">Technical Arsenal</span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mt-4 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Skills & Core Competencies
              </h2>
              <p className="mt-2 text-base text-slate-600 sm:text-lg max-w-xl">
                Specialized in MERN stack, robust REST API engineering, and strong Computer Science fundamentals.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, i) => {
            const styling = categoryIcons[category.title] || {
              icon: <Code2 size={20} />,
              color: "text-indigo-600",
              bg: "bg-indigo-50 border-indigo-100",
            };

            return (
              <ScrollReveal key={category.title} delay={0.08 + i * 0.07}>
                <div className="glass-card group h-full p-6 sm:p-7 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 bg-white">
                  <div className="flex items-center gap-3.5 mb-5">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-xl border ${styling.bg} ${styling.color} transition-transform duration-300 group-hover:scale-110 shadow-xs`}
                    >
                      {styling.icon}
                    </div>
                    <h3 className="text-base font-bold text-slate-900">
                      {category.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span key={skill} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
