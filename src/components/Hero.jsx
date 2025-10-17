import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="hero" id="hero">
      <div className="hero-background">
        <div className="gradient-orb gradient-orb-1"></div>
        <div className="gradient-orb gradient-orb-2"></div>
      </div>

      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="hero-logo-container">
          <img
            src="/KesheratLogo-HQ.png"
            alt="Kesherat"
            className="hero-logo"
          />
        </motion.div>

        <motion.h1 variants={itemVariants} className="hero-title-agentic">
          <span className="gradient-text-large">Agentic Agriculture</span>
        </motion.h1>

        <motion.p variants={itemVariants} className="hero-subtitle">
          We transform Hardware & Data in agents for the use of farmers
        </motion.p>

        <motion.div variants={itemVariants} className="hero-tagline">
          <div className="tag">🌾 Agriculture</div>
          <div className="tag">🔗 Connection</div>
          <div className="tag">⚡ Technology</div>
        </motion.div>

        <motion.div variants={itemVariants} className="hero-buttons">
          <button className="cta-button primary">Get Started</button>
          <button className="cta-button secondary">Learn More</button>
        </motion.div>
      </motion.div>

      <motion.div
        className="hero-scroll"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span>↓</span>
      </motion.div>
    </section>
  )
}

