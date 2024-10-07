import { useState } from "react"

function App() {

  const [numero, setNumero] = useState(0)

  const incremento = () => {
    setNumero(numero+1)
  }

  const decremento = () => {
    if (numero >= 1) setNumero(numero-1)
  }

  const reiniciar = () => {
    setNumero(0)
  }

  return (
    <>
      <h1>Contador</h1>
      <div>
        <h2>{numero}</h2>
        <button onClick={decremento}>Decremento</button>
        <button onClick={incremento}>Incremento</button>
        <button onClick={reiniciar}>Reiniciar</button>
      </div>
    </>
  )
}

export default App
