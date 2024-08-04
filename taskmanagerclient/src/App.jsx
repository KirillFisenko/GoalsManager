import TableTask from "./layout/TableTask/TableTask"

const tasks = [
  {id: 1, name: 'Задача 1', description:  'Описание задачи 1', status: 'Новая'},
  {id: 2, name: 'Задача 2', description:  'Описание задачи 2', status: 'Новая'},
  {id: 3, name: 'Задача 3', description:  'Описание задачи 3', status: 'Новая'}
]

const App = () => {
  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-header">
          <h1>Список задач</h1>
        </div>
        <div className="card-body">
          <TableTask tasks={tasks}/>
        </div>
      </div>
    </div>
  )
}

export default App