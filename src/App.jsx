import React from 'react'
import './App.css'
import { LanguageProvider } from './contexts/LanguageContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problems from './components/Problems'
import Solution from './components/Solution'
import AgroMonitor from './components/AgroMonitor'
import KesheratLink from './components/KesheratLink'
import AboutUs from './components/AboutUs'
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
        <KesheratLink />
        <AboutUs />
        <DemoForm />
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App

