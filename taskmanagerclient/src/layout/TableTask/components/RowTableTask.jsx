const RowTableTask = (props) => {
    return (
        <tr>
            <th>{props.id}</th>
            <th>{props.name}</th>
            <th>{props.description}</th>
            <th>{props.status}</th>
            <th>
                <button className="btn btn-danger btn-sm"
                    onClick={() => props.deleteTask(props.id)}>
                    Удалить
                </button>
            </th>
        </tr>
    )
}

export default RowTableTask;
