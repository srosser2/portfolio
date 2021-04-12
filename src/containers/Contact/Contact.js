import React, { forwardRef } from 'react'
import Section from '../../components/Section/Section'
import styles from './Contact.module.css'

const Contact = forwardRef((props, ref) => {
  return (
    <Section fwdRef={ref}>
      <h2>Contact</h2>
      <div className={styles.contactContainer}>  
        <div className={styles.contactItem}>
          <a href='mailto: samrosser92@gmail.com' target='_blank'><i className="fas fa-envelope-square contact-icon"></i></a>
          <a href='mailto: samrosser92@gmail.com' target='_blank'>samrosser92@gmail.com</a>
        </div>
        <div className={styles.contactItem}>
          <a href='https://www.linkedin.com/in/sam-rosser/' target='_blank'><i className="fab fa-linkedin contact-icon"></i></a>
          <a href='https://www.linkedin.com/in/sam-rosser/' target='_blank'>linkedin.com/in/sam-rosser/</a>
        </div>
        <div className={styles.contactItem}>
          <a href='https://github.com/srosser2' target='_blank'><i className="fab fa-github-square contact-icon"></i></a>
          <a href='https://github.com/srosser2' target='_blank'>github.com/srosser2</a>
        </div>
      </div>
    </Section>
  )
})

export default Contact