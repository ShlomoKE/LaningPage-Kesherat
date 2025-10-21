import React, { useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { usePackage } from '../contexts/PackageContext'
import { translations } from '../translations'
import './Pricing.css'

const Pricing = () => {
  const { language } = useLanguage()
  const t = translations[language].pricing
  const { setSelectedPackage: setGlobalPackage } = usePackage()
  const [selectedPackage, setSelectedPackage] = useState('allInOne')
  const [showPlatformFeatures, setShowPlatformFeatures] = useState(false)

  const handleGetStarted = (packageName) => {
    setGlobalPackage(packageName)
    // Scroll to demo form
    const demoForm = document.getElementById('demo-form')
    if (demoForm) {
      demoForm.scrollIntoView({ behavior: 'smooth' })
    }
  }

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
                <li>
                  <div className="platform-feature-header">
                    <span>{t.allInOne.features.platform}</span>
                    <button
                      className="expand-button"
                      onClick={() => setShowPlatformFeatures(!showPlatformFeatures)}
                      aria-label={showPlatformFeatures ? t.collapse : t.expand}
                    >
                      {showPlatformFeatures ? '▼' : '▶'}
                    </button>
                  </div>
                  {showPlatformFeatures && (
                    <ul className="platform-features-list">
                      {t.allInOne.platformFeatures.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  )}
                </li>
                <li>{t.allInOne.features.secondYear}</li>
              </ul>
              <button className="pricing-button" onClick={() => handleGetStarted('Paquete Tractor')}>{t.getStarted}</button>
            </div>
          </div>
        )}

        {/* Software Only Package */}
        {selectedPackage === 'softwareOnly' && (
          <div className="pricing-content">
            {/* Software Light */}
            <div className="pricing-card">
              <h3 className="pricing-card-title">{t.softwareLight.title}</h3>
              <div className="pricing-price">
                <span className="price-amount">{t.softwareLight.price}</span>
                <span className="price-period">{t.softwareLight.period}</span>
              </div>
              <p className="package-description">{t.softwareLight.description}</p>
              <ul className="pricing-features">
                {t.softwareLight.platformFeatures.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
                <li>{t.softwareLight.features.support}</li>
                <li>{t.softwareLight.features.updates}</li>
              </ul>
              <button className="pricing-button" onClick={() => handleGetStarted('Light')}>{t.getStarted}</button>
            </div>

            {/* Software Pro */}
            <div className="pricing-card">
              <h3 className="pricing-card-title">{t.softwarePro.title}</h3>
              <div className="pricing-price">
                <span className="price-amount">{t.softwarePro.price}</span>
                <span className="price-period">{t.softwarePro.period}</span>
              </div>
              <div className="device-limits">
                <p>{t.softwarePro.limits.equipment}</p>
              </div>
              <ul className="pricing-features">
                <li>
                  <div className="platform-feature-header">
                    <span>{t.softwarePro.features.platform}</span>
                    <button
                      className="expand-button"
                      onClick={() => setShowPlatformFeatures(!showPlatformFeatures)}
                      aria-label={showPlatformFeatures ? t.collapse : t.expand}
                    >
                      {showPlatformFeatures ? '▼' : '▶'}
                    </button>
                  </div>
                  {showPlatformFeatures && (
                    <ul className="platform-features-list">
                      {t.softwarePro.platformFeatures.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  )}
                </li>
                <li>{t.softwarePro.features.support}</li>
                <li>{t.softwarePro.features.updates}</li>
              </ul>
              <button className="pricing-button" onClick={() => handleGetStarted('Pro')}>{t.getStarted}</button>
            </div>

            {/* Software Deluxe */}
            <div className="pricing-card featured-software">
              <div className="software-badge">{t.mostPopular}</div>
              <h3 className="pricing-card-title">{t.softwareDeluxe.title}</h3>
              <div className="pricing-price">
                <span className="price-amount">{t.softwareDeluxe.price}</span>
                <span className="price-period">{t.softwareDeluxe.period}</span>
              </div>
              <div className="device-limits">
                <p>{t.softwareDeluxe.limits.equipment}</p>
              </div>
              <ul className="pricing-features">
                <li>
                  <div className="platform-feature-header">
                    <span>{t.softwareDeluxe.features.platform}</span>
                    <button
                      className="expand-button"
                      onClick={() => setShowPlatformFeatures(!showPlatformFeatures)}
                      aria-label={showPlatformFeatures ? t.collapse : t.expand}
                    >
                      {showPlatformFeatures ? '▼' : '▶'}
                    </button>
                  </div>
                  {showPlatformFeatures && (
                    <ul className="platform-features-list">
                      {t.softwareDeluxe.platformFeatures.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  )}
                </li>
                <li>{t.softwareDeluxe.features.support}</li>
                <li>{t.softwareDeluxe.features.updates}</li>
                <li>{t.softwareDeluxe.features.training}</li>
              </ul>
              <button className="pricing-button" onClick={() => handleGetStarted('Deluxe')}>{t.getStarted}</button>
            </div>

            {/* Software Enterprise */}
            <div className="pricing-card enterprise">
              <h3 className="pricing-card-title">{t.softwareEnterprise.title}</h3>
              <div className="pricing-price">
                <span className="price-amount">{t.softwareEnterprise.price}</span>
              </div>
              <div className="device-limits unlimited">
                <p>{t.softwareEnterprise.limits.unlimited}</p>
              </div>
              <p className="enterprise-description">{t.softwareEnterprise.description}</p>
              <ul className="pricing-features">
                <li>{t.softwareEnterprise.features.allFeatures}</li>
                <li>{t.softwareEnterprise.features.aiCopilot}</li>
                <li>{t.softwareEnterprise.features.geofencing}</li>
                <li>{t.softwareEnterprise.features.taskManagement}</li>
                <li>{t.softwareEnterprise.features.custom}</li>
                <li>{t.softwareEnterprise.features.dedicated}</li>
                <li>{t.softwareEnterprise.features.sla}</li>
                <li>{t.softwareEnterprise.features.onboarding}</li>
                <li>{t.softwareEnterprise.features.integration}</li>
              </ul>
              <button className="pricing-button enterprise-button" onClick={() => handleGetStarted('Enterprise')}>{t.contactUs}</button>
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

