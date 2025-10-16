import React from 'react'

export default function Features() {
  const features = [
    {
      id: 1,
      title: 'Agnostic Platform',
      description: 'Works with any agricultural hardware and technology stack'
    },
    {
      id: 2,
      title: 'Manage All Your Tech',
      description: 'Centralized control for all your agricultural systems and devices'
    },
    {
      id: 3,
      title: 'Intelligent Agents',
      description: 'AI-powered autonomous agents that make smart decisions'
    },
    {
      id: 4,
      title: 'Real-time Monitoring',
      description: 'Monitor your entire farm operation in real-time'
    },
    {
      id: 5,
      title: 'Data Integration',
      description: 'Seamlessly integrate data from all your sources'
    },
    {
      id: 6,
      title: 'Scalable Solution',
      description: 'Grows with your farm from small operations to large enterprises'
    }
  ]

  return (
    <section className="features">
      <div className="container">
        <h2>Why Kesherat</h2>
        <div className="features-grid">
          {features.map(feature => (
            <div key={feature.id} className="feature-card">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

