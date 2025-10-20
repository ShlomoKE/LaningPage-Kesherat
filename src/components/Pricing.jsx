import React, { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'
import './Pricing.css'

const Pricing = () => {
  const { language } = useLanguage()
  const t = translations[language].pricing
  const [selectedPackage, setSelectedPackage] = useState('allInOne')

  return (
    <section id="pricing" className="pricing-section">
      <div className="pricing-container">
        <div className="pricing-header">
          <h2 className="pricing-title">{t.title}</h2>
          <p className="pricing-subtitle">{t.subtitle}</p>
        </div>

        {/* Package Selector */}
        <div className="package-selector">
          <button
            className={`selector-button ${selectedPackage === 'allInOne' ? 'active' : ''}`}
            onClick={() => setSelectedPackage('allInOne')}
          >
            {t.allInOne.selectorTitle}
          </button>
          <button
            className={`selector-button ${selectedPackage === 'softwareOnly' ? 'active' : ''}`}
            onClick={() => setSelectedPackage('softwareOnly')}
          >
            {t.softwareOnly.selectorTitle}
          </button>
        </div>

        {/* All-in-One Package */}
        {selectedPackage === 'allInOne' && (
          <div className="pricing-content">
            <div className="pricing-card">
              <h3 className="pricing-card-title">{t.allInOne.title}</h3>
              <div className="pricing-price">
                <span className="price-amount">{t.allInOne.price}</span>
                <span className="price-period">{t.allInOne.period}</span>
              </div>
              <p className="contract-note">{t.contractNote}</p>
              <div className="pricing-discount">
                <p>{t.allInOne.discount}</p>
              </div>
              <ul className="pricing-features">
                <li>{t.allInOne.features.sensor}</li>
                <li>{t.allInOne.features.installation}</li>
                <li>{t.allInOne.features.data}</li>
                <li>{t.allInOne.features.platform}</li>
                <li>{t.allInOne.features.secondYear}</li>
              </ul>
              <button className="pricing-button">{t.getStarted}</button>
            </div>
          </div>
        )}

        {/* Software Only Package */}
        {selectedPackage === 'softwareOnly' && (
          <div className="pricing-content">
            <div className="pricing-card">
              <h3 className="pricing-card-title">{t.softwareOnly.title}</h3>
              <div className="pricing-price">
                <span className="price-amount">{t.softwareOnly.price}</span>
                <span className="price-period">{t.softwareOnly.period}</span>
              </div>
              <ul className="pricing-features">
                <li>{t.softwareOnly.features.platform}</li>
                <li>{t.softwareOnly.features.agents}</li>
                <li>{t.softwareOnly.features.dashboard}</li>
                <li>{t.softwareOnly.features.support}</li>
                <li>{t.softwareOnly.features.updates}</li>
              </ul>
              <button className="pricing-button">{t.getStarted}</button>
            </div>
          </div>
        )}

        <div className="pricing-note">
          <p>{t.note}</p>
        </div>
      </div>
    </section>
  )
}

export default Pricing

