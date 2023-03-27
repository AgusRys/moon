import MoonPhase from "../../components/MoonPhase";
import { Moon } from "lunarphase-js";
import { useState, useEffect } from "react";

const Upcoming = () => {

    const [phaseQty, setPhaseQty] = useState(20)
    const [upcomingValues, setUpcomingValues] = useState([])


    //TODO: acá se puede usar un reducer y reutilizar la lógica para mostrar la fase que se quiera eligiendola en un select :)
    useEffect(() => {
        let val = [];
        let date = new Date()
        while (val.length < phaseQty){
          if (Moon.lunarPhase(date).toLocaleLowerCase() === 'full') {
              if ((date - val[val.length - 1]) > 345600000 || val.length === 0) {
                    val.push(new Date(date)) 
                }
          }  
            date.setDate(date.getDate() + 1)
            setUpcomingValues(val)

        }
      
    }, [phaseQty]);



    const handleMoonQty =  () => {
        setPhaseQty(prevQty => prevQty + 5)
    }


    return (
      <>
      {/* el ul y el li debería estar componetizado */}
      <ul>
          
        {upcomingValues.map(upcomingValue => <li>{upcomingValue.toLocaleDateString('en-us', { weekday: "short", year: "numeric", month: "short", day: "numeric" })}</li>)}

      </ul>
        <button onClick={handleMoonQty}>SHOW MORE</button>
      </>
        // a este componente le podria llegar la fase del reducer 
        // <MoonPhase phase={phase}/>

    )
}

export default Upcoming;