"use client";

import { projects } from "@/lib/data";
import ProjectCard from "./ProjectCard";
import ScrollReveal from "./ScrollReveal";

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-content section-padding">
        <ScrollReveal>
          <span className="section-heading">Featured Creations</span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mt-4 max-w-2xl">
            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Production Projects I&apos;ve Built
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600 sm:text-lg">
              Independently engineered and deployed full-stack MERN & AI applications with clean code, responsive interfaces, and live production URLs.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-12 flex flex-col gap-10">
          {projects.map((project, index) => (
            <ScrollReveal key={project.id} delay={0.1 + index * 0.12}>
              <ProjectCard project={project} reverse={index % 2 === 1} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
