import './experience.css'
import Job from './icons/job-logo.jsx'

function Experience() {
  return (
    <div className="experienceContainer">
      <h1><Job />Experiencia laboral</h1>
      <div className="job">
        <h3>Gestión de base de datos</h3>
        <p>Descripción breve de tus responsabilidades o logros en este puesto.</p>
        <span>Fecha de inicio - Fecha de finalización</span>
      </div>
      <div className="job">
        <h3>Otro Trabajo</h3>
        <p>Breve descripción de tus logros o responsabilidades en este rol.</p>
        <span>Fecha de inicio - Fecha de finalización</span>
      </div>
    </div>
  )
}

export default Experience
