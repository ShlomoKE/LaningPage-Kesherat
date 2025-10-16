import React from 'react'
import { motion } from 'framer-motion'

export default function Features() {
  const features = [
    {
      id: 1,
      title: 'Agnostic Platform',
      description: 'Works with any agricultural hardware and technology stack',
      icon: '🔌'
    },
    {
      id: 2,
      title: 'Manage All Your Tech',
      description: 'Centralized control for all your agricultural systems and devices',
      icon: '🎛️'
    },
    {
      id: 3,
      title: 'Intelligent Agents',
      description: 'AI-powered autonomous agents that make smart decisions',
      icon: '🤖'
    },
    {
      id: 4,
      title: 'Real-time Monitoring',
      description: 'Monitor your entire farm operation in real-time',
      icon: '📊'
    },
    {
      id: 5,
      title: 'Data Integration',
      description: 'Seamlessly integrate data from all your sources',
      icon: '🔗'
    },
    {
      id: 6,
      title: 'Scalable Solution',
      description: 'Grows with your farm from small operations to large enterprises',
      icon: '📈'
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
    <section className="features">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Why Kesherat</h2>
          <p className="section-subtitle">Powerful features designed for modern agriculture</p>
        </motion.div>

        <motion.div
          className="features-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map(feature => (
            <motion.div
              key={feature.id}
              className="feature-card"
              variants={cardVariants}
              whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(126, 200, 80, 0.15)' }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

