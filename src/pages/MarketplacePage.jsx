import React from 'react'
import Navbar from '../components/Navbar'
import Marketplace from '../components/Marketplace'
import DemoForm from '../components/DemoForm'
import Footer from '../components/Footer'

export default function MarketplacePage() {
  return (
    <div className="marketplace-page">
      <Navbar />
      <Marketplace />
      <DemoForm />
      <Footer />
    </div>
  )
}

