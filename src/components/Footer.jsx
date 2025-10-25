import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'

export default function Footer() {
  const { language } = useLanguage()
  const t = translations[language].footer
  const navigate = useNavigate()
  const location = useLocation()

  const handleNavigation = (e, path) => {
    e.preventDefault()

    // If we're on marketplace page, go back to agriculture first
    if (location.pathname === '/marketplace') {
      navigate('/agriculture')
      setTimeout(() => {
        const element = document.getElementById(path.replace('#', ''))
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else {
      const element = document.getElementById(path.replace('#', ''))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Kesherat</h4>
            <p>{t.tagline}</p>
          </div>
          <div className="footer-section">
            <h4>{t.product.title}</h4>
            <ul>
              <li><a href="#solution" onClick={(e) => handleNavigation(e, '#solution')}>{t.product.features}</a></li>
              <li><a href="#pricing" onClick={(e) => handleNavigation(e, '#pricing')}>{t.product.pricing}</a></li>
              <li><a href="#agromonitor" onClick={(e) => handleNavigation(e, '#agromonitor')}>{t.product.docs}</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>{t.company.title}</h4>
            <ul>
              <li><a href="#about-us" onClick={(e) => handleNavigation(e, '#about-us')}>{t.company.about}</a></li>
              <li><a href="#marketplace" onClick={(e) => { e.preventDefault(); navigate('/marketplace'); }}>{t.company.blog}</a></li>
              <li><a href="#demo-form" onClick={(e) => handleNavigation(e, '#demo-form')}>{t.company.contact}</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>{t.legal.title}</h4>
            <ul>
              <li><a href="#privacy">{t.legal.privacy}</a></li>
              <li><a href="#terms">{t.legal.terms}</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>{t.copyright}</p>
        </div>
      </div>
    </footer>
  )
}

