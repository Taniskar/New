"use client";

export default function Contact() {
  return (
    <section
      id="contact"
      className="max-w-5xl mx-auto py-16 px-6 text-slate-900 dark:text-slate-100"
    >
      <h2 className="text-3xl font-bold mb-6 border-b-2 border-teal-500 inline-block">
        Contact
      </h2>
      <ul className="space-y-3 text-lg">
        <li>
          📧{" "}
          <a
            href="mailto:hiren.patel728@gmail.com"
            className="text-teal-500 hover:underline"
          >
            hiren.patel728@gmail.com
          </a>
        </li>
        <li> +91 7405526263</li>
        <li>
          🔗{" "}
          <a
            href="https://linkedin.com/in/hiren-patel-datascience"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-500 hover:underline"
          >
            linkedin.com/in/hiren-patel-datascience
          </a>
        </li>
      </ul>
    </section>
  );
}
