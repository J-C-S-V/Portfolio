import { BentoGrid, BentoItem } from './components/BentoGrid';
import projects from './data/projects.json';
import './App.css';
import { ImageProfile, DescriptionProfile } from './components/Profile';
import { Link } from 'react-router-dom';

function App() {
  return (
    <main className="app-container">
      <header className="app-header">
        <h1 className="app-title">
          Featured&nbsp;&nbsp;Projects
        </h1>
        <Link to="/about" style={{color: "white"}}>About</Link>
        <Link to="/projects" style={{color: "white"}}>Projects</Link>
      </header>
      
      <main className="app-main">
        <BentoGrid>
          {projects.map((project, index) => (
            <BentoItem 
              key={index}
              className={`bento-item-content-${index}`}
            >
              <div className="project-image">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="project-image"
                />
              </div>
              <h3 className="project-title">
                {project.title}
              </h3>
              <p className="project-description">
                {project.description}
              </p>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="project-tag">
                    {tag}
                  </span>
                ))}
              <a href={project.link} target="_blank" className="project-tag-link">View Project
              </a>
              <a href={project.github} target="_blank" className="project-tag-link">GitHub
              </a>
              </div>
            </BentoItem>
          ))}
        </BentoGrid>
        <section className="profile">
          <ImageProfile />
          <DescriptionProfile />
        </section>
      </main>
    </main>
  );
}

export default App;
