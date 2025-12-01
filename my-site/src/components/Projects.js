import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import projectsData from "../projects.json"; // creeremo questo file dopo

function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsData);
  }, []);

  return (
    <section id="projects" style={{ padding: "2rem", maxWidth: "900px", margin: "auto" }}>
      <h2>I Miei Progetti</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "1rem" }}>
        {projects.map((p, idx) => (
          <ProjectCard key={idx} project={p} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
