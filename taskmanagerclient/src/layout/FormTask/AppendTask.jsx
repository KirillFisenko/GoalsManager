import { useNavigate } from "react-router-dom";
import FormTask from "./FormTask";
import axios from 'axios';

const baseApiUrl = "https://localhost:7267";
const url = `${baseApiUrl}/Goal`;

const AppendTask = () => {
    const navigate = useNavigate();
    const addTask = (taskName, taskDescription, taskStatus) => {
        const item = {
            name: taskName,
            description: taskDescription,
            status: Number(taskStatus)
        };
        axios.post(url, item).then(
            () => navigate("/"));
    }

    return (
        <div className="card">
            <div className="card-header">
                <h1>Добавить задачу</h1>
            </div>
            <div className="card-body">
                <FormTask
                    addTask={addTask}
                />
            </div>
        </div>
    )
}

export default AppendTask;