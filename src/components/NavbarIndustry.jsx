import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'

export default function NavbarIndustry() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { language, toggleLanguage } = useLanguage()
  const navigate = useNavigate()
  const t = translations[language].navIndustry

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

  const goHome = () => {
    navigate('/')
  }

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo" onClick={goHome} style={{ cursor: 'pointer' }}>
          <img src="/KesheratLogo.png" alt="Kesherat" className="navbar-logo-img" />
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
          <li><a onClick={() => scrollToSection('hero')}>{t.home}</a></li>
          <li><a onClick={() => scrollToSection('k1-monitor')}>{t.k1Monitor}</a></li>
          <li><a onClick={() => scrollToSection('custom-projects')}>{t.customProjects}</a></li>
          <li><a onClick={() => scrollToSection('demo-form')} className="nav-cta">{t.requestDemo}</a></li>
          <li>
            <button onClick={toggleLanguage} className="language-toggle" aria-label="Toggle language">
              {language === 'en' ? '🇪🇸 ES' : '🇺🇸 EN'}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  )
}

