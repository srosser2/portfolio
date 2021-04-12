import React from 'react'
import styles from './Section.module.css'

export default function Section({ children, style, id, fwdRef }) {

  return (
    <section id={id} style={style} className={styles.container} ref={fwdRef}>
      <div className={styles.innerContainer}>
        {children}
      </div>
    </section>
  )
}
