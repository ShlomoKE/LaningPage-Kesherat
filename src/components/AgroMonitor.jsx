import React from 'react'
import { motion } from 'framer-motion'

export default function AgroMonitor() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  const agentExamples = [
    {
      icon: '🌡️',
      title: 'Sensores de Suelo',
      description: 'Convertimos tus sensores en agentes inteligentes que analizan humedad, pH y nutrientes, dándote recomendaciones en tiempo real.',
      color: '#10b981'
    },
    {
      icon: '🛰️',
      title: 'Imágenes Satelitales',
      description: 'Transformamos data satelital en agentes que monitorean salud de cultivos, detectan plagas y predicen rendimientos.',
      color: '#3b82f6'
    },
    {
      icon: '🚜',
      title: 'Maquinaria Agrícola',
      description: 'Tu maquinaria se convierte en agentes que optimizan rutas, reportan mantenimiento y coordinan operaciones.',
      color: '#f59e0b'
    },
    {
      icon: '☁️',
      title: 'Estaciones Meteorológicas',
      description: 'Datos climáticos transformados en agentes que predicen condiciones, alertan riesgos y sugieren acciones.',
      color: '#8b5cf6'
    }
  ]

  return (
    <section className="agromonitor">
      <motion.div
        className="agromonitor-content"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div variants={itemVariants} className="agromonitor-header">
          <h2>AgroMonitor: Tu Hub de Agentes Inteligentes</h2>
          <p className="section-subtitle">
            Convertimos tu hardware y datos en <span className="highlight-text">agentes conversacionales</span> que trabajan para ti
          </p>
        </motion.div>

        <motion.div variants={itemVariants} className="agromonitor-concept">
          <div className="concept-box">
            <div className="concept-icon">🔄</div>
            <h3>De Hardware a Agentes</h3>
            <p>
              No solo recopilamos datos. <strong>Transformamos cada sensor, cámara y dispositivo en un agente inteligente</strong> que entiende tu contexto, 
              aprende de tus patrones y te da insights accionables en lenguaje natural.
            </p>
          </div>
        </motion.div>

        <motion.div 
          className="agents-grid"
          variants={containerVariants}
        >
          {agentExamples.map((agent, index) => (
            <motion.div
              key={index}
              className="agent-card"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              <div className="agent-icon" style={{ color: agent.color }}>
                {agent.icon}
              </div>
              <h4>{agent.title}</h4>
              <p>{agent.description}</p>
              <div className="agent-badge">
                <span>✨ Agente Activo</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div variants={itemVariants} className="agromonitor-main-visual">
          <img
            src="/AgromonitorViewPC.png"
            alt="AgroMonitor Dashboard"
            className="agromonitor-screenshot"
          />
        </motion.div>

        <motion.div variants={itemVariants} className="agromonitor-platform">
          <div className="platform-description">
            <h3>Plataforma Agnóstica de Gestión</h3>
            <p>
              AgroMonitor es tu <strong>centro de comando</strong> donde todos tus agentes trabajan juntos.
              Visualiza, conversa y gestiona toda tu tecnología agrícola desde un solo lugar.
            </p>
            <ul className="platform-features">
              <li>
                <span className="feature-icon">💬</span>
                <strong>Conversaciones Naturales:</strong> Habla con tus agentes como si fueran expertos
              </li>
              <li>
                <span className="feature-icon">🔗</span>
                <strong>Integración Total:</strong> Conecta cualquier hardware o fuente de datos
              </li>
              <li>
                <span className="feature-icon">🧠</span>
                <strong>Inteligencia Coordinada:</strong> Los agentes colaboran entre sí para optimizar resultados
              </li>
              <li>
                <span className="feature-icon">📊</span>
                <strong>Insights Accionables:</strong> No solo datos, sino recomendaciones específicas
              </li>
            </ul>
          </div>

          <div className="platform-features-visual">
            <div className="feature-image-card">
              <img
                src="/AICopilot.png"
                alt="AI Copilot"
                className="feature-image"
              />
              <div className="feature-overlay">
                <h4>🤖 AI Copilot</h4>
                <p>Tu asistente inteligente que coordina todos los agentes</p>
              </div>
            </div>
            <div className="feature-image-card">
              <img
                src="/Task.png"
                alt="Task Management"
                className="feature-image"
              />
              <div className="feature-overlay">
                <h4>✅ Gestión de Tareas</h4>
                <p>Los agentes crean y ejecutan tareas automáticamente</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="agromonitor-cta">
          <h3>Convierte tu tecnología en agentes inteligentes</h3>
          <p>Cada sensor, cada dato, cada dispositivo puede ser un agente que trabaja para ti</p>
          <button className="cta-button primary">Descubre AgroMonitor</button>
        </motion.div>
      </motion.div>
    </section>
  )
}

