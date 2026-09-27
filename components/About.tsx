"use client";

import { personalInfo } from "@/lib/data";
import ScrollReveal from "./ScrollReveal";
import { GraduationCap, MapPin, Briefcase, Code, Award, Sparkles } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative py-20 sm:py-28 bg-slate-50/50">
      <div className="mx-auto max-w-content section-padding">
        <ScrollReveal>
          <span className="section-heading">About Me</span>
        </ScrollReveal>

        <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16 items-start">
          {/* Left: Quick Profile & Education Highlights */}
          <ScrollReveal delay={0.1}>
            <div className="glass-card p-7 sm:p-8 bg-white/95">
              <div className="flex items-center gap-3 pb-6 border-b border-slate-100">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 font-bold font-display text-lg">
                  AK
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-lg">{personalInfo.name}</h3>
                  <p className="text-xs font-mono text-indigo-600 font-medium">B.Tech CSE (2023–Present)</p>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {[
                  { icon: GraduationCap, label: "University", value: "AKTU University, Lucknow" },
                  { icon: Code, label: "Specialization", value: "MERN Stack & AI Apps" },
                  { icon: Briefcase, label: "Experience", value: "MERN Intern @ SRDT Pvt. Ltd." },
                  { icon: Award, label: "Track Record", value: "4+ Shipped Production Apps" },
                  { icon: MapPin, label: "Location", value: "Lucknow, Uttar Pradesh, India" },
                  { icon: Sparkles, label: "Languages", value: "Hindi (Native), English" },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="flex items-start gap-3 rounded-xl p-2.5 transition-colors hover:bg-slate-50"
                    >
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-indigo-50/80 text-indigo-600 mt-0.5">
                        <Icon size={16} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                          {item.label}
                        </div>
                        <div className="text-sm font-semibold text-slate-800">
                          {item.value}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Education Badges */}
              <div className="mt-6 pt-5 border-t border-slate-100 bg-slate-50/70 rounded-xl p-4">
                <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Academic Milestones
                </div>
                <div className="space-y-1.5 text-xs text-slate-600">
                  <div className="flex justify-between">
                    <span>Class XII (Senior Secondary):</span>
                    <span className="font-semibold text-indigo-600">70.8%</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Class X (Secondary):</span>
                    <span className="font-semibold text-emerald-600">84.5%</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Narrative Story */}
          <ScrollReveal delay={0.2}>
            <div className="space-y-6">
              <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight sm:text-4xl">
                Building scalable web products with{" "}
                <span className="gradient-text">modern engineering</span>
              </h2>

              <div className="space-y-5 text-base leading-relaxed text-slate-600 sm:text-lg">
                {personalInfo.about.map((paragraph, i) => (
                  <p key={paragraph.slice(0, 24)} className="leading-[1.75]">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Key Highlights Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-4">
                <div className="rounded-xl border border-indigo-100 bg-indigo-50/60 p-4 text-center">
                  <div className="text-2xl font-extrabold text-indigo-600">4+</div>
                  <div className="text-xs font-medium text-slate-600 mt-1">Production Apps</div>
                </div>
                <div className="rounded-xl border border-emerald-100 bg-emerald-50/60 p-4 text-center">
                  <div className="text-2xl font-extrabold text-emerald-600">2</div>
                  <div className="text-xs font-medium text-slate-600 mt-1">Internships Completed</div>
                </div>
                <div className="rounded-xl border border-sky-100 bg-sky-50/60 p-4 text-center col-span-2 sm:col-span-1">
                  <div className="text-2xl font-extrabold text-sky-600">100%</div>
                  <div className="text-xs font-medium text-slate-600 mt-1">Commitment to Growth</div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
