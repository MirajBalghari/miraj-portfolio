
import React from 'react'
import Navbar from '../components/Navbar'
import Herosection from '../components/Herosection'
import Skill from '../components/Skill'
import Project from '../components/Project';
import Contact from '../components/Contact';
import Footer from '../components/Footer'
import Experience from '../components/Experience';

function Home() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden ">
      {/* Animated Gradient Background */}
<div className="absolute inset-0 bg-gradient-to-r from-[#2563EB] via-[#06B6D4] to-[#22C55E] animate-gradient z-0"></div>

      {/* Floating Bubbles */}
      <div className="absolute inset-0 z-0">
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 ">
        <Navbar />
        <Herosection />
        <Skill />
        <Experience />
        <Project />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default Home
