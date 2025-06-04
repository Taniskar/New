"use client";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-tr from-navy-900 via-deep-purple-900 to-slate-800 dark:from-navy-800 dark:via-deep-purple-800 dark:to-slate-900 text-white px-6"
    >
      <h1 className="text-5xl md:text-7xl font-extrabold mb-4 tracking-tight">
        Hiren Patel
      </h1>
      <p className="text-xl md:text-2xl font-semibold mb-2">
        Data Scientist | AI Developer | Technical Leader
      </p>
      <p className="text-lg md:text-xl mb-8 max-w-xl">
        Transforming data into intelligent decisions.
      </p>
      <div className="flex space-x-6">
        <a
          href="/Hiren_Patel_Resume.pdf"
          download
          className="px-6 py-3 bg-teal-500 hover:bg-teal-600 rounded-md font-semibold transition"
        >
          Download Resume
        </a>
        <a
          href="#contact"
          className="px-6 py-3 border border-teal-500 hover:bg-teal-500 hover:text-white rounded-md font-semibold transition"
        >
          Let&apos;s Connect
        </a>
      </div>
    </section>
  );
}
