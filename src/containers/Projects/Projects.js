import React, { forwardRef } from 'react'
import { useHistory } from 'react-router-dom'

import Section from '../../components/Section/Section'
import Button from '../../components/Button/Button'



const Projects = forwardRef((props, ref) => {
  const history = useHistory()
  return (<>
    <Section style={{ backgroundColor: 'rgb(0,0,0,0.1)' }} fwdRef={ref}>
      <h2>Tetris</h2>
      <p>A retro classic recreated with Vanilla JavaScript.</p>
      <div>
        <Button clickHandler={() => window.open('https://srosser2.github.io/GA01-Tetris/', '_blank')}>See Project</Button>
        <Button clickHandler={() => history.push('/tetris')} type={'secondary'}>Learn More <i className="fas fa-arrow-right" style={{ marginLeft: '10px'}}></i></Button>
      </div>
    </Section>
    <Section style={{ backgroundColor: 'rgb(0,0,0,0.01)' }}>
      <div>
        <h2>Circuit Mapper</h2>
        <p>For the Formula One fans out there. Circuit Mapper invites you to discover racing tracks all around the world.</p>
        <div>
          <Button clickHandler={() => window.open('https://srosser2.github.io/GA02-F1CircuitMapper/#/F1data/circuits', '_blank')}>See Project</Button>
          <Button clickHandler={() => history.push('/circuit-mapper')} type={'secondary'}>Learn More <i className="fas fa-arrow-right" style={{ marginLeft: '10px'}}></i></Button>
        </div>
      </div>
    </Section>
    <Section style={{ backgroundColor: 'rgb(0,0,0,0.025)' }}>
      <h2>Dérive</h2>
      <p>Discover the world, share experiences and connect with like-minded travellers. Dérive is a social network for explorers.</p>
      <div>
        <Button clickHandler={() => window.open('https://derivetravel.herokuapp.com/', '_blank')}>See Project</Button>
        <Button clickHandler={() => history.push('/derive')} type={'secondary'}>Learn More <i className="fas fa-arrow-right" style={{ marginLeft: '10px'}}></i></Button>
      </div>
    </Section>
    <Section style={{ backgroundColor: 'rgb(0,0,0,0.05)' }}>
      <h2>Street Share</h2>
      <p>Promoting the sharing economy in your neighbourhood. Street Share helps local communities share household items easily.</p>
      <div>
        <Button clickHandler={() => window.open('https://street-share-app.herokuapp.com/', '_blank')}>See Project</Button>
        <Button clickHandler={() => history.push('/street-share')} type={'secondary'}>Learn More <i className="fas fa-arrow-right" style={{ marginLeft: '10px'}}></i></Button>
      </div>
    </Section>
  </>
  )
})

export default Projects