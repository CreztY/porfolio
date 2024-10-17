import './header.css'

function Header ({ activeSection }) {
  return (
    <>
      <header>
        <nav>
          {/* <a href='#presentation' className={activeSection === 'presentation' ? 'active' : ''}>Presentación</a> */}
          <a href='#proyects' className={activeSection === 'proyects' ? 'active' : ''}>Proyectos</a>
          <a href='#experience' className={activeSection === 'experience' ? 'active' : ''}>Experiencia</a>
          <a href='#about' className={activeSection === 'about' ? 'active' : ''}>Sobre mí</a>
          <a href='#contact' className={activeSection === 'contact' ? 'active' : ''}>Contacto</a>
        </nav>
      </header>
    </>
  )
}

Header.propTypes = {
  activeSection: String.isRequired
}

export default Header
