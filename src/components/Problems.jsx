import React from 'react'
import { motion } from 'framer-motion'

export default function Problems() {
  const problems = [
    {
      id: 1,
      title: 'Labor Shortage Crisis',
      icon: '👥',
      color: '#FF6B6B',
      points: [
        '9.6 billion people by 2050',
        '56% of farmers report labor issues',
        '155,000 worker shortage in U.S. alone'
      ],
      description: 'Fewer young people are interested in farming while global food demand soars.'
    },
    {
      id: 2,
      title: 'Fragmented Technology',
      icon: '⚙️',
      color: '#4ECDC4',
      points: [
        'Different robots for different tasks',
        'Incompatible platforms',
        'Siloed data systems'
      ],
      description: 'Multiple systems that don\'t communicate, creating inefficiency and complexity.'
    },
    {
      id: 3,
      title: 'Intelligence Gap',
      icon: 'ℹ️',
      color: '#FFE66D',
      points: [
        'Manual coordination required',
        'Limited autonomous decision-making',
        'No unified control system'
      ],
      description: 'Robots and sensors everywhere, but they need more intelligence to work together.'
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
          <p className="section-subtitle">Three critical problems facing modern agriculture</p>
        </motion.div>

        <motion.div
          className="problems-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {problems.map(problem => (
            <motion.div
              key={problem.id}
              className="problem-card"
              variants={cardVariants}
              whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}
            >
              <div className="problem-icon" style={{ color: problem.color }}>
                {problem.icon}
              </div>
              <h3>{problem.title}</h3>
              <ul className="problem-points">
                {problem.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
              <p className="problem-description">{problem.description}</p>
              <div className="card-accent" style={{ backgroundColor: problem.color }}></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

