import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => {
      if (!("theme" in localStorage)) setDark(mq.matches);
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
      className="relative w-10 h-10 rounded-full border border-slate-300 dark:border-slate-600 flex items-center justify-center transition bg-white dark:bg-slate-800 hover:scale-105 shadow-sm"
      aria-label="Toggle dark mode"
    >
      <Sun className={`absolute w-5 h-5 text-yellow-500 transition-all duration-500 ${dark ? "opacity-0 scale-0" : "opacity-100 scale-100"}`} />
      <Moon className={`absolute w-5 h-5 text-slate-100 transition-all duration-500 ${dark ? "opacity-100 scale-100" : "opacity-0 scale-0"}`} />
    </button>
  );
}
