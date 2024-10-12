import RowTableGoal from "./components/RowTableGoal";

const TableGoal = (props) => {
    return (
        <table className="table table-hover">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Тема</th>
                    <th>Описание</th>
                    <th>Статус</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    props.goals.map(
                        goal =>
                            <RowTableGoal
                                key={goal.id}
                                id={goal.id}
                                name={goal.name}
                                description={goal.description}
                                status={goal.status}
                                deleteGoal={props.deleteGoal}
                            />
                    )
                }
            </tbody>
        </table>
    )
};

export default TableGoal;