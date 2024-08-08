import { useState } from "react";
import TableTask from "./layout/TableTask/TableTask"
import FormTask from "./layout/FormTask/FormTask";

const App = () => {

  const [tasks, setTasks] = useState([
    { id: 5, name: 'Задача 1', description: 'Описание задачи 1', status: 'Новая' },
    { id: 2, name: 'Задача 2', description: 'Описание задачи 2', status: 'Новая' },
    { id: 6, name: 'Задача 3', description: 'Описание задачи 3', status: 'Новая' },
    { id: 3, name: 'Задача 4', description: 'Описание задачи 4', status: 'Новая' }
  ]);

  const addTask = () => {
    const newId = tasks.sort((x, y) => x.id - y.id)[tasks.length - 1].id + 1;
    const item = { id: newId, name: 'Задача new', description: 'Описание задачи new', status: 'Новая' };
    setTasks([...tasks, item]);
  }

  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">
          <h1>Список задач</h1>
        </div>
        <div className="card-body">
          <TableTask tasks={tasks} />
          <FormTask addTask={addTask}/>
        </div>        
      </div>
    </div>
  )
}

export default App