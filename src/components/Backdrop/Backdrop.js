import React from 'react'
import styles from './Backdrop.module.css'

export default function Backdrop({ hideBackdrop }) {
  return (
    <div className={styles.Backdrop} onClick={hideBackdrop}>
      <h1>Backdrop</h1>
    </div>
  )
}
