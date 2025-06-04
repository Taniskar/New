"use client";

import { useState } from "react";

const projects = [
  {
    title: "Petronet LNG RTDMAP",
    description:
      "Created 30+ real-time dashboards to monitor LNG operations across India.",
  },
  {
    title: "Uber Demand Forecasting",
    description:
      "Built ML models to reduce rider wait time by 20%.",
  },
  {
    title: "GAIL Digital Logbook",
    description:
      "Built GPS-validated digital logging system to replace paper workflows.",
  },
];

export default function Projects() {
  const [current, setCurrent] = useState(0);

  const nextProject = () => {
    setCurrent((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrent((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section
      id="projects"
      className="max-w-5xl mx-auto py-16 px-6 text-slate-900 dark:text-slate-100"
    >
      <h2 className="text-3xl font-bold mb-6 border-b-2 border-teal-500 inline-block">
        Projects
      </h2>
      <div className="relative bg-slate-200 dark:bg-slate-800 rounded-lg p-8 shadow-lg">
        <h3 className="text-xl font-semibold mb-2">{projects[current].title}</h3>
        <p className="mb-4">{projects[current].description}</p>
        <div className="flex justify-between">
          <button
            onClick={prevProject}
            className="px-4 py-2 bg-teal-500 hover:bg-teal-600 rounded-md font-semibold transition"
          >
            Previous
          </button>
          <button
            onClick={nextProject}
            className="px-4 py-2 bg-teal-500 hover:bg-teal-600 rounded-md font-semibold transition"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
