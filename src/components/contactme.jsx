import CorreoIcon from '../icons/correo-icon'
import Github from '../icons/github'
import LinkedIn from '../icons/linkedin'
import './contactme.css'

function Contactme () {
  const handleContactClick = () => {
    window.location.href = 'mailto:ivi.cozar01@gmail.com?subject=Contacto'
  }

  return (
    <>
      <div className='contactContainer'>
        <div className='contactCard'>
          <div className='contactTitle'>
            <h1>Contacto</h1>
          </div>
          <p>Estoy siempre abierto a nuevas oportunidades y colaboraciones.</p>
          <p>No dudes en contactarme a través de mi correo, o mediante mis redes sociales.</p>
          <button onClick={handleContactClick}>
            <CorreoIcon /> Contactar
          </button>
          <div className='socialLink'>
            <h3>O sígueme en:</h3>
            <div className='socialLinks'>
              <a href='https://www.linkedin.com/in/ivan-cózar-ramos-a31b47102/' target='_blank' rel='noopener noreferrer'>
                <LinkedIn /> LinkedIn
              </a>
              <a href='https://github.com/CreztY' target='_blank' rel='noopener noreferrer'>
                <Github /> GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contactme
