import AbautLogo from '../icons/abaut-logo'
import './AboutMe.css'

function AboutMe () {
  return (
    <>
      <div className='aboutContainer'>
        <div className='aboutCard'>
          <h1><AbautLogo /> Sobre mí</h1>
          <p>
            Me llamo Ivan Cozar, soy un apasionado de la tecnología y la informática,
            siempre buscando aprender y mejorar mis habilidades. A lo largo de mi carrera,
            he trabajado en programación, gestión de bases de datos y soporte técnico,
            combinando formación formal y autodidacta.
          </p>
          <p>
            Me considero una persona proactiva y con una gran capacidad para adaptarme
            a los cambios rápidos de la tecnología. Estoy emocionado por enfrentar nuevos
            desafíos en un entorno profesional donde pueda seguir creciendo y aportando
            mis conocimientos.
          </p>
        </div>
      </div>
    </>
  )
}

export default AboutMe
