import React from "react";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { Github, GraduationCap, BookOpen, Link as LinkIcon, Globe, Bird, Microscope, Glasses } from "lucide-react";
import ThemeToggle from "./components/ThemeToggle";


const PROFILE = {
  name: "Adi Ben Zvi",
  role: "PhD Student · Virus Evolution & Bioinformatics",
  affiliation: "Adi Stern Lab @ Tel Aviv University",
  photoUrl: "/your-photo.jpg",
  blurb:
    "I study within-host virus evolution and computational genomics. My research focuses on SARS‑CoV‑2 intra‑host diversity, methods for detecting suspicious mutations, and building reproducible pipelines for large-scale genomic analysis.",
  socials: {
    x: "https://x.com/BZman101",
    bluesky: "https://bsky.app/profile/adibz.bsky.social",
    github: "https://github.com/adibnzv",
    researchgate: "https://www.researchgate.net/profile/Adi-Ben-Zvi-2?ev=hdr_xprf",
    orcid: "https://orcid.org/my-orcid?orcid=0009-0003-5906-6821",
  },
};
export default function ThemeToggle() {
  const [dark, setDark] = useState(
    document.documentElement.classList.contains("dark")
  );

  // Keep icon in sync when system preference changes
  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => {
      if (!("theme" in localStorage)) {
        setDark(mq.matches);
      }
    };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const toggle = () => {
    const html = document.documentElement;
    const newDark = !html.classList.contains("dark");
    html.classList.toggle("dark", newDark);
    localStorage.theme = newDark ? "dark" : "light";
    setDark(newDark);
  };

  return (
    <button
      onClick={toggle}
      className="relative w-10 h-10 rounded-full border border-slate-300 dark:border-slate-600
                 flex items-center justify-center transition bg-white dark:bg-slate-800
                 hover:scale-105 shadow-sm"
      aria-label="Toggle dark mode"
    >
      <Sun
        className={`absolute w-5 h-5 text-yellow-500 transition-all duration-500
                    ${dark ? "opacity-0 scale-0" : "opacity-100 scale-100"}`}
      />
      <Moon
        className={`absolute w-5 h-5 text-slate-100 transition-all duration-500
                    ${dark ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}
      />
    </button>
  );
}
const publications = [
  {
    title: "Diverse patterns of intra-host genetic diversity in chronically infected SARS-CoV-2 patients",
    authors: "Ben Zvi A. et al.",
    journal: "Virus Evolution · 2025",
    links: [
      { label: "DOI", href: "https://doi.org/10.1093/ve/veaf047" },
      { label: "Code", href: "https://github.com/Stern-Lab/chronic-time-series-2024" },
    ],
  },
  {
    title: "Navigating a Fine Balance: Point-Mutant Cheater Viruses Disrupt the Viral Replication Cycle",
    authors: "Meir M., Kahn A., Farage C., Maoz A., Harel N., Ben Zvi A., Segev S., Volkov M., Yahud R., Gophna U., Stern A.",
    journal: "Molecular Biology and Evolution · 2024",
    links: [
      { label: "DOI", href: "https://doi.org/10.1093/molbev/msae258" },
      { label: "Code", href: "https://github.com/Stern-Lab/cheaters_fine_balance" },
    ],
  },
];
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
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900 
                dark:from-slate-900 dark:to-slate-950 dark:text-slate-100">
      <header className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col-reverse md:flex-row items-center md:items-end justify-between gap-8"
        >
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight 
               text-slate-900 dark:text-slate-100">
              {PROFILE.name}
            </h1>
            <header className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-3xl sm:text-5xl font-bold tracking-tight leading-tight">
                  <span className="bg-gradient-to-r from-slate-900 to-slate-500 dark:from-slate-100 dark:to-slate-400 bg-clip-text text-transparent">
                    {PROFILE.name}
                  </span>
                </h1>
                <ThemeToggle />
              </div>
            </header>
            <p className="mt-3 text-base sm:text-lg text-slate-700">{PROFILE.role}</p>
            <p className="text-sm sm:text-base text-slate-600">{PROFILE.affiliation}</p>

            <p className="mt-6 max-w-2xl text-slate-800 leading-relaxed">{PROFILE.blurb}</p>

            <div className="mt-6 flex flex-wrap gap-4">
              {PROFILE.socials.x && (
                <SocialLink label="X" href={PROFILE.socials.x} Icon={Bird} />
              )}
              {PROFILE.socials.bluesky && (
                <SocialLink label="Bluesky" href={PROFILE.socials.bluesky} Icon={Globe} />
              )}
              {PROFILE.socials.github && (
                <SocialLink label="GitHub" href={PROFILE.socials.github} Icon={Github} />
              )}
              {PROFILE.socials.researchgate && (
                <SocialLink label="ResearchGate" href={PROFILE.socials.researchgate} Icon={Microscope } />
              )}
              {PROFILE.socials.orcid && (
                <SocialLink label="ORCID" href={PROFILE.socials.orcid} Icon={Glasses} />
              )}
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
        {publications.map((pub, i) => (
          <li className="p-5 rounded-2xl bg-white shadow-sm border border-slate-200 
               dark:bg-slate-800 dark:border-slate-700 dark:shadow-none transition">
            <h3 className="text-lg sm:text-xl font-semibold leading-snug">{pub.title}</h3>

            {/* Authors */}
            <p className="mt-1 text-sm text-slate-700">
              {pub.authors.split(", ").map((author, j) => {
                const trimmed = author.trim();
                const isMe = /\bBen\s*Zvi\b/.test(trimmed); // matches "Ben Zvi" but not "et al."

                return (
                  <span key={j}>
                    {isMe ? (
                      <span className="underline font-semibold underline-offset-2 decoration-slate-500">
                        {trimmed.replace("et al.", "").trim()}
                      </span>
                    ) : (
                      trimmed
                    )}
                    {trimmed.includes("et al.") && " et al."}
                    {j < pub.authors.split(", ").length - 1 && ", "}
                  </span>
                );
              })}
            </p>

            <p className="text-sm text-slate-600">{pub.journal}</p>

            <div className="mt-3 flex flex-wrap gap-3">
              {pub.links.map((link, j) => (
                <a
                  key={j}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1.5 rounded-full border border-slate-300 hover:bg-slate-50"
                >
                  <LinkIcon className="w-4 h-4" /> {link.label}
                </a>
              ))}
            </div>
          </li>
        ))}
      </ul>


      </Section>

      <Section id="education" title="Education" icon={<GraduationCap className="w-6 h-6 text-slate-700" />}>
        <div className="p-5 bg-white rounded-2xl shadow-sm border border-slate-200 
                dark:bg-slate-800 dark:border-slate-700 transition">
          <li className="space-6 pb-8 last:pb-0">
            <div className="p-5 bg-white rounded-2xl shadow-sm border border-slate-200">
              <h3 className="text-base sm:text-lg font-semibold">Tel Aviv University</h3>
              <p className="text-base sm:text-lg text-slate-700">PhD, Bioinformatics (Virus Evolution)</p>
              <p className="text-base sm:text-med text-slate-700">2023 – Present</p>
              <p className="mt-2 text-sm text-slate-700 leading-relaxed">
                Research in viral evolution, intra‑host dynamics, and computational genomics in the Adi Stern Lab.
              </p>
            </div>
          </li>
          <li className="space-6 pb-8 last:pb-0">
            <div className="p-5 bg-white rounded-2xl shadow-sm border border-slate-200">
              <h3 className="text-base sm:text-lg font-semibold">Tel Aviv University</h3>
              <p className="text-base sm:text-lg text-slate-700">MSc, Bioinformatics (as part of the direct PhD program)</p>
              <p className="text-base sm:text-med text-slate-700">2022 – 2023</p>
            </div>
          </li>
          <li className="space-6 pb-8 last:pb-0">
            <div className="p-5 bg-white rounded-2xl shadow-sm border border-slate-200">
              <h3 className="text-base sm:text-lg font-semibold">Tel Aviv University</h3>
              <p className="text-base sm:text-lg text-slate-700">BSc, Biology</p>
              <p className="text-base sm:text-med text-slate-700">2019 – 2022</p>
            </div>
          </li>
        </div>
      </Section>

      <footer className="py-12 text-center text-xs text-slate-500 dark:text-slate-400">
        © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
      </footer>
    </div>
  );
}
