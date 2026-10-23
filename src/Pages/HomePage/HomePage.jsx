import React from 'react'
import HeroSection from './Components/HeroSection'
import Services from './Components/Services'
import About from './Components/About'
import Projects from './Components/Projects'
import Testimonials from './Components/Testimonials'
import ContactUs from './Components/ContactUs'

const HomePage = () => {
  return (
    <>
    <HeroSection/>
    <Services/>
    <About/>
    <Projects/>
    <Testimonials/>
    <ContactUs/>
    </>
  )
}

export default HomePage