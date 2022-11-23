import { useState } from 'react'
import './assets/icon.css'
import './scss/App.scss'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <ItemListContainer greeting={"Saludos, Bienvenido a la tienda de Camilo"} />
    </>
  )
}

export default App
