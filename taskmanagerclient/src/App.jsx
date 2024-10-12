import axios from 'axios';
import { useState, useEffect } from "react";
import TableGoal from "./layout/TableGoal/TableGoal";
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import GoalDetails from './layout/GoalDetails/GoalDetails';
import AppendGoal from './layout/FormGoal/AppendGoal';
import { baseApiUrl } from './config';

const url = `${baseApiUrl}/Goal`;

const App = () => {
  const [goal, setGoals] = useState([]);
  const location = useLocation();
  useEffect(() => {
    axios.get(url).then(
      res => setGoals(res.data)
    );
  }, [location.pathname]);

  const deleteGoal = (id) => {
    if (window.confirm("Вы уверены?")) {
      axios.delete(`${url}/${id}`)
      setGoals(goal.filter(item => item.id !== id));
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
              <TableGoal
                goals={goal}
                deleteGoal={deleteGoal}
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
        <Route path='append' element={< AppendGoal />} />
      </Routes>
    </div>
  )
}

export default App;
