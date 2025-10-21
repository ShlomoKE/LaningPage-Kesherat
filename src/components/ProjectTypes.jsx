import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'
import './ProjectTypes.css'

export default function ProjectTypes() {
  const { language } = useLanguage()
  const t = translations[language].projectTypes

  const scrollToDemo = () => {
    const demoForm = document.getElementById('demo-form')
    if (demoForm) {
      demoForm.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="project-types" id="custom-projects">
      <div className="project-types-container">
        <h2 className="project-types-title">{t.title}</h2>
        
        <div className="project-cards">
          <div className="project-card">
            <div className="project-image-container automation-bg">
              <div className="project-overlay">
                <h3 className="project-card-title">{t.automation.title}</h3>
              </div>
            </div>
            <div className="project-card-content">
              <p className="project-description">{t.automation.description}</p>
              <button className="project-cta" onClick={scrollToDemo}>
                {t.quoteButton}
              </button>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image-container circuits-bg">
              <div className="project-overlay">
                <h3 className="project-card-title">{t.circuits.title}</h3>
              </div>
            </div>
            <div className="project-card-content">
              <p className="project-description">{t.circuits.description}</p>
              <button className="project-cta" onClick={scrollToDemo}>
                {t.quoteButton}
              </button>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image-container monitoring-bg">
              <div className="project-overlay">
                <h3 className="project-card-title">{t.monitoring.title}</h3>
              </div>
            </div>
            <div className="project-card-content">
              <p className="project-description">{t.monitoring.description}</p>
              <button className="project-cta" onClick={scrollToDemo}>
                {t.quoteButton}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

