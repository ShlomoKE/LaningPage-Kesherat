import React from 'react'
import './App.css'
import { LanguageProvider } from './contexts/LanguageContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problems from './components/Problems'
import Solution from './components/Solution'
import AgroMonitor from './components/AgroMonitor'
import Pricing from './components/Pricing'
import DemoForm from './components/DemoForm'
import Footer from './components/Footer'

function App() {
  return (
    <LanguageProvider>
      <div className="app">
        <Navbar />
        <Hero />
        <Problems />
        <Solution />
        <AgroMonitor />
        <Pricing />
        <DemoForm />
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App

