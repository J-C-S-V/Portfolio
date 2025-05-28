import { BentoGrid, BentoItem } from './components/BentoGrid';
import projects from './data/projects.json';
import styles from './App.module.css';
import { ImageProfile, DescriptionProfile } from './components/Profile';
import { Link } from 'react-router-dom';

function App() {
  return (
    <main className={styles.app}>
      <header className={styles['app__header']}>
        <h1 className={styles['app__title']}>Featured&nbsp;&nbsp;Projects</h1>
        <div className={styles['app__links']}>
          <Link to="/about" className={styles['app__link']}>
            About
          </Link>
          <Link to="/projects" className={styles['app__link']}>
            Projects
          </Link>
        </div>
      </header>

      <main className={styles['app__main']}>
        <BentoGrid>
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
        </BentoGrid>
        <header className={`${styles['app__header']} ${styles['app__header-hidden']}`}>
          <h1 className={styles['app__title']}>Featured&nbsp;&nbsp;Projects</h1>
          <div className={styles['app__links']}>
            <Link to="/about" className={styles['app__link']}>
              About
            </Link>
            <Link to="/projects" className={styles['app__link']}>
              Projects
            </Link>
          </div>
        </header>
        <section className={styles.profile}>
          <ImageProfile />
          <DescriptionProfile />
        </section>
      </main>
    </main>
  );
}

export default App;
