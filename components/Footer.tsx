"use client";

import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-slate-200 bg-white">
      {/* Radiant positive line */}
      <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-indigo-500 via-sky-500 to-emerald-500 opacity-70" />

      <div className="mx-auto flex max-w-content flex-col items-center gap-6 section-padding py-10 text-center sm:flex-row sm:justify-between sm:text-left">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-slate-500">
          <div>
            © {new Date().getFullYear()} <span className="font-bold text-slate-800">{personalInfo.name}</span>
          </div>
          <span className="hidden sm:inline text-slate-300">|</span>
          <div className="text-xs text-slate-500">
            Full-Stack Developer (MERN) · AKTU Lucknow
          </div>
        </div>

        <div className="flex items-center gap-3">
          {[
            { href: personalInfo.github, Icon: Github, label: "GitHub" },
            { href: personalInfo.linkedin, Icon: Linkedin, label: "LinkedIn" },
            { href: `mailto:${personalInfo.email}`, Icon: Mail, label: "Email" },
          ].map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target={label === "Email" ? undefined : "_blank"}
              rel={label === "Email" ? undefined : "noopener noreferrer"}
              aria-label={`${label} profile`}
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-600 transition-all duration-200 hover:border-indigo-300 hover:text-indigo-600 hover:bg-white hover:shadow-xs"
            >
              <Icon size={16} />
            </a>
          ))}

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-600 transition-all duration-200 hover:border-indigo-300 hover:text-indigo-600 hover:bg-white hover:shadow-xs ml-2"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
