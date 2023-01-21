import React from 'react'
import {Route, Routes} from 'react-router-dom'
import MoonSchedule from '../pages/MoonSchedule';
import MoonData from './MoonData';
import Navigation from './Navigation';
import styles from './Wrapper.module.css';

const Wrapper = () => {
    return (
        <div className={styles.wrapper}>
            <Navigation></Navigation>
            <Routes>
                <Route path="/" element={<MoonData />} />
                <Route path='/search' element={<MoonSchedule />} />
            </Routes>
        </div>
    )
}

export default Wrapper;