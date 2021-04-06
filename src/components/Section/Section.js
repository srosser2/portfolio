import React from 'react'
import styles from './Section.module.css'

export default function Section({ children, style, id }) {

  return (
    <section id={id} style={style} className={styles.container}>
      <div className={styles.innerContainer}>
        {children}
      </div>
    </section>
  )
}
