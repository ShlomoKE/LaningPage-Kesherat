import React from 'react'
import { motion } from 'framer-motion'

export default function Features() {
  const features = [
    {
      id: 1,
      title: 'Agnostic Platform',
      description: 'Works with any hardware',
      icon: '🔌'
    },
    {
      id: 2,
      title: 'Unified Control',
      description: 'Manage all tech in one place',
      icon: '🎛️'
    },
    {
      id: 3,
      title: 'AI Agents',
      description: 'Autonomous smart decisions',
      icon: '🤖'
    },
    {
      id: 4,
      title: 'Real-time Data',
      description: 'Live farm monitoring',
      icon: '📊'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="features" id="features">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Why Kesherat</h2>
        </motion.div>

        <motion.div
          className="features-grid-compact"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map(feature => (
            <motion.div
              key={feature.id}
              className="feature-card-compact"
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="feature-icon-compact">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

