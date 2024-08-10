import RowTableTask from "./components/RowTableTask";

const TableTask = (props) => {
    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Тема</th>
                    <th>Описание</th>
                    <th>Статус</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    props.tasks.map(
                        task =>
                            <RowTableTask
                                key={task.id}
                                id={task.id}
                                name={task.name}
                                description={task.description}
                                status={task.status}
                                deleteTask={props.deleteTask}
                            />
                    )
                }
            </tbody>
        </table>
    )
};

export default TableTask;