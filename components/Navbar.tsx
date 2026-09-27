"use client";

import { useState, useEffect } from "react";
import { Menu, X, FileDown, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, personalInfo } from "@/lib/data";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      setIsOpen(false);
      const targetId = href.replace("#", "");
      if (targetId === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const elem = document.getElementById(targetId);
        if (elem) {
          elem.scrollIntoView({ behavior: "smooth" });
        }
      }
      window.history.pushState(null, "", href);
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200/80 bg-white/90 backdrop-blur-xl shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-content items-center justify-between section-padding py-4">
        <a
          href="#home"
          className="flex items-center gap-2 text-lg font-bold tracking-tight text-slate-900 transition-colors"
          onClick={(e) => handleNavClick(e, "#home")}
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-600 via-sky-600 to-emerald-500 text-white shadow-sm font-display font-black text-sm">
            AK
          </div>
          <div>
            <span className="gradient-text font-display">{personalInfo.name.split(" ")[0]}</span>
            <span className="text-slate-700 ml-1 font-normal hidden sm:inline">
              {personalInfo.name.split(" ").slice(1).join(" ")}
            </span>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="relative px-3.5 py-2 text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-indigo-600 group cursor-pointer"
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 h-0.5 w-0 -translate-x-1/2 bg-gradient-to-r from-indigo-600 to-emerald-500 transition-all duration-300 group-hover:w-3/4 rounded-full" />
            </a>
          ))}
          <a
            href={personalInfo.resumeUrl}
            download="Anshuman-Kushwaha-Resume.pdf"
            className="btn-gradient ml-3 !px-4 !py-2 !text-xs !shadow-sm hover:!shadow-md"
          >
            <FileDown size={14} strokeWidth={2.2} />
            Resume
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-slate-700 transition-colors hover:bg-slate-100 md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-slate-200 bg-white/98 backdrop-blur-xl md:hidden shadow-lg"
          >
            <div className="flex flex-col gap-1 section-padding py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-4 py-2.5 text-base font-medium text-slate-700 transition-all hover:bg-indigo-50 hover:text-indigo-600 cursor-pointer"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href={personalInfo.resumeUrl}
                download="Anshuman-Kushwaha-Resume.pdf"
                className="btn-gradient mt-3 justify-center"
                onClick={() => setIsOpen(false)}
              >
                <FileDown size={16} strokeWidth={2} />
                Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
