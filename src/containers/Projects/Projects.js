import React from 'react'
import styles from './Projects.module.css'
import { Link } from 'react-router-dom'
import Section from '../../components/Section/Section'



export default function Projects() {
  return (<>
    <Section style={{ backgroundColor: 'rgb(0,0,0,0.1)' }}>
      <h2>Tetris</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <div>
        <a href={'https://srosser2.github.io/GA01-Tetris/'} className={styles.projectLink} target='blank'>See Project</a>
      </div>
    </Section>
    <Section style={{ backgroundColor: 'rgb(0,0,0,0.01)' }}>
      <h2>Circuit Mapper</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <div>
        <a href={'https://srosser2.github.io/GA02-F1CircuitMapper/#/F1data/circuits'} className={styles.projectLink} target='blank'>See Project</a>
        {/* <a href={'/'} className={styles.projectLink} target='blank'>Learn More</a> */}
      </div>
    </Section>
    <Section style={{ backgroundColor: 'rgb(0,0,0,0.025)' }}>
      <h2>Derive</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <div>
        <a href={'https://derivetravel.herokuapp.com/'} className={styles.projectLink} target='blank'>See Project</a>
        {/* <a href={'/'} className={styles.projectLink} target='blank'>Learn More</a> */}
      </div>
    </Section>
    <Section style={{ backgroundColor: 'rgb(0,0,0,0.05)' }}>
      <h2>Street Share</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      <div>
        <a href={'https://street-share-app.herokuapp.com/'} className={styles.projectLink} target='blank'>See Project</a>
        {/* <a href={'/'} className={styles.projectLink} target='blank'>Learn More</a> */}
      </div>
    </Section>
  </>

  
  )
}
