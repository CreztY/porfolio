import './App.css'
import { useState, useEffect } from 'react'
import Experience from './components/experience.jsx'
import Header from './components/header.jsx'
import Projects from './components/projects.jsx'
import Presentation from './components/presentation.jsx'
import Abautme from './components/abautme.jsx'
import Contactme from './components/contactme.jsx'
import Footer from './components/Footer.jsx'

import Sun from './icons/sun.jsx'
import Moon from './icons/moon.jsx'

function App () {
  const [theme, setTheme] = useState('light')
  const [activeSection, setActiveSection] = useState('presentation')

  useEffect(() => {
    const sections = document.querySelectorAll('section')
    const options = {
      root: null,
      threshold: 0.6
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, options)

    sections.forEach(section => {
      observer.observe(section)
    })

    return () => {
      sections.forEach(section => observer.unobserve(section))
    }
  }, [])

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
        <section id='presentation'>
          <Presentation />
        </section>
        <section id='projects'>
          <Projects />
        </section>
        <section id='experience'>
          <Experience />
        </section>
        <section id='about'>
          <Abautme id='about' />
        </section>
        <section id='contact'>
          <Contactme id='contact' />
        </section>
      </main>
      <Footer />
      <div className='changeStyle'>
        <div className='themeToggleButton'>
          {theme === 'light'
            ? (
              <button onClick={toggleTheme}>
                <Moon />
              </button>
              )
            : (
              <button onClick={toggleTheme}>
                <Sun />
              </button>
              )}
        </div>
      </div>
    </>
  )
}

export default App
