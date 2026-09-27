"use client";

import { CheckCircle2, Sparkles, Trophy } from "lucide-react";
import { valueProps, achievements } from "@/lib/data";
import ScrollReveal from "./ScrollReveal";

export default function WhyHire() {
  return (
    <section className="relative py-20 sm:py-28 bg-slate-50/60">
      <div className="mx-auto max-w-content section-padding">
        <ScrollReveal>
          <span className="section-heading">Why Me</span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mt-4 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                What I Bring to Your Team
              </h2>
              <p className="mt-2 text-base text-slate-600 sm:text-lg max-w-xl">
                A strong blend of hands-on production experience, engineering fundamentals, and positive work ethic.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {valueProps.map((point, i) => (
            <ScrollReveal key={point} delay={0.08 + i * 0.06}>
              <div className="glass-card group flex items-start gap-4 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover bg-white h-full">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-100 transition-colors group-hover:bg-emerald-100 group-hover:scale-105">
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-1">
                    {point.split(" ")[0]} {point.split(" ")[1]} {point.split(" ")[2]}
                  </h4>
                  <p className="text-xs leading-relaxed text-slate-600">{point}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
