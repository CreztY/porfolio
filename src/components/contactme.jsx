import CorreoIcon from '../icons/correo-icon'
import './contactme.css'

function Contactme () {
  return (
    <>
      <div className='contactContainer'>
        <div className='contactCard'>
          <div className='contactTitle'>
            <h1><CorreoIcon />Contact Me</h1>
          </div>
          <p>Estoy siempre abierto a nuevas oportunidades y colaboraciones. No dudes en contactarme a través del siguiente formulario o mediante mis redes sociales.</p>
          <button><CorreoIcon />Contactar</button>
          <div className='socialLinks'>
            <h3>O sígueme en:</h3>
            <a href='https://www.linkedin.com/in/ivan-cózar-ramos-a31b47102/' target='_blank' rel='noopener noreferrer'>LinkedIn</a>
            <a href='https://github.com/CreztY' target='_blank' rel='noopener noreferrer'>GitHub</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contactme
