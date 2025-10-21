import React, { useState, useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'

export default function HeroIndustry() {
  const { language } = useLanguage()
  const t = translations[language].heroIndustry
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    const currentMessage = t.rotatingMessages[currentMessageIndex]
    let currentIndex = 0
    setDisplayedText('')
    setIsTyping(true)

    const typingInterval = setInterval(() => {
      if (currentIndex < currentMessage.length) {
        setDisplayedText(currentMessage.substring(0, currentIndex + 1))
        currentIndex++
      } else {
        setIsTyping(false)
        clearInterval(typingInterval)
      }
    }, 30)

    const messageTimeout = setTimeout(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % t.rotatingMessages.length)
    }, currentMessage.length * 30 + 2000)

    return () => {
      clearInterval(typingInterval)
      clearTimeout(messageTimeout)
    }
  }, [currentMessageIndex, t.rotatingMessages])

  const scrollToDemo = () => {
    const demoForm = document.getElementById('demo-form')
    if (demoForm) {
      demoForm.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="hero" id="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="hero-title-main">{t.title.main}</span>
            <span className="hero-title-sub industry-blue">{t.title.sub}</span>
          </h1>

          <div className="typewriter-container">
            <p className="typewriter-text">
              {displayedText}
              <span className="cursor">|</span>
            </p>
          </div>

          <p className="hero-description">
            {t.description}
          </p>

          <button className="hero-cta" onClick={scrollToDemo}>
            {t.cta}
          </button>
        </div>

        <div className="hero-visual">
          <div className="hero-image-container">
            <img
              src="/K1Monitor.png"
              alt="K1 Monitor Dashboard"
              className="hero-image"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

