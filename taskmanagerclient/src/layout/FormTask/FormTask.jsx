
const FormTask = (props) => {
    return (
        <div>
            <div className="mb-3">
                <form>
                    <div className="mb-3">
                        <label className="form-label">Имя задачи:</label>
                        <input className="form-control" type="text"></input>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Описание задачи</label>
                        <textarea className="form-control" type="text"></textarea>
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Статус задачи</label>
                        <input className="form-control" type="text"></input>
                    </div>
                </form>
            </div>
            <div>
                <button className="btn btn-primary"
                onClick={() => { props.addTask() }}
                >
                    Добавить задачу
                </button>
            </div>
        </div>
    )
};

export default FormTask;