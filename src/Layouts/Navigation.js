import React from 'react'
import { Link } from 'react-router-dom'

import styles from './layout.module.css'

const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <div className="container">
        <div className="row">
          <div className="col">
            <div className={styles.navigation_logo}></div>
          </div>
          <div className="col-auto">
            <div className="d-flex align-items-center">
              <div class="px-4"><Link to="/" className={styles.navigation_item}>Our Services</Link></div>
              <div class="px-4"><Link to="/" className={styles.navigation_item}>Why Us</Link></div>
              <div class="px-4"><Link to="/" className={styles.navigation_item}>Testimonial</Link></div>
              <div class="px-4"><Link to="/" className={styles.navigation_item}>FAQ</Link></div>
              <div class="pl-4"><Link to="/" className={styles.navigation_item_button}>Register</Link></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navigation