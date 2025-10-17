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
      icon: '🌡️',
      title: t.agents.soilSensors.title,
      description: t.agents.soilSensors.description,
      color: '#10b981'
    },
    {
      icon: '🛰️',
      title: t.agents.satelliteData.title,
      description: t.agents.satelliteData.description,
      color: '#3b82f6'
    },
    {
      icon: '🚜',
      title: t.agents.machinery.title,
      description: t.agents.machinery.description,
      color: '#f59e0b'
    },
    {
      icon: '☁️',
      title: t.agents.weatherStations.title,
      description: t.agents.weatherStations.description,
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
        </motion.div>

        <div className="agromonitor-two-column">
          {/* Left Column: Agent Cards */}
          <div className="agromonitor-left">
            <motion.div
              className="agents-grid-compact"
              variants={containerVariants}
            >
              {agentExamples.map((agent, index) => (
                <motion.div
                  key={index}
                  className="agent-card-compact"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="agent-icon-compact" style={{ color: agent.color }}>
                    {agent.icon}
                  </div>
                  <h4>{agent.title}</h4>
                  <p>{agent.description}</p>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants} className="agromonitor-platform-compact">
              <div className="platform-features-visual-compact">
                <div className="feature-image-card-compact">
                  <img src="/AICopilot.png" alt={t.platform.aiCopilot} />
                  <h4>🤖 {t.platform.aiCopilot}</h4>
                </div>
                <div className="feature-image-card-compact">
                  <img src="/Task.png" alt={t.platform.taskManagement} />
                  <h4>✅ {t.platform.taskManagement}</h4>
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

