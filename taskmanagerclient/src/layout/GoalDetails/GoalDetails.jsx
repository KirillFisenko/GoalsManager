import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { baseApiUrl } from "../../config";
import { reverseStatusMap, statusMap } from "../../Helpers";

const GoalDetails = () => {    
    const [goal, setGoal] = useState({ name: "", description: "", status: "" });
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {    
        const url = `${baseApiUrl}/goal/${id}`;    
        axios.get(url).then(
            response => {
                setGoal(response.data);
            }
        );
    }, [id, navigate]);

    const handleRemove = () => {     
        const url = `${baseApiUrl}/goal/${id}`;   
        if (window.confirm("Вы уверены?")) {
            axios.delete(url).then(
                () => navigate("/")
            );
        }
    }

    const handleUpdate = () => { 
        const url = `${baseApiUrl}/goal/${id}`;       
        const goalToSend = { ...goal, status: statusMap[goal.status] };
        axios.put(url, goalToSend).then(
            () => navigate("/")
        );
    }

    return (
        <div className="container mt-5">
            <h2>Детали задачи</h2>
            <div className="mb-3">
                <label className="form-label">Имя задачи:</label>
                <input
                    className="form-control"
                    type="text"
                    value={goal.name}
                    onChange={(e) => { setGoal({ ...goal, name: e.target.value }) }}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Описание задачи:</label>
                <input
                    className="form-control"
                    type="text"
                    value={goal.description}
                    onChange={(e) => { setGoal({ ...goal, description: e.target.value }) }}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">Статус задачи:</label>
                <select className="form-select"
                    value={reverseStatusMap[goal.status]}
                    onChange={(e) => { setGoal({ ...goal, status: e.target.value }) }}>
                    <option value="Новая">Новая</option>
                    <option value="В работе">В работе</option>
                    <option value="Завершена">Завершена</option>
                    <option value="Отменена">Отменена</option>
                </select>
            </div>
            <button
                className="btn btn-success me-2" onClick={handleUpdate}>
                Обновить
            </button>
            <button
                className="btn btn-danger me-2" onClick={handleRemove}>
                Удалить
            </button>
            <button
                className="btn btn-primary me-2" onClick={() => { navigate("/") }}>
                Назад
            </button>
        </div>
    );
};

export default GoalDetails;
