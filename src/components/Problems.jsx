import React from 'react'

export default function Problems() {
  const problems = [
    {
      id: 1,
      title: 'Labor Shortage Crisis',
      icon: '👥',
      points: [
        '9.6 billion people by 2050',
        '56% of farmers report labor issues',
        '155,000 worker shortage in U.S. alone'
      ],
      description: 'Fewer young people are interested in farming while global food demand soars.'
    },
    {
      id: 2,
      title: 'Fragmented Technology',
      icon: '⚙️',
      points: [
        'Different robots for different tasks',
        'Incompatible platforms',
        'Siloed data systems'
      ],
      description: 'Multiple systems that don\'t communicate, creating inefficiency and complexity.'
    },
    {
      id: 3,
      title: 'Intelligence Gap',
      icon: 'ℹ️',
      points: [
        'Manual coordination required',
        'Limited autonomous decision-making',
        'No unified control system'
      ],
      description: 'Robots and sensors everywhere, but they need more intelligence to work together.'
    }
  ]

  return (
    <section className="problems">
      <div className="container">
        <h2>The Challenge</h2>
        <div className="problems-grid">
          {problems.map(problem => (
            <div key={problem.id} className="problem-card">
              <div className="problem-icon">{problem.icon}</div>
              <h3>{problem.title}</h3>
              <ul className="problem-points">
                {problem.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
              <p className="problem-description">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

