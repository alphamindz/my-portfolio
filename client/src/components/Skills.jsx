import React from 'react';
import './Skills.css';

const Skills = () => {
  const skillsData = [
    {
      category: "Frontend Development",
      skills: [
        { name: "React.js", level: "90%" },
        { name: "JavaScript (ES6+)", level: "85%" },
        { name: "HTML/CSS & Tailwind", level: "95%" }
      ]
    },
    {
      category: "Backend Development",
      skills: [
        { name: "Node.js", level: "80%" },
        { name: "Express.js", level: "85%" },
        { name: "REST APIs", level: "90%" }
      ]
    },
    {
      category: "Database",
      skills: [
        { name: "MongoDB", level: "85%" },
        { name: "MySQL / SQL", level: "75%" },
        { name: "Mongoose ODM", level: "80%" }
      ]
    },
    {
      category: "Deployment & Tools",
      skills: [
        { name: "Git & GitHub", level: "90%" },
        { name: "Vercel / Render", level: "80%" },
        { name: "Postman", level: "85%" }
      ]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        <h2 className="skills-heading">Technical <span className="highlight">Proficiency</span></h2>
        
        <div className="skills-grid">
          {skillsData.map((item, index) => (
            <div key={index} className="skill-card">
              <h3>{item.category}</h3>
              <div className="skill-list">
                {item.skills.map((skill, idx) => (
                  <div key={idx} className="skill-item">
                    <div className="skill-info">
                      <span>{skill.name}</span>
                      <span>{skill.level}</span>
                    </div>
                    <div className="progress-bar">
                      <div className="progress-fill" style={{ width: skill.level }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;