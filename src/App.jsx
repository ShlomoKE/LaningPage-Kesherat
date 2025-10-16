import React from 'react'
import './App.css'
import Hero from './components/Hero'
import Problems from './components/Problems'
import Solution from './components/Solution'
import AgroMonitor from './components/AgroMonitor'
import Features from './components/Features'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Hero />
      <Problems />
      <Solution />
      <AgroMonitor />
      <Features />
      <CTA />
      <Footer />
    </div>
  )
}

export default App

