import React from 'react'
import { useHistory } from 'react-router-dom'
import Section from '../../../components/Section/Section'
import Button from '../../../components/Button/Button'

const Tetris = ({ onContactClick, contactRef }) => {
  const history = useHistory()
  return (
    <Section>
      <h1>Tetris</h1>
      <h3>Vanilla JavaScript &bull; Solo Project &bull; 7 Days</h3>

      <p>Tetris is one of my all time favourite games. When challenged to build a grid-based game on General Assembly's Software Engineering Immersive Bootcamp there was no doubt in my mind that this was the game I wanted to build.</p>

      <p>The project is built using Vanilla JavaScript and follows a Model View Controller (MVC) structure. The UI grid is managed using CSS grid, and reflects all changes to the model by using the Observer pattern. Using these design patterns helped to seperate concerns, and I had very few bugs through the development process.</p>

      <p>I tried to recreate the original gameplay as closely as possible to the original, so the levels and scoring work in the same way as the original.</p>

      <p>Try the game out for yourself and see if you can place on the leaderboard.</p>

      <Button clickHandler={() => window.open('https://srosser2.github.io/GA01-Tetris/', '_blank')}>See Project</Button>
      <Button clickHandler={() => {
        history.push('/')
        onContactClick(contactRef)
      }} type={'secondary'}>Get In Touch</Button>

    </Section>
  )
}

export default Tetris