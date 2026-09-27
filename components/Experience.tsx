"use client";

import { experiences, educationList } from "@/lib/data";
import ScrollReveal from "./ScrollReveal";
import { Briefcase, Calendar, CheckCircle2, GraduationCap, MapPin } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="relative py-20 sm:py-28 scroll-mt-24">
      <div className="mx-auto max-w-content section-padding">
        <ScrollReveal>
          <span className="section-heading">Career Journey</span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mt-4 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Experience & Education
              </h2>
              <p className="mt-2 text-base text-slate-600 sm:text-lg max-w-xl">
                Hands-on internship experience in full-stack web development and strong academic foundation.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-8">
          {/* Work Experience Timeline */}
          <div className="space-y-6">
            <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900 pb-2 border-b border-slate-200">
              <Briefcase size={20} className="text-indigo-600" />
              Work & Internship Experience
            </h3>

            {experiences.map((exp, index) => (
              <ScrollReveal key={exp.role + exp.company} delay={0.1 + index * 0.1}>
                <div className="glass-card group relative p-6 sm:p-7 hover:border-indigo-300 transition-all">
                  <div className="flex flex-wrap items-start justify-between gap-2">
                    <div>
                      <span className="inline-block rounded-md bg-indigo-50 border border-indigo-100 px-2.5 py-0.5 text-xs font-semibold text-indigo-700 font-mono mb-2">
                        {exp.type}
                      </span>
                      <h4 className="text-xl font-bold text-slate-900">{exp.role}</h4>
                      <p className="text-sm font-semibold text-slate-700">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                      <Calendar size={13} className="text-indigo-500" />
                      {exp.period}
                    </div>
                  </div>

                  {/* Bullet points */}
                  <ul className="mt-5 space-y-2.5 text-sm text-slate-600">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <CheckCircle2 size={16} className="text-emerald-500 mt-0.5 shrink-0" />
                        <span className="leading-relaxed">{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack badges */}
                  {exp.tech && (
                    <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap gap-1.5">
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-mono font-medium text-slate-700"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Education List */}
          <div className="space-y-6">
            <h3 className="flex items-center gap-2 text-lg font-bold text-slate-900 pb-2 border-b border-slate-200">
              <GraduationCap size={20} className="text-emerald-600" />
              Education & Degrees
            </h3>

            {educationList.map((edu, index) => (
              <ScrollReveal key={edu.degree} delay={0.15 + index * 0.1}>
                <div className="glass-card p-6 border-l-4 border-l-emerald-500">
                  <div className="flex justify-between items-start gap-2">
                    <div>
                      <h4 className="text-base font-bold text-slate-900">{edu.degree}</h4>
                      <p className="text-sm font-medium text-emerald-700 mt-0.5">{edu.institution}</p>
                    </div>
                    <span className="shrink-0 rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700 font-mono">
                      {edu.period}
                    </span>
                  </div>
                  <p className="mt-3 text-xs leading-relaxed text-slate-600">
                    {edu.details}
                  </p>
                </div>
              </ScrollReveal>
            ))}

            {/* Certifications Card */}
            <ScrollReveal delay={0.35}>
              <div className="rounded-2xl border border-indigo-100 bg-gradient-to-br from-indigo-50/70 via-sky-50/50 to-emerald-50/50 p-6 shadow-sm">
                <h4 className="text-sm font-bold text-indigo-900 uppercase tracking-wider mb-2">
                  Certifications & Recognitions
                </h4>
                <ul className="space-y-2 text-xs text-slate-700">
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-indigo-600 shrink-0" />
                    <span>Python Full Stack Internship & Trainee Certificate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-600 shrink-0" />
                    <span>Independent Ship & Deployment of 4+ Full-Stack Web Applications</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
