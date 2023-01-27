import * as React from "react"
import WaxingCrescent from "../components/moon-phases/WaxingCrescent"
import FirstQuarter from "../components/moon-phases/FirstQuarter"
import WaxingGibbous from "../components/moon-phases/WaxingGibbous"
import Full from "../components/moon-phases/Full"
import WaningGibbous from "../components/moon-phases/WaningGibbous"
import LastQuarter from "../components/moon-phases/LastQuarter"
import WaningCrescent from "../components/moon-phases/WaningCrescent"
import New from "../components/moon-phases/New"
import styles from './moon-phase.module.css'


const SvgComponent = (props) => {
		
	const content = { 
		'waxing-crescent': <WaxingCrescent/>,
		'first-quarter': <FirstQuarter/>,
		'waxing-gibbous': <WaxingGibbous/> ,
		'full': <Full/>,
		'waning-gibbous': <WaningGibbous/> ,
		'last-quarter': <LastQuarter/>,
		'waning-crescent': <WaningCrescent/>,
		'new': <New/> 
	}
	
	return (
		<div className={styles.moonPhase}>
				{content[props.phase]}
		</div>)
}

export default SvgComponent
