import React from 'react'
import styles from './MoonPhase.module.css'
import MoonPhaseSvg from '../assets/moon-phases-svg'

function MoonPhase(props) {

    return (
      <>
        <MoonPhaseSvg phase={props.phase.toLowerCase().replace(' ', '-')}/>
        <p className={styles.phase}>{props.phase}</p>
      </>
    )
}

export default MoonPhase