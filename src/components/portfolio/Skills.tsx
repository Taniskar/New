"use client";

const skills = {
  "Aveva OSI PI Suit":["PI Interface/Connector Configuration", "PI Data Archive Management","PI Asset Framework(AF) Setup, Templates, analysis and Hierarchy Design", "PI Vision for Real-Time Dashboards","PI Vision extensibility", "PI ML for Manual Data Entry Integration", "PI System Security", "Data Injection - UFL"],
  Languages: ["Python", "SQL", "Java", "C++", "JavaScript"],
  "ML/AI Tools": ["TensorFlow", "Scikit-learn", "Keras", "Pandas"],
  Visualization: ["Power BI", "Tableau", "Matplotlib", "Streamlit"],
  Cloud: ["AWS", "GCP"],
  Databases: ["MySQL", "PostgreSQL", "MongoDB"],
  Tools: ["Flask", "Streamlit", "Power BI", "Tableau", "Anaconda","OSI PI Software Suit"]
};

export default function Skills() {
  return (
    <section
      id="skills"
      className="max-w-5xl mx-auto py-16 px-6 text-slate-900 dark:text-slate-100"
    >
      <h2 className="text-3xl font-bold mb-6 border-b-2 border-teal-500 inline-block">
        Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h3 className="text-xl font-semibold mb-3">{category}</h3>
            <ul className="list-disc list-inside space-y-1">
              {items.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
