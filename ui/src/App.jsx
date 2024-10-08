import { useState } from 'react'
import './App.css'

function App() {

  const [task, setTask] = useState({
    name: '',
    description: '',
    prazo: '',
    horario: '',  
  })

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

  return (
    <>
      <main>
        <h1>To do list</h1>
        <div>
          <form onSubmit={handleSubmit}>
            <button type='submit'>Create Task</button>
            <div className='label-input'>
              <label htmlFor='name'>Nome da tarefa</label>
              <input type="text" value={task.name} onChange={handleChange} name='name' required/>
            </div>
            <div className='label-input'>
              <label htmlFor='description'>Descrição da tarefa</label>
              <textarea name="description" value={task.description} onChange={handleChange} resize="none" required></textarea>
            </div>
            <div className="label-input">
              <label htmlFor="prazo">Prazo</label>
              <input type="date" value={task.prazo} onChange={handleChange} name="prazo" required/>
            </div>
            <div className="label-input">
              <label htmlFor="horario">Horario</label>
              <input type="time" value={task.horario} onChange={handleChange} name="horario" required/>
            </div>
          </form>
        </div>
        </main>
    </>
  )
}

export default App
