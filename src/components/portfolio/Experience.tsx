"use client";

const experiences = [
  {
    company: "SSM Infotech",
    role: "Business Analyst & Technical Manager",
    period: "2023–Now",
  },
  {
    company: "TDEC",
    role: "Sr. Lecturer in ML & Python",
    period: "2022–2023",
  },
  {
    company: "SDCDE",
    role: "Lecturer in Java",
    period: "2021–2022",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="max-w-5xl mx-auto py-16 px-6 text-slate-900 dark:text-slate-100"
    >
      <h2 className="text-3xl font-bold mb-6 border-b-2 border-teal-500 inline-block">
        Work Experience
      </h2>
      <div className="space-y-6">
        {experiences.map(({ company, role, period }, index) => (
          <div key={index} className="border-l-4 border-teal-500 pl-4">
            <h3 className="text-xl font-semibold">{role}</h3>
            <p className="text-teal-600 font-medium">{company}</p>
            <p className="text-sm text-slate-600 dark:text-slate-400">{period}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
