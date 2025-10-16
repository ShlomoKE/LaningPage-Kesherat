import React from 'react'
import { motion } from 'framer-motion'

export default function Solution() {
  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      },
    }),
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

        <div className="solution-funnel">
          {/* SVG Funnel Lines */}
          <svg className="funnel-svg" viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid meet">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(99, 102, 241, 0.4)" />
                <stop offset="100%" stopColor="rgba(16, 185, 129, 0.4)" />
              </linearGradient>
            </defs>

            {/* Left funnel curve */}
            <path
              d="M 100 80 Q 80 80, 80 200 L 80 280 Q 80 350, 200 420 L 400 500"
              stroke="url(#lineGradient)"
              strokeWidth="2.5"
              fill="none"
              opacity="0.6"
            />

            {/* Right funnel curve */}
            <path
              d="M 1100 80 Q 1120 80, 1120 200 L 1120 280 Q 1120 350, 1000 420 L 800 500"
              stroke="url(#lineGradient)"
              strokeWidth="2.5"
              fill="none"
              opacity="0.6"
            />

            {/* Connecting lines from each item to center */}
            {/* Row 1 - 5 items */}
            <path d="M 150 100 L 600 480" stroke="rgba(99, 102, 241, 0.15)" strokeWidth="1.5" fill="none" />
            <path d="M 350 100 L 600 480" stroke="rgba(99, 102, 241, 0.15)" strokeWidth="1.5" fill="none" />
            <path d="M 600 100 L 600 480" stroke="rgba(99, 102, 241, 0.15)" strokeWidth="1.5" fill="none" />
            <path d="M 850 100 L 600 480" stroke="rgba(99, 102, 241, 0.15)" strokeWidth="1.5" fill="none" />
            <path d="M 1050 100 L 600 480" stroke="rgba(99, 102, 241, 0.15)" strokeWidth="1.5" fill="none" />

            {/* Row 2 - 5 items */}
            <path d="M 150 200 L 600 480" stroke="rgba(99, 102, 241, 0.15)" strokeWidth="1.5" fill="none" />
            <path d="M 350 200 L 600 480" stroke="rgba(99, 102, 241, 0.15)" strokeWidth="1.5" fill="none" />
            <path d="M 600 200 L 600 480" stroke="rgba(99, 102, 241, 0.15)" strokeWidth="1.5" fill="none" />
            <path d="M 850 200 L 600 480" stroke="rgba(99, 102, 241, 0.15)" strokeWidth="1.5" fill="none" />
            <path d="M 1050 200 L 600 480" stroke="rgba(99, 102, 241, 0.15)" strokeWidth="1.5" fill="none" />

            {/* Row 3 - 6 items */}
            <path d="M 100 300 L 600 480" stroke="rgba(99, 102, 241, 0.15)" strokeWidth="1.5" fill="none" />
            <path d="M 280 300 L 600 480" stroke="rgba(99, 102, 241, 0.15)" strokeWidth="1.5" fill="none" />
            <path d="M 460 300 L 600 480" stroke="rgba(99, 102, 241, 0.15)" strokeWidth="1.5" fill="none" />
            <path d="M 640 300 L 600 480" stroke="rgba(99, 102, 241, 0.15)" strokeWidth="1.5" fill="none" />
            <path d="M 820 300 L 600 480" stroke="rgba(99, 102, 241, 0.15)" strokeWidth="1.5" fill="none" />
            <path d="M 1000 300 L 600 480" stroke="rgba(99, 102, 241, 0.15)" strokeWidth="1.5" fill="none" />

            {/* Arrow down from Kesherat box */}
            <path
              d="M 600 650 L 600 720"
              stroke="rgba(16, 185, 129, 0.5)"
              strokeWidth="3"
              fill="none"
              markerEnd="url(#arrowhead)"
            />

            <defs>
              <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
                <polygon points="0 0, 10 5, 0 10" fill="rgba(16, 185, 129, 0.5)" />
              </marker>
            </defs>
          </svg>

          {/* Row 1 - Top */}
          <div className="funnel-row funnel-row-1">
            <motion.div custom={0} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="funnel-item">
              Irrigation systems
            </motion.div>
            <motion.div custom={1} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="funnel-item">
              Software
            </motion.div>
            <motion.div custom={2} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="funnel-item">
              Harvester
            </motion.div>
            <motion.div custom={3} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="funnel-item">
              Soil Sensors
            </motion.div>
            <motion.div custom={4} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="funnel-item">
              Weather Stations
            </motion.div>
          </div>

          {/* Row 2 - Middle */}
          <div className="funnel-row funnel-row-2">
            <motion.div custom={5} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="funnel-item">
              Databases
            </motion.div>
            <motion.div custom={6} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="funnel-item">
              Autonomous tractor
            </motion.div>
            <motion.div custom={7} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="funnel-item">
              Robotics
            </motion.div>
            <motion.div custom={8} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="funnel-item">
              Drones
            </motion.div>
            <motion.div custom={9} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="funnel-item">
              Satellite Data
            </motion.div>
          </div>

          {/* Row 3 - Bottom */}
          <div className="funnel-row funnel-row-3">
            <motion.div custom={10} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="funnel-item">
              AGV
            </motion.div>
            <motion.div custom={11} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="funnel-item">
              Picker
            </motion.div>
            <motion.div custom={12} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="funnel-item">
              Human knowledge
            </motion.div>
            <motion.div custom={13} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="funnel-item">
              Smart Camera
            </motion.div>
            <motion.div custom={14} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="funnel-item">
              IoT Devices
            </motion.div>
            <motion.div custom={15} variants={itemVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="funnel-item">
              GPS Systems
            </motion.div>
          </div>

          {/* Quote */}
          <motion.p
            className="funnel-quote"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
          >
            "A neurological center for agriculture"
          </motion.p>

          {/* Kesherat-Link Box */}
          <motion.div
            className="kesherat-box"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.7, type: "spring" }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 40px 80px rgba(16, 185, 129, 0.3)',
              transition: { duration: 0.3 }
            }}
          >
            <img
              src="/Kesherat-Link.png"
              alt="Kesherat-Link"
              className="kesherat-logo"
            />
          </motion.div>

          {/* Bottom Result Box */}
          <motion.div
            className="result-box"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p>Transformation hardware & data, into agents</p>
          </motion.div>
        </div>

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

