import React from 'react'
import styles from './MoonPhase.module.css'


function MoonPhase(props) {
    
    return (
      <>
            <div className={styles.moon}></div>
            <p className={styles.phase}>{props.phase}</p>
      </>
    )
}

export default MoonPhase