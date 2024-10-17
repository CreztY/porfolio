import './App.css'
import { useState, useEffect } from 'react'
import Experience from './experience.jsx'
import Header from './header.jsx'
import Projects from './projects.jsx'
import Presentation from './presentation.jsx'
import Sun from './icons/sun.jsx'
import Moon from './icons/moon.jsx'
import Abautme from './abautme.jsx'

function App() {
  const [theme, setTheme] = useState('light')
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const options = {
      root: null,
      threshold: 0.6, // La cantidad visible antes de activar (60%)
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id); // Actualiza la sección activa
        }
      });
    }, options);

    sections.forEach(section => {
      observer.observe(section);
    });

    // Cleanup al desmontar
    return () => {
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  useEffect(() => {
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    setTheme(systemTheme)
    document.documentElement.setAttribute('data-theme', systemTheme)
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
  }

  return (
    <>
      <Header activeSection={activeSection} />
      <main>
        <section>
          <Presentation />
        </section>
        <div>
          <section id='proyects'>
            <Projects />
          </section>
          <section id='experience'>
            <Experience />
          </section>
          <section>
            <Abautme id='about'/>
          </section>
        </div>
        <div className="changeStyle">
        <div className="themeToggleButton">
          {theme === 'light' ? (
            <button onClick={toggleTheme}>
              <Moon />
            </button>
          ) : (
            <button onClick={toggleTheme}>
              <Sun />
            </button>
          )}
        </div>
      </div>
      </main>
    </>
  )
}

export default App
