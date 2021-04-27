import React from 'react'
import { useHistory } from 'react-router-dom'
import Section from '../../../components/Section/Section'
import Button from '../../../components/Button/Button'

const StreetShare = ({ onContactClick, contactRef }) => {
  const history = useHistory()
  return (
    <Section>
      <h1>Street Share</h1>
      <h3>Flask and React &bull; Pair Project &bull; 7 Days</h3>

      <p>Don't you hate having to buy expensive equipment that you only need to use once every blue moon? Street Share aims to connect people in local communities to share their household belongings, helping users to reduce spending, and promote community spirit.</p>

      <p>For the final project for General Assembly's Software Engineering Immersive Bootcamp, I teamed up with another student to deliver Street Share, a full-stack Python with Flask and React app. The app allows users to search for items in their local area, and organise bookings from their owners.</p>

      <p>My biggest accomplishment in this project was to integrate a live chat feature using <a href='https://socket.io/' target='_blank'>Socket.IO</a>. This allows users to catch up with others in their local area and arrange bookings of items.</p>

      <Button clickHandler={() => window.open('https://street-share-app.herokuapp.com/', '_blank')}>See Project</Button>
      <Button clickHandler={() => window.open('https://github.com/srosser2/GA04-StreetShare', '_blank')} type={'secondary'}><span className={'icon-github-circle'} style={{ fontSize: '32px'}}></span> GitHub</Button>

    </Section>
  )
}

export default StreetShare