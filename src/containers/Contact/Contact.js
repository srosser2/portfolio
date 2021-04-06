import React, { forwardRef } from 'react'
import Section from '../../components/Section/Section'

const Contact = forwardRef((props, ref) => {
  return (
    <Section>
      <h2 ref={ref}>Contact</h2>
      <p>Email: <a href='mailto: samrosser92@gmail.com'>samrosser92@gmail.com</a></p>
      <p><a href='https://www.linkedin.com/in/sam-rosser/'>Linked In</a></p>
      <p><a href='https://github.com/srosser2'>GitHub</a></p>
    </Section>
  )
})

export default Contact