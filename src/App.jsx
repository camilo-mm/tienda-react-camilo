import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { useState } from 'react'
import './assets/icon.css'
import './scss/App.scss'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element= { <ItemListContainer greeting={"Saludos, Bienvenido a la tienda de Camilo"} /> } />
        <Route path='detail/:productId' element={<ItemDetailContainer />}  />
        <Route path='category/:category' element={<ItemListContainer greeting={"Saludos, Bienvenido a la tienda de Camilo"} /> }  />
        
        {/*esto podría ir a 404 y crear un componente que sea 404 parque sea una busqueda vacía */}
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
