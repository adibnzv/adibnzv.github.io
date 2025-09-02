import React from "react";
import { motion } from "framer-motion";
import { Github, GraduationCap, BookOpen, Link as LinkIcon } from "lucide-react";

const PROFILE = {
  name: "Adi Ben Zvi",
  role: "PhD Student · Virus Evolution & Bioinformatics",
  affiliation: "Adi Stern Lab · Tel Aviv University",
  photoUrl: "/your-photo.jpg",
  blurb:
    "I study within-host virus evolution and computational genomics. My research focuses on SARS‑CoV‑2 intra‑host diversity, methods for detecting suspicious mutations, and building reproducible pipelines for large-scale genomic analysis.",
  socials: {
    x: "https://x.com/BZman101",
    bluesky: "https://bsky.app/profile/adibz.bsky.social",
    github: "https://github.com/adibnzv",
    researchgate: "https://www.researchgate.net/profile/Adi-Ben-Zvi-2?ev=hdr_xprf",
    orcid: "https://orcid.org/0009-0003-5906-6821",
  },
};

const Section = ({ id, title, icon, children }) => (
  <section id={id} className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div className="flex items-center gap-3 mb-6">
      {icon}
      <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">{title}</h2>
    </div>
    <div className="space-y-6">{children}</div>
  </section>
);

const SocialLink = ({ label, href, Icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer noopener"
    className="inline-flex items-center gap-2 text-sm font-medium underline-offset-4 hover:underline focus:underline"
  >
    {Icon ? <Icon className="w-4 h-4" /> : <LinkIcon className="w-4 h-4" />}
    <span>{label}</span>
  </a>
);

export default function PersonalWebsite() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      <header className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col-reverse md:flex-row items-center md:items-end justify-between gap-8"
        >
          <div className="flex-1">
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight leading-tight">
              {PROFILE.name}
            </h1>
            <p className="mt-3 text-base sm:text-lg text-slate-700">{PROFILE.role}</p>
            <p className="text-sm sm:text-base text-slate-600">{PROFILE.affiliation}</p>

            <p className="mt-6 max-w-2xl text-slate-800 leading-relaxed">{PROFILE.blurb}</p>

            <div className="mt-6 flex flex-wrap gap-4">
              {PROFILE.socials.x && <SocialLink label="X" href={PROFILE.socials.x} />}
              {PROFILE.socials.bluesky && <SocialLink label="Bluesky" href={PROFILE.socials.bluesky} />}
              {PROFILE.socials.github && (
                <SocialLink label="GitHub" href={PROFILE.socials.github} Icon={Github} />
              )}
              {PROFILE.socials.researchgate && (
                <SocialLink label="ResearchGate" href={PROFILE.socials.researchgate} />
              )}
              {PROFILE.socials.orcid && <SocialLink label="ORCID" href={PROFILE.socials.orcid} />}
            </div>
          </div>

          <div className="shrink-0">
            <div className="w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-full overflow-hidden ring-4 ring-white shadow-xl bg-slate-200">
              <img
                src={PROFILE.photoUrl}
                alt={`${PROFILE.name} portrait`}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </header>

      <Section id="publications" title="Publications" icon={<BookOpen className="w-6 h-6 text-slate-700" />}>
        <ul className="space-y-6">
          <li className="p-5 rounded-2xl bg-white shadow-sm border border-slate-200">
            <h3 className="text-lg sm:text-xl font-semibold leading-snug">
              Diverse patterns of intra‑host genetic diversity in chronically infected SARS‑CoV‑2 patients
            </h3>
            <p className="mt-1 text-sm text-slate-700">A. Ben Zvi, et al.</p>
            <p className="text-sm text-slate-600">Virus Evolution · 2025</p>
            <div className="mt-3 flex flex-wrap gap-3">
              <a href="#" className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full border border-slate-300 hover:bg-slate-50">
                <LinkIcon className="w-4 h-4" /> Paper
              </a>
              <a href="#" className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full border border-slate-300 hover:bg-slate-50">
                <LinkIcon className="w-4 h-4" /> Code
              </a>
            </div>
          </li>
        </ul>
      </Section>

      <Section id="education" title="Education" icon={<GraduationCap className="w-6 h-6 text-slate-700" />}>
        <ol className="relative border-s-l border-slate-200 ml-3">
          <li className="ms-6 pb-8 last:pb-0">
            <span className="absolute -start-1.5 flex h-3 w-3 rounded-full bg-slate-700 ring-4 ring-white" />
            <div className="p-5 bg-white rounded-2xl shadow-sm border border-slate-200">
              <h3 className="text-base sm:text-lg font-semibold">Tel Aviv University</h3>
              <p className="text-sm text-slate-700">PhD, Bioinformatics (Virus Evolution)</p>
              <p className="text-xs text-slate-600">2023 – Present</p>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                Research in viral evolution, intra‑host dynamics, and computational genomics in Adi Stern's Lab.
              </p>
            </div>
          </li>
        </ol>
      </Section>

      <footer className="py-12 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
      </footer>
    </div>
  );
}
