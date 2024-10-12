import { useNavigate } from "react-router-dom";
import FormGoal from "./FormGoal";
import axios from 'axios';
import { baseApiUrl } from "../../config";

const url = `${baseApiUrl}/Goal`;

const AppendGoal = () => {
    const navigate = useNavigate();
    const addGoal = (goalName, goalDescription, goalStatus) => {
        const item = {
            name: goalName,
            description: goalDescription,
            status: Number(goalStatus)
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
                <FormGoal
                    addGoal={addGoal}
                />
            </div>
        </div>
    )
}

export default AppendGoal;