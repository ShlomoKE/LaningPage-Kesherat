import React, { useState, useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { language, toggleLanguage } = useLanguage()
  const t = translations[language].nav

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
          <li><a onClick={() => scrollToSection('problems')}>{t.problems}</a></li>
          <li><a onClick={() => scrollToSection('solution')}>{t.solution}</a></li>
          <li><a onClick={() => scrollToSection('agromonitor')}>{t.agromonitor}</a></li>
          <li><a onClick={() => scrollToSection('kesherat-link')}>{t.kesheratLink}</a></li>
          <li><a onClick={() => scrollToSection('about-us')}>{t.aboutUs}</a></li>
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

