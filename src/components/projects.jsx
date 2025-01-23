import Github from '../icons/github.jsx'
import EyeIcon from '../icons/EyeIcon.jsx'
import './projects.css'

function Projects () {
  const projects = [
    {
      title: 'streamly deck',
      description: 'Streamly Deck es un control para OBS Studio que permite a los usuarios crear y personalizar botones y acciones para controlar la aplicación y la transmisión de video.',
      imageUrl: 'https://i.ibb.co/R3qXMBX/Captura-de-pantalla-2025-01-23-194153.png',
      liveUrl: 'http://streamly-deck.com/'
    },
    {
      title: 'Trivia Masters',
      description: 'Juego de preguntas y respuestas para jugar con amigos y familiares. Creado con React y Node.js.',
      imageUrl: 'https://i.ibb.co/9cktzFQ/Captura-de-pantalla-2025-01-23-191226.png',
      liveUrl: 'https://trivia-master-web.vercel.app/'
    },
    {
      title: 'StreamElements',
      description: 'Diseño y desarrollo de overlays personalizados para transmisiones en vivo, adaptados a las necesidades de clientes y streamers.\nIntegración de elementos interactivos y visualmente atractivos utilizando herramientas de StreamElements.',
      imageUrl: 'https://www.dexerto.com/cdn-image/wp-content/uploads/2021/09/22/StreamElements-Logo.jpg?width=768&quality=60&format=auto'
    },
    {
      title: 'FiveM',
      description: 'Más de 50 proyectos de desarrollo en la plataforma FiveM, especializándome en la creación de servidores de roleplay personalizados.\nImplementación de scripts complejos, sistemas de juego inmersivos y optimización del rendimiento del servidor.',
      imageUrl: 'https://logos-world.net/wp-content/uploads/2021/03/FiveM-Logo-700x394.png'
      // githubUrl: 'https://github.com/usuario/proyecto1',
      // liveUrl: 'https://proyecto1.com'
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
              {project.githubUrl && <a href={project.githubUrl}><Github /></a>}
              {project.liveUrl &&
                <a
                  className='pryject-link-preview'
                  href={project.liveUrl}
                  target='_blank'
                  rel='noreferrer'
                >
                  ver<EyeIcon />
                </a>}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
