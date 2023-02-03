import MoonPhase from "../../components/MoonPhase";
import { Moon, LunarPhase } from "lunarphase-js";
import { useState, useEffect } from "react";

const Upcoming = () => {


  
    const [phase, setPhase] = useState(Moon.lunarPhase())

    
    const [flag, setFlag] = useState(true)
    const [upcomingValues, setUpcomingValues] = useState([])


  useEffect(() => {


    if(flag){

        let contW = 0

        let val = [];

        let date = new Date()

        while(contW < 10){
            
            contW ++
            //console.log(contW ++)

            //console.log(Moon.lunarAge())
            //console.log("LunarPhase", LunarPhase)
            //console.log("date", date)
            console.log("lunarPhase", Moon.lunarPhase(date), contW, date)
            date.setDate(date.getDate() + 1 )
            //console.log("date + 1 day", date)
            

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