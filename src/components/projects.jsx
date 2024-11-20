import './projects.css'
import Github from '../icons/github.jsx'

function Projects () {
  const projects = [
    {
      title: 'StreamElements',
      description: 'Diseño y desarrollo de overlays personalizados para transmisiones en vivo, adaptados a las necesidades de clientes y streamers.\nIntegración de elementos interactivos y visualmente atractivos utilizando herramientas de StreamElements.',
      imageUrl: 'https://www.dexerto.com/cdn-image/wp-content/uploads/2021/09/22/StreamElements-Logo.jpg?width=768&quality=60&format=auto'
      // githubUrl: 'https://github.com/usuario/proyecto1',
      // liveUrl: 'https://proyecto1.com'
    },
    {
      title: 'FiveM',
      description: 'Más de 50 proyectos de desarrollo en la plataforma FiveM, especializándome en la creación de servidores de roleplay personalizados.\nImplementación de scripts complejos, sistemas de juego inmersivos y optimización del rendimiento del servidor.',
      imageUrl: 'https://logos-world.net/wp-content/uploads/2021/03/FiveM-Logo-700x394.png'
    },
    {
      title: 'Unity',
      description: 'Experiencia en desarrollo de videojuegos utilizando Unity durante varios años.\nProgramación de mecánicas de juego, diseño de niveles interactivos y creación de prototipos de videojuegos 2D y 3D.',
      imageUrl: 'https://seeklogo.com/images/U/unity-logo-555C5D1D7E-seeklogo.com.png'
    }
  ]

  return (
    <div className='projectsContainer'>
      <h1>Proyectos</h1>
      <div className='projects'>
        {projects.map((project, index) => (
          <div key={index} className='project-card'>
            <img src={project.imageUrl} alt={`Imagen del proyecto ${project.title}`} className='project-image' />
            <h3>{project.title}</h3>
            <div className='project-description'>
              {project.description.split('\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
            <div className='project-icons'>
              {project.githubUrl ? <a href={project.githubUrl}><Github /></a> : null}
              {project.liveUrl ? <a href={project.liveUrl}>link</a> : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects