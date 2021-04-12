import React, { forwardRef } from 'react'
import Section from '../../components/Section/Section'

const About = forwardRef((props, ref) => {
  return (
    <Section style={{ backgroundColor: 'rgb(0,0,0,0.75)', color: 'white' }} fwdRef={ref}>
      <h2>About</h2>
      <p>I'm a Full Stack Developer based in London. I love building things! I am currently transitioning from a career in Project Management, where I developed a taste for coding.</p> 
      <br />
      <p>I'm looking for opportunities in web development. Check out my projects to get a flavour of what I can do.</p>
    </Section>

  )
})

export default About;
