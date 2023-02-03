import MoonPhase from "../../components/MoonPhase";
import { Moon } from "lunarphase-js";
import { useState, useEffect } from "react";

const Upcoming = () => {


  
    const [phase, setPhase] = useState(Moon.lunarPhase())

    
    const [flag, setFlag] = useState(true)
    const [upcomingValues, setUpcomingValues] = useState([])


  useEffect(() => {


    if(flag){

        let contW = 0

        let val = [];

        while(contW < 10){
            
            console.log(contW ++)

            console.log(Moon.lunarAge())
            

        }
        
        setUpcomingValues(val)
        setFlag(false)
        
        console.log("upcomingValues", upcomingValues)
    }


  }, [upcomingValues]);






    return (

        <MoonPhase phase={phase}/>

    )
}

export default Upcoming;