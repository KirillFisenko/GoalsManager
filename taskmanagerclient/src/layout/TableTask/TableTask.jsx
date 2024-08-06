import RowTableTask from "./components/RowTableTask";

const TableTask = (props) => {    
    return (
        <table className="table table-hover">
            <thead>
                <tr>
                <th>Номер</th>
                    <th>Наименование</th>
                    <th>Описание</th>
                    <th>Статус</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.tasks.map(
                        task =>
                            <RowTableTask
                                id={task.id}
                                name={task.name}
                                description={task.description}
                                status={task.status}
                            />
                    )
                }
            </tbody>
        </table>
    )
};

export default TableTask;