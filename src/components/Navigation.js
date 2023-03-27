import React from 'react'
import {NavLink} from 'react-router-dom'
import styles from './Navigation.module.css';
import ToggleButton from '../UI/ToggleButton';

function Navigation() {
  return (
    <div className={styles.navigation} >
      <ToggleButton/>
      <NavLink className={({ isActive }) => isActive ? styles.active : styles.inactive} to="moon/" >Home</NavLink>
      <NavLink className={({ isActive }) => isActive ? styles.active : styles.inactive} to="moon/search">Lupa</NavLink> 
      <NavLink className={({ isActive }) => isActive ? styles.active : styles.inactive} to="moon/upcoming">Lunas</NavLink> 
    </div>
  )
  // Meridiano 
  // LUPA -> Boton para buscar la luna de un día en particular 

    // As phases are inverted between Northern and Southern Hemispheres, optionally pass a Hemisphere to the function:

    //         import { Moon } from "lunarphase-js";
    //     import { Hemisphere } from "lunarphase-js";

    //     const date = new Date();
    //     Moon.lunarPhaseEmoji(date, Hemisphere.NORTHERN);
}

export default Navigation