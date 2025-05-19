import { BentoGrid, BentoItem } from './components/BentoGrid';
import projects from './data/projects.json';
import './App.css';

function App() {
  return (
    <main className="app-container">
      <header className="app-header">
        <h1 className="app-title">
          Projects
        </h1>
      </header>
      
      <main className="app-main">
        <BentoGrid>
          {projects.map((project, index) => (
            <BentoItem 
              key={index}
              className="bento-item-content"
            >
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
              </div>
            </BentoItem>
          ))}
        </BentoGrid>
      </main>
    </main>
  );
}

export default App;
