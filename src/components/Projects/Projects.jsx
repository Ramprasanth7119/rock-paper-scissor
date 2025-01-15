import React, { useState, useEffect } from 'react';
import './Projects.css'; // Import the CSS for cube styling

const Projects = () => {
  const [rotation, setRotation] = useState(0); // Control cube rotation

  useEffect(() => {
    const handleScroll = (event) => {
      if (event.deltaY > 0) {
        // Scroll down
        setRotation(prev => prev + 90); // Rotate 90 degrees on scroll
      } else {
        // Scroll up
        setRotation(prev => prev - 90); // Rotate 90 degrees in reverse on scroll
      }
    };

    // Listen to scroll event
    window.addEventListener('wheel', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return (
    <div className="cube-container">
      <div className="cube" style={{ transform: `rotateX(${rotation}deg)` }}>
        <div className="cube-face front">
          <div className="project-content">
            <img src="project1.jpg" alt="Project 1" />
            <p>Project 1 Description</p>
          </div>
        </div>
        <div className="cube-face back">
          <div className="project-content">
            <img src="project2.jpg" alt="Project 2" />
            <p>Project 2 Description</p>
          </div>
        </div>
        <div className="cube-face left">
          <div className="project-content">
            <img src="project3.jpg" alt="Project 3" />
            <p>Project 3 Description</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
