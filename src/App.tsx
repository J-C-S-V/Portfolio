import { BentoGrid, BentoItem } from './components/BentoGrid';
import projects from './data/projects.json';
import './App.css';
import { ImageProfile, DescriptionProfile } from './components/Profile';

function App() {
  return (
    <main className="app-container">
      <header className="app-header">
        <h1 className="app-title">
          Featured&nbsp;&nbsp;Projects
        </h1>
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
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
              </svg> */}
              </a>
              <a href={project.github} target="_blank" className="project-tag-link">GitHub
                {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg> */}
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
