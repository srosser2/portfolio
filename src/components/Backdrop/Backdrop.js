import React from 'react'
import styles from './Backdrop.module.css'
import { useHistory } from 'react-router-dom'

export default function Backdrop({ hideBackdrop, onMenuClick, homeRef, aboutRef, projectsRef, skillsRef, experienceRef, interestsRef, contactRef }) {
  const history = useHistory()

  return (
    <div className={styles.Backdrop} onClick={hideBackdrop}>
      <div className={styles.InnerContainer}>
        <ul className={styles.Menu}>
          <li onClick={() => {
            history.push('/')
            onMenuClick(homeRef)
            }}>Home</li>
          <li onClick={() => {
            history.push('/')
            onMenuClick(aboutRef)
          }}>About</li>
          <li onClick={() => {
            history.push('/')
            onMenuClick(projectsRef)
          }}>Projects</li>
          <li onClick={() => {
            history.push('/')
            onMenuClick(skillsRef)
          }}>Skills</li>
          <li onClick={() => {
            history.push('/')
            onMenuClick(experienceRef)
          }}>Experience</li>
          <li onClick={() => {
            history.push('/')
            onMenuClick(interestsRef)
          }}>Interests</li>
          <li onClick={() => {
            history.push('/')
            onMenuClick(contactRef)
          }}>Contact</li>
        </ul>
      </div>
    </div>
  )
}
