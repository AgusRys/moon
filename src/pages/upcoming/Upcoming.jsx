import MoonPhase from "../../components/MoonPhase";
import { Moon } from "lunarphase-js";
import { useState, useEffect } from "react";

/*Cards*/
import UpcomingList from "../../components/upcoming/upcomingList/UpcomingList";

const Upcoming = () => {

    const [phaseQty, setPhaseQty] = useState(3)
    const [upcomingValues, setUpcomingValues] = useState([])
    const [lunarPhase, setLunarPhase] = useState('full')


    //TODO: acá se puede usar un reducer y reutilizar la lógica para mostrar la fase que se quiera eligiendola en un select :)
    useEffect(() => {
        let val = [];
        let date = new Date()

        while (val.length < phaseQty){
          if (Moon.lunarPhase(date).toLocaleLowerCase() === lunarPhase) {
              if ((date - val[val.length - 1]) > 345600000 || val.length === 0) {
                    val.push(new Date(date)) 
                }
          }  
            date.setDate(date.getDate() + 1)
        }
          setUpcomingValues(val)
      
    }, [phaseQty]);


    const handleMoonQty =  () => {
        setPhaseQty(prevQty => prevQty + 5)
    }


    return (
      <>
      
      <MoonPhase phase={lunarPhase} />

      <UpcomingList data={upcomingValues} />
      
        

        {/*<button onClick={handleMoonQty}>SHOW MORE</button>*/}
      </>
        // a este componente le podria llegar la fase del reducer 
        // <MoonPhase phase={phase}/>

    )
}

export default Upcoming;