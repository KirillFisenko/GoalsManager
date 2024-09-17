import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const baseApiUrl = "https://localhost:7267";

const statusMap = {
    "Новая": 0,
    "В работе": 1,
    "Завершена": 2,
    "Отменена": 3
};

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
        ).catch(
            err => {
                console.log(err);
                navigate("/");
            }
        );
    }, [id, navigate]);

    const handleRemove = () => {
        const url = `${baseApiUrl}/goal/${id}`;
        if (window.confirm("Вы уверены?")) {
            axios.delete(url).then(
                () => navigate("/")
            ).catch(
                err => console.log("Ошибка удаления", err)
            );
        }
    }

    const handleUpdate = () => {
        const url = `${baseApiUrl}/goal/${id}`;
        const goalToSend = { ...goal, status: statusMap[goal.status] };
        axios.put(url, goalToSend).then(
            () => navigate("/")
        ).catch(
            err => console.log("Ошибка обновления", err)
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
                    value={goal.status}
                    onChange={(e) => { setGoal({ ...goal, status: e.target.value }) }}>
                    <option value="Новая">Новая</option>
                    <option value="В работе">В работе</option>
                    <option value="Завершена">Завершена</option>
                    <option value="Отменена">Отменена</option>
                </select>
            </div>
            <button
                className="btn btn-primary me-2" onClick={handleUpdate}>
                Обновить
            </button>
            <button
                className="btn btn-primary me-2" onClick={handleRemove}>
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
