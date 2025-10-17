import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'

export default function Hero() {
  const { language } = useLanguage()
  const t = translations[language].hero
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isTyping, setIsTyping] = useState(true)

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

  // Typewriter effect
  useEffect(() => {
    const currentMessage = t.agentMessages[currentMessageIndex]
    const fullText = `Hello ${currentMessage.agent}, ${currentMessage.message}`

    if (isTyping) {
      if (displayedText.length < fullText.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(fullText.slice(0, displayedText.length + 1))
        }, 50) // Speed of typing
        return () => clearTimeout(timeout)
      } else {
        // Finished typing, wait then start erasing
        const timeout = setTimeout(() => {
          setIsTyping(false)
        }, 2000) // Pause before erasing
        return () => clearTimeout(timeout)
      }
    } else {
      if (displayedText.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1))
        }, 30) // Speed of erasing
        return () => clearTimeout(timeout)
      } else {
        // Finished erasing, move to next message
        setCurrentMessageIndex((prev) => (prev + 1) % t.agentMessages.length)
        setIsTyping(true)
      }
    }
  }, [displayedText, isTyping, currentMessageIndex, t.agentMessages])

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
        <motion.h1 variants={itemVariants} className="hero-title-agentic">
          <span className="gradient-text-large">{t.title}</span>
        </motion.h1>

        <motion.p variants={itemVariants} className="hero-subtitle">
          {t.subtitle}
        </motion.p>

        <motion.div variants={itemVariants} className="typewriter-container">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentMessageIndex}
              className="typewriter-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {displayedText}
              <span className="cursor">|</span>
            </motion.p>
          </AnimatePresence>
        </motion.div>

        <motion.div variants={itemVariants} className="hero-buttons">
          <button
            className="cta-button primary"
            onClick={() => {
              const demoSection = document.getElementById('demo')
              if (demoSection) {
                demoSection.scrollIntoView({ behavior: 'smooth' })
              }
            }}
          >
            {t.buttons.getStarted}
          </button>
          <button
            className="cta-button secondary"
            onClick={() => {
              window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })
            }}
          >
            {t.buttons.learnMore}
          </button>
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

