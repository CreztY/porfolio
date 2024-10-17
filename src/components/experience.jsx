import './experience.css'
import Job from '../icons/job-logo.jsx'

function Experience () {
  return (
    <div className='experienceContainer'>
      <h1><Job />Experiencia laboral</h1>
      <div className='jobs-grid'>
        <div className='job'>
          <h3>Auxiliar de cocina</h3>
          <p>- Preparación de alimentos.<br />
            - Cocción de alimentos.<br />
            - Atención a los clientes.<br />
            - Manejo de la caja registradora.<br />
          </p>
          <span>Mayo 2021 - Actualidad</span>
        </div>
        <div className='job'>
          <h3>Gestion de base de datos</h3>
          <p>- Desgloses de base de datos.</p>
          <span>Abril 2021 - Mayo 2021</span>
        </div>
        <div className='job'>
          <h3>Técnico microinformático</h3>
          <p>- Mantenimiento de sistemas informáticos.<br />
            - Reparación de pagina web.
          </p>
          <span>Oct 2020 - Nov 2020</span>
        </div>
        <div className='job'>
          <h3>Técnico microinformático</h3>
          <p>- Mantenimiento de sistemas informáticos.<br />
            - Instalación de sistemas operativos.<br />
            - Reparación de impresoras.
          </p>
          <span>Marzo 2015 - Junio 2015</span>
        </div>
      </div>
    </div>
  )
}

export default Experience
