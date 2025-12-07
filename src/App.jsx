import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import WhatWeDo from './components/WhatWeDo'
import How from './components/How'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import { ToastContainer } from 'react-toastify'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <ToastContainer position="top-center"
        autoClose={1500}
        hideProgressBar
        newestOnTop
        closeOnClick
        pauseOnFocusLoss={false}
        pauseOnHover={false}
        draggable={false}
        theme="light"
        closeButton={false}
        toastClassName={() =>
          "bg-white shadow-md flex items-center rounded-md text-(--text) text-sm px-3 py-2 mt-2"
        } />
      <Navbar />
      <Hero />
      <About />
      <WhatWeDo />
      <How />
      <Projects />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  )
}

export default App