"use client";

import { useState } from "react";

const projects = [
  {
    title: "Petronet LNG RTDMAP",

    description:
      "Implemented a centralized real-time data monitoring and analysis platform for Petronet LNG, integrating operational data from the Dahej and Kochi plants into a unified system at the corporate office in Delhi, enabling fast decision-making through over 30 interactive dashboards tracking key metrics like tank levels, pumps, compressors, and process flows.",
  },
  {
    title: "Uber Demand Forecasting",
    description:
      "Developed a machine learning-based demand forecasting model for Uber to accurately predict ride demand across locations and time intervals, optimizing resource allocation, reducing wait times by 20%, and improving rider satisfaction by decreasing surge pricing through real-time predictive insights integrated into operational dashboards.",
  },
  {
    title: "GAIL Digital Logbook",
    description:
      "Developed a centralized Digital Logbook for GAIL using SSM's XStudio, implementing GPS-based logsheet access, real-time data validation, and automated report generation, improving data accuracy, operational oversight, and decision-making while streamlining workflows and ensuring timely sharing of reports.",
  },
  {
    title: "IOCL",
    description:
      "Integrated CGD and EMS plant data into the existing CPIMS system using OPC UA Connector v2, deployed and configured PI Vision for enhanced real-time visualization, and updated the AF hierarchy and calculations to ensure unified, actionable insights, while creating 4 interactive dashboards and 3 reports for operational insights.",
  }
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
