import React from 'react'
import styles from './Button.module.css'

const Button = ({ children, clickHandler, type }) => {

  const primary = {
    backgroundColor: 'black',
    color: 'white'
  }

  const secondary = {
    backgroundColor: 'rgb(0,0,0,0)',
    color: 'black'
  }

  return (
    <button className={styles.button} onClick={clickHandler} style={type === 'secondary' ? secondary : primary}>{children}</button>
  )
}

export default Button