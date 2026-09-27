"use client";

import { Mail, Linkedin, Github, Phone, MapPin, ArrowUpRight, Send } from "lucide-react";
import { personalInfo } from "@/lib/data";
import ScrollReveal from "./ScrollReveal";

const contactLinks = [
  {
    label: "Email Address",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    icon: Mail,
    color: "from-indigo-500 to-sky-500",
    badge: "Send Email",
  },
  {
    label: "Phone / WhatsApp",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone.replace(/\s+/g, "")}`,
    icon: Phone,
    color: "from-emerald-500 to-teal-500",
    badge: "Call Directly",
  },
  {
    label: "LinkedIn Profile",
    value: "linkedin.com/in/anshuman-kushwaha",
    href: personalInfo.linkedin,
    icon: Linkedin,
    color: "from-sky-500 to-blue-600",
    badge: "Connect on LinkedIn",
  },
  {
    label: "GitHub Repositories",
    value: "github.com/anshumankushwaha-2005",
    href: personalInfo.github,
    icon: Github,
    color: "from-slate-700 to-slate-900",
    badge: "View Repositories",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-20 sm:py-28 bg-slate-50/50">
      <div className="mx-auto max-w-content section-padding">
        <ScrollReveal>
          <span className="section-heading">Get in Touch</span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="mt-4 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
                Let&apos;s Connect & Build Together
              </h2>
              <p className="mt-2 text-base text-slate-600 sm:text-lg max-w-xl">
                I&apos;m actively seeking internship and junior engineering opportunities.
                Feel free to reach out via email, phone or LinkedIn!
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {contactLinks.map(({ label, value, href, icon: Icon, color, badge }, i) => (
            <ScrollReveal key={label} delay={0.1 + i * 0.08}>
              <a
                href={href}
                target={label.includes("Email") || label.includes("Phone") ? undefined : "_blank"}
                rel={label.includes("Email") || label.includes("Phone") ? undefined : "noopener noreferrer"}
                className="glass-card group flex flex-col items-center gap-4 p-7 text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card-hover bg-white h-full"
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${color} text-white shadow-md transition-transform duration-300 group-hover:scale-110`}
                >
                  <Icon size={22} />
                </div>

                <div>
                  <h3 className="text-sm font-bold text-slate-900">{label}</h3>
                  <p className="mt-1 font-mono text-xs text-slate-500 break-all">{value}</p>
                </div>

                <div className="mt-auto flex items-center gap-1 text-xs font-semibold text-indigo-600 opacity-80 group-hover:opacity-100 transition-opacity">
                  <span>{badge}</span>
                  <ArrowUpRight size={13} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
