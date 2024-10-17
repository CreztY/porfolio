import './projects.css'
import Github from './icons/github.jsx';

function Projects() {
  const projects = [
    {
      title: "Proyecto 1",
      description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione suscipit rerum laboriosam possimus iusto ut similique mollitia odit porro fugit aliquam non consectetur atque, sapiente perspiciatis nam dolores, dicta inventore.",
      imageUrl: "https://via.placeholder.com/150",
      githubUrl: "https://github.com/usuario/proyecto1",
      liveUrl: "https://proyecto1.com"
    },
    {
      title: "Proyecto 2",
      description: "Descripción breve del proyecto.",
      imageUrl: "https://via.placeholder.com/150",
      githubUrl: "https://github.com/usuario/proyecto2",
      liveUrl: "https://proyecto2.com"
    }
  ]

  return (
    <div className="projectsContainer">
      <h1>Proyectos</h1>
      <div className="projects">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.imageUrl} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-icons">
              <a href={project.githubUrl}><Github /></a>
              <a href={project.liveUrl}>link</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
