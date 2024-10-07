import { useState } from 'react'
import './App.css'

function App() {

  const [tareas, setTareas] = useState([])

  const [tipo, setTipo] = useState(-1)
  const [titulo, setTitulo] = useState('')

  const tipoChange = (e) => {
    e.preventDefault()
    setTipo(e.target.value)
  }

  const tituloChange = (e) => {
    e.preventDefault()
    setTitulo(e.target.value)
  }

  const submit = (e) => {
    e.preventDefault()
    if (tipo >= 0 && titulo.length > 0) {
      setTareas([...tareas, {titulo, tipo}])
      setTitulo('')
      setTipo(-1)
    }
  }

  return (
    <>
     {/* Seccion crear tarea */}
      <div>
        <form onSubmit={submit}>
          <input name='titulo' onChange={tituloChange} type="text" value={titulo} placeholder="Titulo de la tarea" />
          <select name='tipo' onChange={tipoChange} value={tipo}>
            <option value={-1}> -- Estado de la tarea -- </option>
            <option value={0}>Pendiente</option>
            <option value={1}>Completada</option>
          </select>
          <button type='submit'>Crear</button>
        </form>
      </div>

      {/* Seccion listar tareas */}
      <div>
        {
          tareas && tareas.map((item, index) => {
            return (
              <><h3>{item.titulo}</h3><h4>{
                item.tipo === '0' ? 'Pendiente' : item.tipo === '1' ? 'Completada' : ''
              }</h4></>
            )
          })
        }
      </div>
    </>
  )
}

export default App
