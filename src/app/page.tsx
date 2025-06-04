"use client";

import Hero from "../components/portfolio/Hero";
import About from "../components/portfolio/About";
import Projects from "../components/portfolio/Projects";
import Skills from "../components/portfolio/Skills";
import Certifications from "../components/portfolio/Certifications";
import Experience from "../components/portfolio/Experience";
import Contact from "../components/portfolio/Contact";
import Footer from "../components/portfolio/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Certifications />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}
