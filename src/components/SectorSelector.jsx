import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import './SectorSelector.css'

export default function SectorSelector() {
  const navigate = useNavigate()
  const { language, toggleLanguage } = useLanguage()
  const [hoveredSector, setHoveredSector] = useState(null)

  const handleSectorClick = (sector) => {
    if (sector === 'agriculture') {
      navigate('/agriculture')
    } else if (sector === 'industry') {
      navigate('/industry')
    }
  }

  return (
    <div className="sector-selector">
      {/* Language Selector */}
      <button className="language-toggle-selector" onClick={toggleLanguage}>
        {language === 'en' ? 'ES' : 'EN'}
      </button>

      <div className="sector-container">
        <img
          src="/KesheratLogo-HQ.png"
          alt="Kesherat Logo"
          className="sector-logo"
        />

        <h1 className="sector-tagline">
          {language === 'es'
            ? 'Convertimos el hardware y data en agentes'
            : 'We turn hardware and data into agents'
          }
        </h1>

        <div className="sector-buttons">
          <button
            className="sector-button agriculture"
            onMouseEnter={() => setHoveredSector('agriculture')}
            onMouseLeave={() => setHoveredSector(null)}
            onClick={() => handleSectorClick('agriculture')}
          >
            <span className="sector-label">
              {hoveredSector === 'agriculture' ? 'AGRICULTURE' : (language === 'es' ? 'AGRICULTURA' : 'AGRICULTURE')}
            </span>
          </button>

          <button
            className="sector-button industry"
            onMouseEnter={() => setHoveredSector('industry')}
            onMouseLeave={() => setHoveredSector(null)}
            onClick={() => handleSectorClick('industry')}
          >
            <span className="sector-label">
              {hoveredSector === 'industry' ? 'INDUSTRY' : (language === 'es' ? 'INDUSTRIAL' : 'INDUSTRY')}
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

