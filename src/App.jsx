import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problems from './components/Problems'
import Solution from './components/Solution'
import AgroMonitor from './components/AgroMonitor'
import Features from './components/Features'
import DemoForm from './components/DemoForm'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Problems />
      <Solution />
      <AgroMonitor />
      <Features />
      <DemoForm />
      <Footer />
    </div>
  )
}

export default App

