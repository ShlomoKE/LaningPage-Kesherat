import React from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'
import './Marketplace.css'

export default function Marketplace() {
  const { language } = useLanguage()
  const t = translations[language].marketplace

  const scrollToDemo = () => {
    const demoForm = document.getElementById('demo-form')
    if (demoForm) {
      demoForm.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  }

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  }

  return (
    <section className="marketplace" id="marketplace">
      <div className="marketplace-container">
        <motion.h2
          className="marketplace-title"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {t.title}
        </motion.h2>
        <motion.p
          className="marketplace-subtitle"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {t.subtitle}
        </motion.p>

        <motion.div
          className="marketplace-cards"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div className="marketplace-card" variants={cardVariants}>
            <div className="marketplace-badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span>{language === 'en' ? 'Verified Partner' : 'Partner Verificado'}</span>
            </div>
            <div className="marketplace-image-container picking-bg">
              <div className="marketplace-icon-container">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                  <path d="M2 17l10 5 10-5"/>
                  <path d="M2 12l10 5 10-5"/>
                </svg>
              </div>
              <div className="marketplace-overlay">
                <h3 className="marketplace-card-title">{t.picking.category}</h3>
              </div>
            </div>
            <div className="marketplace-card-content">
              <h4 className="marketplace-company-name">{t.picking.title}</h4>
              <ul className="marketplace-features">
                {t.picking.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <button className="marketplace-cta" onClick={scrollToDemo}>
                {t.learnMoreButton}
              </button>
            </div>
          </motion.div>

          <motion.div className="marketplace-card" variants={cardVariants}>
            <div className="marketplace-badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span>{language === 'en' ? 'Verified Partner' : 'Partner Verificado'}</span>
            </div>
            <div className="marketplace-image-container gps-bg">
              <div className="marketplace-icon-container">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <circle cx="12" cy="12" r="3"/>
                  <line x1="12" y1="2" x2="12" y2="4"/>
                  <line x1="12" y1="20" x2="12" y2="22"/>
                  <line x1="4.93" y1="4.93" x2="6.34" y2="6.34"/>
                  <line x1="17.66" y1="17.66" x2="19.07" y2="19.07"/>
                  <line x1="2" y1="12" x2="4" y2="12"/>
                  <line x1="20" y1="12" x2="22" y2="12"/>
                  <line x1="4.93" y1="19.07" x2="6.34" y2="17.66"/>
                  <line x1="17.66" y1="6.34" x2="19.07" y2="4.93"/>
                </svg>
              </div>
              <div className="marketplace-overlay">
                <h3 className="marketplace-card-title">{t.gps.category}</h3>
              </div>
            </div>
            <div className="marketplace-card-content">
              <h4 className="marketplace-company-name">{t.gps.title}</h4>
              <ul className="marketplace-features">
                {t.gps.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <button className="marketplace-cta" onClick={scrollToDemo}>
                {t.learnMoreButton}
              </button>
            </div>
          </motion.div>

          <motion.div className="marketplace-card" variants={cardVariants}>
            <div className="marketplace-badge">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <span>{language === 'en' ? 'Verified Partner' : 'Partner Verificado'}</span>
            </div>
            <div className="marketplace-image-container yield-bg">
              <div className="marketplace-icon-container">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="12" y1="20" x2="12" y2="10"/>
                  <line x1="18" y1="20" x2="18" y2="4"/>
                  <line x1="6" y1="20" x2="6" y2="16"/>
                </svg>
              </div>
              <div className="marketplace-overlay">
                <h3 className="marketplace-card-title">{t.yield.category}</h3>
              </div>
            </div>
            <div className="marketplace-card-content">
              <h4 className="marketplace-company-name">{t.yield.title}</h4>
              <ul className="marketplace-features">
                {t.yield.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <button className="marketplace-cta" onClick={scrollToDemo}>
                {t.learnMoreButton}
              </button>
            </div>
          </motion.div>

          <motion.div className="marketplace-card partner-cta-card" variants={cardVariants}>
            <div className="marketplace-image-container partner-bg">
              <div className="marketplace-icon-container">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <div className="marketplace-overlay">
                <h3 className="marketplace-card-title">{t.becomePartner.title}</h3>
              </div>
            </div>
            <div className="marketplace-card-content">
              <h4 className="marketplace-company-name">{t.becomePartner.title}</h4>
              <p className="marketplace-description">{t.becomePartner.description}</p>
              <button className="marketplace-cta" onClick={scrollToDemo}>
                {t.becomePartner.ctaButton}
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

