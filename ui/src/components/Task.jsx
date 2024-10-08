import "./task.css"
import { XCircle } from "phosphor-react"

function Task({id, name, prazo, description, horario, onDelete}) {

     const dataPrazo = new Date(prazo)
     const dataFormatada = dataPrazo.toLocaleDateString('pt-BR')
     const horarioFormatado = horario.slice(0, 5)

     const handleDelete = () => {
          onDelete(id)
     }

     return (
          <>
               <div className="task">
                    <div className="first-line">
                         <div>
                              <input className="name" value={name} readOnly/>
                              <input className="prazo" value={`${dataFormatada} às ${horarioFormatado}`} readOnly/>
                         </div>
                         <XCircle size={80} className="apagar" onClick={handleDelete}/>
                    </div>
                    <textarea className="description" disabled>{description}</textarea>
               </div>
          </>
     )
}

export default Task