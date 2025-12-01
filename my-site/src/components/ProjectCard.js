import React from "react";

function ProjectCard({ project }) {
  return (
    <div style={{ background: "white", padding: "1rem", borderRadius: "10px", boxShadow: "0 2px 5px rgba(0,0,0,0.1)" }}>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <a href={project.link} target="_blank" rel="noreferrer">Vai al progetto</a>
    </div>
  );
}

export default ProjectCard;
