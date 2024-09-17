import axios from 'axios';
import { useState, useEffect } from "react";
import TableTask from "./layout/TableTask/TableTask";
import FormTask from "./layout/FormTask/FormTask";
import { Route, Routes } from 'react-router-dom';
import GoalDetails from './layout/GoalDetails/GoalDetails';

const baseApiUrl = "https://localhost:7267";
const url = `${baseApiUrl}/Goal`;

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get(url).then(
      res => setTasks(res.data)
    );
  }, []);

  const addTask = (taskName, taskDescription, taskStatus) => {
    const newId = tasks.length === 0 ?
      1
      :
      Math.max(...tasks.map(e => e.id)) + 1;

    const item = { id: newId, name: taskName, description: taskDescription, status: Number(taskStatus) };
    axios.post(url, item);
    setTasks([...tasks, item]);
  }

  const deleteTask = (id) => {
    if (window.confirm("Вы уверены?")) {
      axios.delete(`${url}/${id}`)
      setTasks(tasks.filter(item => item.id !== id));
    }
  }

  return (
    <div className="container mt-5">
      <Routes>
        <Route path='/' element={
          <div className="card">
            <div className="card-header">
              <h1>Список задач</h1>
            </div>
            <div className="card-body">
              <TableTask
                tasks={tasks}
                deleteTask={deleteTask}
              />
              <FormTask
                addTask={addTask}
              />
            </div>
          </div>
        } />
        <Route path='goal/:id' element={< GoalDetails />} />
      </Routes>
    </div>
  )
}

export default App;
