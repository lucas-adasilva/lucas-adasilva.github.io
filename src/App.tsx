import { useEffect, useRef, useState } from 'react'
import './App.css'
import Hero from './sections/Hero'
import About from './sections/About'
import Services from './sections/Services'
import Approach from './sections/Approach'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'
import Navigation from './sections/Navigation'
import Footer from './sections/Footer'

function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const mainRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Trigger load animation
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div 
      ref={mainRef}
      className={`min-h-screen bg-[#f8f7f5] transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
    >
      {/* Grain overlay */}
      <div className="grain-overlay" aria-hidden="true" />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main content */}
      <main>
        <Hero />
        <About />
        <Services />
        <Approach />
        <Testimonials />
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App
