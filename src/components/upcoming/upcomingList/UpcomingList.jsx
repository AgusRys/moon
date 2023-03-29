import UpcomingListItem from "../upcomingItem/UpcomingListItem";
import styleCard from "../../../UI/css/Card.module.css"
import style from "./UpcomingList.module.css"

const UpcomingList = (props) => {
    
    return (
        <ul className={styleCard['box-cards'] + " " + style.UpcomingList}>
            {props.data.map(upcomingValue => 
                <UpcomingListItem data={upcomingValue} key={upcomingValue.toString()} />
            )}
        </ul>
    )
}

export default UpcomingList;