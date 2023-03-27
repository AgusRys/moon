import React from 'react'
import {Route, Routes} from 'react-router-dom'
import MoonSchedule from '../pages/moonSchedule/MoonSchedule';
import MoonData from '../pages/moonData/MoonData';
import Upcoming from '../pages/upcoming/Upcoming';
import Navigation from './Navigation';
import styles from './Wrapper.module.css';

const Wrapper = () => {
    return (
        <div className={styles.wrapper}>
            <Navigation></Navigation>
            <Routes>
                <Route path="/moon" element={<MoonData />} />
                <Route path='/search' element={<MoonSchedule />} />
                <Route path='/upcoming' element={ <Upcoming/>} />
            </Routes>
        </div>
    )
}

export default Wrapper;