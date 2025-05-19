import { BentoGrid, BentoItem } from './components/BentoGrid';
import './App.css';

const projects = [
  {
    title: 'Project 1',
    description: 'A brief description of project 1',
    tags: ['React', 'TypeScript', 'CSS'],
    rowSpan: 1,
    colSpan: 1
  },
  {
    title: 'Project 2',
    description: 'A brief description of project 2',
    tags: ['Node.js', 'Express', 'MongoDB'],
    rowSpan: 1,
    colSpan: 2
  },
  {
    title: 'Project 3',
    description: 'A brief description of project 3',
    tags: ['Python', 'Django', 'PostgreSQL'],
    rowSpan: 2,
    colSpan: 1
  },
  {
    title: 'Project 4',
    description: 'A brief description of project 4',
    tags: ['React Native', 'Firebase'],
    rowSpan: 1,
    colSpan: 1
  },
  {
    title: 'Project 5',
    description: 'A brief description of project 5',
    tags: ['Next.js', 'TypeScript', 'CSS'],
    rowSpan: 1,
    colSpan: 1
  },
];

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1 className="app-title">
          My Projects
        </h1>
        <p className="app-subtitle">
          A collection of my recent work and side projects.
        </p>
      </header>
      
      <main className="app-main">
        <BentoGrid>
          {projects.map((project, index) => (
            <BentoItem 
              key={index}
              rowSpan={project.rowSpan}
              colSpan={project.colSpan}
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
    </div>
  );
}

export default App;
