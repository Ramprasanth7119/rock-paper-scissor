import React from "react";
import "./Projects.css"; // Assuming you have this CSS file

const Projects = ({ projects = [] }) => {
  if (!projects || projects.length === 0) {
    return <div>No projects available</div>;
  }

  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <div key={index} className="project-card">
          <div className="project-image">
            <img src={project.image} alt={project.title} />
          </div>
          <div className="project-details">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            
            <div className="project-stack">
              {project.stack.map((tech, idx) => (
                <div key={idx} className="stack-item">
                  {tech}
                </div>
              ))}
            </div>

            <div className="project-buttons">
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                <button className="button">GitHub</button>
              </a>
              <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                <button className="button">Live Demo</button>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Projects;
