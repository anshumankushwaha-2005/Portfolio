"use client";

import { FileDown, Sparkles, Send, CheckCircle } from "lucide-react";
import { personalInfo } from "@/lib/data";
import ScrollReveal from "./ScrollReveal";

export default function ResumeCTA() {
  return (
    <section className="relative py-20 sm:py-28 overflow-hidden">
      {/* Radiant positive background */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-indigo-50/80 via-sky-50/50 to-emerald-50/80"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-content section-padding">
        <ScrollReveal>
          <div className="glass-card overflow-hidden p-8 sm:p-12 text-center bg-white/95 border-indigo-100 shadow-lg">
            {/* Top positive gradient accent line */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500" />

            <div className="flex h-12 w-12 mx-auto items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 mb-5 border border-indigo-100 shadow-xs">
              <Sparkles size={22} />
            </div>

            <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl text-slate-900">
              Ready to create impact as a
              <br />
              <span className="gradient-text">Software Development Intern</span>
            </h2>

            <p className="mt-4 mx-auto max-w-xl text-base leading-relaxed text-slate-600">
              I&apos;m actively seeking internship and entry-level opportunities in
              MERN Stack and Full-Stack Engineering where I can contribute to high-growth products.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href={personalInfo.resumeUrl}
                download="Anshuman-Kushwaha-Resume.pdf"
                className="btn-gradient !py-3.5 !px-7"
              >
                <FileDown size={16} strokeWidth={2.2} />
                Download Complete Resume (PDF)
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  window.history.pushState(null, "", "#contact");
                }}
                className="btn-ghost !py-3.5 !px-6 cursor-pointer"
              >
                <Send size={15} />
                Get in Touch
              </a>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-slate-500">
              <span className="flex items-center gap-1">
                <CheckCircle size={14} className="text-emerald-500" /> Immediate Availability
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <CheckCircle size={14} className="text-emerald-500" /> Remote / Hybrid / On-site
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <CheckCircle size={14} className="text-emerald-500" /> Open to Relocation
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
