import { Link } from 'react-router-dom';
import styles from './Projects.module.css';
import { BentoItem } from '../components/BentoGrid';
import projects from '../data/projects_all.json';

export const Projects = () => {
  return (
    <main className={styles.projects}>
      <div className={styles['projects__header']}>
        <h1 className={styles['projects__title']}>Projects</h1>
        <Link to="/" className={styles['projects__link']}>
          Home
        </Link>
      </div>
      <div className={styles['projects__content']}>
        <div className={styles['projects__grid']}>
          {projects.map((project, index) => (
            <BentoItem key={index} className={`bento-item-content-${index}`}>
              <div className="project-image">
                <img src={project.image} alt={project.title} className="project-image" />
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="project-tag">
                    {tag}
                  </span>
                ))}
                <a href={project.link} target="_blank" className="project-tag-link">
                  View Project
                </a>
                <a href={project.github} target="_blank" className="project-tag-link">
                  GitHub
                </a>
              </div>
            </BentoItem>
          ))}
        </div>
      </div>
    </main>
  );
};
