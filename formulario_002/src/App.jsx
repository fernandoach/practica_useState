import { useState } from 'react'
import './App.css'

function App() {
  const [usuario, setUsuario] = useState('')
  const [password, setPassword] = useState('')

  const usuarioChange = (e) => {
    e.preventDefault()
    setUsuario(e.target.value)
    console.log(usuario, ' +++++ ', password)
  }

  const passwordChange = (e) => {
    e.preventDefault()
    setPassword(e.target.value)
    console.log(usuario, ' +++++ ', password)
  }

  const submit = (e) => {
    e.preventDefault()

    if (usuario === 'admin' && password === '1234') {
      alert('Bienvenido admin')
    }
    else{
      alert('Usuario o contraseña incorrectos')
    }

  }

  return (
    <>
      <form onSubmit={submit}>
        <input name='usuario' onChange={usuarioChange} type='text' placeholder='Ingresa tu nombre de usuario' />
        <input name='password' onChange={passwordChange} type='password' placeholder='Ingresa tu contraseña' />
        <button type='submit'>Ingresar</button>
      </form>
    </>
  )
}

export default App
