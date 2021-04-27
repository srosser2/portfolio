import React, { forwardRef } from 'react'
import Section from '../../components/Section/Section'

const About = forwardRef((props, ref) => {
  return (
    <Section style={{ backgroundColor: 'rgb(0,0,0,0.75)', color: 'white' }} fwdRef={ref}>
      <h2>About</h2>
      <p>I&rsquo;m a London based Junior Developer transitioning from a career in Project Management. I have recently completed a Software Development bootcamp, which provided me with the opportunity to apply the full stack development skills I have been learning over the past 3 years.</p> 
      <br />
      <p>My role as a Project Lead at Profusion gave me an intimate experience into the software development cycle, using Scrum to deliver complex enterprise applications.</p>
      <br />
      <p>Software Development appeals to my methodical nature, and my experience to date has led naturally to this career change. I am seeking my first official role as a developer so I can build on my knowledge, learn from others and contribute to larger projects. </p>
    </Section>

  )
})

export default About;
