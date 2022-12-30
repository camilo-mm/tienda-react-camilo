import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { useState } from 'react'
import './assets/icon.css'
import './scss/App.scss'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { CartContextProvider } from './context/CartContext'
import CartContainer from './components/CartContainer/CartContainer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <CartContextProvider>

        <NavBar />
        <Routes>
          <Route path='/' element= { <ItemListContainer greeting={"Saludos, Bienvenido a la tienda de Camilo"} /> } />
          <Route path='detail/:productId' element={<ItemDetailContainer />}  />
          <Route path='category/:category' element={<ItemListContainer greeting={"Saludos, Bienvenido a la tienda de Camilo"} /> }  />
          <Route path='cart' element={<CartContainer />}  />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>

      </CartContextProvider>
    </BrowserRouter>
  )
}

export default App
