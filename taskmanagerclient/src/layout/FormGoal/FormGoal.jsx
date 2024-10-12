import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FormGoal = (props) => {
    const [goalName, setGoalName] = useState("");
    const [goalDescription, setGoalDescription] = useState("");
    const [goalStatus, setGoalStatus] = useState("0");

    const navigate = useNavigate();

    const submit = () => {
        if (goalName === "" || goalDescription === "" || goalStatus === "") return;
        props.addGoal(goalName, goalDescription, goalStatus);
        setGoalName("");
        setGoalDescription("");
        setGoalStatus("0");
    }

    return (
        <div>
            <div className="mb-3">
                <form>
                    <div className="mb-3">
                        <label className="form-label">Имя задачи</label>
                        <input className="form-control" type="text"
                            value={goalName}
                            onChange={(e) => { setGoalName(e.target.value) }}></input>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Описание задачи</label>
                        <textarea className="form-control" type="text"
                            value={goalDescription}
                            onChange={(e) => { setGoalDescription(e.target.value) }}></textarea>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Статус задачи</label>
                        <select className="form-select"
                            value={goalStatus}
                            onChange={(e) => { setGoalStatus(e.target.value) }}>
                            <option value="0">Новая</option>
                            <option value="1">В работе</option>
                            <option value="2">Завершена</option>
                            <option value="3">Отменена</option>
                        </select>
                    </div>
                </form>
            </div>
            <div>
                <button className="btn btn-success btn-sm me-2"
                    onClick={() => { submit() }}>
                    Добавить задачу
                </button>
                <button
                    className="btn btn-primary btn-sm me-2" onClick={() => { navigate("/") }}>
                    Назад
                </button>
            </div>
        </div>
    )
};

export default FormGoal;