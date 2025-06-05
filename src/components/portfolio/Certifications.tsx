"use client";

const certifications = [
  "Meta: Data Analytics with SQL",
  "Aveva - CSI AVEVA PI Infrastructure Specialist Exam",
  "Aveva - CSI AVEVA PI Installation Specialist Exam",
  "GFG - Complete Data Science and Machine Learning Program",
  "ISRO: Geoprocessing with Python",
  "KPMG: Data Analytics Virtual Internship",
  "Codebasics: Power BI",
  "HackerRank - Python",
  "HackerRank - Java"
];

export default function Certifications() {
  return (
    <section
      id="certifications"
      className="max-w-5xl mx-auto py-16 px-6 text-slate-900 dark:text-slate-100"
    >
      <h2 className="text-3xl font-bold mb-6 border-b-2 border-teal-500 inline-block">
        Certifications
      </h2>
      <div className="flex overflow-x-auto space-x-6 scrollbar-thin scrollbar-thumb-teal-500 scrollbar-track-slate-300 dark:scrollbar-track-slate-700 py-4">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="min-w-[250px] bg-slate-200 dark:bg-slate-800 rounded-lg p-6 shadow-md flex-shrink-0"
          >
            {cert}
          </div>
        ))}
      </div>
    </section>
  );
}
