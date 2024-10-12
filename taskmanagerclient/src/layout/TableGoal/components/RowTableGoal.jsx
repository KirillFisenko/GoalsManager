import { Link } from "react-router-dom";
import { reverseStatusMap } from "../../../Helpers";

const RowTableGoal = (props) => {
    return (
        <tr>
            <th>{props.id}</th>
            <th>{props.name}</th>
            <th>{props.description}</th>            
            <th>{reverseStatusMap[props.status]}</th>
            <th>
                <button className="btn btn-danger btn-sm"
                    onClick={() => props.deleteGoal(props.id)}>
                    Удалить
                </button>
            </th>
            <th>
                <Link
                    to={`/goal/${props.id}`}
                    className="btn btn-primary btn-sm">
                    Подробнее
                </Link>
            </th>
        </tr>
    )
}

export default RowTableGoal;
