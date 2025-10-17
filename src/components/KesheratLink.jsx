import React from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'

export default function KesheratLink() {
  const { language } = useLanguage()
  const t = translations[language].kesheratLink

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  return (
    <section id="kesherat-link" className="kesherat-link-section">
      <div className="container">
        <motion.div
          className="kesherat-link-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="kesherat-link-header">
            <h2>{t.title}</h2>
            <p className="section-subtitle">{t.subtitle}</p>
            <p className="kesherat-link-description">{t.description}</p>
          </motion.div>

          <div className="kesherat-link-grid">
            <motion.div variants={itemVariants} className="kesherat-link-card">
              <h3>{t.features.title}</h3>
              <ul className="feature-list">
                {t.features.items.map((item, index) => (
                  <li key={index}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={itemVariants} className="kesherat-link-card">
              <h3>{t.benefits.title}</h3>
              <ul className="feature-list">
                {t.benefits.items.map((item, index) => (
                  <li key={index}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="kesherat-link-visual">
            <img src="/Kesherat-Link.png" alt="Kesherat-Link Platform" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

