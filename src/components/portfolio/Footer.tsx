"use client";

export default function Footer() {
  return (
    <footer className="bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 py-6 mt-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Hiren Patel. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a
            href="https://linkedin.com/in/hiren-patel-datascience"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-500 transition"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/hirenpatel"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-teal-500 transition"
            aria-label="GitHub"
          >
            GitHub
          </a>
          <a
            href="mailto:hiren.patel728@gmail.com"
            className="hover:text-teal-500 transition"
            aria-label="Email"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
