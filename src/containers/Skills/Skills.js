import React from 'react'
import Section from '../../components/Section/Section'
import styles from './Skills.module.css'

export default function Skills() {
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
      label: 'PHP',
      icon: 'icon-php-alt'
    },
    {
      label: 'Python',
      icon: 'icon-python'
    },
    {
      label: 'HTML5',
      icon: 'icon-html5'
    },
    {
      label: 'CSS',
      icon: 'icon-css3'
    },
    {
      label: 'JIRA',
      icon: 'icon-jira-alt'
    },
    {
      label: 'MongoDB',
      icon: 'icon-mongodb'
    },
    {
      label: 'MySQL',
      icon: 'icon-mysql'
    },
    {
      label: 'SASS',
      icon: 'icon-sass'
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
      label: 'Selenium',
      icon: 'icon-selenium'
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
      label: 'PostgreSQL',
      icon: 'icon-postgres'
    },
    {
      label: 'Illustrator',
      icon: 'icon-illustrator'
    },
    {
      label: 'Git',
      icon: 'icon-git'
    },
    {
      label: 'Debian',
      icon: 'icon-debian'
    }
    
  ]
  return (
    <Section>
      <h2>Skills</h2>
      <div className={styles.skillsContainer}>
          {icons.map(icon => {
            return (
              <div key={icon.label} className={styles.techIcon}>
                <span className={icon.icon} style={{ fontSize: '50px'}}></span>
                <p>{icon.label}</p>
              </div>
            )
          })}
      </div>
    </Section>
  )
}
