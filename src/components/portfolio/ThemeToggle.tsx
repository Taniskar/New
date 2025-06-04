"use client";

import { Sun, Moon } from "lucide-react";

interface ThemeToggleProps {
  theme: string;
  toggleTheme: () => void;
}

export default function ThemeToggle({ theme, toggleTheme }: ThemeToggleProps) {
  return (
    <button
      aria-label="Toggle Dark Mode"
      type="button"
      className="p-2 rounded-md bg-slate-200 dark:bg-slate-700 hover:bg-teal-400 dark:hover:bg-teal-600 transition-colors"
      onClick={toggleTheme}
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5 text-yellow-400" />
      ) : (
        <Moon className="w-5 h-5 text-gray-800" />
      )}
    </button>
  );
}
