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

        <motion.div variants={itemVariants} className="hero-connection-diagram">
          {/* SVG Connection Lines */}
          <svg className="connection-lines" viewBox="0 0 800 120" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="lineGradientLeft" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(16, 185, 129, 0.6)" />
                <stop offset="100%" stopColor="rgba(255, 255, 255, 0.9)" />
              </linearGradient>
              <linearGradient id="lineGradientRight" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="rgba(255, 255, 255, 0.9)" />
                <stop offset="100%" stopColor="rgba(59, 130, 246, 0.6)" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                <feMerge>
                  <feMergeNode in="coloredBlur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {/* Lines from Agriculture to Center */}
            <line x1="150" y1="50" x2="380" y2="60" stroke="url(#lineGradientLeft)" strokeWidth="2" opacity="0.7">
              <animate attributeName="opacity" values="0.5;0.9;0.5" dur="3s" repeatCount="indefinite"/>
            </line>
            <line x1="150" y1="60" x2="380" y2="60" stroke="url(#lineGradientLeft)" strokeWidth="2.5" opacity="0.8">
              <animate attributeName="opacity" values="0.6;1;0.6" dur="2.5s" repeatCount="indefinite"/>
            </line>
            <line x1="150" y1="70" x2="380" y2="60" stroke="url(#lineGradientLeft)" strokeWidth="2" opacity="0.7">
              <animate attributeName="opacity" values="0.5;0.9;0.5" dur="3.5s" repeatCount="indefinite"/>
            </line>

            {/* Lines from Center to Technology */}
            <line x1="420" y1="60" x2="650" y2="50" stroke="url(#lineGradientRight)" strokeWidth="2" opacity="0.7">
              <animate attributeName="opacity" values="0.5;0.9;0.5" dur="3s" repeatCount="indefinite"/>
            </line>
            <line x1="420" y1="60" x2="650" y2="60" stroke="url(#lineGradientRight)" strokeWidth="2.5" opacity="0.8">
              <animate attributeName="opacity" values="0.6;1;0.6" dur="2.5s" repeatCount="indefinite"/>
            </line>
            <line x1="420" y1="60" x2="650" y2="70" stroke="url(#lineGradientRight)" strokeWidth="2" opacity="0.7">
              <animate attributeName="opacity" values="0.5;0.9;0.5" dur="3.5s" repeatCount="indefinite"/>
            </line>

            {/* Central Glowing Node */}
            <circle cx="400" cy="60" r="8" fill="white" filter="url(#glow)">
              <animate attributeName="r" values="6;10;6" dur="2s" repeatCount="indefinite"/>
            </circle>
            <circle cx="400" cy="60" r="4" fill="rgba(59, 130, 246, 0.8)">
              <animate attributeName="r" values="3;5;3" dur="2s" repeatCount="indefinite"/>
            </circle>
          </svg>

          {/* Agriculture Node */}
          <div className="connection-node node-left">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2v20M2 12h20M6 6l12 12M6 18L18 6"/>
            </svg>
            <span>{t.tags.agriculture}</span>
          </div>

          {/* Connection Label */}
          <div className="connection-node node-center">
            <div className="center-pulse"></div>
            <span>{t.tags.connection}</span>
          </div>

          {/* Technology Node */}
          <div className="connection-node node-right">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
            </svg>
            <span>{t.tags.technology}</span>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="hero-buttons">
          <button className="cta-button primary">{t.buttons.getStarted}</button>
          <button className="cta-button secondary">{t.buttons.learnMore}</button>
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

