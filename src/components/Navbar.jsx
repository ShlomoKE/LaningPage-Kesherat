import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { language, toggleLanguage } = useLanguage()
  const navigate = useNavigate()
  const location = useLocation()
  const t = translations[language].nav

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigateToSection = (sectionId) => {
    setMobileMenuOpen(false)

    if (location.pathname === '/agriculture') {
      // Si ya estamos en agriculture, solo hacer scroll
      const element = document.getElementById(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      // Si estamos en otra página, navegar a agriculture y luego hacer scroll
      navigate('/agriculture')
      setTimeout(() => {
        const element = document.getElementById(sectionId)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  }

  const goHome = () => {
    navigate('/')
  }

  const goToMarketplace = () => {
    navigate('/marketplace')
    setMobileMenuOpen(false)
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
          <li><a onClick={() => navigateToSection('hero')}>{t.home}</a></li>
          <li><a onClick={() => navigateToSection('agromonitor')}>{t.agromonitor}</a></li>
          <li><a onClick={goToMarketplace}>{t.marketplace}</a></li>
          <li><a href={language === 'en' ? '/kesherat-link.html' : '/kesherat-link-es.html'}>{t.kesheratLink}</a></li>
          <li><a onClick={() => navigateToSection('pricing')}>{t.pricing}</a></li>
          <li><a href={language === 'en' ? '/about-us.html' : '/about-us-es.html'}>{t.aboutUs}</a></li>
          <li><a onClick={() => navigateToSection('demo-form')} className="nav-cta">{t.requestDemo}</a></li>
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

