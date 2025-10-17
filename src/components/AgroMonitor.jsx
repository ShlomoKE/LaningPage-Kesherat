import React from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'

export default function AgroMonitor() {
  const { language } = useLanguage()
  const t = translations[language].agromonitor
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
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

  const agentExamples = [
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="2"/>
          <path d="M12 1v6m0 6v6M1 12h6m6 0h6"/>
          <circle cx="12" cy="12" r="10"/>
        </svg>
      ),
      title: t.agents.sensors.title,
      description: t.agents.sensors.description,
      color: '#10b981'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="11" width="18" height="10" rx="2"/>
          <circle cx="8" cy="16" r="2"/>
          <circle cx="16" cy="16" r="2"/>
          <path d="M18 11V8a2 2 0 0 0-2-2h-3"/>
          <path d="M5 11V6a1 1 0 0 1 1-1h4"/>
        </svg>
      ),
      title: t.agents.machinery.title,
      description: t.agents.machinery.description,
      color: '#f59e0b'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/>
          <path d="M2 17l10 5 10-5"/>
          <path d="M2 12l10 5 10-5"/>
        </svg>
      ),
      title: t.agents.drones.title,
      description: t.agents.drones.description,
      color: '#3b82f6'
    },
    {
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/>
          <line x1="2" y1="12" x2="22" y2="12"/>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
        </svg>
      ),
      title: t.agents.external.title,
      description: t.agents.external.description,
      color: '#8b5cf6'
    }
  ]

  return (
    <section className="agromonitor" id="agromonitor">
      <motion.div
        className="agromonitor-content"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={itemVariants} className="agromonitor-header">
          <h2>{t.title}</h2>
          <p className="section-subtitle">
            {t.subtitle}
          </p>
          <p className="agromonitor-description">
            {t.description}
          </p>
        </motion.div>

        <div className="agromonitor-two-column">
          {/* Left Column: Agent Cards + Platform Features */}
          <div className="agromonitor-left">
            <motion.div
              className="agents-grid-professional"
              variants={containerVariants}
            >
              {agentExamples.map((agent, index) => (
                <motion.div
                  key={index}
                  className="agent-card-professional"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="agent-icon-professional" style={{ color: agent.color }}>
                    {agent.icon}
                  </div>
                  <h4>{agent.title}</h4>
                  <p>{agent.description}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="agromonitor-platform-features">
              <div className="platform-features-grid">
                <div className="feature-card-professional">
                  <img src="/AICopilot.png" alt={t.platform.aiCopilot} />
                  <h4>{t.platform.aiCopilot}</h4>
                </div>
                <div className="feature-card-professional">
                  <img src="/Task.png" alt={t.platform.taskManagement} />
                  <h4>{t.platform.taskManagement}</h4>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Main Visual */}
          <motion.div variants={itemVariants} className="agromonitor-right">
            <div className="agromonitor-main-visual">
              <img
                src="/AgromonitorViewPC.png"
                alt="AgroMonitor Dashboard"
                className="agromonitor-screenshot"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

