// tailwind.config.js
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    // page wrapper / text
    "dark:from-slate-900",
    "dark:to-slate-950",
    "dark:text-slate-100",
    // body background fallback
    "dark:bg-slate-900",
    // cards and borders
    "dark:bg-slate-800",
    "dark:border-slate-700",
    // muted text
    "dark:text-slate-300",
    "dark:text-slate-400",
    // loud test color
    "dark:bg-red-900",
  ],
  theme: { extend: {} },
  plugins: [],
};
