# Anshuman Kushwaha — Portfolio

A clean, recruiter-friendly personal portfolio built with Next.js (App Router),
TypeScript, Tailwind CSS, Framer Motion, and lucide-react.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Before you deploy — 3 things to finish

All of these are marked with `TODO` comments in `lib/data.ts`.

1. **Resume** — drop your PDF at `public/resume/Anshuman-Kushwaha-Resume.pdf`
   (see `public/resume/README.txt`). Both "Download Resume" buttons already
   point to that path.
2. **Contact info** — open `lib/data.ts` and replace the placeholder `email`
   and `linkedin` values with your real ones.
3. **Nutri AI GitHub link** — add the repository URL to the `githubUrl` field
   of the `nutri-ai` project in `lib/data.ts`. Until you do, the site shows
   an honest "Repo coming soon" state instead of a broken or fake link.

Optional: add real project screenshots at `public/projects/` and set each
project's `imageSrc` in `lib/data.ts` (see `public/projects/README.txt`).
Without one, a plain placeholder is shown — never a stock photo.

## Editing content

Everything you're likely to change lives in **`lib/data.ts`**:
personal info, nav links, skill categories, and the project list. You
generally won't need to touch any component file just to update text.

## Project structure

```
app/
  layout.tsx      Fonts, global <head> metadata (SEO, Open Graph)
  page.tsx         Assembles all sections in order
  globals.css      Tailwind + base styles
components/
  Navbar.tsx       Sticky nav with mobile menu
  Hero.tsx         Intro + CTAs + social links
  About.tsx
  Skills.tsx       Skills grouped by category (no fake percentages)
  Projects.tsx     Renders ProjectCard for each project
  ProjectCard.tsx  Single project block (preview, tech, features, links)
  WhyHire.tsx      "What I Bring" section
  ResumeCTA.tsx
  Contact.tsx
  Footer.tsx
lib/
  data.ts          All editable content
```

## Deploying

This is a standard Next.js app — the easiest option is
[Vercel](https://vercel.com): push this repo to GitHub, import it in Vercel,
and it deploys with zero configuration.

## Notes

- No fabricated stats, testimonials, companies, or experience are included
  anywhere in this codebase — only what you provided.
- Motion is deliberately minimal: one entrance animation on the hero, and
  small hover/transition states elsewhere. `prefers-reduced-motion` is
  respected globally.
