import React from 'react'
import { useHistory } from 'react-router-dom'
import Section from '../../../components/Section/Section'
import Button from '../../../components/Button/Button'

const CircuitMapper = ({ onContactClick, contactRef }) => {
  const history = useHistory()
  return (
    <Section>
      <h1>Circuit Mapper</h1>
      <h3>React (Frontend Only) &bull; Pair Project &bull; 2 Days</h3>

      <p>Circuit Mapper is a React Hooks based app that displays Formula One circuits and results in an interactive way. The app was built in a 48-hour hackathon, and pulls data from the <a href={'https://ergast.com/mrd/'} target='_blank'>Ergast API</a>.</p>

      <p>I have always loved looking at maps. I can spend hours on Google Maps searching the globe. So I was delighted to be tasked with building the map component for this project. The Ergast API provides the latitude and longitude of each circuit, so I was able to plug this into <a href='https://www.mapbox.com/' target='_blank'>MapBox</a> to display all tracks across the world.</p>

      <Button clickHandler={() => window.open('https://srosser2.github.io/GA02-F1CircuitMapper/#/F1data/circuits', '_blank')}>See Project</Button>
      <Button clickHandler={() => {
        history.push('/')
        onContactClick(contactRef)
      }} type={'secondary'}>Get In Touch</Button>

    </Section>
  )
}

export default CircuitMapper