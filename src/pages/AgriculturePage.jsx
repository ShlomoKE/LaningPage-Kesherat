import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Problems from '../components/Problems'
import Solution from '../components/Solution'
import AgroMonitor from '../components/AgroMonitor'
import Pricing from '../components/Pricing'
import DemoForm from '../components/DemoForm'
import Footer from '../components/Footer'

export default function AgriculturePage() {
  return (
    <div className="agriculture-page">
      <Navbar />
      <Hero />
      <Problems />
      <Solution />
      <AgroMonitor />
      <Pricing />
      <DemoForm />
      <Footer />
    </div>
  )
}

