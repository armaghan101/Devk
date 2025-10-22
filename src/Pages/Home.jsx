import React from 'react'
import Navbar from '../Components/Navbar'
import Hero from '../Sections/Hero'
import Brands from '../Sections/Brands'
import Services from '../Sections/Services'

function Home() {
  return (
    <div className="h-screen relative">
      <nav className="absolute top-0 left-0 w-full z-10">
        <Navbar />
      </nav>
      <main className="h-full mt-25">
        <Hero />
        <Brands />
        <Services />
      </main>
    </div>
  )
}

export default Home