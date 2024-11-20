import './presentation.css'
import Cv from '../icons/cv.jsx'
import Li from '../icons/linkedin.jsx'

function Projects () {
  return (
    <>
      <div className='presentationContainer'>
        <div className='presentation'>
          <img className='presentationImg' src='ivan.jpg' alt='ivan cozar ramos' />
          <div className='presentationTitle'>Hola, soy iván cozar</div>
        </div>
        <p className='presentationDescription'>
          Me gustaría postularme para trabajos en programación, gestión de bases de datos y soporte técnico.
        </p>
        <p className='presentationDescription'>
          La informática y la tecnología siempre me han apasionado, por eso me he formado tanto en estudios formales como de manera autodidacta. Tengo conocimientos en varios lenguajes de programación, administración de bases de datos y resolución de problemas técnicos.
        </p>
        <p className='presentationDescription'>
          Estoy muy motivado para aplicar y seguir aprendiendo en un entorno profesional, ya que soy un entusiasta de la tecnología y aprendo rápido.
        </p>

        <div className='presentationButtons'>
          <button
            onClick={() => {
              const link = document.createElement('a')
              link.href = '/curriculum.pdf'
              link.download = 'curriculum.pdf'
              link.click()
            }}
          >
            <Cv />
            CV
          </button>
          <button onClick={() => window.open('https://www.linkedin.com/in/ivan-cózar-ramos-a31b47102/', '_blank')}><Li />LinkedIn</button>
        </div>
      </div>
    </>
  )
}

export default Projects
