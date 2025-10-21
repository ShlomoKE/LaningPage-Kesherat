import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { LanguageProvider } from './contexts/LanguageContext'
import { PackageProvider } from './contexts/PackageContext'
import SectorSelector from './components/SectorSelector'
import AgriculturePage from './pages/AgriculturePage'
import IndustryPage from './pages/IndustryPage'

function App() {
  return (
    <LanguageProvider>
      <PackageProvider>
        <Router>
          <div className="app">
            <Routes>
              <Route path="/" element={<SectorSelector />} />
              <Route path="/agriculture" element={<AgriculturePage />} />
              <Route path="/industry" element={<IndustryPage />} />
            </Routes>
          </div>
        </Router>
      </PackageProvider>
    </LanguageProvider>
  )
}

export default App

