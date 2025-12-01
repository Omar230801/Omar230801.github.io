import React from "react";
import ProjectCard from "./ProjectCard";
import projectsData from "../projects.json"; // import diretto
import './Projects.css';

function Projects() {
  return (
    <section id="projects" style={{ padding: "2rem", maxWidth: "900px", margin: "auto" }}>
      <h2>I Miei Progetti</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "1rem" }}>
        {projectsData.map((p, idx) => (
          <ProjectCard key={idx} project={p} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
