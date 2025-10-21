import React, { createContext, useContext, useState } from 'react'

const PackageContext = createContext()

export function PackageProvider({ children }) {
  const [selectedPackage, setSelectedPackage] = useState('')

  return (
    <PackageContext.Provider value={{ selectedPackage, setSelectedPackage }}>
      {children}
    </PackageContext.Provider>
  )
}

export function usePackage() {
  const context = useContext(PackageContext)
  if (!context) {
    throw new Error('usePackage must be used within a PackageProvider')
  }
  return context
}

