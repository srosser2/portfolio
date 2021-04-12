import React, { forwardRef } from 'react'
import Section from '../../components/Section/Section'

const Home = forwardRef((props, ref) => {
  return (
    <Section style={{ justifyContent: 'flex-end' }} fwdRef={ref}>
        <h1>Sam Rosser</h1>
        <h3>Full Stack Software Engineer &bull; London</h3>
        <br />
        <hr /> 
    </Section> 
  )
})

export default Home
