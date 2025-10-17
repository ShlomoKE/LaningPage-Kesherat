import React, { useState } from 'react'

export default function DemoForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    farmSize: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&")
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Submit to Netlify Forms
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "demo-request", ...formData })
    })
      .then(() => {
        console.log('Form successfully submitted to Netlify')
        setSubmitted(true)

        // Reset form after 3 seconds
        setTimeout(() => {
          setFormData({
            name: '',
            email: '',
            company: '',
            phone: '',
            farmSize: '',
            message: ''
          })
          setSubmitted(false)
        }, 3000)
      })
      .catch(error => {
        console.error('Form submission error:', error)
        alert('Hubo un error al enviar el formulario. Por favor intenta de nuevo.')
      })
  }

  const whyFeatures = [
    {
      id: 1,
      title: 'Agnostic Platform',
      description: 'Works with any hardware',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
        </svg>
      )
    },
    {
      id: 2,
      title: 'Unified Control',
      description: 'Manage all tech in one place',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3"/>
          <path d="M12 1v6m0 6v6M1 12h6m6 0h6"/>
          <circle cx="12" cy="12" r="10"/>
        </svg>
      )
    },
    {
      id: 3,
      title: 'AI Agents',
      description: 'Autonomous smart decisions',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="11" width="18" height="10" rx="2"/>
          <circle cx="12" cy="5" r="2"/>
          <path d="M12 7v4"/>
          <line x1="8" y1="16" x2="8" y2="16"/>
          <line x1="16" y1="16" x2="16" y2="16"/>
        </svg>
      )
    },
    {
      id: 4,
      title: 'Real-time Data',
      description: 'Live farm monitoring',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="18" y1="20" x2="18" y2="10"/>
          <line x1="12" y1="20" x2="12" y2="4"/>
          <line x1="6" y1="20" x2="6" y2="14"/>
        </svg>
      )
    }
  ]

  return (
    <section className="demo-form-section" id="demo-form">
      <div className="container">
        <div className="demo-form-header">
          <h2>Request a Demo</h2>
          <p>See how Kesherat can transform your agricultural operations into an intelligent, autonomous system</p>
        </div>

        <div className="demo-two-column">
          <div className="demo-form-container">
            {submitted ? (
              <div className="form-success">
                <div className="success-icon">✓</div>
                <h3>Thank You!</h3>
                <p>We've received your request. Our team will contact you within 24 hours to schedule your personalized demo.</p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="demo-form"
                name="demo-request"
                method="POST"
              >
              {/* Hidden input for Netlify */}
              <input type="hidden" name="form-name" value="demo-request" />

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="company">Company/Farm Name *</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    placeholder="Your Farm Name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="farmSize">Farm Size (hectares)</label>
                <select
                  id="farmSize"
                  name="farmSize"
                  value={formData.farmSize}
                  onChange={handleChange}
                >
                  <option value="">Select farm size</option>
                  <option value="0-50">0-50 hectares</option>
                  <option value="50-200">50-200 hectares</option>
                  <option value="200-500">200-500 hectares</option>
                  <option value="500+">500+ hectares</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="message">Tell us about your needs</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="What challenges are you facing? What technologies do you currently use?"
                ></textarea>
              </div>

              <button type="submit" className="form-submit-btn">
                Request Demo
                <span className="btn-arrow">→</span>
              </button>

              <p className="form-privacy">
                By submitting this form, you agree to our Privacy Policy. We'll only use your information to schedule your demo.
              </p>
            </form>
          )}
          </div>

          <div className="demo-why-section">
            <h3>Why Kesherat</h3>
            <div className="why-features-list">
              {whyFeatures.map(feature => (
                <div key={feature.id} className="why-feature-item">
                  <div className="why-feature-icon">{feature.icon}</div>
                  <div className="why-feature-content">
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

