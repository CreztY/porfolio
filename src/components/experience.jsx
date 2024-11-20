import './experience.css'
import Job from '../icons/job-logo.jsx'

function Experience () {
  return (
    <div className='experienceContainer'>
      <h1><Job /> Experiencia Laboral</h1>
      <div className='jobs-grid'>
        <div className='job'>
          <h3>Auxiliar de Cocina</h3>
          <ul>
            <li>Preparación de alimentos</li>
            <li>Cocción de alimentos</li>
            <li>Atención a los clientes</li>
            <li>Manejo de la caja registradora</li>
          </ul>
          <span>Mayo 2021 - Actualidad</span>
        </div>
        <div className='job'>
          <h3>Gestión de Base de Datos</h3>
          <ul>
            <li>Desgloses de base de datos</li>
          </ul>
          <span>Abril 2021 - Mayo 2021</span>
        </div>
        <div className='job'>
          <h3>Técnico Microinformático</h3>
          <ul>
            <li>Mantenimiento de sistemas informáticos</li>
            <li>Reparación de página web</li>
          </ul>
          <span>Octubre 2020 - Noviembre 2020</span>
        </div>
        <div className='job'>
          <h3>Técnico Microinformático</h3>
          <ul>
            <li>Mantenimiento de sistemas informáticos</li>
            <li>Instalación de sistemas operativos</li>
            <li>Reparación de impresoras</li>
          </ul>
          <span>Marzo 2015 - Junio 2015</span>
        </div>
      </div>
    </div>

  )
}

export default Experience
