import React from 'react'
import styles from './ToggleButton.module.css'

function ToggleButton() {
  return (
      <div className={styles.onoffswitch}>
          <input type="checkbox" name="onoffswitch" className={styles['onoffswitch-checkbox']} id="myonoffswitch" tabIndex="0" 
          //checked

          />
          <label className={styles['onoffswitch-label']} htmlFor="myonoffswitch">
                  <span className={styles['onoffswitch-inner']}></span>
                  <span className={styles['onoffswitch-switch']}></span>
              </label>
      </div>
  )
}

export default ToggleButton;