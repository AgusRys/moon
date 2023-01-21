import React, {useState} from 'react'
import styles from './MoonData.module.css'
import Distance from '../assets/Distance'
import Schedule from '../assets/Schedule'
import Age from '../assets/Age'
import { Moon } from 'lunarphase-js';
import MoonPhase from '../UI/MoonPhase'


const MoonData = () => {
    // const phase = Moon.lunarPhase();
    const [phase, setPhase] = useState(Moon.lunarPhase())
    const [lunarAge, setLunarAge] = useState(Moon.lunarAge())
    // const [lunarAgePercent, setLunarAgePercent] = useState(Moon.lunarAgePercent())
    const [distance, setDistance] = useState(Moon.lunarDistance())
    const [lunationNumber, setLunationNumber] = useState(Moon.lunationNumber())
    setTimeout(() => {
        setPhase(Moon.lunarPhase())
        setLunarAge(Moon.lunarAge())
        // setLunarAgePercent(Moon.lunarAgePercent())
        setDistance(Moon.lunarDistance())
        setLunationNumber(Moon.lunationNumber())
    },1000)

    // console.log(lunarAgePercent)
    
    const phaseEmoji = Moon.lunarPhaseEmoji()	
   //const lunarAge = Moon.lunarAge()	
    // const isWaxing = Moon.isWaxing()	
    // const isWaning = Moon.isWaning()
    // const lunarAgePercent = Moon.lunarAgePercent()	
    // const lunarDistance = Moon.lunarDistance()	
    // const lunationNumber = Moon.lunarNumber()

    return ( 
        <> 
            <MoonPhase phase={phase}/>
            <div className={styles.container}>    
                <div className={styles['data-container']}>
                    <div className={`${styles.tooltip} ${styles['tooltip-1']}`}>Age in Earth days through the current lunar cycle, equivalent to 29.53059 Earth days, based on Mean Synodic Month, 2000 AD mean solar days.</div>
                    <div className={styles.triangle}></div>
                    <p><Age/></p>
                    <p>{lunarAge.toFixed(2)}</p>
                </div>
                <div className={styles['data-container']}>
                    <div className={`${styles.tooltip} ${styles['tooltip-2']}`}>Distance to the moon measured in units of Earth radii, with perigee at 56 and apogee at 63.8.
                </div>
                    <div className={styles.triangle}></div>
                    <div><Distance /></div>
                    <p>{distance.toFixed(2)}</p>
                </div>
                <div className={styles['data-container']}>
                    <div className={`${styles.tooltip} ${styles['tooltip-3']}`}>Brown Lunation Number (BLN), per Ernest William Brown's lunar theory, defining Lunation 1 as the first new moon of 1923 at approximately 02:41 UTC, January 17, 1923
                    </div>
                    <div className={styles.triangle}></div>
                    <div><Schedule/></div>
                    <p>{lunationNumber}</p>
                </div>
            </div>
        </>
    )
}

export default MoonData


// For a specific date, pass a date object to a function
// const date = new Date();
// const phase = Moon.lunarPhase(date);

//Otherwise, current date will be used

// const phase = Moon.lunarPhase();