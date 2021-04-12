import React, { forwardRef } from 'react'
import Section from '../../components/Section/Section'
import styles from './Skills.module.css'

const Skills = forwardRef((props, ref) => {
  const icons = [
    {
      label: 'JavaScript',
      icon: 'icon-js'
    },
    {
      label: 'Node.js',
      icon: 'icon-nodejs'
    },
    {
      label: 'React',
      icon: 'icon-react'
    },
    {
      label: 'Python',
      icon: 'icon-python'
    },
    {
      label: 'PHP',
      icon: 'icon-php-alt'
    },
    {
      label: 'HTML5',
      icon: 'icon-html5'
    },
    {
      label: 'CSS',
      icon: 'icon-css3-alt'
    },
    {
      label: 'SASS',
      icon: 'icon-sass'
    },
    {
      label: 'MongoDB',
      icon: 'icon-mongodb'
    },
    {
      label: 'PostgreSQL',
      icon: 'icon-postgres'
    },
    {
      label: 'MySQL',
      icon: 'icon-mysql'
    },
    {
      label: 'Git',
      icon: 'icon-git'
    },
    {
      label: 'GitHub',
      icon: 'icon-github-circle'
    },
    {
      label: 'Heroku',
      icon: 'icon-heroku'
    },
    {
      label: 'Babel',
      icon: 'icon-babel'
    },
    {
      label: 'Webpack',
      icon: 'icon-webpack'
    },
    {
      label: 'Selenium',
      icon: 'icon-selenium'
    },
    {
      label: 'JIRA',
      icon: 'icon-jira-alt'
    },
    {
      label: 'Illustrator',
      icon: 'icon-illustrator'
    },
    {
      label: 'Debian',
      icon: 'icon-debian'
    }
    
  ]
  return (
    <Section fwdRef={ref}>
      <h2>Skills</h2>
      <div className={styles.skillsContainer}>
          {icons.map(icon => {
            return (
              <div key={icon.label} className={styles.techIcon}>
                <div>
                  <span className={icon.icon}></span>
                </div>
                <div>
                  <p>{icon.label}</p>
                </div>
              </div>
            )
          })}
      </div>
    </Section>
  )
})

export default Skills
