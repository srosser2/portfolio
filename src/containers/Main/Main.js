import React from 'react'

import Home from './Home/Home'
import About from './About/About'
import Projects from './Projects/Projects'
import Experience from './Experience/Experience'
import Interests from './Interests/Interests'
import Contact from './Contact/Contact'
import Skills from './Skills/Skills'



export default function Main({ homeRef, aboutRef, projectsRef, skillsRef, experienceRef, interestsRef, contactRef }) {
  return (
    <div>
        <Home ref={homeRef}/>
        <About ref={aboutRef}/>
        <Projects ref={projectsRef}/>
        <Skills ref={skillsRef}/>
        <Experience ref={experienceRef}/>
        <Interests ref={interestsRef}/>
        <Contact ref={contactRef}/>
    </div>
  )
}
