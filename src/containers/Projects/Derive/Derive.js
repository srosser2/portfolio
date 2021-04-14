import React from 'react'
import { useHistory } from 'react-router-dom'
import Section from '../../../components/Section/Section'
import Button from '../../../components/Button/Button'


const Derive = ({ onContactClick, contactRef }) => {
  const history = useHistory()
  return (
    <Section>
      <h1>Dérive</h1>
      <h3>MERN Stack &bull; Group Project &bull; 7 Days</h3>

      <p>Dérive is a full-stack Social Network made for travellers. I built this project with 2 other students during the General Assembly Software Engineering Immersive Bootcamp over the course of 7 days. It is built using MongoDB, Express, React and Node.js (MERN).</p>

      <p>While we wait for Dérive to become a mainstream success, I created a number of random characters to get the ball rolling. The colourful characters you see on the app were generated using the npm <a href='https://www.npmjs.com/package/faker' target='_blank'>Faker</a> package combined with the <a href='https://getavataaars.com/' target='_blank'>Avataaars Generator</a>. The result is a diverse set of nonsense characters who have shared their experiences of countries across the globe.</p>

      <p>One of my major successes in this project was implementing a file upload feature, so that users can post photos from their travels. I used <a href='https://cloudinary.com/' target='_blank'>Cloudinary</a> as for file storage, and created a custom gallery component to display images on the user profiles.</p>

      

      <p></p>

      <Button clickHandler={() => window.open('https://derivetravel.herokuapp.com/', '_blank')}>See Project</Button>
      <Button clickHandler={() => {
        history.push('/')
        onContactClick(contactRef)
      }} type={'secondary'}>Get In Touch</Button>

    </Section>
  )
}

export default Derive