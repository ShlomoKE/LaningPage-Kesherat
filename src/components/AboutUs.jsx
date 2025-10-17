import React from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'

export default function AboutUs() {
  const { language } = useLanguage()
  const t = translations[language].aboutUs

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
    <section id="about-us" className="about-us-section">
      <div className="container">
        <motion.div
          className="about-us-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="about-us-header">
            <h2>{t.title}</h2>
            <p className="section-subtitle">{t.subtitle}</p>
          </motion.div>

          <div className="about-us-grid">
            <motion.div variants={itemVariants} className="about-card mission-vision">
              <div className="about-item">
                <h3>{t.mission.title}</h3>
                <p>{t.mission.description}</p>
              </div>
              <div className="about-item">
                <h3>{t.vision.title}</h3>
                <p>{t.vision.description}</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="about-card values-card">
              <h3>{t.values.title}</h3>
              <div className="values-grid">
                {t.values.items.map((value, index) => (
                  <div key={index} className="value-item">
                    <h4>{value.title}</h4>
                    <p>{value.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="about-card team-card">
              <h3>{t.team.title}</h3>
              <p>{t.team.description}</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

