import React from 'react'

import styles from './layout.module.css'

const MainContent = (props) => {
  return (
    <div className={styles.main_content}>
      {props.children}
    </div>
  )
}

export default MainContent