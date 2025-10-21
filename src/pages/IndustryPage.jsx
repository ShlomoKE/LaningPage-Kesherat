import React from 'react'
import NavbarIndustry from '../components/NavbarIndustry'
import HeroIndustry from '../components/HeroIndustry'
import ProjectTypes from '../components/ProjectTypes'
import DemoForm from '../components/DemoForm'
import Footer from '../components/Footer'
import './IndustryPage.css'

export default function IndustryPage() {
  return (
    <div className="industry-page">
      <NavbarIndustry />
      <HeroIndustry />
      <ProjectTypes />
      <DemoForm />
      <Footer />
    </div>
  )
}

