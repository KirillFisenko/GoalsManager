import axios from 'axios';
import { useState, useEffect } from "react";
import TableTask from "./layout/TableTask/TableTask";
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import GoalDetails from './layout/GoalDetails/GoalDetails';
import AppendTask from './layout/FormTask/AppendTask';

const baseApiUrl = "https://localhost:7267";
const url = `${baseApiUrl}/Goal`;

const App = () => {
  const [tasks, setTasks] = useState([]);
  const location = useLocation();
  useEffect(() => {
    axios.get(url).then(
      res => setTasks(res.data)
    );
  }, [location.pathname]);

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
              <Link
                to="/append"
                className="btn btn-success btn-sm">
                Создать задачу
              </Link>
            </div>
          </div>
        } />
        <Route path='goal/:id' element={< GoalDetails />} />
        <Route path='append' element={< AppendTask />} />
      </Routes>
    </div>
  )
}

export default App;
