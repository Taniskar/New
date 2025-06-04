"use client";

import "./globals.css";
import { useState, useEffect } from "react";
import { Inter } from "next/font/google";
import ThemeToggle from "../components/portfolio/ThemeToggle";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&family=Space+Grotesk&family=IBM+Plex+Sans&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-slate-100 dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors duration-500 font-sans">
        <header className="sticky top-0 z-50 bg-slate-100 dark:bg-slate-900 shadow-md backdrop-blur-md backdrop-saturate-150">
          <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="text-xl font-bold text-teal-500">Hiren Patel</div>
            <ul className="hidden md:flex space-x-8 text-slate-700 dark:text-slate-300 font-medium">
              <li>
                <a href="#about" className="hover:text-teal-400 transition">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-teal-400 transition">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-teal-400 transition">
                  Skills
                </a>
              </li>
              <li>
                <a href="#certifications" className="hover:text-teal-400 transition">
                  Certifications
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-teal-400 transition">
                  Experience
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-teal-400 transition">
                  Contact
                </a>
              </li>
            </ul>
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
