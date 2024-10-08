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
                              <h3 className="name">{name}</h3>
                              <p className="prazo">{dataFormatada}  às  {horarioFormatado}</p>
                         </div>
                         <XCircle size={40} className="apagar" onClick={handleDelete}/>
                    </div>
                    <textarea className="description" disabled>{description}</textarea>
               </div>
          </>
     )
}

export default Task