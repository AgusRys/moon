import React, {useState} from 'react'
import MoonPhase from '../UI/MoonPhase';
import { Moon } from 'lunarphase-js';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './MoonSchedule.css'
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';



function MoonSchedule() {
    const [date, setDate] = useState(new Date())
    const [phase, setPhase] = useState(Moon.lunarPhase())

    const getDate = (selectedDate) => {
        console.log(selectedDate)
        setDate(new Date(selectedDate));
        setPhase(Moon.lunarPhase(new Date(selectedDate)));
    }
    
    return (
        <div>
            <MoonPhase phase={phase}/>
            <div className={"container"}>
                {/* <input 
                    onChange={getDate} 
                    type='date' >    
                </input> */}
                <DatePicker
                    selected={date}
                    onChange={getDate}
                    inline
                />
            </div>
        </div>

    )
}

// () => {
//     const [startDate, setStartDate] = useState(new Date());
//     return (
//         <DatePicker
//             selected={startDate}
//             onChange={(date) => setStartDate(date)}
//             inline
//         />
//     );
// };


export default MoonSchedule
// For a specific date, pass a date object to a function
// const date = new Date();
// const phase = Moon.lunarPhase(date);