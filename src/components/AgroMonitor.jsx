import React from 'react'
import { motion } from 'framer-motion'

export default function AgroMonitor() {
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
      title: 'Soil Sensors',
      description: 'Analyze humidity, pH & nutrients',
      color: '#10b981'
    },
    {
      icon: '🛰️',
      title: 'Satellite Data',
      description: 'Monitor crops & predict yields',
      color: '#3b82f6'
    },
    {
      icon: '🚜',
      title: 'Machinery',
      description: 'Optimize routes & maintenance',
      color: '#f59e0b'
    },
    {
      icon: '☁️',
      title: 'Weather Stations',
      description: 'Predict conditions & alerts',
      color: '#8b5cf6'
    }
  ]

  return (
    <section className="agromonitor">
      <motion.div
        className="agromonitor-content"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={itemVariants} className="agromonitor-header">
          <h2>AgroMonitor</h2>
          <p className="section-subtitle">
            Transform hardware into <span className="highlight-text">intelligent agents</span>
          </p>
        </motion.div>

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

        <motion.div variants={itemVariants} className="agromonitor-main-visual">
          <img
            src="/AgromonitorViewPC.png"
            alt="AgroMonitor Dashboard"
            className="agromonitor-screenshot"
          />
        </motion.div>

        <motion.div variants={itemVariants} className="agromonitor-platform-compact">
          <div className="platform-features-visual-compact">
            <div className="feature-image-card-compact">
              <img src="/AICopilot.png" alt="AI Copilot" />
              <h4>🤖 AI Copilot</h4>
            </div>
            <div className="feature-image-card-compact">
              <img src="/Task.png" alt="Task Management" />
              <h4>✅ Task Management</h4>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

