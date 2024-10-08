import { useState, useEffect } from 'react'
import './App.css'
import Task from './components/Task'

function App() {

  const [task, setTask] = useState({
    name: '',
    description: '',
    prazo: '',
    horario: '',  
  })

  const [tasks, setTasks] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch('http://localhost:3000/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
      })

      if (response.ok) {
        const data = await response.json();
        console.log('Tarefa criada:', data);

        setTask({ name: '', description: '', prazo: '', horario: '' });

        setTasks([data, ...tasks]);
      } else {
        console.error('Erro ao criar a tarefa:', response.statusText);
      }
    } catch (error) {
      
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({
      ...task,
      [name]: value
    });
  };

  useEffect(() => {
    fetch('http://localhost:3000/tasks')
      .then((response) => response.json())
      .then((data) => setTasks(data))
      .catch((error) => console.error('Erro ao buscar tarefas:', error))
  }, [])

  const handleDeleteTask = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/tasks/${id}`, {
        method: 'DELETE',
      })
      if (response.ok) {
        setTasks(tasks.filter(task => task.id !== id))     
        console.log('Tarefa deletada com sucesso')
      } else {
        console.error('Erro ao deletar a tarefa:', response.statusText)
      }

    } catch (error) {
      console.error('Erro ao deletar a tarefa:', error)
    }
  }

  return (
    <>
      <main>
        <div className='creating-task'>
          <h1>To do list</h1>
          <form onSubmit={handleSubmit}>
            <div className='label-input'>
              <label htmlFor='name'>Nome da tarefa</label>
              <input type="text" value={task.name} onChange={handleChange} name='name' required/>
            </div>
            <div className='label-input'>
              <label htmlFor='description'>Descrição da tarefa</label>
              <textarea name="description" value={task.description} onChange={handleChange} resize="none"></textarea>
            </div>
            <div className="label-input">
              <label htmlFor="prazo">Prazo</label>
              <input type="date" value={task.prazo} onChange={handleChange} name="prazo" required/>
            </div>
            <div className="label-input">
              <label htmlFor="horario">Horario</label>
              <input type="time" value={task.horario} onChange={handleChange} name="horario" required/>
            </div>
            <button type='submit' className='create'>Create Task</button>
          </form>
        </div>
          <div>
            {tasks.length > 0 ? (
              tasks.map((task) => (
                <div className='task-app'>
                  <Task
                    key={task.id}
                    id={task.id}
                    name={task.name}
                    description={task.description}
                    prazo={task.prazo}
                    horario={task.horario}
                    onDelete={handleDeleteTask}
                  />
                </div>
              ))
            ) : (
              <p>Nenhuma tarefa encontrada</p>
            )}
          </div>
        </main>
    </>
  )
}

export default App
