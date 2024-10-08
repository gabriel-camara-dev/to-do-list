import './search.css'
import { MagnifyingGlass } from 'phosphor-react'
import { useState, useEffect } from 'react'

function Search({tasks, setTasksFiltradas}) {
     const [searchTerm, setSearchTerm] = useState('');

     useEffect(() => {
     const tasksFiltradas = tasks.filter((task) =>
          task.name.toLowerCase().includes(searchTerm.toLowerCase()));

     setTasksFiltradas(tasksFiltradas);
     }, [searchTerm, tasks, setTasksFiltradas])

     const handleChange = (e) => {
     setSearchTerm(e.target.value);
     };

     return (
          <>
               <div className="search_box">
                    <input 
                         type="text"
                         className="search_input" 
                         placeholder='Digite o nome da tarefa...'
                         value={searchTerm}
                         onChange={handleChange}/>
                    <MagnifyingGlass size={32} className='search_button'/>
               </div>
               <hr />
          </>
     )
}

export default Search