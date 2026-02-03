import { FaGithub, FaExternalLinkAlt, FaPlay } from 'react-icons/fa';

function ProjectCard({ project }) {
  return (
    <div style={styles.card}>
      {project.image && (
        <img src={project.image} alt={project.title} style={styles.image} />
      )}
      <div style={styles.content}>
        <h3 style={styles.title}>{project.title}</h3>
        <p style={styles.intro}>{project.intro}</p>
        <p style={styles.description}>{project.description}</p>
        
        <div style={styles.techContainer}>
          {project.technologies?.map((tech, idx) => (
            <span key={idx} style={styles.techTag}>{tech}</span>
          ))}
        </div>

        <div style={styles.links}>
          {project.githubLink && (
            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" style={styles.link}>
              <FaGithub /> Code
            </a>
          )}
          {project.liveLink && (
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" style={styles.link}>
              <FaExternalLinkAlt /> Live
            </a>
          )}
          {project.videoUrl && (
            <a href={project.videoUrl} target="_blank" rel="noopener noreferrer" style={styles.link}>
              <FaPlay /> Video
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

const styles = {
  card: {
    background: 'white',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s'
  },
  image: {
    width: '100%',
    height: '200px',
    objectFit: 'cover'
  },
  content: {
    padding: '1.5rem'
  },
  title: {
    fontSize: '1.5rem',
    marginBottom: '0.5rem',
    color: '#1a1a2e'
  },
  intro: {
    color: '#666',
    marginBottom: '1rem',
    fontStyle: 'italic'
  },
  description: {
    color: '#444',
    marginBottom: '1rem',
    lineHeight: '1.6'
  },
  techContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    marginBottom: '1rem'
  },
  techTag: {
    background: '#667eea',
    color: 'white',
    padding: '0.3rem 0.8rem',
    borderRadius: '15px',
    fontSize: '0.85rem'
  },
  links: {
    display: 'flex',
    gap: '1rem',
    marginTop: '1rem'
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.3rem',
    padding: '0.5rem 1rem',
    background: '#1a1a2e',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '5px',
    fontSize: '0.9rem'
  }
};

export default ProjectCard;