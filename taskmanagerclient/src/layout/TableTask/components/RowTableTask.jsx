import { Link } from "react-router-dom";

const getStatusLabel = (status) => {
    switch (status) {
        case 0:
            return "Новая";
        case 1:
            return "В работе";
        case 2:
            return "Завершена";
        case 3:
            return "Отменена";
        default:
            return "Неизвестный статус";
    }
};

const RowTableTask = (props) => {
    return (
        <tr>
            <th>{props.id}</th>
            <th>{props.name}</th>
            <th>{props.description}</th>
            <th>{getStatusLabel(props.status)}</th>
            <th>
                <button className="btn btn-danger btn-sm"
                    onClick={() => props.deleteTask(props.id)}>
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

export default RowTableTask;
