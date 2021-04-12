import React from 'react'
import styles from './Nav.module.css'
import { withRouter, useHistory } from 'react-router-dom'

function Nav({ onMenuClick, onContactClick, contactRef }) {

  const history = useHistory()

  return (
    <div className={styles.container}>
      <div>
        <i className="fas fa-bars" onClick={onMenuClick}></i>
      </div>
      <div>
        <span onClick={() => {
          history.push('/')
          onContactClick(contactRef)
        }}>Contact</span>
      </div>
    </div>
  )
}

export default withRouter(Nav)