import React, { forwardRef } from 'react'
import styles from './Experience.module.css'
import Section from '../../components/Section/Section'

const Experience = forwardRef((props, ref) => {
  return (
    <Section style={{ backgroundColor: 'rgb(0,0,0,0.01)' }} fwdRef={ref}>
      <h2>Recent Experience</h2>
      <div className={styles.experienceContainer}>
        <div>
          <h3><a href={'https://generalassemb.ly/'} target='_blank'>General Assembly</a></h3>
          <h4>Software Engineering Student &bull; Dec 2020 &ndash; Mar 2021</h4>
          <p>I completed a 3 month Software Development Bootcamp with General Assembly. During the course I built 4 projects, using JavaScript, Python, and a whole host of libraries and tools.</p>
        </div>

        <div>
          <h3><a href={'https://profusion.com/'} target='_blank'>Profusion</a></h3>
          <h4>Project Lead &bull; Feb 2018 &ndash; Dec 2020</h4>
          <p>As a Project Lead at Profusion, I managed an ever-growing Enterprise Software Solution for Coty. I gained a lot of knowledge on Agile Development and Software Design. I also built a number of my own applications for clients and for internal use.</p>
        </div>

        {/* <div>
          <h3><a href={'https://edit.co.uk/'} target='_blank'>Amaze One (now Edit)</a></h3>
          <h4>Project Coordinator &bull; Mar 2016 &ndash; Oct 2017</h4>
          <p>At Amaze One I was responsible for overseeing the end-to-end delivery digital and print-based marketing projects.</p>
        </div> */}
      </div>
    </Section>
  )
})

export default Experience