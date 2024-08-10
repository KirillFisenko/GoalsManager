import { useState } from "react";

const FormTask = (props) => {
    const [taskName, setTaskName] = useState("");
    const [taskDescription, setTaskDescription] = useState("");
    const [taskStatus, setTaskStatus] = useState("Новая");

    const submit = () => {
        if (taskName === "" || taskDescription === "" || taskStatus === "") return;
        props.addTask(taskName, taskDescription, taskStatus);
        setTaskName("");
        setTaskDescription("");
        setTaskStatus("Новая");
    }

    return (
        <div>
            <div className="mb-3">
                <form>
                    <div className="mb-3">
                        <label className="form-label">Имя задачи:</label>
                        <input className="form-control" type="text"
                            value={taskName}
                            onChange={(e) => { setTaskName(e.target.value) }}></input>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Описание задачи</label>
                        <textarea className="form-control" type="text"
                            value={taskDescription}
                            onChange={(e) => { setTaskDescription(e.target.value) }}></textarea>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Статус задачи</label>
                        <select className="form-select"
                            value={taskStatus}
                            onChange={(e) => { setTaskStatus(e.target.value) }}>
                                
                            <option value="Новая">Новая</option>
                            <option value="В работе">В работе</option>
                            <option value="Завершена">Завершена</option>
                        </select>
                    </div>
                </form>
            </div>
            <div>
                <button className="btn btn-success"
                    onClick={() => { submit() }}>
                    Добавить задачу
                </button>
            </div>
        </div>
    )
};

export default FormTask;