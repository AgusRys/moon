import styleCard from "../../../UI/css/Card.module.css"
import style from "./UpcomingListItem.module.css"

const UpcomingListItem = (props) => {
    
    return (
        <li className={styleCard.card + " "  + style.UpcomingListItem}>
            {props.data.toLocaleDateString('en-us', { weekday: "short", year: "numeric", month: "short", day: "numeric" })}
        </li>
    )
    
}
export default UpcomingListItem;