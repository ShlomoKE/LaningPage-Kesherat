import React from 'react'
import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'

export default function Problems() {
  const { language } = useLanguage()
  const t = translations[language].problems

  const problems = [
    {
      id: 1,
      title: t.problem1.title,
      icon: '📊',
      color: '#2563eb',
      stat: 'TB',
      description: t.problem1.description
    },
    {
      id: 2,
      title: t.problem2.title,
      icon: '🔇',
      color: '#7c3aed',
      stat: '85%',
      description: t.problem2.description
    },
    {
      id: 3,
      title: t.problem3.title,
      icon: '⏱️',
      color: '#0891b2',
      stat: '40hrs',
      description: t.problem3.description
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="problems" id="problems">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>{t.title}</h2>
          <p className="section-subtitle">{t.subtitle}</p>
        </motion.div>

        <motion.div
          className="problems-grid-compact"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {problems.map(problem => (
            <motion.div
              key={problem.id}
              className="problem-card-compact"
              variants={cardVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="problem-icon-compact" style={{ color: problem.color }}>
                {problem.icon}
              </div>
              <div className="problem-stat" style={{ color: problem.color }}>
                {problem.stat}
              </div>
              <h3>{problem.title}</h3>
              <p>{problem.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

