const GoalDetails = () => {
    return (
        <div className="container mt-5">
            <h2>Детали задачи</h2>
            <div className="mb-3">
                <label className="form-label">Имя задачи:</label>
                <input
                    className="form-control"
                    type="text"
                    // value={}
                    onChange={(e) => { }}>
                </input>
            </div>
            <div className="mb-3">
                <label className="form-label">Описание задачи:</label>
                <input
                    className="form-control"
                    type="text"
                    // value={}
                    onChange={(e) => { }}>
                </input>
            </div>
            <div className="mb-3">
                <label className="form-label">Статус задачи:</label>
                <input
                    className="form-control"
                    type="text"
                    // value={}
                    onChange={(e) => { }}>
                </input>
            </div>
            <button
                className="btn btn-primary me-2" onClick={(e) => { }}>
                Обновить
            </button>
            <button
                className="btn btn-primary me-2" onClick={(e) => { }}>
                Удалить
            </button>
            <button
                className="btn btn-primary me-2" onClick={(e) => { }}>
                Назад
            </button>
        </div>
    )
};

export default GoalDetails;