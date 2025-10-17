import React from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'

export default function Hero() {
  const { language } = useLanguage()
  const t = translations[language].hero
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="hero" id="hero">
      <div className="hero-background">
        <div className="gradient-orb gradient-orb-1"></div>
        <div className="gradient-orb gradient-orb-2"></div>
      </div>

      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 variants={itemVariants} className="hero-title-agentic">
          <span className="gradient-text-large">{t.title}</span>
        </motion.h1>

        <motion.p variants={itemVariants} className="hero-subtitle">
          {t.subtitle}
        </motion.p>

        <motion.div variants={itemVariants} className="agent-messages-container">
          {t.agentMessages.map((msg, index) => (
            <motion.div
              key={index}
              className="agent-message"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 1 + index * 0.3,
                duration: 0.6,
                ease: 'easeOut'
              }}
            >
              <div className="agent-message-header">
                <span className="agent-icon">🤖</span>
                <span className="agent-name">Hello {msg.agent},</span>
              </div>
              <p className="agent-task">{msg.message}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="hero-buttons">
          <button
            className="cta-button primary"
            onClick={() => {
              const demoSection = document.getElementById('demo')
              if (demoSection) {
                demoSection.scrollIntoView({ behavior: 'smooth' })
              }
            }}
          >
            {t.buttons.getStarted}
          </button>
          <button
            className="cta-button secondary"
            onClick={() => {
              window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })
            }}
          >
            {t.buttons.learnMore}
          </button>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-scroll"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span>↓</span>
      </motion.div>
    </section>
  )
}

