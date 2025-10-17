import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'

export default function Footer() {
  const { language } = useLanguage()
  const t = translations[language].footer

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
              <li><a href="#features">{t.product.features}</a></li>
              <li><a href="#pricing">{t.product.pricing}</a></li>
              <li><a href="#docs">{t.product.docs}</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>{t.company.title}</h4>
            <ul>
              <li><a href="#about">{t.company.about}</a></li>
              <li><a href="#blog">{t.company.blog}</a></li>
              <li><a href="#contact">{t.company.contact}</a></li>
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

