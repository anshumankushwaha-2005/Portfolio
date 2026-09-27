"use client";

import Image from "next/image";
import { ExternalLink, Github, Code2, Sparkles, Check } from "lucide-react";
import type { Project } from "@/lib/data";

export default function ProjectCard({
  project,
  reverse = false,
}: {
  project: Project;
  reverse?: boolean;
}) {
  return (
    <article
      className="glass-card group overflow-hidden bg-white hover:border-indigo-300 transition-all duration-300 hover:shadow-card-hover"
    >
      <div
        className={`grid grid-cols-1 lg:grid-cols-12 gap-0 ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* Preview Image */}
        <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto lg:col-span-6 bg-slate-100 min-h-[280px]">
          {project.imageSrc ? (
            <Image
              src={project.imageSrc}
              alt={`${project.name} preview screenshot`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-slate-100">
              <div className="flex flex-col items-center gap-2 text-center text-slate-400">
                <Code2 size={36} strokeWidth={1.5} />
                <span className="font-mono text-xs">Preview coming soon</span>
              </div>
            </div>
          )}

          {/* Tag Pill on Image */}
          <div className="absolute top-4 left-4 z-10">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-indigo-700 shadow-sm backdrop-blur-md">
              <Sparkles size={12} />
              MERN + AI
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center p-7 sm:p-9 lg:col-span-6">
          <div className="flex items-center gap-3">
            <h3 className="text-2xl font-bold tracking-tight text-slate-900">
              {project.name}
            </h3>
          </div>

          <p className="mt-1 font-mono text-xs font-semibold text-indigo-600">
            {project.tagline}
          </p>

          <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
            {project.description}
          </p>

          {/* Tech stack */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 font-mono text-xs font-medium text-slate-700 transition-colors hover:bg-indigo-50 hover:text-indigo-700 hover:border-indigo-200"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Key Features from Resume */}
          <ul className="mt-5 space-y-2">
            {project.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600">
                <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <Check size={11} strokeWidth={3} />
                </div>
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          {/* Action Links */}
          <div className="mt-7 flex flex-wrap items-center gap-3 pt-4 border-t border-slate-100">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gradient !py-2.5 !px-5 !text-xs !shadow-sm hover:!shadow-md"
              >
                <ExternalLink size={14} />
                Live Demo
              </a>
            )}

            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost !py-2.5 !px-5 !text-xs"
              >
                <Github size={14} />
                GitHub Repository
              </a>
            ) : (
              <span className="inline-flex items-center gap-1.5 rounded-xl border border-dashed border-slate-300 px-4 py-2.5 text-xs font-medium text-slate-400">
                <Github size={14} />
                Repo on GitHub
              </span>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
