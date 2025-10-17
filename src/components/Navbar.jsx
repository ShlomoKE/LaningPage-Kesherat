import React, { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="logo-text">Kesherat</span>
          <span className="logo-tagline">Agentic Agriculture</span>
        </div>

        <button 
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <li><a onClick={() => scrollToSection('hero')}>Home</a></li>
          <li><a onClick={() => scrollToSection('problems')}>Problems</a></li>
          <li><a onClick={() => scrollToSection('solution')}>Solution</a></li>
          <li><a onClick={() => scrollToSection('features')}>Features</a></li>
          <li><a onClick={() => scrollToSection('demo-form')} className="nav-cta">Request Demo</a></li>
        </ul>
      </div>
    </nav>
  )
}

