import React from 'react'
import { motion } from 'framer-motion'

export default function Solution() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="solution">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>The Solution: Kesherat-Link</h2>
          <p className="section-subtitle">A neurological center for agriculture</p>
        </motion.div>

        <motion.div
          className="solution-diagram"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Top row - Irrigation systems, Software, Harvester */}
          <motion.div
            className="diagram-row diagram-row-top"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.span variants={itemVariants} className="diagram-item">Irrigation systems</motion.span>
            <motion.span variants={itemVariants} className="diagram-item">Software</motion.span>
            <motion.span variants={itemVariants} className="diagram-item">Harvester</motion.span>
          </motion.div>

          {/* Connecting line top */}
          <svg className="diagram-svg diagram-svg-top" viewBox="0 0 800 100" preserveAspectRatio="none">
            <path d="M 50 0 Q 50 50, 400 100" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M 750 0 Q 750 50, 400 100" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>

          {/* Middle row - Databases, Autonomous tractor, Robotics */}
          <motion.div
            className="diagram-row diagram-row-middle"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.span variants={itemVariants} className="diagram-item">Databases</motion.span>
            <motion.span variants={itemVariants} className="diagram-item">Autonomous tractor</motion.span>
            <motion.span variants={itemVariants} className="diagram-item">Robotics</motion.span>
          </motion.div>

          {/* Bottom row - AGV, Picker, Human knowledge, Smart Camera */}
          <motion.div
            className="diagram-row diagram-row-bottom"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.span variants={itemVariants} className="diagram-item">AGV</motion.span>
            <motion.span variants={itemVariants} className="diagram-item">Picker</motion.span>
            <motion.span variants={itemVariants} className="diagram-item">Human knowledge</motion.span>
            <motion.span variants={itemVariants} className="diagram-item">Smart Camera</motion.span>
          </motion.div>

          {/* Connecting line bottom */}
          <svg className="diagram-svg diagram-svg-bottom" viewBox="0 0 800 100" preserveAspectRatio="none">
            <path d="M 100 0 Q 100 50, 400 100" stroke="currentColor" strokeWidth="2" fill="none" />
            <path d="M 700 0 Q 700 50, 400 100" stroke="currentColor" strokeWidth="2" fill="none" />
          </svg>

          {/* Center section */}
          <motion.div
            className="diagram-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="diagram-quote">"A neurological center for agriculture"</p>

            <motion.div
              className="kesherat-link-box"
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(16, 185, 129, 0.3)' }}
            >
              <h3 className="kesherat-link-title">
                <span className="kesherat-link-main">Kesherat</span>
                <span className="kesherat-link-sub">-Link</span>
              </h3>
            </motion.div>

            {/* Connecting line down */}
            <svg className="diagram-svg diagram-svg-center" viewBox="0 0 100 80" preserveAspectRatio="none">
              <path d="M 50 0 L 50 80" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>

            <motion.div
              className="diagram-footer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p>Transformation hardware & data, into agents</p>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          className="solution-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3>How It Works</h3>
          <p>A neurological center that connects all agricultural hardware and data into intelligent, autonomous agents.</p>
          <ul>
            <li>Unified platform for all agricultural systems</li>
            <li>Intelligent coordination between devices</li>
            <li>Real-time data integration and analysis</li>
            <li>Autonomous decision-making capabilities</li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

