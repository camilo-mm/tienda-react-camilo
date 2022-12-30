import { useState, createContext, useContext } from 'react'

const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) => {

    const [cartList, setcartList] = useState([])

    
    const addToCart = (product) =>{
        const ind = cartList.findIndex(prod => prod.id === product.id)
        if (ind !== -1) {
            cartList[ind].quantity +=  product.quantity
            setcartList( [ ...cartList ] ) 
        } else {
            setcartList([...cartList, product])
        } 
        
    }

    const clearCart = () =>{
        setcartList([])
    }

    const totalItemsOnCart = ()=> cartList.reduce((cont, prod) => cont += prod.quantity , 0) 
    const valueTotal = ()=> cartList.reduce((cont, prod) => cont += (prod.quantity * prod.price) , 0) 


    return(
        <CartContext.Provider value={{
            cartList,
            addToCart,
            clearCart,
            totalItemsOnCart,
            valueTotal
        }}>
            {children}
        </CartContext.Provider>
    )
}