import React from 'react'
import { motion } from 'framer-motion'

export default function Problems() {
  const problems = [
    {
      id: 1,
      title: 'Labor Shortage',
      icon: '👥',
      color: '#FF6B6B',
      stat: '56%',
      description: 'Farmers report labor issues'
    },
    {
      id: 2,
      title: 'Fragmented Tech',
      icon: '⚙️',
      color: '#4ECDC4',
      stat: '100+',
      description: 'Incompatible systems per farm'
    },
    {
      id: 3,
      title: 'Intelligence Gap',
      icon: '🧠',
      color: '#FFE66D',
      stat: '0%',
      description: 'Autonomous coordination'
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
    <section className="problems">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>The Challenge</h2>
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

