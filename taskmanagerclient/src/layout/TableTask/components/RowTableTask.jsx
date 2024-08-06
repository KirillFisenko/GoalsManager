const RowTableTask = (props) => {
    return (
        <tr>
            <th>{props.id}</th>
            <th>{props.name}</th>
            <th>{props.description}</th>
            <th>{props.status}</th>
        </tr>
    )
}

export default RowTableTask;