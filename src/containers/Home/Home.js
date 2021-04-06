import React from 'react'
import styles from './Home.module.css'
import Section from '../../components/Section/Section'

export default function Home() {
  return (
    <Section style={{ justifyContent: 'flex-end' }}>
        <h1>Sam Rosser</h1>
        <p>Software Developer &bull; London</p>
        <br />
        <hr /> 
    </Section>
    
  )
}
