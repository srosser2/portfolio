import React from 'react'
import styles from './Nav.module.css'
import { withRouter, Link } from 'react-router-dom'

function Nav({ onMenuClick, onContactClick }) {

  return (
    <div className={styles.container}>
      <div>
        <i className="fas fa-bars" onClick={onMenuClick}></i>
        {/* <span className="material-icons" onClick={onMenuClick}>menu</span> */}
      </div>
      <div>
        <span onClick={onContactClick}>Contact</span>
      </div>
    </div>
  )
}

export default withRouter(Nav)