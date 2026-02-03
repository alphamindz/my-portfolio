import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProjectCard from './ProjectCard';
import './Projects.css'; // CSS इम्पोर्ट करें

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      // ध्यान दें: प्रोडक्शन में URL को environment variable में रखें
      const res = await axios.get('http://localhost:5000/api/projects');
      setProjects(res.data);
      setLoading(false);
    } catch (err) {
      console.error("Error fetching projects:", err);
      setLoading(false);
    }
  };

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="projects-heading">My <span className="highlight">Projects</span></h2>
        
        {loading ? (
          <div className="loader">Loading amazing projects...</div>
        ) : (
          <div className="projects-grid">
            {projects.length === 0 ? (
              <p className="no-projects">
                No projects found. Time to build something awesome!
              </p>
            ) : (
              projects.map(project => (
                <ProjectCard key={project._id} project={project} />
              ))
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;

