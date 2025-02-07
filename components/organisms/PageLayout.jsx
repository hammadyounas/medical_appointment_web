import React from 'react'
import Navbar from './Navbar'

export default function PageLayout({children,className}) {
  return (
    <div className={`${className}`}>
      <Navbar />
      {children}
    </div>
  )
}
